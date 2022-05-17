---
categories: "Development News"
author: "joreg"
date: "2014-11-04"
title: "50: Colors"
slug: "50-colors"
description: ""
imported: "true"
---


helo nerds,

this is the second in a series of blogposts about our forthcoming nextbigthing that we still call vvvv50 (50). If you haven't already done so please first read the last issue with the title:
 * [50: That next big thing. An Overview.](/blog/2014/50-that-next-big-thing.-an-overview.)

{{< box >}}
Note:
All information given here is still preliminary and subject to change. 
{{< /box >}}

Now here is the first real treat. We're starting with a simple one: Colors, or how we like to call them: Operations.

First here is a bit you may not have been aware of: When in vvvv45 (45) you create subpatches this is actually only for your own sanity. vvvv itself does not see those but only deals with all your nodes as if they were in one big patch. So in 45 every cascaded system of patches can actually be seen as only one very big patch. And even more so actually everything together can be seen as one big function/operation that is executed every frame. Quite shocking, innit? In 50 this is very different in that the visual structure has actual meaning to it. Good news: You can keep your assumptions, only now they will really work out.

## Defining Operations
As an example let's have a look at two patches in 45 which are called "PointIsWithinCircle" and "PointIsWithinRectangle":

![](45_0.png) 
*Two 45 patches defining one operation each.*

So here each of the two operations is defined and saved in a separate .v4p file. In 50 they look basically exactly the same only that they can also be defined together in one patch like so:

![](50.png) 
*One 50 patch defining two operations.*

And you really can collect any number of such helper-operations in one patch by just selecting a group of nodes and giving them a name. Like this multiple operations can be saved in one .vl file. Now this is obviously cool on the one hand but you may also immediately think of scenarios where this has more implications (think: project structure, versioning,...). But let's not ruin the party with such thoughts already. So anyway you just learned that in 50 a patch can be a container for defining more than one operation. Easy. 

Having a closer look at the 50 screenshot you see something you haven't seen before. People call those things "Colors" and while they are basically evil, when used in the right way they can actually be quite helpful. Here we use them to visually distinguish between different operations in one patch. You may argue you'd not need colors for this because the operations are all placed next to each other anyway. Indeed, but note that this is really just the most simple case. Think of multiple operations in one patch exchanging data (via links) between each other...we'll come to that in a later blogpost. 

For people familiar with c# here is a transcription of the patch that you see:

```
static bool PointIsWithinCircle(Vector2d point, Vector2d center, float radius)
{
  //implementation
  return output;
}

static bool PointIsWithinRectangle(Vector2d point, Vector2d center, Vector2d size)
{
  //implementation
  return output;
}
```

So you also see how 50 clearly translates the signature of such operations to a visual representation with the colored header and footer of the operation resembling the function-header and line of return that are embracing the implementation.

Here is another example of an operation returning multiple results. Again nothing special you're already used to that from 45 only here the colors encompassing the output pins speak a clearer picture. 

![](50-multiout.png)
*50 operation with multiple outputs.*

## Using Operations
You know from 45 that any operation you defined in a patch can be placed as a node inside another patch. Same in 50. Doubleclick a patch to bring up the nodebrowser and select the operation you want to use as a node. 

![](50-nodes.png)
*50 nodes with ugly font-rendering.*

---

So all-in-all no big deal right? Only that inch better and finally, colors. Have a suggestion where we would allow users to choose their own colors? Get a life...

...but then also come back for the next article in this series revealing more awesome from the future of programming. 

Liked what you read? Insert coin: [/downloads|vvvv](flattr).