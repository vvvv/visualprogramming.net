---
draft: false
date: "2022-11-11"
title: "vvvv gamma 2021.4.11 release"
description: Release notes
categories: "vvvv gamma Releases"
author: gregsn
---
We offer [preview builds of 2022.5](https://visualprogramming.net/blog/2022/vvvv-gamma-2022.5-previews-available-now/) for a while now.
So this might come as a surprise to you. But here it is: a final 2021.4.11 release:

__[Download vvvv gamma 2021.4.11](http://visualprogramming.net/#Download|)__


The reasoning is simple and somewhat boring. While we want to give you the possibility to get in touch with cutting-edge developments, we also want to be able to point you to something stable. 
And while we're confident that a first 2022.5 stable release isn't that far away, we still want you to be able to play it safe when using vvvv for your latest project.

And really, 4.11 stable is all about that: improved reliability & performance and a tad of improved playfulness.

By the way: all those improvements have already made it also into the preview builds of 2022.5.

## Performance
We found a way to rewrite the edit-while-running runtime in a way that is much more lightweight than before. You get improved performance and far fewer frame rate drops due to garbage collection.

## Reliability
We had several issues in the past where outdated patches were still running. This can't happen anymore. We now have a security mechanism that rather triggers a restart of the user program than allowing it to run outdated code.

## Hot-swap
But then again, you don't want to get into a situation where your patch restarts and forgets all its state. So that's why we improved the hot-swap system quite a bit. Even complex patches will typically just evolve while they're running and you're patching.

## Nodes
These are the main points, but there were a lot of small bug fixes on the way, including everything from compiler fixes to minor irritations.
All in all, when earlier you wouldn't be able to be sure if it was your fault or vvvvs fault, now it's a lot clearer:
* Whenever the log pops up: it's our fault
* Whenever you encounter colorful nodes: these are here to help you to find the issue in your code

These as well, be they pink, orange, or red ones, got a deep review. Finding bugs now is fun ;)

Over the last month also some features made it into this build. But those were covered in separate blog posts already:

- [Introducing Show & Tell](https://visualprogramming.net/blog/2022/introducing-show-tell/)
- [Introducing Lottie](https://visualprogramming.net/blog/2022/introducing-lottie/)
- And of course, lots of library updates happened in the past. Browse all the [monthly updates](https://visualprogramming.net/blog/2022/vvvvhat-happened-in-october-2022/) for more.

Thanks to the inclined reader,
happy patching,
yours devvvvs

[Get started](https://thegraybook.vvvv.org/reference/getting-started/overview.html)  
[Buy a license](https://store.vvvv.org)

[The blog about the 2021.4 series](https://visualprogramming.net/blog/2022/vvvv-gamma-2021.4-release/).

