---
user: "gregsn"
created: "1441811620"
---

@u7angel:

this is very hard to answer in general. The reason is that you'd typically express yourself differently within VL. As an example: in C# you rarely use immutable data types, but in VL you typically do. What's good is that you have more than one way to solve a specific problem and when you discover that a working solution is too slow you can attack the problematic part later on and refactor if necessary. 

Generally speaking:
In the end C# and VL both compile to the same "IL" code and access the same .NET libraries. By that we also benefit of the optimizations done by the JIT compiler as C# does. So basically there is just not that much of a difference, we share the same universe with C# in that regard. If you would patch the exact program in VL and C# there is hardly any significant difference.

So the only thing that really matters is how VL patches differ in expression style from C# code. We embrace readability first - especially the compatibility with the dataflow paradigm. But we support other styles (like working with mutable data) and therefore it is possible to tweak performance where needed. In the end performance depends really very much upon the patch and the use case and can't really be answered in such a general manner.
