---
categories: "Development News"
author: "woei"
date: "2016-12-12"
title: "VL: Many Paths Lead to Rome"
slug: "vl-many-paths-lead-to-rome"
description: ""
imported: "true"
---


after [let-me-present-to-you-file-io](/blog/2016/let-me-present-to-you-file-io), here comes another *thou shall not be afraid*
![known nodes](known.png)
*handling files and folders as usual*

the last post demoed reading and writing files... but the shown iobox with the filename inside actually gracefully skipped the part on how to get to your file. so up above you see the set - well known to any vvvv user who - which takes care of handling **directories, files, folders, paths,**...

guess, no need to say much about those. Watcher and File/FolderDialog are of course **non-blocking** and Copier and Mover do their work **asynch**ronously in the background.
-----
####  so what's the Path thing?
VL extends the behaviour of vvvv string ioboxes a bit. in vvvv you could open up a folder or file selection from the iobox directly. you can again do that, of course. however, the system now knows about **Paths**, which is more than just a simple string. sounds a bit academical, right...

![path makes this possible](nowPossible.png) 

the nice thing about this Path Type is that **everything feels more like file handling in the explorer**
* most nodes now work on both file and directory out of the box: Modified, Exists, Get/SetAttributes...
* Size gives you either the one of the file or, in case of a folder, of everything that's inside
* Copy, Move, Rename and Delete do their job on files as well as folders: eg. no need to move every single file inside a folder to a new location anymore (juggling the strings to preserve the subfolder structure...)
* **traversing** file/folder hierarchies is now a piece of cake (think asset management!): you have parent/children relation - not a flat spread of strings anymore 






