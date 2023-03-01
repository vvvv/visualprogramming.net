---
date: "2023-02-28"
title: "Introducing: VL.StandardLibs"
description: "All VL libraries are now open-source"
categories: "Development News"
author: "joreg"
thumb: "open-source.png"
draft: true
---

Free at last!

Since the [initial release of vvvv gamma](https://visualprogramming.net/blog/2020/vvvv-gamma-2020.1-release/) in April 2020 we promised to one day have all of its libraries open-source. Many of them were [public on github](https://github.com/vvvv) from the beginning. But for rather technical reasons we still had some (most importantly VL.CoreLib and VL.Skia) private.

Today we share with you **[VL.StandardLibs](https://github.com/vvvv/VL.StandardLibs)**, a repository that holds the sources of all of VL's libraries that were not accessible so far. Most notably those are:

- VL.Core
- VL.CoreLib
- VL.Stride
- VL.Skia
- VL.ImGui

So is vvvv now open-source? No. The VL compiler and vvvv editor are still private and there are no current plans to change that. What you gain is full access to all libraries, which has the following implications:

- The workflow that we developers use internally to work on these libraries is now exactly the same for you
- You can preview work-in-progress branches
- You can fix issues and propose changes or additions

So the main advantage with this is really that it facilitates much closer collaboration between us core developers and external open-source contributors. How important this is became apparent in projects like VL.Kairos and VL.FUSE that are lead by community members but still happen in close interaction with the core team and also have implications on core libraries. So with providing VL.StandardLibs as a public repository, we're hoping to make collaboration with open-source contributors much more frictionless.

In order to be able to realease VL.StandardLibs, we finally did the long-needed detanglement of some core libraries, which has some more benefits:
- Exports are now typically smaller, because the dependency graph of actually needed libraries is smaller
- You can now use custom commandline arguments with your .exe (commandline args of vvvv.exe used to be part of all exports)
- We're potentially free to have a different release cycle for VL.StandardLibs than the main application
  
Apart from the above, this probably also makes vvvv the most accessible and extensible of comparable tools (Just in case you needed an other argument to use it for your next project).