---
categories: "Development News"
author: "Elias"
date: "2019-12-04"
title: "VL: New Roslyn based backend"
slug: "vl-new-roslyn-based-backend"
description: ""
imported: "true"
---


With the release of [vvvv gamma 2019.2](/blog/2020/vvvv-gamma-2019.2-preview) we introduced a new backend compiling patches in real time using [Roslyn](https://github.com/dotnet/roslyn). This blog post is primarily intended for a technical audience, if you're solely interested what new features it brings to the table have a look at the before mentioned blog post.

## Background
In the past VL (the language behind vvvv gamma) compiled in-memory directly to [CIL](https://en.wikipedia.org/wiki/Common_Intermediate_Language) using [CCI](https://github.com/Microsoft/cci). With the recent changes in the .NET ecosystem and CCI being superseded by [Roslyn](https://github.com/dotnet/roslyn) it became more and more apparent that at some point we'd also have to make the switch to keep up with the latest developments happening at Microsoft.

What finally pushed us into making the switch was two-folded:
# An executable written by CCI wouldn't work at all the moment it referenced a library based on .NET standard. This was a major set back as nearly all future libraries would be targeting .NET standard and days of trying to find a workaround brought us nowhere. Making modifications to the already abandoned project CCI seemed like a very bad idea.
# For a long time, we didn't know how to directly translate VL's adaptive nodes feature to CIL (or C# for that matter). For those who're not familiar with adaptive nodes, it allows one to build functions solely on their intent. For example, a LERP function can be expressed with a PLUS a MINUS a ONE and a SCALE node without having to specify what data will be provided in the end. The exact implementations will be looked up by the compiler when applying the function let's say on a float or a vector. This lookup is done from an entry point (like an executable) and while traversing from such an entry point all adaptive nodes will be replaced with their respective implementation. The emitted CIL code will then end up with two LERP functions, one for float and one for vector. This approach was working fine but it had a major drawback as it prevented us from pre-compiling our libraries and also it prevented any user to build a proper .NET library with VL.
Until this year in march @sebl came to the rescue by randomly dropping us a [link](https://github.com/MattWindsor91/roslyn/blob/master/concepts/docs/tour.md) in the chat pointing to a neat little "trick" which suddenly made it possible to translate our adaptive nodes feature directly.

After initial tests in March and April and having the patched tooltip feature still pending for the final release, we decided to let myself jump into the rabbit hole which I've finally crawled out of after more than half a year ;)

## The neat little "trick"
Let's go back to the example of the LERP node and let's further try to write it down in C#:

```
T LERP<T>(T a, T b, float s) => a * (1 - s) + b * s;
```

Looks neat but sadly won't work, C# will tell us that the operators +, - and * and the constant 1 are not available on T.
The trick to make it work is to outsource those operators to a so-called "witness" which in turn will provide the implementation when the LERP gets instantiated with say a vector. So let's see how the actual needed C# code is gonna look like:

```
T LERP<TWitness, T>(T a, T b, float s) where TWitness : struct, IPlus<T>, IScale<T> 
{
    var w = default(TWitness);
    return w.Add(w.Scale(a, 1 - s), w.Scale(b, s));
}
```

with

```
interface IPlus<T> { T Add(T a, T b); }
interface IScale<T> { T Scale(T a, float s); }
```

and when applying it with say float we need to define a witness implementing the needed interfaces

```
struct MyWitness : IPlus<float>, IScale<float> 
{
    public float Add(float a, float b) => a + b;
    public float Scale(float a, float s) => a * s;
}
```

which finally allows us to call

```
LERP<MyWitness, float>(5f, 10f, 0.5f)
```

Fancy, no? The beauty is that when the JIT compiler hits such a code path it will be smart enough to inline all calls so in the end for the CPU the code to execute is the same as the initial naive attempt. But don't worry, this is all happening behind the scenes. In the patching world, it is as simple as it was before to patch generic numeric algorithms.

## The implications
So now that we're able to translate patches directly to C# what are the implications apart from being able to export an application?

### Easier to maintain
Well for us as developers it will be much easier to bring in new language features, because the code we generate will be be checked by the C# compiler and more important, we can fully debug the generated code with Visual Studio. That by the way is not only restricted to us, anyone can now attach a debugger to vvvv (or the exported app) and debug the patches.

### Faster loading times
The generated C# code will make full use of .NET generics. So when building a generic patch the generated class will also be generic in the pure .NET world. As an example let's consider the Changed node, while in the CCI based backend a Changed class was emitted for each instantiation (Changed_Float, Changed_Vector, etc.), the new Roslyn based backend will only emit one Changed<T> class and it is left to the JIT compiler of .NET to create the different versions of the needed target code. This should lead to much less code the CPU needs to execute as the JIT compiler is much smarter on when to generate new code and when not.

But what's even more important is the fact that it opens up the world of compiling VL patches as pure .NET libraries. So we can finally pre-compile our libraries (like VL.CoreLib, VL.Skia, etc.) which in turn reduces the general overhead and leads to much quicker loading times and less memory usage.  As an example loading the Elementa "All At Once" help patch takes ~15 seconds the first time (compared to ~33 seconds in the old backend) and thanks to caching to disk only ~8 seconds when opening at a later time.

### Instantiate patches at runtime
Apart from better loading times, it also gives the patcher the ability to instantiate any VL patch during runtime. In the previous backend, one had to use a hack and put all possible instantiations into a non-executing if-region. This is not necessary anymore as all the patches get compiled. However, I should mention here that this is only true for non-generic patches. Generic patches usually require a witness which is not so straight forward to provide.

## The drawbacks
Sadly the new backend also required some major internal changes in the frontend so it wasn't possible to guarantee existing patches would work the same way as they did before. Here follows a list of potential breaking changes:
- The type unification algorithm had some flaws and therefore needed modifications. In general, it is "smarter" than before, so when starting a patch from scratch fewer annotations should be necessary. But for existing patches, it sometimes finds a different solution than the previous algorithm leading to red links on the application side of a patch. In those cases, one needs to set a type annotation in the patch definition.
- When pause on error is enabled the old backend was able to show computed values up to the point where a node was crashing, this feature is sadly not available anymore due to local variable scoping rules of C#. Whether we'll bring this feature back or not is not yet decided.
- Naming rules are more strict, so it's not allowed anymore to have for example an "Update" and and "Update (Internal)" operation as both are considered to have the same name. In general instance-operation overloading is not possible. 
- Static operation overloading - having operations with the same name but different pins - is still allowed as long as the types of the pins differ. So different pin names alone are not ok. 
- When defining a generic interface all type parameters of its operations get assigned to the interface itself. This is necessary due to how internals of the emitted C# code work.
- The cyclic graph detection wasn't correct. This can also lead to red links now but should be considered a good breaking change as it makes the patcher aware of undefined execution order.
- Patches, where the execution order wasn't defined, might behave differently now.