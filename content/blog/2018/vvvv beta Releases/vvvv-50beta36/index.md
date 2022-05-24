---
categories: "vvvv beta Releases"
author: "joreg"
date: "2018-03-20"
title: "vvvv_50beta36"
slug: "vvvv50beta36"
description: ""
release: 
    major: "50"
    minor: "36"
    date: "2018-03-19"
    app_file: "sites/default/files/vvvv_50beta36_x86.zip"
    app_file_64: "sites/default/files/vvvv_50beta36_x64.zip"
imported: "true"
thumb: "AsyncTaskDemo_2018.02.19-19.02.37.png"
---


![](AsyncTaskDemo_2018.02.19-19.02.37.png)
*Symbiosis: VL handling the heavy load for VVVV*

this is a big one!

in the works for more than half a year, it is finally out: beta36 comes with a lot of new stuff for both vvvv and vl. many thanks to everyone who helped us tweak the release by reporting problems with the release candidates. but now please have a look at the following list of highlights of this release:

<!--{SPLIT()}-->
## VVVV

- [Dynamic Plugins Now Use C#6 Compiler](/blog/2017/c6-compiler-for-dynamic-plugins)
- [Changes regarding AspectRatio and Projection Space](/blog/2018/aspect-ratio-and-projection-space)
- There is now an {{< pin "Evaluate" >}} input on every node
- FirmataBoard (Devices) comes with [fixes](/blog/2017/firmata-updates-and-fixes) and is faster
- ArtNet (Network Sender/Receiver) are faster
- Tokenizer (Raw) comes with the [New Tokenizer Nodes](/blog/2017/new-tokenizer-nodes)
- BarcodeReader (String) decodes various 1d and 2d barcodes
- a simple beautiful Line (EX9 2d) node
- HTMLTexture nodes now can send values to vvvv from javascript via window.vvvvSend()
<!--~~~-->
## VL

- you can now [Use .NET Libraries and Write Custom Nodes](/blog/2017/vl-using-.net-libraries-and-writing-custom-nodes)
- you can now fill [Dynamic DX11 Buffers in VL](/blog/2018/dynamic-dx11-buffers-in-vl) and use them in vvvv
- we now have an [Image Exchange Interface](/blog/2018/vl-image-exchange-interface)
- you can now [Pause and Step Patches](/blog/2017/vl-one-frame-at-a-time) 
- AsyncLoop, AsyncTask regions to exploit all your CPUs cores
- values can now be edited on pins directly via right-drag/click (like in vvvv)
- Sender and Receiver for UDP and SerialPort
- you can now use stateful (Process) nodes in IF regions
- you can now create stateless utility operations directly in a datatype
<!--{SPLIT}-->

for many more details, please consult the changelog as linked to below.

so where are we at? with the nobrainer access to .NET libraries now at hand the question "can vvvv/vl do X?" has just become even less relevant. chances are that if you have a .NET library that you want to use in vvvv/vl you can just do so. extending the node libraries of vvvv and vl is therefore now much easier than it has ever been since in many cases not even c# has to be written anymore. 

also with the added possibility to create DX11 buffers and images/textures in vl, dx11-heavy projects can gain a lot of performance by doing their CPU heavy parts in vl, possibly using the new AsyncLoop and AsyncTask regions to finally use the power of all your CPUs cores without the need to run multiple instances of vvvv. 

consider this release the foundation of all the good things to come. it is now on you to make use of all these new possibilities. we're looking forward to your questions and contributions and to showing you the other things up our sleeves..

yours,
devvvvs.