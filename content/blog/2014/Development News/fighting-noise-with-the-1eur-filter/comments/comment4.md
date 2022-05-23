---
user: "mediadog"
created: "1418506544"
---

To clarify, that behavior is to always use the slice history, regardless of slice count changes, yes?  I tried making wrappers that bang a reset when the spread count changes, but that is still not great.

I've been thinking it would be helpful for all of those animation filter nodes to have a version that took a spread of IDs as well to maintain behavior, since in tracking applications you frequently do have an ID associated with the data.  That way the correct history would apply wherever in the spread the data moved to.  One of these days...
