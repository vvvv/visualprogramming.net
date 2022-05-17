---
user: "sebl"
created: "1482238602"
---

nice thing, thanks!

one minor thing:

the ouput pin says 'mixed types' when hovered, but when connecting an iobox it always says 'any type ok'

![](2016-12-20.png) 

anyway, when playing around with switch(node) for example, i figured out this annotation is not reliable...
* a fresh created node says 'any type ok' on its output
* as soon as any input is connected, it switches to 'mixed types'
* when disconnecting the inputs it stays at 'mixed types' until the node is hard resetted

imo best would be if it tells us the real type like 'color' until the types are mixed. then it should display 'mixed types'

