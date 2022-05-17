---
categories: "Development News"
author: "joreg"
date: "2020-12-09"
title: "VL: New OSC and TUIO nodes"
slug: "vl-new-osc-and-tuio-nodes"
description: ""
imported: "true"
---


Here is,

another addition to the series of things that took too long. But then they also say that it is never too late... VL was shipping with [OSC](http://opensoundcontrol.org/) and [TUIO](http://tuio.org/) nodes from the beginning, but frankly, they were a bit cumbersome to use. So here is a new take on working with those two ubiquitous protocols:

# OSC
## Receiving OSC messages
To receive OSC messages you need to place an OSCServer node which you configure to the IP and Port you want to listen on. Immediately it will show you if it is receiving OSC messages at all on the *Data Preview* output.

Then use OSCReceiver nodes to listen to specific addresses. Either specify the address manually or, hit the "Learn" input to make the node listen to the address of the first OSC message it now receives.

![](oscreceiver.gif)

Note, that the OSCReceiver is generic, meaning it'll connect to whatever datatype you want to receive. Supported typetags are:
- i: Integer32, h: Integer64
- f: Float32, d: Float64
- s: String, c: Char
- r: RGBA color
- b: blob byte[]()
- T: true, F: false

In case of multiple floats, you can also directly receive them as vectors. And this works on spreads of the above types and even on tuples, in case you're receiving a message consisting of multiple different types.

![](osctuple.gif)

## Sending OSC messages
To send OSC messages you first need an OSCClient which you configure with a ServerIP and Port. Then you're using SendMessage nodes to specify the OSC address and arguments to send. Again note that the "Arguments" input is generic, so you can send any of the above types, spreads of those and even tuples combining different types!

![](oscsend.jpg)

By default, vvvv is collecting all the data you send and sends it out in bundles per frame. For optimal usage of UDP datagram size (depending on your network) you can even specify the maximum bundle size on the OSCClient node. 

These are the basics. There are a couple of more things which are demonstrated in the howto patches!

# TUIO
## Receiving TUIO data
For receiving TUIO data you're using a TUIOClient which you configure to the IP and Port you want to listen on. The client already returns a spread of cursors, objects and blobs that you can readily access.

![](tuioclient.jpg)

## Sending TUIO data
For sending TUIO data you're using a TUIOTracker node which you configure with a ServerIP and Port. Then you give it a spread of cursors, objects and blobs to send out. 

![](tuiotracker.jpg)

---

Available for testing now, in [latest 2020.3 previews](http://visualprogramming.net/#download)!