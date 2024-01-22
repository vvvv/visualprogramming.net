---
categories: "Development News"
author: "joreg"
date: "2024-01-22"
title: "Updates: .NET8, C# 12 and Stride 4.2"
description: "Only the latest and greatest"
thumb: dotnetn-logo.png
slug: updates-net8-csharp12-stride4.2
---

Have you noticed?

![](dotnet-logo.png)

[vvvv preview downloads](https://visualprogramming.net/#Download) recently changed version from 5.3 to 6.0. And here is why: With the next stable release still taking a bit longer than anticipated, we changed priorities. Instead of delaying the inevitable update to .NET8 for only after the next stable release, we already did it now. And to mark this event, we invested in a new version number. 

So in case anyone is wondering, it is now easy to remember:
- vvvv gamma 2021.4.x is .NET Framework 4.8
- vvvv gamma 5.x is .NET6
- vvvv gamma 6.x is .NET8

The change of .NET version is at the same time not at all and very much significant: If .NET means nothing to you, never mind. It is just the underlying technology that vvvv is built on.

If on the other hand you do know what it means you will be glad to know that only after a few weeks of general availability of .NET8 you can now already benefit from all its goodies in latest vvvv gamma 6.0 previews. Need a reminder? See: [What’s new in .NET8](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-8).

In more human-readable terms, this means:

- Generally improved performance
- We can now use newest .NET NuGets of libraries that require .NET8
- When [writing your own nodes](https://thegraybook.vvvv.org/reference/extending/writing-nodes.html) for vvvv you can now use [C#12 features](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-12)

## Stride 3d Engine Update

![](stride-logo-light.svg)

The [Stride Engine](https://www.stride3d.net/) vvvv is using for 3d rendering also being based on .NET did the same update to .NET8 in their latest 4.2 release. Consequently vvvv gamma 6.0 is now also using this latest version of Stride. To learn what this means, see: [Stride 4.2 Release Notes](https://doc.stride3d.net/4.2/en/ReleaseNotes/).