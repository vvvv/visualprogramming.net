---
categories: "Development News"
author: "tonfilm"
date: "2018-04-18"
title: "VL: Patch Your Own Mainloops"
slug: "vl-patch-your-own-mainloops"
description: ""
imported: "true"
thumb: "6008359552_b4a1_r.jpg"
---


![](6008359552_b4a1_r.jpg)

Welcome dear patchers to a new episode of devvvvs giving you control over your PC mainboard.

When you work in vvvv or VL the evaluation of your patch is automatically driven by a mainloop. It executes the nodes in your patch (usually) 60 times per second and by this allows changes to happen in your patch over time.

If you have a look at the PerfMeter in a renderer with a mainloop timer without any tweaks you will see lots of flickering like this:
![](ezgif-4-ab24972_r.gif)
Those flickers indicate that the time between two frames of the mainloop is changing a bit every frame. In an ideal world those flickers would not be there and the time between two frames would always be the same. An unstable mainloop like this creates jitter in animations, drops video frames and lets the visual output of your patch look less smooth.

It's quite a difficult task to get high-precision timer events on a modern computer architecture. Timers and me go way back to the early vvvv days at MESO when i worked on the vvvv mainloop and the Filtered time mode. Since then we could improve the vvvv mainloop time stability quite a bit by doing tricks like changing the windows system timer resolution and introducing a short busy wait phase at the end of the mainloop. The result of this work looks like this:
![](ezgif-4-9a43913_r.gif) 
The experience gathered from the vvvv mainloop improvements is now available in the VL library, so you can build your own sub-mainloops.

But why would you need your own timer at all if you have a good mainloop already? There are a few reasons:
* Have a second mainloop on a different thread to split performance or don't block the mainloop
* Process something at a slower rate as the mainloop to save performance, e.g. web requests every few seconds
* Process something at a higher rate as the mainloop, e.g. output to a micro controller or servo motor
* Run parts of your patch in it's own mainloop to avoid blocking user input from vvvv
## General Node Design

In VL the patch of a process node by default has a *Create* and an *Update* operation. *Create* gets called once an instance of the process is created and *Update* gets called periodically by the mainloop. In this process node patch you can place other process nodes that 'plug into' those two operations by placing their own *Create* on the *Create* of the surrounding patch and their *Update* on the *Update* of the surrounding patch.

This is the same for stateful regions like `ForEach (Reactive)`, only that the Update of the ForEach region doesn't get called automatically by the surrounding patch but gets called by the events of the incoming observable. More on that in this blog post: [VL: Reactive Programming](/blog/2017/vl-reactive-programming) 

There are many sources of observable events. For example Mouse, Keyboard and other input devices as well as AsyncTask or MidiIn. The timer nodes work in the same way. The output is an Observable that is on a new thread and either sends the frame number (for the system timer nodes) or a TimerClock (for the MultimediaTimer or BusyWaitTimer). A patch would look like this:
![](Timers00.PNG)
The use of observables also makes it easy to swap one timer for another if neccessary.

Basically there are 3 ways to setup timers in windows and now VL has them all!
## System Timer

This is the most common timer but it usually only has a precision of 16ms. It can be used for recurring events when accuracy is not the most important issue and the interval is in the seconds range or a higher millisecond range. Nodes that use these timers are for example **Interval** and **Timer** in category Reactive:
![](Timers01.PNG)
## Multimedia Timer

This is a dedicated timer for applications that do video or midi event playback. It is fairly accurate to about 1ms and doesn't need much CPU power. So it can be used for most time critical scenarios. To use this timer, make sure you enable the *Experimental* button in the VL node browser and create the node **MultimediaTimer**:

![](QcKd787Xto.gif)

So that's nice, but it has two little draw backs. You can only specify the period in whole milliseconds and as you can see there is still some flickering in the measured period times. The flickering is well below 1ms but still, we can improve that:
## Busy Wait Timer

Since its possible to measure time with high accuracy, one can write an infinite loop that always checks the time and executes an event once the specified interval time has passed. This timer always uses 100% of one CPU core because it checks time as often as it can. But hey, how many cores do you have these days? With this method you can achieve precision in the micro second range, which is insane!

If any patch processing is happening on the timer event, the power of your core is of course shared with the busy wait. Just make sure that the processing doesn't take longer as the specified period:

![](NbVtlpXEWA.gif)

This timer has an option to reduce CPU load for period times that are higher than the accuracy of your system timer. You can specify a time span called *Wait Accuracy*. This is a time span before the desired end of the period that specifies when the busy wait phase should start. Before that time the timer is set to sleep for 1ms periodically. 16ms is a safe value, but you can decrease it until the *Last Period* starts to jump in order to reduce CPU load even more.

![](WaitAccuracy.png) 
## Threading

Both the MultimediaTimer and the BusyWaitTimer start their own background thread with priority [AboveNormal](https://msdn.microsoft.com/en-us/library/system.threading.threadpriority(v=vs.110).aspx). The thread priority setting might become an input pin in the future.

So now download [latest alpha](https://legacy.vvvv.org/downloads/previews), enable the *Experimental* button in the VL node browser and give it a shot. If anything unexpected happens, let us know in the forums.

yours,
devvvvs