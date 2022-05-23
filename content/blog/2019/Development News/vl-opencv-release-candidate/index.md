---
categories: "Development News"
author: "ravazquez"
date: "2019-03-17"
title: "VL.OpenCV Release Candidate"
slug: "vl.opencv-release-candidate"
description: ""
imported: "true"
---


# General Status
As you know, efforts have been going for the last year and a half into bringing a computer vision nodeset to VL.

The goal was to incorporate as many of the features covered by the world renowned {{< contribution "vvvv.packs.image" "ImagePack" >}}; contributed by {{< user "elliotwoods" "Elliot Woods" >}} some years ago; while bringing in as many new features and improvements as we could.

In the winter of 2018, after setting a roadmap and having patched a decent initial nodeset, we happily [announced](/blog/2018/vl-opencv-is-in-da-house) the pre-release version of [VL.OpenCV](https://github.com/vvvv/VL.OpenCV).

Since then, listening to your needs and constant feedback, we have tried to polish every corner, fix every bug, document every odd scenario, add plenty of demos and specially we tried to give you a clean, consistent and easy to use nodeset.

At this point in time, we are happy to announce that the goal has been nearly met. Most of the features available in the ImagePack made it into VL.OpenCV with the exception of Structured Light, Feature Detection, StereoCalibrate and some of the Contour detection functionality. At the same time, newer features such as YOLO, Aruco marker detection and others have been brought in for you to play with.

So what's next? Even better documentation and loads of examples!

In the mean time, here is a summary of the new things that have been brought into the package in the last couple of months:

##  CvImage
The new CvImage wrapper around OpenCV's Mat type allows for some optimizations, specially when dealing with non-changing images.

::
![](CvImage.gif)
*CvImage allows nodes to run only once when the image has changed, significantly reducing CPU usage*
::


###  Cache Region lovvvves CvImage!
Since it is now possible to detect if an image has changed, CvImage is a perfect candidate to benefit from Cache regions. 

::
![Cache Region](CacheRegion.gif) 

*Cache regions can now make proper usage of image inputs and outputs*
::

{{< box >}}
Note:
Keep in mind that Cache regions have already been added to most VL.OpenCV nodes. When in doubt just open the node and have a look inside.
{{< /box >}}

##  Renderer
The Renderer was re-built from the ground up to improve usability and to fix bugs and issues. Title, Render Mode and Show Info features were added. Renderer also remembers its bounds on document reload.

::
![Renderer](Renderer.gif)
*New Renderer implementation introduces {{< pin "Title" >}}, {{< pin "Renderer Mode" >}} and {{< pin "Show Info" >}} pins*
::

##  Histograms
Histogram analysis has been added to VL.OpenCV. A useful tool in many scenarios.

::
![Hitograms](Histogram.gif)
*Histograms allow you to analyze pixel value tendencies per channel*
::


##  Homography
Homography and reverse homography are now available in VL.OpenCV.

::
![Homography](Homography.gif)
*Homography (vvvv used only for point IOBox)*
::


##  Stereo Matchers
Two new Stereo Matchers were added, these allow you to create a depth map from a set of stereo images. For more see the StereoDepth demo patch in VL.OpenCV.

::
![Stereo Matcher](StereoMatcher.gif) 
*Depth map obtained from a pair of stereo images*
::

##  Serialization
Serialization support was added for CvImage and Mat types, allowing you to use CvImage as part of more complex data structures which get serialized with no effort. This can be a heavy operation so make sure to trigger it when needed only.

For a hands on demonstration check out the Serialization VL demo that ships with VL.OpenCV.

#  Breaking Changes
As part of this final effort to clean everything even further and make the nodeset consistent and properly organized, we needed to rename and move a few things around which as you can imagine means the introduction of breaking changes.  We understand this is an annoying thing to cope with, but this was basically the reason why we chose to keep this pack in a pre-release state until we felt confident with its structure and approach.

In summary *yes*, you *will* get red nodes when you upgrade your VL.OpenCV projects to the latest version, but in most cases it should be as easy as to double-click and find the node in its new category.

An exception to this are the nodes that got renamed, which we list below:

-Reader (Intrinsics) -> IntrinsicsReader
-Reader (View Projection) -> ViewProjectionReader
-Writer (Intrinsics) -> IntrinsicsWriter
-Writer (View Projection) -> ViewProjectionWriter
-GetByteArray -> ToByteArray
-GetValues -> ToValues
-GetValues (Custom) -> ToValues (Custom)
-FiducialTracker -> FiducialDetector
-Update (FaceRecognizer) -> FaceRecognizerUpdate
-VideoFile (Append) -> VideoWriter (Append)
-VideoFile - VideoPlayer
-Merge -> Join

#  Summarized Changelog
##  General
-Introduced a new wrapper for Mat called CvImage
-Cache region additions to improve performance on non-changing Images
-ImageReader re-implementation
-Renderer re-implementation
-VideoIn re-implementation
-Reintroduced "Supported Formats" output pin on VideoIn node
-Upgraded to VL.Core 0.95.37
-DirectX/OpenCV transformation [documentation](https://github.com/vvvv/VL.OpenCV/wiki/Coordinate-system-conversions-between-OpenCV,-DirectX-and-vvvv) and cleanup
-Added Blocking, Reactive and HoldLatestCopy versions of VideoIn node
-Added Blocking and Reactive versions of ImageReader node
-Reimplemented Extrinsics as a data type
-Stabilized VideoFile Source node and moved from Experimental into Sources
-Added Serialization support for Mat type
-Added Serialization support for CvImage type


##  New in VL
<!--{SPLIT()}-->
**Nodes**
-StereoBMMatcher
-StereoSGBMMatcher
-ToValues (Custom)
-ToValues
-GetChannel
-Histogram
-DrawHistogram
-ToByteArray
-Transform (Perspective)
<!--~~~-->
**Demos**
-DrawNodes
-Homography
-Histogram
-Serialization
-StereoSGBMMatcher
<!--{SPLIT}-->

##  New in vvvv
<!--{SPLIT()}-->
**Nodes**
-IntrinsicsToProjectionMatrix
-ExtrinsicsToViewMatrix
<!--~~~-->
**Demos**
-Calibrate and Reproject
-SolvePnP
-StereoDepth
<!--{SPLIT}-->

---

Remember that in order to use VL.OpenCV you first need to manually install it as explained [here](https://github.com/vvvv/VL.OpenCV/blob/master/README.md). Also, until we move away from pre-release you need to use the latest alpha builds.

We hope you find good use for this library in your computer vision projects and as always, please test and report.