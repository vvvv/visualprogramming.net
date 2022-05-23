---
user: "velcrome"
created: "1387213089"
---

1) there is a config pin on every IOBox called {{< pin "Tag" >}}. maybe i was presuming too much, what is this really for?

2) i see that it is possible to find out about other exposed ioboxes besides strings and values (especially the Node iobox is doing quite some funky tricks), but i was wondering whats necessary to remotely set them.

3) i try to be more descriptive: feedback happens only when i change the value  of an exposed input iobox by hand. 
if a value change happens to an exposed input pin by a local (or even remote) osc message, it is not feedbacked. if it is a exposed output pin it is not feedbacked either. why is this?

4) aha, that makes sense. it got me confused that {{< node "Server (VVVV)" >}} caches only when set to Any. 
