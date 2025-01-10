---
categories: "Development News"
author: "joreg"
date: "2012-04-07"
title: "Refactor to Subpatch"
slug: "refactor-to-subpatch"
description: ""
imported: "true"
---


ok, this one has been overdue since quite a while. cheese us!

you're patching away and things start to get messy but you're too lazy to **refactor parts of your patch to a new subpatch** in order to clean up a bit. too many clicks involved and it is only for cleaning up...boring.

there are not many shortcuts left, but **ctrl+g** seems quite suitable (in fact theres only one more major shortcut left now..still to come..) for a task that groups selected nodes to a new subpatch. admittedly it would be even more useful if the new subpatch would not even have to be saved in an extra file but unfortunately that requires some more work still. so hope this saves us some clicks already...

now available in latest [alpha builds](https://legacy.vvvv.org/downloads/previews).
reports to the [alpha forum](https://discourse.vvvv.org/) please. 

known issues:
* redo (after undoing ctrl+g) does not work
* grouping an unsaved subpatch does not work
* --does not work inside unsaved patches--
