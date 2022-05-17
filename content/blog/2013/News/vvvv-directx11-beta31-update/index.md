---
categories: "News"
author: "vux"
date: "2013-09-04"
title: "vvvv DirectX11 beta31 update"
slug: "vvvv-directx11-beta31-update"
description: ""
imported: "true"
---


Here we are, DirectX11 nodes update, quite a few nice bits on that one.

First the usual little bug fixes/improvements:
* FileTexture should behave in much nicer way now.
* Quad (DX11 Layer) had a little issue with spreads.
* World (Kinect) should be much faster.
* Face (Kinect) should be much faster.
* Small issue when having 0 size on dynamic buffers.
* Preview Node now has Alpha support (optional) (Joreg)
* Aspect Ratio Layer has transform In pin.
* Main Renderer does not have enum for format anymore (since only one format works properly anyway). That will sort writer/screenshot issues.
* Better check on shader resources.
* Some Shared Textures fixes from Joreg.
* Fix filter for dx9/dx11 effects (Joreg).
* FileTexture 2d has properly working "No Mips" option.
* FileTexture 2d has proper mips support in case of cubemaps/textureArrays.
* RenderStates had issue on update.
* Mouse/Keyboard/Touch state from renderer now have a pre built framedelay.


That's it for little fixes, no here are the new toys:
* Full 64 bits support (that also includes VLC).
* New Node ReadBack (DX11.Buffer Region). Allows you to retrieve only a part of a structuredbuffer back to cpu, limiting bandwidth and then faster than readback for some cases.
* Many more options for textureFX. Now you can send a Depth Buffer as input (for early discard). State presets are assignable to a specific Pass. Pass allows you to preserve target (eg: you can now bind the same texture output in several passes). Also you can now access pass index as semantic. You can now do some really complex image processing without leaving your code editor ;)
* Renderer (CubeMap): self explanatory i guess ;)
* Renderer (TextureArray) : allows to render a "spread" of textures for a spread of cameras.
* Pipeline has a new option (MRT/Forward/Depth) called Collector. More info on that soon, but it's very exciting believe me :)

And as usual some new samples in girlpower:
* Basic Stencil example (sm4)
* Plane Side (sm4)
* Depth Edge (sm4)
* Pixel Coverage (sm5)
* Stencil Rebind (sm5)

Downloads here:
{{< contribution "directx11-nodes-alpha" >}}

That's it for now, already some good plans for next release, stay tuned! 



