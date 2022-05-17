---
user: "tonfilm"
created: "1450124331"
---

@woei the mapping code looks like this:

![](MapDelegateCode.png) 

nothing special will happen if you return values outside the unit range.
the input range will throw a division by zero exception if From and To is the same.  i thought about an if region around this part... but then decided against it because of performance. if it creates problems we can update the internals... as a user you can check From==To before the Map and cover the case in the delegate.


