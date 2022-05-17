---
categories: "vvvv beta Releases"
author: "joreg"
date: "2020-05-05"
title: "vvvv_50beta39.1"
slug: "vvvv50beta39.1"
description: ""
release: 
    major: "50"
    minor: "39.1"
    date: "2020-05-04"
    app_file: "sites/default/files/vvvv_beta_39.1_x86.zip"
    app_file_64: "sites/default/files/vvvv_beta_39.1_x64.zip"
imported: "true"
---


![](beta39.1.png)

helo evvvveryone,

this is **vvvv beta39.1**, a bug-fix release. It does not yet include the anticipated update to latest VL, which we save for upcoming beta40. We just want to get another stable version out before such a bigger update that including latest VL will mean. 

Remember that via VL you have access to many more goodies. Here is a convenient list of VL nugets that work with this release. To learn how to install nugets please consult [this documentation](https://vvvv.gitbooks.io/the-gray-book/content/en/reference/libraries/dependencies.html#_manage_nugets) and then use these commands to install them:

{{< box >}}
Nugets requiring a specific version to work with beta39.1
(To use the latest version of these nugets you'll have to wait for upcoming beta40 or use [gamma2020.1](http://visualprogramming.net))
 nuget install VL.OpenCV -Version 0.2.141-alpha
 nuget install VL.Devices.Kinect2 -Version 0.1.45-alpha
 nuget install VL.Devices.Realsense -Version 0.1.7-alpha
 nuget install VL.GStreamer -Version 1.0.18-gadcd7f95e5{{< /box >}}

{{< box >}}
Nugets that do not require a specific version, but still the prerelease flag:
 nuget install VL.Audio -pre
 nuget install VL.IO.M2MQTT -pre
 nuget install VL.IO.NetMQ -pre
 nuget install VL.2D.DollarQ -pre
 nuget install VL.2D.Voronoi -pre
 nuget install VL.Animation.ParticleSystem -pre
 nuget install VL.ColorBlender -pre
 nuget install VL.ColorThief -pre{{< /box >}}

{{< box >}}
Nugets that have a proper release already and thus don't require the prerelease flag:
 nuget install VL.DBSCAN
 nuget install VL.StringExtensions
 nuget install VL.2D.Simplify
 nuget install VL.InfluxDB{{< /box >}}

If you have other public nugets that you tested to work with this release, please post them in the comments below!

{{< box >}}
Note:
We regret to inform you that we no longer offer an installer for this release! Please simply unzip this into a good place on your disk. Then run **config.exe** to install additional requirements, before running vvvv.exe
{{< /box >}}