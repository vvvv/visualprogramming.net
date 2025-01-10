---
categories: "Development News"
author: "joreg"
date: "2015-05-11"
title: "vvvv50 & VL pack alpha"
slug: "vvvv50-vl-pack-alpha"
description: ""
imported: "true"
thumb: "vl-integration3.png"
---


dir lovvvvers of patching,

let us introduce to you: vvvv50 + the VL pack. 
What the VL? Short version: VL is a new object oriented visual programming language embedded into vvvv that allows you to create compiled vvvv-plugins on the fly. Later it will also be available as a standalone version that will allow you to save patches as executables. Interested in the long story? Read our [previous blogposts](/blog/2015/50-pre-release-roundup). 

vvvv50 is now available with the latest [alpha downloads](https://legacy.vvvv.org/downloads/previews) and includes the VL pack for you to try. 

![](vl-integration3.png) 
*Game logic patched in VL used as dynamic plugin in vvvv*

## What happened so far

To give you an idea of how the vvvv50 naming makes sense, a little history:
* vvvv10: early inhouse at meso
* vvvv20: early inhouse at meso
* vvvv30: initial version with visual programming UI (still inhouse)
* vvvv31: spreading revisited (inhouse)
* vvvv32: with subpatches, undo (inhouse)
* vvvv33: {{< contribution "vvvv33beta1" "initial public offering" >}}
* vvvv40: introduced the plugininterface
* vvvv45: introduced dynamic plugins (ie. a C# editor)
* vvvv50: introduces the VL editor
Interested in more history? Watch our [NODE08 Keynode](https://vimeo.com/63157880) where we went into more details about the early days of vvvv.

## Getting Started

Documentation is still very rough, we're on it. For now you have two entry points:

1) For getting started read the [Dynamic VL plugin reference](https://betadocs.vvvv.org/devvvveloping/dynamic-vl-plugin-reference.html) and then continue browsing [The Gray Book](https://www.gitbook.com/book/vvvv/the-gray-book). This is where we're going to put everything we know about VL. In order to help us focus on the right content for the book please ask questions in the [alpha forum](https://discourse.vvvv.org/) using the *VL* tag so we get an idea about the most pressing issues.

2) For just having a look check the girlpowers:
 \packs\VL\girlpower

## The Road Ahead

Since VL is in its very early days and it will still see quite some (hopefully not breaking) changes we're still trying to keep this a bit low-profile, ie. just among us, the existing vvvv community. Only later when there'll be a standalone release we'll make some more noise about this. 

For now we're hoping to get some of you interested in it enough so that together we can iron out the biggest buggers and prepare for a smooth standalone release we're optimistically targeting towards the end of the year.

Besides fixing bugs we also have tons of features planned and we want you to help us prioritize them. Watch out for a new blogpost with the title: "VL Feature Voting" that is still to come..

## Licensing

For now, when using VL integrated in vvvv, no additional licensing terms/costs apply, ie. free for non-commercial use, commercial use requires a [vvvv license](https://store.vvvv.org/). What an amazing deal!

Eager to support this? We always appreciate a flattr:
[/downloads|vvvv](flattr)