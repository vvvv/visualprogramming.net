---
categories: "Development News"
author: "joreg"
date: "2020-01-31"
title: "VL: Help Patches"
slug: "vl-help-patches"
description: ""
imported: "true"
---


Help!

One of the most requested features for VL ever since was the support for help-patches. Obviously they had to come back, but it took us a while to figure out how exactly. One of the brainstorming sessions at [/blog/link-summercamp-2019-exit](/blog/link-summercamp-2019-exit) was especially helpful to sort out the details. Thanks everyone for your input...

## Help Patches
So for the user it is just as before: Press F1 on a node that you need help for. Now what happens is:
- If a help-patch is found, it is opened and a bubble indicates the node you were looking for
- If no help-patch was found, a bubble indicates that no help-patch was found

<!--{SPLIT()}-->
![](helpfound.png) 
*Help patch was found...*
<!--~~~-->
![](helpnotfound.png) 
*No help patch available...*
<!--{SPLIT}-->

In both cases, you can now optionally opt-in for more help: Click the bubble to open the help browser showing the nodes Node Info.

## Node Info
Shows some info about the node plus 3 lists of how-to patches this node is used in:
- most relevant (the dedicated help-patch)
- still relevant
- list of other patches using this node (automatically generated)

![](findinghelp-dd8fd.png) 

This should increase the chance of finding good info about how a node can be used in different scenarios.

When "follow mode" is active, you can click around in the patch and always get the node info to the last selected node.

## Help Flags
Creators of libraries who want to provide help patches now use help flags to indicate relevance for a node. Read all about [using help flags](https://vvvv.gitbooks.io/the-gray-book/content/en/reference/libraries/providinghelp.html) in the graybook.

---

Available for testing in [latest previews](/blog/2020/vvvv-gamma-2019.2-preview)!