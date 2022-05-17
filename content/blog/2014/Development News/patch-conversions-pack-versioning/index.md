---
categories: "Development News"
author: "gregsn"
date: "2014-02-09"
title: "Patch Conversions & Pack Versioning"
slug: "patch-conversions-pack-versioning"
description: ""
imported: "true"
---


Pretty early in its devvvvelopment vvvv introduced an automatic patch conversion system that allowed us devvvvelopers to change nodes' behaviours, namings and defaults under the hood, while converting users' patches in a way that no damage is done to old patches.

The diffff.xml file in vvvvs lib folder has all the info of changes between the different versions.
In many cases we ship legacy nodes with the unchanged behaviour but now change their name to reflect that they are legacy. The diffff.xml then only needs to convert the old patches in a way that the legacy node is taken and not the node with the new behaviour...

Since we now also have pretty huge packs, managed by external devvvvelopers, we now also introduce versioning per pack.
Packs from now on may ship a version.info file and a diffff.xml file.
When vvvv starts up it figures out which packs are loaded and stores the versioning infos of all packs into the patches to be able to convert them later on.

If you are an author of a pack or just want to learn more about pack versioning, please have a look here:
https://github.com/vvvv/vvvv-sdk/tree/develop/vvvv45/tests/testPack 
This folder shows you some ideas about conversion and also back conversion.

If you feel like it, you could temporarily move this folder into your packs folder to have a try.

Read the diffff.xml for further info. You might want to use this as your starting point when creating your own diffff.xml.

have ffffun!!