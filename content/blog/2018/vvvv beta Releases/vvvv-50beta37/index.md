---
categories: "vvvv beta Releases"
author: "gregsn"
date: "2018-09-05"
title: "vvvv_50beta37"
slug: "vvvv50beta37"
description: ""
release: 
    major: "50"
    minor: "37"
    date: "2018-09-04"
    app_file: "sites/default/files/vvvv_50beta37_x86_0.zip"
    app_file_64: "sites/default/files/vvvv_50beta37_x64_0.zip"
imported: "true"
thumb: "callmenames-Root-Emotion.png"
---


![excited!](callmenames-Root-Emotion.png)

## Release Highlights

This release comes with a cleaned up VL core library. We also made sure that the node set feels more explorable just by making basic nodes more visible than others. [ *Advanced*, *experimental * or *obsolete*](/blog/vl%20-%20corelib%20-%20cleanup%20) nodes now don't hide in different packages but can be opted into the list of nodes, while browsing the library. 

But this release also comes with features for you to clean up. [ Frames](/blog/vl%20-%20frame%20-%20your%20-%20patches%20) help to structure VL patches in a visual way, [ groups, and categories](/blog/vl%20-%20groups%20-%20and-categories%20) in a structural way. You even can tweak the visibility of your nodes in the node browser and by that distinguish rather advanced or still experimental nodes from the daily node set. Library developers will also love the feature to make certain helper nodes internal so that they are free to change or delete them at any time in the future.

### A lighter VL

Less VL documents get opened by default, leading to a faster startup and making the navigation menu more meaningful. Less ".Net Packages" get shipped leading to a smaller download and a lighter ".Net Packages" dependency menu. Process nodes now are lighter in terms of memory allocation.

### Entry points and document management

We introduce a new way of making a VL patch run. Up to now you always had to drop a VL node into vvvv to make it actually run.
Now you can define an "entry point" in VL, leading to one running instance of that patch. 

### Skia

This is the first release that supports the [ VL.Skia](/blog/vl.skia%20) library.
It comes with a huge stack of example patches.

### Debugging

Debugging should feel much more intuitive, as it now allows to inspect the exact state of the patches for the moment when something went wrong.

### Baby, don’t make me spell it out for you

All in all this release makes VL easier to learn, use and develop for.

<!--{SPLIT()}-->
## VVVV

[HTMLTexture now for DX11 and more ](/blog/2018/htmltexture-now-for-dx11-and-more)
<!--~~~-->
## VL

[ VL: Corelib Cleanup](/blog/vl%20-%20corelib%20-%20cleanup%20)
[ VL: Frame Your Patches](/blog/vl%20-%20frame%20-%20your%20-%20patches%20)
[ VL: Groups and Categories](/blog/vl%20-%20groups%20-%20and-categories%20)
[ VL: Serialization](/blog/vl%20-%20serialization%20)
[ VL: Improved File IO](/blog/vl%20-%20improved%20-%20file%20-%20io%20)
[ VL: Patch Your Own Mainloops](/blog/vl-patch-your-own-mainloops%20)

<!--{SPLIT}-->

