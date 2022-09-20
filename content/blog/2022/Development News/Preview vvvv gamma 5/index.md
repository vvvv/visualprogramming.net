---
categories: "Development News"
author: "joreg"
date: "2022-09-15"
title: "vvvv gamma 5 - Previews available now"
description: "The big .NET6 update"
thumb: 
draft: true
---

Dear patcher people!

The next big release of vvvv (gamma 5) is taking shape and here's what you can expect: 

## .NET6 
![](dotnet-logo.png)

Under the hood vvvv gamma was sitting on .NET472, by now a rather old version of [.NET](https://en.wikipedia.org/wiki/.NET). With this release we're upgrading to the latest version: .NET6. If this means anything to you, you may want to read about [What's new in .NET6](https://docs.microsoft.com/en-us/dotnet/core/whats-new/dotnet-6).

In more human readable terms, for us this means:
- Generally improved performance
- We can now use newest .NET NuGets of libraries
- When [writing your own nodes](https://thegraybook.vvvv.org/reference/extending/writing-nodes.html) for vvvv you can now use [C#10 features](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-10)

## Making vvvv hybrid again
vvvv beta used to be a truly hybrid (visual and textual) development environment. You'd use visual coding for high-level stuff but still have the opportunity to throw in some text code whenever you feel like. 

![](2022-09-16-11-41-53.png)

vvvv gamma 5 brings back this hybrid in the sense that instead of having to compile a .dll separately and restart vvvv everytime you make a change (which was possible already), you can now simply reference a .csproj file with any of your .vl files. Any change you then make to that project or any referenced .cs file (in an external editor) will trigger a compilation and automatically updating everything in the patch. 

For more details on this, see [Writing Nodes](https://thegraybook.vvvv.org/reference/extending/writing-nodes.html) in the gray book.

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

## Export
![](2022-09-16-11-03-40.png)

### Cross platform console apps
One of the bigger things the update to .NET6 allows us to do, is exporting executables not only for Windows, but also other platforms. At this point this is still rather limited as we cannot export GUI applications but only Console Apps for other platforms. But it is a start. What we've tested to work, is e.g. export to a Raspberry Pi running Linux. See this demo from our last meetup:

{{< youtube nwSZ-OFDoC0 4833 >}}

### Advanced build configuration
Apart from the more options you now have in the export dialog, you can also completely fine-tune your build process and e.g. add post-build tasks. For details, see: [Advanced build configuration](https://thegraybook.vvvv.org/reference/hde/exporting.html#advanced-build-configuration).

## ImGui
As demoed at our last meetup, vvvv gamma 5 will support using ImGui for quickly creating quite complex UIs:

{{< youtube nwSZ-OFDoC0 1172 >}}

**And you can try it now by installing the [VL.ImGui]() NuGet.**

## Stride update
The change to .NET6 also allows us to use the [latest version of Stride](https://www.stride3d.net/blog/release-stride-4-1/), which fixes the following two issues:
- [Transparency only works after toggeling "Is Shadow Caster"](https://github.com/vvvv/VL.Stride/issues/493)
- [Depth of Field - Quality Setting not working](https://github.com/vvvv/VL.Stride/issues/333)

## Breaking changes
We tried hard to avoid breaking changes, but couldn't avoid some. At the point of writing this, you may encounter some NuGets that won't work. If you stumble about one such, please let us know in the comments or forum. Most often those will just need to be rebuilt for .NET6...

## Download
So if you're brave enough to give the above a spin, get a fresh vvvv gamma 5 preview from [the PREVIEW download section](https://visualprogramming.net/#Download).