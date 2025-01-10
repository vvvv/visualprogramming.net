---
categories: "vvvv beta Releases"
author: "joreg"
date: "2015-07-21"
title: "addons_45beta34_01"
slug: "addons45beta3401"
description: ""
release: 
    major: "45"
    minor: "34"
    sub: "01"
    date: "2015-07-20"
    app_file: "sites/default/files/addons_45beta34_x86.zip"
    app_file_64: "sites/default/files/addons_45beta34_x64.zip"
imported: "true"
---


So helo, whats new here?

{{< box >}}
Note:
Kinect and Bullet nodes are both available in the addonpack and the DX11 pack. Until now this possibly caused confusion (red nodes) when you had both packs in use. 

**Now all Kinect and Bullet nodes in the addonpack have a DX9 version**. So from now on, no more confusion, but: If you have older patches where you specifically want to target the DX9 versions you'll have to update that manually now. Sorry for that but we cannot do that conversion automatically.
{{< /box >}}

A few new nodes by {{< user "motzi" >}}, most notably the OneDollarRecognizer (2d). Make sure to check its helppatch.

And thanks to work by {{< user "velcrome" >}} and {{< user "microdee" >}} we were able to further reduce the list of nodes [missing in 64bit builds](https://legacy.vvvv.org/documentation/missing-in-64bit-builds).

Feel like supporting those efforts? See [the list of flattrable vvvv users](https://vvvv.org/404).