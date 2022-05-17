---
categories: "News"
author: "joreg"
date: "2020-08-07"
title: "VL.Stride EarlyAccess available now!"
slug: "vl.stride-earlyaccess-available-now"
description: ""
imported: "true"
---


Dear patchers,

it is with great pressure (or was it pleasure?) that we want to give, into your caring hands, a preview of what is to become VL.Stride, the new 3d rendering library for vvvv gamma, based on the opensource [Stride 3d engine](http://stride3d.net/). 

## High-level and Low-level
The first thing you need to know about VL.Stride is that it offers you two ways of working with it:
- High-level: Work with models, lights, materials, textures (think: industry-standard Entity-Component-System)
- Low-level: Work with shaders and GPU resources directly

If you're coming from vvvv beta and you worked with DX9/DX11, then you've been using the low-level approach: It takes more effort to use because you need to know about shaders but it allows you to do anything with the graphics API. If you worked with a game engine before, then you've used the high-level approach: It is easier and more intuitive to use as you don't have to know about shaders to achieve shiny renderings, but it is more specialized. 

Fear not, both ways of working can be combined without any drawbacks. It is only that beginners will get a very gradual learning curve with the high-level approach and pros can combine them depending on the problem.

## What's available right now?
Everything. Including the full MIT-licensed VL.Stride sources. You get access to daily builds, github issues and the VL.Stride-EarlyAccess chat-room for your questions and feedback.

While like this everything is accessible for you down to the bones of the Stride source-code, not everything is yet conveniently usable out-of-the-box. For now, we've concentrated on the high-level workflow. So what you get is:

![](VL.Stride%20-%20Cornell.png)
*VL Cornell*


- Plane, Box, Sphere, Cylinder, Cone, Capsule, Donut and Teapot primitives with instancing options
- Ambient-, Directional-, Point- and Spotlights (with shadows) and Skybox, see [Stride docs on Lights](https://doc.stride3d.net/latest/en/manual/graphics/lights-and-shadows/index.html)
- Simple PBRMaterial and a range of nodes to patch your own materials, see [Stride docs on Materials](https://doc.stride3d.net/latest/en/manual/graphics/materials/index.html)
- PostFX, see [Stride docs on PostFX](https://doc.stride3d.net/latest/en/manual/graphics/post-effects/index.html)
- Graphics Compositor, see [Stride docs on the Graphics Compositor](https://doc.stride3d.net/latest/en/manual/graphics/graphics-compositor/index.html)
- Textures: TextureReader, ImageToTexture, TextureToImage and a few TextureFX
- HTMLTexture and VideoTexture via separate packs: [VL.CEF](https://www.nuget.org/packages/VL.CEF/) and [VL.MediaFoundation](https://www.nuget.org/packages/VL.mediafoundation/) and [VL.Devices.DeckLink](https://www.nuget.org/packages/VL.Devices.DeckLink/)

Also, beware that at this stage we're still doing one or the other rename of nodes and pins. It is a preview after all!

## What's next?
A lot is still to do. From smaller tweaks to whole topics that need to be tackled. The following is an unordered list of things that we'll try to prioritize within the next weeks following up to [NODE20](http://20.nodeforum.org):
- Keyboard, Mouse and Touch nodes
- Control over shadowmaps for lights
- More ready-to-use materials
- Non-blocking material patching
- More TextureFX
- Entity Picking
- Model/Asset loading
- Project loading
- Physics
- Text Rendering
- Low-level shader coding
- VR
- MainLoop control
- Improved multimonitor handling
- Executable export to work with VL.Stride

## How to get it?
This EarlyAccess is intended for commercial users of vvvv gamma. If you have a license already, check your inbox. Otherwise, get a [vvvv gamma developer license](https://store.vvvv.org) now (for the still 20% reduced price!) and get your access right away. How cool is that!?

If this can't convince you to financially support your favorite visualprogramming environment now, simply hang in there until September, when we've planned to make this publicly available for everyone. 

## Thanks
A couple of people believed in the development of VL.Stride from the beginning and substantially supported its development. We bow before you:

* [Marshmellow Laser Feast](http://marshmallowlaserfeast.com)
* [schnellebuntebilder](http://schnellebuntebilder.de)
* [m box](http://m-box.de)
* [Refik Anadol](http://refikanadol.com)
* Jarrad Hope




