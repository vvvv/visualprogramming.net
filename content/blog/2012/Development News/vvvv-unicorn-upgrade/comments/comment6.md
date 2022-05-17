---
user: "jens.a.e"
created: "1348909862"
---

first of all, i should express how happy this change does make me :))))))) well, despite all the f**kups that happen, the world deserves unicode. so, yes, me happy about this.

@u7angel & @joreg: i'll look into the firmata stuff asap. have to find a board first.... i think it's a simple fix. a fast patch should only envolve to throw in the suggested {{< node "Encoding" >}} in the module. Nevertheless the unicode support will be implemented into the plugin.

question: is there a way in the plugin SDK to ask for the standard encoding of the plugin host? might help other plugins too to keep them cross. Even if the old version do not provide this interface, it could be wrapped in a try/catch.
