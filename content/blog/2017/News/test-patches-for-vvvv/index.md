---
categories: "News"
author: "joreg"
date: "2017-03-15"
title: "Test Patches for vvvv"
slug: "test-patches-for-vvvv"
description: ""
imported: "true"
---


Patchers of vvvv!

We've been meaning to share this with you for a while now. It bugs me that it took us so long, because we're using it internally for a few years already, but better late than never... And most of you will not even find it that exciting but everyone should understand that this is an essential thing to improve the stability of vvvv over time:

## Test Patches
In order to prevent certain bugs from resurfacing again after they've been fixed, vvvv has a test framework. The framework consists of a couple of nodes and a simple template that test-patches have to follow to test for a specific known bug. Everytime the vvvv build-server creates a new alpha-vvvversion it also runs all available test-patches. If any of the test-patches fails, the build is not being released and the devvvvs are being informed about the problem.

![](Template2%20%28Test%20%29_2017.03.14-18.34.04.png)
*The template for test-patches*
*to be found in \lib\nodes\Template test.v4p*
*in latest alphas and betas >= 35.4*


## Please help us
By providing such a test-patch for bugs you find in nodes that come with vvvv or the addonpack you can help ensure that this particular bug will not resurface again after it has been fixed once.

Basically creating a test-patch is not more difficult than creating a help-patch. The **[Test Framework](https://betadocs.vvvv.org/devvvveloping/test-framework.html?q=test)** page explains everything in detail and of course please let us know if you have any questions. 

## What about vl? 
Yes, our buildserver is also running test-patches for .vl already. We'll let you know how to contribute to those when we're opening up the contributions for VL libraries. 

---

So from now on whenever you're writing a bug-report in the forum please consider demonstrating the bug with a test-patch in order to help us identify the problem quicker and also make sure to prevent it from resurfacing again through other seemingly unrelated changes.
