---
categories: "News"
author: "vux"
date: "2013-07-05"
title: "vvvv_45beta30.2 DirectX11 Pack"
slug: "vvvv45beta30.2-directx11-pack"
description: ""
imported: "true"
thumb: "Voxelizer-Renderer_2013.07.05-15.21.28.png"
---


![](Voxelizer-Renderer_2013.07.05-15.21.28.png) 

Bit late after release for this one, but here it is at last.

This one doesn't have that much new toys, stay tuned for next one tho ;)

So what's new in there?
* Some mini bug fixes (Dispose issues)
* Fix issue for debug device if you use Github version but no DirectX SDK is installed.
* Most resources are assigned a debug name (debug build only), so they easier to track for disposal.
* Code editor for Texture FX also reflects the shader to tell you if you done something wrong (like wrong layout), same for Geometry FX
* New node CopyCounter , which allows you to retrieve counter from append/counter buffers (for debug purposes).
* New AspectRatio Layer node, which will automatically fix your aspect depending on Renderer size.
* Added AlphaAdd as Blend State
* Access to Stencil Texture (if you have the right depth format), so you can read it as shader input (allows you to have debug views or to do fancy tricks with it).
* Lot of new DepthStencil presets which allows you to use Stencil (Increment/Invert/Zero/LessCompare), so you can optimize a bit your deffered renderers (or do some random other tricks).

New Girpower Examples:
* 2d vector demo contributed by {{< user "gregsn" >}}
* Two examples for Indirect Draw and using Append Buffers (showing raw copy on lookup table mode). 
* One sample to render to Volume Texture using Compute Shader and with box voxel renderer.
* Stream Output samples are fixed so they will work on stricter drivers (Intel).

Grab it here (64 bits version coming soon, with vlc support)
{{< contribution "directx11-nodes-alpha" >}}


Have fun !!!