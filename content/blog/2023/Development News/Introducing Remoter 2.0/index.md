---
date: "2023-10-16"
title: "Introducing: Remoter 2.0"
description: "A fancy UI to remote control PCs"
categories: "Development News"
author: "joreg"
thumb: "remoter.jpg"
---

Developers!

Are you working on an application that spans across multiple PCs? Then Remoter might be for you!

![Remoter 2.0](remoter.gif)

## Features

- Manage lists of PCs (via their IPs) and assign them to groups
- WakeOnLAN, Reboot, Shutdown selected PCs
- Start, Restart, Kill processes on selected PCs
- Watchdog: Define what happens when a task fails (e.g. Reboot, Restart process,...)
- Mirror files to selected PCs

Remoter uses [PAExec](https://github.com/poweradminllc/PAExec) and [robocopy](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/robocopy) under the hood for the magic and essentially builds a fancy UI on top of those. 

{{< box >}}

**[Download Remoter](https://github.com/vvvv/Remoter/releases)**

{{< /box >}}

Because is sometimes tricky to get the underlying PAExec to run properly in your PC/network setup, we're providing a [Troubleshooting](https://github.com/vvvv/Remoter/wiki/Troubleshooting) page to avoid common pitfalls. But once you have it running, it will save you a lot of time.

## Secenario
Still not sure if Remoter is for you? Here is the scenario:

Say you have 42 PCs that you like to think of in 3 groups. You need to sometimes mirror files to certain groups and often start/kill applications on individual PCs or a range of them. 

Remoter allows you to create lists of PCs (given their IPs) and organize them in groups. And it allows you to define custom tasks that you can then run on a selection of PCs.

## Successor to RemoterSA 
If you've been with vvvv long enough you may remember [the old version](https://beta.vvvv.org/using-vvvv/boygrouping/remotersa.html), which was built on top of [PSTools](https://learn.microsoft.com/de-de/sysinternals/downloads/pstools). But since PSTools doesn't allow redistribution it always required a separate download. 

Remoter 2.0 is completely repatched in vvvv gamma, with sources available via [Remoter on GitHub](https://github.com/vvvv/Remoter).