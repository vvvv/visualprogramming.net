---
draft: false
date: "2022-04-01"
title: "vvvv gamma 5.0 release"
description: Release notes
categories: "vvvv gamma Releases"
author: joreg
thumb: filters.jpg
---

![vvvv gamma 5.0 release](filters.jpg "")

Tadaa!

We're happy to introdce **vvvv gamma 5.0**, the best vvvv ever (so far)!.

{{< box >}}
__[Download vvvv gamma 5.0](http://visualprogramming.net/#Download|)__
[Full Change Log](https://thegraybook.vvvv.org/changelog/5.x.html)

[Get started](https://thegraybook.vvvv.org/reference/getting-started/overview.html)  
[Buy a license](https://store.vvvv.org)

{{< /box >}}

Let's dive right into what you get with this release:

## Improved startup time
We were not sure how exactly to put this, but this testimonial from our chat sounds quite technically accurate:

![](holycow.png)

How come you ask? Well, as you know, one of the reasons vvvv is running so fast, is that it compiles every change you make on-the-fly. For this release we looked very closely again at the compiler and made sure it always only really compiles what it needs to. 

So far, on every startup vvvv compiled all of its own libraries and those you had referenced in addition, even though they have not changed. Now the default for vvvv core libraries and even those you reference is that they are compiled once, and from then on their precompiled artifacts are loaded, thus saving a lot of precious CPU cycles. But also, like this vvvv is using much less memory, leaving more RAM for your actual projects!

## Improved Extensibility

One of vvvv's outstanding features has always been its extensibilty. With our recent [open-sourcing of all vvvv libraries](https://visualprogramming.net/blog/2023/introducing-vl.standardlibs/) we took this a step further. 

And now this release simplifies extending vvvv with code even more by providing two new wizards for adding C# and shader code:

**images**

At the click of a button those generate working templates which you simply have to modify to your needs. You can edit code in your preferred editor and every time you save your changes, your code is immediately compiled and included in your running patch. When using Visual Studio 2022 as your editor you can even set break-points and debug your code line by line.

## Cross-platform export

vvvv can now export executables not only for Windows, but also other platforms, see the updated export dialog:

**image**

Arguably, at this point this is still rather limited as for other platforms, we cannot export GUI applications but only console apps. But it is a start. What we’ve tested to work, is e.g. export to a Raspberry Pi running Linux. 

## Graphics Library improvements

### Effortless creation of user interfaces

For 2d graphics, we've added support for the popular [Dear ImGui](https://github.com/ocornut/imgui) library which offers the quickest way yet to set up user interfaces in vvvv. With just a few clicks you can now create elaborate UI's to control your patches. 

It is certainly not the final way to create UI's for all usecases, but it should cover a wide range still. Read what the original creators of ImGUI have to say about it:

*Dear ImGui is designed to enable fast iterations and to empower programmers to create content creation tools and visualization / debug tools (as opposed to UI for the average end-user). It favors simplicity and productivity toward this goal and lacks certain features commonly found in more high-level libraries.* From the [Dear ImGui pitch](https://github.com/ocornut/imgui#the-pitch).

Have a look at the helpbrowser for tons of examples to get you started.

### Improved ImagePlayer performance

Ever felt the ImagePlayer options in vvvv beta were superior? Fret no more, we found the issue and ImagePlayers in vvvv gamma are now reaching your HDD's read rates. 

### Support for OpenXR
![OpenXR](OpenXR_170px_Feb17.png)

[OpenXR](https://www.khronos.org/OpenXR/) is an open standard that provides access to Augmented Reality (AR) and Virtual Reality (VR) — collectively known as XR — platforms and devices. With this release we provide initial support for it, which includes hand-tracking on devices that support this.

Many more features can now be added, one by one, depending on your requirements. Here is a full list of possible [OpenXR Extensions](https://www.khronos.org/registry/OpenXR/specs/1.0/html/xrspec.html#extension-appendices-list). So if you have a commercial project requiring a specific extension, don’t hesitate to [get in touch](mailto:devvvvs@vvvv.org).

### Support for latest VL.Fuse previews
[FUSE](https://www.thefuselab.io) is an independently developed library that allows you to use your GPU for things that typically require writing shaders. It gives you access to procedural noise, signed distance field rendering, customizable particle systems, vector fields, fluid simulations and more. Created by [dottore](https://vvvv.org/users/dottore), [everyoneishappy](https://vvvv.org/users/everyoneishappy) and [texone](https://vvvv.org/users/texone) it is currently on its way to its second major release, which will make use of latest features in this realease. Curious to test? Check the preview builds of [VL.Fuse 1.0.0](https://www.nuget.org/packages/VL.Fuse).

### Update to latest version of Stride
By updating to the [latest version of Stride](https://www.stride3d.net/blog/release-stride-4-1/) you now have access to all the latest features and fixes that come with it. Not all of Stride's features are wrapped for convenient use in vvvv, but nothing stops anyone from using them.

### Kopffarben PR

## And some more goodies

### Support for latest VL.Kairos previews
[Kairos](https://github.com/KairosResearchLab/Kairos) is a complete framework for data control and composition. It comes with a timeline and compositor, support for a large variety of datatypes, custom datatypes and advanced interpolation, blending and compositing techniques. 

![](kairos.png)

Kairos makes use of latest features in this release and you can test-drive it by checking the preview builds of [VL.Kairos 1.0.0](https://www.nuget.org/packages/VL.Kairos/). It is independently created and thus counts on your support for further development via the [Kairos Research Lab OpenCollective](https://opencollective.com/kairos-research-lab). 

### Channels
You'll most likely love these. They are the simplest yet way for controlling values in a patch from different spots. You'll first encounter them when working with ImGui widgets where they e.g. allow you to easily change a value either via an on-screen UI widget or from an IOBox in the patch. But you'll soon notice that they are a general game-changer for bi-directional data-binding!

### Advanced build configuration
Apart from the new options you now have in the export dialog, you can also completely fine-tune your build process and e.g. add post-build tasks. For details, see: [Advanced build configuration](https://thegraybook.vvvv.org/reference/hde/exporting.html#advanced-build-configuration).

### .NET6 
![](dotnet-logo.png)

Under the hood vvvv gamma was sitting on .NET472, by now a rather old version of [.NET](https://en.wikipedia.org/wiki/.NET). With this release we're upgrading to .NET6. If this means anything to you, you may want to read about [What's new in .NET6](https://docs.microsoft.com/en-us/dotnet/core/whats-new/dotnet-6).

In more human readable terms, for us this means:
- Generally improved performance
- We can now use newest .NET NuGets of libraries
- When [writing your own nodes](https://thegraybook.vvvv.org/reference/extending/writing-nodes.html) for vvvv you can now use [C#10 features](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-10)

---

One last note: You saw that right, we switched to a more sane versioning model. No more random "year" in the number. From now on we're counting straight up from 5.0!

## Licensing
The release of a new version is always a good moment to make sure you still have a valid license for commercial use. To check, log into your account on vvvv.org and then view [your vvvv gamma licenses](https://store.vvvv.org/licenses).

In case, you simply [buy a license](https://store.vvvv.org/) the moment you start working on a commercial project. Don't forget that we also have monthly options!

---

What next? Expect the occasional 5.x bug-fix release while we're starting work on the 6 branch as per the updated [roadmap](https://thegraybook.vvvv.org/roadmap/planned.html).

Good patch!