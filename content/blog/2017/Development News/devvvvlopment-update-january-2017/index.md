---
categories: "Development News"
author: "joreg"
date: "2017-01-30"
title: "Devvvvlopment Update January 2017"
slug: "devvvvlopment-update-january-2017"
description: ""
imported: "true"
---


previously on devvvvlopment: [vl-networking-and-async](/blog/2017/vl-networking-and-async)

---

With beta35 (including VL) [out in the wild](/blog/2016/vvvv50beta35) and people apparently starting to use it (see [forum threads](https://discourse.vvvv.org/tags/vl) about it) we're quite happy with the feedback so far. We know of people already including VL in their daily patching and getting the hang of it. Others are still more cautious and are waiting for better documentation or are hoping for node17 to open their eyes. All fair enough, no pressure.. in any case the question is of course:

## What next?
One of the many aspects that vl will be different when compared to vvvv is its node-library. In vvvv we have a closed-source base-library (written in delphi and closely bound to the vvvv core) plus a wide range of open-source nodes including community contributions (written in c# via a plugin-interface). For vl we'll still distinguish between a base-library and the rest, but all libraries will work the same way, ie not be bound to the core. And not even need a plugininterface. And be open-source.

So from the beginning in vl we separated core from libraries and already have a git-repository including all of VLs libraries organized in neat packages (as you can basically already see in your beta35\lib\packs) that we're ready to open. Why haven't we done so already? Well, by releasing library source-code we're kind of committing to a style that everyone should be able to use to write nodes for vl. Therefore this is really a crucial part that we simply wanted to give a second look. 

{{< vimeo "129085756" >}}
*Jump to 49:55 for: Defining Nodes*

Remember when at node15 we teased how to define nodes for vl? Everything already felt fairly simple indeed. The typeimporter, a breeze. As mentioned in [previous blog-posts](https://betadocs.vvvv.org/using-vvvv/vl.html) we've been continuously importing libraries ourselves since then and noted a few things that we needed to improve to make the workflow for future library developers even more convenient. 

So this is what we're reworking at the moment and what we hope to be releasing soon:
- the complete vl node library as open-source
- documentation on how to import/write your own nodes/libraries for vl 
- documentation on how to package your libraries for consistent distribution

This will reduce the barrier for developers enormously because everything they have to do to contribute to the vl nodelibrary, will be very little vl-specific and very close to what any c#/.net developer is doing anyway. 

Other than that our focus until node17 will continue to be the integration of vl with vvvv, improving documentation and adding the one or other smaller feature. So, that at node17 we have a strong foundation to teach on and hopefully even already some new, contributed libraries..

Until the next update,
good patch!