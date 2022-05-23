---
categories: "News"
author: "joreg"
date: "2020-10-01"
title: "VL.Stride for evvvveryone!"
slug: "vl.stride-for-evvvveryone"
description: ""
imported: "true"
---


![](Stride%20Quad.png)

Update: The source code is now publicly available here: [github.com/vvvv/VL.Stride](https://github.com/vvvv/VL.Stride)

The long wait is over!

vvvv gamma 2020.3 public previews now include VL.Stride, the new 3d rendering library, based on the opensource [Stride 3d engine](http://stride3d.net/). You be the judge, but spoiler: this is rather huge!

**[Download vvvv gamma 2020.3 preview](https://visualprogramming.net/#Download)**

Massive thanks go out to all [early accessors](/blog/2020/vl.stride-earlyaccess-available-now) who helped us uncover and fix countless buggers that you no longer have to run into. So this is also on your behalf. You're welcome!

## Status
All of the basics are now in place. Find your favorite among these:
* **Primitives**: Plane, Box, Sphere, Cylinder, Cone, Capsule, Donut and Teapot 
* **Instancing**: Via spread of transforms, other entities or buffers
* **Lights**: Ambient, Directional, Point, Spot, Projector, Skybox
* **Shadows**: On by default, configurable in quality/resource-consumption
* **Materials**: Highly configurable PBR workflow through a large set of nodes, incl. easy normalmapping, displacements,...
* **Textures**: From file, video, Spout, Skia, HTML or renderer
* **TextureFX**: Basic selection available, more to come
* **Texture Feedback**: Yes please!
* **Texture Readback**: Absolutely, think pipet,...
* **ShaderFX**: Experimental nodes to patch shaders visually
* **PostFX**: Highly configurable via set of nodes, think: depth-of-field, bloom, ambient-occlusion, ...
* **Dynamic Meshes**: Generate meshes using vertex- and indexbuffers on CPU
* **Shaders**: Pixel, Vertex, Geometry, Compute. Write your own using full syntax highlighting in VisualStudio with hot-reload
* **Assets from file**: Load textures and models directly from file
* **Assets from Stride Game Studio**: Prepare assets and complete scenes in game studio
* **Windowing**: Easy handling of multiple windows (and cameras)
* **Misc**: Render Skia and HTML content directly onto the screen (ie. no texture-pass needed)

To give you an idea, here is a [random collection of screenshots](https://photos.app.goo.gl/rTR44JanYUkXzhqJ8) of what earlyaccessors have created with this already.

## Still missing
To give you a heads-up, here are things you might expect already but are yet to come:
* Loading models does not bring all their materials and animations in yet. To get a models materials showing automatically, you need to load them as an AssetModel via an extra Stride project. Animations are not yet supported. 
* Simple Text Rendering: for now best done via Skia or HTMLRenderers
* Physics nodes are available in the *Experimental* section, meaning you can use them but still we want to give them one more round of refinement
* VR support is still to come. Stride supports it, we just haven't exposed it yet properly
* Things you'd do with the most popular contributions InstanceNoodles, DX11.Particles and FieldTrip are still missing a corresponding functionality
And then some more, but the above should be the most obvious ones you'll stumble upon.

## How to get started?
Open the Helpbrowser (F1) and check out the explanations, howtos and examples. Remember the *preview* status, ie. those are not yet in their best shape. But they should help you find your way.

And if you really got nothing better to do in the week of October 2nd to 8th, then consider joining us for [NODE20](https://20.nodeforum.org/) where we have the following series of workshops dedicated to getting you started with VL.Stride:

* [Introduction to vvvv, VideoFX & Compositing](https://20.nodeforum.org/program/?lectureId=Jb1dpKqvOVzARBsfv8h) by Maria Heine
* [Realtime graphics with Stride 3D – The Fundamentals](https://20.nodeforum.org/program/?lectureId=fdmYwsGOetD3L7Vs7Iph) by {{< user "joreg" >}}
* [Patching Materials](https://20.nodeforum.org/program/?lectureId=fzhQkCecOIp6kU6WsLiO) by {{< user "robotanton" >}}
* [Beyond Sound and Visual](https://20.nodeforum.org/program/?lectureId=nO7aO8hdYv14R1PiBPBp) by {{< user "dottore" >}}
* [VL.Stride Deepdive](https://20.nodeforum.org/program/?lectureId=NNA9Lhd4ICiw6VIzlFAr) by {{< user "tonfilm" >}}
* [A preview to ShaderFX](https://20.nodeforum.org/program/?lectureId=N02FO8JjRyk1TbJyw819) by {{< user "tonfilm" >}}
* [Working with the Stride GameStudio](https://20.nodeforum.org/program/?lectureId=RVC2tTBN3u4EXgGc8x5W) by Marian Dziubiak

A [tickets costs 50€](https://20.nodeforum.org/tickets/) and gives you full access to all of the above and [so many more workshops](https://20.nodeforum.org/program/workshops/) and their recordings. 
{{< box >}}
Note:
Pro-tip: This is a so-called no-brainer!
{{< /box >}}

## Thanks
A couple of people believed in the development of VL.Stride from the beginning and substantially supported its development. We bow before you:

* [Marshmellow Laser Feast](http://marshmallowlaserfeast.com)
* [schnellebuntebilder](http://schnellebuntebilder.de)
* [m box](http://m-box.de)
* [Refik Anadol](http://refikanadol.com)
* Jarrad Hope

