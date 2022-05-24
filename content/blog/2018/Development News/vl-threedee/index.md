---
categories: "Development News"
author: "joreg"
date: "2018-08-02"
title: "VL: ThreeDee"
slug: "vl-threedee"
description: ""
imported: "true"
thumb: "xenko.png"
---


Not many will remember the times when vvvv's 3d rendering was based on [Direct3D](https://en.wikipedia.org/wiki/Direct3D) 8. Not important really, because at the same time we released {{< contribution "vvvv33beta1" "vvvv 33beta1" >}} in December 2002, Microsoft released Direct3D 9 with a lot of new features, so we knew what we had to do..

Luckily vvvv's DX9 implementation proved powerful enough to be quite useful for many years. Then it took Microsoft 5 years to release its successor DX10 which was only available on Windows Vista, which nobody wanted. Also graphic-card adoption took quite a while so we didn't really feel an urge to start working on it right away. 

## A Gift
A year later in 2008 Microsoft released Windows 7 and with it DX11, which altogether looked more promising. But still a lack of adoption of supported hardware and Windows 7 didn't put too much pressure on us to implement it. Instead we thought it would be smarter to improve the plugin-interface for vvvv to make it easier for users to contribute to the library of nodes.

In parallel we had already secretly started work on our next big thing that would become [VL](https://betadocs.vvvv.org/using-vvvv/vl.html), which we first announced at the keynode during [NODE13](https://nodeforum.org/activities/node-forum/node13/). Since with VL we've mentioned from the beginning that we wanted it to eventually run across platforms, for us, implementing a new renderer based on the windows-only Direct3D api became less and less appealing.

What happened next couldn't have been more fortunate: besides many other major contributions, using the possibilities of vvvv's plugin-interface, power-user {{< user "vux" >}} took it in his own hands to create a {{< contribution "directx11-nodes" "set of nodes for rendering with the features of DX11" >}}, which he released on [vvvv's 10th birthday](https://vimeo.com/56019214) in December 2012. And the vvvvorld was a better place.

DX11 for vvvv is amazing, but innovation in the world of computer graphics started moving faster and faster. Despite the magic that DX11 brought, users demanded more and more bling, but all we were talking about was how VL would revolutionize visual-programming, which brought us all together in the first place. 

## Another Gift?
With the cross-platform goal in mind, for years it seemed the only option was going for [OpenGL](https://en.wikipedia.org/wiki/OpenGL) instead of Direct3D as rendering API for VL. But all those years, following OpenGLs development and stories about bad support by Microsoft and Apple never got us excited enough to just go for it. Meanwhile a new player has appeared as a modern cross-platform graphics API, called [Vulkan](https://en.wikipedia.org/wiki/Vulkan_(API)), but since it is still in its early stages and support for MacOS seems not official yet, again we were reluctant to jump on it.

All the years we knew there would be another option: Instead of using Direct3D, OpenGL or Vulkan directly, we could base a rendering library for VL on a game-engine API that would deal with different graphics APIs under the hood and would possibly have all 3 as back-ends that can be used on different platforms without us needing to worry about it. 

While this sounds brilliant, it obviously has other potential drawbacks (out of scope for this post). But also the range of options for game-engines we could have used wasn't too overwhelming. Until recently. Enter [Xenko](https://xenko.com).

![](xenko.png)

Xenko is a universe of its own and as such comparable to [Unity3D](http://unity3d.com/), [UnrealEngine](http://unrealengine.com/), [CryEngine](https://www.cryengine.com/) and the [GodotEngine](https://godotengine.org/). Please check [Xenko's propaganda page](https://xenko.com/features/) to get a glimpse of its features.

We've had an eye on this engine for a while already but it being targeted at commercial game-studios would mean that every user of vl would also need to buy a license for it, so again we were hesitating and looked for alternatives.

But what just happened could again not have been more fortunate: The company behind Xenko, [Silicon Studio](https://www.siliconstudio.co.jp/en/), removed its commercial licensing and [released it to the community](https://xenko.com/blog/xenko-opensource-mit/) under the [MIT license](http://opensource.org/licenses/MIT), which is a very permissive open source license. This would allow us to base a renderer for VL on it without any licensing restrictions. 

## Xenko and VL
Initial tests look very promising. Within just a few days we were able to patch a little interactive scene and export the project as an executable so it could be distributed via the [Steam store](https://store.steampowered.com/) and run on a VR device.

{{< vimeo "282911735" >}}

Hence our plan is to investigate further in this direction and at the moment we see two interesting workflows between VL and Xenko:
- a VL.Xenko pack: that would be basically like the [VL.Skia](/blog/2018/vl.skia) pack we've just released
- Xenko Studio as a host for VL: that would be similar to how vvvv is hosting VL at the moment 

For both scenarios what will be important, is a proper library design wrapping the original Xenko functionality into a comfortable set of nodes, similar to what we just did for Skia.

## Next Steps
We'd usually not water your mouths before we are more sure about things. But with Xenko just having gone full open-source and looking to build a community of developers and users, we thought it would be a good idea to talk about this now and try to involve you from the beginning. 

So if you're curious about Xenko's universe, just head over to its website and see what it has to offer. You can even download and play around with the editor and if you're familiar with C# create a little game with fancy graphics and assets in no time.

Next we'll demo what we've got so far to participants at [http://link-summercamp.de/](http://link-summercamp.de/) and start a discussion there. If you're not at LINK please still join the discussion with your thoughts using [this thread](https://discourse.vvvv.org/t/link-topics-2-3d-engine/16544). If all goes well we should also be able to share our proof of concept sometime after LINK.

So we hope you understand that at this stage it is too early to promise anything but at the moment we are confident to having found the right library for implementing a 3d rendering system for VL. Just as we were happy when we finally found Skia as the perfect library for VLs 2d rendering system.

Meanwhile please help spread the word about Xenko, retweet [their announcement](https://twitter.com/xenko3d/status/1024906814196875265) and consider supporting [their Patreon](https://www.patreon.com/xenko) to help them build a strong developer community. 

We'll update you about developments as we progress...

{{< box >}}
Note:
There are more updates on this:
[VL: Xenko 3D Engine Update #1](/blog/2018/vl-xenko-3d-engine-update-1)
[VL: Xenko 3D Engine Update #2](/blog/2018/vl-xenko-3d-engine-update-2)
[VL: Xenko 3D Engine Update #3](/blog/2020/vl-xenko-3d-engine-update-3)
{{< /box >}}