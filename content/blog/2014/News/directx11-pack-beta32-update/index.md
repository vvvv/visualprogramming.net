---
categories: "News"
author: "vux"
date: "2014-05-13"
title: "DirectX11 Pack - Beta32 Update"
slug: "directx11-pack-beta32-update"
description: ""
imported: "true"
---


Here we are, after later beta32 release, new DirectX11 pack is following.

Lot of changes/addition/bug fixes on this one.

First build system has been reworked properly, to have one command line to build the whole pack into ready to ship Zip file, this was long overdue.

Since build and deployment is now really easy, you can also expect a more frequent release cycle on bug fixes.

So now let's go for changes

#  Fixed Nodes
* BoundingBox (DX11.Geometry Get) was not setting SliceCount properly.
* SamplerState (DX11 State Advanced) is now spreadable
* FileTexture (DX11.Texture2d Pooled) was not aborting resources in queue, potentially leading to overflow.
* FromSharedTexture and ToSharedTexture (DX11.Texture) : fix memory leak
* Kinect (Devices) was throwing exception on Dispose
* Texture FX had a leak when deleting the node.
* ReadBack nodes had wrong stride check, so some of them were not working properly
* GeometryBuffer and IndexedGeometry Buffer: Fix topology and sets a default in case of undefined (and send a warning to TTY)
* Renderer (DX11.CubeTexture) : Fix clear depth issue.
* Sphere (DX11.Geometry) had X Axis UVs flipped.
* NullIndirect (DX11.Drawer) : Fix Null exception
* FrameDelay (DX11.Texture 2d) : Fix error when deleting node.


#  General Changes
* Render State is now spreadable on any shader
* Exceptions are better logged to tty in case something happens during update. This includes stacktrace, node path...
* Kinect nodes are now moved to 1.8 SDK
* More Blend Presets, mostly for Text rendering
* Text nodes have Render State input.
* CAMERAPOSITION semantic inside shaders
* Added invy annotation to go with uvspace in shader, so it behaves like in dx9
* Texture FX now allows pass to scale in non linear manner, for example 50% on x and 75% on y. It is also possible to set resolution as absolute. 
* FileTexture (DX11.Texture2D) now reads file header to output Size and Format.
* Text (DX11.Layer) : Size has higher default.

#  New nodes
* Several nodes for text in the DirectWrite category. TextFormat, TextLayout, CaretPosition, CaretRange, HitTest, LayoutMetrics allows some more advanced text handling.
* Text (DX11.Layer Advanced) allows to use layout for text drawing, and is billboarded by default.
* Switch (DX11.Texture 2D): Spreadable switch pin.
* QRCode (DX11.Texture 2D)
* Interaction (Kinect Microsoft) and UserInfo (Kinect Microsoft)
* RenderSemantic (DX11.TextureCube)
* AsRaw (DX11.Texture2D) contributed by {{< user "sebl" >}}
* RGBDepth (Kinect Microsoft) : contributed by {{< user "tmp" >}}
* DisplacementMap (DX11.Effect) and DX9ToDX11 (DX11.Texture.2d) : Contributed by Joreg
* Many new/fixed TextureFX by {{< user "unc" >}} (Lot of cubemap modules), ColorAndDepth, DepthReconstruction, Resize, Rope,Sprite,TextureCache and many more, that would take a page to update all this ;)
* Kinect help patched contributed by {{< user "joreg" >}}

I might have forgotten some more parts, but until then, Download and Enjoy!

{{< contribution "directx11-nodes-alpha" >}}