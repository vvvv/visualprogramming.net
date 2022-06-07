---
categories: "Development News"
author: "gregsn"
date: "2018-01-26"
title: "Small changes regarding enums in vvvv"
slug: "small-changes-regarding-enums-in-vvvv"
description: ""
imported: "true"
thumb: "_26.01.2018-16._r.gif"
---


As you might know, enums in vvvv got our attention several times in the past. But still, we found something to improve.

There's been the NULL (Enumerations) node, that we now decided to drop.
Often when using Ord2Enum, String2Enum, Enum2Ord or Enum2String you additionally needed this node to specify which enum you actually want to work with.

Now, Ord2Enum, String2Enum, Enum2Ord, and Enum2String come with a configuration pin that lets you specify the enum. So no need for NULL anymore.

The mentioned nodes got legacy. Old patches will be converted in a way that they still use these legacy versions. (NULL (Enumerations Legacy), Enum2Ord (Enumerations Legacy)...)

If you want to update your patches, so that they work with the new versions
* delete the null node
* double click on the legacy Ord2Enum (..) node and select the new node in the node browser
* select the right enum (using the inspector). Yes, the list wasn't sorted alphabetically in earlier versions. Sorry for that! 

---

The patches should get cleaner in the end, which should make them easier to understand.
The system has less to infer over links (less magic = less unwanted side effects). It just takes the enum specified.

---

Side note:

As the enum encoding changed (in vvvv50beta35.7) and now works with strings, you now are allowed to connect a source of one enum to a sink of another enum:
![Bingo](_26.01.2018-16._r.gif) 
There just might be cases where this makes sense.

---

EDIT:
It's a bit unfortunate, but we had to keep the old nodes still active. There are cases where the enum in question is not available via the global enum list. E.g. a shader has this technique pin that can differ from shader to shader and sometimes even between instances of one and the same shader. So these enums need to be "pushed" towards the connected Ord2Enum node. So you still need the old nodes.

The old ones keep their names.
The new nodes now are named Enum2Ord (Enumerations Explicit), ...
Null (Enumerations) is legacy.

Please excuse the confusion.