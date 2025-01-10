---
categories: "Development News"
author: "joreg"
date: "2016-07-27"
title: "How TUIO do?"
slug: "how-tuio-do"
description: ""
imported: "true"
thumb: "tuio_logo.png"
---


![](tuio_logo.png)

## Short Version

vvvv now has native support for both sending and receiving //legacy.vvvv.org/downloads/previews
The following nodes are available in latest [alphas](https://legacy.vvvv.org/downloads/previews):
* TUIOCursor (Network Join/Split)
* TUIOObject (Network Join/Split)
* TUIOBlob (Network Join/Split)
* TUIOBundler (Network)

![](tuio.gif) 

For receiving TUIO messages the individual split nodes can be used directly. The TUIOBundler is used for combining different types of TUIO messages in order to send them in one bundle. 

## Some Background

vvvv has long had support for [TUIO](http://tuio.org), a protocol for receiving data from multitouch surfaces. The {{< node "TUIODecoder (Network)" >}}  was contributed to the addonpack by {{< user "Abomb" >}} years ago. 

It did what it was supposed to with only two caveats: 
* since it used an input of type *String* it had troubles on windows systems with non-standard string encodings
* it was only a decoder, lacking an encoder to also be able to send TUIO messages

[Enter VL](https://betadocs.vvvv.org/using-vvvv/vl.html): While preparing the standard library for VL it was a good exercise to create probably the worlds-first implementation of the TUIO protocol in a visual programming language. And since we can make nodes we have in VL available as nodes in vvvv it was a just a few more clicks to make the new implementation even useable for non-vl patchers. You're welcome!

There is more to the nerds pleasing: TUIO is based on the [OSC](http://opensoundcontrol.org) protocol which meant that before being able to implement TUIO, we needed an implementation of the OSC protocol. As we've pointed out before, in VL we have the possibility to import .net libraries. So one way to support OSC in VL would have certainly been to import one of the many existing OSC libraries for .net. In fact we did that and it was good to see that it just worked. Still the real challenge of course was to also create possibly the worlds-first implementation of OSC in a visual programming language. So here we are..

![](tuio-vl.png)
*Snippet of the TUIO implmentation in VL*

If you're interested in the implementations have a look at the VL files in:
 \packs\VL.IO.OSC
 \packs\VL.IO.TUIO
Otherwise just go ahead, use the nodes in vvvv and please report your findings in the comments or in the [alpha forum](https://discourse.vvvv.org).


