---
categories: "vvvv beta Releases"
author: "joreg"
date: "2016-12-20"
title: "addons_50beta35_01"
slug: "addons50beta3501"
description: ""
release: 
    major: "50"
    minor: "35"
    sub: "01"
    date: "2016-12-19"
    app_file: "sites/default/files/addons_50beta35_x86.zip"
    app_file_64: "sites/default/files/addons_50beta35_x64.zip"
imported: "true"
---


Aloha,

not much is happening in the addonpack anymore recently as most contributors decide to release their own packs. So please look over at the [Contributions](https://legacy.vvvv.org/contributions) for the latest hot stuff. To keep up-to-date with latest developments be sure not to miss the monthly recaps, see: [vvvvhat happened in November 2016](/blog/2016/vvvvhat-happened-in-november-2016)

Still a view things have accumulated over the past year:

### New

* new MJpegStream (EX9.Texture Sender/Receiver) modules
* new module for concave polygons Polygon (EX9.Geometry 2d Concave)

### Fixes

* MESO has sponsored an [update of the HTMLTexture nodes](/blog/2016/htmltexture-update-to-chromium-54)
* Two new pins on AudioOut node, to allow lower latency settings when needed. by {{< user "vux" >}}
* bugfix for Firmata for incoming String Data. by {{< user "antongit" >}}
* fixed MakePath troubles with root volume paths without trailing slash, fixed nil output on any nil input. by {{< user "woei" >}}
* fixed crash with invalid searchPatterns for Dir (File Advanced). by {{< user "joreg" >}} 
