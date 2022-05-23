---
user: "dominikKoller"
created: "1519219625"
---

Not tested but will come close (and covers all the same edge cases I think):![bins](codeBinSearch_0.PNG) 




Now, interesting part: what this does not do is give all the other outputs as nicely as the VL node, like Success and the other pins - that's something that works well in VL but not so well (but still possible) in C#. Seems like when putting this node to VL we want to have these pins as well - and the patch that makes them is going to be a very simple one, using the C# implementation as its core.
