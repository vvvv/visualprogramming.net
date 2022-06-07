---
categories: "Development News"
author: "joreg"
date: "2021-03-09"
title: "vvvv gamma - The Road Ahead"
slug: "vvvv-gamma-the-road-ahead"
description: ""
imported: "true"
thumb: "roadmap.png"
---


![](roadmap.png) 

Here we are now!

Getting [vvvv gamma 2021.3](/blog/2021/vvvv-gamma-2021.3-release) out, including the 3d engine VL.Stride, was the last big milestone to bring vvvv gamma up to par with (and far beyond) vvvv beta. One could think this would give us a bit of a break but far from. The next big mountain we're looking forward to climb is right in front of us and it is called: .NET5. 

[.NET](https://de.wikipedia.org/wiki/.NET) is the framework that vvvv gamma is built on and [version 5](https://docs.microsoft.com/en-us/dotnet/core/dotnet-five) was just released a few months ago. It comes with a lot of goodies but also a bit of work for us to adopt to it. So moving vvvv gamma to .NET5 is our next big priority which we plan to ship with 2021.5 towards the end of the year.

Before that, we're planning to release 2021.4 around the end of May in which we take a lot of preparational steps towards .NET5 but don't do the switch yet. Like this, we're hoping to not delay the next release for too long and already get some nice things out earlier. 

So here is a first attempt at a public roadmap. Let's see how that goes...

# Planned for vvvv gamma 2021.4
## Library
Since we now have the most common things in place, we're going into a cleanup phase here with these priorities:
* Update to the latest NuGet API to allow you to use all the latest nugets
* Streamline VL.CoreLib by moving parts that are not really "Core" or "Windows only" into separate libraries and making them open source
* Get more of the most significant nugets stable, starting with Audio and Video

A big focus will also be on further improving VL.Stride:
- Improve Mouse, Keyboard, Touch nodes
- Rework Buffer and Texture nodes
- Allow for simple shader creation
- Add a clean set of TextureFX
- Add Entity Picking

## UI/UX
We all have a lot of wishes in this area but tackling some of the bigger things here will still have to wait for the switch to .NET5. For now, we're concentrating on the following:
* Tackle the existing performance issues that you face when handling larger projects
* Improving the workflow for setting the data type of pads
* Providing a UI for the Settings

## Language
While there are many ideas how to improve the language with new features, we will need to focus on a cleanup of an already shipped language feature: with this release, we'll fix some bits regarding [generic type definitions](https://github.com/vvvv/VL-Language/issues/39).

---

Planning a release ahead is difficult and can be disappointing when you mostly see the things that again didn't make it to the shortlist. We've also already laid out 2021.5 and 2021.6 internally but don't yet feel comfortable publishing them yet. The move to .NET5 still has a few unknowns that we want to better understand before we talk more about it. Therefore in the meantime, we only offer a few general [notes about our further agenda](https://thegraybook.vvvv.org/roadmap/further.html). To be reviewed after each major release. 

Apart from the upcoming major releases, we're committed to regular smaller bug-fix releases to the current 2021.3.x branch. 

As always, you can follow our development by test-driving the [daily previews](https://visualprogramming.net/#Download).