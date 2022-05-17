---
categories: "News"
author: "ravazquez"
date: "2020-12-16"
title: "VL.OpenCV meets Stride"
slug: "vl.opencv-meets-stride"
description: ""
imported: "true"
---


After NODE 2020, having seen all the wonderful things Stride and vvvv can do together, it was inevitable to fall head first into the adventure that has been bringing Stride and VL.OpenCV into a playful and seamless friendship.

I am happy to announce that as of version 1.2.0 of VL.OpenCV, you can effortlessly and painlessly:

##  Find your camera's position based on a pattern or marker
Need to know where your camera is and what it's looking at based on an Aruco marker or a chessboard calibration pattern? 

Say no more:
![Find camera position and rotation based on Aruco marker 2](FindCameraPoseFromAruco.gif) 

And now from the outside:
![Find camera position and rotation based on Aruco marker 2](FindCameraPoseFromAruco2.gif) 
Dizzy yet?

##  Estimate the pose of an Aruco marker to create AR applications
Bring 3D objects and animations into your image using Aruco markers to create augmented reality projects:
![AR Teapot](AR%20Teapot.gif) 

##  Calibrate a projector
Remember this beauty? It helps you figure out the position and characteristics of your projector in your 3D scene.

![Calibrate projector](CalibrateAProjector.jpg) 




##  And reproject
Once you know where your projector and the spectator are, you only need to worry about the content. 3D projection mapping made easy!
![Reproject](Reproject.gif) 
Not bad huh?

So there you have it boys and girls, 3D computer vision based adventures for all! Head to your local nuget distributor and grab a copy while it's still hot.

A big thank you to motzi, gregsn and tebjan for their invaluable help as well as to many others who contributed one way or another.

And as always, please test and report.

Keep your cameras calibrated kids!

Happy holidays!

#  Changelog
####  Added Stride compatible versions of
- SolvePnP
- ApplyNearAndFar
- Perspective
- ExtrinsicsToViewMatrix
- ExtrinsicsToProjectionMatrix

####  New and improved help patches
- Calculate a camera position using Aruco
- Calculate a camera position using SolvePnP
- Estimate the pose of Aruco markers
- Calibrate a projector and reproject
- Calibrate a camera

####  Bug fixes for
- EstimatePose
- FindChessboardCornersSB
- VideoIn nodes
- VideoPlayer nodes
- CalibrateCamera
- Others

####  New nodes
- VideoIn nodes with lower level access to device index which enable using previosuly unsupported devices
####  General cleanup
####  Improved documentation
####  Moved beta OpenCV to DX11 transformation nodes to a separate document
(\vvvv\nodes\vl\VVVV.OpenCV.vl)