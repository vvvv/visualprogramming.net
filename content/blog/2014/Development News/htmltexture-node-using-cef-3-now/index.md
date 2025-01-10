---
categories: "Development News"
author: "Elias"
date: "2014-06-27"
title: "HTMLTexture node using CEF 3 now"
slug: "htmltexture-node-using-cef-3-now"
description: ""
imported: "true"
---


The HTMLTexture (EX9.Texture) node is now based on version 3 of the [Chromium Embedded Framework (CEF)](https://code.google.com/p/chromiumembedded/) and available for testing in the latest [alpha builds](https://legacy.vvvv.org/downloads/previews). Thanks to [MESO](https://legacy.vvvv.org/businesses/meso) for sponsoring the update.

The update to CEF 3 brings the following features:
* The node is now finally available in 64 bit.
* The node will spawn processes in background (like chrome does) which do the rendering, javascript etc.
* CEF can be configured through command line arguments to vvvv.exe - a general overview can be found here: http://peter.sh/experiments/chromium-command-line-switches/ - not all working though
* [forum](forum) not crashing anymore.

But there're also some new limitations we came across in our first tests:
* Mouse flickers in flash files - see http://www.magpcss.org/ceforum/viewtopic.php?f=6&t=10688 - will probably never be fixed because of deprecation of NPAPI.
* Our transparent flash example doesn't work anymore - and didn't find a way yet to get it working again. This is probably related to the mouse flickering mentioned above.

We encourage everyone to test the node and report issues as usual in the [alpha forum](https://discourse.vvvv.org/).