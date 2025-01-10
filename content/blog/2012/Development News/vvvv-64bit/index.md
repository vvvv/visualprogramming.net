---
categories: "Development News"
author: "joreg"
date: "2012-11-20"
title: "vvvv 64bit"
slug: "vvvv-64bit"
description: ""
imported: "true"
---


oui..

vvvv has finally arrived in the age of 64bit computing. to you this means you can finally use all of your PCs memory. to us it means we have to maintain two builds now. but nevermind. service is our success. 

so basically "out of memory" messages should be out of our memories (cheese us!) soon and content/texture heavy vvvv-applications ahoi. in theory due to the compilers use of SSE2 instructions things should be generally faster as well..but we already noticed this doesn't seem the case just yet. generally. 

now available from: [alpha builds](https://legacy.vvvv.org/downloads/previews)

and of course every beauty has its beast. so here is a list of a couple of things that are not yet (probably never will be) working in the 64bit builds:

## missing from core

* all nodes in the FreeFrame category
* some nodes of the DShow9 category
* all nodes of the ODE category rely on the discontinued delphi wrapper of ODE (RIP)
* {{< node "Lumax (Devices)" >}} relies on a proprietary .dll (RIP)
* {{< node "DMX (Devices ecue Butler)" >}}, {{< node "DMX (Devices ecue Texture)" >}}, {{< node "eNet (Devices ecue Config)" >}}, {{< node "eNet (Devices ecue Info)" >}} rely on a proprietary .dll (RIP)
* probably some more nodes of the Device category
* {{< node "Tidy (XML)" >}} relies on a discontinued opensource project (RIP)
* {{< node "Styx (Windows)" >}} relies on an external winlockdll.dll which we could probably build ourselves from http://www.codeproject.com/Articles/7392/Lock-Windows-Desktop anyone?

## missing from addonpack

most of the addons already work with the 64bit build. below is a listing of those which still need some treatment. chances are good that we'll get most of them to run..given some time.

### need some bugging towards {{< user "vux" >}}

* Assimp
* Bullet
* Box2d
* Bass
* StructureSynth
* MSKinect
* FitEllipse, MinimumAreaRect, KMeans
* all of his EX9.Geometry nodes

### some devices

* all Phidget stuff
* LD2000 (Devices)
* LinBus (Devices)
* RS232 (Devices Spreadable)
* NWTouchData (Devices NextWindow)
* SpaceMouse (Devices)
* Tablet (Devices Wintab)
* uEyeCam (Devices)
* WiiMote (Devices)

### misc

* Ssh (Network)
* Arduino
* OpenNI
* FileStream (EX9.Texture VLC)
* FileStream (Irrklang)
* HTMLTexture
* Flash (EX9.Texture) (RIP)

## developers

when you want to debug 64bit stuff use:
 scripts/fetch-binaries --platform=x64
in the bash to get the according executables and in the Addonpack.sln set the Configuration to x64. 