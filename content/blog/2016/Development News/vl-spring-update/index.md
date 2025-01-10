---
categories: "Development News"
author: "joreg"
date: "2016-08-05"
title: "VL Spring Update"
slug: "vl-spring-update"
description: ""
imported: "true"
thumb: "documentpatch2.png"
---


previously on VL: [VL Winter Update](/blog/2016/vl-winter-update)

Still? Yep, spring has passed, summer is in full bloom and we're still finishing up that branch... To learn more about what we're working on at the moment and what you can expect with the next alpha-release, please read on, below the 'what the vl' intro.
---
## What the VL?

VL is a general purpose visual programming language that combines dataflow with features known from object-oriented programming. It comes with a compiler that builds to the .net intermediate language and as such produces executables and libraries compatible to .net/mono. 

Language features include but are not limited to:
<!--{SPLIT()}-->
- datatypes and operations
- loops
- delegates
<!--~~~-->
- generics
- observables
- interfaces
<!--{SPLIT}-->
As a proof of concept VL is now embedded into vvvv before it will later be available in a standalone development environment. Also we're planning for VL to be embeddable in other software products allowing it to become a dynamic plugin provider for various applications...

## Where its at

The main reason for the internal rework we started a few month ago (as mentioned in the previous update) was to get the underlying model that describes a VL program immutable. Immuhat? and why? I'm afraid the answer to that is gonna be a bit technical but since you asked I'd like to quote [wikipedia on Immutable Object](https://en.wikipedia.org/wiki/Immutable_object):
<!--break-->
{{< box >}}quote:wikipedia:
Immutable objects are useful because they are inherently thread-safe. Other benefits are that they are simpler to understand and reason about and offer higher security than mutable objects.
{{< /box >}}

So by making sure that VL internally is completely immutable we're benefiting from these things and already the compiler now runs on a background thread speeding up things quite a bit. 

Anyway it was a bigger rework then we'd anticipated and we made the mistake of mixing a few other changes into the same branch. So now we have to finish all the things we've started before we can show you the results. And that's why we're still not able to release any of the improvements. Meanwhile we compiled a list of things that you can expect:

..ah but first what not yet to expect:
- improved UI performance
- UI consistency
- interaction consistency
because of course those are arguably the most important things for you to judge VL by, but we simply have to do things one after the other. strong basement first..

## Upcoming improvements

In current alphas loading VL inside vvvv takes around 30 seconds which is why we're displaying a splashscreen showing the progress. In our new branch this is now so fast that we're trying without the splashscreen again. The improvement was possible due to a more selective loading/compiling of only the actually needed nodes and the fact that the compiler can now use multiple threads in parallel.

### Language related improvements

When in current alphas you create a patch you then have to decide whether it is a datatype and if so whether that datatype is mutable or not. In the new branch you'll explicitly create either just a patch (that can hold utility operations which can call each other!) or a Record (=immutable datatype) or a Class (=mutable datatype). 

The newly introduced document patch (already mentioned in our last update) gives an overview of the patches in a document, see:

![](documentpatch2.png) 
*The document patch hinting at an error in the SpreadGenerators2 patch*

There is a conceptual change regarding fields of a datatype: Where in current alphas you're using field readers/writers to set and get values in a patch you're now using directly writing to and reading from the fields. Fields therefore don't belong to any operation and can be linked to/from by different operations. 

![](pads.png)
*The Value, Underflow and Overflow fields written to by different operations*

When making a connection between nodes that belong to different operations VL now inserts an anonymous (unnamed) field. This is useful because such a field can now be initialized in the constructor, allowing you to avoid uninitialized states.

### UI related improvements

The explorer in the top-left corner of a patch got an update: You can now conveniently add, remove and rename fields and operations there. Also name and category of the patch can now be changed in that same on-patch menu. 

![](_02.08.2016-15._r.gif)
*The one-stop-shop patch explorer*

The two quick-navigation dropdowns formerly labeled "P" (Patches) and "C" (Categories) now provide direct access to all nodes in the active document (instead of only patches). Therefore the first label changed from "P" to "N" for *Nodes*.

We figured that colors are only required to distinguish intersecting operations in data types. For utility operations we therefore got rid of colors, back to gray, ahh..

Here is a biggy: we split the creation of input and output pins into implementation and signature. In vvvv in order to create an in- or outlet for a patch, you place an IOBox in the patch and give it a descriptive name. The left-to-right placement of IOBoxes in the patch now determines the order of the pins on the respective node. The problem with this approach is that in order to get a specific pin-order for your node you're forced to place the IOBoxes in a way you'd probably not want to place them in the patch. Therefore in VL the order of Pins on a node is now independent of the placement of the respective element in the patch. We now have a separate *Signature* that gives you a convenient alternative overview of an operations in- and output parameters and allows you to sort parameters without changing the implementation. We're still considering hiding it by default because it will mostly look redundant, but here is what we see at the moment:

![](utilities2.png)
*Utility operations showing their pin signature*

When patching an operation it is often useful to be able to set a default value for input parameters. Right now you only always get the default value of the datatype an input has, e.g. if an input is of type *Boolean* for now it will always default to *false*. With the coming update you'll be able to assign a specific default value to inputs of an operation. These defaults then are also applied when using such an operation in vvvv!

The behavior of regions (operations, loops, delegates,..) is now more intuitive. They still autosize to their content but inputs and outputs are now fixed and cannot "swim" around weirdly anymore. 

![](region.gif)
*Fluffy region tweaking*

A big improvement is in place for interacting with loop-regions where you can now create inputs and outputs much quicker. Still needs a little polish, but just click, click click, see:

![](splicer.gif)
*Crossing loop borders made easy*

The comments of an IOBox are now drawn in italic to better denote that they have no relevance for the patch other than helping to add meaning for the user.

You've been at least subconsciously missing that little black dot that in a vvvv patch hints at which pin the mouse is about to interact with. It is a little gesture but it gives us confidence when navigating a patch. Miss it no more:

![](littledot.gif) 
*Alles klar, Herr Kommissar!*

No curved links yet but linkpoints are now editable, selectable and deleteable. Missing also: insert linkpoint. 

![](linkpoints.gif)
*Adding, moving, deleting link points*

By doubleclicking an existing link you can now insert any node by choosing it from the nodebrowser that pops up. The first in- and outputs of the chosen node that matches the links type will be automatically connected.

![](insertnode.gif)
*Insert node in link*

And one more thing that's already available in current alphas but also got some rework plus i think we've not mentioned it yet: the Documentation Window. Press Ctrl+M to open it and write documentation for different elements. Here you can write a general introduction to a vl document, explaining the functionality of individual operations, add credits and tags and such. Things you enter here are also showing up in the vvvv nodebrowser!

## Library

In the last update we already promised an Arduino/Firmata implementation. It is now 99% finished, working smoothly and so convenient to use that it is ridiculous. Expect a separate blogpost soon™. 

Together with our june/july coder-in-residence {{< user "ravasquez" >}} work has started on the implementation of file reader/writer nodes. We're still learning a lot about how to wrap things for VL and are adding details to the documentation (mentioned in the last update) that we're preparing for you to learn how to import/create your own VL libraries.

{{< user "dominikKoller" >}} has done more work on the Skia (2d graphics rendering framework) wrapper. It can already do much more and much faster than 2d-drawing ever was capable of in vvvv (think precision font rendering, antialiasing, clipping paths...) but it is a huge library, so don't expect this out too soon. Note to self: leak a little videoproof of those claims..

{{< user "robotanton" >}} is further impr//legacy.vvvv.org/downloads/previewsork](/blog/2016/introducing-the-editing-framework). Every point now comes with an ID that can be used to tie other things to it. There were some troubles with the aspectratio not being handled consistently between interaction and drawing and the beziereditors now have clear handle-modes and interaction. Those three changes are already in latest alphas now. Next we're improving interaction with 3D points, which is still a bit tricky at the moment. Expect an extra blogpost update when that hits the alphas.

## Next Steps

Fix last remaining issues with the branch, make sure all the things that worked before the restructuring still work, then merge it back into alpha builds. Then continue with more frequent smaller updates on the road towards beta35 which will be the first vvvversion that includes VL as a first-class patching language. If you already want to get your hands on whats available so far, follow these steps:

{{< box >}}
## Diving into VL

* download: [vvvv alpha downloads](https://legacy.vvvv.org/downloads/previews) 
* demos: see \packs\vlpack_..\girlpower 
* learn: [VL quick reference](https://betadocs.vvvv.org/devvvveloping/dynamic-vl-plugin-reference.html)
* discuss: [alpha forum](https://discourse.vvvv.org)
{{< /box >}}

If you want to let us know that you like anything you just read...we're always up for a comment or even a flattr:
[/downloads|vvvv](flattr)