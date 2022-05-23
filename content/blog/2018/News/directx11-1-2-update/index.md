---
categories: "News"
author: "vux"
date: "2018-02-17"
title: "DirectX11 1.2 Update"
slug: "directx11-1.2-update"
description: ""
imported: "true"
---


After a little while, here we are, a new version bump for dx11 rendering.

This as usual comes with some bug fixes and new features.

##  Bug fixes 
First, there were 2 reasonably major issue which are now fixed:
* Quad node would start to throw error if fed a nil anytime, and would not recover from it.
* Deleting texture fx and renderer temp target would not release the associated resources, resulting in a leak (only while authoring, not while having a patch running). 

##  New features
Next, of course there are new features, here are a few selected ones (full changelog below)
* Kinect 2 nodes now also have help patches, so now all nodes from plugins do have a help file.
* Sample and Hold for Buffers, 2d and 3d textures
* Support for shared buffers. This is identical as shared textures, but for buffers, so you can share compute work cross process for example.
* New library (TexProc), which contains some nodes for image processing which are not conveniently done using texture fx. Check RGBASplit , HSLASplit, ExtractChannel  and Composite nodes.

##  Supporting DirectX11 development
For more than 6 years DX11 pack has been free, and will stay free. 

The question about supporting development has been asked several times, and for now there was no official way to do so (except contacting privately).

So from now, dx11 contribution has a Patreon page, in which you can provide monthly donations to (various pledges with various rewards are available, including access to upcoming video workshop patches and custom support).

https://www.patreon.com/mrvux


##  Full changelog:
* Pack version info is now integrated, which allows to use pack versioning feature (as well as diffing).
* Kinect 2 nodes now all have help patches as well, so now every node in the pack has a help file.
* Fix spelling on Frustum (Transform)
* Fix spelling on FrustumTest (DX11.Validator)
* Fix Quad layer which would not recover if fed a Nil input.
* Renderer (DX11.TextureArray) now has a UAV pin (disabled by default), so texture can be written by compute shaders.
* Softworld node did not allow to create contstraints.
* Temp target renderer was not releasing resource when deleting the node, which was creating memory leak when authoring.
* Fix shader releasing their resources when deleting them from patch.
* Add ExtractChannel (DX11.Texture), which allows to pick individual channel of a texture (also auto handling input/output formats when required).
* Add RGBASplit (DX11.Texture), extract all texture channels in a separate texture.
* Add HSLASplit (DX11.Texture), extract all texture channels in a separate texture (converts into either HSL or HSV)
* Add Composite (DX11.Texture), combines a spread of texture into a single one, each texture can have individual blend mode,opacity and texture transform
* AsSharedTexture (DX11.Texture) , now forces evaluation by default
* Add AsSharedResource (DX11.Buffer) , to allow to share a dx11 buffer between various processes.
* Add FromSharedResource (DX11.Buffer Structured) , receiver side for shared buffer.
* Add FrameDelay (DX11.Texture 3d) , orthogonal to all framedalys, for 3d textures.
* Add WriteMask (DX11.RenderState) : Allows to control which channels are written to
* Add WithinSphere (DX11.Validator) : Only draw objects which have a bounding box contained within a sphere.
* Added ConstantFactor preset in Blend (DX11.RenderState), to allow to use BlendFactor (DX11.RenderState) more easily.
* All Create Body nodes now have custom string input (which was missing from previous version)
* IsYoungerThan (Bullet Rigid.Filter) new node
* Add AlphaOperation (DX11.RenderState) : Allows to control how the alpha channel is written in the texture (independently of color blending).
* Add S+H (DX11.Texture 2d) , Same as standard S+H nodes, copies a resource if the set pin is on, blocks evaluation and render otherwise (also optimize resource flags/usage behind the scenes).
* Add S+H (DX11.Texture 3d) , for 3d textures
* Add S+H (DX11.Buffer Structured) , for structured buffers


Download here:
{{< contribution "directx11-nodes" >}}