---
categories: "Development News"
author: "joreg"
date: "2012-06-08"
title: "remoting vvvv / exposing pins / kontrolleur"
slug: "remoting-vvvv-exposing-pins-kontrolleur"
description: ""
imported: "true"
thumb: "0_2012.06.08-14_r.png"
---


here is to announce a little feature nobody has asked for:

basically you can now write a value/spread to any pin of a running vvvv-patch from the outside. sick? yes. 

the plugininterface now allows you to write to any pin which is in turn used by a new node called {{< node " Server (VVVV)" >}} which listens for your udp/osc-messages and distributes received values to the targeted pins, like so:
 /40/30/2/Y Input Value 2.4,2.5,2.6
sending the above osc-message to the vvvv-servers port will set the {{< pin "Y Input Value" >}} of the node with ID 2 which sits in patch with ID 30 which sits in patch with ID 40 to a spread of:
 2.4
 2.5
 2.6
see? should allow you to quite mess around..

![what the ... green ioboxes?](0_2012.06.08-14_r.png)

now of course you don't want to do this all random and find out about the target-addresses manually. as mentioned in a previous posting [refactor-to-subpatch](/blog/2012/refactor-to-subpatch) there is one primary shortcut left on vvvvs keyboard cheat-sheet which we saved for this moment: **ctrl+k** (read "kontroll") allows you to expose selected IOBoxes for being controlled from the outside. first exposing only turns IOBoxes green, but inside this sets a flag on the node that can be accessed via the plugininterface which e.g. allows a node like the afformentioned Server (VVVV) to return a list of all exposed pins' osc addresses...

next it would be nice to write values to such exposed IOBoxes from, say a mobile device. this is where {{< node "Kontrolleur (VVVV)" >}} steps in. essentially just an alternative, more specialized vvvv-server that pushes information about exposed pins to the [Kontrolleur android app](https://play.google.com/store/apps/details?id=processing.test.kontrolleur). check its help-patch for instructions. 

and like Kontrolleur (VVVV) it could also make (even more) sense to code a plugin that communicates with [Control](http://charlie-roberts.com/Control/) (which seems to be in quite a rework for some time now so i didn't dare touch it) or one that exposes pins via even other protocols (http, whatnot..)

all necessary functionality (reading of/writing to pins, listing exposed pins,...) is accessible via the [plugininterface](https://legacy.vvvv.org/pluginspecs/). you know what to do..

now available in latest [alpha builds](https://legacy.vvvv.org/downloads/previews).