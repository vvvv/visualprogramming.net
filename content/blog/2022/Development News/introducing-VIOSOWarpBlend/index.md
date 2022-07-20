---
categories: "Development News"
author: "joreg"
date: "2022-07-20"
title: "Introducing: VIOSO Projector Warping and Blending"
description: "A projector auto-alignment system"
thumb: v.jpg
---


Dear projectionists!

As part of our larger [projection mapping](https://thegraybook.vvvv.org/reference/libraries/projectionmapping.html) initiative here's a first release which will be a massive timesaver for you:

**Scenario**: You're working on a non-trivial projection setup including multiple overlapping projections on a non-flat screen. You find it a hassle to make all the projections map and blend correctly. You do it once and then, the next day, a projector or the screen was moved slightly. You're not amused. But still, you do the whole thing again...

**The good news**: There are thirdparty tools that let you automate large parts of that workflow. After initial setup, it requires just one click to re-calibrate your projections.

**Enter**: 

![](vioso.png)

Our partner [VIOSO](https://vioso.com) is a pioneer in the field of autocalibration and thanks to their great support it was a breeze for us to implement their solution for you. 

With [VL.VIOSOWarpBlend](https://www.nuget.org/packages/VL.VIOSOWarpBlend) we provide a library that let's you apply calibrations created using [VIOSO Integrate](https://vioso.com/vioso-integrate/) with just a few clicks. 

![](demopatch.png)

And you can test it yourself right away:
* Downloade the [trial version of VIOSO Integrate](https://vioso.com/downloads/#integrate)
* Get latest [vvvv gamma 2021.4.10](https://visualprogramming.net/#Download)
* [Install](https://thegraybook.vvvv.org/reference/hde/managing-nugets.html) the VL.VIOSOWarpBlend NuGet

All you then need is at least one projector (it is more fun with multiple of course) and a camera (even a webcam is enough for testing). 

For simply mapping textures onto a screen, a [2d calibration](https://helpdesk.vioso.com/documentation/core-video-tutorial/) as demonstrated in the following video, is sufficient:
{{< youtube 2yOslfdEm8c >}}

If instead of a flat texture you want to project a 3d scene with a possibly dynamic spectator position (think: head-tracker), a [3d calibration](https://helpdesk.vioso.com/documentation/vrsim-3d-calibration/) is required.

So please give it a spin and don't hesitate to get in touch [with us](mailto:devvvvs@vvvv.org) or [VIOSO](https://vioso.com/contact-overview/) if you encounter any issues or have more specific questions.

Happy mapping!