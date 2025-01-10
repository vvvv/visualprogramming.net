---
categories: "Development News"
author: "tonfilm"
date: "2014-07-01"
title: "Two cool SVG nodes"
slug: "two-cool-svg-nodes"
description: ""
imported: "true"
thumb: "svg_textures.png"
---


![](svg_textures.png) 

Inspired by [this forum post](forum), the SVG nodes got two new companions which make it easy to render a spread of textures from a spread of SVG elements.

The {{< node "Join (SVG)" >}} node is similar to the {{< node "Group (SVG)" >}} but instead of packing all elements into one SVG group it outputs one SVG group for each slice of the input elements.

If you put an {{< node "AsDocument (SVG)" >}} node right after it, it will create a spread of SVG documents for each SVG element at its input. And since the {{< node "SVGTexture (EX9.Texture)" >}} is also spreadable, you can render a bunch of textures at once.

Please test in latest [alpha builds](https://legacy.vvvv.org/downloads/previews) and [bugreport](https://discourse.vvvv.org/) as usual.

render on,
devvvvs

