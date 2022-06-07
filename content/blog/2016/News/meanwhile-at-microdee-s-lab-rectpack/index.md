---
categories: "News"
author: "microdee"
date: "2016-12-01"
title: "meanwhile at microdee's lab: RectPack"
slug: "meanwhile-at-microdees-lab-rectpack"
description: ""
imported: "true"
thumb: "RectPack-Render_r.png"
---


Yo vvvvellas!
I decided to write a little devblog here for stuff I'm adding to my packs, because as you could notice I'm not too good with keeping you guys updated about what's going on around my contribs, not anymore! so for start:

![](RectPack-Render_r.png)

newest addition to mp.essentials is 2 rectangle packing nodes most obviously used for texture packing to an atlas with 2 different algorithms. RectPack (2d Czachurski) and RectPack (2d ChevyRay). Versions are actually carrying the name of the guys whom I ripped of.

The more advanced and most of the cases better algorithm is provided by Patryk Czachurski here: https://github.com/TeamHypersomnia/rectpack2D I ported his code to C# and you can see the result with 413 random rectangles in the above screenshot. Each rectangle has sides between 250-1250 pixels and the Czachurski node packs them into ~15080×15074 pixels sized space. This algorithm also provides multiple sheets (or bins or slices) of atlasses if the input rectangles wouldn't fit in the desired box size. Here is an example with textures using 8448×8832 pixels:

![](RectPack-Renderer_2016.12.01-05.31.08.png) 

The other algorithm provided by Chevy Ray Johnston here: https://github.com/ChevyRay/RectanglePacker might be easier to use, less intelligent and you don't have to specify a box size.

![](RectPack-Renderer_2016.12.01-04.16.51.png) 

However notice it is not at all as efficient as Czachurski in terms of filling the space with lots of rectangles. Same random rectangles are using 22845×24232 pixels. It does a slightly better job at mostly square shaped textures though (here 8448×8704 pixels)

![](RectPack-Renderer_2016.12.01-04.17.10.png) 

you can get it here: {{< contribution "md.ecosystem.mp" >}} through vpm. Enjoy!

###  Immediate Update
Immediately after writing this post I've noticed some differences between my results and the results at Czachurski's repo and I've noticed that apparently C++ sort is the reverse of C# LINQ sort. Now the Czachurski node produces results are replaced now they are more similar to the original ones.
