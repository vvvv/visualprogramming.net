---
categories: "News"
author: "microdee"
date: "2018-01-23"
title: "FaceTracker (DX11.Texture 2d)"
slug: "facetracker-(dx11.texture-2d)"
description: ""
imported: "true"
originalType: "stuff"
---


So I found this library: https://github.com/ShiqiYu/libfacedetection
And it was super easy to use. So after a wrapper class and a handling node here are the results from vvvv with any DX11 texture:

![title](https://media.giphy.com/media/3oFzlYOlr1taS3LeEw/giphy.gif)
Trololo at 60-70 fps with multiview-reinforce engine.

![crowd](https://media.giphy.com/media/3oFzml3dbiTWBPaLsY/giphy.gif)
![crowd](https://media.giphy.com/media/l49JQrmTNPRRu7jwI/giphy.gif)
Crowd footage at 10-20 fps with multiview engine. It tracks as many faces as much you throw at it.

This library is fast but far from accurate. But I made the wrapper class in a way that in the future it can be easily extended with other engines, so if anyone finds robust and fast face trackers, throw that at me and I'll implement it if they don't cost a fortune.

Available in mp.dx http://vvvvpm.github.io/#mp.dx
Enjoy!