---
categories: "vvvv beta Releases"
author: "joreg"
date: "2011-02-18"
title: "vvvv_45beta25.1"
slug: "vvvv45beta25.1"
description: ""
release: 
    major: "45"
    minor: "25.1"
    date: "2011-02-17"
    app_file: "sites/default/files/vvvv_45beta25.1.zip"
imported: "true"
---


![crack.exe](crack_vvvv.png)

dir patchers and coders,

exclusively for you. again. after all the featuridoo in beta24 and beta25 we thought we'd owe you a more stable one: here comes beta25.1 as a bugfix only release. focus has been put on 3 things:

foremost we wanted to get the dynamic plugin coding solid. this includes fixes and small features to the CodeEditor and the ProjectExplorer and tons of fixes to the backend. 

then we heard you moan about the enum "situation" and started to tackle that. this goes handinhand with the improved red-node warning system. generally you should now see more red-nodes which tell you they have a problem. this could now be a missing plugin, a runtime error or a missing enum entry like a missing channel at a receiver node or a missing device on your system... so whenever you feel something isn't right, startup the finder in global mode and check for red nodes.

lastly we still find people having trouble getting vvvv to run and therefore we tried to get the install experience more familiar. so now as you're used to with every great software you are using, first run crack.exe (included). if you get all green lights, just exit the crack and start_with_demo.bat (or vvvv.exe to get a vanilla patch). red lights indicate something is missing, pointing you to the right downloads. hope that helps. 

all in all a convenience release. but you'll be the judge of that.
your devvvvs.

ah and don't forget to get the suitable [addons45beta25.101](/blog/2011/addons45beta25.101)