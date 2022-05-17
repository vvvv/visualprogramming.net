---
user: "joreg"
created: "1344458525"
---

nono bois, this is not a jukebox. the name is the right one. we don't want to have fast and slow versions of nodes that do exactly the same. 

it is important that when you need a vector (join/split) you use a vector (join/split) and not any other node that you heard is faster. because maybe in an upcoming version we have an optimization for vector (join/split) that is just as fast or even faster than zip/unzip and then you have to change all those nodes back. 

so use zip/unzip when you need general un/zipping functionality else use vector (join/split) and bug us to improve their speed. one step at a time...
