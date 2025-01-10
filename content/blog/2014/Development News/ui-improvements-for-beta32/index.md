---
categories: "Development News"
author: "joreg"
date: "2014-04-21"
title: "UI improvements for beta32"
slug: "ui-improvements-for-beta32"
description: ""
imported: "true"
thumb: "inlets.png"
---


helo everyone,

here is to give you a little heads up on UI related improvements for the upcoming beta32 release. so read carefully now and don't later say that nobody told ya.

### DPI Awareness

most importantly (and as already [mentioned before](/blog/2014/updates-regarding-windows-8.1)) vvvv is now fully dpiAware meaning that you can enjoy vvvv at any OS zoomlevel which you can specify via 
 Control Panel\Appearance and Personalization\Display 
thanks to everyone who bugged us on this one for quite a while and thanks for your testing and reporting. 

### Touchable

as also [mentioned previously](/blog/2014/updates-regarding-windows-8.1) vvvv can now be basically operated via touch devices. Please see that older posting for gesture details. 

### Selection Behavior

as rightfully [demanded](forum) by {{< user "dottore" >}} vvvv adopted the following new selection behavior:
* if nodes and links are in a selection only nodes are selected
* if only links are in a selection they are selected
* pressing ctrl selects both links and nodes (old default)
* pressing shift only selects links
so among other nifty options this means that you can now by default select a group of nodes in your patch and delete them without worrying that you'd also delete links which you'd rather keep. 

### IOBoxes

here is the first feature backported from vvvv50 to 45: inlets (ie in vvvv45 an IOBox that has a descriptive name and is only connected to downstream) have their label displayed above the node for better readability. ages ago this has also already been [suggested](forum) by {{< user "urbankind" >}}.
![](inlets.png)

IOBox (Node) can now display a stream of raw bytes which was an obvious thing still to come and requested by everyone working with raw data.
![](raw.png) 

IOBox (Value Advanced) now features a new behavior for 'Boolean' valuetypes called *Press* which returns a 1 for as long as the right mouse button is pressed on it. also [requested](forum) long time ago by {{< user "sven" >}}.
![](press.png) 

as correctly [pointed out](forum) by {{< user "motzi" >}} creating a bool iobox via middleclick was still missing options to quickly choose between *Bang*, *Toggle* and now of course *Press*.
![](boolbox.png)

and finally the Bang now has a proper afterglow as asked for by {{< user "elliotwoods" >}} and {{< user "u7angel" >}} [here](forum) and [there](https://discourse.vvvv.org/t/invisible-bang/11732).

### S/R

as [requested](forum) by {{< user "seltzdesign" >}} and {{< user "reaktant" >}} Send and Receive nodes (of all types) now show their channel-names in their nodes by default. that will make it easier to navigate patches with a lot of S/R nodes. if you hate that you can still remove the label easily with a middleclick on the nodes. note that this flag is simply stored as a configuration pin called {{< pin "Display Channel" >}} on all S/R nodes. also note that when opening <b32 patches you'll have to manually enable this on S/R nodes there we didn't want to mess with your old patches. 
![](sr.png) //legacy.vvvv.org/downloads/previews

### Debugging

ever saw your tty spammed and wanted to find which node this is coming from? now hit debug mode (ctrl+f9) and see nodes logging to tty rendered in a different color. while this feature kind of has been there for quite a while it is now really supposed to work. also Renderer (TTY) has a new configuration pin called {{< pin "Show Node Address" >}} which even displays the full node-path to the node that is spamming.

so you see all simple stuff hopefully improving ease of use..ah and of course now would be a good moment to test all this in the latest [alpha builds](https://legacy.vvvv.org/downloads/previews) and report problems in the [alpha-forum](https://discourse.vvvv.org/) as latest alphas already pretty much are what you'll get with b32. 


