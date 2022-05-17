---
categories: "Development News"
author: "joreg"
date: "2019-07-31"
title: "VL: Tooltips"
slug: "vl-tooltips"
description: ""
imported: "true"
---


Here we go!

As mentioned previously, an update to how tooltips look and work, was one of the two main things missing before we call vvvv gamma a 1.0 release. And they have just landed in the [preview](/blog/2019/vvvv-gamma-2019.1-preview), horray!

Previously tooltips where text-only, rendered all in one style and often contained rather cryptic information. Now we have structured information that is nicely presented and we also tried to replace weird messages with human readable text where possible. 

## Nodes
Tooltips on nodes foremost show the nodes full name and category plus its "Summary" and "Remarks" help information in two separate paragraphs. Additionally, if available you'll see timing information, ie the amout of time the node needs to execute. Operation nodes can also show you the name of the operation they are currently executed on.

![](node1_1.png)
*A process node with summary, remarks and timings*

![](operation1.png) 
*Operation nodes can also show the operation they are called on*

In case a node has an error or warning, we try to help you understand what's going on by answering the following three questions:
* What is the problem we see?
* Why is this a problem?
* How can you deal with it?
* In case of warnings: When can this warning be ignored?
Also, while a warning/error tooltip is visible, pressing CTRL+C copies the message for convenient pasting, eg. in the forums.

![](nodeerror.gif)
*Toggle warning/error info by pressing SPACE*

## Pins
Tooltips on pins foremost show the pins name and datatype. For for primitive types (like numbers, strings, colors,...) that can easily be displayed, we also show the current value.

![](pintips.gif) 
*Pin tooltips showing name, type and value*

In cases of collections (like spread), we also show the current count and again, if the datatype is displayable, we now show up to three slices, as compared to the previously only one. 

![](collections.png) 
*Collections show up to three slices*

Oh, and the obvious:
![](imagetip2.gif)
*You're vlcome*

## Links
Tooltips on links are by default only visible, if the link has an error or warning. To get a tooltip showing on normal links, to see their datatype, press CTRL while hovering it.

![](linktips.gif)
*Links can show values too*

## Scaling
Zooming patches is nice, but we figured independent of that, we also want to be able to define the size of a tooltip. so zooming tooltips it is:

![](scaling.gif)
*Press CTRL while scrolling to zoom a tooltip*

## Explorer
Also the patch explorer got a bit more informative using the new tooltips.

![](explorer_0.gif)
*Tooltips on the patch explorer*

## Nodebrowser
Same goes for the nodebrowser, which should make it easier to find the right node as the summary and remarks are now much more pleasant to read. 

![](browser.gif)
*Tooltips in the nodebrowser*

## Settings
And finally, there are a now a couple of more settings to tweak for tooltips:
- Classic: enable to go back to the old style tooltip
- Scaling: default value for the tooltips size
- ShowAdvancedTimings: make process nodes show timings for individual operations
- ShowObjects: show innards of patched objects
- ShowLocalID: mostly for our internal debugging use
- ShowMoreInfo: default state of errors/warnings with more info 
- ShowOperation: which operation the node/pin/link is on
- ShowSymbolSource: which document the node is coming from
- ShowTimings: show or hide timings alltogether
- StdDelayInMilliSeconds: 

---

A few tweaks here and there and more viewers to come for more special datatypes over time...but the biggest part is hereby done. To test, [download the latest preview](/blog/2019/vvvv-gamma-2019.1-preview) and then please let us know what you think in the comments.