---
categories: "News"
author: "vux"
date: "2018-05-21"
title: "DirectX11 1.3 Update"
slug: "directx11-1.3-update"
description: ""
imported: "true"
---


And here we are, another fresh DirectX11 release, which gives a nice 1.3 bump.

-- Begin Small Update (1.3.1) : 
Two small issues decided to hide themselves in latest 1.3, and since they are annoying enough they deserved a quick fix and a 1.3.1 bump:
* Group (DX11.Layer) and Enabled (DX11.Layer), when disabled and stacked, could cause some upstream nodes to fails, and then preventing render of next groups in line. This is now fixed
* TextureFX, with it's latest update, had an eventual issue when patch starts in disabled mode and would not recover from it.

Also since it got implemented, TextureFX shaders that can use "wantmips" now do so (Edge, Blur, BlurDirectional, BlurGlow, BlurPerfector, DistortFlow, DropShadow, UnsharpMask)
.They are all faster in that scenario.

-- End Small update 1.3.1

For impatient people, here are release highlights:


#  Texture FX 
* Technique is now spreadable (you can now build some really nice effect banks)
* Reflection is now performed only on compile (no technique swap penalty), and general better runtime performance.
* Now technique can have the annotation : wantmips , this avoids to make your own mip pass (runtime will do it for you, and will only do so if input texture requires it).
* New pin "Preserve On Disable" (spreadable). This allows (When Enabled pin is off), to keep last frame result instead of routing input.

For spreadable technique example, see: girlpower\misc\texturefx_technique_spread folder

#  Render States
* Presets internal handling is now less error prone and faster.
* New blend state presets : MultiplyAlpha, ReplaceAlpha , BlendDestination 
* Several new nodes that allow to modify individual parts of a render state without touching the rest (DepthClip, Wireframe, EnableScissor, AlphaToCoverage

#  Other 
* New DrawFullScreen (DX11.Layer) : does a standard full screen draw, all ready to go
* New texture array routing nodes (Search for GetArray), contributed by {{< user "sebl" >}}
* Renderer (DX11) now outputs input device objects, as well as states, contributed by {{< user "tebjan" >}}
* Several new convenience Bullet nodes
* FrameDelays got a fix which was not releasing memory when deleting the node : Also they now block upstream evaluation when disabled (and have auto evaluate flag on)
* New documentation pages in [](https://github.com/mrvux/dx11-vvvv/tree/master/Docs) . For now full semantics and annotations reference.

#  Patreon and Supporting DirectX11 development
I of course wanted to say thank you to people who did either a Patreon subscription, or by doing private yearly invoice.

There is now an About (DX11) node, which has the names of all Contributors and Supporters.

[](http://www.patreon.com/mrvux)

#  Next
For next release, the main aim is to upgrade to latest version of Assimp (and it's c# wrapper).
This will allow to import the newly supported formats (gltf), and use more complete wrapper version (specially for loading options).

Please note that latest Assimp binaries will be incorporated in next alpha build (github).

#  Full Changelog 
* Submodules are now http, which should help for clining entire repository (ssh would fail on forks)
* Added About (DX11), which contains version number, contributors and supporters information
* Framedelay (2d and 3d) were not disposing resource when deleted from patch.
* Framedelay (2d and 3d) now also start render graph (as part of update stage), and do not evaluate upstream anymore when disabled.
* New blend state presets (available in Blend and Renderstate nodes) : MultiplyAlpha (only multiplies alpha channel, leave color as it it), ReplaceAlpha (leave color and set new alpha), BlendDestination (uses alpha in the render target instead of pixel shader ouput as factor, for opacity masks).
* Add EnableScissor (DX11.RenderState) : Allows to modify state to enable scissor, without touching the rest.
* All state nodes now use static enum instead of dynamic string based version, which increases performance for those nodes (no more lookup needed).
* Add DrawFullScreen (DX11.Layer) : as in title , a fast version instead of using module
* Gesture (Kinect2.Microsoft) : Fix issue when rceiveing frame and no skeleton is reported (which could happen sporadically)
* Add GetRigidBodyCustom(Bullet) : Allows to get custom pin of a rigid body.
* Add BoxContainment(Bullet Rigid.Filter) : Allows to filter rigid body list if they are inside or outside a bounding box.
* Add SphereContainment(Bullet Rigid.Filter) : Allows to filter rigid body list if they are inside or outside a bounding sphere.
* GetConstraintDetails(Bullet) : Now outputs related body.
* Gesture (Kinect2.Microsoft) : Now allows to specify user index manually, instead of using first found skeleton as before.
* Renderer (DX11) : Now has output for events as well as state for user input (mouse, keyboard and touch), contributed by @tebjan)
* GetArray (DX11.TextureArray), allows "GetSpread" in texture arrays, contributed by @sebl
* GetArray (DX11.TextureArray BinSize): same as above, but with bin size (allows combining), contributed by @sebl.
* AlphaToCoverage (DX11.RenderState) : allows to enable alpha to coverage for multisampling in an existing render state (without modifying other options)
* AlphaClip (DX11.Effect) : simple effect with texture that discards pixel if alpha is below a certain value
* DepthClip (DX11.RenderState) : allows to enable or disable depth clipping (near/far plane) in an existing render state (without modifying other options)
* Texture FX Technique pin is now spreadable (means you can now use different effects for different slices, see girlpower\misc\texturefx_technique_spread folder for an example)
* Texture FX cache is now more efficient, no more penalty when switching techniques.
* Texture FX technique can now use a "wantmips" bool annotation, to build mips before the first pass (only if needed)
* Texture FX has a new option "Preserve On Disable" (spreadable), if Enabled pin is off, keeps previous frame texture instead of passing texture In.
* Info (DX11.Texture2d) no exception if a texture is null, returns same defaults
* New reference semantics (MIPLEVELSOF and INVMIPLEVELSOF) to allow to access input texture mip levels in effects (see girlpower\misc\referencing_miplevels for example)


Download Here :
{{< contribution "directx11-nodes" >}}


