---
categories: "Development News"
author: "joreg"
date: "2014-07-08"
title: "TimelinerSA next generation alpha grade release"
slug: "timelinersa-next-generation-alpha-grade"
description: ""
imported: "true"
thumb: "timeliner.png"
---


To you suckers for framed keys,

right into this gorgeous sommerloch we bring to you the initial public offering of our next generation TimelinerSA: a standalone timelining application that sends out its values via OSC and as such a candidate for becoming the successor to the rusty original [TimelinerSA](https://betadocs.vvvv.org/topics/animation/timelinersa.html).

![](timeliner.png)

{{< box >}}
Note:
for now this is not a replacement but more an experiment still.
{{< /box >}}

We started this from scratch for all the wrong reasons. Basically we were looking for a simple application to test our new gui framework [Posh](/blog/2014/posh-an-svg-based-flat-ui-framework-targeting-browsers) and mostly in order to have a real world usecase we decided to start redoing the timeline. So while at this point it is still lacking quite some of the old timelines features it already has some shiny new stuff:
* undo/redo
* styling via css
* remote access via webbrowser

Missing are foremost:
* more track types (curvy values, color, ...)
* a node-version
* grouping of tracks
* copy/pasting keyframes 
and some more, see [timeliners issues on github](https://github.com/vvvv/Timeliner/issues)

And as soon as we have the node-version this time it should not be too far out to hope for proper GetTrack/SetTrack nodes for recording values or doing your own evaluating of the keyframes...

For now it still has one major bugger: when deleting a keyframe while hovering it with the mouse everything will freeze. If you get in that situation just press F5 to reload the page. Also big thanks to the patience of all alpha-testers. 

Now {{< contribution "timelinersa-nextgeneration" "get it here" >}} and in the comments (here) please let us know whats your favorite missing features that makes this thing still useless for you. Hopefully this will let us prioritize further development on timeliner. 

If you already like what you see we'd appreciate a [/timelinersa|Timeliner](flattr).

Ah and yes it is all opensource: See [Timeliner](https://github.com/vvvv/Timeliner) on github.