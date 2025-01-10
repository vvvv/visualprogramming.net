---
categories: "Development News"
author: "joreg"
date: "2016-10-18"
title: "VL Progress Report /1"
slug: "vl-progress-report-1"
description: ""
imported: "true"
thumb: "processexplorer.gif"
---


previously on VL: [VL Midsummer Night's Dream](/blog/2016/vl-midsummer-nights-dream)

helo evvvveryone,

here is to inform you of recent updates in VL land. We're still in feature-mode as we have a few things that we need in the first release even though they are quite advanced and a typical VL user will hardly come across them. Still, we figure, a few of you will be interested in: 

## The Process Explorer

The avid reader of this blog and tester already knows that a stateful patch (aka data type) in VL can be used in two different ways:
- as a single node: we call that *Process Node* for now
- as a series of nodes represending the types individual member operations

The process explorer is supporting the first of those cases in that it allows you to define the order in which operations will be called for a Process node. The simplest example of where this is interesting is when you patch a node like the FlipFlop which has a *Set* and a *Reset* operation. For the case where in one frame both of them are called it is important to specify which of them takes precedence. This is what you can now do in the process explorer by simply specifying the order of the individual operations. In addition it allows you to specify for some operations to not take part in the *process* at all by unchecking their indicator and to show (or not) a *State* output pin on the node...

![](processexplorer.gif) 
*Prioritizing the operations of a FlipFlop*

Again: this is a rather advanced topic which the casual vl user will hardly ever come across. Still having this feature improves the pro-users lives and specifically the vl core library of nodes makes of course heavy use of that feature. 

## More changes since last report

- a series of fixes are in place for connection handling
- pin order of operations is now x-based by default but can be changed manually via the signature
- context menu is now only on rightclick (was on marquee selection)
- the IOBox Inspektor is drawing a bit nicer
- middleclick "jump to" now focuses the targeted operation after the patch was opened
- you can now use the mouse thumbs-buttons navigate back and forth
- there's a new girlpower: girlpower\Curves\SplineTree//legacy.vvvv.org/downloads/previews

All this and more availble now in [latest alphas](https://legacy.vvvv.org/downloads/previews).

## Next Steps

Same as in the previous blog-post apply + we're hoping to reach a feature-freeze soon. We basically have one bigger rework to go that is supposed to make everyones lifes easier. In short: right now in VL when you create a new patch you need to decide beforehand between making an *Operation*, a *Class* or a *Record*. Those are all new concepts that are not so simple to explain to someone without any programming background. That is why we're now working on a workflow where this is not the first thing someone has to understand...nuff words, you'll see when it is done..

If you want to get started right now, her//legacy.vvvv.org/downloads/previews
{{< box >}}
## Diving into VL

* download: [vvvv alpha downloads](https://legacy.vvvv.org/downloads/previews) 
* demos: see \packs\vlpack_..\girlpower 
* learn: [VL quick reference](https://betadocs.vvvv.org/devvvveloping/dynamic-vl-plugin-reference.html)
* discuss: [alpha forum](https://discourse.vvvv.org)
{{< /box >}}

If you want to let us know that you like anything you just read...we're always up for a comment or even a flattr:
[/downloads|vvvv](flattr)