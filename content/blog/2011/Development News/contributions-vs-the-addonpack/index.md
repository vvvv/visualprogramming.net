---
categories: "Development News"
author: "joreg"
date: "2011-11-14"
title: "contributions vs. the addonpack"
slug: "contributions-vs.-the-addonpack"
description: ""
imported: "true"
---


on `optical-flow` elliotwoods commented:
"i think the AddonPack is a bit of a failed concept. It works for some users but I personally hate the idea of dumping all available addons into my vvvv folder." 

just to clarify: we are aware that the situation with contributions and the addonpack is not perfect. the ideal solution would of course be a fullblown package-managing-system that handles:
* dependencies
* multiple sources
* experimental/stable versions
* a convenient browser
* automatic download of missing plugins 

sou..but until we have such a tool we think the contribution/addonpack duality works quite well. here is why:

without an addonpack we'd have the forum full of such:
"get this patch, works with beta26, needs contribution A version 2, B version 1 and contribution C version 3 (the one you find on myblog.com/contribC, the one on vvvv.org/xyz is outdated!)

an enduser (and we all are!) should not need to know about addons. for the first contact of a user with a node it is not important for him to know if it is an addon or a native node. if he is interested in that though, he can easily find out via the author-tag in the nodebrowser and find out more about a specifc addon. 

the addonpack is a single download for the enduser that makes sure he gets working versions of all addons and their dependencies for a specific vvvv release. true, this adds a bit of a startup-lag but we think this is a good tradeoff for potentially reducing the problems of missing or out of date addons. no fiddling around with individual addons, just get the pack, don't touch it and you should be save 90% of the time.

now not every contributor wants to deal with github so we introduced a second standardized way to contribute addons, the [contributions](https://legacy.vvvv.org/contributions). here it is easy for everyone to upload stuff. also the integration of downloads into ones vvvv installation [is](https://betadocs.vvvv.org/using-vvvv/patching/using-addons.html) easy]: make a directory "contributions" say on your desktop, reference that directory in vvvvs root and put the downloads in there. done.

of course the contributions bare the risk of becoming out of date but again that is an accepted tradeoff in order to make it possible/easier for more people to contribute.

that being said, ideally all addons would be developed in a fork of the [vvvv sdk](https://github.com/vvvv/vvvv-sdk). like this it is very convenient for fellow coders to test/contribute to your stuff by simply pulling your feature-branches. in order to get an addon tested by people not familiar with github it makes perfect sense to upload binaries to the forum and get them discussed.

when an addon is ready for primetime all a developer has to do in order to get it included in the addonpack is then to send a pull-request to the main vvvv-sdk repository. once accepted we can all be sure that a version of all plugins working with a specific release will be available for all users with a single download. 

and somewhere over the rainbow when we have the packaging-system we can stop distributing an addonpack and the system works directly with git in order to serve you always the freshest experimental/stable versions of only specifically requested addons (from even potentially different repositories, not only the vvvv-sdk). see? easy as cake. 

till then, thanks for all your great work.
your devvvvs.