
---
draft: false
date: "2022-04-20"
title: "News in Hap world"
description: "The Hap player news"
categories: News
author: lev
---

There were multiple important things happening in the Hap GPU-accelerated video playback codec world recently. Sadly, there is not a single website with all these updates (though there is an [official website](http://hap.video) now). I will try to put the information all together in this blog post.

## Technical updates
### Codec updates
In the mid-2020 a long-awaited Hap R codec was added to the [hap specification](https://github.com/Vidvox/hap/blob/master/documentation/HapVideoDRAFT.md). It uses internally high quality BC7 compressed textures, and makes videos quite close to ProRes. And that's given that compression ratio is same as in DXT5 used in Hap Q (8:1). Hap R encoding right now is slower compared to Hap Q, but decoding is almost as fast as Hap Q and we're getting rid of the annoying artifacts like banding on color gradients or blockiness. It also supports alpha-channel transparency at same compression rate (reserving some color bits to store alpha information).



Here is a comparison of some rendered content encoded with Hap.
![vvvv gamma 2021.4 release](https://github.com/leavittx/leavittx.github.io/raw/master/hap_blog_post_2022/images/Leviathan7.1_diff.png "")
The white gradient is much much smoother on the right, and so is the background area.

Now a frame containing text. 
Hap Q:
![Hap Q](https://github.com/leavittx/leavittx.github.io/raw/master/hap_blog_post_2022/images/out_hapQ.png "")
Hap R:
![Hap R](https://github.com/leavittx/leavittx.github.io/raw/master/hap_blog_post_2022/images/out_hapR.png "")
The borders are much smoother and clearer on the second image.

Feel free to play around with these three side by side interactive image comparisons: [Leviathan video](https://leavittx.github.io/hap_blog_post_2022/comparisons/leviathan_392_hap_vs_hapq.html), [Fireworks video](https://leavittx.github.io/hap_blog_post_2022/comparisons/fireworks_hap_vs_hapq.html), [Jokyo test with alpha](https://leavittx.github.io/hap_blog_post_2022/comparisons/jokyo_hap_vs_hapq.html). I recommend **going to the maximum zoom level** using mouse wheel in some area and then moving the comparison slider / pan using the mouse. Hap Q is on the left and Hap R is on the right.

The support for encoding was shortly added to the amazing [Jokyo Hap Encoder](https://jokyohapencoder.com/) — which is another recent addition to the Hap ecosystem. You can use it for either Adobe Media Encoder or for After Effects. It's nice not only because it's the first and the only one to support Hap R, also it improves Hap and Hap Q quality compared to the community encoders.  Hopefully, GPU accelerated Hap R encoding will be available somewhere soon and then it'll be possible to quickly prepare new footage versions for playback.

Demolition Media Hap Player for vvvv beta/gamma supports it already for some time, and you can use Hap R in both RGB and RGBA modes.

### Hap player for vvvv updates
Next, I'd like to list what new features were added to the vvvv's Demolition Media Hap Player:
1. The one I especially like — texture updates are done now in a background thread — main thread is unaffected by playback
2. The loop playback has become seamless (thanks to pre-caching next frames in a non-stop manner). No hiccups at the start of new loop whether you have custom start/end frames set or not
3. Multi-channel audio support
4. Async opening/closing of videos
5. The memory usage per video has become configurable, and currently set to 400 megabytes for reading packets from video and to 500 megabytes for storing pre-cached frames on GPU (30 frames at max). You can open more videos that way without running out of memory (for small resolution videos the limits won't be nearly hit)
6. The optimizations section:
 - First of all, I've reduced number of memory copying operations, gaining up to 10% of playback performance
 - And lately, when a 8192x8192@60 fps Hap Q file was needed to be played, I've realized that it's 67 megabytes of data to be allocated and then freed for each frame. It actually takes quite a lot of time relatively to other operations needed to be done while decoding a frame. So, I've added an internal memory pool for the purpose of reusing the allocated memory.  It's now 25-40% faster for those extreme high-resolution cases.

## Licensing and distribution updates
It turned out that during the last 1.5 years, only two times a license was purchased for commercial projects (once for beta and once for gamma) — and I'm really greatful to those people, as it was neccesary support to do more development and experimenting.

At this moment, I realized that I'd like to give another licensing policy a try.  I've created a **Patreon page** which will consist all the latest fixes and updates for the Hap player. There are 6 tiers - 3 for individual developers and corresponding 3 for companies. 

 - **First tier** is just vvvv beta Hap plugin updates subscription (with technical support and **unlimited commercial usage allowance while you're an active patron**). 
 - **Second tier** is vvvv beta + gamma plugin updates (also with technical support and unlimited commercial usage allowance while you’re an active patron).
 - **Third tier** is meant for advanced users, it includes vvvv beta + gamma plugin updates (with technical support and unlimited commercial usage allowance while you’re an active patron), and also **advanced frame-based playback**. You can use it for network syncing of the playback and other interesting stuff.
 
**Features available only for patrons (compared to publicly available versions, in addition to bugfixes):**
-   Frame based playback suitable for advanced usage scenarios and network synced playback (3rd tier)
-   Optimization for extremely large videos enabled (25-40% speedup)
-   Configurable memory usage (will be exposed in the patch soon)

I'm not removing the old plugins from anywhere, they are still downloadable (for non-commercial usage), but I really encourage interested people to go to Patreon as I will post new updates and fixes there (already posted first portion of them last week).

[![Become a Patron](https://raw.githubusercontent.com/leavittx/leavittx.github.io/master/hap_blog_post_2022/images/becomeapatron.jpg)](https://www.patreon.com/hap_player)


If you feel uncomfortable with Patreon for some reason, please  [get in contact](mailto:lev.panov@gmail.com) and we'll figure something out. 

**It's possible to send invoices on a regular basis -- just drop me a message after joining on Patreon.** Please feel free to share your thoughts in the comments, regarding tiers, or anything.

Also for users who are unable to use Patreon there is a [Boosty page](https://boosty.to/hap_player).