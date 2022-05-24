---
categories: "Development News"
author: "joreg"
date: "2014-04-30"
title: "vvvv - easy to learn with girlpower"
slug: "vvvv-easy-to-learn-with-girlpower"
description: ""
imported: "true"
thumb: "girlpower.png"
---


hola senioritas preciosas y seniores pequeños,

here is an update on our progress with documenting everything we know about vvvv. our documentation taskforce {{< user "robotanton" >}} is busy on two ends: 
* revvvvamping the wiki [documentation](https://betadocs.vvvv.org) pages
* structuring/reworking the \girlpower demo patches that ship with vvvv

## Wiki Pages
the [Audio](https://betadocs.vvvv.org/topics/audio/index.html) and [IO](https://betadocs.vvvv.org/topics/io/index.html) sections were reworked last year already but the latter got a new section on [Files](https://betadocs.vvvv.org/topics/io/index.html#files) more recently that should answer many questions regarding how to read from and write to files. the page on all things [Strings](https://betadocs.vvvv.org/topics/strings/index.html) is new and offering convenient entry-points to topics like unicode, xml, json, regular expressions and more. and also [The GUI](https://betadocs.vvvv.org/using-vvvv/the-user-interface/index.html) got a complete facelift while [Physics](https://betadocs.vvvv.org/topics/physics/index.html) only received minor cosmetic treatment. 

## Girlpower demo patches
for more than a decade the \girlpower directory shipping with vvvv was a rough corner. undocumented poser-patches showing off stuff that you could do with vvvv if you only understood how. 

starting with beta30.2 we thought it may be a good idea to try and explain a bit more and we shipped a new directory called
 \girlpower\The Next Generation
that collects all new carefully documented demo patches. with the beta32 release this directory will be gone and all the good new (and still some of the old) stuff will be available in a new structure closely resembling the wiki [Topics](https://betadocs.vvvv.org/topics/index.html).

![](girlpower.png)

here is where the new bits are with beta32:
* \IO\Files
* \IO\Keyboard-Mouse-Touch
* \Graphics\DX9\Geometry, Shader, Texture
* \Strings

and yes, as always, still more to come..
