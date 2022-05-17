---
categories: "Development News"
author: "joreg"
date: "2012-07-25"
title: "KeyboardState & MouseState"
slug: "keyboardstate-mousestate"
description: ""
imported: "true"
---


hola,

here is the thing: until now, when creating modules or plugins that take mouse input you'd always have to cons XY and the mousebuttons together somehow so that you'd not need 5 connections to the node. also with the keyboard it was quite messy to parse the actual keystate only given a keycode. no more. we're introducing a special datatype for those now, and we call them "MouseState" and "KeyboardState".

so now, when creating a module that takes mouse or keyboard input use: 
* {{< node "MouseState (System Split)" >}}
* {{< node "KeyboardState (System Split)" >}} 
to use the data conveniently inside the module. 

plugin writers simply use:
```
ISpread<MouseState> FMouseState;
ISpread<KeyboardState> FKeyboardState;
```
to create pins of the respective types. 

and as a user you'd notice how the following have turned into modules that return an additional handy {{< pin "Mouse" >}} or {{< pin "Keyboard" >}}:
* {{< node "Mouse (System Window)" >}}
* {{< node "Keyboard (System Global)" >}}
* {{< node "Mouse (System Window)" >}}
* {{< node "Keyboard (System Global)" >}}

internally those modules use:
* {{< node " MouseState (System Join)" >}}
* {{< node " KeyboardState (System Join)" >}}
which of course you can use to simulate mouse/keyboards from any arbitrary input. and note that of course those are spreadable. 

nodes that already take that input now include:
* {{< node "Cursor (DX9)" >}}
* {{< node "TypeWriter (String)" >}}
* {{< node "Button (3D Mesh)" >}}
* {{< node "Button (3D Quad)" >}}
* {{< node "TagPoints (3D Vector)" >}}
* {{< node "PickPoints (3D Vector)" >}}
* the series of Point- and MeshEditor modules

so for the developer this provides a standard interface for mouse/keyboard input and for the user it will save some clicks. win/win.

