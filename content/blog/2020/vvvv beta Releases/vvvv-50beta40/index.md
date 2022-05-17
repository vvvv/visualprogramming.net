---
categories: "vvvv beta Releases"
author: "joreg"
date: "2020-07-07"
title: "vvvv_50beta40"
slug: "vvvv50beta40"
description: ""
release: 
    major: "50"
    minor: "40"
    date: "2020-07-01"
    app_file: "sites/default/files/vvvv_beta_40.1_x86_setup_0.exe"
    app_file_64: "sites/default/files/vvvv_beta_40.1_x64_setup.exe"
imported: "true"
---


![](beta40-0.png)

Here we go,

this is **vvvv beta40**, combining the coziness of vvvv beta with the latest version of VL - the  self proclaimed "future of visual programming". 

Highlights of this release:
- A fix for working with Spout and DX11
- Update to the latest version of VL

Through the integration with the latest version of VL, we're now again on par with the VL version that comes with [vvvv gamma](https://visualprogramming.net). This means that with vvvv beta40 you can now use the same latest versions of nugets, that you can use with the vvvv gamma 2020.1.x series.

Why should you update? Because this gives you access to the latest developments on these libraries:

{{< box >}}
- VL.OpenCV
- VL.Audio
- VL.MediaFoundation
- VL.Elementa
- VL.Devices.RealSense
- VL.Devices.Astra
- VL.Devices.Kinect
- VL.Devices.Kinect2
- VL.Devices.AzureKinect
- VL.Devices.Nuitrack
- VL.Devices.LeapOrion
- VL.Devices.WinTab
and [so many more](https://www.nuget.org/packages?q=vl).{{< /box >}}

To learn how to install nugets please consult [this documentation](https://thegraybook.vvvv.org/reference/libraries/dependencies.html#manage-nugets).

**EDIT 18 02 2021:**
Replaced beta40 with beta40.1, because an issue emerged that made the installer of beta40 to fail under certain conditions. So beta40.1 is exactly the same as beta40, except with the installer issues fixed.

## Offline Installer
32bit Version: [core](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:33928/artifacts/content/vvvv_beta_40.1_x86_setup_offline.exe) [addons](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:33928/artifacts/content/addons_40.1_x86.zip)
64bit Version: [core](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:33777/artifacts/content/vvvv_beta_40.1_x64_setup_offline.exe) [addons](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:33777/artifacts/content/addons_40.1_x64.zip)

