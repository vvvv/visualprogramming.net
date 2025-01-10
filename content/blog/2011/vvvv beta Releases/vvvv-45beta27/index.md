---
categories: "vvvv beta Releases"
author: "joreg"
date: "2011-12-24"
title: "vvvv_45beta27"
slug: "vvvv45beta27"
description: ""
release: 
    major: "45"
    minor: "27"
    date: "2011-12-23"
    app_file: "sites/default/files/vvvv_45beta27.zip"
imported: "true"
thumb: "svvvvg-Renderer.png"
---


![](svvvvg-Renderer.png)

sou, 

what have we got to offer this time. lets see. how about a trinity of 
* performance
* stability
* featurestuff
big words as such so let us shed some light on them:

## stability

remember those annoying freeze-crashes? no more! we quite positively identified the sole bugger of those, extracted it and squashed it to pieces which we burnt and then burried on different continents. so if from now on you experience a freezecrash you can at least be certain it is a new phenomenon and we'll be happy to hear how you got there. also a lot of work was put into dx9-devicehandling so you should see improvements when working with multiple monitors (still bugging though in those setups: videotexture. omg, will this ever end?!).

## performance

you've probably noticed and didn't dare to mention that since around beta20 vvvv got slower and slower with each release. how embarrassing really. now here we go: beta27 is most likely the fastest #vvvv ever so far (consider: this could make a nice quote on twitter). rework has been done on the holy grounds of the vvvv graph and we were able to squeeze out quite some frames (for most common scenarios). please report your findings... and while at it we also introduced a (hidden by default) {{< pin "Evaluate" >}} on every patch that allows you to disable evaluation on a per patch basis. ja, this should allow you to increase your framerates even further.

## featurestuff

forget the GDI category of nodes, vvvv now has a new 2d drawing engine based on [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). while it is not exactly suitable for highperformance realtime applications it does not only allow you to render 2d stuff with antialiasing and transparency but at the same time save the result as .svg files for printing or further editing in any vector graphics editor. in the right hands this should have quite some potential...
---
and now for the small print: we have some breaking changes this time. nothing too bad though:
* vvvv is now using .net4 which means that plugins from the [/contributions](https://legacy.vvvv.org/contributions) will need a rebuild. contributors please do so and reupload your contribution or consider putting your stuff in the addonpack (using the [vvvv-sdk](https://betadocs.vvvv.org/devvvveloping/vvvv-sdk.html))
* vvvv ships with a new and more clean directory-structure. just don't touch anything inside \lib if you don't want to break anything and note that all assets that have ben scattered all over the place are now to be found in \lib\assets
* input {{< pin "Get Original File Infos" >}} and output {{< pin "File Format" >}} pins of {{< node "Info (EX9.Texture)" >}} had to be removed (due to internas).

ah and we were able to get rid of that annoying crack sound. how on earth was that supposed to be funny in the first place. haha. 

so we hope there is something for everybody in this release. to those not satisfied: you're right, never be! we're on your side. but if words comfort you, let us start rumors that considering all available evvvvidence we have to assume that the real big shit is still to come. 

yours,
merry and happy,
devvvvs.
