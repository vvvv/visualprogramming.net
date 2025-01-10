---
categories: "Development News"
author: "joreg"
date: "2016-02-23"
title: "Introducing: The Editing Framework"
slug: "introducing-the-editing-framework"
description: ""
imported: "true"
---


For years now vvvv is shipping with little helper modules like the AxisAndGrid (EX9), Camera (Transform Softimage), PointEditor (3D)... and some more that are hopefully saving you a lot of time while patching. In fact the Camera was the very first module i ever built when we introduced the concept of subpatches. It didn't work well, so {{< user "gregsn" >}} took it over, fixed it and made it a [Softimage](https://en.wikipedia.org/wiki/Autodesk_Softimage) one as this was the software he was used to at that time...

Anyway, we maintained those modules over time but kinda failed to review/consolidate them. Not least because they were always a bit tricky to handle. While they look quite simple from the outside they are rather complex internally. And as you may have noticed, at certain complexities vvvv patches become a bit tedious to maintain... 

Entering [VL](https://betadocs.vvvv.org/using-vvvv/vl.html). With VL we now allegedly have the right tool at hand to tackle such complexities. To put it to a test we thought it would be a good time to rework those Camera and Editor modules. So we went ahead keeping the following things in mind:

## Design Goals

* Modularity: a clear line between Model and View allows 
** easy reuse of individual parts in custom editors 
** a simple way to adapt the look of an editor by simply providing an alternative View node
** to easily provide DX9 and DX11 versions of all editors
* Persistence: editing state can be saved to and loaded from disk
* Boygrouping: editors can be used in boygrouping scenarios by simply putting a halfboygrouped module (provided) between Editor and View
* Undo/Redo: editing steps can be undone/redone

{{< vimeo "153554803" >}}

## Performance

By building them with VL (which, remember, is a compiled language) we were hoping for improved performance because the existing modules were actually quite CPU hungry. And indeed we got better results immediately even though there's not been put too much effort in optimization on the VL side yet. 

## Drawbacks?

Of course! Mainly one though. A little one. More an annoyance. Not a big deal really. You may not even notice it..well..after a while.. in fact some people may even love it..niiiooaaa.. here is the thing: The first time you're using one of those new modules, VL is loaded, which takes a while. That really only happens once per session though, so lets for now pretend it is not that bad... 

## Here is what you get

* PointEditor
* BezierEditor
* BezierPatchEditor (was: GridEditor)
Each of the above come in two flavors: 2D, 3D

Besides the above design-goals here is what changed with the modules for the user: 
* no more need to connect Mouse/Keyboard
* no more need to tag points before moving them
*no more need to press different mousebuttons for operating on different axis. interact with on-screen pivot element instead
* better handling of point-dragging with extreme camera views
* on-screen-display informing about the current transformation

* MeshEditor (EX9) now also modifies normals
* AxisAndGrid now has pins to show/hide axis and grid

Bonus:
* ArcLength (2d/3d) a replacement for https://legacy.vvvv.org/contribution/pathvectors-%283d%29 and https://legacy.vvvv.org/contribution/arclength%283d-generic%29
* a generic Undo (3d) module (as used in MeshEditor)
//legacy.vvvv.org/downloads/previews
## Next Steps

The editors still need a bit of finetuning in terms of interaction and also their internal architecture is not yet exactly optimized for readability. Then the DX11 versions of the views need to be patched but that should be rather trivial since it is really only about drawing. So now you please give it a spin and feed back your findings before we're going into a second round..

Available now in latest [alpha builds](https://legacy.vvvv.org/downloads/previews).