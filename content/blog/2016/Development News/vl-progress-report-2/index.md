---
categories: "Development News"
author: "joreg"
date: "2016-11-03"
title: "VL Progress Report /2"
slug: "vl-progress-report-2"
description: ""
imported: "true"
thumb: "z11rJ31rs2.gif"
---


previously on VL: [VL Progress Report /1](/blog/2016/vl-progress-report-1)

and indeed,

just as planned, we're now making quicker progress as we have the previously mentioned big stones out of the way. Always still some to come, but things start to feel more and more solid and intuitive. We're also happy about the now frequent VL related bug-reports and questions in the forum. Keep them coming, very helpful! 

Here is a rough log of recent changes that you can now test in latest [alphas](https://legacy.vvvv.org/downloads/previews). Ordered by nerdness, simple ones first:
- IOBoxes can now be reset to their default using ALT+Rightclick
- more sensitive picking area for pins
- problems with the mouse sometimes hitting an element that is visually below the one you targeted are now fixed
- when creating any new element (property, operation, patch,..) the elements name is now in editmode, allowing you to choose a proper name without an extra ![](z11rJ31rs2.gif) 
- moving pins in the signature no longer throws random exceptions (don't forget to uncheck the default-on autosort checkbox before you do so)
- the coloring of member operations was broken in recent alphas and is back working
- IOBoxes no longer show "null" while being moved
- annotating pins/pads with a type that had no registered editor used to crash
- improved mergability of patches (when using versioncontrol like git) by introducing guids as identifiers for elements in the patch
- adaptive nodes now show the type they use in the context in their tooltip and if they have a patch you can now jump to that specific implementation directly via contextmenu->open![](DF9ow0hc7E.gif) 
- you can now return a Spread<Spread<>> (and even more) to vvvv and get according multiple BinSize bins (omg!)
- delegates now survive a hot-swap

## Next Steps

With strong support by [owner of the golden quad](https://www.flickr.com/photos/node-forum/17098233527/in/photostream/) {{< user "woei" >}} we're working on library basics, like File and Network IO. The goal is to have them as simple to use for standard use-cases as in vvvv, yet more flexible for more complex scenarios. In the process we're still learning about library design and taking notes for a guide to help future devlopers to make good nodes quickly. 

Progress is being made on the EditingFramework which will next see an update with a proper gizmo handling..

Work has begun on the previously mentioned unification of *Record*, *Class* and *Process* into one more easy to understand *Patch* and it is looking good already.. Otherwise bugs and fixes as per usual..

If you want to get started right now, here is what you do:
{{< box >}}
## Diving into VL//legacy.vvvv.org/downloads/previews

* download: [vvvv alpha downloads](https://legacy.vvvv.org/downloads/previews) 
* demos: see \packs\vlpack_..\girlpower 
* learn: [VL quick reference](https://betadocs.vvvv.org/devvvveloping/dynamic-vl-plugin-reference.html)
* discuss: [alpha forum](https://discourse.vvvv.org)
{{< /box >}}

If you want to let us know that you like anything you just read...we're always up for a comment or even a flattr:
[/downloads|vvvv](flattr)