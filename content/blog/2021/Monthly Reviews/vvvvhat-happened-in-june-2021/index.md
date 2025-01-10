---
categories: "Monthly Reviews"
author: "joreg"
date: "2021-07-08"
title: "vvvvhat happened in June 2021"
slug: "vvvvhat-happened-in-june-2021"
description: ""
imported: "true"
---

Helo from the devvvvlabs!

If you look at [our roadmap](https://thegraybook.vvvv.org/roadmap/planned.html), you can see that we had 2021.4 planned for release in June. Now that didn't happen. Here is what happened instead: Guess what, some things took longer than anticipated. So let's recap the state of currently available 2021.4 previews. Besides numerous bug fixes, here is what you already get:
* Speed improvements for working on larger projects are there, but still with some buggers 
* TextureFX are there but will see one more round of polishing
* Spout nodes recently got a final polish 
* Some little goodies: Renderer ViewPorts, MeshSplit (Experimental), Pipet (Experimental), a non blocking BufferReadback, Custom material overrides, ShaderFX node factory, automatic ShaderFX input pins for all shader types
* Reworked, convenient Buffer and Texture creation nodes have recently been added
* Explicit Type Parameters have recently been added, [see discussion](https://github.com/vvvv/VL-Language/issues/39)
* The This node can be used inside of Create, [see discussion](https://github.com/vvvv/VL-Language/issues/21)

Still in the works for the release: a UI for Settings, simple shader creation, Entity picking, a TexturePlayer. Other things like the planned NuGet update are currently on hold and may have to be moved to the next release.

As many of you do, you can always help by testing the [latest previews](visualprogramming.net/#Download) and [reporting issues in the forum](https://discourse.vvvv.org/c/vvvv-gamma/bug/31)!

## Meetup

Missed the 12th online meetup? Here is what you missed exactly:

* {{< user "hadasi" >}} [Transforming Skeletons](https://youtu.be/AkInLnC944w?t=332)
* {{< user "baxtan" >}} [Animating Robotic Arms](https://youtu.be/AkInLnC944w?t=1472)
* {{< user "aka-visuals" >}} [VL.Fresnel and MegaScans Materials](https://youtu.be/AkInLnC944w?t=2551)
* Max: [First semester student project](https://youtu.be/AkInLnC944w?t=4131)
* Han: [First semester student project](https://youtu.be/AkInLnC944w?t=4484)
* {{< user "sebescudie" >}} [VL.MLNet Model Runner](https://youtu.be/AkInLnC944w?t=4798)
* FUSE team: [VL.Fuse update](https://youtu.be/AkInLnC944w?t=6131)

## Contributions

New:
* {{< contribution "vl.settingsreader" "VL.SettingsReader" >}} by {{< user "ravazquez" >}}
* [VL.Fresnel](https://www.nuget.org/packages/VL.Fresnel) by {{< user "aka-visuals" >}}
* [VL.Teximp](https://www.nuget.org/packages/VL.Teximp) by {{< user "aka-visuals" >}}
* [VL.MLNet](https://www.nuget.org/packages/VL.MLNet) by {{< user "sebescudie" >}}
* [VL.Fuse](https://www.nuget.org/packages/VL.Fuse) by the FUSE team

Update your nugets for the following:
* [VL.Video.MediaFoundation](https://www.nuget.org/packages/VL.Video.MediaFoundation)
* [VL.HapPlayer](https://www.nuget.org/packages/VL.HapPlayer)
* [VL.IO.PLY](https://www.nuget.org/packages/VL.IO.PLY)
* [VL.IO.Firmata](https://www.nuget.org/packages/VL.IO.Firmata/)
* [VL.IO.OSC](https://www.nuget.org/packages/VL.IO.OSC/)
* [VL.IO.NDI](https://www.nuget.org/packages/VL.IO.NDI)
* [VL.Elementa](https://www.nuget.org/packages/VL.Elementa/)
* [VL.Devices.uEye](https://www.nuget.org/packages/VL.Devices.uEye/)

And {{< user "takuma" >}} released his [6th vvvv gamma learn log](https://youtu.be/LqQbjQ7Odj4)!

## Gallery

{{< vimeo "560807156" >}}
*FLOWRZ - Generative A/V composition by Josecarlos Florez*

## Jobs

* Always keep an eye on [the vvvv job board](https://discourse.vvvv.org/c/jobs)
* There are often some more on [dasauge.de](https://dasauge.de/sta/Vvvv/)
* If you need a vvvv specialist or are one yourself, check out this listing of [vvvv specialists available for hire](https://legacy.vvvv.org/documentation/vvvv-specialists-available-for-hire)

---

That was it for June. Anything to add? Please do so in the comments!