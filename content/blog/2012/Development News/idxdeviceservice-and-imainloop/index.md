---
categories: "Development News"
author: "Elias"
date: "2012-07-23"
title: "IDXDeviceService and IMainLoop"
slug: "idxdeviceservice-and-imainloop"
description: ""
imported: "true"
---


for some advanced plugin usage scenarios we introduced two new interfaces in the upcoming 28 release of vvvv:
* [IDXDeviceService](https://legacy.vvvv.org/pluginspecs/html/T_VVVV_PluginInterfaces_V2_EX9_IDXDeviceService.htm)
* [IMainLoop](https://legacy.vvvv.org/pluginspecs/html/T_VVVV_PluginInterfaces_V2_IMainLoop.htm)

the device service can be used to enumerate all directx9 devices created by vvvv (for example through a renderer) or to get notified when a device was created or destroyed. this might come in handy if plugins do some kind of background work using a directx9 device (like texture preloading) and need to know when a device got lost in order to stop all processing scheduled for that device. another future use case would be for some sort of directx9 sink node, like a pipet for example, which needs a device in order to be able to evaluate its inputs.

the second interface can be used to get various notifications about all the different stages the main loop goes through when computing one frame. a possible use case could be a custom set of classes/nodes running in some kind of special "subgraph".

both can either be imported or retrieved via two new properties on the [IHDEHost](https://legacy.vvvv.org/pluginspecs/html/T_VVVV_PluginInterfaces_V2_IHDEHost.htm).