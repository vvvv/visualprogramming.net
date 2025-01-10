---
categories: "Development News"
author: "Elias"
date: "2012-07-24"
title: "ISpread vs IStream"
slug: "ispread-vs-istream"
description: ""
imported: "true"
---


the upcoming vvvv release (beta28) will contain a new way of accessing pin data by using the [IStream](https://legacy.vvvv.org/pluginspecs/html/T_VVVV_Utils_Streams_IStream.htm) interface. please note that it's just "a new way" and not "the new way" as its usage is much more complicated than ISpread and it will only be superior to ISpread if the plugin you want to write accesses its data sequentially.

if you don't mind writing much more complicated code in order to squeeze out every last bit of performance, read on, otherwise you can safely skip this blog post.
<!--break-->
## the reason behind IStream

to answer the question why this new IStream interface was introduced and what it's for, let's have a look at the history of vvvv's plugin interface.

the first step to open up vvvv's internas to the managed world of c# plugins was the introduction of the IPluginIO interface. this interface merley gives access to the most used pin types: values, strings, colors, transforms and the generic node datatype. it provides methods to get and set the slice count of a pin and reading and writing data to it.
as the read and write methods come with quite some overhead in terms of performance (crossing the boundaries of the managed plugin and unmanaged vvvv world) new methods were added which give direct access to the underlying unmanaged data pointer.

this way one could write very fast plugins but the code one had to write in order to achieve this was very clumpsy, not c# like and in some cases hard to maintain, as code had to be copied in order to support additional data types. another issue was the handling of multi dimensional spreads (bin size pin) as there was no common way to deal with them.

to solve these issues we introduced the ISpread interface. it is a generic interface, meaning it can deal with any datatype there is, the access to the data is done with simple indexers and dealing with multi dimensional spreads was nothing more than writing ISpread<ISpread<T>>.

but this ease of use comes with a drawback: an additional layer between the raw data and the plugin, which can cost quite some performance in cases where data only needs to be accessed sequentially. in order to understand this let's see how the ISpread layer works:
1. to avoid many conversions between the raw data type in vvvv and the actual data type used by the plugin (for example in a plugin one wants to use int whereas vvvv only understand double) and to support multi dimensional spreads an array is created on the managed side and each frame all the raw data from vvvv is converted and copied into this array.
2. each data access is done via the indexers which need to do a modulo on the index due to the nature of ISpread. index out of bounce exceptions are unkown to any vvvv user, right? :) more importantly the modulo is necessary to support the way all nodes of vvvv work.

**point 1)** is perfectly fine if the access of your plugin to the data is randomly but what if you know up ahead that your plugin will only read the data once, one slice after another or so to speak sequentially? in that case you pay for a higher memory usage as the conversion of the data will be all you need.  
**point 2)** is fine too if the access is randomly but again if you know you'll access the data sequentially isn't there a way to avoid all these modulos if some sort of mechanism would be clever enough to look ahead and see that for the next n accesses there's no modulo needed as there's still enough data left to read?

this is where IStream comes in. the methods it exposes are designed for a sequential data access.

## how does it work

the concept of streams is an old one, you can find it in nearly every language. the basic idea is to operate on chunks of data instead of operating on slices of data therefor saving lots of method calls. we could also say that the ISpread interface is chatty whereas the IStream interface is chunky.

**reading** from a stream is done by creating a small buffer and reading a chunk of data into it.
**writing** to a stream is done by creating a small buffer, filling it with a chunk of data and writing that chunk in one go to the stream.

{{< box >}}
Note:
in contrast to many other stream implementations where you'll find those read and write methods on the stream itself, we decided to put those methods into so called stream reader and stream writer interfaces in order to support scenarios where multiple threads want to read or write from one stream. the reason for this decision is that after a read or write operation a position property on the reader or writer is increased by the amount of data read or written so a subsequent call will continue where the previous left off. this concept would fail if both threads used the same position property.
{{< /box >}}

**seeking** in a stream is done by setting the before mentioned position property on the reader or the writer.

with all this in mind here is an example how reading an entire stream looks like:
```
var buffer = new T[](1024);
using (var reader = stream.GetReader())
{
  while (!reader.Eos)
  {
    var numSlicesRead = reader.Read(buffer, 0, buffer.Length);
    for (int i = 0; i < numSlicesRead; i++)
    {
      var slice = buffer[](i);
      // Do something with the slice
    }
  }
}
```

## stream vs spread

first of all, streams are **not** a replacement for spreads. they simply provide a different access pattern to the underlying data.

ISpread is perfect to access data randomly, IStream is perfect to access data sequentially.

as a matter of fact the ISpread implementation of vvvv was rewritten by using streams in order to copy the raw vvvv data into their internal managed array. copying data is probably the best example for a sequential access pattern and as we'll see, streams are doing that kind of thing perfectly well, so why not use them in order to setup spreads.

so up till now the implementation of the plugin interface looked like this:
  IPluginIO <- ISpread
now it's like this:
  IPluginIO <- IStream <- ISpread

### running time

