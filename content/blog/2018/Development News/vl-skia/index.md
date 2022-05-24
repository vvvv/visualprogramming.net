---
categories: "Development News"
author: "gregsn"
date: "2018-07-28"
title: "VL.Skia"
slug: "vl.skia"
description: ""
imported: "true"
thumb: "renderer.png"
---


Skia is a modern and fast 2d rendering library. As usual, we stand upon the shoulders of giants when making this functionality available to you: the core [Skia technology](https://skia.org/) and the [.Net binding "SkiaSharp"](https://github.com/mono/SkiaSharp). The VL.Skia package aims to make all of this functionality available within VL in an easy-to-use high-level node set. 

You now can have the first glimpse on it. From the start, it comes with a nice stack of tutorials and example patches. This package is done for [vvvvbeta37](/blog/2018/beta37-release-candidate).

Here is a rough overview of what the key concepts are:
---
<!--{SPLIT()}-->
### Layers and Renderers

Just like known from vvvv the main idea is that layers can be grouped and can be connected to a renderer to draw them. Most Layers come with a {{< pin "Bounds" >}} input OR {{< pin "Position" >}} and {{< pin "Size" >}} and {{< pin "Anchor" >}}.

We offer different renderers:
* **Renderer**: this one comes with a window
* **Renderer (OffScreen)**: outputs an image that can be drawn with DrawImage or converted to an IImage via ToImage. [Here is what you can do with an IImage](/blog/2018/vl-image-exchange-interface).
* **SVGWriter**, **PDFWriter**: they take a {{< pin "Layer" >}} and write an SVG or PDF file to disk
<!--~~~-->
![A Layer connected to a Renderer](renderer.png) 
<!--{SPLIT}-->
---
<!--{SPLIT()}-->
### Paint

Every layer comes with a {{< pin "Paint" >}} input. It describes how to draw the layer. This is very comparable to the render states in DX9/DX11. 

You can stack the *Paint*-modifying nodes. Nodes like **SetColor** would take everything from the incoming paint and only adjust the color.
<!--~~~-->
![Stroke sets up some paint properties](paint.png) 
<!--{SPLIT}-->
---
<!--{SPLIT()}-->



*Shaders*, *Filters*, and *PathEffects* are all properties of *Paint*. 1000 words wouldn't be enough to describe what you can do with them. You probably just need to play with them a bit. 
<!--~~~-->
![What can I say](blurredWithShadow.png) 
<!--{SPLIT}-->
---
<!--{SPLIT()}-->
### Text

**Text** nodes are also just Layers. You can think of them as text boxes.

Within that rectangular region you now can adjust horizontal and vertical alignment. This is done via properties of *Paint*. The **FontAndParagraph** node allows to conveniently adjust several text related paint properties in one go.

{{< box >}}
Note:
You can visualize the text box with the {{< pin "Show Helpers" >}} pin of **FontAndParagraph**.
{{< /box >}}

(See the examples\3_Text for how to do word wrapping etc.)
<!--~~~-->
![](text.png) 
<!--{SPLIT}-->
---
<!--{SPLIT()}-->
### Transforms

Layers can be transformed. This allows you to patch a Camera. You would then connect your scene to the Camera and the camera to the renderer. 
{{< box >}}
Note:
Transforms are not that important as in 3D rendering frameworks as all Layers already can be placed.
{{< /box >}}
{{< box >}}
Note:
Scaling a Layer influences the stroke width. If this is unwanted specify the {{< pin "Size" >}} on the layer itself and not via transform node.
{{< /box >}}
<!--~~~-->
![Everything scales. Also the stroke](transform.gif) 
<!--{SPLIT}-->
---
<!--{SPLIT()}-->
### Spaces

We designed the library in a way that it works for different scenarios. Sometimes you would like to think in a normalized space, like known from DX9/DX11. In other scenarios, you want to think pixel- or device-independent-pixel-based. 
You can choose the space on the renderer. But you can also combine spaces: With the **WithinCommonSpace** node you can adjust the space for everything upstream. By that, you could have a game that adjusts its content depending on the size of the renderer and still draw some text top-left with a constant text size no matter how big the renderer is. (See examples\1_Basics\08_Spaces-Overview for more details)
<!--~~~-->
![Top Left - Device Independent Pixels](space.png) 
<!--{SPLIT}-->
---
<!--{SPLIT()}-->
### Interaction

Layers in Skia can be interactive. The main idea here is: "*What you see is what you want to interact with*". So if the layer is interactive, connecting it to the renderer in one way or the other means that it will be drawn AND that you can interact with it. (See examples\5_Interaction)

{{< box >}}
Note:
This part is under construction still.
{{< /box >}}
<!--~~~-->
![Button is just a experimental proof of concept node](button.gif) 
<!--{SPLIT}-->
---
## How to install

In order to use this library with VL, you have to install the NuGet that is available via nuget.org. For information on how to use NuGets with VL, see Managing NuGets in the VL documentation. In short, navigate via document menu to *Dependencies -> Manage NuGets -> Commandline* and then type:
{{< box >}}
nuget install VL.Skia -prerelease -Source nuget.org
{{< /box >}}
As long as we don't have an example browser here is how to get them via windows explorer:
{{< box >}}
VVVVDir\lib\packs\VL.Skia...\examples
{{< /box >}}
Drag & drop an example patch onto vvvv or VL. For closing the example use the X on the renderer or hit Ctrl-F4 on the VL patch.

Happy exploring!

Yours, 
Devvvvs