---
categories: "Development News"
author: "joreg"
date: "2021-11-17"
title: "vvvv gamma 2021.4 release candidate"
slug: "vvvv-gamma-2021.4-release-candidate"
description: ""
imported: "true"
thumb: "primitives.jpg"
---


![](primitives.jpg)

Here goes!

We have a candidate for our upcoming release: 

{{< box >}}
**[vvvv gamma 2021.4.0 RC6](https://teamcity.vvvv.org/guestAuth/app/rest/builds/id:34877/artifacts/content/vvvv_gamma_2021.4.0-0628-g2669aa5c35_setup.exe)**{{< /box >}}

Here are some of the highlights:
* Improved patching performance in large projects
* A new Hamburger menu with easy access to settings and themes
* Support for [editor extensions](https://thegraybook.vvvv.org/reference/extending/editor-extensions.html)
* Language refinements: This node and explicit type parameters
* Video: Support for the effortless playback of a wide range of formats, see [Video Playback](https://thegraybook.vvvv.org/reference/best-practice/video-playback.html)

Skia 2d rendering:
* Now fully GPU accelerated
* Skia to Stride now works on all GPUs
* ImagePlayer to play image sequences as image

Stride 3d rendering:
* TextureFX: a vast collection of easy to use nodes for applying visual effects to textures
* Pipet, MeshSplit, Texture and Buffer nodes for VL.Stride
* ImagePlayer to play image sequences as texture
* New PostFX: Fog and Outline
* ShaderFX node factory to easily write composable shader snippets
* Materials can be extended with custom shaders
    
For full details of what's new, please consult the [Change Log](https://thegraybook.vvvv.org/changelog/2021.4.html).

So please test and report your findings. If we don't find any complete show-stoppers within the next days, this is going to be it!