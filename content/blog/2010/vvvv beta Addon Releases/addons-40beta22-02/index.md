---
categories: "vvvv beta Releases"
author: "joreg"
date: "2010-01-27"
title: "addons_40beta22_02"
slug: "addons40beta2202"
description: ""
release: 
    major: "40"
    minor: "22"
    sub: "02"
    date: "2010-01-26"
    app_file: "sites/default/files/addonpack_40beta22_02.zip"
imported: "true"
---


above all this fixes the mess we had with different SlimDX versions needed for different plugins. all plugins in this pack are compiled agains **SlimDX(August 2009)** so make sure you have that installed. this pack contains of course all stuff of the previous packs, including vuxens christmas special!

have to say grandcoder {{< user "vux" >}} was a bit lazy lately, i counted only 2 new plugins:
* MoveMouseJoint (Box2d) 
* Watcher (File)
this time, besides some fixes on existing stuff, like a memoryleak in Box2d... 

at least {{< user "fibo" >}} spent himself a node and us some more:
* Fibo (Spreads)
* * (Octonion)
* / (Octonion)
* Penthacoron (EX9.Geometry)
* ConnectAll (3d Vector)

i spend a video-through option for Contour (FreeFrame DShow9) and Trautner (FreeFrame DShow9) (who also got a *Reload Mask* pin).
ah, and also note the Mesh (EX9.Geometry Collada) node now ships with an animated skinning example. 

hope that all works for everybody,
goodnights.