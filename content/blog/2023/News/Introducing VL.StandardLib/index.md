---
date: "2023-02-09"
title: "Introducing: VL.StandardLibs"
description: "All VL libraries are now open-source"
categories: "Development News"
author: "joreg"
thumb: "ico.png"
draft: true
---

Free at last!

Since the [initial release of vvvv gamma](https://visualprogramming.net/blog/2020/vvvv-gamma-2020.1-release/) in April 2020 we promised to one day have all of its libraries open-source. Many of them were [public on github](https://github.com/vvvv) from the beginning. But for rather technical reasons we still had some (most importantly VL.CoreLib and VL.Skia) private.

Today we share with you **[VL.StandardLibs](https://github.com/vvvv/VL.StandardLibs)**, a repository that holds the sources of all of VL's libraries that were not accessible so far.

So is vvvv now open-source? No. The VL compiler and vvvv editor are still private and there are no current plans to change that. What you gain is full access to all libraries, which has the following implications:

- The workflow that we developers internally work on these libraries is now exactly the same for you
- You can preview work-in-progress branches
- You can fix issues and propose changes or additions

So the main advantage with this is really that it facilitates much closer collaboration between us core developers and external open-source contributors. How important this is became apparent in projects like VL.Kairos and VL.FUSE that are lead by community members but still happen in close collaboration with the core team and also have implications on core libraries. 

Also, this probably makes vvvv the most accessible and extensible of comparable tools.

Additional benefits:
- different release cycle for standardlib
- detangled libraries
  - VL.Core
  - VL.HDE
  - VL.Lang
- smaller exports
