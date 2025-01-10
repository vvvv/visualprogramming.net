---
categories: "Development News"
author: "robotanton"
date: "2017-03-18"
title: "Editing Framework update"
slug: "editing-framework-update"
description: ""
imported: "true"
thumb: "BezierEditorUpd_r.gif"
---


![](BezierEditorUpd_r.gif) 


Pointmovers of vvvv!

The [Editors](https://betadocs.vvvv.org/topics/graphics/direct3d-9/basics/editing-framework/editing-framework.html) got some new features.

**Stepping through the points via Keyboard**
* **Q** - next point
* **Shift+Q** - previous one
* **Space** - select point
* **W** - switch between Controls of a Knot (in a Bezier Editor).

**Marquee selection in a Bezier Editor**
* If Points are getting selected, Controls are ignored.
* Press **F** - to Force selection, it allows to mix the selection of Points and Controls.

**Support for DX11**
The Editors by itself are graphics-engine-independent, but their points, lines and handles must be rendered. From now on there are DX11 Views for every Editor.

**The Editors:**
<!--{SPLIT()}-->
**2d**
* {{< node "PointEditor (2d)" >}}
* {{< node "BezierEditor (2d)" >}}
* {{< node "BezierPatchEditor (2d)" >}}
<!--~~~-->
**3d**
* {{< node "PointEditor (3d)" >}}
* {{< node "BezierEditor (3d)" >}}
* {{< node "BezierPatchEditor (3d)" >}}
* {{< node "MeshEditor (3d)" >}}
<!--~~~-->
<!--~~~-->
<!--{SPLIT}-->

**Available in latest [Alpha builds](https://legacy.vvvv.org/downloads/previews).**

See also: 
* [Introducing the Editing Framework](/blog/2016/introducing-the-editing-framework)
* [Editing Framework](https://betadocs.vvvv.org/topics/graphics/direct3d-9/basics/editing-framework/editing-framework.html)