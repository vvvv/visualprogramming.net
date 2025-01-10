---
categories: "Development News"
author: "robotanton"
date: "2018-11-23"
title: "VL: Skia Update"
slug: "vl-skia-update"
description: ""
imported: "true"
thumb: "Mask5-compresse_r.gif"
---


Hello,

welcome the first update to our beloved 2D graphics library.
Since [this summer's release](/blog/2018/vl.skia) quite a few things have happened.
The main focus was on covering every single aspect of the Skia's Paint (defines how everything looks like when rendered) and cleaning it up. 
We would say it is now complete. 

We've also introduced some special gems like Masks, Precompositions, Ellipsis and some more examples.

Never heard of Skia before? Check [Skia](https://en.wikipedia.org/wiki/Skia_Graphics_Engine) on Wikipedia.

Read on.

##  Masking

You already were able to clip layers by rectangles or paths (ClipRect, ClipPath), now you can use **any layer** as a mask (as you know it from Photoshop), be it an image or very complicated layer pipeline. Welcome the **Mask**. It comes in two flavors: one uses a layer as a mask, another one just an image. The node has useful helpers which allow you to see how the mask looks like and where it is applied.

![](Mask5-compresse_r.gif) 



##  Precomposing

While researching for the masks we've stumbled upon Skia's superpower: we call it precomposing. Layers can be precomposed (leaving canvas unchanged) and then applied (grouped) with other layers. It's like having an extra render pass that works like a layer.

So now you've got two options: you can blur every single particle alone (by setting SetMaskFilter > Blur) or prepare all of them (precompose) and then blur the whole scene at once (by setting SetImageFilter > Blur).

![](Precompose3.png) 

In the screeshot above:
Left - every single circle is blurred alone, the background comes into play.
Right - the whole precomposition is blurred.


##  Ellipsis

Then we have these boring Ellipsis nod... nodes. They clip your text (left, right or center) by the number of letters or the width in units. Like this:

![](Ellipsis2.PNG) 


##  Paint completeness & cleanup

We've cleaned up the **Paint** a lot and now you can set or get any of its properties. Don't forget to turn on the "Advanced" filter of the NodeBrowser (like in the screenshot or just press TAB-key) to get the full power. SetFakeBoldText anyone?

In the **Paint** category:
* Processnodes (having an icon with two dots) are for setting properties (they start with Set)
* nodes with an empty box are for getting properties
* Processnodes without Set (like Stroke, Fill or FontAndParagraph) are convenient nodes setting several properties at once. 

![](Paint-Nodebrows_r.gif) 


##  Examples and Demos

Don't forget to check the **/examples** folder of the package (your-vvvv-folder/lib/packs/VL.Skia.xxxx/).
There are also some updates to the **/examples/demos**, like the **Slideshow.vl** which let's you click through your-very-big-images asynchronously preloading them in the background.

##  Some more features:

- ImageEncoder
- ImageWriter
- SubpixelText property is on by default
- Pipet (Experimental)


##  How to Install

1. Install the latest [vvvv_50beta38.1](https://legacy.vvvv.org/downloads) (older versions are not supported)
2. In vvvv, middleclick > Show VL
3. In VL, go to: **Dependencies > Manage Nugets > Commandline** and type: 
{{< box >}}
nuget install VL.Skia -prerelease
{{< /box >}}


## Versions

* This latest version works best with **beta38.1**. 
* Using **beta38 or older**? make sure to install an older skia version. Type 'nuget install VL.Skia -version 0.93.26-g6c67991fa4' to get a compatible version. You'll miss some of the advertised features though.