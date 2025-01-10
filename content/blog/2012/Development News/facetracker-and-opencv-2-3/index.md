---
categories: "Development News"
author: "joreg"
date: "2012-04-18"
title: "FaceTracker and OpenCV 2.3"
slug: "facetracker-and-opencv-2.3"
description: ""
imported: "true"
---


helos,

this is to announce the availability of a new node called 
**FaceTracker (DShow9 Freeframe)**
in the latest [alpha builds](https://legacy.vvvv.org/downloads/previews). it is essentially a wrapper around [Jason Saragih's facetracking library](http://web.mac.com/jsaragih/FaceTracker/FaceTracker.html) (to whom all credits belong). Please note though that it is only licensed for non-commercial use which means you must not use it in a commercial project even if you aquired a vvvv-license!

additional credits go to [enrico viola](http://naufolio.augmentedrealityag.com/) for guiding the process of implementing jasons library in the freeframe plugin for vvvv. and to [marco tempest](http://marcotempest.com/) for insisting on having this in his [magic-and-storytelling](/blog/magic-and-storytelling) ted-talk.

Since the facetracker library is based on opencv 2 (and vvvv so far only shipped with opencv 1) this has been upgraded as well. ie. all freeframe trackers that use opencv have been converted to use opencv2 now. this shouldn'd change anything for most of you. only if someone was using a private freeframe-node that used opencv that would now also needed to be upgraded in order to still work with vvvv. 

@{{< user "avaos" >}}
@{{< user "d723lld" >}}
would be interesting to hear if those changes fixed this problem you had: 
[forum](forum)