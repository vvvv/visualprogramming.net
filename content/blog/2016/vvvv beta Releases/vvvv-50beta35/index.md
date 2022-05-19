---
categories: "vvvv beta Releases"
author: "joreg"
date: "2016-12-20"
title: "vvvv_50beta35"
slug: "vvvv50beta35"
description: ""
release: 
    major: "50"
    minor: "35"
    date: "2016-12-19"
    app_file: "sites/default/files/vvvv_50beta35_x86.zip"
    app_file_64: "sites/default/files/vvvv_50beta35_x64.zip"
imported: "true"
---


![](splash.png)


BOOOOM,

this is **vvvv 50beta35**, the first vvvv beta release
* in over a year (cheesus!)
* that comes with support for the new visual programming language VL
* that no longer runs on WinXP

But it doesn't stop there. Since the last release obviously a long time has passed in that we continually fixed user-reported bugs and added a range of smaller convenience features besides the one big new feature that is: VL

So first here is a listing of all blogposts introducing some of the fixes, changes and improvements that you now benefit from when using beta35:
- [New Point-, Bezier-Editors with UNDO](/blog/2016/introducing-the-editing-framework)
- [Simplified Firmata/Arduino Nodes](/blog/2016/firmata-second-service)
- [HTMLTexture Update](/blog/2016/htmltexture-update-to-chromium-54)
- [Support for Zoom, Pan, Rotate touch gestures](/blog/2016/zoom-pan-rotate-touchgestures)
- [Extended support for the TUIO protocol](/blog/2016/how-tuio-do)
- [Spout Texture Sharing](/blog/2016/spout-0)
- [An animated GIF Rekorder](/blog/2016/introducing-the-rekorder)
- [A new useful About dialog](/blog/2016/alt-a)
- New EyeTracker (Devices TheEyeTribe)
- Completely reworked Leap (Devices) nodes
- New, spreadable ArtNet (Network Receiver/Sender) 
- A range of new spread generator nodes: SpiralSpread, StarSpread, RectangleSpread, GridSpread (2d/3d), HexGridSpread and RandomSpread (2d/3d)

Also there are some improvements regarding the PluginInterface:
- [Improved performance for Raw Nodes](/blog/2016/raw-performance-speedup)
- [Mixed Data over that same Ol Pin](/blog/2016/mixed-data-over-that-same-ol-pin)
- [Manipulating Time](/blog/2016/go-back-in-time-now)

For the complete list of many more smaller changes please consult the [Change Log](https://betadocs.vvvv.org/changelog/index.html).

A good bunch of those new features (Editors, Firmata, TUIO, EyeTracker, Leap, ArtNet, Spread nodes) are (under the hood) already built on VL. So even if you don't use VL directly you're already benefiting from it through those new developments. And this is only the tip of the patchberg...

EDIT: You more the video watching type? [Click here](https://vimeo.com/196671562).

## Introducing VL

Having been in public alpha since its [first introduction during NODE15](https://vimeo.com/129085756), VL has undergone one more major internal rework which we hadn't anticipated back then. As lined out in [previous blogposts](https://betadocs.vvvv.org/using-vvvv/vl.html) in more detail this was also the reason for the more than one year delay on its first beta release. Here we are now ~5 years (including initial drafts) into VLs development and we can finally say without doubt that we've created something useful, which in combination with vvvv-as-you-know-it can improve your productivity and the complexity of things you can now create, immensely. If you let it.

VL is the 4th language that your favorite multipurpose toolkit supports. Besides using the editors for vvvv, hlsl and c# you now have the option to create nodes using VL. Where until now you used dynamic c# plugins you can now often stay in the visual world and conveniently patch quite complex things. Here are the top usecases we identified for which we recommend VL now:

* patch your own datatypes
* handle dynamic numbers of objects (not only primitives) in spreads
* patch more complex logic
* loop over the slices of a spread in one frame (if the vvvv spectral nodes are not enough)
* create a more complex node without thinking about how it will be spreadable
* patch with delegates. dele-what? yep, check it out!
* patch stuff running asynchronously (still experimental)

## SDK

We're aware that many of you are specifically waiting for a way to create/import your own nodes for VL. We were hoping to have that ready for this release but at this point are not entirely happy yet with the process and want to give it one more round of fine-tuning before releasing it to the public. So please bear with us on this.

## Pricing

A feature-explosion like this should clearly be reflected in the pricing, right? Absolutely! But here is the deal: We first want to get you hooked. So as long as you're using VL inside vvvv we'll not be charging anything extra thus practically increasing the cost-benefit ratio quite a bit. You're welcome. When later VL will be available as a standalone version we'll come up with something reasonable...

## Next steps

Now let's give us a break and you the time to dive into all those new gems. Video tutorials are quasi in the making..documentation will grow as you ask for it. We're looking forward to your feedback and will further outline our next steps at the beginning of 2017.

So please, use VL now! For research, prototyping and production. It works, it is fast, it is tremendous. EVERYONE SAYS SO!!!1!! And in the unlikely event of still encountering problems with it we're looking forward to help you out in the [forum](https://discourse.vvvv.org/)!

## Getting started with VL

* demos: see \girlpower\VL
* learn: [VL quick reference](https://betadocs.vvvv.org/devvvveloping/dynamic-vl-plugin-reference.html)
* docs: [VL for vvvv users](https://vvvv.gitbooks.io/the-gray-book/content/en/VL_for_vvvv_users/VL_for_vvvv_users.html)

To flattr or not to flattr:
[/downloads|vvvv](flattr)

Good Patch!
And a happy new year!

---

P.S. if you have a vl patch that has new red nodes with this release make sure to add the new VL.DevLib dependency!