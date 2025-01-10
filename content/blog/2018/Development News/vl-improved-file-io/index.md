---
categories: "Development News"
author: "joreg"
date: "2018-06-23"
title: "VL: Improved File IO"
slug: "vl-improved-file-io"
description: ""
imported: "true"
---


Here is to inform you about an update to general File input/output in VL available for testing in [latest alphas](https://legacy.vvvv.org/downloads/previews) today. Introduced [1.5years ago](/blog/2016/let-me-present-to-you-file-io) we've now completely reworked this from the ground up with the things we've learned so far. 

## Blocking

We noticed that even though obviously you'll often want file io to be non-blocking, there are cases where blocking makes sense. So we now give you the following:

![](callmenames-Roo_r.png)
*FileReader, FileReader (String), JSONReader, XMLReader*

![](callmenames-Root-Blocking%20Writer.png)
*FileWriter, FileWriter (String), JSONWriter, XMLWriter*

These are the most simple to use, very close to the comparable vvvv versions, only without error reporting, which we explain below.

## Non-Blocking

In the case we want to have our file io non-blocking we learned that most likely we don't only want to load the file but often also do some kind of "transformation" to the data before it is used further in the patch. Most likely this transformation should also be non-blocking and we only want to be informed when that part is done as well. Introducing:

![](callmenames-Root-Non-Blocking%20Reader.png)
*Read: Foreach file read, parse its content and pass it on.*
*HoldLatest returns the last data pushed to it.*
*On Data bangs when new data is available.*

Instead of returning the actual data of a file, those readers return an *Observable<Data>* which allows you to do some further processing to the data before you get access to it in the patch using a HoldLatest node. For more information on working with observables see the chapter [Reactive](https://vvvv.gitbooks.io/the-gray-book/content/en/reference/libraries/reactive.html).

The writers in turn also take an Observable<Data> and write whenever new data is pushed through the observable. Like this you can e.g. write data received from an input via an observable directly to a file without ever touching the mainloop:

![](callmenames-Root-Non-Blocking%20Writer.png)
*Read: Foreach Payload received via UDP, append to file result.txt*

## Naming Convention

While in vvvv we had different names for file accessing nodes, like: Reader (Raw), FileTexture (EX9.Texture), XFile (EX9.Geometry Load), MP3Parser (File), ... we decided on a new naming scheme for VL:

- all readers end on "Reader"
- all writers end on "Writer"
- the node is prefixed with a hint at the file-format it handles, like XMLReader, JSONReader
- more generic readers that don't read a specific format are called more generically, like FileReader, ImageReader, ..

Like this, typing "reader" or "writer" in the nodebrowser, you'll be guaranteed to find all available readers and writers.

## Error Handling

Reading or writing files can go wrong for different reasons and the system needs a way to inform you about this. Previously, error handling of reader/writer nodes was inconsistent. Some ignored errors, others reported "Success" or returned an "Error Message". Having realized error-handling has to be supported on a higher-level than individually on every node, we have now removed all error handling from those nodes.

Now what? Right, so the first thing you need to know: If an error occurs at runtime it will be catched by vl and the node will go pink, informing you of the problem. Often this is enough.

In case you want to react to an error in your patch we again have to differentiate between the blocking and non-blocking case:

## Blocking

The solution for the blocking case involves using the *experimental* `Try (Control)` region and looks like this:

![](SplitterTester-_r.gif)
*The experimental Try region catches the error that occured*

## Non-Blocking

In a non-blocking scenario you can use the `HoldLatestError (Reactive)` node like this:

![](SplitterTester-Root_2018.06.22-17.26.10.gif)
*HoldLatestError bangs and returns an error message*

