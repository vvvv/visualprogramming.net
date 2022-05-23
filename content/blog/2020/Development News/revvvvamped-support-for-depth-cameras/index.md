---
categories: "Development News"
author: "joreg"
date: "2020-07-27"
title: "Revvvvamped support for Depth Cameras"
slug: "revvvvamped-support-for-depth-cameras"
description: ""
imported: "true"
---


![](Kameras-withoutWall-bright3.png)
*Still life with cactus*

In a quest to get more basic things working out of the box with VL (ie. using vvvv beta>=40 or the all-new [vvvv gamma](http://visualprogramming.net)), we took on to support your favorite depth cameras. Most of the cameras and their APIs share basically the same features as a baseline and then some of them have a few extra features. This means that using them in vvvv works mostly the same for all of them. 

You have the main device node that you connect ColorImage, DepthImage, PointCloud, Skeleton,... nodes to, to get the desired info out of them. See the help patches coming with the packs for details.

![](kinect2-nodesjpg.jpg)

Here is a list and comparison of all available depth cameras with links to the respective packs on nuget.org. To learn how to use nuget packs with vvvv please watch [HowTo use Nugets](https://youtu.be/-U_kUQ3VDog).

# Kinect
The original Microsoft Kinect or the XBOX 360 that was released a bit later. 
Get the [VL pack on nuget.org](https://www.nuget.org/packages/VL.Devices.Kinect).
Created with support by {{< user "chaupow" >}}.

<!--{SPLIT()}-->
**Pros**
* everyone has one at home
* good enough for quick prototyping
* can connect multiple to one PC
<!--~~~-->
**Cons**
* no longer produced
* complicated cabling
* skeleton tracking requires T-Pose to initialize
<!--{SPLIT}-->

# Kinect v2
The second version of the Microsoft Kinect.
Get the [VL pack on nuget.org](https://www.nuget.org/packages/VL.Devices.Kinect2).
Created with support by {{< user "ravazquez" >}}.

<!--{SPLIT()}-->
**Pros**
* everyone has one at home
* quite robust and performant skeleton tracking
<!--~~~-->
**Cons**
* no longer produced
* complicated cabling
* can only connect one per PC
<!--{SPLIT}-->

# Azure Kinect
The third version. [AzureKinect](https://azure.microsoft.com/en-in/services/kinect-dk/).
Get the [VL pack on nuget.org](https://www.nuget.org/packages/VL.Devices.AzureKinect).
Get the [VL pack for skeleton tracking on nuget.org](https://www.nuget.org/packages/VL.Devices.AzureKinect.Body).

<!--{SPLIT()}-->
**Pros**
* easy cabling
* does not require extra drivers to be installed
<!--~~~-->
**Cons**
* to this point rather slow skeleton tracking as compared to Kinect v2
<!--{SPLIT}-->

# Orbbec Astra
[Orbbec Astra](https://orbbec3d.com/).
Get the [VL pack on nuget.org](https://www.nuget.org/packages/VL.Devices.Astra).

<!--{SPLIT()}-->
**Pros**
* easy cabling
* small form factor
<!--~~~-->
**Cons**
* requires extra license for skeleton tracking
<!--{SPLIT}-->

# Intel RealSense
[Intel RealSense](http://intelrealsense.com/).
Get the [VL pack on nuget.org](https://www.nuget.org/packages/VL.Devices.RealSense).

<!--{SPLIT()}-->
**Pros**
* easy cabling
* smallest form factor
* highly configurable
* built-in depth image filters
<!--~~~-->
**Cons**
* Skeleton tracking for now only in connection with Nuitrack (see below)
<!--{SPLIT}-->

# Nuitrack API
[Nuitrack](https://nuitrack.com/) is a piece software that works with all of the above cameras and provides skeleton, hand and face tracking.
Get the [VL pack on nuget.org](https://www.nuget.org/packages/VL.Devices.Nuitrack).
Created with support by {{< user "ravazquez" >}}.

<!--{SPLIT()}-->
**Pros**
* a unified API for all of the above cameras
<!--~~~-->
**Cons**
* requires extra license for skeleton tracking
* can only handle one camera at a time
* weird setup and configuration
<!--{SPLIT}-->

# Leap Motion Controller
The [Leap Motion Controller](https://www.ultraleap.com/product/leap-motion-controller/) device provides hand and finger tracking.
Get the [VL pack on nuget.org](https://www.nuget.org/packages/VL.Devices.LeapOrion).

<!--{SPLIT()}-->
**Pros**
* for precise and close-up hand and finger tracking
<!--~~~-->
**Cons**

<!--{SPLIT}-->

---

Please help us improve this list of pros and cons. Know any other or disagree with some mentioned, please add them in the comments! This could eventually grow into a page of [the gray book](http://thegraybook.vvvv.org/).