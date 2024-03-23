---
date: "2024-04-20"
title: "vvvv gamma 6.0 release"
description: Release notes
categories: "vvvv gamma Releases"
author: joreg
thumb: vvvv6.png
---

![vvvv gamma 6.0 release](vvvv6.png "")
 
Here is to introduce **vvvv gamma 6.0**, quite a big drop as you'll understand when you read to the end...

{{< box >}}
__[Download vvvv gamma 6.0](http://visualprogramming.net/#Download)__  
[Full Change Log](https://thegraybook.vvvv.org/changelog/6.x.html)

[Get started](https://thegraybook.vvvv.org/reference/getting-started/overview.html)  
[Buy a license](https://store.vvvv.org)
{{< /box >}}

Let's dive right into what you get with this update:

## Inspector
Finally here comes the long awaited Inspector. Open it via Ctrl+I to get an overview of all the pins of a selected node. Inputs can be manipulated and the visibility of pins in the patch can be configured.

Currently the Inspector only works on nodes and regions, but not other elements, like Pads and IOBoxes. We had to keep some things for future releases also...

Another caveat: Interaction in the Inspector's editors is different to the editors in IOBoxes. Most notably, while on a number IOBox you change its value via right-down scroll up/down, in the Inspector you use left-down scroll left/right. We're not happy with this and are still exploring options to unify this. One option is using the new IOBox settings (see below).

**Inspektor gray book**

## Debug Views
Boring but invaluable when working on large projects. The 3 new debug views help you in different ways:

- **Build Result:** Get an overview of where in your patches you have build errors. Go fix those first.
- **App Health:** Here you'll see you apps see runtime errors (like exceptions) and warnings
- **Log:** A structured log collecting all messages sent by your own app but also any libraries you have in use

Read all about the above views in the [Debugging](https://thegraybook.vvvv.org/reference/hde/debugging.html) section of the gray book. 

## Node Browser
Not new, but with quite some subtle improvements: 

There is now a top entry "New..." that shows you all the options for creating code elements that take a name. And you can now create all those code elements either way: 
* Choose a code element first and then type a name
* Or type a name first and then choose a code element

When opening the Node Browser while making a link (or inserting a node into a link via doubleclick), you'll now see two additional entries:

* Connectable Nodes: Here you'll see most relevant connectable nodes 
* By Type: Here you'll see nodes that connect to the type of the link at hand. The direction of the link decides whether sub- or super-types are also shown.
   
## New Settings

At just the click of a single button (the Hamburger icon in the vvvv editors top-right corner) you can reach any of the global settings to customize your vvvvexperience. This release adds the following settings:

### Patch
- **Press SPACE to pan:** Enables panning with a left mouse drag while the SPACE bar is pressed.
- **IOBox editable with left mouse button:** This requires to move IOBoxes by grabbing their labels rather than their own body!
- **IOBox defaults to horizontal drag:** **You overwrite this on the IOBox itself.**??

### Links
- **Dragging on connector starts link:** Start links from pins, pads and control points on drag, rather than on mouse up. NOTE: This requires to move pads by grabbing their labels rather than their own body!
- **Dropping a link creates element:** OFF: When starting a link with a drag gesture, you may release the mouse button any time without any consequence. 
ON: Releasing the mouse button opens the node browser or creates an element right away, if modifier keys are pressed.
- **Enable autolink segmentation:** Links attempt to avoid regions and nodes they are connected to.

### Node Browser
- **Enable Connectable Nodes mode:** Show only connectable nodes when opening the NodeBrowser with a link at hand

### Inspector
- **Float Precision:** Number of digits to display after the decimal separator
- **Collapsed on Open:** Pin values are collapsed by default

### Miscellaneous
- **Log Buffer length:** Log messages exceeding this number will cause older messages to be dropped. Increasing this number may degrade performance of the Log window.
- **HDE Font Size:** Allows to change the font size for HDE Windows, like the Inspector

## HDE windows

As you may have noticed, the different windows of our hybrid development environment (HDE) feel slightly detached. This has historical reasons and is not meant to be like that. Moving forward we believe we finally have an idea of how to unify them and starting with this release we have laid some ground work:

- Keyboard shortcuts are now unified across the main patch editor, extension windows and render windows
- On render windows we can opt-out of those HDE shortcuts using the "Enable Keyboard Shortcuts" input
- Render windows (Skia and Stride) now have an optional input "Commands". Commands can be defined using nodes available in the VL.Core.Commands package and allow you to define custom keyboar shortcuts that override shortcuts predefined on renderers
- HDE windows can now be made topmost by pressing Ctrl + T (not working on renderers yet)
- There is a setting called "HDE Font Size" (not working on all windows yet)
  
## VL features


### Send and Receive
The S and R nodes from the `Primitives` category were renamed to Send (Global) and Receive (Global) and can now be found in the `Control` category. 

This release introduces an additional Send (Local) region and Receive (Local) node that in combination allow you to keep better control of data you send around in your patches. Check the following patch in the Help Browser:

- HowTo Send and Receive Values
  
---  
- .net8
- Direct import of types & nodes from C# 

Direct import of types & nodes from C#

    It's now possible to write types & nodes directly from within C# with the new ImportAsIs assembly attribute. When set, all the public classes / structs / enums will be available in VL as if they'd have been defined there directly. No type forwarding required.
    It's further possible to write process nodes directly in C# by attaching the new ProcessNode on a class. Again, no further work has to be done on the VL side of thins.
    This way (if desired) the C# code can be become the single source of truth for a library project.

### .NET8 
![.NET](dotnet-logo.png)

Under the hood, vvvv gamma was sitting on .NET472, by now a rather old version of [.NET](https://en.wikipedia.org/wiki/.NET). With this release, we're upgrading to .NET6. If this means anything to you, you may want to read about [What's new in .NET6](https://docs.microsoft.com/en-us/dotnet/core/whats-new/dotnet-6).

In more human-readable terms, for us this means:
- Generally improved performance
- We can now use newest .NET NuGets of libraries
- When [writing your own nodes](https://thegraybook.vvvv.org/reference/extending/writing-nodes.html) for vvvv you can now use [C#10 features](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-10)

## New Libraries
Our fully [opensource VL.StandardLibs](https://github.com/vvvv/VL.StandardLibs) has the following new features that are conveniently shipping with vvvv:

- Logging is now a breeze. Not only to the new Log Window mention above, but also to any [thirdparty logging provider](https://learn.microsoft.com/en-us/dotnet/core/extensions/logging-providers#third-party-logging-providers) you prefer. Browse for "logging" in the Helpbrowser to learn more
- No need anymore to reinvent the wheel for configuring your apps. With full support for [Configuration](https://learn.microsoft.com/en-us/dotnet/core/extensions/configuration) you can make use of all the different workflows available. For a start see "HowTo Use Configuration" in the Helpbrowser
- Our new favorite way for sharing data among PCs is using [Redis](https://redis.io/) via **VL.IO.Redis**. Basically a high-performance key-value store you can access from many PCs
- The above also made us add support for [MessagePack](https://msgpack.org/) serialization via **VL.Serialization.MessagePack**, which we use as a default with Redis. And on the side this pack also comes with handy JSON Serializer/Deserializer!
- Support for the [OSCQuery protocol](https://github.com/Vidvox/OSCQueryProposal) via **VL.IO.OSCQuery**. It allows you to quickly expose parameters in your patch to other softwares supporting the protocol. Exactly, in a way similar to [VL.IO.RCP](https://www.nuget.org/packages/VL.IO.RCP)
- You have a complex scenario that can be heavily threaded to make use of all your 64 CPU cores? Have a look at [Dataflow](https://learn.microsoft.com/en-us/dotnet/standard/parallel-programming/dataflow-task-parallel-library) and then use it via  **VL.TPL.Dataflow**
- And finally a tiny new feature that was long overdue: A new Random (process) node with a Seed input!

But that's not all, here are a bunch of new libraries you can install as needed:

- [VL.ScalableDisplay](https://www.nuget.org/packages/VL.ScalableDisplay) adds support for automatic projector calibration by [Scalable Display Technologies](https://www.scalabledisplay.com/)
- [VL.Augmenta](https://www.nuget.org/packages/VL.Augmenta) adds support for people tracking by [Augmenta](https://augmenta.tech/)
- [VL.Devices.TheImagingSource](https://www.nuget.org/packages/VL.Devices.TheImagingSource) adds support for industrial cameras by [The Imaging Source](https://www.theimagingsource.com/)
- [VL.Devices.IDS](https://www.nuget.org/packages/VL.Devices.IDS) adds support for industrial cameras by [IDS Imaging](https://ids-imaging.com/)
- [VL.Devices.ZED](https://www.nuget.org/packages/VL.Devices.ZED/) adds support for stereo cameras by [StereoLabs](https://www.stereolabs.com/)   
- [VL.MediaPipe](https://www.nuget.org/packages/VL.MediaPipe) adds support for hand-, face- and pose-tracking, object-detection and image-segmentation from a live video stream via [Google's MediaPipe](https://mediapipe-studio.webapps.google.com)
  
## Updated Standard Libraries
Here is an overview of the changes to existing libraries shipping with vvvv, for this release:

- **VL.Stride**, vvvv's 3d rendering library has the following new features
  - We've updated to [Stride 4.2](https://www.stride3d.net/blog/announcing-stride-4-2-in-dotnet-8/)
  - The PostFX pipeline is now completely flexible in that you're no longer limited to the pre-existing PostFX but you can completely patch the whole pipeline with your own shaders
  - TextureFX have moved to a separate pack VL.Stride.TextureFX
  - compute() inputs on texturefx
  - imgui PR
- **VL.CEF**, allowing to render websites in both Skia and Stride was updated to using CEF 103.0.0
- **VL.Skia**
  - commandlist on renderers to have custom shortcuts
- **VL.ImGui**
- **VL.Video** breaking change
- **VL.Audio**: new extension
- **VL.IO.OSC**: binding
- **VL.IO.TUIO** now supports the 2.5D and 3D profiles

- webserver
- tcp
- ply
- kinect2
- artnet
- https://www.nuget.org/packages/VL.IO.RCP

## Community efforts
With the big focus on [extendability](https://thegraybook.vvvv.org/reference/extending/overview.html) we have with vvvv, it is possible for everyone to contribute to its ecosystem of libraries. And you do!
- launcher
- fuse, ... 
- kairos - mention opencollectives
- vl.mapper
- vl.addons
- lasals
- bjoerns
- natan
- gamingrobot
- sebl
- gegenlicht
- mhusinsky
- domj
- tobyk
- cnisidis
- sunep
- torinos-yt
- kopffarben
- wirmachenbunt
- wmc
- phlegma
- leavittx
- texone
- chkworks

## What Next?

In case you wonder why the above doesn't mention "global channels" and "bindings" as huge new features: True, one of the things we've been working on recently are "global channels" which allow you to bind data from external sources (Redis, OSC, RCP,...) quickly to parameters in your patch. 

While they are already shipping with this release, we're still hiding all related nodes behind the "experimental" aspect, since we're not happy with all the details of this whole topic yet. This means that we still expect breaking changes going forward and don't have documentation yet other than some helppatches in the Help Browser. More still to come...

Apart from regular 6.x bug-fix releases, we'll also add a few more features in the 6.x branch. Consult our [living roadmap](https://thegraybook.vvvv.org/roadmap/planned.html) for details.

---

## Licensing
The release of a new version is always a good moment to make sure you still have a valid license for commercial use. To check, log into your account on vvvv.org and then view [your vvvv gamma licenses](https://store.vvvv.org/licenses).

In case, you simply [buy a license](https://store.vvvv.org/) the moment you start working on a commercial project. Don't forget that we also have monthly options!

---


We hope this release suits you well and would love to hear your thoughts on it in the comments. 

Good patch,
your devvvvs!
