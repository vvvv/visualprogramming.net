---
categories: "Development News"
author: "joreg"
date: "2017-09-29"
title: "VL: Using .NET Libraries and Writing Custom Nodes"
slug: "vl-using-.net-libraries-and-writing-custom-nodes"
description: ""
imported: "true"
---


finally,

this is basically where we'd hoped to have been for NODE17: Have the new "node importing" feature in a state where we're quite confident with its workflow. We had it working already enough to demo at NODE as [elias did at the keynode](https://www.youtube.com/watch?v=BKHbEWaHjcw&t=11701s) and we used it in the [VL Nodes and Libraries workshop](https://17.nodeforum.org/events/developing-for-vl/). But only now it is in a shape that we can talk more widely about it and actually recommend you to try it out for yourself in latest alpha builds.

## Using .NET Libraries

To create a node for vvvv, always someone has to write some code. In the beginning it was only us who could do that. With vvvv [vvvv40beta16](/blog/2008/vvvv40beta16) we introduced the PluginInterface that allowed everyone to write their own nodes. 

For vl we came up with a new feature that now allows everyone to simply use operations available in a any .NET library as nodes without the need for vl specific coding. This means access to an endless number of nodes at the expense of only a few clicks. Big? Huge!

Two common scenarios are:
- you know of a functionality that comes with .NET standard library... simply go to your document > Dependencies > Files > Add .NET Framework Assembly, choose the assembly the functionality you're looking for is in and boom: you can now browser that assembly via the nodebrowser
- you find a .NET library you want to use on the internet or <https://nuget.org>... download it, go to your document > Dependencies > Files > Add Existing... choose the file and boom again: browsable via the nodebrowser

As good as this sounds and actually works in many cases, there are cases where using thirdparty libraries directly like this has a few peculiarities, stemming mostly from the fact that those libraries are usually not made to be used in a dataflow scenario like VL. For details, see the gray book on [Using .NET Libraries](https://vvvv.gitbooks.io/the-gray-book/en/reference/libraries/using-net-libraries.html).

## Writing Nodes in C# or F#legacy.vvvv.org/pluginspecs/

Now that we can use any code from thirdparty libraries we can obviously also write our own nodes for VL, basically using any .NET language (so far we've tried with C# and F#). And the good news here is that it is dead-simple. While a plugin-developer for vvvv needs to follow the [PluginInterface](https://legacy.vvvv.org/pluginspecs/), ie. have some understanding of vvvvs workings, writing a node for VL requires no VL specific knowledge!

The simplest node you can write in c# looks like this

```
public static float Add(float input, float input2)
{
   return input + input2;
}
```

Build that into a .NET .dll and then simply use the library as mentioned above. For more details and example projects for C# and F# see the gray book on [Writing Nodes](https://vvvv.gitbooks.io/the-gray-book/en/reference/libraries/writing-nodes.html).

## Still Missing

Thankyouverymuchthatwasabouttime I hear you say and whatabouttherest?! Right. Now that creating nodes and libraries for VL is so trivl, obviously everybody will start doing it like crazy and we'll hopefully end up with a lot of nice packages and contributions soon. So how do we expect to handle those? Collect them in an addonpack again? Upload everything to the Contributions again? 

No. 

Here is the full workflow that we're aiming at:
- Save package from VL editor
- Upload package to nuget.org from VL editor
- Search and download package from nuget.org via a packagemanager (similar to VPM)

Sounds simple enough, but believe me for once, if you're looking at the details, this includes unsolvable problems (think package dependencies, versioning). Don't want to bore you with the details, just want to say, we're at it but as always, it may still take some time...

--- 

So now go ahead, use your favorite .NET libraries like a pro and hit us in the forum if you encounter any troubles.. Even if you don't encounter any troubles we'd love to hear about what you're working on. Try the new forum category [WIP](https://discourse.vvvv.org/c/wip) for this!
