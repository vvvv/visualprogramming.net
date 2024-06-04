---
categories: "Development News"
author: "joreg"
date: "2024-05-31"
title: "Introducing: Support for The Imaging Source"
description: "Industrial cameras for your installations"
thumb: thumb.png
---

Dear patchers,

here is to introduce full support for industrial cameras by [The Imaging Source](https://www.theimagingsource.com/).

[![](tis-logo.svg)](https://www.theimagingsource.com/)

*"Founded in 1988, The Imaging Source is a leading manufacturer of high-performance industrial and board cameras for machine vision applications in factory automation, quality control, logistics, medicine, science, security..."* and now also a breeze to use with vvvv!

![The Imaging Source cameras](hero-tall-product-camera-industrial.webp)

Based on their [IC Imaging Control 4 SDK](https://www.theimagingsource.com/en-us/support/download/icimagingcontrol4win-1.0.0.2416/) we've created the [VL.Devices.TheImagingSource](https://www.nuget.org/packages/VL.Devices.TheImagingSource) package, implementing a node-set for you to quickly access the streams of one or multiple cameras in parallel. 

![](2024-05-31-17-31-02.png)

A cameras configuration can be read from and written to a file. Individual properties can be configured and their status be read. Dead simple to use and you can leverage the full potential of the cameras with just a few clicks.

## Sponsor credits

For the sponsoring of this [open-source](https://github.com/vvvv/VL.Devices.TheImagingSource) development we bow to [ggml.io](http://ggml.io/).

And we thank The Imaging Source for providing a camera allowing us to test our implementation. 

If you also have a request for custom development, [get in touch](mailto:devvvvs@vvvv.org)!