---
categories: "News"
author: "vux"
date: "2014-10-09"
title: "vvvv DX11 beta33x update"
slug: "vvvv-dx11-beta33x-update"
description: ""
imported: "true"
---


It's been a little while since last DirectX11 update, so since beta33.1 is out let's sync the boys and have a one day release.

Most work on last build has been to fix bugs, but of course there are some new nodes/options/examples.

So here is the (non) exhaustive changelog:

Bug fixes:
* Fix render states not resetting properly if an error was caused during render
* Fix Mip change on temp target renderer (was not locking the right texture).
* Fix memory allocation issue on Quad layer node (from azeno)
* Dynamic buffers should be faster in most cases, same speed in worst case, and consume less memory.
* DynamicTextures (Value and Color) : now upload correctly for small textures, faster upload, better memory handling in both cases.
* FrameDelay will send a warning if it is fed a depthbuffer, but won't crash
* Fix issue in BubbleNoise texture fx
* Shared Texture fix for 64 bits.
* Fix texture coordinates in Polygon geometry
* Bone matrices from models were not transposed
* Fix memory leak in gsfx and autolayout. Also reduced the frequency for layout rebuild.
* TextLayout node was not updating on enums change (alignment)
* Texture FX can now use iterations at pass level.
* Fixed issue (on alpha build only, with TextureFX resource release)
* Fix issue in topology node not updating at times.
* Fix bounding box not copied on geometry shallow copies
* Fix Nil issue on dynamic buffers
* Fix Line (DX11) module crashing on ATI
* Fix Sampler pin on shaders not changing correctly.


Changed nodes:
* Writer Nodes (Texture 1/2/3d) now have a create folder toggle (disabled and hidden by default)
* Texture Array Renderer has option to bind the whole render target instead of do one pass per slice (so slice selection can be done in Geometry shader).
* Texture Array renderer can now create mips 


New nodes:
* Viewport validator (selects on viewport at object level).
* SelectViewport (DX11.Layer), replacement for Transformation index pin (removed)
* DispatchIndirect
* RawBuffer renderer
* Skeleton Assimp loader node
* Add Renderer (DX11.Buffer Advanced) which also allows to create counter buffers.
* Writer (DX11.Texture 1d)
* Renderer (DX11.StreamOut)
* DepthPipet module from unc
* Pipet module from unc
* DistortFlow texture fx from unc
* Lomograph texture fx from unc
* InputElement Join Advanced
* All bullet nodes, in both 32 and 64 bits flavour

Girlpower:
* Dispatch indirect sample
* Fix some examples so they could work on sm4/sm4.1 thanks {{< user "joreg" >}}
* more examples from  {{< user "joreg" >}}, check overview in girlpower root
* Sampler State example
* Depth Pre pass example
* Depth rebind example


Side note 1:

Please submit bugs here, this is much easier for me to track (it's very easy for your bug to be lost in forum within 2 days):
https://github.com/mrvux/dx11-vvvv/issues 

Side note 2: 

If a few kind users would like to give me a hand for help patches/girlpower examples please manifest yourselves ;)

Download from {{< contribution "directx11-nodes-alpha" >}} and enjoy