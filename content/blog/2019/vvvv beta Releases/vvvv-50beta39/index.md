---
categories: "vvvv beta Releases"
author: "joreg"
date: "2019-12-07"
title: "vvvv_50beta39"
slug: "vvvv50beta39"
description: ""
release: 
    major: "50"
    minor: "39"
    date: "2019-11-17"
    app_file: "sites/default/files/vvvv_beta_39_x86_0.zip"
    app_file_64: "sites/default/files/vvvv_beta_39_x64.zip"
imported: "true"
---

{{<previousRelease>}}


Patcher People!

Once again later than we hoped for, but here it is: **vvvv beta 39** in all its glory! Many thanks go to everyone who reported issues with the release-candidates! Here are the highlights:

{{< youtube "aNhqIN-GwGI" >}}
*What's new in vvvv beta 39*

## General
* Finally we ship an installer! Just a few clicks and you should have vvvv beta running. Note how this also optionally installs the addonpack
** NOTE: By default it installs to C:\vvvv, because it won't work in C:\Program Files...
* The default patch-window size is increased
* By default new patches now save to %User%\Documents\vvvv\beta\Sketches. Like this you can quickly find your recently created patches via a new main menu entry: *Recent Patches*
* We've added two shortcuts to the main menu: 
** Show Installed Packs: opens explorer pointing to the \packs directory
** Download Contributions: opens a browser pointing to the contributions page

## Features
* Control IOBoxes from any webbrowser (desktop of mobile) using [RCP](https://github.com/rabbitControl/RCP). See the helppatch of Rabbit (RCP) for details.
* Easy to use WebSocket (Network Client) node
* New fancy shader nodes: PBR (DX11.Effects), PBRInstanced (DX11.Effects), PBRTextured (DX11.Effects), PBRTexturedInstanced (DX11.Effects)

## New in VL
If you're also using VL already, good for you, because here you'll find even more goodies you will benefit from: 
- [Shiny Tooltips](/blog/2019/vl-tooltips)
- [IOBoxes 2.0](/blog/2019/vl-the-big-iobox-update)
- [Regular Expression nodes](/blog/2019/vl-regular-expressions)
- [Pingroups](/blog/2019/vl-input-and-output-pin-groups)
- If you're looking for the *Manage Nugets* menu entry under *Dependencies*: this has been moved to the Quad menu
- and quite some more as we've listed in the [gamma preview changelog](/blog/vvvv-gamma-2019.1-preview#changelog)

Besides those, it is important to understand that with VL you also have access to numerous more libraries that have been released recently. A lot of new packs these days come as nugets. For an overview, see [VL packs on nuget.org](https://www.nuget.org/packages?q=VL) and you can use them all in vvvv beta, via VL...

## Learn VL
This is a good moment to get started with VL. Note that everything you learn and do with VL can later be applied to the upcoming vvvv gamma since VL is what both vvvv beta and gamma share. If you haven't already, check out [these Tutorials and HowTos](https://www.youtube.com/channel/UCu-xqv-TLwv6L0An7MJJA5A/playlists?view=50&sort=dd&shelf_id=4)!

Have a good patch,
Yours, vvvv

----

PS: People who liked this release also liked [The vvvv Show-Off-Reel](/blog/2019/the-vvvv-show-off-reel)

{{< box >}}
Note:
We regret to inform you that we no longer offer an installer for this release! Please simply unzip this into a good place on your disk. Then run **config.exe** to install additional requirements, before running vvvv.exe
{{< /box >}}