---
categories: "Development News"
author: "joreg"
date: "2023-11-29"
title: "Introducing: Augmenta"
description: "A plug & play tracking solution"
thumb: a.png
---

Dear trackers!

You've all been there: Rolling your own tracking solution from scratch using infrared-cameras and some kind of blob-tracking or depth cameras and analyzing point-clouds. Possible, as you know, but also quite a thing to setup and maintain. Wouldn't it be handy to have a solution that you can simply install and it would send you clean tracking data?

Enter: 

[![](logo.jpg)](https://augmenta.tech/)

[Augmenta](https://augmenta.tech/) conveniently provide such a plug & play solution. In close collaboration with their team we've implemented the [VL.Augmenta](https://www.nuget.org/packages/VL.Augmenta/) NuGet, which gives you most easy access to the streamed data. 

You have the choice between receiving their TUIO based protocol or version 3 of their OSC based protocol. For you, in vvvv, they work the same, so it simply depends on the setting on the sender side on which you have to choose. Usage is as simple as this:

![](2023-11-29-15-55-03.png)

The great thing is that for development you don't need a system at hand, as there is an [Augmenta simulator](https://github.com/Augmenta-tech/Augmenta-Simulator/releases) that you can simply run locally and receive data from it. 

So please go ahead and test it right away and report your findings. Beware: Requires [latest vvvv 5.3 preview](https://visualprogramming.net/#Download)!

To get an idea of what Augmenta has been used for so far, watch their showreel:

{{< youtube OqNKxXrXn48 >}}

## That all?

There will be more! We're currently already alpha-testing Augmenta's upcoming version of their tracking solution which will have some interesting new features. And you'll be among the first to be able to test and use them. Stay tuned...

## Sponsor credits

For the sponsoring of this [open-source](https://github.com/vvvv/VL.Augmenta) development we bow to [Refik Anadol Studio](https://refikanadol.com/).

If you also have a request for custom development, [get in touch](mailto:devvvvs@vvvv.org)!