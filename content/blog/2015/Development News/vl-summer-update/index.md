---
categories: "Development News"
author: "joreg"
date: "2015-09-01"
title: "VL summer update"
slug: "vl-summer-update"
description: ""
imported: "true"
thumb: "eyetracking_sma_r.jpg"
---


dir lovvvvers of visual programming,

we've not talked about our progress on VL for a while. So here is what happened since its [initial public release](/blog/2015/vvvv50-vl-pack-alpha) at the [NODE15 keynode](https://vimeo.com/129085756).

## What the VL?
//legacy.vvvv.org/downloads/previews
VL is our next generation visual programming language that (for now only) integrates with vvvv as you know it and allows you to patch plugins for vvvv making use of its object oriented language features. You can test it by using the latest [alpha build](https://legacy.vvvv.org/downloads/previews) and following the [VL quick reference](https://betadocs.vvvv.org/devvvveloping/dynamic-vl-plugin-reference.html) as an introduction. If you encounter any problems, please get in contact using the [VL alpha forum](https://discourse.vvvv.org/).

In the future VL will be available in a standalone development environment with which you'll be able to deploy .net executables and .dlls that can be consumed by any other .net application. 

## What happened since node15

### Library

A lot of work has been done in the library. We first tried to focus on getting the basics complete. And I'd say we're about 90% there. Here is an overview of what you can now use:
* String/Char: more functionality than vvvv except a RegExpr node
* Color: more functionality than vvvv
* Math: more functionality than vvvv except an ExpressionParser node
* 2D: everything plus datatypes for Point, Size, Rect and Circle with all kinds of intersection utilities
* 3D: everything plus datatypes for Plane, Box, Sphere with all kinds of intersection utilities
* Transform: about 90% of all nodes known from vvvv
* DateTime nodes
* Animation/Logic nodes: about 80% of all nodes known from vvvv
* Serialization: nodes to de/serialize (if not too advanced) datatypes
* Collections: more spreading functionality than known from vvvv plus other collection types, like e.g. a Dictionary

As a bonustrack: quite a bit of the above functionality is patched, meaning you can inspect/change its functionality if needed and since everything is compiled the fact that something is patched is not slowing it down. Only the most basic stuff is imported from .net libraries and close to none of the functionality has been written by our hands! 

So what's missing is mostly:
* Audio/Video/Graphics/Physics 
* IO (File, Networking, Rs232, specific devices...)
* Databases
Those are arguably the big chunks indeed, but since we have plenty of those in vvvv already it should not be that big of a dealbreaker for a start. And anyway we're moving..

![](eyetracking_sma_r.jpg) 

Specifically we're in the process of importing a bit larger .net libraries to learn how we can work with them. The first tests resulted in a patched node for the [EyeTribe eyetracking](https://discourse.vvvv.org/t/theeyetribe-eyetracking-vl-plugin/13201) and the [3dConnexion spacemouse](https://discourse.vvvv.org/t/spacemouse-vl-plugin/13207) devices, all open for you to inspect. This is how in the future you will integrate any device. More to come..

###  UI

UK, so now that we're getting confident with the library what we're also working on is patchability.

Here is the biggest recent changes: 
* a [simple Typebrowser](/blog/2015/vl-type-browser-now-in-alpha-builds) now assists you with annotating pads 
* nodes with dynamic pin-counts, like the + node are now adding a new pin automatically when it has no more input free.
* use Ctrl+M to annotate your documents/types/operations. This info is used in both the vvvv and vl nodebrowsers.
* renaming a patch or an operation will also update all nodes referencing it.

And yes, much more to be done..

###  Language

Also languagewise a few things have happened. Here are some of the highlights:
* loops now understand a special "Alive" outlet. Should the "Alive" outlet evaluate to false the slice will not make it into the output spread...//legacy.vvvv.org/downloads/previews
* if-regions now have inlets. They provide the region with the value connected to the default input.
* the targetcode quality has been improved improving the overall runtime performance.

## The road ahead

We're quite happy with what the integration of VL into vvvv brings us and therefore instead of the VL standalone we now first concentrate on making VL a first-class language inside vvvv, ie. combining the powers of the two. Therefore we're now working towards beta35 which will be the first vvvv release that officially includes VL, expected around new-year. So take this time to check out the [latest alphas](https://legacy.vvvv.org/downloads/previews) and feed us back with your thoughts. The main question being: Are you able to express yourself within VL? Show us your patches and lets discuss where you meet limits. You know where to find us: [IRC](https://betadocs.vvvv.org/chat.html) and [alpha forum](https://discourse.vvvv.org/). We're very much looking forward to your input.

Then with beta35 we'll expect you to gradually incorporate VL into your projects. Implement parts of new projects in VL and still do the rendering parts in vvvv. While you'll be doing that we'll have some time to prepare the standalone release that at some point should finally convince you to completely move to the next generation of visual programming. But no need to rush it..one step at a time..

If you want to support our work we're happy about every single flattr:
[/downloads|vvvv](flattr)