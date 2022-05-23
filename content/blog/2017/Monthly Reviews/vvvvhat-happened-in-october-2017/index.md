---
categories: "Monthly Reviews"
author: "joreg"
date: "2017-11-02"
title: "vvvvhat happened in October 2017"
slug: "vvvvhat-happened-in-october-2017"
description: ""
imported: "true"
---


what a month!

you may want to make yourself comfortable before diving into this. summertime is over and everyone is back patching in their cavvvves. a lot of beautiful things happened in the past month. here we go:

## vvvv/vl wise

our main focus is still getting beta36 out, which will include the new and trivl way to develop nodes for vl as already mentioned here [last time](/blog/2017/vvvvhat-happened-in-september-2017). just still not happy with all the details. we'll get there eventually.. but meanwhile also a few other things happened that are ready for you to test in latest alphas:
- the VL.Experimental package now includes reworked UDP nodes that will soon leave experimental status and are already being used under the hood now in the ArtNet (Network Sender/Receiver) nodes in vvvv which makes them faster.  
- also new in experimental: RS232 nodes for vl which will power the FirmataBord (Devices) in vvvv soon to also make it faster.
- [Custom Dynamic Buffers](https://discourse.vvvv.org/t/vl-custom-dynamic-buffer/15703) allow you to fill textures for DX9 and DX11 and DX11.Buffers directly in vl for later use in vvvv. this should have quite some potential...
- work is under way to wrap the [DigiCamControl](https://github.com/dukus/digiCamControl) library for vl which allows you to control quite a [wide range of cameras](http://digicamcontrol.com/cameras)
- we've resumed our work on wrapping [Skia](http://skia.org/) for vl which will provide us with its first rendering engine. 2d only but already looking promising..we hope to be able to show you something soon. 
![](pinEditor.gif)
*pin editors landed in vl*
- if you want to get started with vl as a longterm vvvv user, please read [vl for vvvv users](https://vvvv.gitbooks.io/the-gray-book/content/en/VL_for_vvvv_users/VL_for_vvvv_users.html) as an explanation to how it should be understood and an introduction to usecases it can help you with 
- vvvv got a nice feature on [Hackaday](https://hackaday.com/2017/10/26/interactive-visual-programming-with-vvvv/), thanks!
* we had some [recent changes to the website](/blog/2017/website-updates-3)
* fixes for the I2C firmata nodes: [firmata-updates-and-fixes](/blog/2017/firmata-updates-and-fixes)
* HTMLTexture can now talk to vvvv via javascript, see girlpower\IO\Web\10_JavascriptToVVVV

## Contributions

{{< user "woei" >}} once again went totally overboard with 3 new contributions:
* {{< contribution "stablefluids" "StableFluids" >}} which also is a great resource for [using c++ code in plugins](https://discourse.vvvv.org/t/current-state-of-using-c-code-for-dynamic-plugins/15450/7)
* {{< contribution "findrelated-(vvvv)" "FindRelated (VVVV" >}})
* {{< contribution "windowhandler-(vvvv)" "WindowHandler (VVVV" >}})
 
{{< user "tobyk" >}} shares two of his developments powered by vl:
* {{< contribution "slotmanager" "SlotManager" >}}
* {{< contribution "interloper-config" "Interloper Config" >}}

and {{< user "sebl" >}} updated {{< contribution "readback-dx11" "ReadBack DX11" >}} for vvvv b35.8 and dx11 > 1.0

## Gallery

also a large number of great projects this time. keep them coming!
{{< vimeo "235766578" >}}
*[Malachite](/blog/malachite) by [VOLNA](http://volna-media.com/)* 

* [Second Litany](/blog/second-litany) by {{< user "StiX" >}}
* [Falls the Shadow Dance Performance](/blog/falls-the-shadow-dance-performance) by {{< user "lasal" >}}
* [Vilhelm week 33](/blog/vilhelm-week-33) by {{< user "sunep" >}}
* [Captain Longbow’s recursive sexship](https://vimeo.com/236498085) by {{< user "evvvvil" >}}
* [https://vimeo.com/228214734](https://vimeo.com/228214734) by [moovel lab](https://lab.moovel.com/) in cooperation with <http://meso.net>

and a new twitter user to follow: [vvvvmotions](https://twitter.com/vvvvmotions)

## Teasers

a couple of interesting teasers...
* https://discourse.vvvv.org/t/interpole/15566
* [openvr-tracking-without-headset](/blog/openvr-tracking-without-headset)
* https://twitter.com/vvvv_jp/status/919223251061981185

## Upcoming

and some vvvv action coming up:
* in belgium: [vvvv at KIKK 2017](/blog/2017/vvvv-at-kikk-2017)
* and milan: [Patcher Kucha in Milan 2017](/blog/2017/patcher-kucha-in-milan-2017-11)

---

enough already. anything to add? please do so in the comments!