---
categories: "Development News"
author: "joreg"
date: "2024-10-15"
title: "Introducing: Support for RPLidar devices by Slamtec"
description: "For your surface-scanning needs"
thumb: thumb.jpg
---

Dear scanners of surfaces,

we're happy to announce that we now have stable support for RPLidar devices by [Slamtec](https://www.slamtec.com/).

[![](header-logo.png)](https://www.slamtec.com/)

*"SLAMTEC's core R&D team is experienced in the development and application of robot autonomous localization and navigation solution as well as related core sensors."*

...and while you might not build robots, those sensors can help you turn any flat surface into a multitouch canvas with just a few clicks!

![RPLidar devices by Slamtec](2024-10-15-15-42-09.png)

Based on a [third-party C# implementation](https://www.nuget.org/packages/RPLidar4Net.IO) of their [RPLidar SDK](https://github.com/slamtec/rplidar_sdk) we've created the [VL.Devices.RPLidar](https://www.nuget.org/packages/VL.Devices.RPLidar) package, implementing a node-set for you to quickly access the data of one or multiple [supported models](https://github.com/slamtec/rplidar_sdk?tab=readme-ov-file#supported-platforms). 

![](2024-10-15-09-48-49.png)

As you can see in the help patch above there is really not much to it: You simply get a spread of measured points out of the device. Combine those with NuGets [VL.DBSCAN](https://www.nuget.org/packages/VL.DBSCAN) and [VL.TrackObjects](https://www.nuget.org/packages/VL.TrackObjects) and you have all the tools to fine tweak your multitouch surface...

## Credits

Development of this library was kicked off through a priority support inquiry by Emanuele Foti.

If you have a request for custom development, don't hesitate to [get in touch](mailto:devvvvs@vvvv.org)!