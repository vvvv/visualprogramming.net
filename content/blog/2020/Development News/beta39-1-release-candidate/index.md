---
categories: "Development News"
author: "joreg"
date: "2020-04-22"
title: "Beta39.1 Release Candidate"
slug: "beta39.1-release-candidate"
description: ""
imported: "true"
---


helo evvvveryone,

we're preparing for a **vvvv beta39.1** release and here is a first release candidate. As you'll see in the [change-log](https://betadocs.vvvv.org/changelog/index.html) it is a rather minor update with only fixes. It does not yet include the anticipated update to latest VL, which we save for upcoming beta40. We just want to get another stable version out before such a bigger update that including latest VL will mean. 

Remember that via VL you have access to many more goodies. Here is a convenient list of VL nugets that work with this release. To learn how to install nugets please consult [this documentation](https://vvvv.gitbooks.io/the-gray-book/content/en/reference/libraries/dependencies.html#_manage_nugets) and then use these commands to install them:

{{< box >}}
Nugets requiring a specific version to work with beta39.1
(To use the latest version of these nugets you'll have to wait for upcoming beta40 or use gamma2020.1)
 nuget install VL.OpenCV -Version 0.2.141-alpha
 nuget install VL.Devices.Kinect2 -Version 0.1.45-alpha
 nuget install VL.Devices.Realsense -Version 0.1.7-alpha
 nuget install VL.GStreamer -Version 1.0.18-gadcd7f95e5{{< /box >}}

{{< box >}}
Nugets that do not require a specific version:
 nuget install VL.Audio -pre
 nuget install VL.IO.M2MQTT -pre
 nuget install VL.IO.NetMQ -pre
 nuget install VL.2D.DollarQ -pre
 nuget install VL.2D.Voronoi -pre{{< /box >}}

If you have other public nugets that you tested to work with this release, please post them in the comments so we can all mention them in the upcoming release notes!

## Download
[vvvv beta39.1 x64](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:31963/artifacts/content/vvvv_beta_39.1-4325_preview_x64_setup.exe) RC1
[vvvv beta39.1 x86](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:31964/artifacts/content/vvvv_beta_39.1-4325_preview_x86_setup.exe) RC1

And as always, please test and report your findings!
