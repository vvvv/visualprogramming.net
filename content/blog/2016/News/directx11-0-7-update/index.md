---
categories: "News"
author: "vux"
date: "2016-09-02"
title: "Directx11, 0.7 update"
slug: "directx11-0.7-update"
description: ""
imported: "true"
---


Fresh release from github, with a decent amount of changes, bug fixes, new bits and bobs.

For full details, please checkout:
https://github.com/mrvux/dx11-vvvv/blob/master/CHANGELOG.md

Still here are some of the most notable parts:
* VideoIn (DShow), contributed by (user:gumilastik). I think title speaks by itself, no need for more explanation.
* Render space nodes are behaving nicer when they are disabled.
* Text (DX11.Layer Advanced) had a nasty crash bug in some spread situations, this is now a thing of the past.
* Many new DirectWrite nodes, specially to retrieve Metrics.
* Font Enum for Text nodes uses the DirectWrite enum, so no more revert to default font in many cases.
* Depth stencil reference and blend factor are part of render state (and each got a node), to allow more interesting combinations.
* WithinProjection has boolean options so it can preserve crop/aspect, and then behave like all the within from dx9, but all in one node.
* TextureFX properly works with default size and a texture In connected.


And as usual , please report issues here (and not in the forums), small patch to reproduce is also appreciated ;)

https://github.com/mrvux/dx11-vvvv/issues

Download here:
{{< contribution "directx11-nodes-alpha" >}}

Have fun,
vux