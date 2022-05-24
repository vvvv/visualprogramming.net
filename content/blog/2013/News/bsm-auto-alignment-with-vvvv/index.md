---
categories: "News"
author: "joreg"
date: "2013-10-23"
title: "BSM Auto Alignment with vvvv"
slug: "bsm-auto-alignment-with-vvvv"
description: ""
imported: "true"
thumb: "bsmautoalignment.png"
---


One of vvvvs main strengths is interactive 3d graphics projected seamlessly via multiple projectors onto arbitrarily formed screens. Until now the process of aligning projectors and screen with their virtual counterparts (viewports and warp-meshes) and edge-bleding was a manual one. 

Nodes like {{< node "Homography (Transform 2d)" >}}, {{< node "MultiScreen (EX9)" >}}, {{< node "GridEditor (EX9)" >}}, ... are available in vvvv for dealing with custom projection setups but they have to be tweaked manually. Considering scenarios with complex screens, large number of projectors or longterm installations where screens or projectors can subtly move over time this causes additional headache.

![](bsmautoalignment.png)

Enter **BSM Auto Alignment** provided to you by the inventor of {{< node "Trautner (Freeframe DShow9)" >}}. This standalone software only needs:
* a 3d model of your screen-architecture 
* photocameras installed in your setup that "see" the screen
The softwares calibration process returns data as .txt and a blend.bmp for every projector which can be easily utilized using modules and effects available for vvvv. 

For additional information see [BSM Auto Alignment](http://www.brainsalt.com/Products/B6-Series-Software/Calibrator) or [contact BSM](http://www.brainsalt.com/Company/Contact).


