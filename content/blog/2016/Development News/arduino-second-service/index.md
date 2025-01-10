---
categories: "Development News"
author: "robotanton"
date: "2016-08-19"
title: "Arduino Second Service"
slug: "arduino-second-service"
description: ""
imported: "true"
thumb: "vvvv-Firmata-Ar_r.gif"
---


##  Obsolete!

From now on: **[Firmata Second Service](/blog/2016/firmata-second-service).**

#  

![](vvvv-Firmata-Ar_r.gif) 


Good news everyone, from now on you're getting a brand new set of nodes able to talk to your loaded-with-firmata Arduino Boards:

* **ArduinoUno (Devices)**
* **ArduinoLeonardo (Devices)**
* **ArduinoMega (Devices)**
* **ArduinoLilyPad (Devices)**
* **ArduinoDue (Devices)**
* **ArduinoYun (Devices)**

Together with {{< user "jens.a.e" >}} (author of the original {{< node "Arduino (Devices StandardFirmata 2.x)" >}} ) we've looked for a more convenient, easier and faster way to patch Arduino related ahhmm... patches.

![](vvvv-Firmata-Ar_r.png) 

#### With this implementation:

* Just plug a **DigitalWrite (Firmata)**, **AnalogWrite (Firmata)** or **ServoWrite (Firmata)** node to the Arduino node (or concatenate them together) to set the pins of the Board.
* Connect **DigitalRead (Firmata)** and **AnalogRead (Firmata)** nodes to get the values from the Board's pins.
* Use the {{< pin "Sysex Messages" >}} output to receive different 'Sysex Messages' sent back by the Arduino Board. Some Sysex decoders are already there (see **StringDecoder (Firmata)**, **CapabilityDecoder (Firmata)**). Sending custom 'Sysex Messages' is easy as well.
* Your board is not listed in the NodeBrowser? The Arduino nodes are easily adaptable for other controllers running Firmata. Hello teensy...

#### Easier than ever before:

* no need to supply a spread for all 20 pins and then SetSlice some of them to particular values. 
* no need to define the 'PinMode' for each pin.legacy.vvvv.org/businesses/
* no need to define which pins should report their values back.

#### Thanks:

Hardware for the development was kindly provided by [QUADRATURE](https://legacy.vvvv.org/businesses/quadrature-goetz-neitsch-gbr).

**p.s.**
Oh, by the way, these new Arduino nodes are fully implemented in VL.

**p.p.s.**
And of course there are some caveats.

* The **Cons (Firmata)** has only 5 input pins which are interleaved with 'BinSize' pins.  But note that you can cons multiple cons nodes... (for now)
* The VL nodes eat more processor ticks as their C# counterparts. Working on it...

**The nodes are now available in [Alpha Builds](https://legacy.vvvv.org/downloads/previews).**