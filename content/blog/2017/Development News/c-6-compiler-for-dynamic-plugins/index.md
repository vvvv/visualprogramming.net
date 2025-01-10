---
categories: "Development News"
author: "joreg"
date: "2017-11-30"
title: "C#6 Compiler for Dynamic Plugins"
slug: "c6-compiler-for-dynamic-plugins"
description: ""
imported: "true"
thumb: "c-60-what-c-is-_r.jpg"
---


NEWS!

If you're writing your own dynamic plugins in C#, we got something for you! If not, still read on, so yo know, just in case..

The C# language is evolving all the time with nifty features. In order to be able to use those, you need a suitable compiler that understands those. So far, the C# compiler included with vvvv only supported language features of C# versions lower than 6. But no more:

{{< box >}}
Latest alphas suppport all [features new in C# 6](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-6).
{{< /box >}}

![](c-60-what-c-is-_r.jpg)
*image grabbed off [the internet](http://image.slidesharecdn.com/filipekberg-dddbrisbane-csharp6-141207042920-conversion-gate01/95/c-60-what-c-is-_r.jpg?cb=1417927109)*

Caveats: 
* You need to have either Visual Studio 2015 or [MSBuild Tools 2015](https://www.microsoft.com/en-us/download/details.aspx?id=48159) installed
* You have to enable the new compiler by using the commandline parameter **/cs6** when starting vvvv

{{< box >}}
Note:
UPDATE: 
This is now activated by default for everyone even without the caveats as mentioned above!
{{< /box >}}
//legacy.vvvv.org/downloads/previews
So get yourself a fresh [alpha](https://legacy.vvvv.org/downloads/previews) now and do yourself a favor by using those new language features.