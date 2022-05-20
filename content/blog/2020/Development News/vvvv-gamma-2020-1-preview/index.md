---
categories: "Development News"
author: "joreg"
date: "2020-03-24"
title: "vvvv gamma 2020.1 preview"
slug: "vvvv-gamma-2020.1-preview"
description: ""
imported: "true"
---


{{< box >}}
Note:
Update: The latest preview version is here: **[http://visualprogramming.net](http://visualprogramming.net)**
{{< /box >}}

And here we go!

Only about a year after the first public preview of vvvv gamma we hereby announce what will be the final round of previews:
The **vvvv gamma 2020.1** series.

We have a code-freeze. This is essentially what will be in the final release. We'll only be adding to documentation and fix showstopper bugs, should they come up. Of course we're aware of many more issues but we hope at this point to have squashed all the biggest buggers and are confident to release a first stable version within the next weeks.

![](vvvv-2020.1-2.png)
*Her majesty... at your service.*

## What's new compared to the vvvv beta series
<!--{SPLIT()}-->
### General
- Trivial installation via an installer
- The overall performance is much improved
- Projects can be exported as executables
- All your work is automatically backuped
- A help browser: press F1 without any node selected
- Helppatches opening when pressing F1 with a node selected
- You have quick access to your recent sketches
- By default projects are now handled in one file
- There are central settings per user, overridable per project
- You can pause and step your patches frame by frame
- Extensibility: Write plain C# to extend vvvv with custom nodes
- Simply use almost any .NET library available e.g. on nuget.org
- Proper scope and dependency handling
- Structured documentation for your patches. Add summary, remarks, help to elements
- Being close to C# allows for VL help to be found on msdn/stackoverflow

<!--~~~-->
### Patching
- Patches are now zoomable
- You can use frames to structure your patches visually
- UI runs in its own thread
- Tooltips show help and errors
- IOBoxes allow for much faster configuration
- You can doubleclick a link to insert a node or finish a link with a doubleclick to create a node
- Patch your own pingroups
- The color theme is now customizable and defaults to dark
<!--{SPLIT}-->

<!--{SPLIT()}-->
### Language
Besides staying true to its nature of being a an easy to use and quick prototyping environment, vvvv is also a proper programming language with modern features, combining concepts of dataflow and object oriented programming:

- Define your own datatypes (Classes and Records)
- Composed Datatypes (Spread of Spread,..)
- No more binsizes needed!1!!
- Loops to iterate within one frame
- Recursive patches
- Generics
- Delegates
- Reactive programming
- Async data processing (multi-threading)
- Easy caching of expensive operations

<!--~~~-->
### Node Library
While for now the number of libraries we ship is limited, the fact that you can essentially use any .NET libary directly mitigates this problem at least a bit. Besides there is already quite some user contributions available in the [wip forum](https://discourse.vvvv.org/c/wip) and here is what we ship:
- A thorough core library for all your basic needs
- State of the art 2d drawing with VL.Skia
- Effortless computervision via [VL.OpenCV](/blog/2019/vl.opencv-release-candidate)
- Support for Midi, OSC, ArtNet, Serial,... 

<!--{SPLIT}-->

## Learning
The integrated help-browser comes with a lot of examples and howto-patches and a growing number of video tutorials is [available on youtube](https://www.youtube.com/channel/UCu-xqv-TLwv6L0An7MJJA5A/playlists?view=50&sort=dd&shelf_id=4).

## Pricing
We've announced the [pricing model of vvvv gamma](/blog/2019/vvvv-gamma-licensing-2) in a separate post. Until further notice, the previews of vvvv gamma are free of charge but due to its preview-nature we don't recommend using it in commercial scenarios yet.  

## Download
Here you go: **[vvvv gamma 2020.1 preview](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:31830/artifacts/content/vvvv_gamma_2020.1.0-0040-ge815cb7f36_setup.exe) 0040**



## Changelog:
Upcoming

**0040** 27 03 20

* Re-enabled very rough and highly experimental support for attributes in roslyn backend - Elementa inspector patch working again
* Fixed a crash related to recursive type rendering

**0032** 24 03 20
* Fixed null pointer when opening patches making use of pin exposure
* Fixed a few regressions introduced with one commit in previous version which caused issues like https://discourse.vvvv.org/t/2020-1-elementa-bang-broken/18354/3
* Fixed Args node outputs
* Added base64, url and html encoding nodes
* Added more HowTos

Compared to the [2019.2 series](/blog/2020/vvvv-gamma-2019.2-preview)
* Args node now handles options without parameters
* Added a bunch of new simple howto patches
* Added clock to display call frequency of runtime value in tooltip
* Added ToImage <[IReadOnlyList>
* Removed culture specific resource assemblies and disabled pdb files in release build
* Fixed a sync issue in UI when disabling manual signature and fixed pin synchronization when using "Connect to signature"
* Visualize model synchronization step in progress bar
* Using Memory<byte> instead of unsafe IntPtr in IImageData 
* Fixed deserialization of collection of characters 
* Fixed assignments to pads sometimes having a side-effect on other pads with that same name
---

Ideally this will be the last preview, realistically we'll have to release some more. So please check back often and report your findings in the chat, forum or a comment below!

Yours truely,
devvvvs.