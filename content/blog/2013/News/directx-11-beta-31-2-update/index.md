---
categories: "News"
author: "vux"
date: "2013-12-02"
title: "DirectX 11 Beta 31.2 Update"
slug: "directx-11-beta-31.2-update"
description: ""
imported: "true"
---


![](LineBatch-Renderer_2013.12.02-14.45.05.png) 

Latest build for DirectX11 and beta31.2

Quite some new changes for this one.

## Update 4th, December
One small nasty bug decided to stay hidden until after deploy, so I updated the build,please download latest version again (replaced downloads), sorry for any inconvenience ;)
So latest release has those extra bits:
* Cube/Texture Array renderer were not working anymore
* On the way device does proper clean at the end of each frame (normally harmless, but debug runtime spam at times).
* Integrated small shared texture fix from (user:sebl)
* Metaballs were missing topology (Nvidia seems to not care and handle it, ATI just crashes).
* Added new FileTexture (2d.Pooled), please check it it's nice ;)

#  Bug Fixes
* Text had a hue Issue
* Sampler State had overflow issue in 64 bits build
* Preview was not resetting stages prior to render, which could cause a black screen.
* Render Slices on Depth were not set properly on CubeMap/TextureArray renderers.
* Topology node was creating issue if enum was set to undefined, now in this case it doesn't convolute geometry.

#  Changed/New Nodes
* Readback has reasonably fast reader for standard types (vectors/matrix...), instead of using generic version.
* Billboard has a Double value toggle, to use full screen space with a quad of 1.
* New node to join subsets (by ( (user:velcrome) )
* Quad had some renaming (by ( (user:joreg) )
* Many help fix and some new TextureFX, by ( (user:unc) ) check Pillow,Threshold,TriColor
* Metaballs (DX11.Geometry) Simple port over the previous one.

#  New Samples
* Pipet has been changed to show usage of new native type readbacks.
* Line batch geometry shader example (see screenshot above).
* Domain Deform tessellation example.
* DispatchThreadID compute shader examples

Download Latest version here : {{< contribution "directx11-nodes-alpha" >}}

#  RoadMap
Please note that for now most work is to replace SlimDX by SharpDX, so next release (planned for end december/mid january) will have a couple of changes (which should not affect the patcher).

That also means access to DirectX11.2 (win8.1 only).

On the move quite a few core bits are changed/improved but, more announcements while progressing ;)