---
categories: "Development News"
author: "joreg"
date: "2022-12-13"
title: "Introducing: Support for OpenXR"
description: "A common standard for VR/AR devices"
thumb: vr-icon-17.jpg
---
![OpenXR](OpenXR_170px_Feb17.png)

We're happy to announce that vvvv (previews) now support OpenXR, via a contribution we made to the open-source [Stride 3d engine](https://stride3d.net/)!

{{< box >}}
[OpenXR](https://www.khronos.org/OpenXR/) is an open standard that provides access to Augmented Reality (AR) and Virtual Reality (VR) — collectively known as XR — platforms and devices.
{{< /box >}}

It essentially replaces OpenVR and other vendor-specific APIs as a new standard that all AR/VR device manufacturers have agreed on. Which means that chances, any upcoming AR/VR devices will be supported by vvvv, are high. 

It is important to understand though, that OpenXR is quite an extensive API and at this point we support only the following features:
- VR Rendering
- Head tracking
- Controllers
- Hand tracking (on supporting devices, like the Quest2)

Many more features can now be added, one by one, depending on your requirements. Here is a full list of possible [OpenXR Extensions](https://www.khronos.org/registry/OpenXR/specs/1.0/html/xrspec.html#extension-appendices-list). So if you have a commercial project requiring a specific extension, don't hesitate to [get in touch](mailto:devvvvs@vvvv.org).

## Testing
For now, OpenXR support is only available in a separate line of previews:
* Get the latest **vvvv gamma 2022.5 OpenXR build** from the [vvvv gamma previews downloads](https://visualprogramming.net/#Download)
* For handtracking support
  * Install the preview `VL.Stride.OpenXRExtensions` NuGet
  * We've tested this with the Oculus Quest 2, workflows for other devices may differ:
    * Make sure to update to latest version of the Oculus app
    * In the Oculus Settings > Beta enable "Developer Runtime Features"
    * Enable "Quest Link" before you start vvvv
  * In the HelpBrowser open "HowTo Enable Handtracking" 

{{< box >}}
Many thanks to our sponsors for this new feature:
- [Marshmallow Laser Feast](https://www.marshmallowlaserfeast.com/)
- [FH St. Pölten](https://icmt.fhstp.ac.at/)
{{< /box >}}