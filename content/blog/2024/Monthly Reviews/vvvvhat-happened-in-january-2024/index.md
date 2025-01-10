---
date: "2024-02-02"
title: "vvvvhat happened in January 2024"
description: "Last month in review"
categories: Monthly Reviews
author: joreg
---

So here we go!

The year has merely started and we already managed to have a meetup. Don't fret if you missed it, here is the [recording of the 23. vvvv worldwide meetup](https://www.youtube.com/live/m-vXJDhLugE).

We're now officially in release-mode, working towards a stable vvvv gamma 6.0 release. Among a million of issues we're tackling, we've decided to already update to [.NET8/C# 12](https://visualprogramming.net/blog/updates-net8-csharp12-stride4.2/) and we've put some finishing touches on the Inspektor for it's initial release:

![](2024-02-02-11-03-51.png)

Some additional goodies recently added:
- Support for [Projector Calibration by Scalable Display Technologies](https://visualprogramming.net/blog/introducing-projector-calibration-by-scalable-display-technologies/)
- Support for [Configuration](https://learn.microsoft.com/en-us/dotnet/core/extensions/configuration) see help: HowTo Use Configuration
- Support for [TPL.Dataflow](https://learn.microsoft.com/en-us/dotnet/standard/parallel-programming/dataflow-task-parallel-library) (undocumented as of yet, see nodes in the helpbrowser)

And in our efforts of bringing vvvv to a wider audience, we're happy to be presenting vvvv at the german .NET conference BASTA! in Frankfurt. Here is the session: [vvvv - Eine visuelle Echtzeit-Programmierumgebung für .NET](https://basta.net/net-framework-c/vvv-visuelle-echtzeit-programmierumgebung-dotnet/)

## Learning
Here are some upcoming opportunities for learning vvvv.

At The NODE Forum in Frankfurt  :
- February 16: [An introduction to creative coding with vvvv](https://nodeforum.org/announcements/workshop-introduction-to-creative-coding-with-vvvv/)

Online via The NODE Institute:
- February 8: [Exploring VL.Stride for 3d graphics rendering](https://thenodeinstitute.org/courses/ws23-vvvv-10-exploring-vl-stride-for-3d-graphics-rendering-in-vvvv/) by [Randall Vásquez](https://github.com/ravazquez)
- February 22: [Unlocking Shader Artistry: A Journey through ‘The Book of Shaders’](https://thenodeinstitute.org/courses/ws23-vvvv-12-book-of-shaders/) by [Vincent Nowak](https://discourse.vvvv.org/u/vincent.now/summary)
- February 29: [Create Sequencers and Precise Clock Based Tools](https://thenodeinstitute.org/courses/ws23-vvvv-08-create-sequencers-and-precise-clock-based-tools-in-vvvv-gamma/) by [Arístides García](https://www.aristidesgarcia.de/)

Generally all workshops of the current [NODE Institute winter season](https://thenodeinstitute.org/ws23-vvvv-intermediates/) are still available for purchase!


## Contributions
Many thanks to those of you who help complete vvvv with countless additions! For an overview of libraries available for vvvv [start here](https://thegraybook.vvvv.org/reference/libraries/overview.html).

This past month, we've received two new ones:
- [VL.ScalableDisplay](https://www.nuget.org/packages/VL.ScalableDisplay)
- [VL.M8Display](https://www.nuget.org/packages/VL.M8Display)

And updates to the following:
- [VL.IO.MouseKeyGlobal](https://www.nuget.org/packages/VL.IO.MouseKeyGlobal)
- [VL.LoopTool](https://www.nuget.org/packages/VL.LoopTool)
- [VL.Augmenta](https://www.nuget.org/packages/VL.Augmenta)
- [VL.MediaPipe](https://www.nuget.org/packages/VL.MediaPipe)
- [VL.IO.TCP](https://www.nuget.org/packages/VL.IO.TCP)
- [VL.IO.HTTP.WebServer](https://www.nuget.org/packages/VL.IO.HTTP.WebServer)
- [VL.Devices.uEye](https://www.nuget.org/packages/VL.Devices.uEye)


Plus an update in the forum’s work-in-progress section:
- [Genuary Entries](https://discourse.vvvv.org/t/my-genuary-entries/22238) Thomas Helzle took us through his Genuary journey where he nailed every single prompt for each day!

## Gallery

This month we celebrate this beauty shot, posted on our shared [madewithvvvv account](https://pixelfed.social/madewithvvvv/). Please keep them coming!

{{< mastodon "mastodon.art/@thomashelzle/111796002218452836" >}}

## Jobs
- Always keep an eye on the [vvvv job board](https://discourse.vvvv.org/c/jobs)
- There are often some more on [The Interactive & Immersive Job Board](https://jobs.interactiveimmersive.io/?s=vvvv&post_type=job_listing&orderby=date) and [dasauge.de](https://dasauge.de/sta/Vvvv/)
- If you need a vvvv specialist or are one yourself, check out this listing of [vvvv specialists available for hire](https://legacy.vvvv.org/documentation/vvvv-specialists-available-for-hire)

That was it for January. Anything to add? Please do so in the comments!
