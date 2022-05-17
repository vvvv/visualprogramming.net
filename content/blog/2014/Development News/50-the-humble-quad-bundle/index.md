---
categories: "Development News"
author: "joreg"
date: "2014-04-01"
title: "50: The Humble Quad Bundle"
slug: "50-the-humble-quad-bundle"
description: ""
imported: "true"
---


"The Humble Quad Bundle" by #vvvv serves 4 computer classics implemented using the stilltocome #visualprogramming language codenamed #vvvv50
(*hint: the above are exactly 140 characters*)

![](games_0.png) 

The bundle comes with a reissue of the hit games [Pong](http://en.wikipedia.org/wiki/Pong) (1972),  [Frogger](http://en.wikipedia.org/wiki/Frogger) (1981), [Worms](http://en.wikipedia.org/wiki/Worms_%28series%29) (1995) and [Asteroids](http://en.wikipedia.org/wiki/Asteroids_%28video_game%29) (1979) all realized using the patternpending Quad render-engine. Something for the whole family. 

{{< contribution "the-humble-quad-bundle" "Download Now!" >}}

---

huh,

we just had a look at the calender and noticed it's been already over a year since we told you about our next big thing. those who were there at the [node13](http://node13.vvvv.org) keynode event already got a glimpse but since then we kept a low profile on that thing again. we're now slowly coming to a point where things start working and we feel we can start sharing some more infos about what is to expect.

we're currently in the process of testing patching convenience and the usability of certain language features and paradigms. all with vvvvs traditional focus on ease of use. 

the games above are the result of our first round of applying the new language to some actual problemsolving. specifically we picked one very common problem for a start that is managing the life-time of objects. And the term "object" is key here. where in vvvv45 you need to manually synchronise several spreads representing the properties of your objects, in vvvv50 you can comfortably (on a high-level) think in actual objects that have data and operations that act on that data. so eg. when the spaceship shoots we can create a list of rockets that have a position and speed and and ask them to check if they hit one of the asteroids. and when they do, we can remove them from the list of rockets and tell the asteroid to explode...

here is a screenshot of the asteroids root patch. have a look around and see if you can read it. don't worry, it took us a while ourselves as well.

![](asteroids50.png)
(click image for a sharper version)

---

now here is a little vvvv50 faq:
**will it run on mac/linux?**
probably. it is all written in pure c#/.net which runs cross-platform via [mono](http://en.wikipedia.org/wiki/Mono_%28software%29). we haven't done extensive testing on this yet but are halfway optimistic. 

**will it run on devices?**
probably, see above answer. 
 
**when will it be available?**
rumours are there will be a node15...

**can i alpha-test?**
don't call us, we call you. we'll slowly start reaching out to testers when we feel it makes sense. 

**will it be faster than vvvv45?**
yes.

**will the first version be as amazing as vvv45 is now?**
nope. but in a good way. 

---

thats it for the first treat. expect more posts introducing some of the new features in detail in the coming months. but now next up is the release of beta32 scheduled for late april.