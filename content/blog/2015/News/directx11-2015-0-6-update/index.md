---
categories: "News"
author: "vux"
date: "2015-12-29"
title: "Directx11 2015, 0.6 update"
slug: "directx11-2015-0.6-update"
description: ""
imported: "true"
---


Been a little while before update, but here we are.

So now changelog is hosted in github, so you can see all updates here:
https://github.com/mrvux/dx11-vvvv/blob/master/CHANGELOG.md

Of course let's see some of the little highlights (apart from the usual bug fixes and perf improvements):
* For people who build from git, build system has been improved and properly copies all dependencies, so it's much easier to have a fully functional Zip from checkout (msbuild deploy.targets, and you're done). Since text still uses some mixed mode c++ that's the only last annoying one, but that will change soon.
* Versioning has been updated not to be tied with 4v releases, since both are never out at the same time it doesn't make sense anyway. Minimum build is in the contribution page (Please note for this build it still works on 33.7).
* Issue with standard renderer performance has been fixed, this was a simple change which should have had a bug fix release on it's own, but now it is here finally.
* Text now has the right enumeration, courtesy of SharpDX (window font names and DirectWrite are different, so you should not revert to default). Also you should check Advanced TextLayout node (just saying...).
* SharpDX is now also used to compile shaders, which means it will automatically pick up latest version of D3DCompiler available on your OS.
* Decent amount of new Layer nodes (Type "layer order" for an overview), offers lot of new possibilities to control rendering priority.


Also, for people writing plugins, please read:
https://github.com/mrvux/dx11-vvvv/issues/229

Since next builds will have interface breaking change. 
This is not ideal, but next builds plans is to allow better multi device handling and performance improvements, so this is a necessary step. 
Please note it's not a difficult change to do but will require a recompile.

And as usual , please report issues here (and not in the forums), small patch to reproduce is also appreciated ;)

https://github.com/mrvux/dx11-vvvv/issues

Small update (30/12/2015):
Since a small issue was preventing startup on windows 7, small 0.6.1 bug fix release has been out), please check in downloads (old 0.6 is removed to avoid getting wrong download). 

Download here:
https://legacy.vvvv.org/contribution/directx11-nodes-alpha


Merry christmas,
vux