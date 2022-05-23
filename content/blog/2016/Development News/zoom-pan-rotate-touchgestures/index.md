---
categories: "Development News"
author: "woei"
date: "2016-12-14"
title: "Zoom, Pan, Rotate TouchGestures"
slug: "zoom-pan-rotate-touchgestures"
description: ""
imported: "true"
---


this little feature upgrade for both vvvv and vl has been lingering around the alphas for a year already...

do you (have to) create touch applications with vvvv? then read ahead:
**Pan, Zoom, Rotate,** TwoFingerTap and PressAndTap touch gestures are now handed over to you via the **GestureDevice**. As expected they're multitouch capable, so they report an ID, the position, the distance (Pan & Zoom amount) or the Rotation, and a device ID (in case you have multiple monitors hooked up)
![vvvv gesture nodes](vvvvGestures.png)
*gesture node set in vvvv*
As with the Touch nodes, these also rely on the windows message loop. so touchscreens with windows capable drivers required. fortunately most screens do have these nowadays...

check the helppatches for a microdemo
-----
As mentioned, everything is accessible in VL as well. though you have the equivalent of the vvvv nodes as the one GestureState node you see a lot more nodes. due to VL understanding types it's possible to have much more fine grained control over how to deal with the incoming gesture events. 
![vl gesture nodes](vlGestures.png)
*vl gesture node set*


hope you like it,
happy fingering