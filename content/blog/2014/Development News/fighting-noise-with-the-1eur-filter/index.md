---
categories: "Development News"
author: "joreg"
date: "2014-12-04"
title: "Fighting Noise with the 1€ Filter"
slug: "fighting-noise-with-the-1€-filter"
description: ""
imported: "true"
---


helohelo,

here is a supasmall thing. But it can be supausefull. So i thought you should know rightaway: We're all familiar with noisy signals coming from sensors and the simplest thing in vvvv to do to calm such a signal always was to use a {{< node "Damper (Animation)" >}}. But of course that introduces a lag, which is sometimes unwanted. 

::![](OneEuroFilter%20(_r.png) 
::

Enter the [1€ Filter](http://www.lifl.fr/~casiez/1euro/): A Simple Speed-based Low-pass Filter for Noisy Input in Interactive Systems
All credits to its creators: Géry Casiez, Nicolas Roussel, Daniel Vogel and Mitsuru Furuta from which we borrowed the C# implementation. 

Available now with more details in the helppatch in the latest [alpha](https://legacy.vvvv.org/downloads/previews).