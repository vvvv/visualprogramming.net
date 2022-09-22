---
categories: "Development News"
author: "joreg"
date: "2022-09-20"
title: "Introducing: Show & Tell"
description: "Share your screenshots and thoughts with fellow patchers"
thumb: pixelfed-logo.png
---

Dear renderers!

We know that you're patching on crazy things all day. Only hardly anyone gets to see those. What if it was just the press-of-a-shortcut away to share a screenshot of your current renderings with the world? Try Show & Tell:

![](2022-09-22-12-27-19.png)

**Available in latest [vvvv gamma previews](https://visualprogramming.net/#Download)**, it can be invoked via `Ctrl` + `3` and allows you to quickly share a screenshot plus a short text. When open, Show & Tell intercepts any screenshot you make. Use either:

* `Win` + `Shift` + `S`: The default windows shortcut to take a screenshot
* `Ctrl` + `2`: Works on Skia and Stride windows

Screenshots augmented with a description can then be posted to a shiny common [madewithvvvv](https://pixelfed.social/madewithvvvv) account that will collect all the renderings anyone shares:

![](2022-09-20-13-23-41.png)

## Custom Accounts

Alternatively you can configure Show & Tell to post to one of your own [Pixelfed](https://pixelfed.org/) or [Mastodon](https://joinmastodon.org) accounts and thus build a beautiful portfolio of only your vvvvorks over time.

![](fediverse.png)

For details on how to add custom accounts, see the [documentation](https://thegraybook.vvvv.org/reference/hde/showandtell.html). 

## What the Pixelfed and Mastodon!?

Pixelfed and Mastodon are part of the larger [Fediverse](https://en.wikipedia.org/wiki/Fediverse), a federation of decentralized social networks. In contrast to the more well-known legacy walled-gardens, those work more like e-mail: Anyone can run their own instance of a Pixelfed or Mastodon server and still communicate with anyone else, because the fediverse shares a common communications protocol: [ActivityPub](https://en.wikipedia.org/wiki/ActivityPub). No ads, no tracking, no blockchain, no crypto. Just a simple way to share images and text over the internet.

### VL.IO.Mastonet 

Like the idea? Using the [VL.IO.Mastonet](https://www.nuget.org/packages/VL.IO.Mastonet) NuGet you can easily build your own programs that read/write from/to Mastodon or Pixelfed accounts.

---

So please go ahead and share your sketches, failures and even shiny polished projects and let us create a wonderful gallery of vvvvorks together.

Happy rendering!