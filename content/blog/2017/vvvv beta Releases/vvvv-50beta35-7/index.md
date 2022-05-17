---
categories: "vvvv beta Releases"
author: "Elias"
date: "2017-06-19"
title: "vvvv_50beta35.7"
slug: "vvvv50beta35.7"
description: ""
release: 
    major: "50"
    minor: "35.7"
    date: "2017-06-19"
    app_file: "sites/default/files/vvvv_50beta35.7_x86.zip"
    app_file_64: "sites/default/files/vvvv_50beta35.7_x64.zip"
imported: "true"
---


![](splash_1.png)


Just right in time one week before [NODE17](https://17.nodeforum.org) we proudly present the latest vvvv release - the beta35.7!

This release primarily focuses on bug fixes and workflow glitches so that the patching experience during workshops at NODE is as smooth as possible.

## VVVV
* All editors from the [editing framework](https://betadocs.vvvv.org/topics/graphics/direct3d-9/basics/editing-framework/editing-framework.html) have a [Gizmo](/blog/2017/welcome-gizmo) manipulator.
* Less drawing glitches on high DPI displays.
* Links can finally turn red when the source and sink types don't match anymore. Should you come across them in your existing patches this simply means that you see a potential problem in your patch the UI didn't show you before.
* Enums saw quite a few improvements, from a simpler internal encoding to no more red spread operation nodes. Also the S/R performance should be back up to normal.

## VL
* [The Gray Book](https://vvvv.gitbooks.io/the-gray-book/content/en) was heavily updated. You might find quite a few gems hidden there you didn't know about yet.
* One can now [search](https://vvvv.gitbooks.io/the-gray-book/content/en/reference/hde/finders.html) inside a patch like in any text editor by pressing [CTRL+F](https://vvvv.gitbooks.io/the-gray-book/content/en/reference/hde/patching.html) and across all the VL documents by pressing [CTRL+SHIFT+F](https://vvvv.gitbooks.io/the-gray-book/content/en/reference/hde/patching.html)
* The new [Solution Explorer](https://vvvv.gitbooks.io/the-gray-book/content/en/reference/hde/solution-explorer.html) allows you to quickly navigate and get an overview of all the documents, their node definitions and dependencies between them. Open it by pressing [CTRL+J](https://vvvv.gitbooks.io/the-gray-book/content/en/reference/hde/patching.html).
* The user interaction was unified so a double click will always bring up the node browser now. For that reason a few keyboard shortcuts had to be changed, so to create pins, pads or IO boxes quickly one needs to press CTRL, SHIFT or ALT while clicking. To force connections or drag nodes out of regions one needs to press SPACE. For a complete overview of VL's shortcuts go [here](https://vvvv.gitbooks.io/the-gray-book/content/en/reference/hde/patching.html).
* Links will now snap to pins
* The default patch type "Patch" is now called "Process" and all patch types are now supported as vvvv nodes.

Have fun patching and see you at NODE

yours,
devvvvs

PS: If you haven't seen it yet, checkout the first VL contribution {{< contribution "craftlie-dx11-drawing-for-vl" "CraftLie" >}} which allows you to draw inside VL using the famous DX11 rendering engine.

PPS: It came to our attention that a few VL girlpower patches are broken (_Basics/AsyncInput, _Basics/ParticleSystem, 2D/Spray, Games/Asteroids and Games/Tetris). A hotfix can be found [here](https://matrix.org/_matrix/media/v1/download/matrix.org/QlDcCAIQcAlTjuQWqdbNaLoN).