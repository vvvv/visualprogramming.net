---
categories: "Development News"
author: "joreg"
date: "2015-06-14"
title: "VL Feature Voting"
slug: "vl-feature-voting"
description: ""
imported: "true"
---


dir people interested in our nextbigthing that is VL,

we've taken a bit of rest after [node15](http://node15.vvvv.org/) and are getting back into our business of creating serious visual programming experiences...

Feedback regarding VL so far has been cautiously positive and some of you already encountered the most pressing features that are still missing. On our road ahead we want to ask you to help us identify the best order in which we implement things. So of our long list of features that we're definitely going to implement, we've extracted 5 for you to vote on. 

Regarding the selection: Those features are only the top five results of our internal voting. Also they only include features we thought we can clearly communicate. Of course there are many other issues we'll address independently anyway.

![](Quote.jpg)

Think shortterm: Which of the following features could your patching most benefit from?

<!--{SPLIT()}-->
* **Type Browser:** At the moment you still have to know the exact spelling of possible types by heart. The type browser will assist you when annotating the type of a pad by providing an auto completion list with all types valid in the current scope. 
<!--~~~-->

[/blog/vl-feature-voting?1|Type Browser](flattr)
<!--{SPLIT}-->

<!--{SPLIT()}-->
* **Automatic Type Converters:** At the moment some links (like Float64->Float32) can not simply be made without manually placing a converter node (like: ToFloat32) in between. We'll introduce special links which convert a value from one type to another and will directly allow you to make such connections saving you quite some clicks. 
<!--~~~-->

[/blog/vl-feature-voting?2|Automatic Type Converters](flattr)
<!--{SPLIT}-->

<!--{SPLIT()}-->
* **Custom Enum Types:** At the moment you cannot define your own enum types. You need this in order to be able to create operations like “Map” that can switch between different modes, like Wrap, Float, Mirror...
<!--~~~-->

[/blog/vl-feature-voting?3|Custom Enum Types](flattr)
<!--{SPLIT}-->

<!--{SPLIT()}-->
* **ForEach Component Region:** At the moment when you want an operation to be applied to all components of a vector at the same time you'll have to split and then join it again. We'll introduce a new region especially made for vectors which executes its body for each component of a vector. This allows you to use nodes working with scalar values on vectors without doing the splits and joins manually.
<!--~~~-->

[/blog/vl-feature-voting?4|Foreach Component Region](flattr)
<!--{SPLIT}-->

<!--{SPLIT()}-->
* **Dynamic pin counts:** At the moment nodes always have a hard-coded amout of pins. Nodes with potentially dynamic pin counts (Cons, Group, ...) will automatically get a pin added when the mouse is close and a pin removed when a link gets deleted. This means no more changing the pin count in the inspector.
<!--~~~-->

[/blog/vl-feature-voting?5|Dynamic Pin Counts](flattr)
<!--{SPLIT}-->

**Voting ends on June 14th.** 

Why Flattr? This excludes a large number of people who can vote?! Well, first, anyone can easily [sign up to Flattr here](https://flattr.com), and on the other hand it specifically invites those who probably take this a bit more seriously. So this is an experiment. Looking at [the list of vvvv flattr users](https://vvvv.org/404) it seems that we have a potential of 27 votess in total at the moment. Lets see how this goes..

Still not sure about that flattr thing? Read the rationale again: [Flattr on vvvv.org](/blog/2014/flattr-on-vvvv.org).

Very much looking forward to your votes,
devvvvs.
 