---
user: "gregsn"
created: "1418051525"
---

@u7:

*yes. all of this can be patched in one window.* the concept of colors presented in the last blog post allows just that. note that in the example above we only see one "color": dark gray (on pins and links) - compare that to the examples of the last blog post. it now should get obvious that this patch only operates on "update". the "create" exists by default, but nothing is done here. i guess this was confusing, right? we'll explain "create" and "update" in another blog post. just note for now: if there would be some "create" logic, it would exist in the same patch window.

*getter and setter vs. framedelay.* look at it this way: it is just a different style of visualization: 
** getter & setter:** data flow within one frame **
vs. 
** framedelay node:** data flow within one frame + data flow in between frames** 

without framedelay a patch shows me which node depends on which data within one frame. it shows where the calculation ends and where the data will be picked up in the next frame. with framedelay i get a patch that visualizes both: the current frame and the connection between frames. by visualizing both, patches with framedelay blur away some useful information. as soon as you don't follow the design pattern on how to properly use a framedelay, as soon as you start throwing framedelays in the middle of your patch, (in order to make a cyclic link), you lost your patch. your data in the one part of your patch might be framedelayed in comparison to some other part. if you now try to react on a bang or any critical frame precise information you might get into big trouble. 

since vvvv is a frame based system. visualizing the frame is important. with setters and getters you finally can read your patch from top to bottom. this is what will happen in one frame. 
