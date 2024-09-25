---
categories: "Development News"
author: "joreg"
date: "2024-09-25"
title: "Introducing: Support for ZED stereo cameras by Stereolabs"
description: "For your depth-sensing needs"
thumb: thumb.jpg
---

Dear sensers of depth,

we're happy to announce that we now have stable support for ZED stereo cameras by [Stereolabs](https://www.stereolabs.com/).

[![](stereolabs-logo.svg)](https://www.stereolabs.com/)

*"Human sight is remarkable. Our eyes see the world in high resolution color, across environments and conditions. We perceive depth and texture. We do more than notice our surroundings, we understand them. At Stereolabs, our mission is to enable machines to see like people do."*

...and now available as an easily deployable option for your interactive vvvv projects!

![Selection of depth cameras by Sterelabs](stereloabs-zed.png)

Based on the [C# wrapper](https://www.nuget.org/packages/Stereolabs.zed) of their [ZED SDK](https://www.stereolabs.com/en-de/developers/release) we've created the [VL.Devices.ZED](https://www.nuget.org/packages/VL.Devices.ZED) package, implementing a node-set for you to quickly access the streams of one or multiple cameras in parallel. 

![](zed.png)

The ZED SDK is quite extensive and we don't fully support it yet. Here are the parts that are currently implemented:
* [Recording and Playback](https://www.stereolabs.com/docs/video/recording)
* [Depth Sensing](https://www.stereolabs.com/docs/depth-sensing)
* [Body Tracking](https://www.stereolabs.com/docs/body-tracking)

...and the parts we can implement on demand:
* [Positional Tracking](https://www.stereolabs.com/docs/positional-tracking)
* [Global Localization](https://www.stereolabs.com/docs/global-localization)
* [Spatial Mapping](https://www.stereolabs.com/docs/spatial-mapping)
* [Object Detection](https://www.stereolabs.com/docs/object-detection)
* [Fusion](https://www.stereolabs.com/docs/fusion/overview)

## Credits

Development of this library was started inhouse at [m box](https://github.com/m-box-de).

If you have a request for custom development, don't hesitate to [get in touch](mailto:devvvvs@vvvv.org)!