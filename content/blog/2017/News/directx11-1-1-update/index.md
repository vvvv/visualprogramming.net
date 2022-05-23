---
categories: "News"
author: "vux"
date: "2017-06-24"
title: "DirectX11 1.1 Update"
slug: "directx11-1.1-update"
description: ""
imported: "true"
---


Just in time for the upcoming amazing Node 17, here is the latest DirectX11 release.

This gets a little bump to version 1.1, and as usual there's a semi decent changelog.

So what's new? (Please read before to click on the download link ;)

Let's first give a little space for the two big tickets (which deserve a little bigger spot than a mini bullet list)

First one, every node except Kinect 2 (and experimental) have a help patch, since last release you now have more than 100 extra help patches. So pressing F1 will now bring you in some land with an example or at least explanation for the most advanced nodes.

Second one, Bullet has been reworked and got some big redesign. There's been a large emphasis into making the set easier to use and of course many new nodes (Creation done by body type, more nodes to define properties, filter API, constraints, vehicle...)
Please note that for this release soft bodies are left out, they will be back (in force) in next version.

And of course, some usual new features/fixes:
* All components are in various subfolders, to make it easier to search, pick and mix.
* Kinect 2 nodes were missing a few dependencies, which are now part of build.
* Renderer (DX11) has option to disable default shortcuts when focused.
* Renderer (DX11.Volume)was throwing an error on delete/exit if it was never used
* Anisotropic sampler node clamps value from 0->16 (otherwise creation would fail)
* Multi slice validator was broken, now it's working again.
* Unzip text style was using a wrong type
* Text layout nodes set a ui minimum value for maxwidth/mxheight, and enforce a >= 0 to avoid invalid argument error
* Line Strip now has adjacency option (to build line adj instead)
* New node : GetSpread (DX11.Layer Order):  allows to get spread on a layer, this is much faster than using a validator counterpart.
* Bezier patch helpers on non uniform control points were displaying incorrectly.
* PixelBillBoard and ViewportBillBoard (DX11.Layer) are now spreadable
* SetSlice (TextureArray) now outputs individual slices as well as single TextureArray
* Text library is replaced by a pure c# counterpart, which avoids to require any of the visual c++ toolchains to build the pack (and the correct visual studio version that goes with it)
* FromSharedTexture disposes old handle properly, and handles Nil input properly if it occurs
* Info (DX11.Texture2D) has a pin with creation time (debug timestamp provided by the driver)
* New node : ViewportRouter (DX11.Layer) Some group that sends layer on a per viewport basis
* Image shader size defaults are hidden and not collapsed now, since they are frequently used for sources
* Text nodes support validators (except frustum test)
* Renderer (DX11.StreamOut) was not releasing buffer properly.
* Renderer (DX11.StreamOut Advanced) new node.
* AsTexture (DX11.Texture 2d Raw) Create texture from a stream (use data as it is, and user needs to provide format/size/stride). Also allows to read from specific location in the stream.
* Fix memory leak on text (DX11.Geometry)


Download here:
{{< contribution "directx11-nodes" >}}