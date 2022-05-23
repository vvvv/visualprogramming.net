---
categories: "Development News"
author: "joreg"
date: "2015-01-29"
title: "50: Generics"
slug: "50-generics"
description: ""
imported: "true"
---


helo patchers,

here is the fourth in a series of blogposts about our forthcoming nextbigthing that we still call vvvv50 (50). If you haven't already done so please first read the previous issues with the titles:

1. [50: That-Next-Big-Thing.-An-Overview.](/blog/2014/50-that-next-big-thing.-an-overview.)
2. [50: Colors](/blog/2014/50-colors)
3. [50: Properties](/blog/2014/50-properties)
 
{{< box >}}
Note:All information given here is still preliminary and subject to change.{{< /box >}}

So "Generics", uff, sounds so serious, I know. Still we have to mention them now because it will help you understand things further down the road. And you'll be surprised how easy the concept is to grasp. Promised.

## No generics in 45

In vvvv45 (45) we don't have generic nodes. What we have instead is a lot of identical nodes like eg. "Zip" available for different datatypes. There is a Zip (Value), a Zip (String), a Zip (Color)... and the nodebrowser is full of such duplicates for a lot of nodes, like GetSlice, Select, Queue,... all of which are nodes where the operation they do for us is actually independent of the datatype they handle. We can call such operations "generic" in the sense that if for example you think of the functionality of a Zip it is not really important to know whether it zips slices of a spread of strings or a spread of colors. Easy? Yep.

![](old-zips.png) 
*In a 45 patch nodes like Zip already look generic because precious screen-space is saved by leaving out information that would not help in understanding the functionality of a patch. Still the nodebrowser is full of duplicates you have to explicitly choose between.*

Only recently we've introduced a way for plugin developers to easily create duplicates of those generic nodes for their own datatypes but that is really only a workaround to the fact that we don't have support for generics built right into 45. Still better than nothing, see: [generic-nodes](https://betadocs.vvvv.org/devvvveloping/plugins/advanced-topics/generic-nodes.html).

## Generics in 50

Now when we say 50 has support for generics we can advertise that in two ways:

### For the casual patcher

First, the nodebrowser will have less nodes to choose from because it can leave out many duplicates (well, it will have many more other nodes but at least no datatype-duplicates). If you want a Zip you don't have to decide for which type you want it. Just place it in the patch, connect anything to it and you're done. 50 will figure out what you mean. 
![](zips50.png)
*In a 50 patch a zip is a zip is a zip and you can connect any datatype to it. So in this example the left zip is forced to operate on values and the right zip is forced to operate on colors only.*

### For the pro patcher

Secondly (and this is probably a bit more abstract to wrap your head around, but please try:) when you patch an operation you can be unspecific about the datatypes of its inputs and outputs. Sounds exciting? Here is an example: Consider someone patched the functionality of a Queue. This is what it could look like in 45 and 50:

![](generica.png) 
*Queue (Value) in 45 vs. Queue (Generic) in 50*

Reading those two patches: 
The Inlets and Outlets (Item, Insert, ..) of both implementations are the same and the FrameDelay, as we've [already learned](/blog/:50-properties), is replaced by a property (called "Items" here). And while both kind of *look* generic, in the 45 implementation we see the {{< pin "Item" >}} obviously is a value IOBox. Therefore we know that this is a specific implementation for values. 

In the 50 implementation you see all the operations (clear, insert, take) are working on the generic collection type *Spread*, ie. they have not yet been forced to operate on a specific type like *Spread of value* or *Spread of color*. And you can easily identify pins, in- and outputs and the property that are generic as they are visualized in a different way (ie. only showing their contour). So here is a single implementation of a queue that works for any datatype at a time, even ones that you create yourself (more on that in the next post). 

What you take away here is that 50 comes with a set of generic spread operations (insert, take, zip,...) for handling any kind of data and the problem you sometimes faced in 45 where individual spread operations were only available for specific datatypes, is no more. 

---

And the best of it all which is really only a side-note here:
For all those basic generic spread operations we don't have to write a single line of code. In 50 we can magically make use of that functionality as it comes with the .net library. Besides the fact that this saves us a lot of time it also means those basic operations can be assumed virtually bug-free, not only because we didn't write them but also because Microsoft has been taking care of testing that code since years. 

That just for a little soothing happynew50 update. Now fasten your seatbelts for the next issue with the blockbuster title "Custom Datatypes". 

If what you just learned makes you feel like inserting coin, don't hesitate and click: [/downloads|vvvv](flattr).

