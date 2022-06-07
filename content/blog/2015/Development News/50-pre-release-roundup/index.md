---
categories: "Development News"
author: "joreg"
date: "2015-04-17"
title: "50: Pre-Release Roundup"
slug: "50-pre-release-roundup"
description: ""
imported: "true"
thumb: "navigation.png"
---


hola,

here is the final in a series of blogposts about our forthcoming nextbigthing that we still call vvvv50 (50). If you haven't already done so please first read the previous issues with the titles:

1. [50: That-Next-Big-Thing.-An-Overview.](/blog/2014/50-that-next-big-thing.-an-overview.)
2. [50: Colors](/blog/2014/50-colors)
3. [50: Properties](/blog/2014/50-properties)
4. [50: Generics](/blog/2015/50-generics)
5. [50: Custom Datatypes](/blog/2015/50-custom-datatypes)
 
{{< box >}}
Note:All information given here is still preliminary and subject to change.{{< /box >}}

With little more than a week till [keynode](http://node15.vvvv.org/program/vvvv-keynote/vvvv-keynode-megashow) you might assume that by now we have a pretty good idea of what the initial release of 50 will look like. Well...of course. Sadly we also now know which parts we'll have to leave out because we're just not satisfied with it yet. We've definitely hoped for more but we're confident there is enough for you to get started and by the time you get bored we drop the next feature to keep you entertained. Think carrot.. on a stick.. in front of your eyes.. 

The past two weeks we got external testers support from {{< user "bjoern" >}} and {{< user "woei" >}}. They were hardly able to hide their disappointment after the first hours of working with 50 because there were just too many problems to deal with still. So we were very grateful for their patient bug-reporting and after two weeks we were quite happy with what they've achieved. Tons of fixed bugs later we believe to now have something we can call an alpha-candidate. 

So let's recap what you will get to play with on April 29th:

## Language

With 50 we are giving the world a new programming language. Its name is "VL", which in good programming language trivia also denotes the file ending of documents written in the language. ie. you'll work with files like: callmenames.vl

VL initially will allow you to:
- define operations with (generic) input and output parameters
- define datatypes with properties and operations
- collect instances of your datatypes in spreads
- run operations for-each slice in a spread
- define delegates aka anonymous functions
- use delegates as parameters of operations
- observables..

We have a list of more language features still to come. Those are only the ones that made it to the first release. 

## User Interface

Did you notice we haven't spoken about the UI at all yet? The reason being that a lot of the UI design depends on the language design and as we've pointed out repeatedly thats where our focus mostly was in the past months. Thats the part of the UI that is inside the patch.

The other part of the UI is everything around the patch and is mostly related to document handling or navigating the structure of a project. Regarding this, here are some fresh news for you:

A typical simple VL project will consist only of a single VL document since now a single document can hold any number of patches. Of course at any point you can decide to create multiple documents and reference one from another, but by default you won't have to deal with multiple files. 

So how is that related to the UI? Well, navigating a projects documents and patches is something the UI allows you to do and is what you'll do a lot while working on projects. A treeview would be the obvious choice here but since we're not best known for obvious, we have gone a bit experimental in that respect hoping to provide a faster access for most usecases (with the treeview only as a fallback for now). We'll see how that works out..

![](navigation.png) 
*Navigation Menu*

## Library

Also not much library talk so far. And here you'll probably see your biggest disappointment with the initial release: There aren't many nodes yet. Certainly none that do any drawing or even a renderer of any kind yet. Instead we hope to get you covered with the basics for math, string, color and spread handling so you're able to get used to the new paradigms. 

Still here some more library news: We created a tool that allows us to import datatypes and operations from any managed library out there and have them available as nodes in VL within just a few clicks. Thats quite crazy in theory. And yes, even in praxis. Only in praxis it also means that while we'll save years of time writing library-code we have to invest some time in curating libraries and make them work properly and intuitively within the VL world of thinking. Can you have that tool to import stuff for your self? Not now. Later? Of course!

## Deployment

As we already demoed at node13 VL is a compiled language meaning that with any change you do to a patch, 50 in the background creates a new executable and instantly runs it. And really that should be none of your concern unless of course you're interested in running your creations standalone, ie. without the need for 50 being around. 

Because thats what "compiled" also means: Create standalone executables from a project with a single click. And if one uses only dependencies to cross-platform libraries in a project, the executable will even run cross-platform. Only: Not with the initial release.

Also we demoed having 50 itself running on other platforms, which according to the survvvvey 39% of vvvv users are waiting for.. Anyway..not happening either. Not now. 

Bummer..so with all that "not now" is there actually anything left to look forward to? Eeei god hasn't created the world in one release...

Still interested in a map of the road ahead? Don't miss the keynode where we'll try to lay it all out. 

Appreciate what you just read? We appreciate a click: [/downloads|vvvv](flattr).

Looking fwd to seeing you all at node!
