---
categories: "Development News"
author: "joreg"
date: "2012-07-16"
title: "vvvv-sdk update: git with unicode support"
slug: "vvvv-sdk-update-git-with-unicode-support"
description: ""
imported: "true"
---


helos,

so we had this problem in our vvvv-sdk git repository that some filenames:
 vvvv45\addonpack\lib\nodes\plugins\BézierSpline (Value) help.v4p
 vvvv45\addonpack\lib\nodes\plugins\BézierSpread (Spreads) help.v4p
 vvvv45\addonpack\lib\nodes\plugins\RösslerAttractor (Animation) help.v4p
 vvvv45\lib\nodes\native\BézierLine (GDI) help.v4p
 vvvv45\lib\nodes\native\BézierLoop (GDI) help.v4p
 vvvv45\lib\nodes\native\BézierSpread (Spreads) help.v4p
where not displayed correctly and always caused troubles when working with the repository (for some of you).

fortunately with the latest git for windows versions (>=1.7.10) there is full [unicode support](https://github.com/msysgit/msysgit/wiki/Git-for-Windows-Unicode-Support). so in order to benefit from those changes [please update git](https://code.google.com/p/msysgit/downloads/list?can=3) and then pull from upstream to get those files renamed properly. 

## read on!
if you now face troubles when switching branches (in case you have multiple) you'll have to delete those 6 files, switch to the other branch, remove those files again and merge-in the **develop** branch so that the commit that fixes the naming of those files comes to your other branch as well. 

that's odd, yes, but you'll only have to do it once. and there is a script that deletes the files for you in the sdks root dir. call
 ./remove-unicode-files
to save some clicks.

please let us know in the comments if you have troubles with this. 