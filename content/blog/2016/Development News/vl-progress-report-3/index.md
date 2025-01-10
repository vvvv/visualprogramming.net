---
categories: "Development News"
author: "joreg"
date: "2016-11-17"
title: "VL Progress Report /3"
slug: "vl-progress-report-3"
description: ""
imported: "true"
thumb: "explorer.gif"
---


previously on VL: [VL Progress Report /2](/blog/2016/vl-progress-report-2)

here we go,

FEATURE FREEZE!

just like that. with the previously mentioned unification of *Record*, *Class* and *Process* into one more easy to understand *Patch* we have now added the last big feature to alpha-builds that we were working towards. so finally the question "how to create a new patch in vl" can (again) be answered by: CTRL+P to create a patch and open it or CTRL+SHIFT+P to create a node of a new patch at the cursor. easy. 

also the explorer (the listings in the topleft of the patch) are now hidden by default because our theory is that it will ony be useful for more advanced usecases and shall not distract the casual user. you can open the explorer by clicking the little quad in the corner and from there change from *Patch* to *Record* or *Class* to make the patch available as a datatype. so much just as a quick info. more explanations to come in tutorials and documentation updates.

![](explorer.gif)
*Easy switching between Patch, Record and Class*

here is a rough log of other recent changes that you can now test in latest [alphas](https://legacy.vvvv.org/downloads/previews): 
* to create a patch for grouping some utility operations together now create a *Group*
* Cons: the Cons node now finally has a dynamic pin count. use CTRL +/- on the selected node to increase/decrease the number of inputs
* Concat: similar to Cons, but for concatenating multiple spreads to one spread

![](cons.gif)
*Ctrl +  and Ctrl -*

* adding/removing pins now also works on multiple selected nodes
* Evenly distribute a selection of nodes using two different approaches
![](distribute.gif)
*Ctrl+Shift+L*

![](distribute2.gif)
*Ctrl+Alt+L*

* IOBoxes created via middleclick and pins created via doubleclick now can instantly have their label edited
* there is now a simple IOBox for colors

![](iobox.gif)
*Color IOBox via middleclick with instant label editing*

* the inspektor of an input or IOBox now updates when changing a type annotation
* changes in inspektor are now part of undo history
* rightclick on link: if already selected then delete else open context menu
* usability of the NodeBrowser is improved
* preliminary support for tags in nodebrowser: they are not visible but they already influence the search results. e.g. type / to find both / and DIV (the integer division)
* links now only show tooltips if there is an error or warning. force tooltip by pressing CTRL when hovering link
* clicking a .vl file anywhere in the menu now opens its document patch
* finish a link on an input pin with middleclick to start another link from the same output
* improved pin picking sensitivity
* changing pin-order in signature now applies to pins on respective nodes
* splicer and accumulator bars are now reversed in loops
* accumulators in loops are now rendered as diamonds
* patches with the same name and category in a document will now be recognized as duplicates and report an error. same for pins in operations.
* middleclick alternative (ALT + LeftClick) now works on patch labels to open the patch

## Documentation

* the following pages where updated in the gray book
 ** [Libraries](https://vvvv.gitbooks.io/the-gray-book/content/en/reference/libraries/libraries.html)
 ** [The VL.CoreLib](https://vvvv.gitbooks.io/the-gray-book/content/en/reference/libraries/standard_libraries.html)
 ** [Library Design Guidlines](https://vvvv.gitbooks.io/the-gray-book/content/en/reference/libraries/library_design_guidelines.html) (still rather word-like)
 ** [Mouse & Keyboard](https://vvvv.gitbooks.io/the-gray-book/content/en/reference/hde/patching.html) shortcuts for patching
* regarding the gray book please also notice three new features gitbook implemented:
 ** in the top-left corner of the book there is now a search-field that seems to work pretty good
 ** there is a [discussion board](https://www.gitbook.com/book/vvvv/the-gray-book/discussions) for the book
 ** you can comment on any paragraph in the book using the little + button that appears on the right when hovering a line. lets see how that goes..

## Next Steps

Bughunt and preparing for the beta35 release in parallel to continued library development for VL. Means, now is a good time to report bugs!

If you want to get started with VL right now, here is what you do:
{{< box >}}//legacy.vvvv.org/downloads/previews
## Diving into VL

* download: [vvvv alpha downloads](https://legacy.vvvv.org/downloads/previews) 
* demos: see \girlpower\VL
* learn: [VL quick reference](https://betadocs.vvvv.org/devvvveloping/dynamic-vl-plugin-reference.html)
* discuss: [alpha forum](https://discourse.vvvv.org)
{{< /box >}}

If you want to let us know that you like anything you just read...we're always up for a comment or even a flattr:
[/downloads|vvvv](flattr)