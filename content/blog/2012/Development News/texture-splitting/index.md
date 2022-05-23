---
categories: "Development News"
author: "gregsn"
date: "2012-08-13"
title: "Texture splitting"
slug: "texture-splitting"
description: ""
imported: "true"
---


For analysing small textures there is a new node that let's you do that in a patch:
{{< node "Texture (EX9.Texture Split)" >}} gives you all RGBA-Values for each texel of the texture. 
Even for small textures this results in quite big spreads. So typically this is useful when you can identify the interesting texels with just a few nodes. E.g. you could check if the alpha value is {{< node "> (Value)" >}} 0. You then can {{< node "Select (Value)" >}} those texels and operate on just those few texels.

{{< contribution "texture-split-demo" >}}