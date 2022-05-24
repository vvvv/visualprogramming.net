---
categories: "Development News"
author: "tonfilm"
date: "2021-03-11"
title: "VL: Stride 3D Engine Update #4"
slug: "vl-stride-3d-engine-update-4"
description: ""
imported: "true"
thumb: "Header2.png"
---


![](Header2.png) 

Since the first public preview release in summer 2020, we've made steady progress and released many updates based on feedback and bug reports. In case you didn't follow the daily changes, this blog post highlights additions you might have missed and are worth checking out.
## Help and Example Patches
First and foremost, we added loads of new help and example patches. It is already a nicely browsable list in the help browser, with more in development:
![](01_Helps.png)
## Model, Mesh, Material and Texture Tooltips
A core feature of vvvv is to have a live preview of your data. And since you can patch your own tooltips to do exactly that, we patched previews for Materials, Models, Meshes, and Textures. More to come!
![](02_Tooltips.png) 
## Material Cleanup
A Material describes the rendering pipeline. This is very fundamental and after working with the first iteration for a while we found some improvements:

We reduced the number of base nodes and added easier building blocks to customize a material. There are help patches for most of these, check the help browser and the material category in the node browser. It basically mirrors the [Stride documentation](https://doc.stride3d.net/latest/en/manual/graphics/materials/index.html).
### Simpler Data Input
The parameters of a material are GPU values, either float or color. For the GPU a color is just a vector with 4 components, so we now have inputs of type *GPU<Float32>* and *GPU<Vector4>*. We simplified the node-set in a way that you can use a single value, a texture, or any dynamic GPU value. There are also nodes to input different values per instance. The reworked nodes are internally built with ShaderFX. If you are interested, have a look inside the new nodes to get an idea of how you can build your own.
![](03_Materials.png) 
### Async Compilation and Caching
Compiling complex materials takes a while because there are often several shader stages involved. Stride has a mechanism to compile a material in the background and cache the compiled shaders on disc. So the next time the same material is used, it loads almost instantly. So when you see a geometry blinking green, it means that the material is compiling in the background and will be saved to disc. If it is blinking red, the material has an error.

In practice, this means a patch loads much faster the next time you open it.
## Virtual Reality
Rendering any scene into a VR headset is now straightforward, just have a look at the new help patch.
![](04_VR.png) 
## Aspect Ratio and Units
When you build on-screen displays you often need pixel or device-independent units (DIP). And if images are involved, they should keep the same aspect as they are stored. For these tasks, we now have new nodes that calculate these spaces for you. And the QuadRenderer got aspect ratio modes that depend on the connected texture:
![](06_Units.png) 
## Perspective Look at Rectangle
Simulating a perspective that behaves like looking through a window is an important tool. It allows you to create cameras for interesting things like virtual productions and head tracking. There is also a help patch to get you started.
![](05_LookAt.png) 
## Spout and Shared Texture
You can now share textures with other software using Spout or shared textures. Spout 2 support is also planned for the next release.
![](07_Spout.png) 
## Patch Script
This workflow is for advanced users. It allows you to attach a patch as a [sync script](http://doc.stride3d.net/4.0/en/manual/scripts/types-of-script.html#synchronous-scripts) to an entity. That's a common workflow in ECS-based game engines and you can find many tutorials on youtube that use this design pattern.
![](08_PatchScript.png) 

In some cases, this has an advantage over just placing an entity node in a patch and building logic around it. For example, you can retrieve your attached script-patch from the entity somewhere else and call operations on it. You can check out a use case in the forum thread [How can I modify a material without changing the original node?](https://discourse.vvvv.org/t/how-can-i-modify-a-material-without-changing-the-original-node/19121). There is a help patch as well.
## Light Shafts
Thanks to the efforts of {{< user "TremensS" >}} we got help patches that explain how to use [LightShafts](https://doc.stride3d.net/latest/en/manual/graphics/lights-and-shadows/light-shafts.html): 
![](09_LightShafts.png)
## Video Tutorials
So far, we released two video tutorials:
{{< youtube "Cs60A_pSIy0" >}}
{{< youtube "36E6oKBao_w" >}}
## Other Bits and Pieces
### Move to Official Stride
After we’ve done many pull requests that fix bugs and add features that we need, we switched to the official Stride release nuget packages. This allows for an easy workflow when you load a Stride project since the version now matches to what the Stride installer downloads by default.
### Fullscreen
Got some fixes, however, there is one known bug. In a multiscreen setup, when the window is too far on the right on one screen, it goes fullscreen on the next screen to the right. We’ll try to fix this in the upcoming releases, of course.
### TextureWriter
Easy node to write textures to disc. You can use this in combination with the incremental main loop mode to export animations.
## General Advice
Most high-level nodes, like Sphere, DirectionalLight, and so on, are simple patches made from more fundamental building blocks. A good way to think about them is to see them as a "default setup" and not a finished black box.

So if you miss a feature, or a node does too much, look inside and copy parts of it, or the whole definition into your personal library document to customize it.

We also try to stay as close as possible to the Stride documentation. So if you are looking for more info on a certain feature, it is always worth [peeking into it](https://doc.stride3d.net/latest/en/manual/index.html).
## Contributing
If you have a useful addition or you want to contribute in any other way, you are welcome to fork [VL.Stride on GitHub](https://github.com/vvvv/VL.Stride) and make a pull request. We are always happy about new help and example patches.
## What's Next?
As a first step we want to improve:
* Input event handling (Mouse, Keyboard, Touch, Gestures)
* TextureFX
* GPU resources handling, aka buffers and textures

We'll also add these features:
* Entity picking
* Load Model Animations
* Load Model Materials

And we are also working together with the [FUSE team](https://discourse.vvvv.org/t/fuse-project/19000) on more advanced rendering node libraries built on top of VL.Stride.
![](09_FUSE.png) 

Looking forward to seeing what you will create with it! -> Latest download is always [here](https://visualprogramming.net/#Download).

yours,
devvvvs

P.S.: The gallery of [VL.Stride impressions](https://photos.app.goo.gl/rTR44JanYUkXzhqJ8) also got some new additions. 


