---
categories: "Development News"
author: "joreg"
date: "2014-12-05"
title: "50: Properties"
slug: "50-properties"
description: ""
imported: "true"
thumb: "framedelay.png"
---


helo patcherpeople,

here is the third in a series of blogposts about our forthcoming nextbigthing that we still call vvvv50 (50). If you haven't already done so please first read the previous issues with the titles:

1. [50: That next big thing. An overview.](/blog/2014/50-that-next-big-thing.-an-overview.)
2. [50: Colors](/blog/2014/50-colors)

{{< box >}}
Note:All information given here is still preliminary and subject to change.{{< /box >}}

Here is a simple one in that there is not really much new. We're basically trying to sell you an old idea from vvvv45 (45) under a new name, a better name. Together with a new visual representation this will make things easier to think and talk about: Properties (formerly ridiculously called FrameDelays)

## 45-style FrameDelay

![](framedelay.png) 

*45-style: whats going on here?*

When in 45 we create a FrameDelay node and combine it with a link that goes back up the graph against the typical dataflow that wording and visualization describes very well whats going on internally. But do we care what vvvv is doing internally? Not really, so why make such a fuzz about it in the patch. Instead lets see how humans would think/talk about whats going on there. 

## 50-style Properties

Obviously the patch has two properties best named "Velocity" and "Position" and there is an acceleration coming that influences the velocity which in turn influences the position. So instead of using the notion of "framedelay loops", 50 puts emphasis on the fact that besides operations ([Colors](/blog/2014/50-colors)) we also have properties that name the data held in a patch. A property has a user-choosable name and of course a datatype (eg, value, color, string,..) and we can set (write data to) and get (read data from) it.

![](50properties.png)

*50-style: ah someone clearly computes a position from velocity and acceleration.*

In order to get or set a property you need so called Getters or Setters, represented in 50 by circles that you can connect from and to. True, that looks a bit like 45-style Send/Receive nodes but it is something different. Remember that there is no frame delay between S/R nodes in 45. Here though it is always made sure that each frame first all Getters are read from and only then all Setters are written to (causing quasi a frame of delay but you don't really have to think about it that way anymore). 

Also note that by forcing you to choose a name for each property (if you're not too lazy and just keep the defaults) 50 can render you a fancy human readable overview of all data in a patch. This overview doubles as a central place where you can manage (ie, add, remove, rename, ...) all your properties.

So if someone asks, this is why you like properties:
* they are now first class patching citizens when in 45 they have been disguised behind framedelay loops potentially hidden all over a patch. 
* they help you getting an overview of what data is actually part of a patch as opposed to data that only runs through a patch. 

Thats already it for this episode. Liked what you learned? Insert coin: [/downloads|vvvv](flattr).