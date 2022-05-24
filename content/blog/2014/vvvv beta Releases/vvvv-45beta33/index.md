---
categories: "vvvv beta Releases"
author: "joreg"
date: "2014-09-02"
title: "vvvv_45beta33"
slug: "vvvv45beta33"
description: ""
release: 
    major: "45"
    minor: "33"
    date: "2014-09-01"
    app_file: "sites/default/files/vvvv_45beta33_x86.zip"
    app_file_64: "sites/default/files/vvvv_45beta33_x64.zip"
imported: "true"
thumb: "headquarter.jpg"
---


here is to you the latest and greatest: vvvv_45beta33
in other words: bestest release evvvver. 

![](headquarter.jpg) 
*architecture.*

some highlights from the changelog:
**general**
* optimized patch redrawing (should also reduce occurances of infamous IOBox bug)
* added a command to cleanup patches with corrupt links. see: [forum](forum)
* a patch with evaluate=0:
** now now allows default patching/panning: [forum](forum)
** shows a "NO" cursor when hovering input pins indicating that you cannot change those

**code editor**
* for each file only one editor will be open
* completion window for HLSL will only popup when pressing Ctrl + Space. It will also only show predefined functions and parameters as no proper AST for HLSL available.

**new nodes**
* MouseMatch (Mouse) node able to detect certain mouse events like up/down/wheel and click
* SplitAt (T) node - splits a spread at given position into two subspreads

**fixed nodes**
* AsRaw (EX9.Texture) now ~30 times faster
* DynamicTexture (EX9.Texture Raw) now ~10 times faster

**goodypack**
For the following two goodies please head over to the [Addonpack release announcement](/blog/2014/addons45beta331):
* the new (ultramodular) PolygonEditor by vvvv meisterschüler {{< user "dominikKoller" >}}
* the html-texture upgrade sponsored by [meso](http://meso.net) 

Also restless {{< user "robotanton" >}} has been continuing work on the documentation bringing to you everything we know about Video (and specifically syncing them) in vvvv with a shiny new section in the girlpowers:
 \girlpower\Video
that is accompanied by a rework of the [Video](https://betadocs.vvvv.org/topics/video/index.html) section of the documentation. 

If you like what you get and are a non-commercial user consider pressing the button below:
[/downloads|vvvv](flattr)

have a good patch,
yours devvvvs.
