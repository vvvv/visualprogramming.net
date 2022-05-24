---
categories: "vvvv beta Releases"
author: "Elias"
date: "2018-11-20"
title: "vvvv_50beta38"
slug: "vvvv50beta38"
description: ""
release: 
    major: "50"
    minor: "38"
    date: "2018-11-18"
    app_file: "sites/default/files/vvvv_50beta38_x86.zip"
    app_file_64: "sites/default/files/vvvv_50beta38_x64.zip"
imported: "true"
thumb: "spread.PNG"
---


### Surprise!

Another release just out of the gray only 2.5 months after the previous. How come?

The last beta37 release proofed to be quite stable, hardly any too concerning bug reports, but we have a breaking change to introduce and think this is a good moment. Hear us out:

If you're a vvvv-only user, you're safe. This release only has minor changes compared to beta37, so there shouldn't be any reason for you not to upgrade. Horray!

If you're also using VL, we're afraid, but swallow this: 
{{< box >}}
Note:
.vl documents saved with beta38 are not backwards compatible with beta37!
{{< /box >}}

Since there are hardly any other changes, we recommend you also switch as soon as possible and never look back...

### So why the breaking change?

It's about how values get stored in IO boxes and pins. They now use the same serialization technique we already [introduced](/blog/2018/vl-serialization) as a node set for beta37. This means that we can store any data inside patches for which a serializer is registered - be it a spread of values, a dictionary or even a custom record:
![A spread of values in b37 and b38](spread.PNG)
And as a second example a dictionary from string to value
![A dictionary of values in b37 and b37](dictionary.PNG)

It might not look as much yet but it is a first step to get proper IO boxes back.

So apart from that another worth mentioning improvement is a new short cut called Ctrl+K which creates pins for the selected pads and puts them on the Create and Split operations of the containing patch
![Ctrk+K](Ctrk_K.gif)

All other changes can be found the as usual in the [Changelog](https://betadocs.vvvv.org/changelog/core/change-log-vvvv50beta38.html).

Yours,
devvvvs.