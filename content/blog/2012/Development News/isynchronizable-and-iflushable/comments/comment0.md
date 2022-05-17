---
user: "zeos"
created: "1343351513"
---

That's great! Does it make sense, to also allow to overwrite the flush method, when there is a parallel task started inside the node (this nice .net 4 task/continueWith,...) and when the task is finished, loads the result into the output pin(should be locked in that moment or with continueWith you and up in the parent thread, so.. Or?) hm or there is better way (IStream...?)

Cheers
