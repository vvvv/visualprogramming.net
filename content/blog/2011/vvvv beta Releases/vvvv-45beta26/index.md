---
categories: "vvvv beta Releases"
author: "joreg"
date: "2011-08-17"
title: "vvvv_45beta26"
slug: "vvvv45beta26"
description: ""
release: 
    major: "45"
    minor: "26"
    date: "2011-08-16"
    app_file: "sites/default/files/vvvv_45beta26.zip"
imported: "true"
thumb: "callmenames_2011.08.15-18.02.48.png"
---


helohelo,

this is beta26 speaking. first of all thanks to all my alphatesters who found some buggers that would have annoyed you quite a bit. so be grateful and if you still find a bug, blame it on them. see? i cannot be bothered... 

apart from tons of bugfixes in all of my most dirty corners which you'll only feel subconciously (if you're too lazy to read my [Change Log](https://betadocs.vvvv.org/changelog/index.html)) there are a few things you should be aware of:
1. changes to ioboxes
2. relative paths into modules
3. realtime cubemap
4. new fx compiler
5. startup time
<!--break-->
ad 1) 
![](callmenames_2011.08.15-18.02.48.png) 
all ioboxes now have their inputs/outputs on the left side. while this may mess a bit with the layout of existing patches. since especially newbies had troubles scrolling values they thought this change will be worth it in the long run. 

IOBox (Value Advanced) is now even more advanced in that it can be configured to Real (with configurable precision), Integer and Boolean all with arbitrary vectorsize, configurable default and even units for display. 
IOBox (String) also got more options to specify its subtype to be *Filename*, *Directory* and more..
all those settings are specifically useful when creating modules where you can now also specify pins to be only visible in the inspektor...

ad 2) 
not everyone may have faced this problem, but those who did rest assured, it is a thing of the past. until now the rule was: when feeding paths into subpatches/modules use only absolute paths (since relative paths were resolved incorrectly). now any IOBox (String) set to *Filename* or *Directory* will always return a correctly resolved absolute path. note though, that in rare cases this may break existing patches: check for cases where with string operations you concatenated paths manually. from now if you must make use of {{< node " AbsolutePath (File)" >}}, {{< node " RelativePath (File)" >}} and {{< node " MakePath (String)" >}} (which comes with the addonpack).

ad 3)
![](Kubus-DirectX%20Renderer_2011.08.15-18.07.33.png) 
thats an easy one. vvvv can finally render realtime cubemaps. horray. see the startup demopatch. 

ad 4) 
vvvv is now using a new fx-compiler which may result in some of your effects not to compile anymore and show up as red nodes. in those cases simply open the effect and check the error-message which most likely is just a simple syntax problem. 

ad 5)
![](callmenames_2011.08.17-19.15.38.png) 
one of your concerns was my startup time, which got worse with the last releases, i know. anyway now they brought me back up to speed, but note: the first time after a windows restart it still takes me a while, don't be fooled by that. this is where windows does some magic and when you restart me again i will be much quicker. for details about my new caching mechanism, see {{< node " NodeList (VVVV)" >}}.

thats mostly it. for all the gory details pls consult the changelog as usual. this time specifically don't forget to down the [addonpack](/blog/2011/addons45beta2601) which is full of --sick-- amazing stuff..

patch out,
yours vvvv.