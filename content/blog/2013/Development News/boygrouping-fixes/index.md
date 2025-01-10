---
categories: "Development News"
author: "joreg"
date: "2013-10-10"
title: "Boygrouping fixes"
slug: "boygrouping-fixes"
description: ""
imported: "true"
---


holahola,

this is to update you on some recent fixes on [boygrouping](https://betadocs.vvvv.org/using-vvvv/boygrouping/index.html). As has been pointed at in this thread [forum](forum) there've been some unresolved buggers after the transition to a new networking library vvvv had to undergo with the all the unicode/64bit updates for beta29. 

Here's whats fixed:
* clients/server can again be started in any order and will find each other
* clients again try to reconnect periodically when they lost connection
* a memory leak that kept a copy of each graph-dump for each client is closed

There is a thing though that may cause troubles but has to be solved patchwise: By default vvvv sends value-changes in the graph via udp but switches to sending via tcp if a message is too large (ie. a spreadcount too high). Please read the updated section [boygrouping basics#warnings](https://betadocs.vvvv.org/using-vvvv/boygrouping/index.html) to understand how to detect those bottlenecks and how to deal with them. 

Those fixes should get your boys back n'sync. 
Please check the latest [alpha builds](https://legacy.vvvv.org/downloads/previews) for those changes. 