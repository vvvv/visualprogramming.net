---
categories: "Development News"
author: "joreg"
date: "2016-12-13"
title: "VL Progress Report /4"
slug: "vl-progress-report-4"
description: ""
imported: "true"
---


previously on VL: [VL: Many Paths Lead to Rome](/blog/2016/vl-many-paths-lead-to-rome)
---

Ahoi,

so while the features are freezing we're still cooking the bytes on a low temperature to get them all smooth..

### UI Performance

Finally we took the time to do a few performance tweaks on the UI. Not perfect but quite an improvement to what you've seen so far. Selecting nodes and moving them around is now definitely at interactive rates. What you'll still see is that your animations are interrupted while handling the patch. While this might be annoying in the first version of the VL integration, we have worked on the foundations for a non-blocking approach. So expect that to improve in the future. Just not now, priorities are to make everything work first.

### Clocks and Time

Previously all VL nodes which do time based calculations had to have an input pin for the time per operation. The default value for the Time type was set per frame by the VL runtime.
This is now different: You can make a Clock or a FrameClock input on the Create operation of your patch or type and store the clock in a pad to access the time in the other operations. This prevents you from making time inputs for every operation. The default value of the Clock if nothing is connected is the VL runtime frame clock.
The **Clock** type is very simple and only has a Time property.
The **FrameClock** has a additional property TimeDifference which holds the delta time since the last frame. This saves you from calculating the delta time everywhere on your own.

### Further

- there've been some fixes for high-dpi screens
- in the patch-explorer (topleft) unused properties now draw transparent
- vl-nodes in vvvv now turn red if there is an error in vl
- some unnecessary entries have been removed from the TypeChooser
- the nodebrowser now shows more help strings when hovering nodes
- the middleclick alternative (alt+leftclick) now also closes patches when pressing it on a tab
- new optional via settings:
 - MouseWheelZooms: true by default, vertical pan otherwise
 - NavigationShowCategoryDropDown: false by default, show C menu otherwise
 - NavigationShowNodeDropDown: false by default, show N menu otherwise
- press ctrl+0 to reset zoom/pan in a patch
- the Documentation Form (ctrl+M) now follows when navigating patches
- you can now type a pin as Spread<> to get a spread in vvvv (needed to be Sequence<> so far)
- defaults of pins now propagate upstream correctly
- a couple of tweaks/cleanups to the VL.CoreLib.vl

## Next Steps

If all goes well we'll see the beta35 (including VL as a first class patching language) release soon™ and with it we're entering phase 2 where we'll actively try to convince you to have a look at VL and actually start using it for your projects. At the risk of repeating myself.. this should be done by updating the gray book and providing a couple of introductory video tutorials. And then the world...
//legacy.vvvv.org/downloads/previews
If you want to get started with VL right now, here is what you do:
{{< box >}}
## Diving into VL

* download: [vvvv alpha downloads](https://legacy.vvvv.org/downloads/previews) 
* demos: see \girlpower\VL
* learn: [VL quick reference](https://betadocs.vvvv.org/devvvveloping/dynamic-vl-plugin-reference.html)
* discuss: [alpha forum](https://discourse.vvvv.org)
{{< /box >}}

If you want to let us know that you like anything you just read...we're always up for a comment or even a flattr:
[/downloads|vvvv](flattr)