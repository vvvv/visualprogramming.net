---
categories: "Development News"
author: "joreg"
date: "2024-05-14"
title: "Introducing: Blueiot real-time location system"
description: "An indoor positional tracking solution"
thumb: pin.jpg
---

The scenario: You're building an installation for which knowing the position of all audience members in space is essential. You don't want to rely on visual blob-tracking because people standing in close proximity should still be identified as individuals and also your space is too big, e.g. spanning multiple rooms in a museum. What to do?

Enter: 

[![](blueiot-logo.svg)](https://www.blueiot.com/)

[Blueiot](https://www.blueiot.com/) offer an RTLS (real time location system) or indoor positional tracking system, based on bluetooth. They claim to achieve an accuracy of 0.1 meters and are compatible with all Bluetooth 4.0 or above tags and mobile phones.

Based on their [blueiot Open API](https://www.blueiot.com/product/open-api/) we've implemented [VL.BlueIOT](https://www.nuget.org/packages/VL.BlueIOT/). So once you have the system set-up, usage from the vvvv side is as simple as dealing with a list of Tags that carry information like an ID, a position, a timestamp and more. If a device sends a heartrate or custom byte array, this will be received. And if a device can be remote-controlled (like having it beep or vibrate), this can also be done.

![](2024-05-14-11-11-56.png)

So the fundamentals of the API are implemented, but it has some more obscure features that would still need wrapping, which all shouldn't be to tricky, if needed. 

Your turn now.

## Sponsor credits

For the sponsoring of this [open-source](https://github.com/vvvv/VL.BlueIOT) development we bow to [Refik Anadol Studio](https://refikanadol.com/).

If you also have a request for custom development, [get in touch](mailto:devvvvs@vvvv.org)!