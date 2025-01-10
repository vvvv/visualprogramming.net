---
categories: "Development News"
author: "robotanton"
date: "2016-12-18"
title: "Firmata Second Service"
slug: "firmata-second-service"
description: ""
imported: "true"
thumb: "vvvv-ArduinoSec_r.gif"
---


![](vvvv-ArduinoSec_r.gif) 

Good news everyone, from now on you're getting a brand new node able to talk to your loaded-with-firmata Microcontroller Boards (like Arduino, Teensy, Particle.io, ...):

* **FirmataBoard (Devices)**

Together with {{< user "jens.a.e" >}} (author of the original {{< node "Arduino (Devices StandardFirmata 2.x)" >}} ) we've looked for a more convenient, easier and faster way to patch microcontroller related ahhmm... patches.

![](vvvv-FirmataSec_r.png) 

#### With this implementation:

* Just plug a **DigitalWrite (Firmata)**, **AnalogWrite (Firmata)** or **ServoWrite (Firmata)** node to the FirmataBoard node (or concatenate them together) to set the pins of the Board.
* Connect **DigitalRead (Firmata)** and **AnalogRead (Firmata)** nodes to get the values from the Board's pins.
* Use the {{< pin "Sysex Messages" >}} output to receive different 'Sysex Messages' sent back by the Microcontroller Board. Some Sysex decoders are already there (see **StringDecoder (Firmata)**, **CapabilityResponse (Firmata)**, **FirmwareResponse (Firmata)**). Sending custom 'Sysex Messages' is easy as well.
* The node is able to talk to any microcontroller board loaded with the standardized [Firmata](https://github.com/firmata/protocol/blob/master/feature-registry.md#core-feature-set) firmware without any further configuration. In the Arduino-world such Firmata firmware is called "StandardFirmata".
* Have some custom Firmata running on your chip? Just provide the configuration manually using the **BoardConfig (Firmata)**.

#### Easier than ever before:

* no need to supply a spread for all 20 pins and then SetSlice some of them to particular values. 
* no need to define the 'PinMode' for each pin.
* no need to define which pins should report their values back.
legacy.vvvv.org/businesses/
#### Thanks:

Hardware for the development was kindly provided by [QUADRATURE](https://legacy.vvvv.org/businesses/quadrature-goetz-neitsch-gbr).

**p.s.**
Oh, by the way, these new Firmata nodes are fully implemented in VL.

**p.p.s.**
And of course there are some caveats.

* The **Cons (Firmata)** has only 5 input pins which are interleaved with 'BinSize' pins.  But note that you can cons multiple cons nodes... (for now)
* The VL nodes eat more processor ticks as their C# counterparts. Working on it...

**The nodes are now available in [Alpha Builds](https://legacy.vvvv.org/downloads/previews).**

**This is a rework of the original release of 'Arduino Second Service'.**
See the previous (now outdated) [blogpost](/blog/2016/arduino-second-service).