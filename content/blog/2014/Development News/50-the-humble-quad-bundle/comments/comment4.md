---
user: "gregsn"
created: "1396399405"
---

@manuel: the physics plugins also need to manage objects and in this regard there are similarities, but in a twisted way. 
internally they undoubtedly work in an object oriented way, managing lifetime and interaction of objects for you. on the patching surface you have the possibilities to interfere with that system.
with the language features shown above you can do that system and the objects it manages by yourself, whith object access that doesn't need workarounds like ids.

other question 1. retro compatibility)
we designed this system from the ground. it is our opinion that taking the chance to design things differently with the idea of eliminating limitations of the current system is only possible with a clear cut. 
there will be a period of time where shifting strategies will be of interest. and we will do our best to support transitioners for a real long period of time. anyway, this is not the time yet.

other question 2. graphics engine)
the new system will offer ways to import nodes that make it easier to integrate whole libraries. so up to now we are working more on the language, runtime and patching features than on the library.
we'll see. but probably there won't be just one graphics library.

