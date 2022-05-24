---
categories: "Development News"
author: "Elias"
date: "2013-11-28"
title: "NuGet development packages"
slug: "nuget-development-packages"
description: ""
imported: "true"
thumb: "vvvv_nuget.png"
---


When writing a plugin for vvvv the developer needs to at least add a reference to the VVVV.PluginInterfaces assembly. In order to do so there've been two choices up till now:
1. Reference the assembly directly (e.g. from a vvvv-release)
2. Reference the VVVV.PluginInterfaces project from the vvvv-sdk
Both of these choices have drawbacks. Referencing directly requires the developer to update the assemblies manually with every new vvvv release, referencing the project enforced the inclusion of the whole vvvv-sdk which is quite large and sometimes tiresome to build.

Thanks to [NuGet](http://nuget.org) (a package manager for the windows development platform) and [TeamCity](http://www.jetbrains.com/teamcity/) (a build and NuGet server) a third choice emerged without the drawbacks mentioned above: referencing the assembly via a NuGet package.

![](vvvv_nuget.png) 

Everytime our build server builds a new version of vvvv, it will also create a bunch of NuGet packages (VVVV.PluginInterfaces, VVVV.Utils, etc.) with the appropriate version information. When doing an alpha build those packages will be considered as a so called pre-release package by NuGet, when doing a beta build those packages will be considered as a stable release.

{{< box >}}
Note:
All packages prefixed with VVVV. are intended to be used for plugin development only and will therefor install all references in a way so that they won't get copied to the output folder (Copy Local set to false). This was done to avoid assembly conflicts at runtime.
{{< /box >}}

Now in order to create a plugin for vvvv by using NuGet, the developer has to:
1. Ensure the project is targeting at least .NET Framework 4.6.1 and is configured with the platforms x86 and x64.
2. Add http://teamcity.vvvv.org/guestAuth/app/nuget/v1/FeedService.svc/ as a NuGet package source in the settings of the NuGet package manager shipped with either Visual Studio or Sharp Develop.
3. Select the VVVV.PluginInterfaces package and click install.

NuGet will now download and add all the necessary dependencies to the project file and whenever a new version of vvvv is available, the NuGet package manager will ask whether or not to update the installed packages.

{{< box >}}
Note:
When installing the packages it might happen that the IDE won't find the referenced assemblies immediately (putting a warning sign on it, or not even showing them). In such a case ensure that the solution build configuration is setup properly (most of the VVVV.* packages are only available for x86 and x64, not AnyCPU) and/or reload the whole solution.
{{< /box >}}

**As of version 34.101 the packages should work in AnyCPU - for details see [here](forum)**

{{< box >}}
Note:
EDIT: 
As of beta35 the official vvvv packages on nuget.org contain the AnyCPU configuration. no need for 'pre-release' setting or special nuget server anymore, unless you need features that are only available in the current alpha releases.
{{< /box >}}