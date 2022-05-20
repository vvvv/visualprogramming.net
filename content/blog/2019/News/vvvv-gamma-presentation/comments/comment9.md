---
user: "domj"
created: "1555772790"
---

Just finished watching the Ocean of Air and Xenko demos.

The amount of detail in the Ocean of Air is absolutely mindblowing! Great job!

General Xenko demo was also very impressive but these questions came to my mind:
What's the imagined workflow for dealing with assets and other items only editable from the editor?
Right now it seems that you have to open the editor, edit scene, recompile and then start the integration from VS?

Have you also considered some way to deal with dynamic assets - eg. loading models not packaged with the game?
While this is super easy with vvvv beta, here it seems somewhat of a challenge. According to the Xenko docs an asset has to be included in the build to be able to load it from code (<https://doc.xenko.com/latest/en/manual/game-studio/manage-assets.html)). For many projects I can imagine the models to display will not be known at compile time (eg. generic stage previs>. Will this require implementing a separate asset management pipeline with new shaders and entities that loads geometry data from files into memory and displays it or is there ways to still leverage Xenko's rendering pipeline by somehow registering new assets at runtime?

Also +1 for the GPU integration of Skia.

Big thanks for streaming these!
