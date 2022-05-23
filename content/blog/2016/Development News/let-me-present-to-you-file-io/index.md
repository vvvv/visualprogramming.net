---
categories: "Development News"
author: "woei"
date: "2016-12-01"
title: "Let me present to you: File IO"
slug: "let-me-present-to-you-file-io"
description: ""
imported: "true"
---


previously on VL: [vl-progress-report-3](/blog/2016/vl-progress-report-3)
-----
{{< box >}}quote:Dave Skylark:
*same same, but different*{{< /box >}}
on the way to catch up with what you know and need from vvvv, the first choice for expanding VL core library was to work on file thingies. The following should look extremely familiar and probably quite unexciting for you:
![FileReader and FileWriter](ReaderWriter.png)
*the very basics needs*
These guys do exactly what you would expect them to do: **read from file**, respectively **write to a file**. as a convenience nodes you have string versions, the standard ones give you bytes.

-----

since it's 2016, these nodes do their work **asyncronously**, hence these output pins, which keep you informed about the working status, giving you the opportunity to draw some nice loading animation.
![async loading info](loading.gif)
*async working status info*

-----

it wouldn't quite feel like vvvv if the curious ones could not actually **peek inside** the node to see what's going on
![inside the FileReader](TheInside.png)
*the guts of the FileReader*
looks a bit overdone for such a simple thing, right?
the motive for the splitting up into File and the actual IO operation has a couple of (imho) good reasons:

####  chaining operations
![chaining io operations](Chaining.png)
no need anymore to load the whole file and then decide what to do with the content. you can for example parse the header of a video file, look up some frame offset and directly do a **partial read** of just the blob you are interested

####  control over file access
there are a bunch of ways to access files. now you can actually control all of that. one reason might be **security**, since you can decide, whether anyone else can read or write or even delete the file at the same time. you can set it to forcibly create a new file, so you don't accidentally overwrite something existing.
another reason is **performance**, you are welcome to dive into the deeps of the web to find out which combination of modes causes which thread to do the work. we tried to set the defaults for best performance for parallel reading.

####  stream stream stream
![Stream Operations](Operations.png)
*the ops: left blocking, right async; also available for strings*
the File node actually returns the File**Stream**. so all these operations can instantly be used with anything else, that is a stream (which is a lot of things in the .net world)
-----
{{< box >}}
Note:
while the async details here are still hidden away in the c# code of the nodes, the process has paved the way towards **general** patching of **threading/async** computation. stay tuned...
{{< /box >}}







