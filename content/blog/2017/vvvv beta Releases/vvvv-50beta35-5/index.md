---
categories: "vvvv beta Releases"
author: "tonfilm"
date: "2017-04-19"
title: "vvvv_50beta35.5"
slug: "vvvv50beta35.5"
description: ""
release: 
    major: "50"
    minor: "35.5"
    date: "2017-04-18"
    app_file: "sites/default/files/vvvv_50beta35.5_x86.zip"
    app_file_64: "sites/default/files/vvvv_50beta35.5_x64.zip"
imported: "true"
---

{{<previousRelease>}}


![](355.PNG)

Basically a maintenance and bugfix vvvv release, wouldn't there be so much new VL stuff in it.

{{< vimeo "215358621" >}}

## VVVV Highlights
* window layout changes don't lead to a [changed patch file anymore](https://discourse.vvvv.org/t/navigating-vvvv-patches-in-large-projects/14765).
* r nodes don't forget last sender when sender got deleted
* s/r channels sorted in pop up
* improvements and additions for [the EditingFramework](/blog/2017/editing-framework-update)
* improved error-logging in case a ~temp file is written (please report!)

## VL Highlights
* new reactive nodes for [async/concurrent event handling](/blog/2017/vl-reactive-programming)
* new category XML for all your [xml/json needs](/blog/2017/vl-xml-and-json-nodes)
* new midi nodes for [event based midi processing](/blog/2017/vl-event-based-midi)
* VL now has dynamic enumerations, i.e. for device driver selections
* tabs of active document now visually distinguishable from others

## Upcoming Highlights
As [mentioned previously](/blog/2017/devvvvlopment-update-january-2017) the main topic we are working on at the moment is importing .NET DLLs into VL. Think drag'n'drop and easy wrapper patches all in visual programming style. This needs some deeper changes in the code base and was deliberately not included in this release but will find it's way into alpha builds soon for everyone to try it out. After that we'll polish the VL workflow and libraries a bit more to have a shiny version for [NODE17](https://nodeforum.org/journal/node17-tickets/).

And of course more bits and pieces are waiting in line, keep your eyes on the devvvv blog.

yours,
devvvvs