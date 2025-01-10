---
categories: "Development News"
author: "joreg"
date: "2016-09-06"
title: "VL Midsummer Night's Dream"
slug: "vl-midsummer-nights-dream"
description: ""
imported: "true"
thumb: "signature1.gif"
---


previously on VL: [VL Spring Update](/blog/2016/vl-spring-update)

Here we are now,

right when you wouldn't believe it could happen anymore: the cumulative changes on VL, which we've been talking about for months in previous updates (about an 80% rewrite of what we demoed at node15 - shall we even say something like this out loud?), have just landed in your belovvvved [daily alpha builds](https://legacy.vvvv.org/downloads/previews).
In other words: No big deal. 

## What does that mean for you?

Get it, use it and please help us by reporting problems [in our alpha forum](https://discourse.vvvv.org). But always remember this is still alpha-grade code, we're still aware of quite some buggers. If you try it and still think it is too annoying to work with, fair enough, it is definitely not for everyone yet. But we are confident enough with the current state that we thought some of you will be able to handle it. 

One important thing: As mentioned in the previous update, the file-format of .vl documents has changed, meaning: It can still open all old files but once you save them, your files are in the new format and will no longer load in older versions. Just so you know..

## More new things

Apart from the changes mentioned previously here are some more things you should know:
- Reach the Document Patch via ALT+P
- Create new patches in the Document Patch via NodeBrowser: type *Patch* (for utility operations), *Record* (immutable datatype) or *Class* (mutable datatype)
- Add Inputs/Outputs for operations via NodeBrowser typing *Input* or *Output* or by doubleclicking while making a connection
- What was Reader/Writer is now *Pad* via NodeBrowser or: add a property via the explorer and give it a name, then find it as a pad in the NodeBrowser under its own name
- Also create *IOBox*, *Loop*, *ForEach*, *Operation*, *Delegate* via NodeBrowser
- Make comments in a patch by typing anything in the NodeBrowser that is not a node (just like in vvvv)
- Add/Remove pins to/from nodes like + by pressing CTRL+/-
- Nudge selected nodes using the cursor-keys and nudge them more by holding down CTRL while you do

Regarding Pins, we already mentioned the separation into "implementation" and "signature" for utility-operations in the last update. Here is how this is looking now:

![](signature1.gif) 
*Ordering pins in the signature of a utility operation*

The signature (which defines the order of input- and output pins) is now hidden by default. You can bring it up with a click on the little triangle to change the order of pins as they will show up on the respective node.

What we forgot to mention last time, is that we got completely rid of the pin-bars for member-operations. In order to manipulate the signature of a member-operation just head over to the explorer and interact with the signature there.

![](signature2.gif)
*Ordering an operations pins in the explorer*

## Next Steps

By having those major changes back in the alpha-builds we're finally in a position again to have quicker release-cycles for bug-fixes and features which we'll happily provide on our road to beta35, which will be the first vvvversion that includes VL as a first-class patching language.

We'll need to put out a preliminary video-tutorial and update all documentation to show you how to work with those latest changes. 

And of course we don't forget about that library-thing where at some point we'll have to tell you how you can import/create your own nodes for VL. Pending... Just in case you missed it, the [Arduino Second Service](/blog/2016/arduino-second-service) was our latest big addition to the VL library.

If you want to get started right now, her//legacy.vvvv.org/downloads/previews
{{< box >}}
## Diving into VL

* download: [vvvv alpha downloads](https://legacy.vvvv.org/downloads/previews) 
* demos: see \packs\vlpack_..\girlpower 
* learn: [VL quick reference](https://betadocs.vvvv.org/devvvveloping/dynamic-vl-plugin-reference.html)
* discuss: [alpha forum](https://discourse.vvvv.org)
{{< /box >}}

If you want to let us know that you like anything you just read...we're always up for a comment or even a flattr:
[/downloads|vvvv](flattr)