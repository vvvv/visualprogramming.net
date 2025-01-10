---
categories: "Development News"
author: "joreg"
date: "2014-02-02"
title: "updates regarding Windows 8.1"
slug: "updates-regarding-windows-8.1"
description: ""
imported: "true"
---


helos,

recently we made a few (partly long requested) changes to vvvv that were finally necessary with the advent of win8.1 which caused some things to break. so here we are:

### dpiAware

vvvv is now fully dpiAware meaning you can finally use it at any OS zoom level which you can set via: 
 Control Panel\Appearance and Personalization\Display 
fonts will stay crisp and nodes/pins will sit at their right place. 

### touch

in order to be able to basically operate vvvv on windows tablets we introduced simple touch support. as you're used to from your favorite OS think: rightclick = double-tap (or windows standard: index-longpress) and middleclick = index-press + middle-tap. so in other words:
*Two finger pan = Canvas pan
*Press and Tab = Middle Mouse Click
*Two Finger Tab = Right Mouse Click (not shown in this video)
*Long Press = Right Mouse Click
*Long Press + Drag = Right Drag
that should do for a start..

{{< youtube "XKzdbxXC4gM" >}}

### /dx9ex

we've now turned on the /dx9ex switch by default on win>=vista. if for some reason you still need the old version you can now fallback by using /dx9 as a commandline parameter. 

the only reason i can think of that you'd want to switch back to /dx9 would be that you need to use {{< node "Text (EX9.Geometry)" >}} or {{< node "Flash (EX9)" >}} which are the only 2 nodes that will no longer work with dx9ex.

### .net4.5

also crack.exe is now checking for .net4.5 on win>=vista to make sure plugins possibly written in .net4.5 don't ruin everything. win8 comes with .net4.5 anyway so this will only be an issue for Vista and 7. and since the vvvv core does not yet make any use of .net4.5 features running on winXP (which cannot install .net4.5) is still possible, see also: [plugins-targeting-.net-4.5](/blog/2014/plugins-targeting-.net-4.5)
//legacy.vvvv.org/downloads/previews
---

for even more fixes also check the [Change Log](https://betadocs.vvvv.org/changelog/index.html).
and so before we make those all into a beta we'd like to ask everyone to take the latest [alpha](https://legacy.vvvv.org/downloads/previews) for a spin and report related issues in the [alpha forum](https://discourse.vvvv.org/). the simplest test would be to just open your current project and see if everything behaves as expected. this is your last chance to complain for before beta32.

have a good patch. 