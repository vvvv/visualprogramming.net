---
categories: "vvvv gamma Releases"
author: "joreg"
date: "2021-05-20"
title: "vvvv gamma 2021.3 release"
slug: "vvvv-gamma-2021.3-release"
description: ""
imported: "true"
---

{{<previousRelease>}}

![](bunchofprimitives-850.png)

This is the big one!

vvvv has been in development for around 20 years by now. In recent years we were working on a complete re-write. We call it "vvvv gamma" and it saw its first official release in April 2020. Today we're adding a fully-fledged 3d library based on the open-source [Stride 3d engine](http://stride3d.net/). You can dive right into it:

{{< box >}}
**[Download vvvv gamma 2021.3.3](http://visualprogramming.net/#Download)**

**Bugfix releases:**
* 2021.3.3 on May 20, 2021
* 2021.3.2 on April 7, 2021
* 2021.3.1 on February 27, 2021
See [Change Log](https://thegraybook.vvvv.org/changelog/2021.3.html)
{{< /box >}}

Then follow this tutorial:

{{< youtube "Cs60A_pSIy0" >}}
*Tutorial: Building a Simple 3d Scene*

What you get with this release is only the beginning: For now we've focused on a high-level scene graph based workflow. So expect the following:
* **Primitives**: Plane, Box, Sphere, Cylinder, Cone, Capsule, Donut and Teapot 
* **Instancing**: Via spread of transforms, other entities or buffers
* **Lights**: Ambient, Directional, Point, Spot, Projector, Skybox
* **Shadows**: On by default, configurable in quality/resource-consumption
* **Materials**: Highly configurable PBR workflow through a large set of nodes, incl. easy normalmapping, displacements,...
* **Textures**: From file, video, Spout, Skia, HTML or renderer
* **Texture Feedback**: Yes, please!
* **Texture Readback**: Absolutely, think pipet,...
* **PostFX**: Highly configurable via a set of nodes, think: depth-of-field, bloom, ambient-occlusion, ...
* **Dynamic Meshes**: Generate meshes using vertex- and indexbuffers on CPU
* **Shaders**: Pixel, Vertex, Geometry, Compute. Write your own using full syntax highlighting in VisualStudio with hot-reload
* **Assets from file**: Load textures and models directly from file
* **Assets from Stride Game Studio**: Prepare assets and complete scenes in game studio
* **Windowing**: Easy handling of multiple windows (and cameras)
* **Misc**: Render Skia and HTML content directly onto the screen (ie. no texture-pass needed)

![](patchpreviews840.png) 
*Previewing Materials, Models and Textures right in the patch*

## Experimental

Also available already, but still marked as experimental, ie they still need another round of review:
* **Keyboard, Mouse, Touch** Input handling
* **TextureFX**: Basic selection available, more to come
* **Physics**: Nodes for 3d physics simulation
* **VR**: Effortless output to VR devices
* **Buffers**: Nodes to configure gpu buffers
* **ShaderFX**: Nodes to patch shaders visually

## Still to come

And to give you a heads-up, here are a few things you might expect already but are yet to come:
* Loading models does not bring all their materials and animations in yet. To get a model's materials showing automatically, you need to load them as an AssetModel via an extra Stride project. Animations are for now only supported when loading Prefabs
* Simple Text Rendering: for now best done via Skia or HTMLRenderers
* Things you'd do with the most popular vvvv beta contributions InstanceNoodles, DX11.Particles and FieldTrip are currently worked on by the [FUSE](https://discourse.vvvv.org/t/fuse-project/19000) team
There is more info on that in [this dedicated blog post](/blog/2021/vl-stride-3d-engine-update-4).
## Open Source

You read that right: The whole 3d library is [entirely open source](https://github.com/vvvv/VL.Stride). This means, should you encounter a critical bug with one of your projects you don't have to wait for a new release but can potentially fix things right on your end. 

## Further changes

Apart from the addition of VL.Stride this release also features the following notable changes:
- Completely reworked [OSC and TUIO nodes](/blog/2020/vl-new-osc-and-tuio-nodes)
- Image tooltips
- A simple HTTPGet node
- Touch support for the Skia renderer
- MainLoop has incremental mode
- Convenient ways to create Toggle, Bang & Press IOBoxes
Want to know all the details? Check the [changelog](https://thegraybook.vvvv.org/changelog/2021.3.html).

##  Licensing

As you recall, vvvv has the best software licensing model in the world: 

* Free for non-commercial use
* No copy-protection
* No feature limitations
* No mandatory registration

You simply [buy a license](https://store.vvvv.org/) the moment you start working on a commercial project. We also have monthly options!

##  End of the earlybird discount

We're happy to announce that we will get rid of the 20% earlybird discount that has applied to all vvvv gamma licenses so far. Starting this **April 1st** you can finally pay the full price that vvvv gamma is worth. So if you're a pro, you get the vvvv gamma developer licenses for you and your team before that date and save a bunch. Not often it is so easy to make a [good decision](https://store.vvvv.org/).

---

Once again massive thanks to everyone who participated in the early-access program and for all the feedback that helps us enormously to bring vvvv forward.

Good patch!
