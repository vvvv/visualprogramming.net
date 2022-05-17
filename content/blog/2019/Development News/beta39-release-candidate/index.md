---
categories: "Development News"
author: "joreg"
date: "2019-11-13"
title: "Beta39 Release Candidate"
slug: "beta39-release-candidate"
description: ""
imported: "true"
---


Patcher People!

It's been a while since the b38.1 release. But finally we're getting ready to release an update to vvvv beta. Here is the release-candidate, meaning it has all we wanted to add for beta39. We only want to give you a chance to test this with your current projects so we have a last chance to squash any new bugs, you may encounter.

![](PBRTextured%20%28DX11.Effect%29%20help-Renderer_2019.10.02-21.37.39.png)
*Fancy shading with the new PBR effect contributed by {{< user "flux" >}}*

Here are the highlights of the upcoming release:
## General
* We get rid of the term 'alpha' and replace it with the term 'beta-preview' to be in line with gamma and gamma-preview
* Finally we ship an installer! Just a few clicks and you should have vvvv beta running. 
** Optionally installs the addonpack for you.
** Still we left good old setup.exe there but renamed it to config.exe, since you don't necessarily need to run it anymore to set things up
** We're also planning to offer an offline-installer, but only for the actual release (not every preview)
** We're also keeping the .zip downloads 
* For convenience, by default new patches now save to %User%\Documents\vvvv\beta(-preview)\Sketches. Like this you can quickly find your recently created patches via a new main menu entry: *Recent Patches*
* We've added two shortcuts to the main menu: 
** Show Installed Packs: opens explorer pointing to the \packs directory
** Download Contributions: opens a browser pointing to the contributions page
* vvvv beta now supports [RCP](https://github.com/rabbitControl/RCP) out of the box, which allows you to expose IOBoxes to control them remotely. See the helppatch of Rabbit (RCP) for details.

## New nodes
* WebSocket (Network Client)
* PBR (DX11.Effects), PBRInstanced (DX11.Effects)
* PBRTextured (DX11.Effects), PBRTexturedInstanced (DX11.Effects)
* MaterialPropertiesPBR (DX11.TextureFX)
* Lights (DX11.Layer PBR)

## New in VL
If you're also using VL already, good for you, because here you'll find even more goodies you will benefit from: 
- [Shiny Tooltips](/blog/2019/vl-tooltips)
- [IOBoxes 2.0](/blog/2019/vl-the-big-iobox-update)
- [Regular Expression nodes](/blog/2019/vl-regular-expressions)
- [Pingroups](/blog/2019/vl-input-and-output-pin-groups)
- If you're looking for the *Manage Nugets* menu entry under *Dependencies*: this has been moved to the Quad menu
- and quite some more as we've listed in the [gamma preview changelog](/blog/vvvv-gamma-2019.1-preview#changelog)

Besides those, it is important to understand that with VL you also have access to numerous more libraries that have been released recently. A lot of new packs these days come as nugets. For an overview, see [VL packs on nuget.org](https://www.nuget.org/packages?q=VL) and you can use them all in vvvv beta, via VL...

## Download
[vvvv beta39 x64](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:31204/artifacts/content/vvvv_beta_38.2-4290_preview_x64_setup.exe) RC11
[vvvv beta39 x86](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:31204/artifacts/content/vvvv_beta_38.2-4290_preview_x86_setup.exe) RC11

## Changelog for Candidates:
### RC11
- fixes on bumpy Damper 
- fixed SVGWriter 

### RC10
- fixes issue with girlpower\VL\_Basics\ParticleSystem not loading 

### RC9
- Press IOBox now releases when left button is click while right-pressing
- Fixed a bug in OSC nodes
- Dampers can now be used in loops 
- fixed image tooltip
- fix on tooltip layout
- some color operation improvements
- can now create a node while linking by simply starting to type

### RC8
- updated to latest VL
- removed a few unnecessary Damper versions
- fixed time step calculation of Damper (Fast)

### RC7
- Installer finds path to Powershell.exe on it's own
- VL close dialog lists unsaved documents
- some minor fixes on VL Damper nodes
- fix for C# node input pins that access an empty spread

### RC6
- SaveAs inside VL editor back again - node references in v4p should now get updated correctly
- Fixed a few crashes of VL serializer when dealing with object fields
- PBR nodes should show up in nodebrowser again
- SelectNodesDontScroll added 

### RC5
- Regions now show timings again
- Node tooltips now show timings for the current instance
- Image download from GPU will again happen in AsImage node to avoid breaking changes and potential crashes in existing patches
- installer adds vvvv folder and process to Windows Defender exceptions

### RC4
- changed AppData location for nugets to \beta(-preview)_{architecture}\nugets
- removed AppData location for packs again (to be reconsidered after b39)
- in VL outboxes are working again
- installer checks and installs DX9 and VC++ Redistributables correctly

### RC3
- Ctrl+P now creates new patch pointing to active patchs directory
- fixes problem with AsImage (DX11) 
- fixes problem with saving a new patch to \Sketches

### RC2
- adds options to register .v4p and .vl from the installer
- fixes an issue with the installer popping up config.exe unnecessarily
- fixes Ctrl+G
- fixes Keyboard (Devices Windows) Enabled pin
- fixes global references to .fxh includes for dx9 effects

---

So please give this release candidate a spin and be sure to report your findings, preferrably in the forum using the "preview" tag, or also just by posting a comment below.