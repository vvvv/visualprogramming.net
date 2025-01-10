---
categories: "Development News"
author: "Elias"
date: "2013-12-10"
title: "Keyboard, Mouse and Touch news"
slug: "keyboard-mouse-and-touch-news"
description: ""
imported: "true"
thumb: "callmenames_201_r.png"
---


![](callmenames_201_r.png) 

There's been [another update to the mouse and keyboard nodes](/blog/2013/update-to-mouse-keyboard-nodes) before but that turned out to still cause troubles:
* key presses could still be missed (think: typing too fast on typewriter)
* global keyboard didn't work properly with all applications
* mousewheel didn't work globally
* no nodes to deal with touch devices (2013! hellooo!)

Now there've been notable contributions to work around some of those issues, like {{< contribution "windowstouch" >}}, {{< contribution "global-keyhook" >}} and {{< contribution "directinput-(devices)" >}} but those being really basic things we thought we'd give it another shot.

So here is what you get:
* Keyboard and Mouse nodes in variants: Desktop (was: Global) and Windows 
* where Keyboard and Mouse (Desktop) are spreadable (ie. understanding multiple keyboards/mice attached. quite nerdy, what you think?)
* a new Touch (Devices Window) node
* all those nodes come with a {{< pin "Queue Mode" >}} to distinguish *Enqueue* (don't miss anything) and *Discard* (just take the latest) modes
* KeyStates, MouseStates and TouchStates split-nodes (for comfortable use in subpatches)
* KeyEvents, MouseEvents and TouchEvents split-nodes (allowing for advanced ... stuff)
* join-nodes for some of them

like so:
**Device type**|**Source nodes**|**Sink nodes**
|---|---|---|
Keyboard|Keyboard (Devices Window)
Keyboard (Devices Desktop)
KeyEvents (Keyboard Join)|KeyEvents (Keyboard Split)
KeyStates (Keyboard Split)
Mouse|Mouse (Devices Window)
Mouse (Devices Desktop)
MouseEvents (Mouse Join)
MouseStates (Mouse Join)|MouseEvents (Mouse Split)
MouseStates (Mouse Split)
Touch|Touch (Devices)|TouchEvents (Touch Split)
TouchStates (Touch Split)

{{< box >}}
Note:
As you can see from the table not all possible combinations have been implemented. We concentrated on those which we felt had a good use case.
{{< /box >}}

For the plugin-developer: 
* Plugins that are using the (now) legacy "KeyboardState" and "MouseState" datatype don't need to be modified - vvvv is gracefully taking care of this with an auto-wrapper. 
* The new "Device" datatype merely is a wrapper around a push based sequence of Device notifications. See [KeyboardNodes.cs](https://github.com/vvvv/vvvv-sdk/blob/develop/vvvv45/src/nodes/plugins/System/KeyboardNodes.cs) for an example of how to use it in your new developments. 

all available now for testing with the latest [alpha builds](https://legacy.vvvv.org/downloads/previews)
