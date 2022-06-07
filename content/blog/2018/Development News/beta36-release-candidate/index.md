---
categories: "Development News"
author: "joreg"
date: "2018-03-17"
title: "Beta36 Release Candidate"
slug: "beta36-release-candidate"
description: ""
imported: "true"
thumb: "gw3IWyGkC0rsazT_r.gif"
---


![](gw3IWyGkC0rsazT_r.gif)

helo evvvveryone,

it is happening: beta36 is scheduled for a release in early february. we're quite confident with the state of the new features we've added and would like to ask you to give it a final spin with the release-candidates as listed below. please open the projects you're currently working on and see if they run as expected. if not, please let us know in the [forum](https://discourse.vvvv.org/) using the *alpha* tag. 

## Release Highlights
since the dawn of vl, vvvv has become increasingly more powerful. we see initial proof in the works of [schnellebuntebilder](/blog/zuse) and [intolight](http://www.intolight.de/projekte/skyguide-im-verkehrshaus-luzern) who are using the combination already to their advantage. it allows them to create projects of a complexity that would have been very hard if not impossible to realize with vvvv alone.

so far though, vl could only be used for IO and logic tasks. anything related to rendering was still in the hands of vvvv DX9/DX11 only. with beta36 we're introducing a new bridge that will allow you to prepare textures and buffers with the convenience of vl features and hand them over to vvvv using a new set of nodes. have a look at **\girlpower\VL\DX\DynamicBuffersAndTextures.v4p** to see how this works! and here are some more highlights:

<!--{SPLIT()}-->
## VVVV
- [Dynamic Plugins Now Use C#6 Compiler](/blog/2017/c6-compiler-for-dynamic-plugins)
- [Changes regarding Enums](/blog/2018/small-changes-regarding-enums-in-vvvv)
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
- values can now be edited on pins directly via right-drag/click (like in vvvv)
- AsyncLoop, AsyncTask regions
- Sender and Receiver for UDP and SerialPort
- [BinarySearch Nodes](/blog/2018/binary-search-for-your-keyframes)
- you can now use stateful (Process) nodes in IF regions
- you can now create stateless utility operations directly in a datatype
<!--{SPLIT}-->

for an in depth list of changes have a look at the [changelog](https://betadocs.vvvv.org/changelog/index.html).

### Download
<!--{SPLIT()}-->
**64-bit**
[vvvv (beta36_rc15)](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:24932/artifacts/content/vvvv_50alpha35.18_x64.zip)
[addons (beta36_rc15)](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:24932/artifacts/content/addons_50alpha35.18_x64.zip)
**32-bit**
[vvvv (beta36_rc15)](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:24933/artifacts/content/vvvv_50alpha35.18_x86.zip)
[addons (beta36_rc15)](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:24933/artifacts/content/addons_50alpha35.18_x86.zip)
<!--~~~-->
{{< box >}}
Note:
VL documents you save with these candidates will not open anymore with beta35.8!
{{< /box >}}
<!--{SPLIT}-->
---

if you have the feeling that this release will not have anything for you, we'd only partly agree. true, maybe not directly. but we'd like to point out that what's hidden behind the unpretentious bullet point "Use .NET Libraries and Write Custom Nodes" listed under vl above can conservatively be understood as a bombshell. it means that anyone now has access to a [vast range of .NET libraries](https://www.nuget.org/) in vl and therefore can also use those in vvvv. while this may exceed your personal abilities, it lowers the barrier to contribute to vvvv/vl in general by far and if we get this communicated right, this should be a win-win for evvvveryone. so tell your .NET developer friends about this..they should understand the implications.

at the same time this makes it easier for ourselves to now start building more interesting libraries for vl, which in turn will be a win for all vvvv users as well. hope this makes sense..

but now we wish you all some happy holidays and are waiting for your feedback on the candidate!