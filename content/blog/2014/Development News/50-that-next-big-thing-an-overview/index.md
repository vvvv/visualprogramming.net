---
categories: "Development News"
author: "joreg"
date: "2014-09-30"
title: "50: That next big thing. An overview."
slug: "50-that-next-big-thing.-an-overview."
description: ""
imported: "true"
---


It's been a while again since we last dropped news about that next big thing we still call vvvv50 (50). So in order to get the hype slowly started here are some further notes...

{{< box >}}
Note:
All information given here is still preliminary and subject to change. 
{{< /box >}}

# Now
![45 patch](45-patch.png)
*45 patch. cool.*

First a quick recap of what we have with vvvv45 (45) so far: For the first ~6 years in existence vvvv was a rather monolithic thing. We sloppily called it "a multipurpose toolkit" and really only later found out ourselves that it was actually made of 4 parts: 
* a development environment (GUI)
* a visual programming language
* a runtime 
* a library of nodes

Still very much monoltithic in that there was no way for the user to change any of those. Only when in 2008 we introduced the plugininterface vvvv became more modular in that it allowed users to create their own nodes, and boy they did (->addonpack, dx11-pack, cv.image-pack, ...). 

So the library part was addressed but critizism remained: 
* meeehh runtime, we want to be able to run patches standalone 
* meehh cross-platform
* ufff spreading hell
* bäähh GUI..

According to the great Joel Spolsky the [single worst mistake](http://www.joelonsoftware.com/articles/fog0000000069.html) you can do when writing a software, is starting from scratch. So we did. 

# Then
![50 patch](50-patch.png)
*50 patch. still looking like shit.*


So here is our bold plan, this is what we're aiming at (longterm):
* a hybrid development environment (HDE) that will be able to host visual and textual languages. 
* a topofthepops visual programming language (with features known from c#)
* a compiler for that visual language (that creates cross-platform executables)
* a node library (closely modeled after .net)

Now if that sounds familiar as in "so whats the big difference?" then exactly. Instead of saying it will be completely different we can also say that it will be very much the same only much better. People tend to prefer hearing either. We couldn't decide...

Anyway we're at a point with this where we have bits from all 4 parts implemented and can do simple demos. But mostly we're still focusing on the "visual programming language" which we consider the foundation of the pleasure we want you to have with 50.

# Language Features
The great thing about 45 is still that it is simple to learn. Say that again..!? No really, if you approach it the right way (arrogant!) it actually is. There is a huge library of nodes that is hard to grasp, true, but the things you have to know about the visual language vvvv are only a few:
* spreads
* framedelay
* send/receive

Those are basically the language features of 45. Specifically the concept of Spreads is what makes vvvv stand out. It allows you to do simple things quickly but as things get more complex they are quite cumbersome to work with. We call this "low-level" while the goal of our new visual language is to be able to work more "high-level", ie. less thinking about concepts that make things easy to understand for the computer but more thinking in human terms. 

So with 50 we're introducing a number of new language features that will make it easier for the user to create more complex programs. Here is the buzz of what we have so far:
* userdefined datatypes
* functions
* interfaces
* generics
* events
* loops

Sounds scary? Naa... you'll see, all a breeze. Really the basics are not changing: You'll have nodes and pins to connect, a renderer, a quad, ... nothing new. If you're not using any of the new features you can still work kind of 45-style only then you'll not be seeing any of the productivity-increase you can gain from using them. 

Specifically as you'll not need to use them all right away and you'll be using them without noticing anyway. But in order to talk about them we need to call them names.

In a forthcoming series of blogposts we'll show you how working with those features will feel like. If you already like what you've read so far and want to buy the cat in the sack we're always up for a [/downloads|vvvv](flattr).
