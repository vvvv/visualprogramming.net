---
categories: "News"
author: "vux"
date: "2012-12-16"
title: "Everything you know..."
slug: "everything-you-know"
description: ""
imported: "true"
---


![Happy birthday](DX_org_2012.12.16-13.36.40.png) 

So where to start...

After a couple or years of bugging devvvvs for features, creating/fixing new bugs, it's finally there.

So there's a little nice hefty number of nodes around already, but let's speak about what to expect from it, except the fact of joreg already being in the starting blocks to submit bugs :)

As usual going to a new API also means there's some changes (bugs) around the corner.

So let's see a bit of (non ordered) features list.
<!--break-->
##  For the patch lovvvvers
* Most geometry is there, Models are loaded via Assimp only now (which means you also have s spreadable model loader as XFile Replacement (Which can load any assimp supported format.
* RenderStates are now grouped (no more individual). They all available as Preset/Advanced Version
* No more DX9Texture, Renderer outputs them automatically.
* Depth buffer is also available as output (since it's a freebie)
* FileTexture/Writer/Vlc/Kinect nodes and Bullet Mesh are all around to, mostly in the same fashion as before.
* New layer system, more flexible and allows you to alter shaders upwards. For example, you can now attach a RenderState to a Group and it will propagate automatically upwards. 
* Still on the layer, there's now a validator system (bindable to layer), so you can decide if you want to draw objects ot not (For example Auto Frustrum culling, Or Select (DX11 Layer).
* All Within Nodes will not work anymore, they are now replaced and work on the layer level (means you can also fully rebind a camera if you want).
* Finally you can assign custom shader semantics to upwards shaders (if they have them, think about lights and shadows... less links = more readability :)
* No more Meshes, this is replaced by a more flexible Geometry System (now you can send any type of primitives to shaders). Also you can Create Geometry Instances (ask to draw the same geometry several times without the need to replicate manually), Indirect Draw (ask the gpu to decide how to draw), and also ask your shader to draw Nothing :)
* Plenty of standard material shaders already there (with all the old ones already here, but now with cook torrance/oren nayar and other light equations to have nicer look than good old phong (which is also there).
* Plenty of texture FX already ported, so you can start getting cracked on as soon as possible :)


##  For the hlsl nnnnerds
* Access to all new graphics pipeline features, aka Geometry and Tesselation shaders
* Compute Shader pipeline for the Non graphics related tasks.
* Shader Linkage, aka techniques on steroids.
* Few changes in the Semantic system, and some new annotations.
* Brand new TextureFX system (Spreadable!) which allows ping pong/intermediate rebinding, to change format/size all in a single shader file (No more need for renderer/dxtexture), and also built in framedelay,  with the subsystem taking care of resource management for you.
* Welcome GeomFX, the little sister of TextureFX, which allows you to use shaders to render 3d models, that you can reuse in other parts of the pipeline.
* Renderers for Buffers/3d Textures, enjoy some compute shader madness :)
* Access to all type of primitives, allowing funky features like point/quad geometry extrusion, line to cylinder and many more...

##  And the codddder
* Access to everything (in/out). So you can use texture input and I should open a competition to see who will write the fastest pipet :)
* Lot of already abstracted nodes, so you can create your custom validators/layer bits. Even creating your own renderer :)
* Using a RenderContext as Device Key now, no SlimDX.Device around. It also provides you some nice toys like RenderTarget/Context Stacks, Resource Pools (to save precious memory), Resource Sheduler (for all your async tasks), Primitives and more...
* Abstracted Resource system, not as low level as using texture directly, so it takes care of creating all those RTV/SRV/DSV...
* Clear separation between geometry and drawing. So you can create custom drawers.

##  Experimental (eg won't be available right away)
* Custom shader node (saves the code in config pin), so you can live code shaders in boygroup environements.
* Texture streamers (network)
* Many more i can't count....

##  Quick FAQ:
* Is it real? Yes :)
* Why did you do that? Why not?
* When will it be available? Wait for further announcement :)
* What will be the license? Open Source, but specific open source license undecided yet (it will NOT be GPL tho)
* Is it DX11 card only or is DX10/DX10.1 working? for basic features DX10 cards should work, advanced (eg: interesting) features will not work tho. 
* Can I participate to the Development? From the official release people are more than welcome to grab the source code and fix bugs/ add new features :)

Ok enough for now... more announcements (and video presentations) soon.