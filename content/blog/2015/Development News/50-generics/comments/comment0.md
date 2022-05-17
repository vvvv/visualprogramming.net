---
user: "vux"
created: "1422578399"
---

As much as I enjoy the blog posts, I would really like to see a bit more complicated examples, for now it feels a little bit too much "hello world" style samples. 

This one is actually a perfect example so let's expand a little bit.

First this could be achieved to a certain extend with vvvv45 (on the exception of value/string/color/transform types which have a different interface for creation), since there is already a connection handler, so overriding this functionality can allow to have this (more or less store the type in a config pin to set connection). 
Adding functionality to draw in patch from plugins (custom iobox and pin editor) and that would be pretty much set.

So now let's try to go out of the hello world case, and go into some real world scenarios.

1/Structs and "binary" compatible types.

Let's say we connect a float to a zip node, now we can't connect a Vector2 to it, whereas it could be totally acceptable (Vector2 is just two floats packed together, and with bit of il magic conversion is basically cost free, no need to copy memory at all).

2/Classes

Now things become more interesting :)

Let's say we have two interfaces iDummy1

and we have 2 classes cTest1 and cTest2 (both implementing iDummy1)

Now we connect something outputting cTest1 to the zip node. 

Two scenarios are now possible:
* We can't connect cTest2 anymore, since expected type is cTest1 (so zip nodes locks inputs/outputs to cTest2)
* Zip node allows to connect cTest2, because it notices that cTest1 and cTest2 share a common interface, in which case Zip output is no more of cTest1 but iDummy1 (which can cause problem if output is connected to an input expecting cTest1)
* On first connection (cTest2), we scan for all interfaces/class/subclass that cTest2 implements, and offer a dropdown to select which type we effectively want to bind. That's a bit more cumbersome on patching but offers the best flexibility.

3/Conversion

Let's now say we use Color4 and Vector4 (from SharpDX).

In c# you can just do:

Vector4 v = new Vector4(some data here)
Color4 c = v;

Since there's an implicit operator under the hood.

So would this Zip node (as example) which has a Vector4 input connected also accept a Color4 next to it (otherwise we end up in same situation having converter nodes everywhere)?



