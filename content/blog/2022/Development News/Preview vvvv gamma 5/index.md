---
categories: "Development News"
author: "joreg"
date: "2022-09-28"
title: "vvvv gamma 2022.5 - Previews available now"
description: "The big .NET6 update"
thumb: 
draft: false
---

Dear patcher people!

The next big release of vvvv (gamma 2022.5) is taking shape and here's what you can expect: 

## Dear ImGui
Building UI's has been a topic in vvvv since its early years. Here is another fresh take at a library for quickly building UI's. 

Based on the popular [Dear ImGui](https://github.com/ocornut/imgui), we experimented a lot with different ways to wrap this for convenient use in our visual language and are quite happy with the results. It is certainly not the right library for all usecases,  but it should cover a wide range still. Read what the original creators have to say about it:

*Dear ImGui is designed to enable fast iterations and to empower programmers to create content creation tools and visualization / debug tools (as opposed to UI for the average end-user). It favors simplicity and productivity toward this goal and lacks certain features commonly found in more high-level libraries.*
From the [Dear ImGui pitch](https://github.com/ocornut/imgui#the-pitch).

**screenshot**

## Channels
You'll most likely love these. They are the simplest yet way for controling values in a patch from different spots. They work perfectly together with ImGui widgets where they e.g. allow you to easily change a value either via an on-screen UI widget or from an IOBox in the patch. A game-changer for bi-directional data-binding!

**screenshot**

## Making vvvv hybrid again
vvvv beta used to be a truly hybrid (visual and textual) development environment. You'd use visual coding for high-level stuff but still have the opportunity to throw in some text code whenever you feel like. 

This version brings back the "hybrid" in the sense that instead of having to compile a .dll separately and restart vvvv everytime you make a change (which was possible already), you can now simply reference a .csproj file with any of your .vl files. 

![](2022-09-16-11-41-53.png)

Any change you then make to that project or any referenced .cs file (in an external editor) will trigger a compilation and automatically update everything in the patch. 

For more details on this, see [Writing Nodes](https://thegraybook.vvvv.org/reference/extending/writing-nodes.html) in the gray book.

## Export
![](2022-09-16-11-00-21.png)

### Cross platform console apps
vvvv can now export executables not only for Windows, but also other platforms. At this point this is still rather limited as we cannot export GUI applications but only console apps for other platforms. But it is a start. What we've tested to work, is e.g. export to a Raspberry Pi running Linux. See this demo from our last meetup:

{{< youtube nwSZ-OFDoC0 4833 >}}

### Advanced build configuration
Apart from the more options you now have in the export dialog, you can also completely fine-tune your build process and e.g. add post-build tasks. For details, see: [Advanced build configuration](https://thegraybook.vvvv.org/reference/hde/exporting.html#advanced-build-configuration).

## Precompiled libraries
May sound cryptic, but has two very practical implications: 
- Starting up vvvv is now much faster
- vvvv now uses less memory: Easing the burden on .NETs memory management and leaving more memory for your actual project

For a demo, watch this bit from our last meetup:

{{< youtube nwSZ-OFDoC0 8085 >}}

To achieve these improvements, the following things are happening:
- All libraries and NuGets shipping with vvvv are now precompiled, ie. on startup vvvv doesn't need to compile .vl docs anymore
- Any NuGet you install and reference in a project is now compiled once, ie. any future use of the same version of the library also requires no costly recompilation

What this also means though - and this shouldn't bother the default user too much - is that you can no longer rightclick -> Open nodes that come from such a compiled library. You'll argue you should still be able to inspect the code, just not modify it and you're right. Hang in there...

More advanced users who may have reasons to opt-out of this new default behavior at times, see [Commandline Arguments](https://thegraybook.vvvv.org/reference/hde/commandline-arguments.html).

## .NET6 
![](dotnet-logo.png)

Under the hood vvvv gamma was sitting on .NET472, by now a rather old version of [.NET](https://en.wikipedia.org/wiki/.NET). With this release we're upgrading to the latest version: .NET6. If this means anything to you, you may want to read about [What's new in .NET6](https://docs.microsoft.com/en-us/dotnet/core/whats-new/dotnet-6).

In more human readable terms, for us this means:
- Generally improved performance
- We can now use newest .NET NuGets of libraries
- When [writing your own nodes](https://thegraybook.vvvv.org/reference/extending/writing-nodes.html) for vvvv you can now use [C#10 features](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-10)

## Stride update
The change to .NET6 also allows us to use the [latest version of Stride](https://www.stride3d.net/blog/release-stride-4-1/), which fixes the following two issues:
- [Transparency only works after toggeling "Is Shadow Caster"](https://github.com/vvvv/VL.Stride/issues/493)
- [Depth of Field - Quality Setting not working](https://github.com/vvvv/VL.Stride/issues/333)

## Breaking changes
We tried hard to avoid breaking changes, but couldn't avoid some. At the point of writing this, you may encounter some NuGets that won't work. If you stumble about one such, please let us know in the comments or forum. Most often those will just need to be rebuilt for .NET6...

## Download
So if you're brave enough to give the above a spin, get a fresh vvvv gamma 5 preview from [the PREVIEW download section](https://visualprogramming.net/#Download).