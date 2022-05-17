---
categories: "Development News"
author: "joreg"
date: "2018-03-29"
title: "VL: OpenCV is in da house!"
slug: "vl-opencv-is-in-da-house"
description: ""
imported: "true"
---


computervisionados!

we're starting to collect the fruits of our hard efforts of making it easy to use thirdparty libraries. please give a warm welcome to **[VL.OpenCV](https://github.com/vvvv/VL.OpenCV)**

## What the?
remember the amazing {{< contribution "vvvv.packs.image" "ImagePack" >}} initiated by @elliotwoods years ago? VL.OpenCV is essentially the same, only for vl: a collection of nodes for computer-vision tasks based on the industry standard library [OpenCV](https://opencv.org/).

OpenCV is a vast library with an endless number of interesting features. elliot back in the days did a great job in hand-picking some of the most interesting ones and wrapping them into easy to use nodes for evvvveryone. 

meanwhile OpenCV has progressed and so we thought we'd give it a try and make it accessible for everyone in vl. watch this first episode of vvvvTv where {{< user "ravazquez" >}} who has been working on this for the past 2.5 months, explains how you can use the prerelease package today.

{{< youtube "4hPH5CokxwQ" >}}

## Status
if we haven't missed anything, most of the functionality you know from the ImagePack should already be available, except some special video input devices, StructuredLight and FeatureDetection stuff but on the other hand already much more:

so we have:
- sources: ImageFile, VideoFile, VideoIn (Directshow)
- sinks: ImageFile, VideoFile
- filters: Blur, EdgeDetection, Average, FrameDifference...
- different background substraction options
- optical flow
- camera/projector calibration
- trackers: contours, face recognizer, houghlines, object detection (via haarcascades), different 2d tracker options
- ar marker tracking and pose estimation
- utils: Info, CountNonZero, FindNonZero, Resize, Crop, Insert, Split, Merge, Delaunay, Voronoi,...

and most of the nodes and pins come with documentation in the tooltips!

### Threading
as opposed to the ImagePack, this library is completely free of the complexities of threading. instead a user can use the threading regions of vl to define their own threading. while this indeed puts a bit more effort on the user we hope that the flexibility in dealing with their own threading outweighs the cons of this. 

## Next
the library is open for everyone to contribute. since it is mostly done in pure vl, with hardly any c# written, it is quite accessible for everyone to extend. so please do so and best join us [in the chat](https://riot.im/app/#/room/#vvvv:matrix.org) to discuss matters when they arise. 



