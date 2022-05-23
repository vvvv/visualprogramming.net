---
user: "tonfilm"
created: "1425530695"
---

@velcrome 

1. the circle is an instance of a datatype which implements the interface IRenderable. the renderer expects this interface and calls the render method on it. not final though...

2. the foreach region is virtually the same as a foreach loop in C# no lazy linq magic, strict execution. but it is able to manage a state per iteration (e.g. the circle).

3. user attributes are not yet implemented but we discussed it and it will most likely be realized in a later version.

4. this is a big topic. the facts are:
- ad hoc polymorphism is in development in the form of type classes
- parametric polymorphism is supported very well and elegant, see the [generics article](/blog/2015/50-generics)
- inclusion polymorphism (or subtyping) in the form of inheritance will not be present in the first version
- subtyping in the form of interfaces (as mentioned in 1.) is in development, no guarantees until node15

if you look up polymorphism on wikipedia you will find exactly [these three types of polymorphism](http://en.wikipedia.org/wiki/Polymorphism_(computer_science)#Types_of_polymorphism).

subtyping has actually two main use cases in object oriented programming. one is re-using functionality from a supertype and the other is handling a bunch of instances of different types in a common way. the first case is the more important one i think and often one wants even multiple inheritance to get the functionality of different super types. the second case is probably better handled using interfaces.

so what we found is that subtyping in the form of inheritance is handy, but might not even be that important in a visual language since you can instantiate your 'supertype' easily in a patch of your 'subtype' and exposing its operations or properties is a matter of seconds. as opposed to a textual language where writing a method signature is a tedious thing. this also avoids virtual calls and the optimizer of the compiler can do its thing.

interfaces are cool though and we are working on it... :)

for a non-programmer/patcher-only person this might sound a bit abstract, but when saying we are working on it, it actually means that we want to find implementations of these topics which feel natural and appropriate for a visual language. with generics it already works quite well. so in the end you will just patch along without knowing that you do top-of-the-pops computer science stuff.
