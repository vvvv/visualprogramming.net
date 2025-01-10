---
categories: "Development News"
author: "robotanton"
date: "2017-10-05"
title: "Firmata Updates and Fixes"
slug: "firmata-updates-and-fixes"
description: ""
imported: "true"
thumb: "Firmata-BasicTu_r.png"
---


##  101 Tutorials

By using Firmata it was always easy to control LEDs, Motors, Relays,.. and to get data back from a bunch of Sensors.

Now it is also easy to get started if you are completely new in the field.
Check these basics tutorials in your vvvv folder:
 girlpower\VL\IO\Firmata\00_Basics\

![Getting data from an analog sensor. As easy as that.](Firmata-BasicTu_r.png) 
Getting data from an analog sensor. As easy as that.

##  Fixes

* Talking via I2C protocol to your digital sensors is fixed and should be rock solid now. This example shows how to configure the ADX345 accelerometer and get its data:

 girlpower\VL\IO\Firmata\00_Basics\06-I2C.v4p

* {{< node "StringDecoder (Firmata)" >}} is returning now all strings sent //legacy.vvvv.org/downloads/previews one.

**The Basics tutorials and fixes are now available in [Alpha Builds](https://legacy.vvvv.org/downloads/previews).**

**Previously on Firmata:**
[Firmata Second Service](/blog/2016/firmata-second-service)