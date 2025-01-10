---
date: "2023-04-19"
title: "vvvv gamma 5.0 release"
description: Release notes
categories: "vvvv gamma Releases"
author: joreg
thumb: vvvv5.png
---

![vvvv gamma 5.0 release](vvvv5.png "")
 
We're happy to introduce **vvvv gamma 5.0**, the best vvvv ever! (so far...)

{{< box >}}
__[Download vvvv gamma 5.2](http://visualprogramming.net/#Download)__  
[Full Change Log](https://thegraybook.vvvv.org/changelog/5.x.html)

[Get started](https://thegraybook.vvvv.org/reference/getting-started/overview.html)  
[Buy a license](https://store.vvvv.org)

__Bugfix releases__
* 5.1 on May 24, 2023
* 5.2 on June 9, 2023
{{< /box >}}

Let's dive right into what you get with this release:

## Improved startup time
We were not sure how exactly to put this, but this testimonial from our chat sounds quite technically accurate:

![Holy cow 5.0 loads fast](vvvv-holycow.png)

How come you ask? Well, as you know, one of the reasons vvvv is running so fast, is that it compiles every change you make on-the-fly. For this release, we looked very closely again at the compiler and made sure it always only really compiles what it needs to. 

So far, on every startup, vvvv compiled all of its own libraries and those you had referenced in addition, even though they have not changed. Now the default for vvvv core libraries and even the packages you reference is that they are compiled once, and from then on are read-only, thus saving a lot of precious CPU cycles. But also like this, vvvv is using much less memory, reducing the burden on the garbage collector and leaving more RAM for your actual projects!

Read all about read-only packages and how you can opt out of this default for individual packages in the new documentation on [Compilation](https://thegraybook.vvvv.org/reference/language/compilation.html).

## Improved Extensibility

One of vvvv's outstanding features has always been its extensibilty. With our recent [open-sourcing of all vvvv libraries](https://visualprogramming.net/blog/2023/introducing-vl.standardlibs/), we took this a step further. 

And now this release simplifies extending vvvv with code even more by providing a new wizward for adding C# nodes: 

![C# Wizard](vvvv-csharpwizard.png)
*Launch the wizard via `Quad` > `New` > `C# File`*

Choose a template, click "Create" and the C# file opens in your preferred editor where you can change it to your needs. Every time you save your changes, your code is immediately compiled and nodes in your running patch are being updated accordingly. When using Visual Studio 2022 as your editor, you can even set break-points and debug your code line by line. Read more about this in [Writing nodes](https://thegraybook.vvvv.org/reference/extending/writing-nodes.html).

A very similar improvement comes with the new shader wizard:

![Shader Wizard](vvvv-shaderwizard.png)
*Launch the wizard via `Quad` > `New` > `Shader`*

This greatly simplifies the process of working with shaders in your projects. For more details, please refer to the documentation on [Shaders](https://thegraybook.vvvv.org/reference/libraries/3d/shaders.html).

## Cross-platform export

vvvv can now export executables not only for Windows, but also other platforms, see the updated export dialog:

![The Export dialog](vvvv-exportdialog.png)

Arguably, at this point this is still rather limited as for other platforms we cannot export GUI applications but only console apps. But it is a start. What we’ve tested to work, is e.g. export to a Raspberry Pi running Linux. 

## Graphics Library improvements

### Effortless creation of user interfaces

We've added support for the popular [Dear ImGui](https://github.com/ocornut/imgui) library, which offers the quickest way yet to set up user interfaces in vvvv. With just a few clicks, you can now create elaborate UI's to control your patches. 

![Hello ImGui](vvvv-helloImGui.png)

This is certainly not the final way to create UI's for all use cases, but it should cover a wide range still. Read what the original creators of ImGUI have to say about it:

*Dear ImGui is designed to enable fast iterations and to empower programmers to create content creation tools and visualization / debug tools (as opposed to UI for the average end-user). It favors simplicity and productivity toward this goal and lacks certain features commonly found in more high-level libraries.* From the [Dear ImGui pitch](https://github.com/ocornut/imgui#the-pitch).

Have a look at the helpbrowser for tons of examples to get you started.

### Improved ImagePlayer performance

Ever felt the ImagePlayer options in vvvv beta were superior? Fret no more, we found the issue and the ImagePlayer nodes in vvvv gamma are now reaching your HDD's read rates. This allows you to achieve butter-smooth high-resolution (think 8k++, limited only by your HDD capabilities) playback, even [synchronized over multiple PCs](https://thegraybook.vvvv.org/reference/best-practice/video-synchronization.html).

### Support for OpenXR
![OpenXR](OpenXR_170px_Feb17.png)

[OpenXR](https://www.khronos.org/OpenXR/) is an open standard that provides access to Augmented Reality (AR) and Virtual Reality (VR) — collectively known as XR — platforms and devices. With this release, we provide initial support for it, which includes hand-tracking on devices that support this.

Many more features can now be added, one by one, depending on your requirements. Here is a full list of possible [OpenXR Extensions](https://www.khronos.org/registry/OpenXR/specs/1.0/html/xrspec.html#extension-appendices-list). So if you have a commercial project requiring a specific extension, don’t hesitate to [get in touch](mailto:devvvvs@vvvv.org).

### Support for latest VL.Fuse
[Fuse](https://www.thefuselab.io) is an independently developed library that allows you to use your GPU for things that typically require writing shaders. It gives you access to procedural noise, signed distance field rendering, customizable particle systems, vector fields, fluid simulations and more. 

![Fuse](vvvv-fuse.png)

Created by [dottore](https://legacy.vvvv.org/users/dottore), [everyoneishappy](https://legacy.vvvv.org/users/everyoneishappy) and [texone](https://legacy.vvvv.org/users/texone) it is currently on its way to its second major release, which makes extensive use of latest changes to our [Custom Regions API](https://thegraybook.vvvv.org/reference/extending/custom-regions.html) that allows anyone to develop their own regions! Curious to test? Check the preview builds of [VL.Fuse 1.0.0](https://www.nuget.org/packages/VL.Fuse), then consider supporting further development via [The Fuse Lab OpenCollective](https://opencollective.com/the-fuse-lab).

### Tesselation Stage
Thanks to a [code contribution by kopffarben](https://github.com/vvvv/VL.Stride/pull/589) you now have access to the Tesselation Stage in VL.Stride and the MaterialExtension node has a Tesselation feature. 

To get an idea about how this could be useful to you, check out the `HowTo Extend a Material with Custom Tessellation` help patch.

Let's tesselate!

### Update to latest version of Stride
We're now using [Stride 4.1](https://www.stride3d.net/blog/release-stride-4-1/) which gives you access to all the latest features and fixes that come with it. While not all of Stride's features are wrapped for convenient use in vvvv, nothing stops anyone from using them. With Stride and its VL wrapper being open-source you're not forced to wait for us but can always help yourself.

## And some more goodies

### Quick Data-binding using Channels
You'll most likely love Channels. They are the simplest way yet for controlling values in a patch from different spots. 

![Channels](vvvv-channels.png)

You'll first encounter them when working with ImGui widgets where they e.g. allow you to easily change a value either via an on-screen UI widget or from an IOBox in the patch through the very same Channel. But you'll soon notice that they are a general game-changer for bidirectional data-binding!

In the Helpbrowser look for the term "channels" to find a range of help patches introducing the topic. 

### Support for latest VL.Kairos
[Kairos](https://github.com/KairosResearchLab/Kairos) is a complete framework for data control and composition. It comes with a timeline and compositor, support for a large variety of datatypes, custom datatypes and advanced interpolation, blending and compositing techniques. 

![Kairos](vvvv-kairos.png)

Kairos makes use of a new feature in this release which allows instances of generic types using adaptive nodes to be created dynamically. Say what? Well, this is just another of those things we don't have to understand to benefit from it. 

Test-drive Kairos by checking the preview builds of [VL.Kairos 1.0.0](https://www.nuget.org/packages/VL.Kairos/). It is independently created and thus counts on your support for further development via the [Kairos Research Lab OpenCollective](https://opencollective.com/kairos-research-lab). 

### Advanced build configuration
Apart from the new options you now have in the export dialog, you can also completely fine-tune your build process and e.g. add post-build tasks. For details, see: [Advanced build configuration](https://thegraybook.vvvv.org/reference/hde/exporting.html#advanced-build-configuration).

### .NET6 
![.NET](dotnet-logo.png)

Under the hood, vvvv gamma was sitting on .NET472, by now a rather old version of [.NET](https://en.wikipedia.org/wiki/.NET). With this release, we're upgrading to .NET6. If this means anything to you, you may want to read about [What's new in .NET6](https://docs.microsoft.com/en-us/dotnet/core/whats-new/dotnet-6).

In more human-readable terms, for us this means:
- Generally improved performance
- We can now use newest .NET NuGets of libraries
- When [writing your own nodes](https://thegraybook.vvvv.org/reference/extending/writing-nodes.html) for vvvv you can now use [C#10 features](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-10)

---

One last note: You saw that right, we switched to a more sane versioning model. No more random "year" in the number. From now on, we're counting straight up from 5.0!

## Licensing
The release of a new version is always a good moment to make sure you still have a valid license for commercial use. To check, log into your account on vvvv.org and then view [your vvvv gamma licenses](https://store.vvvv.org/licenses).

In case, you simply [buy a license](https://store.vvvv.org/) the moment you start working on a commercial project. Don't forget that we also have monthly options!

---

What next? Apart from regular 5.x bug-fix releases, we'll also add a few more features in the 5.x branch. Check our updated [roadmap](https://thegraybook.vvvv.org/roadmap/planned.html) for some details.

We hope this release suits you well and would love to hear your thoughts on it in the comments. 

Good patch,
your devvvvs!
