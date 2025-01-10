---
categories: "Development News"
author: "joreg"
date: "2015-12-18"
title: "VL autumn update"
slug: "vl-autumn-update"
description: ""
imported: "true"
---


previously on VL: [VL Summer Update](/blog/2015/vl-summer-update)
---
It may seem a bit quiet around VL on your end but i can tell you our heads get deeper and deeper into what is going to be our next-generation visual programming offering. Before you get the latest infos please read the standard blurb. Too techy?

## What the VL?

VL is a visual programming language combining dataflow and object oriented programming. It is compatible with the .net and mono frameworks in that it can consume [.net](https://en.wikipedia.org/wiki/.NET_Framework)/[mono](https://en.wikipedia.org/wiki/Mono_(software)) libraries directly and its compiler builds to the [CIL](https://en.wikipedia.org/wiki/Common_Intermediate_Language).

Notable features include:
- patch your own types, dynamically instantiate them and manage them in collections (Spread, Dictionary,..)
- use Generics, LinQ, Delegates, Interfaces
- asynchronously react to input using the Observer design pattern

VL is embedded into vvvv as a first class patching language and later will be released with its own standalone editor. 

Hmmja..probably too techy still..

## What happened recently

### Library

First here is a little update on whats new in the library. {{< user "dominikKoller" >}} implemented the following devices:
* [Spacemouse](https://discourse.vvvv.org/t/spacemouse-vl-plugin/13207)
* [TheEyeTribe EyeTracker](https://discourse.vvvv.org/t/theeyetribe-eyetracking-vl-plugin/13201)
* [Leap](https://discourse.vvvv.org/t/leap-vl-plugin/13344)
Note that the downloads in those threads are now obsolete since they are now included with alpha downloads. 

Then we cleaned up the BezierSegment and BezierPatch stuff a bit that {{< user "woei" >}} had started and moved it from girlpower to library. And we added some random stuff:
- ArcLength 
- ADSR (time and framebased)
- Limiter, Trigger, Metronome
- ArtNet encoder and decoder
- QRCode encoder
- [Mapping nodes](/blog/2015/mapping-and-ranges-in-vl) 

Of those we wrapped the following for your convenience into plugins for vvvv:
- EyeTracker (Devices TheEyeTribe)
- Leap (Devices) quite similar to the extensive {{< contribution "leap-pack" >}} by {{< user "microdee" >}}
- ArcLength (2D/3D)
- Artnet (Network Sender/Receiver) with spreadable subset and universe pins
Check their helppatches for details.

Also there are now FromRaw and ToRaw nodes in VL that allow you to communicate in raw(ie. bytes) between vvvv and VL. Quite some more stuff is in the works in VL that we'll also want to wrap back to vvvv..exciting times..

## Nugets

All this preparation of the library took us way longer than expected because about halfway through we decided to give priority to a thing we had initially scheduled for later: VL now has a package management system. It was obvious that we need such a thing since the early days of vvvv but we always knew that it will be a hell lot of work to implement and maintain on our own (think: versioning, dependencies,...). Luckily finally some people came up with a thing called [NuGet](http://nuget.org/) that Microsoft adopted as the official package managing system for .net. And hey, VL is built on .net...kombiniere..

So essentially now the whole VL library comes as a series of nugets. We have the VL.CoreLib nuget which brings you the most basic stuff and then a couple of nugets like VL.Devices.Leap, VL.Devices.Spacemouse,...you get the idea. In the future anyone contributing to the VL library can create and share nugets. They are versioned and can depend on other nugets and they can be referenced by individual .vl documents. Means: VL has no more monolithic addonpack and no more guessing as to which contributions are missing and where they need to be placed. 

In the best future scenario you open a VL patch that has red nodes and VL will check to find the missing pieces (in the correct version) online and simply ask you to confirm to download them with one click. See, if we get this right it potentially solves a lot of problems you were used to in vvvv over the past years. 

Can also have this in vvvv? So far we've laid the basis that potentially also vvvv can profit from but that still needs a bit of investigation, so nothing promised yet. 

For now we've concentrated on VL and you can see the first results: we're shipping all our nugets with VL, so no dynamic download/update mechanism yet. But still you can already decide to reference individual nugets or not. Read on:

## UI

The main navigation got a bit of an overhaul and is now more focusing on the active document. You can now more easily get an overview of all patches in the document and also have a new section to select which nugets you want your documents to reference via a single rightclick. 

Please refer to the following two new sections in [The Gray Book](https://www.gitbook.com/book/vvvv/the-gray-book/details) for details:
* [Navigating a Project](https://vvvv.gitbooks.io/the-gray-book/content/en/reference/hde/navigatinga_project.html)
* [The NodeBrowser](https://vvvv.gitbooks.io/the-gray-book/content/en/reference/hde/the_nodebrowser.html)

## Next steps

To repeat our current plan: Get beta35 out at some point early™ next year which will include VL as a serious new language that you can use if you're stuck with vvvv but don't want to use c#. Easyasthat.

And of course at some point we'll let you//legacy.vvvv.org/downloads/previewsown nugets. We're just not 100% sure about all the details yet, so please bare with us while we do some more testing on that..

Meanwhile please get yourself excited a bit more. I don't know how you do it normally but here is a few steps i can suggest:

{{< box >}}
## Diving into VL

* download: [vvvv alpha downloads](https://legacy.vvvv.org/downloads/previews) 
* demos: see \packs\vlpack_..\girlpower 
* learn: [VL quick reference](https://betadocs.vvvv.org/devvvveloping/dynamic-vl-plugin-reference.html)
* discuss: [alpha forum](https://discourse.vvvv.org)
{{< /box >}}

(Don't be alarmed by the fact that the alpha-downloads are huge at the moment. That'll be improved at some point..)