---
categories: "Development News"
author: "joreg"
date: "2021-10-13"
title: "Video playback news"
slug: "video-playback-news"
description: ""
imported: "true"
thumb: "video.jpg"
---


Here goes!

Available in experimental form since a while already, vvvv gamma finally will ship proper stable video playback options with upcoming 2021.4. So here is what we've got for you:


![](video.jpg)
*For both Skia and Stride - Something for everyone!*

##  Video files
Typing "video" in the nodebrowser shows the *VL.Video.MediaFoundation* nuget. Reference it to get these nodes for video playback:

- **VideoPlayer (Stride)**: returns a texture for VL.Stride
- **VideoPlayer (Skia)**: returns an image for VL.Skia

Both play the same [wide range of containers and formats](https://docs.microsoft.com/en-us/windows/win32/medfound/supported-media-formats-in-media-foundatio) and some more can be added by installing the [Mediafoundation codec pack](http://codecguide.com/media_foundation_codecs.htm).

##  Image Sequences
For the playback of image sequences, find the following nodes shipping with the respective nugets:

- **ImagePlayer (Stride)** and **ImagePlayer (FrameBased Stride)** for VL.Stride
- **ImagePlayer (Skia)** and **ImagePlayer (FrameBased Skia)** for VL.Skia

Check their help patches for details on supported formats and some more fine-print.

---

For arguments regarding when to use the VideoPlayer vs. the ImagePlayers nodes, see the new chapter on [video playback](https://thegraybook.vvvv.org/reference/best-practice/video-playback.html) in the gray book.

##  Network synchronization
Yes, please! Using the ImagePlayer nodes, vvvv also offers to have them [play in sync](https://thegraybook.vvvv.org/reference/best-practice/video-synchronization.html) on multiple PCs.

---

Available for testing now in latest [2021.4 previews](https://visualprogramming.net/#Download).