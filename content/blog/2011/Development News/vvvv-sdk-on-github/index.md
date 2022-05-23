---
categories: "Development News"
author: "joreg"
date: "2011-11-08"
title: "vvvv-sdk on github"
slug: "vvvv-sdk-on-github"
description: ""
imported: "true"
---


helohelo,

over the years vvvvs codebase has grown quite a bit. it consists of private code and an ever increasing pool of open sources. in addition there are contributions by more than 15 individuals to the addonpack. 

we realized though, that working with so many contributors and a centralized version control system (like subversion, the one we used on [sourceforge](http://sourceforge.net/projects/vvvv)) became a bit of a pain. so in order to make all our coding lives easier we decided to follow the hype and move to [github](https://github.com/vvvv).

there you see the [vvvv-sdk repository](https://github.com/vvvv/vvvv-sdk) which contains all of vvvvs public sources plus all contributed sources from plugins in the addonpack (that were previously hosted on sourceforge). while at it we also simplified the repositories directory structure. so essentially you can now get everything you need to develop for vvvv with a single download and are ready to code (in case you're not sure: yes, this is amazing! you could tweet that. prolly smn like: #vvvv #sdk #github #gorgeous).

please refer to the [vvvv-sdk wiki page](https://betadocs.vvvv.org/devvvveloping/vvvv-sdk.html) on how to work with the repository (and note that this is not only useful for plugin-developers but also for module or help-patch contributors, as well as for effects magicians, freeframers, etc). if you're familiar with [git](https://secure.wikimedia.org/wikipedia/en/wiki/Git_%28software%29), it is as easy as "clone, build" to get a complete working/running copy of all of vvvvs public code plus all stuff in the addonpack. 

if you're not familiar with git, you'll likely hate it at first. we all did. but do yourself a favor, believe the hype and do some reading on using git (the vvvv-sdk page includes some links). it shold help you stop worrying...it took us more than a month, but we'd not change back.

also while at it we upgraded vvvv and all your plugins to using .net4 (to whom it may concern).

we realize there may be some questions left which we'll answer for you on [irc](https://betadocs.vvvv.org/chat.html) or in the forums as usual. have a good hakc.

yours,
devvvvs.

