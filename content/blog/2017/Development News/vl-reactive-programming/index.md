---
categories: "Development News"
author: "tonfilm"
date: "2017-04-12"
title: "VL: Reactive Programming"
slug: "vl-reactive-programming"
description: ""
imported: "true"
---


![](687474703a2f2f692e696d6775722e636f6d2f4149696d5138432e6a7067.jpg)

Here is something really great. The new *Reactive* category gives you tools to handle asynchronous events, background calculations and even enables you to build your own mainloop that runs on a different CPU core. But let's start with a pragmatic explanation of what it is:

{{< box >}}quote:André Staltz:
### Reactive programming is programming with asynchronous data streams
In a way, this isn't anything new. Event buses or your typical click events are really an asynchronous event stream on which you can observe and do some side effects. Reactive is that idea on steroids. You are able to create data streams of anything, not just from click and hover events. Streams are cheap and ubiquitous, anything can be a stream: variables, user inputs, properties, caches, data structures, etc. For example, imagine your Twitter feed would be a data stream in the same fashion that click events are. You can listen to that stream and react accordingly.

On top of that, you are given an amazing toolbox of functions to combine, create and filter any of those streams.{{< /box >}}

Since a while VVVV and VL use these so called [Observables](http://reactivex.io/) to handle external events (i.e. mouse, keyboard etc.) and asynchronous data. This was mostly under the hood and the actual operations for observables are hidden in the VL.DevLib. The reason is that out of the box the operations do not go well together with the frame based *Update* concept of VL because they are intended to be called only once or when something has changed. But as of now we have wrapper nodes for the most common observable operations that do exactly that, listen for change and only rebuild the observables when necessary.

### Processing events
The go to node for handling events is definitely **ForEach** *Region* (was *Region (Stateful)* in earlier versions) in the category *Reactive*. This region allows you to place any node inside and can also remember any data between two events. There is also one with version *Keep* that can filter out events using a boolean output. This region is very similar to the ForEach region for spreads, only that its input and output is event values in time instead of slices of a spread.

![](010_EasyObservables.PNG)
*Refresh web data every 30 seconds in the background and pass the result on to the mainloop.*

You can switch or merge event sources:
![](020_SwitchMerge_0.PNG)
*Switching or merging midi events.*

There are also filtering options with **OfType** or **Where**:
![](030_Filter_0.PNG)
*Only get TouchDown events from a combined event stream*

Other nodes include Skip, Delay, Delay (Selector), Scan, Switch, ...

### Receiving events
If you want to leave the observable world and pass event values to the mainloop use one of the 3 nodes **HoldLatest**, **Sampler** or **S+H** which all behave a little bit different. Depends on what you need:

![](035_ReceivingEvents2_0.PNG)
*Three ways to get event values to the mainloop.*

### Creating events
It's also pretty easy to generate event sources of your own:
![](040_CreatingEvents_0.PNG)
*Different ways to create observable event sources.*

As a general advice, only send values of type *Record* as event data because they are thread safe. If you send values of any *Class* type be sure that you know exactly what you are doing.

### Observable<Observable<T>>
Yep, totally possible and has useful applications. But i am just gonna let this idea sink in for now...

### Further reading
The above just scratches the surface of whats possible with the reactive framework. If you want to know more browse some of the following links:

The pragmatic Rx expert from the quote above:
[2 minute introduction to Rx](https://medium.com/@andrestaltz/2-minute-introduction-to-rx-24c8ca793877)

Visual explanation of the observable operations:
[Operator Reference with marble diagrams](http://reactivex.io/documentation/operators.html)

Videos from the creator team. Note that IEnumerable is called Sequence in VL and Spread is also a Sequence:
[Erik Meijer: Rx in 15 Minutes](https://channel9.msdn.com/Blogs/Charles/Erik-Meijer-Rx-in-15-Minutes)
[Erik Meijer and Wes Dyer - Reactive Framework (Rx) Under the Hood 1](https://channel9.msdn.com/Shows/Going+Deep/E2E-Erik-Meijer-and-Wes-Dyer-Reactive-Framework-Rx-Under-the-Hood-1-of-2)
[Erik Meijer and Wes Dyer - Reactive Framework (Rx) Under the Hood 2](https://channel9.msdn.com/Shows/Going+Deep/E2E-Erik-Meijer-and-Wes-Dyer-Reactive-Framework-Rx-Under-the-Hood-2-of-2)

For coders:
[Introduction to Rx](http://www.introtorx.com/content/v1.0.10621.0/00_Foreword.html)