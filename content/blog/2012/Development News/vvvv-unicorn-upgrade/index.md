---
categories: "Development News"
author: "joreg"
date: "2012-09-25"
title: "vvvv unicorn upgrade"
slug: "vvvv-unicorn-upgrade"
description: ""
imported: "true"
---


oui this maybe a small step for yousers but it is definitely a big step for vvvvs codebase. advancing it by about 10 years letting it finally arrive in ~2007 (yep, still some more to catch up..). so what happened? vvvv is now fully unicorn..ah unicode. from highest to lowest bit. 

![](unicorn.png)

## good to know
for most of you this will not change anything except that you don't have to deal with UTF8 vs. ANSI in IOBoxes or on specific nodes (e.g. Text (EX9)) anymore. as from now on there is only unicorn..code. that is: *inside* of vvvv. 

when getting strings *into* vvvv you may have to specify an encoding. for those special cases the Reader/Writer nodes got a (visible in inspektor only) {{< pin "Encoding" >}}. its default should work in 99% of all cases for you. for the {{< node "Reader (File)" >}} the default setting of *Auto* will work if the file is encoded in the current system codepage or UTF8, else you'll have to chose the specific codepage manually. for the {{< node "Writer (File)" >}} the *Auto* setting means it will write files as UTF8. 

## the deal
doing those changes under the hood caused quite a stir in the codebase and while our tests show all green we're still a bit cautious with merging those changes in our main alpha-branch. therefore we're asking you to give this a ride with your patches using the latest unicorn-build from:
 [unicorn-builds](https://vvvv.org/404)
don't forget the suitable addonpack and run your patches with it. what would be interesting to hear tested, are:
* boygrouping
* networking (osc,..)
* arduinoing (rs232,..)
* file reading/writing
* general string-heavy patches

nota bene:
- saving a patch with unicorn-characters in alphaXE2 will not let you open the same patch in older vvvv releases. if you still need to do so there is a way... bug us in the alpha-forum for more information.
- MySQL nodes had to be removed (for now)

now please give us a quick feedback in the comments if that fukcs everything up for you or you'd say it basically works. if you find a specific bugger -> [alpha forum](https://discourse.vvvv.org/).
