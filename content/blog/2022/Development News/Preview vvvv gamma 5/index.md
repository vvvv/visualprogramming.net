---
categories: "Development News"
author: "joreg"
date: "2022-09-15"
title: "vvvv gamma 5 - Previews available now"
description: "The big .NET6 update"
thumb: dotnet-logo.png
draft: true
---

Dear patcher people!

The next big release of vvvv (gamma 5) is taking shape and here's what you can expect. 

{{< box >}}
Note: If the below all sounds too boring for you and you're expecting some more bling it may help to understand that all the future bling will be built on top of these new boring bits...
{{< /box >}}

## .NET6 
Under the hood vvvv gamma so far has been sitting on .NET472, by now a rather old version of [.NET](https://en.wikipedia.org/wiki/.NET). With this release we're upgrading to the latest version: .NET6. If this means anything to you, you may want to read about [What's new in .NET6](https://docs.microsoft.com/en-us/dotnet/core/whats-new/dotnet-6).

In more human readable terms this means:
- Generally improved performance
- We can now use newest .NET nugets of libraries
- When [writing your own nodes](https://thegraybook.vvvv.org/reference/extending/writing-nodes.html) for vvvv you can now use [C#10 features](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-10)

## Making vvvv hybrid again
vvvv beta used to be a truly hybrid (visual and textual) development environment. Allowing you to use visual coding for high-level stuff but still allowing you to throw in some text code whenever you feel like. 

vvvv gamma 5 brings back the hybrid in the sense that instead of having to compile a .dll separately and restart vvvv everytime you make a change (which was possible already), you can now simply reference a .csproj file with any of your .vl files. Make a change and vvvv will take care of compiling and updating everything whenever you make a change to the project or any of the .cs files it references. 

TODO: (this info then also be moved to the gray book) 
- screenshot where to reference file
- does it need VS (which version) or is VS Code enough?
- where do i see errors?
- ...

## Precompiled libraries
Faster startup...

## Cross Platform Export
One of the bigger things the update to .NET6 allows us to do, is exporting executables not only for Windows, but also other platforms. At this point this is still rather limited as we cannot export GUI applications yet, but what we've tested to work, is e.g. export to a Raspberry Pi running Linux. See this demo from our last meetup:

{{< youtube nwSZ-OFDoC0 4833 >}}

## Breaking changes
?