let's write the previous example with a spread:
```
for (int i = 0; i < spread.SliceCount; i++)
{
  var slice = spread[](i);
  // Do something with the slice
}
```

the code is much simpler and therefor looks faster at a first glance but counting the actual method calls including the not so cheap modulo operations we'll see that the stream will win:

say 
  N = input slice count
  B = buffer length
  
method calls using stream:
  1 x GetReader()
  1 x reader.Dispose()
  N / B x Eos
  N / B x reader.Read()
  0 x i mod N

method calls using spread:
  N x spread.SliceCount
  N x spread[](i)
  N x i mod N

if B > N it comes down to 4 method calls versus 2 * N method calls + N modulo ops
if B < N it comes down to 2 * N / B method calls versus 2 * N method calls + N modulo ops

note that this example was fairly simple as it had only one input, but what about reading multiple inputs?
doing that with spreads is easy, instead of counting up to N we compute the maximum slice count (maxN) and let i count up to maxN, while accessing each spread simply with index i, the implicit modulo access of the spread will make sure that we won't get an out of bounds exception:

```
var maxN = spread1.CombineWith(spread2);
for (int i = 0; i < maxN; i++)
{
  var slice1 = spread1[](i);
  var slice2 = spread2[](i);
  // Do something with slice1 and slice2
}
```

method calls:
  1 x CombineWith
  2 * maxN x spread[](i)
  2 * maxN x i mod maxN

now how do we achieve the same behaviour with streams?
first of all the stream interface is somewhat dumber than the spread interface as it won't check for out of bounds scenarios and once read or written to the end it will simply stay there (EOS property == true) and it would be the responsibility of the user to reset it (set its position to zero) and start from the beginning. writing code that way to get the same behaviour as the spread example would therefor be quite a headache.
to solve this issue a special reader was introduced, which can be fetched from a stream by calling the extension method GetCyclicReader. the cyclic reader will simply start to read from the beginning once it reaches the end of the stream.
therefor a call to Read will always return as many elements as requested. we therefor need to be careful how many elements we request or we might do too much work. let's have a look at the example code:

```
var maxN = stream1.CombineWith(stream2);
var buffer1 = new T[](1024);
var buffer2 = new T[](1024);
var reader1 = stream1.GetCyclicReader();
var reader2 = stream2.GetCyclicReader();
try
{
  var numSlicesToRead = maxN;
  while (numSlicesToRead > 0)
  {
    var blockSize = Math.Min(numSlicesToRead, buffer.Length);
    reader1.Read(buffer1, 0, blockSize);
    reader2.Read(buffer2, 0, blockSize);
    for (int i = 0; i < blockSize; i++)
    {
      var slice1 = buffer1[](i);
      var slice2 = buffer2[](i);
      // Do something with slice1 and slice2
    }
    numSlicesToRead -= blockSize;
  }
}
finally
{
  reader1.Dispose();
  reader2.Dispose();
}
```

method calls:
  1 x CombineWith
  2 x GetReader()
  2 x reader.Dispose()
  maxN / B x Math.Min
  2 * maxN / B x reader.Read()
  maxN / B x i mod N

so comparing the second example we see that the numbers for the stream implementation in terms of method calls and modulo operations increased, but still only by a factor of maxN / B which is normally much less than maxN.

### memory consumption

there's one last issue to sort out. in the beginning of this blog post i promised a lower memory consumption for streams in comparison to spreads, as spreads will always copy the whole raw pin data into an internal managed array before the evaluate method gets called. streams don't do that, but what about those new array calls in order to create our buffers? doing that every frame seems like quite an overhead. 

a simple solution would be to move those buffers to the plugin class (private fields) but in that case the memory consumption would be much higher for small slice counts, as each plugin would allocate 1024 slices for each input, no matter what.

a better solution is to use a memory pool. 
the idea of a memory pool is to request some memory from it, use it for some time and once done put it back into the pool so another consumer can pick it up. 
so instead of creating a new buffer every time we enter the evaluate method we simply do a call to MemoryPool<T>.GetArray() and once we're done with it do a call to MemoryPool<T>.PutArray(). as the evaluate methods are called sequentially (vvvv is single threaded) there'll only be one evaluate method at work at a time and therefor all plugins can share the same buffers. say the maximum amount of pins used on a plugin is N, and each used buffer has a size of B we come to an overall memory consumption of N * B slices.
for example we have 50 plugins with an average pin count of 4, an average slice count of 100 and our buffer size is 1000 we come to an estimated memory footprint of 50 * 4 * 100 = 20k slices in case of spreads and 4 * 1000 = 4k slices in case of streams.

## conclusion

as i said in the beginning, if you feel the need to squeeze out every last bit of performance in your plugin, be my guest and have a look at streams. the results can be quite suprising ... in both ways, i told you about that sequential thing, right? ;)
but in all other cases stick with spreads. they're much easier to use, the code is cleaner and will therefor probably contain much less of those nasty little buggers.

you might ask yourself now why we even bothered introducing all this stream stuff, making everything that complicated just for that performance bit? well, for now i can only say they're supposed to be the groundwork for something bigger :)