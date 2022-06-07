---
categories: "Development News"
author: "gregsn"
date: "2019-03-06"
title: "VL: The Application Side of Things"
slug: "vl-the-application-side-of-things"
description: ""
imported: "true"
thumb: "Ape_defintions.jpg"
---


Since a while, VL comes with the idea that you can organize node and type *definitions* in your VL document.
![Definitions](Ape_defintions.jpg)
*We have one "Wheel" *definition*, independent of how many we need in the end*

But now, we want to give you back another, alternative way to look at things - an organization structure, which is more intuitive and also well known from vvvv beta: The application side of things...

![Piaggio Ape simulation](ape%20simulation.png)
*See how one wheel instance is rotated and the others are not*

And also, we did this in reaction to the feedback we got from [Link festival](https://discourse.vvvv.org/t/link-topics-5-authoring-environment/16547/6):

You want to be able to navigate the running object graph, where it's about the **instances** of patches, not about their definitions. You want to be able to navigate into a running patch and see the **values that flow in this instance**, not in another instance of the same patch...

Also, typically you approach your project top-down and just add more details to it since this is the basic idea of rapid prototyping: **patching a running system that you incrementally grow and modify.**

So we took the chance to shift the focus a bit so that in VL you again get confronted with the **application** side of things first. 

## The Application Side of Things
This is what you know from vvvv beta: a patch can contain a sub-patch - you navigate into it and inspect the values flowing. You go outwards - to the caller - via "**Ctrl-^**". With the ^-Key we actually refer to a key at a certain position on the keyboard.
![Ctrl-^](Ctrl-%5E.png)
*On your keyboard it may be labeled differently*

In VL this now is just exactly the same. Navigating into a process node shows you the right values. Ctrl-^ brings you back to the caller. So you are basically navigating the living node tree of the application. In VL it's been hard to think in these terms, but now it's the default. We also made sure that this works when navigating between vvvv beta and embedded VL nodes.

Also, try to use the back and forth mouse buttons if you happen to have a 5-button mouse. Ctrl-MouseBack will bring you to the calling patch and Ctrl-MouseForth will travel back into where-ever you were coming from.

Every VL document comes with an **Application patch**, which will open by default. You can start patching right away. A bit as it is like in vvvv beta. 

Patching top-down never has been easier. Creating an Ape simulation from scratch:

![Caring about Applications first - creating the needed Definitions on the fly](apetopdown.gif)
*Clicking *Node* will create a new process definition, name it and instantiate the node once*

You can run many applications at the same time, e.g. several example patches in addition to your project app. The application menu lists all documents that actually make use of the application patch. 

## The Definition Side of Things
Definitions in vvvv beta basically correspond to the .v4p files, in VL you can have more of them per document.

Library developers or more advanced users will of course still want to organize types and nodes and approach them from the definition side. This is like saying *"There is one idea of a wheel, but if you feel like you can instantiate three of them"*.

For an overview of the definitions, each document comes with a separate **Definitions patch** - basically what's been the document patch. 

Here you see what happened during patching top-down: on the definition side, we now have two Processes.
![Definitions](apedefinitions.gif)
*The Definitions patch gives you an overview of your document structure*

That's where you would from now on also place your Classes, Records...

Navigation within the current document structure works with Ctrl-Shift-^, Ctrl-Shift-MouseBack, Ctrl-Shift-MouseForth.

When navigating into a patch like that you will see some instance of the patch or maybe none, if none is instantiated or currently running. In this case, you will not be able to see any values.

If the patch is not yet inspecting a particular instance it will wait for the moment an instance gets executed and then attach to this particular instance.

## Some more minor cleanup
We took the chance to clean up some bits in the node browser and the patch explorer as well.
The application patch e.g. now doesn't offer confusing options, but basically only shows the properties stemming from pads, the Process Node Definition now is called that way (was "Order"), Process Nodes in the node browser look a bit like process nodes in the patch, choices like "Input", "Node" appear at the top of the list of choices in the node browser...

{{< box >}}
Note:
Note: We had to change the document structure! Patches saved with the latest alpha and come with an application may open in beta, but you will not be able to see nor execute the application patch.
{{< /box >}}

That should be it for now!
Thanks, yours devvvs