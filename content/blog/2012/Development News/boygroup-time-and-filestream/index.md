---
categories: "Development News"
author: "tonfilm"
date: "2012-04-03"
title: "Boygroup Time and FileStream Synchronization"
slug: "boygroup-time-and-filestream"
description: ""
imported: "true"
---


Happy to announce that one of the most requested features for boygroup setups is implemented at last:
**Video synchronization!**

In fact all files which you can play with a {{< node "FileStream (DShow9)" >}} can be automagically synchronized by vvvv now, by just replacing the FileStream node with its corresponding boygroup module.

Along with it comes a node {{< node "Clock (Network Boygroup)" >}}, which synchronizes an adjustable server time on the clients almost as tight as N'Sync can dance.

So [download the alpha](https://legacy.vvvv.org/downloads/previews) and check the help patches!

To realize all that, the IHDEHost interface got some new goodies:

 .IsBoygroupClient
 .BoygroupServerIP
 .RealTime
 .SetRealtime(double time)

have a look at the corresponding [documentation pages](https://legacy.vvvv.org/pluginspecs/).

please report all missing dance steps in the [alpha forums](https://discourse.vvvv.org/).