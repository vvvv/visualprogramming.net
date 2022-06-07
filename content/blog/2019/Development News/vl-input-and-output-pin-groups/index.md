---
categories: "Development News"
author: "Elias"
date: "2019-03-14"
title: "VL: Input and output pin groups"
slug: "vl-input-and-output-pin-groups"
description: ""
imported: "true"
thumb: "Cons.png"
---


Up until now VL had a rather rudimentary support for pin groups. Only nodes following a [certain pattern](https://vvvv.gitbooks.io/the-gray-book/content/en/reference/vl/nodes.html) had the option to have a dynamic amount of input pins. For simple nodes like a plus or a multiply this worked out fine, but for others it either felt like a hack or it was simply impossible to use at all. A node having a dynamic amount of outputs was never supported at all.

## Pin Groups by Index

This all changes now by introducing proper support for pin groups. So let's jump right into it and have a look at the definition of the very famous Cons node:
![](Cons.png)

As we can see the pin inspektor is showing one new entry called "Pin Group". This flag has to be enabled obviously. Then we annotate the pin with type *Spread*. This creates pins with the name "Input", "Input 2", "Input 3" etc. on the node.

If we now look at an application of the Cons node we can already see a couple of nice new features:
![](ConsApp.gif)
1. It's much faster. To build the input spread it can make use of a spread builder allocating the needed memory in one go, compared to the old Cons node which concatenated one spread after the other, leading to a total of 8 copies.
2. The returned spread will stay the same as long as the inputs stay the same. This is done by keeping the generated spread for the input group in an internal field. When building up the new spread each slice will be compared to with the one from before. And only if one of those slices change a new spread will be allocated.

Pin groups are not limited to inputs, they also work for outputs which brings us to a new node called Decons - deconstructing a spread into its outputs:
![](DeconsApp.png) 

## Pin Groups by Name

Cons and Decons are examples of using a pin group as a Spread. But there is another variant where the group gets annotated as a *Dictionary<string,\*>*. Instead of addressing the pins by index, they get addressed by their actual name. Let's have a look at two other new nodes again called Cons and Decons but residing in the Dictionary category:
![](DictBuilding.gif)

Pins can get added as usual with Ctrl - +, but what's new is that those pins can be renamed in the inspektor UI giving us the ability to quickly build up dictionaries.
The patch of the Cons building up a dictionary compared to the one building up a spread only differs in the type annotation of the input pin.

Apart from Spread and Dictionary the system also supports pin groups of type Array, MutableArray and MutableDictionary. According Cons and Decons nodes can be found when enabling the Advanced view in the node browser.

##  Creating Pins from within a Patch

So far the pins of a pin group have always been created by the user interface of the patch editor. Things get really interesting though when creating them from within the patch itself:
![](GeneratingPins.gif)

Imagine the string being an expression of some sort generating inputs for each unbound variable. The possibilities are endless :) 

The nodes needed to create and remove pins can be found in the VL category after adding a reference to VL.Lang - the patch from the gif above can be found in the help folder of the VL.CoreLib package.

More information on those nodes will be covered in an upcoming blog post. Until then you can try these new pin groups in our latest alpha downloads and happy patching,

yours,
devvvvs