---
categories: "Development News"
author: "tonfilm"
date: "2018-06-06"
title: "VL: CoreLib Cleanup"
slug: "vl-corelib-cleanup"
description: ""
imported: "true"
---


![](cleanup_crop%20[5_r.png)

Growing a consistent library of nodes and presenting it in a clear way in the NodeBrowser is one of the great challenges we are facing. For the upcoming release we made this our focus: Clean up the core library vl offers and add new features to the NodeBrowser for easier browsing. So here is what you get:

## Filtering by Aspects

The NodeBrowser got a couple of new toggle buttons that let you filter for different aspects. Aspects include "Advanced", "Experimental", "Obsolete"... 

![](buttons.PNG)
*Node list filter buttons*

Button layout: Time goes from left to right (Obsolete -> Experimental), high level to low level from up to down (Basic -> Advanced).
By default you see all normal nodes, ie. those without any aspect. This is what we consider the 80% most important nodes for the casual user. Browsing the categories with this setting should give you a good, not too overwhelming overview of what functionality is available. For example it excludes all nodes using types we consider advanced, like Float64, Integer64,... mutable collections (like Array, ..) and often nodes that we hope you'd not have to use every day.

![](0pk9wLIrxq.gif)
*Browsing the "Primitive" Category*

### Advanced

If you're looking for a node and it doesn't show up you can enable the "Advanced" aspect. This will include many more nodes. Obviously the distinction between normal and advanced is very subjective and will vary widely for different users and use-cases. So we are aware that there is room for debate and nodes may be moved between normal and advanced in future versions. The good thing about this is that such a move between aspects never breaks any patches!
You can toggle this filter button with the TAB key.

### Experimental

Includes nodes that we haven't yet fully committed to. Use those at your own risk. We don't guarantee that they'll still work the same in future versions

### Obsolete

Includes nodes that we only still ship to not break existing patches. Don't use them in new patches. Most likely there is a better version of the node available already.

### Internal

Nodes can have the "Internal" aspect set, meaning they are only visible within their .vl document but don't get exposed. So if another document references the first one, it will only see nodes that are not *Internal*. Using the toggle you can hide those internal nodes from the NodeBrowser to have a view on the node set that other documents would see.

### Defaults

The default setting for the filter buttons for Advanced, Experimental and External on startup of VL can be adjusted in the [settings.xml file](https://vvvv.gitbooks.io/the-gray-book/content/en/reference/hde/settings.html). If you are working a lot with .dlls from c# projects and you need to restart often, you probably want to enable the 'External' button by default.

### Assign Aspects to Nodes

For information about assigning nodes to aspects, see [this gray book section](https://vvvv.gitbooks.io/the-gray-book/content/en/reference/libraries/aspects.html) and feel free to open a thread in the forums for specific questions.
## Filter externals

When [referencing an external .dll](https://vvvv.gitbooks.io/the-gray-book/content/en/reference/libraries/using-net-libraries.html) it often leads to a very large number of extra nodes in the NodeBrowser. Using the "External" toggle you can decide whether to see those in the NodeBrowser or not. Also the NodeBrowser is faster when it doesn't have to deal with those.
You can toggle this filter button with the SHIFT+TAB keyboard shortcut.
## Stateful Nodes

Aka process nodes got merged with their stateless siblings with the same name. If there is a process node and a stateless node with the same name you get a "..." icon in the NodeBrowser and after clicking on it you have to choose which one you want.
## More Collections

This category got the most rework so it's worth to mention its specific changes here.

VL encourages the use of immutable collections because they work very well together with the data flow paradigm. But when working with .NET libraries you often have to deal with mutable collections, so we now provide all commonly used collections of the .NET framework!

In general we try to do as little renaming as possible when importing data types. But for the collections we took the liberty to do the following renamings from the original ones:

{{< box >}}
All immutable .NET collections drop the **Immutable** pre-fix since it's the default in VL:
* ImmutableArray -> Array
* ImmutableDictionary -> Dictionary
* ...
{{< /box >}}

{{< box >}}
All mutable .NET collections get a **Mutable** pre-fix:
* Array -> MutableArray
* Dictionary -> MutableDictionary
* ...
{{< /box >}}

All interfaces for collections moved into the *Interfaces* sub-category and we introduced a *Common *category that contains data types and nodes that are used together with collections like *KeyValuePair* or *CustomEqualityComparer*.

## Rectangle Improvements

The nodes to create rectangles are much more flexible now. You can specify the size of the rectangle and an anchor position. Depending on the enum input **Anchor**, the position gets interpreted as any one of the significant points in a rectangle, like TopLeft, Center, BottomRight, ... Also the split node got this enum to specify which point of the rectangle the output position should be.
//legacy.vvvv.org/downloads/previews
Additionally there is a node to create a rectangle spanned by two points and one to create a rectangle by the coordinate values of it's edges.

We also added **Inflate** and **Scale** nodes. Inflate can offset the rectangle edges in each direction by specific amount and Scale multiplies the size of the Rectangle in each direction. Both nodes come with version **Centered** and **Uniform** which assign the same value to the horizontal and vertical direction or the same value for all directions.

![](7GMtWUREdf.gif)

## Easier switch from Adaptive to specific

Some nodes (like the +,..) that you place in a patch are not tied to a specific type (like Float32) unless you make a connection to them. This is a very useful feature in vl and works 99% of times. Sometimes though you are smarter than the compiler and you want to specify to use a concrete implementation. In this case, after placing the node you now simply have to double click it to get all available options and chose one of those. 

## Destroy is now Dispose

In general we're planning to stick as close as possible to the naming in the .NET world. This will make VL more inviting for external developers to join and also makes documentation more easy to find. Therefore we decided to rename "Disposable" back to "IDisposable" and "Destroy" back to "Dispose". 
 
As always, head over to the [alpha builds](https://legacy.vvvv.org/downloads/previews) and report your findings.
Enjoy the new order and happy patching!

yours,
devvvvs