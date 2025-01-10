---
categories: "Development News"
author: "tonfilm"
date: "2013-10-31"
title: "New vector swizzle nodes and vector join/split up to 5x faster"
slug: "new-vector-swizzle-nodes-and-vector-joinsplit-up-to-5x-faster"
description: ""
imported: "true"
---


This was long overdue. While patching with vectors it happens quite often that you have to convert from 2d to 3d or vice versa. Until now you had to create the appropriate vector join/split nodes and connect the components with each other. this is history. the new swizzle nodes should cover 90% of those cases.

And while at it, the vector join/split nodes got a rewrite and are now 4-5 times faster. 

Try it out in the [latest alpha build](https://legacy.vvvv.org/downloads/previews) and report the bugs as usual.

best,
dvevvsv

![](xy%20(2d)%20help_20_r.png) 
