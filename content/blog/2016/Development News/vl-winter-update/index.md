---
categories: "Development News"
author: "joreg"
date: "2016-03-29"
title: "VL Winter Update"
slug: "vl-winter-update"
description: ""
imported: "true"
thumb: "canvas.png"
---


previously on VL: [VL Autumn Update](/blog/2015/vl-autumn-update)
---
WHY DOES THAT TAKE SO LONG? Glad you're still with us to ask that question. Well, good things take a while... not good enough? naa, i know you deserve better. so please read on below after the "what the vl" blurb to learn more. 

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
As a proof of concept VL is now embedded into vvvv before it will later be available in a standalone development environment. Also we're planning for VL to be embeddable in other software products allowing it to become a dynamic plugin provider for various applications. More on that later..

## Where its at

Here is how we like to think about VLs current state: a few month after our [initial public release](https://vvvv.org/blog/2015/vvvv50-vl-pack-alpha/) at [node15](http://node15.vvvv.org/) we found that there are a few things that we can radically improve. Mostly under the hood. And we decided to give it a go now rather than running into problems later. So at the moment we're finishing a branch that has all those changes in it with the goal that when merging it back to our main branch we're at a stage where we've been around 5 month ago and what will look quite similar to what is available with the vvvv-alpha download at the moment. Not too uplifting, eh? Well, there will also be a few notable changes:

### No more Utility patches

The biggest change comes in the fact that VL now no longer distinguishes between datatype and utility patches. Utility operations can now simply be patched anywhere, inside or outside a datatype-patch. And they can now call operations that are defined on the same canvas. You're therefore no longer forced to split up utilities into "MyUtils2, MyUtils3..." to only call one operation from the other. 

### Document Canvas

This one is quite something though it is in a very simple state only at the moment. As you already know, a .vl document can hold any number of patches. Only so far you didn't get a good overview of all those. The document canvas now provides such an overview in that it shows you a (freely arrangable) listing of all patches in a document. Later this canvas may be used to visualize dependencies between types or references to interfaces or documents. Nothing promised, but just to give you an idea that with the document canvas we're establishing a new view that will help you organize your projects. 

![](canvas.png) 
*Excerpt of the VL.CoreLib.vl document canvas*

### New file format

The .vl fileformat has changed. Still .xml only with a different layout. Nothing to worry for you though since we have a converter in place that loads old .vl files and saves them in the new format.

## Library

The good news: our work on the VL library continues steadily and is not set back by the mentioned restructuring of the core. work is going on in parallel here.
The bad news: none

Our work on all things library is going on on two front lines: 
# building the VL.CoreLib
# learning about importing miscellaneous .net libraries

ad 1)
here our latest work was regarding [integer-and-primitive-types-in-vl](/blog/2016/integer-and-primitive-types-in-vl)

ad 2)
we're now in the process of preparing a chapter for [The Gray Book](https://vvvv.gitbooks.io/the-gray-book/) where we're trying to answer all your questions before you can even ask them. 

Basically our idea is that as soon as the chapter is finished (which may still take a while) we'll release it to you. Independent of the rest of the state of VL as we're starting to get confident enough with the language that we believe there should not be any hard breaking changes coming up anymore (for a while at least).

In practice we've had a go at importing [SkiaSharp](https://github.com/mono/SkiaSharp), the blazingly fast 2d drawing library (that powers chrome and firefox) then [SharpFont](https://github.com/Robmaister/SharpFont) which is a wrapper around freetype and gives us access to any type of fonts curves and [VerbalExpressions](https://github.com/VerbalExpressions/CSharpVerbalExpressions) which is a convenient alternative to ordinary regular expressions.

All three libraries imported nicely and had their own quirks which we documented. We can now also say that almost all libraries will need some kind of a wrapper (patched in VL and/or written in C#) to be conveniently usable in visualprogramming because after all they were not made for that. Still those wrappers are easy to realize and most of the work goes into wrapper-design, which is actually all the fun. 

Just recently we announced the [editing f//legacy.vvvv.org/downloads/previewsing-the-editing-framework) and also in the works and the next to land in the public alpha builds is a complete implementation of the arduino/firmata protocoll in VL. Because we can!

## Next Steps

On our road to beta35 which will be the first vvvversion that includes VL as a first-class patching language we'll first release a new series of alpha-versions including our new work described above and probably some of the libraries mentioned. Then beta35, then the world. So you may want to get started now. If you don't have time to come to the [3 days introduction workshop on VL](http://resonate.io/2016/education/next-generation-visual-programming-with-vl/) in april, here is how you can help yourself:
{{< box >}}
## Diving into VL

* download: [vvvv alpha downloads](https://legacy.vvvv.org/downloads/previews) 
* demos: see \packs\vlpack_..\girlpower 
* learn: [VL quick reference](https://betadocs.vvvv.org/devvvveloping/dynamic-vl-plugin-reference.html)
* discuss: [alpha forum](https://discourse.vvvv.org)
{{< /box >}}