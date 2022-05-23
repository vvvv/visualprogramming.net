---
user: "gregsn"
created: "1396443336"
---

@u7angel: of course you're right. it can't be read properly without further detailed explanations. for now just look at it as a fragile puzzle. the nodes, their naming and also some of the graphic notations are still subject to change.
anyway here some pointers:
* there are 3 GetGeometry nodes, somehow patched for the custom Spaceship, Asteroid and Bullet types. so full name would be {{< node "GetGeometry (Asteroid)" >}} (..) and those are subpatches. As most of the nodes you see here. we should have named them GetLayer though.
* primitive values (like numbers and booleans) flow along solid links. asteroids and other "objects" flow on dotted links.
* GetBulletParams belongs to the spaceship. the create node below belongs to the Bullet.
that said, i guess it will stay unreadable unless every single detail is explained which will do step by step with separate posts. for now just look at it from a top down perspective and try to ignore the details. it is really just meant to give you glimpse.
