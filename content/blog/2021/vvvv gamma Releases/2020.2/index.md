---
categories: "vvvv gamma Releases"
author: "gregsn"
date: "2021-01-08"
title: "vvvv gamma 2020.2 release"
slug: "vvvv2020.2-gammabeta0"
description: ""
imported: "true"
thumb: "2020.2.png"
---

Hello everyone!

![2020.2](2020.2.png)
Here is the second big release this year for vvvv gamma! Available for **[download](https://visualprogramming.net/#Download)** and **[purchase](https://store.vvvv.org)**. Now!

It comes with improvements that strengthen the toolkit character of vvvv gamma and VL, which are outlined over here: [vvvv-the-tool](/blog/2020/vvvv-the-tool).

It also comes with small improvements for object-oriented programming patterns by introducing the *This* node. Many of those changes were motivated to be able to roll out a *certain library*. So this is the last version *without *that exact library.

**Bugfix releases:**
* 2020.2.2 on October 1st, 2020
* 2020.2.3 on November 17, 2020
* 2020.2.4 on November 25, 2020
* 2020.2.5 on January 8, 2021

For the full list of changes, see the [The Log of Changes](https://thegraybook.vvvv.org/changelog/2020.2.html).

## Updating libraries

This release introduces a breaking change for certain NuGet packages! If you use any of the following packages then you'll have to make sure to use the latest available version:

* VL.OpenCV
* VL.Devices.Kinect2
* VL.Devices.AzureKinect
* VL.Devices.AzureKinect.Body
* VL.Devices.Nuitrack
* VL.Devices.RealSense
* VL.MediaFoundation
* VL.Elementa *-pre*
* VL.Audio *-pre*
* VL.IO.OSC *-pre*
* VL.RunwayML *-pre*

So when updating to 2020.2.x you need to update to the latest version of these libraries. See [Manage Nugets](https://thegraybook.vvvv.org/reference/libraries/dependencies.html#manage-nugets) on how to do so via command-line.

## Running 2020.1.x on the same machine

If, after running 2020.2.x and updating the above libraries you want to run 2020.1.x again, you'll have to make sure to first remove the new packs that are only working for 2020.2.x.

To do so, you'd go to your 
    AppData\Local\vvvv\gamma\nugets
and either delete packs selectively or simply clean the whole directory and re-install NuGets as you need them. 

## Info for library developers

This breaking change only affects your library if it is using a CSharp-project that is referencing VL.Core! In this case, all you have to do is to update VL.Core to 2020.2.x.

Then please communicate which version of your library is compatible with which version of vvvv.

Sorry for the inconvenience, we hope to make it up soon, by sharing a *certain library*...

Happy patching & see you soon,
yours devvvvs!