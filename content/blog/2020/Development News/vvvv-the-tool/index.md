---
categories: "Development News"
author: "gregsn"
date: "2020-09-23"
title: "vvvv - The Tool"
slug: "vvvv-the-tool"
description: ""
imported: "true"
---


Hello everyone,
# Introduction
I'd like to give you an update on the toolkit front, that vvvv has always been. While vvvv beta can be described as a dynamic system, mutating while you mold your patches, vvvv gamma and its workhorse VL are of a different kind. With VL we embraced features like
* static typing with its ability to detect errors early, 
* .Net DLL import opening a universe of possibilities,
* user-defined data types that interplay with those defined by others,
* compilation with its ability to export an app as an executable... 

In short, we embraced robust software developing strategies that at first seem to contradict the idea of a playful development toolkit that allows you to mold your app. We went for compiled patches, running, and hot-swapping them while you are building them. 

But we envisioned vvvv to be both
* the playful toolkit you fell in love with
* combined with the promises of a compiled language

While [my last blog post was about the language](/blog/2020/vl-language-design-repository), let's focus on the toolkit this time.

# Toolkit
Let's have a look at some features that allow you to interact with the VL runtime, the system that runs your patch while it allows you to edit it. The features here empower you to enrich the patching experience. We understand that these improvements need to "trickle up" into the libraries and only thereafter will have an effect for all users. 

So the following is probably mostly interesting for advanced user and library developers.

## Tracking Selection within the Patch Editor
You now can react to a selection within the patch editor. The more libraries do this the more playful the environment gets. We still have to figure out all the use cases, but here is a list of what's possible already
* separate the core functionality from its Editor UI. Imagine a TimeLine node that is decoupled from the timeline editor.
* an Inspector for nodes or pads
* a Preview like this:
![preview nodes](preview%20node.gif) 

* even the help browser itself uses the feature to provide help for the selected node.

And there is more:
You can get a Live Element for a certain Pin or Pad.
* Copy the permanent identity of the element into the clipboard by CTRL-SHIFT-I (I stands for Identity).
* *GetLiveDataHubForSerializedID* hands you the pin or pad.
useful for the cases where you want to always inspect a specific pin or pad of some patch. This can be helpful for debugging.

## Let the Patch Editor navigate to a Patch
When a Skia Renderer is your active window, Ctrl-^ let's you jump to the patch in which it is used. This is handy when you opened a bunch of help patches and you want to see the help patch that is responsible for the output. 

You can use the node *ShowPatchOfNode* to do the same trick. 

## Tooltips for your own data type
Here you can see a custom tooltip for a user patched type "Person".
![A european](person.png) 
You now can patch your own tooltip with *RegisterViewer*. This way the patching experience will be so much more fun. We're in the process of adding more and more viewers for our types. 

## Runtime Warnings
Up to now, we had
* *Red elements: Static errors*. (E.g. a node that can't be found) These errors make the compiler ignore certain parts in your program as they are currently in development. The rest still runs. (Something what C# and others just can't)
* *Orange socks on links: Static warnings*, potential problems. Something to look at when searching for a bug.
* *Pink nodes: Runtime Errors*. A problem that only got detected during runtime and which is such a big problem suddenly that the system can't work as planned. Some patches don't run as planned. There are different ways how to handle these, pointing you at problems at runtime, but they can be painful.

And now we introduce to you:
* *Orange nodes, Runtime Warnings*: They show you a problem at runtime. But it doesn't harm your system as pink nodes do. Orange nodes are runtime warnings. Library developers can put warnings on their nodes in order to communicate to the user that something is slightly off.

You can try it yourself by using the Warn or the Warn (Reactive) node. 
![just a reminder](warning_0.png) 
The warning will not only show up on the Warn node, but also on the applications of your patch.

## S&R nodes
Sometimes it's just convenient to be able to send data from one patch to another without the need of feeding the data via pins. We now have send and receive nodes, like known from beta. 
Features:
* The channel can be anything. It doesn't have to be a string.
* They have several warnings. E.g. for when none or many senders are on a channel that a receiver is listening to.

## Descriptive Tree patching
Some libraries focus on a simple idea:
Let the user build an object graph that describes what he wants in a declarative manner and the library will do the hard work to follow that description.
![a tree](tree.png) 

Examples for this approach are
* VL.Stride
* VL.Elementa
* to some extend VL.Skia 

VL.Stride and VL.Elementa have in common that they focus on a very certain type of object graph: A tree made out of entities and components. 
Libraries like these can now talk to the user and enforce the user to not build any kind of graph, but a tree-shaped graph (where one child doesn't have many parents). 

VL.Stride uses TreeNodeParentManagers, Warn nodes and S&R nodes internally to the deliver this feature:
![no tree. we get a runtime warning ](no%20tree.png) 
You'll very soon be able to inspect those patches. 

Help patches to all those topics will show up in the CoreLib API section (at the bottom of the listing).

We hope you'll enjoy these ways of integrating with the development env.
Thank you and we'll see you soon!

yours devvvvs
