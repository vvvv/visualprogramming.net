---
categories: "Development News"
author: "tonfilm"
date: "2020-01-06"
title: "VL: Xenko 3D Engine Update #3"
slug: "vl-xenko-3d-engine-update-3"
description: ""
imported: "true"
---


{{< box >}}
Note:
Update: This is now publicly available at: **[http://visualprogramming.net](http://visualprogramming.net)**
{{< /box >}}
![](image10.png)

Happy new year, evvvveryone! Welcome back and we hope you had some fine holidays. More than one year has passed since the last [report](/blog/2018/vl-xenko-3d-engine-update-2). An update is well overdue. This post sums up last year’s (2019) progress on our upcoming 3d engine for [vvvv gamma](https://visualprogramming.net/).

Xenko’s codebase is huge and even after one year, we are still in explorer mode. But help is near! As you might [have read](/blog/2019/vvvv-meets-xenko), Xenko’s lead developer Virgile Bello aka xen2 is now with us in Berlin. While his main focus is maintaining Xenko and building a community around it, he also helps us to achieve our goals faster by answering questions and fixing bugs that we encounter.

As it is still early, for each technology we work on, we try to focus on creating only the basic nodes required to get a working prototype. Because if we have to change something fundamentally, every node has to be adapted. Nevertheless, there are tons of nodes already.

{{< box >}}
Note:
The videos and screenshots in this blog post are mostly early development captures. Things will change and improve over time.
{{< /box >}}

Besides many little things, here are the main topics we worked on:
## Scene Graph
The scene graph is the fundamental data structure of the 3d engine. It contains the entities and scenes of your application. Most engines use a tree view to visualize and work with it. In vvvv, we have “Group” nodes to build the parent-child relations of entities.

For convenience, every group and entity got a transformation and name input. The name becomes handy for finding and accessing certain entities later programmatically or just for getting an overview. It also shows up in the tooltip.

![](image8.png)

### Scene Graph Explorer
The scene graph can become large and complex quite quickly. Especially when you are a brave patcher and you use sub-patches to stay organized. Sometimes you want an overview of the whole tree structure and see basic properties (at runtime, of course!). Luckily there was an [older project for Xenko](https://forums.xenko.com/t/project-live-editor/909) that traverses the entity tree and visualizes its components and properties.

We updated it to the latest Xenko version and imported it as a debug helper.
![](image3_0.png) 

### Materials
If you look at the options and properties of a [material in Xenko](https://doc.xenko.com/latest/en/manual/graphics/materials/index.html) it’s quite complex and some features require expert knowledge. To make things quick and easy, we made a few simple nodes to cover the basics.
![](image9.png) 
![](image1_1.png)

We’ll also add texture-based versions of them and for more complex setups, you can always design the material in Game Studio and import it.
### Runtime Asset Loading
For almost every project you have to import content. Be it images, videos, models or just text files. This sounds trivial at first, but as you come closer to deployment, it gets more tricky to have everything at the right place. Even more so, with the new executable export in vvvv gamma.

Game engines usually solve it like this: Resource files like models, textures, etc. get imported via the editor and compiled to runtime assets. These asset files get placed next to the executable on compilation. This works well for static assets, but for rapid prototyping and changes at runtime, we need something more flexible. So we took the Xenko asset builder and adapted it to work at runtime. This allows for importing and building assets while the application is running.
### File Assets
Load single resource files directly from disk, aka FileTexture. Good thing is, this works together with Xenko’s asset database and caches already loaded files. So everything is pooled by default.
![](image3_1.png)

### Load Project
That’s a nice one, you can create a Xenko project in Game Studio, work on Assets, Scenes, Prefabs, etc and import everything at once with the LoadProject node. It even updates on save!

{{< youtube "JQc24pD4OrQ" >}}

### Modify Imported Entities
Since we work directly with Xenko’s data types, imported entities are in no way different from patched ones. You can access and modify them in the same way:

{{< youtube "TD3u-Et9fzc" >}}

## Shaders 
vvvv is known for treating shaders first class. The Xenko team seemed to have a similar attitude. They created their own shader language called [XKSL](https://doc.xenko.com/latest/en/manual/graphics/effects-and-shaders/shading-language/index.html). It is a superset of HLSL, so you can paste shader code from vvvv into an xksl file.

However, there is much more. They added quite unique features that make writing shaders easy, fast and clean. If that wasn’t enough, you can compose shaders with other shaders at runtime and avoid an explosion of shader permutations.
### TextureFX
The well known TextureFX node-set in vvvv beta makes working with textures easy and fun. Of course, we want to have the same experience in vvvv gamma. But, with preview in the tooltip! There you go:
![](image11.gif)

### ShaderFX + FieldTrip
Visual shader programming with nodes? Yes, please! The composition feature of XKSL makes this easier than expected. Turns out, the Xenko team was working on something similar which made it relatively easy to build a node-set around it.

To test these nodes, we had the pleasure to have Kyle McLean in our office for some days and worked with him on porting FieldTrip nodes to VL.Xenko.

{{< contribution "fieldtrip" "FieldTrip" >}} is a modular shader library Kyle McLean created for vvvv beta. It includes raymarching and general tools to work with scalar fields and vector fields on the GPU.

We ended up with a working prototype, as you can see in this video from the vvvv berlin meetup:
{{< youtube "aG_dYEj2fN0" >}}
### StreamOut Instancer
Since Xenko has no native instancing for their material shaders yet, we tried to use stream out aka transform feedback to transform a mesh multiple times and build one big vertex buffer that works with the Xenko material pipeline. The node works nicely and takes a Mesh, a material, and the instance transformations. You can easily draw a few thousand instances with it. The header image was mostly done with it. 
![](image4.png)

### Profiler
The bigger your project gets, the more important it is to know how well your shaders perform. Thanks to Xenko’s profiler infrastructure we can give every shader a profiler key and see it listed in the GPU page:

![](image7.png)
![](image5_b.png)

## Next Up
There are still some topics left in order to make VL.Xenko as convenient as we like it to be.
### Multiple Windows
One major feature that vvvv beta does exceptionally well is working with multiple windows. Games are usually focused on one output window. In order to get this to work, we have to find a solid way to instantiate multiple windows in Xenko and render content into them. This requires some coding behind the scenes. We are planning to get this done by early 2020.
### One-Click Installation
At the moment one still needs Visual Studio to set up a VL.Xenko project. This should, of course, be just a one-click package installation as we have it with other VL libraries. Initial tests went well and we are confident that this will work out just fine.

{{< youtube "4OOZoicIpNM" >}}
### Rename to Stride
Because of legal reasons about the trademark, Xenko has to do a re-branding and will be called Stride soon. We'll of course follow along and will rename the library to **VL.Stride**.
![](GH%201.png)
---
As much as we want everyone to try it, it won’t make much sense to share the library in its current state. The setup process needs developer knowledge and a few main features are still missing. But stay tuned for more on that!

If you want to know more about something specific or have any remarks or requests, don't hesitate to leave a comment below.

That’s it for now, looking forward to [NODE20](/blog/2019/node-2020) and more exciting patches in 2020.

yours,
devvvvs
