---
categories: "Development News"
author: "joreg"
date: "2016-07-19"
title: "Introducing: The Rekorder"
slug: "introducing-the-rekorder"
description: ""
imported: "true"
---


![](http://i.giphy.com/l0HlLIjXa7THhhotO.gif) 
*A classic: Pitch On Pole*

Evvvveryone,

how about a random little feature? Hope you don't mind that it is about 15 years late...

Introducing: **Rekorder (Windows)**

Simply place the node in a patch (even save it in your _root.v4p), then press CTRL+4 to start recording on any(!) window and press it again to stop and save the recorded sequence to an animated GIF. 

**Available in [latest alphas](https://legacy.vvvv.org/downloads/previews) now!**

This is not meant to replace other options for [capturing output](https://betadocs.vvvv.org/topics/graphics/direct3d-9/basics/capturing-output.html) but more to easily create quick sketches. By default the recordings are saved to your desktop with an auto-generated filename. If you enable {{< pin "Auto Open" >}} they'll also automatically be displayed using the application you've registered to open .gif files once saving is complete. Note that saving a file may take a while, but since it happens in the background it won't block your workflow. Also beware that if you run a 32bit vvvversion you may run out of memory within a few seconds (in which case the recording will stop automatically).

## Animated GIF

For now recording is limited to animated GIFs which is nice but also has quite some limitations: They can only deal with a limited number of different framerates (default for your recordings is 25fps) and can only have 256 different colors! In exchange you get nice ditherings..

Thank Code the whole thing is [opensource](https://github.com/vvvv/vvvv-sdk/blob/develop/vvvv45/src/nodes/plugins/Windows/ScreenRecorderNode.cs) which means anyone can add an [ffmpeg](https://duckduckgo.com/?q=ffmpeg+.net)-backend that could offer different compression options and write a video-file to disk continually...we do accept pullrequests..

![](https://diasp.org/uploads/images/scaled_full_8e057faa5f492d001151.gif) 
*1 minute action*

Instead of starting/stopping a recording with the CTRL+4 shortcut you can also trigger a recording using the nodes {{< pin "Record" >}} input. If you want to create perfectly looping gifs simply set the {{< pin "Frames To Capture" >}} input to the number of frames you want to record. Now a single bang (or press of CTRL+4) starts the recording and the {{< pin "Progress" >}} output has a value going from 0..1 which you can make your loop to depend on..

## Sharing your recordings

Unfortunately, due to the size of recordings, we cannot offer an automatic upload to vvvv.org for sharing your animations. What's new though is that you can now embed animated gifs in blogs, wiki-pages and the forum. 

Also it seems to me that <http://giphy.com> is a nice service to manage your (now quickly growing) library of gifs. Best feature: they allow anonymous uploads! One problem I found is that even if you tag an upload with 'vvvv' it won't show up in the respective search. When asked about the reason for this giphy answered thats for some privacy reason but they want to change that in the future. So still don't forget to tag your uploads already!

And then share your account in the comments (for now). I found at least one celebrity user already: 
 https://giphy.com/channel/evvvvil 
and mine are here:
 https://giphy.com/channel/joreg 

Looking forward to your creations (and animated bug-reports..)!