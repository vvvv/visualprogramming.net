---
date: "2023-10-05"
title: "vvvvhat happened in September 2023"
description: "Last month in review"
categories: Monthly Reviews
author: joreg
---

Boom.

Some of the things we've been working on for a while are now available as previews:

- Latest previews are shipping with a new pack: VL.IO.Redis. Check out the helppatches, it is a really simple node-set so far and allows you to talk to a [Redis](https://redis.io/) database. Requires some setup but is probably the fastest way to share data in bigger installations
- [VL.CEF.Stride](https://www.nuget.org/packages/VL.CEF.Stride) and [VL.CEF.Skia](https://www.nuget.org/packages/VL.CEF.Skia) have been updated to use Chromium 103, which increases the number of websites it will render correctly. Note that videos using proprietary codecs will not play, see the [VL.CEF Troubleshooting section](https://github.com/vvvv/VL.CEF#troubleshooting)
- We now have an official pack out to support ZED cameras by [Stereolabs](https://www.stereolabs.com/) (includes Skeleton tracking!). See [VL.Devices.ZED](https://www.nuget.org/packages/VL.Devices.ZED)
- **BREAKING CHANGE**: The VL.Video.MediaFoundation package shipping with vvvv is no more. It's been renamed to VL.Video. Essentially we got rid of the backend-specific duplication of the nodes. This means you'll see red nodes that you can simply double click and replace with the new (non-backend specific) node. To now apply the video to either Skia or Stride you'll have to add either a `VideoSourceToSKImage` or a `VideoSourceToTexture` node. For all details, see the [Change Log](https://thegraybook.vvvv.org/changelog/5.x.html#changes)

Further we've been progressing on:
- [Remoter 2.0](https://github.com/vvvv/Remoter/), a standalone tool allowing you to start/kill applications on and mirror assets to a range of client PCs at the click of a button
- A complete solution app Configuration and Logging
- Easy server/client render clusters (aka. "boygrouping")
- Support for [OSCQuery](https://github.com/Vidvox/OSCQueryProposal)
- Support for [Scalable Display](https://www.scalabledisplay.com/) projector auto-alignment

## Learning vvvv
- The next **[vvvv beginner class](https://thenodeinstitute.org/courses/ws23-vvvv-beginner-class/)** is starting on Oktober 16th
- Intermediate level workshop for this winter semester are currently in the planning stage

## Contributions
Many thanks to those of you who help complete vvvv with countless additions! For an overview of libraries available for vvvv [start here](https://thegraybook.vvvv.org/reference/libraries/overview.html).

We have new NuGets:
- [VL.Devices.ZED](https://www.nuget.org/packages/VL.Devices.ZED) <- support for ZED depth cameras by [Stereolabs](https://www.stereolabs.com/)
- [VL.Unicolour](https://www.nuget.org/packages/VL.Unicolour)

We received updates to the following:
- [VL.Devices.Kinect](https://www.nuget.org/packages/VL.Devices.Kinect) (now works with vvvv gamma 5.x)
- [VL.Addons](https://www.nuget.org/packages/VL.Addons) <- includes TextureFX!
- [VL.CEF.Stride](https://www.nuget.org/packages/VL.CEF.Stride) (updated to Chromium 103)
- [VL.CEF.Skia](https://www.nuget.org/packages/VL.CEF.Skia) (updated to Chromium 103)
- [VL.IO.TUIO](https://www.nuget.org/packages/VL.IO.TUIO) (adds 2.5d and 3d profiles)

Plus a new entry in the forum’s work-in-progress section:
- [VL.Audio Spectrum](https://discourse.vvvv.org/t/vl-audio-spectrum/21897)

## Gallery
This years Ars Electronica festival in Linz saw quite some projects realized with vvvv. Here is a [review of vvvvorks shown at Ars Electronica 2023](https://visualprogramming.net/blog/2023/a-revvvview-of-ars-electronica-2023/).

And here are some [FUSE](https://www.thefuselab.io/) eyecandies from [texone](https://mastodon.social/@texone):

{{< mastodon "mastodon.social/@texone/111178560477939523" >}}

{{< mastodon "mastodon.social/@texone/111065022789991871" >}}

{{< mastodon "mastodon.social/@texone/111107797967450931" >}}

## Jobs
- Always keep an eye on the [vvvv job board](https://discourse.vvvv.org/c/jobs)
- There are often some more on [The Interactive & Immersive Job Board](https://jobs.interactiveimmersive.io/?s=vvvv&post_type=job_listing&orderby=date) and [dasauge.de](https://dasauge.de/sta/Vvvv/)
- If you need a vvvv specialist or are one yourself, check out this listing of [vvvv specialists available for hire](https://legacy.vvvv.org/documentation/vvvv-specialists-available-for-hire)

That was it for September. Anything to add? Please do so in the comments!