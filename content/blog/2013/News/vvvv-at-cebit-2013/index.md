---
categories: "News"
author: "joreg"
date: "2013-03-06"
title: "vvvv at CeBIT 2013"
slug: "vvvv-at-cebit-2013"
description: ""
imported: "true"
thumb: "20130305_153334.jpg"
---


According to wikipedia the [CeBIT](http://en.wikipedia.org/wiki/CeBIT) is the world's largest and most international computer expo. So be it. And where superlatives are vvvv is not far. 

{{< box >}}
We are aware of the following 2 installations running on vvvv. If you know anymore please let us know, so we can add a pointer here.{{< /box >}}

### Cloud Arena
![](20130305_153334.jpg)
Videoplayback and interactive content for a mega flip chart for two moderators talking about Business-Services of the Deutsche Telekom.
* 18 60" frameless LCD displays
* Boygroup: 6 clients, 1 server
* generative layer (particle and mesh GPU madness) 
* 42 minutes of prerendered footage as .dds DXT5 sequences played via {{< node "Player (EX9.Texture)" >}}
realized by [m-box](http://m-box.de) with {{< user "ceeyaa" >}} and {{< user "lasal" >}} on behalf of [zweimaleins](http://www.zweimaleins.de)
Telekom, hall 4

### Videochat
![](IMG_20130304_14_r.jpg) 
A mega video chat for two speakers demonstrating interactive collaboration.
2 synchronized setups with each:
* 3840x1080 output on a 8 screen video wall with 5m length.
* 3x full HD live video input stitched to a panorama by homography matrices calculated by {{< user "elliotwoods" >}}.
* 5 layers of prerendered content as .dds DXT5 sequences equals 10x fullHD pixelrate read from a SSD RAID system (>500Megapixels per second) with {{< node "Player (EX9.Texture)" >}}.
* integrated transparent flash app via {{< node "HTMLTexture (EX9.Texture Url)" >}} with another live video chat to berlin.
* 3 matched kinects to track the speaker gestures that control the application

realized by {{< user "tonfilm" >}}, concept and design [zweimaleins](http://www.zweimaleins.de)
Telekom, hall 4