---
categories: "Development News"
author: "tonfilm"
date: "2018-10-26"
title: "VL: Xenko 3D Engine Update #1"
slug: "vl-xenko-3d-engine-update-1"
description: ""
imported: "true"
---


{{< box >}}
Note:
There are more updates on this:
[VL: Xenko 3D Engine Update #2](/blog/2018/vl-xenko-3d-engine-update-2)
[VL: Xenko 3D Engine Update #3](/blog/2020/vl-xenko-3d-engine-update-3)
{{< /box >}}

Hello @all,

as you might have read in the [VL: ThreeDee blog post](/blog/2018/vl-threedee), we see two major workflows with vl/xenko. To get familiar with xenko we jumped on a project where the second mentioned workflow, "Xenko game as a host for VL" makes sense.

First contact was better than expected and we were quickly able to patch with the original xenko entities. The nodes we created so far allow to setup the scene graph and also combine it with [scenes](https://doc.xenko.com/latest/en/manual/game-studio/scenes.html) or [prefabs](https://doc.xenko.com/latest/en/manual/game-studio/prefabs/index.html) made in xenko's game studio.

We also tested custom 3d drawing á la vvvv dx11 and the performance is crazy good so far! We implemented some pretty complex shader pipelines like a 3d fluid simulation and particle systems and we see insane frame rates, even on laptops.

{{< box >}}
Note:
Disclaimer: This is work in progress and all info below is subject to change.
{{< /box >}}

###  Scene Graph Nodes
The **scene graph** is a high level system that has concepts like light, shadow, materials, physics, audio etc. Patching with the scene graph feels quite easy since there is no need to work with shaders directly. Let's see how this looks like:

The entry point into the rendering is the **RootScene**:
![](10_RootScene.PNG)

Much like a vvvv Renderer you connect the content to its input. Each object in the scene is a so called *Entity*. Or in other words, entities are the building blocks of the scene graph. They can be as simple as a Quad or as complex as a complete level of a game. For example the Box or the AxisAndGrid node are entities. Entities can also have children, so we modeled the almighty **Group** node as an entity with two or more inputs for child entities:
![](20_Group.PNG)

For a basic setup we can connect an **AxisAndGrid** and a **DirectionalLight** to the Group:
![](30_Basics.PNG)

It might feel odd to vvvveterans to connect AxisAndGrid and DirectionalLight to the same Group. But this is what the engine manages for you, it picks up all entities in the scene graph and builds the correct shaders, render calls, physics setup and so on from it. That is how most modern game engines work, the concept is called entity/component/system (short ECS) and xenko has a nice documentation about it [here](https://doc.xenko.com/latest/en/manual/engine/entity-component-model/managing-entities.html) if you want to know more.

Of course you can still work with custom shaders when needed. More on that in an upcoming blog post.

Now let's finish our little scene by adding a floor plane and a box:
![](40_MiniScene.PNG)

There you have it, doesn't it look nice?
![](50_MiniSceneOutput2.PNG) 

###  Next Demo
If you want to see more vl/xenko in action, join us at the next vvvv meetup where we will give a bit more insight into the current state of the library: [vvvv meetup #5](/blog/2018/5-berlin-vvvv-meetup)

See you there,
devvvvs