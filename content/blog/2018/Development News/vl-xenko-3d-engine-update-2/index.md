---
categories: "Development News"
author: "tonfilm"
date: "2018-12-09"
title: "VL: Xenko 3D Engine Update #2"
slug: "vl-xenko-3d-engine-update-2"
description: ""
imported: "true"
---


{{< box >}}
Note:
There are more updates on this:
[VL: Xenko 3D Engine Update #3](/blog/2020/vl-xenko-3d-engine-update-3)
{{< /box >}}

Welcome back to the second sneak peek into our adventures with xenko. Together with [MLF](https://www.marshmallowlaserfeast.com/) we've been busy patching the first project done entirely with [vl](https://betadocs.vvvv.org/using-vvvv/vl.html) and xenko: [Ocean of Air](http://oceanofair.com). So far the combination works superbé, and you can experience that for yourself until the 20th of January, if you are in the London area. Alongside the project we explored the xenko code base and now that it's live, we can give you some more insights into our research.

In the [last blog post](/blog/2018/vl-xenko-3d-engine-update-1) we used predefined entities to set up a little scene graph. This time we will dig a little bit deeper.

Having primitive objects like Box, Sphere, Plane etc. is nice for casual patching and quickly visualizing something. But you will need more sophisticated objects for the final output of your project. What you want to do is designing your own objects that are specific to your use case.

Luckily, game engines have quite similar requirements and came up with a good solution, and they call it entity/component/system, short ECS, which is also the latest hype in Unity. Xenko has a good [documentation page](https://doc.xenko.com/latest/en/manual/engine/entity-component-model/managing-entities.html) if you want to go into detail. But for now let's stay on topic and keep two things in mind: 

* Entities are the nodes in the scene graph
* Components are the features/properties of an entity

We found two appealing ways to create custom entities that can also be combined with each other in any way that suits you. You can either patch them or design them in xenko's game studio using their prefab workflow. Here is a simple example for both cases:

## 1. Patching Entities
Let's look inside the BoxEntity from the last blog post:
![](10_BoxEntity.PNG)

As you can see, it adds a **BoxComponent** to the entity on *Create* (white) and exposes parameters like Color, Transformation, Enabled etc. as input pins on *Update* (gray). This is more or less an arbitrary choice of how the BoxEntity is designed and it will probably change a bit before it becomes official. The patch is also an example of how vl's [process nodes](https://vvvv.gitbooks.io/the-gray-book/content/en/reference/vl/nodes.html) work nicely together with the entity component model. Each instance of an entity or a component can be represented by a process node and connected with each other in an understandable way.

In the patch we saw the **EmptyEntity** node, which is a general entity object that contains nothing more than a **TransformComponent**, hence the transform input pin. To make something useful with it, we add more components (e.g. model, material, audio, physics etc.) to it. There are many of them and you can combine them as it suits your use case. The big advantage here is, that the components are able to interact with each other via the common parent entity and that the scene graph system automatically processes them in an optimized way. This is where it gets interesting!

Let's say we want the box from the patch above to emit a sound from its current position. In order to do that we only have to add a **SpatialAudioComponent** to the same entity as the box component:
![](20_BassBoxEntity_0.PNG) 

Since the SpatialAudioComponent and the BoxComponent have a common parent entity they will share the same transformation. Also, if an entity has child entities, the children get transformed by the parent. We could use that feature to add an **AxisEntity** to our custom entity:
![](25_BassBoxEntityDebug_0.PNG) 

Again, there is no need to connect the input transformation to the AxisEntity since it gets added as a child to the main entity and gets transformed automatically. 
Here is what a little scene could look like:
![](30_BassBoxScene_0.PNG)

![](35_BassBoxSceneView_0.PNG)
Let's add a second one and let them rotate in the scene to hear the spatial audio effect. Aaaaaand action! (works best with headphones):
{{< vimeo "305013010" >}}

## 2. Prefabs
There is also a super easy way to design custom entities in xenko's game studio and use them in your patch. Suppose we have a 3d model with animation and skinning imported and edited in game studio. All we have to do now is to create a prefab from it and give it a meaningful name:
![](40_AstroPrefab.PNG) 

Learn more about xenko's prefab workflow [here](https://doc.xenko.com/latest/en/manual/game-studio/prefabs/index.html). Once we have that it's as simple as this to use it in your scene:
![](50_AstroPrefabPatch.PNG) 

Ridiculous! 
And finally we will start the walk animation:
![](60_AstroPrefab.gif) 
Starting the animation is also patched in this case, but let's save that one for another post.

## Conclusion
The entity component model of xenko works very well together with vl's process node feature. VL's **automatic recompile** and instant **stateful hot reload** allows to dynamically combine and configure entities and the scene graph in real-time while the application is running. You can combine different workflows with each other, simple primitives, custom patched entities or imported prefabs. There is no right or wrong, just build up the scene in a way that suits your way of thinking and the requirements of your project.

We still have only scratched the surface here, there is much more to come.

Yours,
devvvvs