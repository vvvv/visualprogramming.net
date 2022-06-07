---
categories: "Development News"
author: "tonfilm"
date: "2019-08-23"
title: "VL: Switch to Xenko Math"
slug: "vl-switch-to-xenko-math"
description: ""
imported: "true"
thumb: "SharpDX_to_Xenk_r.png"
---


![](SharpDX_to_Xenk_r.png)

In preparation for the [Xenko game engine integration](/blog/2018/vl-xenko-3d-engine-update-2) we decided to change the default math library of VL from SharpDX to Xenko. The decision was particularly easy since both math libraries have the same origin and most types and methods are identical. And thanks to the VL import layer it's easy to switch out the types, without any noticeable changes for the VL user.

What you get:
* Existing VL patches will continue to work as before
* No conversion needed when working with Xenko
* Faster matrix uploads to GPU (see below)

## Trivia
We are (again) in luck with Xenko since it just so happened that [Alexandre Mutel](https://github.com/xoofx), who developed SharpDX, was a core developer at Xenko. We actually didn't know that at the time we started to work on the VL core library. We chose SharpDX mainly because it was well established, complete and open source. So it was quite a nice surprise when we browsed the Xenko source code for the first time and saw that they basically use the same math code.

## Download
Here are direct links to the latest preview versions:
**[vvvv gamma 2019.1 preview](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:30533/artifacts/content/vvvv_gamma_2019.1.0-0624-g5df7a10830_setup.exe) 624**
**[vvvv_50alpha38.2_x64](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:30539/artifacts/content/vvvv_50alpha38.2_x64.zip)**
**[addons_50alpha38.2_x64](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:30539/artifacts/content/addons_50alpha38.2_x64.zip)**

## Technical Details
This section is only relevant for library developers.

### Transposed Matrix Memory Layout
Xenko's 4x4 matrices have a transposed memory layout compared to SharpDX. This is not to be confused with transposed matrix elements (M11, M12, M13 etc.), it is only relevant when doing low-level operations with memory and pointers, such as uploading them to the GPU. The big advantage of it is, that Xenko's matrices can directly be uploaded to the GPU without the overhead of transposing them.

### Changes on C# Projects
Most C# projects written for VL don't need to be changed. Only if they use the SharpDX.Mathematics nuget to work with vectors, matrices, rectangles etc.:

* Must switch to Xenko math
* Must use the new [SDK style project format](https://docs.microsoft.com/en-us/nuget/resources/check-project-format)

In order to transition your C# project to Xenko, remove the [SharpDX.Mathematics](https://www.nuget.org/packages/SharpDX.Mathematics/) nuget and install [Xenko.Core.Mathematics](https://www.nuget.org/packages/Xenko.Core.Mathematics) instead. Then change the using statements in the C# files:
```
//old:
using SharpDX;

//new:
using Xenko.Core.Mathematics;
```

If you then get an error on compilation, your project might be in the old format. Upgrading is quite easy, it just involves changing the header and deleting most lines in the project file. Follow [this guide](https://natemcmaster.com/blog/2017/03/09/vs2015-to-vs2017-upgrade) or [join our chat](https://riot.im/app/#/room/#vvvv:matrix.org) if you need help.

Please give the new version a spin and send us a report if anything doesn't work as before.
Happy calculations!

Yours,
devvvvs