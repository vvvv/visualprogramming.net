---
categories: "Development News"
author: "gregsn"
date: "2022-02-03"
title: "Building Regions"
slug: "building-regions"
description: ""
imported: "true"
---


Hello everybody!

We are happy to announce a few recent additions to the core library. All of them are regions and all of them have one in common: it's easy to let data flow out of those regions.

You all know those examples of regions where you get forced to use tuples or to-be invented custom data types only because they are limited to one output. We know how painful this is and that's why we come up with more and more regions that don't have that limitation.

Here are the new regions
* Do
* Try
* Lock & Lock (Inter-Process)
* ManageProcess
* Comment

And there are more to come. Actually, they all popped up just recently, because it's now much easier to define such regions. 
They all benefit from something that we call Custom Region API.
https://thegraybook.vvvv.org/reference/extending/custom-regions.html

Also, expect some regions in the Fuse library, which gave the impulse to the development of the API.

Happy patching, yours, devvvvs