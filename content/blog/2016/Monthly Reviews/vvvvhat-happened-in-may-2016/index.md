---
categories: "Monthly Reviews"
author: "joreg"
date: "2016-06-05"
title: "vvvvhat happened in May 2016"
slug: "vvvvhat-happened-in-may-2016"
description: ""
imported: "true"
---

i know it is a lot every month, but take those 5 minutes to browse through the stuff. i don't want to later hear anyone say they didn't know about something.. so first vvvv:
* now comes with [native spout support](/blog/2016/spout-0)
* got a [RAW performance bump](/blog/2016/raw-performance-speedup)
both are available for testing in latest [alphas](https://legacy.vvvv.org/downloads/previews)

---
## Contributions

most notably we got two completely new things:
* {{< user "eno" >}} shared a {{< contribution "blackmagic-dx11-video-input" "Blackmagic Video Input for DX11" >}} plugin
* {{< user "microdee" >}} went crazy with his {{< contribution "vpm-alpha" "Package Manager: vpm" >}} and along with it, shared {{< contribution "md.ecosystem.mp" "some of his contributions as vpacks" >}}

and there were two updates:
* {{< user "screamer" >}} made a DX11 version for {{< contribution "badmapper" >}}
* {{< user "StiX" >}} updated his {{< contribution "vvvv-reaktor-%28or-any-osc%29-interface-based-on-vobject" "VVVV-Reactor bridge" >}}

## Gallery

{{< vimeo "165992087" >}}
a parutiful music video by [Michele Pusceddu](http://mhlvisuellekunst.blogspot.de/) for *SaBOLGIA feat. MaryLunaz - This is All For You*.

and some finds from the web:
* The often vvvv infused work by Refik Anadol [featured on the creatorsproject](http://thecreatorsproject.vice.com/blog/refik-anadol-gehry-concert-hall)
* [Lumophore II](http://www.paulprudence.com/?p=589) a full-dome ‘colour-sound’ performance by Paul Prudence
* Greg Kepler about [powering cinder with some vvvv](http://www.thegrego.com/2016/05/16/webgl-in-cinder/)
* already a few months old: Philippe Dubost comparing [vvvv with touchdesigner](http://philippedubost.com/index.php/2015/12/30/experiments)

my favorite this month are those [glitchy rocks](http://scontent.cdninstagram.com/t50.2886-16/12865953_1704934406446498_2046468887_n.mp4) by {{< user "desaxismundi" >}}. hope to see more of this in better quality soon. and in case you face yourself using instagram at least do yourself a favor and [follow that guy](https://www.instagram.com/desaxismundi)!.

## Oldies but Goldies

best find in a long time: already more than five years ago @henrik showed us how to send an MJpeg stream directly out of vvvv without much hassle. he burried that info in a contribution with the unassuming title {{< contribution "vvvveb-lib-0.1" >}}. i allowed myself to extract that knowledge into a simple module called MJpegStream (EX9.Texture Sender). while at it i also added an MJpegStream (EX9.Texture Receiver) module and put them both in the addonpack. shipping with latest alphas...

## TADAEX/NODE Exchange Program

![title](http://node.vvvv.org/wp-content/uploads/2016/05/kooshk.jpg) 
*2014/15 residents: Scherlin and Bastan totally exchanged*
this is an opportunity of a kind i don't think too many exist. read [about the exchange of Scherlin and Bastan](http://node.vvvv.org/activities/tadaexnode-exchange-about/) and then [go apply yourself](http://node.vvvv.org/tadaexnode-exchange-program-20162017). no exuses, deadline June 15th!

## what the VL?

i'm afraid we're still working on the branch as mentioned in [the winter update](/blog/2016/vl-winter-update). it is making good progress but still... besides we're of course always working on the library and there are a couple of things you can check out in the latest alphas: native implementations of the OSC and TUIO protocols. why such? because vl can! 

and next we'll be sharing with you a native implementations of the firmata protocol with wrapper nodes for vvvv making handling of arduino/firmata quite a bit more trivial.. but thats coming in an extra blogpost... 

---

enough. more sooner than later.
gutpatch!
