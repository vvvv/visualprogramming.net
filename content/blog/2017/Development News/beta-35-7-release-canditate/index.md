---
categories: "Development News"
author: "Elias"
date: "2017-06-17"
title: "Beta 35.7 Release Canditate"
slug: "beta-35.7-release-canditate"
description: ""
imported: "true"
thumb: "gw3IWyGkC0rsazTi.gif"
---


![](gw3IWyGkC0rsazTi.gif)

My dear vvvv users,

we've scheduled beta 35.7 for release at the end of the week. To make it as polished as possible here comes a release candidate for you to tamper with. Download it, try it and report any findings in our forums.

Also note that this release will be the last one before NODE17. So workshop hosts especially should have a look at it whether or not everything they need is in there and working.

The noteworthy changes are

**VVVV**
* All Editors from the [editing framework](https://betadocs.vvvv.org/topics/graphics/direct3d-9/basics/editing-framework/editing-framework.html) have a [Gizmo](/blog/2017/welcome-gizmo) manipulator.
* Links will be drawn red when the pins don't match anymore. Invalid links are stored in patches so that they can be reestablished when they match again. This should be helpful for dynamic plugin and VL development.
* More love for enums: enum spread shuffling nodes finally behave as wanted, GetSlice added, simplified internal encoding. s/r nodes performance restored
**VL**
* You can search inside patches (Ctrl+F) or across all the currently opened VL documents (Ctrl+Shift+F)
* The whole document structure can be browsed with the new solution explorer (Ctrl+J)
* The default patch type "Patch" is now called "Process" and all patches types in the category VVVV are now picked up as nodes inside vvvv (previously only "Class" used to work)
* Unified user interaction - double click always opens node browser, right click always opens context menu
* Links will now snap to pins

For an in depth list of changes have a look at the [changelog](https://betadocs.vvvv.org/changelog/index.html).

### Download
**64-bit**
[vvvv (35.7_rc5)](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:19525/artifacts/content/vvvv_50alpha35.7_x64.zip)
[addons (35.7_rc5)](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:19525/artifacts/content/addons_50alpha35.7_x64.zip)
**32-bit**
[vvvv (35.7_rc5)](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:19524/artifacts/content/vvvv_50alpha35.7_x86.zip)
[addons (35.7_rc5)](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:19524/artifacts/content/addons_50alpha35.7_x86.zip)

This release is intended to be the last one of the beta 35 series. We changed [plans](/blog/2017/vvvv50beta35.5) a bit and deliberately kept the rather big internal feature branch (which allows you to drag'n drop .NET assemblies onto the patch) out of this release as it will need a longer testing period in the alpha build channels.