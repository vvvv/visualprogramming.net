---
categories: "vvvv beta Releases"
author: "joreg"
date: "2012-08-13"
title: "vvvv_45beta28"
slug: "vvvv45beta28"
description: ""
release: 
    major: "45"
    minor: "28"
    date: "2012-08-13"
    app_file: "sites/default/files/vvvv_45beta28.zip"
imported: "true"
---


![](b28.jpg) 
photo by {{< user "benju" >}}

okok, 

this one took us longer than planned, but it was a difficult one in a way that it includes so many new details. if you are following the [devvvv blog](/blog/23) you should already know about most of the new stuff thats coming with this release. here is a feature-summary:

## for the user

*we finally have a refactoring option. select a bunch of nodes, press CTRL+G and see them be replaced by a suitable subpatch. gorgeous.

*we got a series of new vector-modules that should just be more comfortable to use than what's been there so far. check:
{{< box >}}
{{< node "Length (2d)" >}}, {{< node "Length (3d)" >}}
{{< node "Distance (2d)" >}}, {{< node "Distance (3d)" >}}
{{< node "Angle (2d)" >}}, {{< node "Angle (3d)" >}}
{{< node "Slope (2d)" >}}, {{< node "Slope (3d)" >}}
{{< /box >}}
*now please have a look at the new Zip/Unzip nodes. they are basically generalized Vector Join/Split nodes but faster. here are some details: [zip-and-unzip](/blog/2012/zip-and-unzip)

*there has been a subtle change for all keyboard and mouse related nodes. shouldn't worry you to much as a user. is now just supposed to be more comfortable. specifically check the revamped {{< node "KeyMatch (String)" >}} which will save you some nodes from now on. some more on this is here: [keyboardstate-mousestate](/blog/2012/keyboardstate-mousestate)

*the next thing is a bit more nerdy but just as userfriendly. it basically allows you to control values in your patches from your android phone. here is how: [remoting-vvvv-exposing-pins-kontrolleur](/blog/2012/remoting-vvvv-exposing-pins-kontrolleur)

*syncing videos via a network has always been possible (somehow) but now it is mainstream. here are the details: [boygroup-time-and-filestream-synchronization](/blog/2012/boygroup-time-and-filestream-synchronization)

*there is a lot of talk in the OSX world about [syphon](http://syphon.v002.info/) that allows users to share textures between applications. vvvv is now prepared to do this on windows. who's in? [cross-process-texture-sharing-depth-rendering](/blog/2012/cross-process-texture-sharing-depth-rendering)

## for the developer

here is a list of the latest blog-posts with infos regarding changes to the plugininterface for beta28 that should make your devvvvs lifes easier:
*[direct3d9-plugin-interface-change](/blog/2012/direct3d9-plugin-interface-change)
*[multiple-texture-outputs](/blog/2012/multiple-texture-outputs)
*[idxdeviceservice-and-imainloop](/blog/2012/idxdeviceservice-and-imainloop)
*[ispread-vs-istream](/blog/2012/ispread-vs-istream)
*[isynchronizable-and-iflushable](/blog/2012/isynchronizable-and-iflushable)
*[creating-and-deleting-pins-at-runtime](/blog/2012/creating-and-deleting-pins-at-runtime)

for a full list of fixes and changes check the change-log as usual. 
good patch,
yours devvvvs.