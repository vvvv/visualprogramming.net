---
date: "2023-03-02"
title: "Introducing: Remoter 2.0"
description: "A fancy UI to remote control PCs"
categories: "Development News"
author: "joreg"
thumb: "open-source.png"
draft: true
---

Developers!

Are you working on an application that spans across multiple PCs? Then Remoter might be for you!

![Remoter 2.0](remoter.gif)

Remoter allows you to WakeOnLAN/Reboot/Shutdown and Start/Restart/Kill processes on a range of target PCs at the click of a button. Main benefit of this over similar solutions: You don't need to install any software on the remote PCs first! It uses [PAExec](https://github.com/poweradminllc/PAExec) and [robocopy](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/robocopy) under the hood for the magic and essentially builds a fancy UI on top of those. 

If you've been with vvvv long enough you may remember [the old version](https://beta.vvvv.org/using-vvvv/boygrouping/remotersa.html), which was built on top of [PSTools](https://learn.microsoft.com/de-de/sysinternals/downloads/pstools). But since PSTools doesn't allow redistribution it always required a separate download. 

Remoter 2.0 is completely repatched in vvvv gamma, with sources and releases available via [Remoter on GitHub](https://github.com/vvvv/Remoter).

## Secenario
Still not sure if Remoter is for you? Here is the scenario:

Say you have 42 PCs that you like to think of in 3 groups. You need to sometimes mirror files to certain groups and often start/kill applications on individual PCs or a range of them. 

Remoter allows you to create lists of PCs (given their IPs) and organize them in groups. And it allows you to define custom tasks that you can then run on a selection of PCs.

It is sometimes tricky to get the underlying PAExec to run, so we're providing a [Troubleshooting](https://github.com/vvvv/Remoter/wiki/Troubleshooting) page. But once you have it running, it will save you a lot of time.