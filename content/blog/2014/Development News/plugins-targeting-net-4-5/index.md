---
categories: "Development News"
author: "Elias"
date: "2014-01-23"
title: "plugins targeting .net 4.5"
slug: "plugins-targeting-.net-4.5"
description: ""
imported: "true"
---


there has been quite some confusion in the past whether or not it is possible to write plugins for vvvv targeting the .net 4.5 framework.

.net 4.5 is an in-place update to .net 4.0, which means that as soon as you install .net 4.5, your 4.0 installation will be replaced and you'll be able to write plugins targeting 4.5. 
as it is an in-place update the assembly version (like System.Core 4.0.0.0) of the .net class library will stay the same, whether you target 4.0, 4.5 or 4.5.1 - so don't get confused by that.
* if you're using vvvvs built-in CodeEditor you can simply use 4.5 features. note however that our code editor doesn't do proper syntax highlighting and code completion for 4.5 features yet.
* if you're using VisualStudio or SharpDevelop to write your plugin you need to set the target framework to .net 4.5 in the project settings of your plugin. this needs to be done because VisualStudio and SharpDevelop use the [MSbuild](http://msdn.microsoft.com/en-us/library/0k6kkbsd.aspx) tool chain resolving referenced assemblies at compile time using a .net sdk installation, of which you can have several, for each individual .net release. our code editor uses [CodeDOM](http://msdn.microsoft.com/en-us/library/y2k85ax6%28v=vs.110%29.aspx) for resolving references using the currently loaded .net runtime and therefore this step is not required.

{{< box >}}
Note:
if you do target the .net 4.5 framework or use features of 4.5 in a dynamic plugin, the target machine where your patch will be running on needs to have a .net 4.5 installation, which is only available on windows vista and later versions.
{{< /box >}}

for more details regaring .net framework versioning see http://msdn.microsoft.com/en-us/library/bb822049.aspx