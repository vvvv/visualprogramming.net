---
categories: "Development News"
author: "Elias"
date: "2012-08-30"
title: "HTMLTexture (EX9.Texture)"
slug: "htmltexture-(ex9.texture)"
description: ""
imported: "true"
---


thanks to [MESO](https://legacy.vvvv.org/businesses/meso) for sponsoring and [CEF](http://code.google.com/p/chromiumembedded) and [Chromium](http://www.chromium.org/Home) for doing the hard work, it's finally possible to render web content (HTML, Flash, WebGL, etc.) directly into a texture using one of the two new nodes:

<!--{SPLIT()}-->
**HTMLTexture (EX9.Texture String)**
<!--~~~-->
**HTMLTexture (EX9.Texture URL)**
<!--{SPLIT}-->

as there's no window involved at all in the rendering process this is also known as offscreen rendering. and, probably the best feature, the generated texture contains an alpha channel. so for example setting no background color on the <body> element of your HTML content will result in a completely transparent texture.

the new possibilities are of course endless:
* build your own fancy 3d webbrowser
* integrate web services directly into your application
* generate content by using all the expressional power of HTML and JavaScript
* or in combination with the new XML nodes patch a WYSIWYG editor or whatever nonsense you can come up with :)

the nodes are fully spreadable, so for example feed it with a spread of urls you last visited, add some scale/translate magic and voila, you patched the welcome screen like we know it from firefox or chrome.

with the key and mouse inputs you can redirect user input wherever it needs to go, so you could display several websites at once, but redirect user input to only one of them.

for more advanced usage scenarios use the JavaScript input pin in combination with the Execute pin. they allow you to run custom JavaScript code on the displayed web site.

if you want to test these new nodes download the latest [alpha build](https://legacy.vvvv.org/downloads/previews) of vvvv including the addonpack.

<!--{SPLIT()}-->
**Flash demo**
![](HTMLTexture%20-%20demo%20patch_2012.08.30-16.31.00.png)
<!--~~~-->
**WebGL demo**
![](HTMLTexture%20-%20demo%20patch_2012.08.30-16.59.05_0.png)
<!--{SPLIT}-->

{{< box >}}
Note:
support for WebGL is highly experimental and whether it works or not highly depends on system configuration and the actual WebGL example.
{{< /box >}}