---
categories: "Development News"
author: "joreg"
date: "2012-07-06"
title: "cross-process texture sharing, depth rendering"
slug: "cross-process-texture-sharing-depth"
description: ""
imported: "true"
---


helo nerds,

this is to inform you that latest alphas come with a new commandline: argument
 /dx9ex

starting vvvv with this option (on windows >= vista) brings you:
* a VideoTexture that works on two heads of one graphiccard (as you'd have always expected)
* texture sharing
* broken {{< node "Flash (EX9)" >}} as long as original movie's resolution is non-power of two
- broken {{< node "Text (EX9.Geometry)" >}}

texture-sharing can be used to share textures e.g. between two instances of vvvv (without noticable performance penalty) and even with any other software that also supports DX9EX. check the helppatch of {{< node "SharedTexture (EX9.Texture)" >}} for instructions. 

apparently this can also work as a [bridge to opengl](http://developer.download.nvidia.com/opengl/specs/WGL_NV_DX_interop.txt) if someone wants to give this a try...and for those wondering, yes this enables stuff on windows your macfriends have been bragging about for a while now using [syphon](http://syphon.v002.info/).

### depth rendering

another new thing (not related to dx9ex) is the possibility to render the deph of scenes directly without using an extra pixelshader pass. just set the {{< pin "Texture Format" >}} of a {{< node "DX9Texture (EX9.Texture)" >}} to *INTZ* and you should get the depth of your scene rather than a colorbuffer. disclaimer: may not work on certain graphiccards, [see here](http://aras-p.info/texts/D3D9GPUHacks.html)
//legacy.vvvv.org/downloads/previews
available now in latest [alphas](https://legacy.vvvv.org/downloads/previews), enjoy.