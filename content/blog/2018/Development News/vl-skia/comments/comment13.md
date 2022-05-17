---
user: "gregsn"
created: "1534779803"
---

@io: this is still under construction, but if you navigate into Button, ButtonBehavior and ButtonRendering you can already inspect the general idea of how this may work in the future.

Another idea, for now, is to use the Console node which may serve as a glue: 

* it, for now, outputs Keyboard and Mouse devices, that can be consumed by several nodes including MouseState and KeyboardState. 
* connect it to a group node. That way you have one layer input free to connect your rendering layers.
* when working with MouseState consider using the first output "Position in World", giving you a position that plays well together with the transform nodes.  

There will be some proper documentation when this part is more polished.

