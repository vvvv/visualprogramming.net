---
user: "microdee"
created: "1462892836"
---

it might have to do something with these changes: in here:
![title](http://i.imgur.com/bWh7VLs.jpg) 
AsValue freaking out like this:
```
System.OverflowException: Array dimensions exceeded supported range.
   at System.IO.ComAdapterStream.Read(Byte<)()() buffer, Int32 offset, Int32 count>
   at System.IO.TakeStream.Read(Byte<)()() buffer, Int32 offset, Int32 count>
   at System.IO.BinaryReader.ReadBytes(Int32 count)
   at VVVV.Nodes.Raw.AsValueNode.ConvertAllAtOnce(Stream srcStream, MemoryIOStream`1 dstStream, Double<)()() buffer, ValueTypeFormat format, ByteOrder byteOrder>
   at VVVV.Nodes.Raw.AsValueNode.Evaluate(Int32 spreadMax)
   at VVVV.Hosting.IO.PluginContainer.Evaluate(Int32 spreadMax)
```
But if I take out Take (note the pun) all fine.
Update: Any Raw sink node freaks out after Take in this situation
Update2: Problem occurs when raw stream coming from AsRaw (String) but AsRaw (Value) is fine  
