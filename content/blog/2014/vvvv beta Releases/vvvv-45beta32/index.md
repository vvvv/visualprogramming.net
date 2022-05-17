---
categories: "vvvv beta Releases"
author: "joreg"
date: "2014-05-09"
title: "vvvv_45beta32"
slug: "vvvv45beta32"
description: ""
release: 
    major: "45"
    minor: "32"
    date: "2014-05-08"
    app_file: "sites/default/files/vvvv_45beta32_x86.zip"
    app_file_64: "sites/default/files/vvvv_45beta32_x64.zip"
imported: "true"
---


![](08_TTY_ASCII_Art-Renderer-TTY%20Renderer_2014.05.02-17.19.12.png)
*ascii donut*

helo patcherpeople,

it is our pleassure to announce the latest and greatest: vvvv45beta32

this was in the making for a while and its changelog is quite overwhelming, so let me lay this out for you:

## for the patcher
* we finally managed to get rid of crack.exe -> setup.exe
* vvvv is now dpiAware and defaults to /dx9ex see: [updates-regarding-windows-8.1](/blog/2014/updates-regarding-windows-8.1)
* there are a number of subtle [ui-improvements-for-beta32](/blog/2014/ui-improvements-for-beta32)
* keyboard/mouse have been reworked and touch is new, see [keyboard-mouse-and-touch-news](/blog/2013/keyboard-mouse-and-touch-news)
* we provide many more well documented demos: [vvvv-easy-to-learn-with-girlpower](/blog/2014/vvvv-easy-to-learn-with-girlpower)
* there are range of fixes for boygrouping (for details see changelog)
* there is huge list (>25) of new nodes (see changelog) 
* Binsized modules are now much easier to patch using the new NormalizeBinSize (T) modules

## for the developer
* we now provide [nuget-development-packages](/blog/2013/nuget-development-packages)
* and a [generic-nodes-project](/blog/2014/generic-nodes-project)
* we have infos on [plugins-targeting-.net-4.5](/blog/2014/plugins-targeting-.net-4.5)
* packs can now have their own diffff which makes it easier to update them independent of the vvvv core release, see [patch-conversions-pack-versioning](/blog/2014/patch-conversions-pack-versioning)

so basically citius, altius, fortius just as you'd expect.
and remember if you're a non-commercial user of vvvv and still want to support us click this:

[/downloads|vvvv](flattr)

have a good patch,
yours devvvvs.
