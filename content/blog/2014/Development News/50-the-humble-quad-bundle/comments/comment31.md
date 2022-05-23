---
user: "gregsn"
created: "1396639110"
---

let me briefly comment on just the language topics regarding the shown patch:

{{< box >}}quote:jens.a.e:
If i am not mistaken this borrows concepts from reactive programming techniques? {{< /box >}}
a bit comparable, but let me just point out some small differences. 

i would like to reserve the term "reactive" for the push based dataflow programming model (like seen in vuo), where values get pushed from node to node over a link. typically in reactive programming the data source is not interested in any *answers* from the subscriber/sink. it is based on the idea that the values just get pushed downstream causing zero-to-many reactions. (we are investigating this model but it is not part of the demo above)

what is shown above is a bit different:
think of the CreateAndReset, LiveAndLetDie and YouOnlyLiveTwice as *incomplete operations* - their job is to do the life time management for you, but you still need to tell them when and how to create a new object, or when to discard it (so they need some *answers* from you). 
you can complete this operation by 
* placing such an *incomplete operation* as a region into your patch and
* then placing the missing parts right into that region. 
in other words: the small colorful patches within the region are callbacks that get called by the surrounding region.

{{< box >}}quote:jens.a.e:
* are the black dots something like *sinks* and *sources*?{{< /box >}}
a pair of read/write dots can be read as a feedback.
they let you read from or write to your private memory of the surrounding patch. (aka field)

{{< box >}}quote:jens.a.e:
* will there be a lot of *Get...* nodes?{{< /box >}}
Depends. Actually we could have simplified the example to use less Get nodes. But then we wanted to test the object oriented way of thinking.

Basically the message would be: "you can have many Get nodes. But you don't have to." 
With these Get nodes you basically move some output pin(s) to a separate node, which can be quite nice, but not necessary in general.

{{< box >}}quote:Hadasi:
LLVM too?{{< /box >}}
we have modular approach that basically allows several compiler targets, but .NET is the one we focus upon.

{{< box >}}quote:ggml:
why is create asteroids outside of the subpatch but create ship and bullets inside ?{{< /box >}}
yeah. right. sorry. this white little "create" just to the left of the "YouOnlyLiveTwice" actually is a create (RandomGenerator) that is created once and then used by "FromOuterSpace", which is a subpatch that creates the asteroids (when q is pressed).
This visual glitch will get fixed, hands down.
