---
date: "2022-07-04"
title: "vvvvhat happened in June 2022"
description: "Last month in review"
categories: Monthly Reviews
author: joreg
---

Save the date:

We have a **meetup on July 7th**, see [18th worldwide meetup](../../2022/18.-vvvv-woldwide-meetup).

And then you want to know what's happening under the hood? Quite a lot these days. Here is an incomplete list:

- We've started work on wrapping [ImGui](https://github.com/ocornut/imgui) into a convenient set of nodes. Best read [The ImGui Pitch](https://github.com/ocornut/imgui#the-pitch) to understand what to expect and also what not
- Work has finished on providing basic [OpenXR](https://www.khronos.org/OpenXR/) support for Stride. Waiting for the PR to be accepted so we can ship that with vvvv
- We're consolidating IO libraries SerialPort, TCP, WebSocket, ZMQ and MQTT to standardize and simplify their usage
- The NodeBrowser is getting a simpler mode for choosing overloads
- Need projector auto-alignment for one of your projects? We have you covered. If you're interested, [please get in touch](mailto:devvvvs@vvvv.org) and we can see if it will work for your project, even before we publish the packs for everyone to try
- The still to be announced .NET6 branch is getting an option to work with precompiled .vl documents (think: speed and resource improvements during patching)

## Contributions
We got two new ones:
* [VL.Stride.Text3d](https://www.nuget.org/packages/VL.Stride.Text3d)
* [VL.3D.Curve](https://www.nuget.org/packages/VL.3D.Curve)

and received updates to the following:
* [VL.Devices.Phidgets](https://www.nuget.org/packages/VL.Devices.Phidgets)
* [VL.OpenCV](https://www.nuget.org/packages/VL.OpenCV)
* [VL.CEF](https://www.nuget.org/packages/VL.CEF)
* [VL.IO.TCP](https://www.nuget.org/packages/VL.IO.TCP)
* [VL.ScreenRecorder](https://www.nuget.org/packages/VL.ScreenRecorder)

Still cooking are these two pull requests for VL.Stride:
* [TextureFX update](https://github.com/vvvv/VL.Stride/pull/565)
* [Geometry Primitives](https://github.com/vvvv/VL.Stride/pull/561)

aaand [tobyk](https://legacy.vvvv.org/users/tobyk) created a [vvvv tutorial](https://youtu.be/RXDRfqLbc74) that looks like it could become a bit of a series...

## Gallery
![image](https://schnellebuntebilder.de/wp-content/uploads/2022/05/210314_hu_labor_12_1920-1280x853.jpg)
[The Research Wall](https://schnellebuntebilder.de/the-research-wall/) by [SCHNELLE BUNTE BILDER](https://schnellebuntebilder.de)

Also by the same pack: [Panic](https://schnellebuntebilder.de/panic/)

## Jobs

- Always keep an eye on the [vvvv job board](https://discourse.vvvv.org/c/jobs)
- There are often some more on [The Interactive & Immersive Job Board](https://jobs.interactiveimmersive.io/?s=vvvv&post_type=job_listing&orderby=date) and [dasauge.de](https://dasauge.de/sta/Vvvv/)
- If you need a vvvv specialist or are one yourself, check out this listing of [vvvv specialists available for hire](https://legacy.vvvv.org/documentation/vvvv-specialists-available-for-hire)

That was it for June. Anything to add? Please do so in the comments!