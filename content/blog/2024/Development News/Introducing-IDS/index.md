---
categories: "Development News"
author: "joreg"
date: "2024-08-20"
title: "Introducing: Support for Industrial Cameras by IDS Imaging"
description: "For your computer-vision needs"
thumb: thumb.png
---

Dear patchers,

we're happy to announce that we now have full support for uEye and uEye+ industrial cameras by [IDS Imaging](https://ids-imaging.com/).

[![](ids-logo.svg)](https://ids-imaging.com/)

*"IDS stands for high-performance, easy to handle USB, GigE and 3D cameras with a great range of sensors and variants."* and they are now a first class citizen with vvvv!

![Selection of IDS cameras](ids-cameras.jpg)

Based on their new [IDS peak](https://en.ids-imaging.com/ids-peak.html) SDK we've created the [VL.Devices.IDS](https://www.nuget.org/packages/VL.Devices.IDS) package, implementing a node-set for you to quickly access the streams of one or multiple cameras in parallel. 

![](2024-08-20-10-54-28.png)

A listing of all properties available for the selected device is reported. All properties can be individually configured and their status retrieved. Like this you have full access to your cameras capabilities. 

## Sponsor credits

For the sponsoring of this [open-source](https://github.com/vvvv/VL.Devices.IDS) development we bow to [Refik Anadol Studio](https://refikanadol.com/).

If you also have a request for custom development, [get in touch](mailto:devvvvs@vvvv.org)!