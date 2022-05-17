---
user: "dominikKoller"
created: "1518805409"
---

That functionality is great to have.

However, I think making a patch like that a part of the corelib is a mistake:

![Messiest Patch Alive](meeeess.PNG) 

That's something you look at and go 'holy shit that's incomprehensible'! 
Don't get me wrong: as a case study, this is great. If that is the best we can do, then I would suggest the outcome of this case study is that VL just isn't good at lowlevel things like binary search. Too bad, but that seems to be the case. 
I would strongly suggest writing that up in C# and removing this from the corelib, having it in there 1) is daunting (even for me, much more so for newcomers) 2) encourages the bad practice of using VL for stuff VL is not good at.
