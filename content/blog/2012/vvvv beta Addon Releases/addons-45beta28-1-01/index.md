---
categories: "vvvv beta Releases"
author: "joreg"
date: "2012-08-27"
title: "addons_45beta28.1_01"
slug: "addons45beta28.101"
description: ""
release: 
    major: "45"
    minor: "28.1"
    sub: "01"
    date: "2012-08-26"
    app_file: "sites/default/files/addons_45beta28.1.zip"
imported: "true"
---

{{<previousRelease>}}


hola,

this is the first addonpack for beta28.1. for now you get:

* the new arduino/firmata nodes by {{< user "jens.a.e" >}}
* improved performance for {{< user "woei" >}}'s advanced/vector plugins
* Select (Value Vector) default BinSize fixed 
* {{< user "vux" >}}ens ms-kinect, bullet, assimp, geometry nodes fixed for /dx9ex

sounds not much but can give you a performance-gain in case you used those nodes. it also fixes an issue where patches from before beta28 got corrupt in beta28 when Select (Value Advanced) was used with default bin size of 1.

more user contributed stuff is already in the pipeline for the next pack...