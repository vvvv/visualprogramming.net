---
categories: "News"
author: "joreg"
date: "2016-12-13"
title: "Find a Bug, win a Panda (Latte)"
slug: "find-a-bug-win-a-panda-(latte)"
description: ""
imported: "true"
---


helo evvvveryone,

let's try something different: how about you find a bug in vvvv/vl and you get a [LattePanda](http://www.lattepanda.com/) in return?

## The full story
We're targeting the beta35 release for end of this year. beta35 will easily be the most feature-rich release of vvvv ever in that it will be coming with a new alternative visualprogramming language called VL, besides quite some other new stuff and bugfixes.

In order to make sure beta35 gets a good start we're on a feature-freeze in the alpha-builds now and are planning to invest the coming weeks for bug-fixing only. And this is where you come in: We'd like to encourage you to give the latest alpha-build a ride and see if you stumble upon anything that we better have fixed in beta35.

## The rules
Every bug counts, but note that for this bughunt we're specifically interested in bugs that are new in current alpha builds. So either a bug in one of the new features (listed below), or something that did work in beta34.2 but now is broken. 

- Report your bug(s) in the forum under the "bug" category until **December 13**
- Make sure the bug is in either vvvv or vl (not the addonpack or any contribution)
- Create a little demopatch and/or step-by-step guide to reproduce
- If you're reporting a problem that did not exist in previous versions let us know which was the last version where it worked.

## Whats to win?
<!--{SPLIT()}-->
We have 2 prizes to give:
- one for best bug reporting on vvvv
- one for best bug reporting on vl

Both are the same LattePanda PC:
* LattePanda (4G/64GB) Enhanced version
* 7” IPS 1024x600 Display
* 7” Cap Touch Panel
* HDMI Cable
* Micro USB Cable
* USB Adapter
[Full Specifications](https://ksr-ugc.imgix.net/assets/005/014/977/ac721205f299ea5e431888b15cc21139_original.png?w=680&fit=max&v=1449077068&auto=format&lossless=true&s=107bfa2194d4bf7e5332c41aa7df0394)
<!--~~~-->
![](lattepanda.jpg) 
*Click to enlarge*

<!--{SPLIT}-->

## How we choose the winners
Our prominent jury consisting of core devvvvs {{< user "gregsn" >}}, {{< user "elias" >}}, {{< user "tonfilm" >}}, {{< user "robotanton" >}} and myself will judge your submissions by the following criteria:
- Quality: the better documented the report, the easier for us to reproduce, the better
- Relevance: how relevant we consider the problem (from annoyance to show-stopper)
- Quantity: you can enter multiple reports

## How to find bugs
- Open any of your projects with the latest alpha version and see if it runs as expected. If you see problems, start to investigate: are there any red (missing/error-throwing nodes)? does TTY say something? Try to extract the problem from your project and demonstrate it in the smallest possible patch.
- Open any of the help-patches or girlpowers that come with vvvv and see if there is a problem
- Have a look at any of the things that are listed as new below and see if they work for you as expected
- Start a new little project from scratch. See [On Generative Algorithms](http://inconvergent.net/generative/) or [Nature Of Code](http://natureofcode.com/) for some inspiration..

We realize it may be harder for you to find bugs in VL since there isn't any proper documentation or demo yet. We hope you can see this as an extra challenge. Use it as you would intuitively use it and see what you stumble upon. You're of course also very welcome to ask any kinds of questions regarding VL [on IRC](https://betadocs.vvvv.org/chat.html) or in the forum and we'll try to guide you to your first bugreport..

## Whats new in alpha builds
To give you an idea of what to look forward to with beta35 and where to specifically check for bugs, here is a collection of the most recent relevant blog-posts introducing new features:
- [Support for the new visual programming language VL](https://betadocs.vvvv.org/using-vvvv/vl.html)
- [A GIF Rekorder](/blog/2016/introducing-the-rekorder)
- [Spout Texture Sharing](/blog/2016/spout-0)
- [Improved performance for Raw Nodes](/blog/2016/raw-performance-speedup)
- [New Point-, Bezier-Editors](/blog/2016/introducing-the-editing-framework)
- [Simplified Arduino/Firmata Nodes](/blog/2016/arduino-second-service)
- [Extended support for the TUIO protocol](/blog/2016/how-tuio-do)
- New EyeTracker (Devices TheEyeTribe)
- Completely reworked Leap (Devices) nodes
- New, spreadable ArtNet (Network Receiver/Sender) 
- For many more details see the [change-log](https://betadocs.vvvv.org/changelog/index.html)

So if all goes well the two of you will own a little LattePanda and we all will have a shiny new beta35 by end of the year. What do you think?