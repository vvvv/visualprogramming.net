---
categories: "News"
author: "woei"
date: "2016-01-10"
title: "introducing Scripter"
slug: "introducing-scripter"
description: ""
imported: "true"
thumb: "0_2016.01.10-17_r.png"
---


as the [Scripter contribution](https://legacy.vvvv.org/contribution/scripter-%28csharp%29) title describes - for your ultimative hacking comfort in vvvv...
---
### two reasons this might be interesting for you:

1. you are new to this textual c# stuff but are eager to get into it
2. you hack around vvvv a lot, know c# and want to get things done quickly

##  1) for the curious

let's say your new year's resolution was to start to extend your vvvv skills with coding power (since you noticed that doing more advanced stuff mostly requires some kind of textual addition to patching).

[dynamic plugins](https://betadocs.vvvv.org/devvvveloping/dynamic-csharp-plugin-reference.html) are a powerful feature and probably the way to go. you clone the template and start changing the code and don't worry about nugets, referencing assemblies, compiling as you would have to in any other IDE.

however, the slight hassle starts once you decide you want more pins. maybe even a bin sized one. at this point you have to wrap your head around the overall spreadcount, how to write the loop around the thing you want to do, when to access which slice or which bin, etc...

this is where scripter might ease away the learning pain since it **takes care of your [Spreads](https://betadocs.vvvv.org/using-vvvv/spreads/index.html)** and does the structural In-Out part (**creating pins** and reading or assigning values). it attempts to keep you focused on the functionality only.

now it is a little bit more true, that you can google some code snippets and just paste them in vvvv to see what it does:

![copy pasting super formula](0_2016.01.10-17_r.png)
*copy pasted superformula from <http://paulbourke.net>*

---
###  2) for the hacker

aside from the structural stuff mentioned already mentioned above you can really hack here. meaning not giving thoughts about proper filenaming (when versioning stuff). simply test some code snippets **without files** cluttering your harddrive as dynamic plugins have. scripter stores the code in a config pin. no more portability issues.

the first public static method is parsed for IO. you can of course have as many methods you like. think recursion...

and the config pin solution brings another advantage: scripter works **per instance**

![multi instance binsize whatever](1_2016.01.10-18_r.png) 
*multi instance binsize stuff accessing loop index*

---
###  about the guts

scripter inserts the string you provide into a template c# file and compiles it in memory. it reflects the first public static void method and creates the pins for each parameter.
each frame the plugin loops over the maximum spreadcount, passes the values to the method and writes the out parameters to the out pins.
---
###  futures

since the feedback i got so far was always the question about missing **code-completion**...
{{< box >}}
* either modify the internal vvvv codeeditor to be usable with this concept (and benefit from all the features it has already). might take some time
or
* or go on the hard way with the current texteditor (avalonedit) and (re)implement everything from scratch. will take even more time
{{< /box >}}

other ideas would be:
* multiple methods: think different methods per slice, or selection via enum
* give access to usings and references
* a version without or just a flag to not use the automatic spreadmaxloop, but still with automatic pin creation
* ...
---
####  anyways

feedback and discussion welcome
and have fun with the little new years present


 
