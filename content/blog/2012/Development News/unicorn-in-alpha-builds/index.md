---
categories: "Development News"
author: "joreg"
date: "2012-11-08"
title: "unicorn in alpha builds"
slug: "unicorn-in-alpha-builds"
description: ""
imported: "true"
thumb: "unicorn.png"
---


helos,

this is to announce that vvvv [alpha-builds](https://legacy.vvvv.org/downloads/previews) now include the afformentioned unicode changes. 

![](unicorn.png)

summarized to you this means:
- no more dealing with UTF8 vs. ANSI on various string-related nodes
- Reader/Writer (String) now default to UTF8 (which can of course still be changed to other encodings. also note that when loading old patches the old default is being preserved!)
- no more strange characters in patches for asian users
- in a totally unrelated coincidence it fixes https for {{< node "HTTP (Network Get)" >}}

but:
- saving a patch with unicorn-characters in a unicorn-alpha will not let you open the same patch in older vvvv releases. if you still need to do so there is a way... bug us in the alpha-forum for more information.
- MySQL nodes had to be removed (for now)


{{< box >}}
Note:
information given in the [vvvv-unicorn-upgrade](/blog/2012/vvvv-unicorn-upgrade) blog-post is no longer accurate.
{{< /box >}}

enjoy.
and if you find a specific unicode-related bugger -> [alpha forum](https://discourse.vvvv.org/).

@devvvvelopers: this would be a good time to pull upstream