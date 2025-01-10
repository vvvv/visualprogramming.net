---
categories: "Development News"
author: "Elias"
date: "2013-04-17"
title: "New RS232 (Devices) node"
slug: "new-rs232-(devices)-node"
description: ""
imported: "true"
---


vvvv contained two RS232 nodes, both with different pros and cons:
1. {{< node "RS232 (Devices)" >}} shipped with the core package
** + used the [new datatype RAW](/blog/2012/new-datatype-raw)
** - not spreadable
2. {{< node "RS232 (Devices Spreadable)" >}} shipped with the addonpack
** + spreadable
** - used datatype String

apart from those differences both of them didn't output the DSR, [DCD](http://en.wikipedia.org/wiki/Data_Carrier_Detect), CTS, RI and Break states as requested by {{< user "reaktant" >}} in [this](forum) forum post.

we therefore decided to make the previous two nodes legacy (not breaking existing patches) and rewrite the RS232 node as a plugin with all the features of the two previous nodes combined:

* uses [new datatype RAW](/blog/2012/new-datatype-raw)
* fully spreadable
* allows setting of [DTR](http://en.wikipedia.org/wiki/Data_Terminal_Ready), RTS and Break states
* returns DSR, [DCD](http://en.wikipedia.org/wiki/Data_Carrier_Detect), CTS, RI and Break states

the new {{< node "RS232 (Devices)" >}} is now available for testing in the [alpha](https://legacy.vvvv.org/downloads/previews) versions of vvvv >= 29.5.