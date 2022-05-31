---
categories: "Development News"
author: "tonfilm"
date: "2015-12-11"
title: "Mapping and Ranges in VL"
slug: "mapping-and-ranges-in-vl"
description: ""
imported: "true"
---


As a vvvv user you are most probably familiar with the node {{< node "Map (Value)" >}}. You would use it whenever you have to map a value from one range to another.

For example you want to use a hardware sensor input in the range 0..1000 to control the vertical position of a visual element on the screen in -1..1 range. And since you want to make sure that the visual element never leaves the screen you set the {{< pin "Mapping" >}} to 'Clamp':

![Mapping in vvvv](Mapping%20Example_r.png) 

So far, so easy. 

## Mapping in VL

Let's see if we can improve on that in VL.

First we make three important observations:
1. The Map node does two things, it maps the value ranges and also knows how to handle input values which are outside the input range.
2. The mapping mode almost never changes during run-time for a particular use case 
3. The specification for both, the input and output range is by Minimum and Maximum (or Center and Width if you use {{< node "MapRange (Value)" >}} ).

So we separated all functionality in VL to gain flexibility in the following way:

### Range

We introduced the concept of a Range. Its a simple generic data type that works for every type and has just two fields and two operations:

![Range VL Type](Range%20Type.png) 

If the datatype has the operators +, - and * (Scale) defined, which is the case for numbers and vectors in VL, there are Center/Width nodes that you can use with it:

![Range Type Nodes](Range%20Type%20Util_r.png) 

### Range Handling

The mapping mode was a second functionality of the vvvv node and is now a separate story. We have a bunch of nodes which handle an input value that is outside a specific range in a certain way:

![Map Modes](Range%20Nodes.png)


### Map

The map node itself got pretty simple and just does what its name says, mapping the input from one range to another:

![Map Node](Map%20Node.png) 

### Convenience Nodes

Although the above nodes give the maximum flexibility, you would need to patch a few of them together for every use case. So of course we have convenient nodes that should cover most applications.

Since its often needed, the range from Zero to One: 

 UnitRange

We made for all nodes a version that takes Minimum and Maximum, one that takes Range and some which work with UnitRange:
 
 Map
 Map (Range)

 Clamp 
 Clamp (Range)
 Clamp (UnitRange)
 Wrap
 Wrap (Range)
 Frac -> same as Wrap (UnitRange)
 Mirror
 Mirror (Range)
 Mirror (UnitRange)

There is also Mapping and Range Handling together:

 MapClamp
 MapClamp (Range)
 MapWrap
 MapWrap (Range)
 MapMirror
 MapMirror (Range)
 MapDelegate
 MapDelegate (Range)

All nodes are generic and work for numbers, vectors and custom types alike.

Happy Mapping!