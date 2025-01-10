---
date: "2023-12-04"
title: "vvvvhat happened in November 2023"
description: "Last month in review"
categories: Monthly Reviews
author: joreg
---

If you haven't been aware yet:

The third week in a row now, on Thursday evening, The NODE Institute is running one of a series of [vvvv intermediate-level workshops](https://thenodeinstitute.org/ws23-vvvv-intermediates/).

[![](WS23-VVVV-Intemediates-FuseIntro.png)](https://thenodeinstitute.org/ws23-vvvv-intermediates/)

Next on the list, this Thursday December 7, is an [Introduction To FUSE](https://thenodeinstitute.org/courses/ws23-vvvv-03-fuse-introduction/) the clever GPU patching library. It is **free to join** once you are registered at The NODE Institute, so there is really no good excuse to miss it!

Further we're happy to finally have a release out, officially supporting [Augmenta](https://visualprogramming.net/blog/2023/introducing-augmenta/), a plug & play solution tracking people in a room or hands on a wall or table. 

And here some more topics we've been working on lately, so you know what's cooking:
- Latest vvvv gamma 5.3 previews are shipping with VL.Serialization.MessagePack, which adds support for [MessagePack](https://msgpack.org/) a widely used binary serialization format
- MessagePack is now also the default serialization under the hood of VL.IO.Redis
- Bindings with VL.IO.Redis can now also have an "Expiry" set, allowing them to be auto-deleted after a given time
- Lastet previews are also already shipping with the new Logging system. If you can't await the announcement blog-post, check the helpbrowser for "logging"
- Work on Global Channels and Bindings is ongoing
- We have a branch where we're running on .NET8 already
- We have a branch where we're we can use `ComputeColor` in shaders to get inputs of type `GPU<RGBA>`
- Work is ongoing for adding more features to [VL.Devices.ZED](https://www.nuget.org/packages/VL.Devices.ZED) 
- We're preparing a PR towards Stride, adding support for the [Passthrough](https://registry.khronos.org/OpenXR/specs/1.0/html/xrspec.html#XR_FB_passthrough) extension for OpenXR
  
## Contributions
Many thanks to those of you who help complete vvvv with countless additions! For an overview of libraries available for vvvv [start here](https://thegraybook.vvvv.org/reference/libraries/overview.html).

This past month, we've received two new ones: 
- [VL.Augmenta](https://www.nuget.org/packages/VL.Augmenta)
- [VL.Devices.StreamDeck](https://www.nuget.org/packages/VL.Devices.StreamDeck)

And updates to the following:
- [VL.Kairos](https://www.nuget.org/packages/VL.Kairos)
- [VL.Kairos.Runtime](https://www.nuget.org/packages/VL.Kairos.Runtime)
- [VL.ExtendedTutorials](https://www.nuget.org/packages/VL.ExtendedTutorials)
- [VL.IO.RCP](https://www.nuget.org/packages/VL.IO.RCP)
- [VL.SharedMemory](https://www.nuget.org/packages/VL.SharedMemory)

Plus new entries in the forum’s work-in-progress section:
- [Typography patches in SKIA](https://discourse.vvvv.org/t/typography-patches-in-skia/22101)
- [Create VL documents from the explorer’s context menu](https://discourse.vvvv.org/t/create-vl-documents-from-the-explorers-context-menu/22141)
- [Making Peace with Blending and Color Spaces](https://discourse.vvvv.org/t/making-peace-with-blending-and-color-spaces/22089)

## Gallery

This month we celebrate this beauty shot, posted on our shared [madewithvvvv account](https://pixelfed.social//madewithvvvv/). Many thanks go out to the guest. Please keep them coming!

{{< pixelfed "pixelfed.social/p/madewithvvvv/628311469870676332" >}}

## Jobs
- Always keep an eye on the [vvvv job board](https://discourse.vvvv.org/c/jobs)
- There are often some more on [The Interactive & Immersive Job Board](https://jobs.interactiveimmersive.io/?s=vvvv&post_type=job_listing&orderby=date) and [dasauge.de](https://dasauge.de/sta/Vvvv/)
- If you need a vvvv specialist or are one yourself, check out this listing of [vvvv specialists available for hire](https://legacy.vvvv.org/documentation/vvvv-specialists-available-for-hire)

That was it for November. Anything to add? Please do so in the comments!
