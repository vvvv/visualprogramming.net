---
user: "gregsn"
created: "1422585221"
---

hey vux!

thanks for your ideas on this!

{{< box >}}quote:vux:
As much as I enjoy the blog posts, I would really like to see a bit more complicated examples, for now it feels a little bit too much "hello world" style samples. {{< /box >}}
i do understand your impatience. And there may be some more people feeling the same regarding the pace of explanation in these blog posts. And we will need to go into quite more detailed / advanced topics sooner or later. That's for sure.

Anyway we decided that is not a good idea to confront people with too much details. Why? Because we want everybody to be able to follow. These blog posts are intended as a glimpse on the big picture, not the potentially distracting details.

{{< box >}}quote:vux:
First this could be achieved to a certain extend with vvvv45 (on the exception of ...{{< /box >}}
Oh well. Well, the exceptions, right. And not only the fact that there are some types that are treated differently than others. Also the fact that spreads by itself are not treated as a type at all, they don't exist as a data type in vvvv45 since they are there implicitly everywhere as you know, which makes them another exception. You need to use Zip (Value Bin) to zip spreads of values...
So there are some issues that are intrinsic to vvvv45 that don't allow to build in generics into vvvv45 in a pleasing way.

That said there may be some ways to improve the situation. But this should be discussed elsewhere.

{{< box >}}quote:vux:
1/Structs and "binary" compatible types.

Let's say we connect a float to a zip node, now we can't connect a Vector2 to it, whereas it could be totally acceptable (Vector2 is just two floats packed together, and with bit of il magic conversion is basically cost free, no need to copy memory at all).{{< /box >}}
Let's first see what we expect the zip node to do:
A Zip (Value) shall take one value from the first spread, one Value from the second spread ...
A Zip (2d) shall take 2 values from the first spread, then two values from the second.

In vvvv45 these are already different nodes: they generate different output!
So it feels natural that a zip in vvvv50 at least treats those cases differently. I guess we agree on that. 

We now can discuss about 
* when a spread of values can be seen - via implicit conversion - as a spread of 2d vectors.
* when a spread of 2d vectors can be seen as a spread of values.

I guess a spread of (1, 2, 3) makes a bad spread of 2d vectors and implicit conversion should not occur.
The other case that you have a spread of 2d vectors which should convert into a spread of values is of course thinkable. Let me just tell you that we have it on our radar and also already combine generics with some few implicit conversions. 

2/Classes
The type inference which is running in the background is taking care of subtype realtionships, yes.

It is maybe of importance to explain that a zip node is not fixed to a certain type once the first connection has been made. After every single change of the patch - like a new connection - the system will take a fresh unbiased look at the patch and figure out the types for the generic nodes.

That way it typically figures out the right type for you, which might be a super type of two classes.
And in the rare cases where it doesn't, you will be able to interfere and make type annotations or force a link that the system wouldn't allow based on the currently infered types. After the forced link it will again look at the patch in a way that the new link is nothing special. It might then infere another type or might also give you a red link somewhere when the forced connection just doesn't make any sense - to the system that is... ;)

3/Conversion
As discussed before it is on our radar.

Thank you again for bearing with us!
