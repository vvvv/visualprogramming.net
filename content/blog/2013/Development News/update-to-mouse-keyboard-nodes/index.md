---
categories: "Development News"
author: "Elias"
date: "2013-04-05"
title: "update to mouse & keyboard nodes"
slug: "update-to-mouse-keyboard-nodes"
description: ""
imported: "true"
---


the mouse and keyboard nodes of vvvv have seen a complete rewrite in the lastest alpha version (29.4). their interface (in- and outputs) and behaviour is still the same, but under the hood they work differently:
up till now vvvv installed a so called system wide global hook on startup which rerouted mouse and keyboard messages from other processes to the vvvv process.
for reasons beyond the scope of this blog post, this caused random freezes of vvvv or even crashes of other processes. another issue was that it only worked with one vvvv instance at a time.
with the new nodes we got rid of those global hooks. in case of the window versions of the nodes we use a much safer technique called [subclassing](http://msdn.microsoft.com/en-us/library/bb773183.aspx) and in case of the global versions the keyboard and mouse states are retrieved at node evaluation.

hopefully this change shouldn't affect the user at all, if it does, please report in our [alpha forum](https://discourse.vvvv.org/).

what's probably also worth mentioning is that the mouse nodes now output the state of XButton1 and XButton2.

to plugin developers:
* if you're writing a gui-plugin (eg. a renderer) and want the window versions of the mouse and keyboard nodes to work with your plugin, implement the new interface IUserInputWindow where you return the window handle of the control which has focus. for an example have a look at the [source code](https://github.com/vvvv/vvvv-sdk/blob/develop/vvvv45/src/nodes/plugins/SVG/SVGTextureNode.cs) of our svg renderer.
* MouseState uses the System.Windows.Forms.MouseButtons enumeration now.