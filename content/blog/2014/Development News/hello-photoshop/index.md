---
categories: "Development News"
author: "robotanton"
date: "2014-12-22"
title: "Hello Photoshop"
slug: "hello-photoshop-0"
description: ""
imported: "true"
thumb: "PS-VVVV-Release.PNG"
---


![](PS-VVVV-Release.PNG) 

This one is for all pixelpeople out there.

From now on vvvv can talk, control, send and receive images to and from your Adobe Photoshop started on any networked machine. Layers, Groups, Masks, Smart Objects, Adjustment and Filter layers, Tools, File Operations... you name it, everything can be controlled remotely. 

If all you want to do is to stream images from a running Photoshop instance, just take the {{< node "Photoshop (EX9.Texture)" >}} and you are done.

For more advanced cases, there are modules to send/receive commands (yes, Photoshop speaks JavaScript) and images. Open the [NodeBrowser](https://betadocs.vvvv.org/using-vvvv/the-user-interface/node-browser.html) and type 'psd'.

The Photoshop nodes are coming with the addonpack and there is a special section in the girlpower folder, which is your first destination as always:

 \addonpack\girlpower\Photoshop

The possibilities of scripting Photoshop are endless, we're just scratching the surface and prepared an easy way to do so along with some examples and documentation.

At the moment DX9 is used for input/output of textures, but thanks to the modular structure there are only 3 modules waiting for a DX11 version: 
* AsTexture (Photoshop EX9)
* AsRaw (EX9.Texture Photoshop)
* Photoshop (EX9.Texture). 
Anyone?

Available for testing in latest [alpha](https://legacy.vvvv.org/downloads/previews).
happy photopatching.