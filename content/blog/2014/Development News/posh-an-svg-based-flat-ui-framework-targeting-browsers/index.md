---
categories: "Development News"
author: "joreg"
date: "2014-07-08"
title: "Posh - an svg based flat-ui-framework targeting browsers"
slug: "posh-an-svg-based-flat-ui-framework-targeting-browsers"
description: ""
imported: "true"
---


## Problem
When developing a GUI application you have to decide on a ui-framework for windowing and drawing. Being a .net developer, typical choices would be WinForms, WPF or GTK# for the windowing part and System.Drawing, Cairo, SharpDX or OpenTK for the drawing. 

When hoping for a GUI that at some point will run across platform borders WPF and SharpDX are no options anymore. When even thinking mobile you'll have totally different windowing needs anyway and the typical way would be to do the drawing in OpenTK so at least that part is possibly portable and fast. Still you'd have to maintain separate windowing code for each platform. 

In an ideal world you'd not want to think about platform specific issues and especially not maintain all the separate codepaths resulting from whatever compromise you choose. 

## State
Luckily mankind came up with that internet-thing and now that we're quite some years into its long-evoked 2.0 phase it feels like they have mostly agreed on quite solid standards and even have implemented them across the current world of devices. So today we are in this privileged position to only face one platform that is: the browser. If it runs in the browser it runs on any device. 

But wait, the browser, that was that java(kiddy)script-thing, right? You'd obviously not seriously want to go down there. So isn't there a way to write a GUI that runs in the browser without writing a single line of kiddyscript? Well of course [there is](https://developer.gnome.org/gtk3/stable/gtk-broadway.html) and the fact that you're not the first one coming up with that unpopular idea, it should only give you strength to reinvent the same with a focus on your own needs.

## Experiment
Introducing [Posh](https://github.com/vvvv/Posh) - a flat-ui-framwork that misuses the browser as a windowing/drawing environment for your c#/.net based applications by pushing SVG snippets to it while receiving events from it in return. 

![posh](http://britishisms.files.wordpress.com/2011/05/posh.jpg)
<!--{SPLIT()}-->
<!--~~~-->
*Image taken from the internet to attract more people on facebook to click the link of this posting and also to give the text some structure.*
<!--~~~-->
<!--{SPLIT}-->

Posh exists of two parts:
* a javascript library: that receives SVG-snippets, attaches event-handlers, inserts them into the DOM and makes convenient RPC-calls back to the application. thats the part you don't have to deal with.
* a .net library: that takes the SVG-DOM you build in your app and sends incremental changes on it (snippets) to the browser and translates the RPC-calls into regular .net events for your coding pleasure. 

So essentially in your application all you do is build an SVG-DOM (possibly even by simply loading .svg files) and react to normal .net mouse/keyboard-events that you can attach to SVG-elements. That means when building your application you don't have to think about anything windowing/drawing related except building the DOM describing your UI. Also styling is completely for free via [CSS](http://en.wikipedia.org/wiki/Cascading_Style_Sheets).

Communication between the browser and the application is realized via the [WAMP](http://wamp.ws/) protocol using the [autobahn.js](http://autobahn.ws/js/) and [WampSharp](https://github.com/vvvv/WampSharp) projects. For all things SVG in .net we use the [C# SVG library](https://github.com/vvvv/SVG).

## Try it
We provide a simple demo-app that should also be a good starting point if you want to create your own posh-based app. Clone [Posh](https://github.com/vvvv/Posh) and then start
 Demo.WinForms\PoshDemo.sln
to get an idea. If you're interested in a more advanced usecase have a look at [Timeliner](https://github.com/vvvv/Timeliner).



