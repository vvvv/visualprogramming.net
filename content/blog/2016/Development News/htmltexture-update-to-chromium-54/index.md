---
categories: "Development News"
author: "Elias"
date: "2016-12-12"
title: "HTMLTexture update to Chromium 54"
slug: "htmltexture-update-to-chromium-54"
description: ""
imported: "true"
thumb: "Chromium54.png"
---


Thanks to [MESO](https://legacy.vvvv.org/businesses/meso) our HTMLTexture (EX9.Texture) node got another update to version 3.2840.1513.gf7effc7 (Chromium 54.0.2840.59) of the [Chromium Embedded Framework](https://bitbucket.org/chromiumembedded/cef).

![](Chromium54.png)

The most important change compared to version 3.1750.1738 (Chromium 33.0) shipped with beta34.2 is probably the [improved font-rendering quality](https://blog.chromium.org/2014/07/chrome-37-beta-directwrite-on-windows.html) by making use of [DirectWrite](http://msdn.microsoft.com/en-us/library/windows/desktop/dd368038(v=vs.85).aspx).

For a complete list of changes between Chromium 33.0 and 54.0 have a look at the [official development blog](https://blog.chromium.org) of Chromium.

Advanced features like WebGL, Flash, PDF rendering etc. should all be working, but compared to Chrome itself playback of H.264 encoded video files will not work because we do not have a license to ship these proprietary codecs. For a more detailed discussion have a look [here](https://code.google.com/archive/p/chromiumembedded/issues/371).
In case you need to support these codecs you'll have to build the exact same CEF version we're using (3.2840.1513.gf7effc7) on your own (with set GYP_DEFINES="proprietary_codecs=1") and replace our shipped CEF files with those of your custom build.

As always the node can be tested using our latest [alpha builds](https://legacy.vvvv.org/downloads/previews).