---
categories: "News"
author: "microdee"
date: "2013-06-25"
title: "Fake Cubemap for dx11"
slug: "fake-cubemap-for-dx11"
description: ""
imported: "true"
originalType: "stuff"
thumb: "cubemap.jpg"
---


![Cubemap in md.bot.2](cubemap.jpg) 

Fake cubemaps in dx11 until a proper integration won't come. This stores the sides of the cube in a volume texture. but you can stick together any spread of textures (with 6 slices). Then in shader you can sample the volume texture as it was really a cubetexture with a direction vector. thanks to tonfilm for the plane hit test and sebl for the VolumeQueue shader.
contribution after i will tidy this up.