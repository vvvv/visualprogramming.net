---
categories: "Development News"
author: "gregsn"
date: "2016-12-11"
title: "Go back in time now"
slug: "go-back-in-time-now"
description: ""
imported: "true"
---


Ever wanted to tweak time? Well now you can! 

As a patcher you might want to have a look at the {{< node "Clock (VVVV)" >}} node and look at the help patch to get startet. Have some animation running to see the effect. It already allows you to set the time that all time based animations are based upon. The help patch also shows how to create a clock that just lets you tweak time by a small factor. So there is lots to play with.

Also for plugin developers there is a low latency way how to set the time. Register your timeprovider (aka clock) at the host via: ```
FHost.SetFrameTimeProvider(..);
```
You have two options: 
* hand over a delegate that should be called back or 
* implement interface ITimeProvider and hand over self
In any way the host will ask you to decide upon the current frame's time, just right before the frame gets calculated. You're completely free on how you provide the time. You may base your time on the original frame time or implement another notion of time.
See girlpower\VVVV Plugin API\Time for an example how to tweak time with the API.

you now can even freeze animations:
![this animation is frozen in time](superstring-Dir_r.png) 
