---
categories: "Development News"
author: "gregsn"
date: "2018-08-24"
title: "Beta37 Release Candidate"
slug: "beta37-release-candidate"
description: ""
imported: "true"
thumb: "gw3IWyGkC0rsazTi.gif"
---


![](gw3IWyGkC0rsazTi.gif)

hi there,

beta37 is done - as far as we know. Now, please help us to find out! 

Try the release candidate - link at the bottom - by opening the project you're currently working on and see if it opens timely, patching is responsive and everything works correctly. If not, please let us know in the [forum](https://discourse.vvvv.org/) using the *alpha* tag. 

## Release Highlights

### Cleanup and cleanup tools

This one can be understood as a late spring cleaning.

To get the desired appearance in the node browser we at times needed to resort, rename and polish nodes and types without changing much in terms of functionality. There were other examples though where we refined some major bits in the basic node set - e.g. [file IO](/blog/2018/vl-improved-file-io) and [serialization nodes](/blog/2018/vl-serialization) got a complete rework and just got so much easier to use. And we made sure that the core library feels more explorable just by making basic nodes more visible than others. [*Advanced*, *experimental *or *obsolete*](/blog/2018/vl-corelib-cleanup) nodes now don't hide in different packages but can be opted into the list of nodes, while browsing the library. Within that process, we also polished the node browser quite a bit.

But this release also comes with features for **you** to clean up. [Frames](/blog/2018/vl-frame-your-patches) help to structure patches in a visual way, [groups, and categories](/blog/2018/vl-groups-and-categories) in a structural way. You even can tweak the visibility of your nodes in the node browser and by that distinguish rather advanced or still experimental nodes from the daily node set. Library developers will also love the feature to make certain helper nodes internal so that they are free to change or delete them at any time in the future.

### A lighter VL

Startup speed got improved. Also, there are less VL documents open making the navigation menu more meaningful. Let me not begin with the much lighter ".Net Packages" menu or the much lighter download size. Process nodes now opt for mutation which makes them lighter in terms of memory allocation. 

### Entry points and document management

Together these features allow this workflow:
 * Drop VL documents onto vvvv or VL to open them. They start running. 
 * To make them go away use the "close document feature Ctrl-F4" in the VL document menu.
**In essence, this allows to do example patches, tutorials or help patches** - an essential feature that will make future libraries so much easier to learn. To have a patch start on document load, create a non-generic process called "Root" in the document patch. So again from the end user perspective: no need to create a node in vvvv to see the patch running.

Ctrl-W now behaves like in an internet browser: It just closes the tab - closing the last tab closes the  VL window. Ctrl-W doesn't ask you to save the document though. Closing a tab doesn't close the document, it just closes the view onto the specific patch within the document.
If you now managed to hide the VL window use the "Show VL" command in the vvvv main menu to get back into VL.

### Debugging

Debugging should feel much more intuitive, as it now allows to inspect the exact state of the patches for the moment when something went wrong.

Some notes on the debugging settings:
 * RuntimePauseOnError: When turned on, allows to inspect nodes and pins above the pink node. You see the values for when the exception occurred. For end users, this feature typically is off. Library developers will likely switch this often depending on whether they're debugging or using their library. Reloading the settings now always should work. No need to restart when switching the setting.
 * RuntimeAutoJumpToError: if the auto panning gets in the way this is the setting to turn off.
You can switch the settings via Quad menu -> Settings -> Open in editor.

### Cache region

Actually we never really told you about how amazing the Cache region is. If you have any node that you want to perform better, ask yourself if it wouldn't be enough to only compute it when the input changes and then cache the computed results. The cache region allows expressing this easily. The cache region actually got added with beta36, but now the interplay with other constructs works better.

Loops for example now output their spreads in a way that the changed-detection of a downstream connected Changed node or Cache region only triggers if the slices actually changed from frame to frame.

Some of this stuff may for sure sound pretty special interest, but we have the feeling that these details matter in the end for having an expressive but playful language.

### Baby, don’t make me spell it out for you 

All in all this release makes VL easier to learn, use and develop for.

<!--{SPLIT()}-->
## VVVV

[HTMLTexture now for DX11 and more ](/blog/2018/htmltexture-now-for-dx11-and-more)
<!--~~~-->
## VL

- [VL: Corelib Cleanup](/blog/2018/vl-corelib-cleanup)
- [VL: Frame Your Patches](/blog/2018/vl-frame-your-patches)
- [VL: Groups and Categories](/blog/2018/vl-groups-and-categories)
- [VL: Serialization](/blog/2018/vl-serialization)
- [VL: Improved File IO ](/blog/2018/vl-improved-file-io)

<!--{SPLIT}-->

for an in-depth list of changes have a look at the [changelog](https://betadocs.vvvv.org/changelog/index.html).

### Download

<!--{SPLIT()}-->
Release Candidate 6
**64-bit**
[vvvv](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:28181/artifacts/content/vvvv_50alpha36.1_x64.zip)
[addons](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:28181/artifacts/content/addons_50alpha36.1_x64.zip)
**32-bit**
[vvvv](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:28182/artifacts/content/vvvv_50alpha36.1_x86.zip)
[addons](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:28182/artifacts/content/addons_50alpha36.1_x86.zip)
<!--~~~-->
{{< box >}}
Note:
Beware: Make sure you secure your data. Patches saved with an alpha might lead to not being able to open them with the former beta.
{{< /box >}}
<!--{SPLIT}-->
---
