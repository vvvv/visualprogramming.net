---
categories: "vvvv beta Releases"
author: "joreg"
date: "2013-06-25"
title: "vvvv_45beta30.2"
slug: "vvvv45beta30.2"
description: ""
release: 
    major: "45"
    minor: "30.2"
    date: "2013-06-23"
    app_file: "sites/default/files/vvvv_45beta30.2_x86.zip"
    app_file_64: "sites/default/files/vvvv_45beta30.2_x64.zip"
imported: "true"
---

{{<previousRelease>}}


::
![next generation girlpower](http://www.samaa.tv/NewsPictures/2012121118657_samaa_tv.jpg) 
*photo: internet*
::

heloo ladies,

this is to announce the 45beta30.2 maintainance release. mostly fixes, nothing really new except starting with this release we're introducing:

**girlpower\The Next Generation**

so about 10 years late we're starting a documentation offensive. in the style of the {{< contribution "parasitic-design-a-vvvv-beginners-cookbook" >}} we're working through the [topics](https://betadocs.vvvv.org/topics/index.html) and create easily digestible and documented examples for your learning pleasure. we're lucky to have {{< user "robotanton" >}} on board for doing all the detailed patchwork. 

we've started with providing an overview of vvvvs audio capabilities which are quite sparse, agreed, but finally you have a chance to see at a glance whats there and how it works. among other things there are patches that demonstrate the four ways to playback audiofiles with vvvv:
* {{< node "FileStream (DShow9)" >}}
* {{< node "FileStream (Bass)" >}}
* {{< node "FileStream (Irrklang)" >}}
* {{< node "WavePlayer (DShow9)" >}}
you'll also get an overview of the audio-analysis and -effects possibilities with the different soundengines. 

at the same time we're updating the wiki topic by topic, so just recently we've also updated all the pages in the [Audio](https://betadocs.vvvv.org/topics/audio/index.html) section. if anyone is into translating pages to other languages, this would be a perfect time to do so.

have a great summer and may the patch be with you..
yours, 
devs.


EDIT: just in case you're wondering: yes, the {{< contribution "directx11-nodes-alpha" "dx11 build for beta30" >}} is compatible with beta30.2

