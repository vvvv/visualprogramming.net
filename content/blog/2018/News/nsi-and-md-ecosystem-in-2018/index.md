---
categories: "News"
author: "microdee"
date: "2018-05-04"
title: "₪i and md.ecosystem in 2018"
slug: "₪i-and-md.ecosystem-in-2018"
description: ""
imported: "true"
---


Or microdee's keynode aka long article about what's going on aka "oh no microdee's hyping his own stuff again".

![title](https://i.imgur.com/JyLzvfl.png)

Hi all!
Since September in my freetime I've been working on major refactoring of my packs to be more accessible and more organized and also writing more documentation, help patches and more understandable girlpower while also improving on features and fixing bugs. This all started with unifying semantics and pipelines in mp.fxh and mp.dx shaders but because of my slight bipolarity I've finished a lot of things since then except that. So there are still some inconsistencies on that side and the fate/direction of the rendering part is still hanging up in the air (that PBRBase thing and the Disney shading). I'm a single person on this so it'll take some time.

Meanwhile I've started to make my C# backends 99% independent from VVVV*, started to properly build them on Appveyor and properly publish them automatically to Nuget. The first materialized result of this is md.stdl (microdee's standard library) which is a collection of some common functionalities used often during development (sort of like the VVVV.Utils library, just on my own). More and more features will be ported from mp.essentials nodes to md.stdl. An exciting side-effect of this that md.stdl can be inherently used in VL by its magnificent Nuget support (though I didn't have the arriving to test it properly yet).
* currently md.stdl still depends on VVVV.Utils with Mouse and Keyboard devices. All it does though that it provides some classes to act like the Desktop Mouse and Keyboard nodes. Also provides interoperability extension methods for VMath vectors and System.Numerics vectors.

Another library, which was separate, then merged into mp.essentials, then grown out of mp.essentials again but this time properly and has its own Nuget now: is mp.pddn (mcropack pin dictionary dynamic node) which is an extension library for creating VVVV nodes with highly dynamic pin management. One of the direct results of this were the introduction of the truly generic VVVV node pattern in mp.essentials and Notuiv (see below) where you can still be type-safe but can manage any type with a single node without the need for VL or C# code.

![title](https://i.imgur.com/Ao30di1.png) 

Meanwhile I've joined the forces of MESO and priorities slightly shifted for me from graphics to re-usable subsystems (of course while directly developing projects). The first bigger realization of this shift became:

#  ₪i or Notui by MESO
{{< vimeo "268043752/d05f02a82a" >}}

VVVV is used to create large scale user interfaces a lot. Anything requires a screen and user interaction VVVV scales in size like no other package does from lot's of tiny screens to huge LED walls the size of a building (or your mom), VVVV can handle that with breeze. Except any professional will know that developing UI logic which people are taking as granted from browsers or smartphones are painful to develop in VVVV's dataflow environment. The shear presence of overlapping UI elements can make your brain explode in pure VVVV. In the past I had several attempts to solve it and they all failed for various reasons (khmvobjectskhm khmvoogkhm). Those shalt be forgotteth and shalt be never spoketh thereof. Learning from those mistakes, and still repeatedly fighting with the above mentioned incomprehensible logic cobwebs suffering from deadline induced chaos and doom, I came up with Notui.

Notui is a UI behavior package written entirely in C# providing a robust skeleton for your UI elements. The intention here was to keep VVVV's vast drawing capabilities while eliminating the above mentioned horror with logic. The result is a mostly dataflow friendly system which separates structure, stateful-logic and rendering. Note also that Notui is a C# library first and Notuiv is its VVVV implementation. This again means all the features of Notui theoretically can be accessed in VL and simply fetched from Nuget.org. This also means that you can patch your own element types and behavior delegates in VL, but I'm ahead of myself.

I hear you saying "Yeah, yeah tl;dr, big words, etcetra etcetra, What are its features?"
For a quick demonstration this can be your typical Notuiv app structure, greatly simplified though (one of the girlpower examples):

![title](https://i.imgur.com/kET0vAp.png)

Which yields this result:

![title](https://media.giphy.com/media/AicKsuWDSdUapo8cl0/giphy.gif) 

Expand that patch to see how simple it is to set up this 2 draggable windows with stateful content and animated declarative transitions patched 100% in VVVV with Notuiv:

![title](https://i.imgur.com/F1dUOyF.png)

Read the complete list of features and download on the contrib page: {{< contribution "Notuiv" >}}
Now at MESO we decided to release Notui and Notuiv as BSD 3-Clause open-source libraries. Which also allows you to use it in your own commercial project without any hassle or royalty whatsoever. So grab the sources here:

https://github.com/meso-unimpressed/Notui
https://github.com/meso-unimpressed/Notuiv

###  An elephant in the room: "But have you heard of CraftLie?"
CraftLie is super great and tonfilm even created pure C# VL.UI.CraftLie https://github.com/tebjan/VL.UI.CraftLie which at first glance does very similar things as Notui. Unfortunately though the scope is quite different. But nothing stops you to combine CraftLie and its UI thing, VL and Notui to have a powerful system, if you install Notui into VL through Nuget, or just reference Notui.dll from vvvv/packs/Notuiv/nodes/plugins folder. This is kind of untested area yet, so please give me feedback how it went.

**Side note:** Now for those who want to use Notui outside of VVVV don't get fooled or intimidated by the lines of code count of Notuiv implementation, that amount of boilerplate code is not a Notui specific phenomena . It's an inherent structural issue with how VVVV works. It's a general rule of thumb that if you want to implement a large library solving a big set of problems in a very modular way with lot's of information on their building blocks, VVVV's plugin interfaces requires thousands if not ten-thousands of lines boilerplate to deal with all the conditions a plugin can have. This is 100% solved in VL though.
**Disclaimer on the logo:** Notui have nothing to do with Israel's new shequel. That symbol just looks great and resembles an 'n' and a 'u' interlocked, throw in an 'i' and you'll get Notui \o/. But if anybody feels offended by this for any serious reason (like if an Israeli person really feel like their national currency symbol is being abused by random UI libraries for simply aesthetic reasons which has nothing to do with it, or with Israel) I'll immediately change it.

#  A bit more on md.ecosystem
Almost forgot you can get mp.essentials and mp.dx from here: {{< contribution "md.ecosystem" >}}
or through Github releases:
https://github.com/microdee/mp.essentials/releases
https://github.com/microdee/mp.dx/releases

There are couple of smaller important thoughts as well:

**First:** FBX4V will be open-sourced soon and will become part of mp.dx, and maybe I'll find some time to fix some crucial issues with it during the process.

**Second:** the refactoring also ended up in a more modern way of deploying my packs. (like how Velcrome's messages and Vux's DX11 packs are doing for ages. All md.ecosystem packs are still available from vpm, but their binaries are finally not stored directly in their repo, and they are available from Github releases for those who are not happy with vpm. vpm itself will be revisited soon as I need to sort out couple of things to fit more into automatic deployment schemes. Also finally because of Appveyor they're all generating version.info files now and also they have About nodes with detailed versioning info too.

**2.5th:** During this transition I'm also creating nice and tidy help patches with lot's of reading materials where it's suitable and the node has a decently isolated function. So hopefully it will result in less confused patchers.

**Third:** A reminder that all of my stuffs are open-source on Github, one can easily fork it and send me pull-requests. Yet I can count on a single hand the number of occurrences this happened. If there's no active project with a deadline MESO embraces open source development which can help faster realization of future projects (the reason you have Notui now) so funding wise I'm ok, BUT I'm a single guy maintaining this entire thing, so if you're bored and can do vvvv patching you'll make me the happiest guy on earth if you send me pull requests to my repos fixing minor issues I haven't noticed or improving on my crappy code/patch.

Thank you for reading this through, I hope my packs provide you as much productivity as they do for me. If you have any questions I usually answer them.

Cheers and happy patching!

![title](https://media.giphy.com/media/1eExH5lNIClZPq9fY8/giphy.gif) 