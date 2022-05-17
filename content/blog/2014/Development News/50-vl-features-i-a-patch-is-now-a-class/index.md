---
categories: "Development News"
author: "joreg"
date: "2014-07-29"
title: "50: vl features I: A patch is now a class"
slug: "50-vl-features-i-a-patch-is-now-a-class"
description: ""
imported: "true"
---


helo patcherpeople,

this is the first in a series of blogposts introducing the language features of that next big thing we still codename vvvv50 (for now). When talking about it we face 3 different target audiences: 
# People who only know vvvv
# People who know vvvv and object-oriented programming (OOP)
# People who know only OOP
Because at this point it seems most straightforward for us to talk to group 2 (and group 3 will understand anyway) these blogposts will be best understood with some knowledge of OOP. If you belong to group 1 please be patient until you get the thing under your mouse and can click through the tutorials. Anyway everything will be good in the end, because remember: if it is not good, it is not the end.

And also: All information given here is preliminary and specifically visual representations of features may still change. 

Now. 

As opposed to vvvv45 (45) where the number of features you'd attribute to its language, like Spreads, FrameDelays,... maybe Send/Receives... is quite small, vvvv50 (50) will have a number of language features well known from OOP that will allow you to much more specifically express your intentions on a higher level ([as mentioned previously](/blog/2014/50-the-humble-quad-bundle)).

Does more features mean it will be more difficult to learn? No. There will only be _more things you _can learn about the language but each of them will not be more difficult to understand than say Spreads or FrameDelays... 

Now really. 

Here is a bit you may not have been aware of: When in 45 you create a subpatch this is actually only for your own sanity. vvvv itself does not see those but only deals with all your nodes as if they were in one big patch. 

In 50 this is very different. Here when you create a patch you actually define a type. So a patch in 50 can be compared to a class in OOP. And such a patch can hold data (think: member variables or properties), it can define functions that operate on that data and most importantly it can be instantiated. Where instantiating a type/class in OOP means creating an instance/object of it. Here is an example:
 
![](Particle_0.png) 
Particle.vl

Particle.vl is a 50 patch that has one property: *Position* represented as a circles and it takes *Position* and *Speed* as inputs (white squares) and returns the *Position* as an output (black square). 

So here the idea is we have a Particle that is initialized with position and speed in its constructor and whenever it is being updated (ie. every frame) it adds its speed to its position so it moves. 

## The Constructor
In 50 the constructor is a first-class language feature. Mark a group of nodes that you only want to be executed once the object is created and tint them in white instead of using some {{< node "OnOpen (VVVV)" >}} and {{< node "S+H (Animation)" >}} or {{< node "Switch (Value Input)" >}} trickery. In the example *Position* and *Speed* are parameters to the constructor and while the position is being saved into a field, the speed (as it will not change) is directly connected to the + node.

## Fields
Also fields are first-class features and they are split into two: Getters and Setters. This is to visually emphazise the fact that here we are reading-data-from and writing-data-to a variable/field. We do the same in 45 but here the idea of a data-field is very well disguised behind a FrameDelay node and a link potentially being very much in the way. 

## Update Function
As mentioned above, in 45 every cascaded system of patches can actually be seen as only one very big patch. And even more so actually everything together can be seen as one big function that is executed every frame. Quite shocking, init?

50 is nothing like that but more on that in the next article. For now from the screenshot above you should understand that by default every patch has one function named "Update" which is (potentially) called every frame and everything belonging to it is tinted in black.  

---

So this is how the Particle looks from the inside. Next you'll want to create an actual instance of it. Here are two ways you can do that: 

## Static Instantiation
Create a Particle node to create a static instance of the node. Whenever the patch holding this node (its parent patch) is instantiated an instance of the Particle is created and updated as long as its parent patch is updated. The moment the Particle is instantiated its constructor is run once and thereafter only the main update function is run (which in the example above simply adds the speed to the position). 

![](Particle-Static.png) 

This is very much comparable to the way you'd work with patches in 45. 

## Dynamic Instantiation
When creating a Particle dynamically the question is where we'd hold it since we'd rather not have dynamically pop up thousands of Particle nodes all over the place. This is where lists come in to store instances of objects. 

![](Particle-Dynamic.png) 

The Particle node tinted in white means that it only executes its constructor. So the white color is used here as a shortcut instead of writing "new Particle". The constructor returns an instance which is in turn added to a list of particles which again is a field simply declared as List<Particle> which is the .net native generic List used to store any number of instances of our particles. Once the particle is in the list it is just there waiting to be treated further. But lets just leave it there until next time. 

---

Lesson 1. Recap:
# A patches is now a class/type
# Types have data fields (ie. member variables or properties) a constructor (a function that is executed only once when the object is instantiated) and at least one function named "Update" that is called every frame. 
# Instances of classes (ie. objects) can be stored in lists. 

Stay tuned and hope for the next article to appear soon, with the promising title: Update and other functions