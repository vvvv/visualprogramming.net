---
categories: "vvvv beta Releases"
author: "joreg"
date: "2013-05-22"
title: "vvvv_45beta30"
slug: "vvvv45beta30"
description: ""
release: 
    major: "45"
    minor: "30"
    date: "2013-05-21"
    app_file: "sites/default/files/vvvv_45beta30_x86.zip"
    app_file_64: "sites/default/files/vvvv_45beta30_x64.zip"
imported: "true"
---

{{<previousRelease>}}


![](demo-DirectX%20Renderer.png)

this is vvvv45beta30
what a release...

the changelog has it all really, but here are some highlights:

at the latest with {{< user "vux" >}}ens drop of his dx11 implementation it became obvious that one addonpack won't suffice all. while this comes with some additional clicks for the typical user it is more convenient to handle by developers and is a first step towards a kind of package managing system. so beta30 introduces the idea of packs. packs are placed inside the 
 \packs
directory in the \vvvv_45betaXY directory like for example
 \vvvv_45betaXY\packs\DX11

and thats it. no further configuration necessary. like this packs can be maintained by the developer and added/updated/removed by the user individually. note that at this point we're still waiting for a suitable DX11 pack for beta30 by vux. 

next. with the dx11 pack comes a load of new nodes. while all dx11 nodes work alongside their dx9 peers peacefully you may want to hide either category from the nodebrowser depending on what you're working on. in its new filter panel the nodebrowser allows you to do exactly that. 

![](nodebrowser.png)
*(T)ags, (C)ategories, (F)ilter (obviously)*

besides that a lot of fixes and your favorite new features:
* ctrl+^ to jump to the active patchs parent (and even get its node selected). 
* ctrl+middleclick after you started a link: to create a suitable S/R node.

happy new vvvv.
yours,
devvvvs.