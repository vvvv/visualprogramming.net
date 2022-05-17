---
user: "tonfilm"
created: "1518796279"
---

@u7angel it was an early exercise on how algorithms can be patched in VL. binary search was particularly interesting because it works very well together with basic VL features. our binary search implementation works on any collection that implements the IReadOnlyList which is most .NET collections including our Spread and SpreadBuilder and its super fast. so when using the .NET one you are limited to 2-3 collection types and of course you don't want to copy a 50.000 element spread into a List just for binary search. so its about flexibility with the collection input as well as having flexibility with the element type, that the .NET ones don't have at all.

![](08_0.PNG) 




