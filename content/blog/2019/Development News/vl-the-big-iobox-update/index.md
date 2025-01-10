---
categories: "Development News"
author: "joreg"
date: "2019-04-17"
title: "VL: The big IOBox update"
slug: "vl-the-big-iobox-update"
description: ""
imported: "true"
thumb: "outboxes.png"
---


jojojo IO,

one of the more important features for quick prototyping in vvvv always were the IOBoxes. Here is an update that finally brings the vl IOBoxes up to par (and beyond) with what you were used to from vvvv beta.

## Support for Spreads

Most notably missing so far was proper support for spreads. Sorted. When creating an IOBox via "start link -> middleclick" you now always get an interactive IOBox for the supported primitive types: ints, floats, bool, string, path, color, enum, even if they are spreaded or spread-of-spreaded or...

![](outboxes.png)
*IOBoxes to quickly few contents of spreads*

Or configure your own, by first creating a normal IOBox via right doubleclick and then configuring its type (middleclick it) via the Inspektor to a Spread type:
![](horizontal.gif)
*IOBoxes to quickly define values in a patch*

Key to spread IOBoxes is that you can directly set their count, without the need to open an inspektor. By default they now show a maximum of 5 entries and add a scrollbar to show more. If you want to see more, you can change the "Maximum Visible Entries" count via the Inspektor.

![](maxentries.gif)
*Setting the max visible count*

To quickly modify a constant spread you can also insert/remove slices when the inspektor is active:

![](addremove.gif)
*Inserting and removing slices*

Same as with other editors, the spread editors also work on inputs of a node to quickly tweak values:

![](pineditor.gif)
*Editing a spread directly on an input pin*

And you can now specify defaults for input pins that are spreads:

![](defaults.gif)
*Setting the default of a spread input*

## Override values temporarily

Mostly useful for numbers and bools, in vl you can override upstream values directly, by manipulating an IOBox that sits in the middle:

![](override.gif)
*IOBoxes do not only pass values through, but can also override them*

## Numbers

What we're used to from beta: Entering values via formula now also works:

![](formula.gif)
*Entering values by formula*

## Vectors

Vectors now allow you to change all components at once:

![](allatonce.gif)
*One for all!*

Also the Inspektor now shows all properties that you get on a float IOBox, so you can now also configure e.g. a vectors precision.

## Strings and Chars

Both can now optionally show non-printable characters:

![](chars.gif)
*Showing non-printable characters as ASCII values*

## Colors

Color IOBoxes now also show you transparency:

![](colors.gif)
*Transparency visualized*

## Paths

Paths finally can be reduced to smaller sizes and show proper path ellipsis, ie. preferring to keep the last part of the value visible:

![](paths.gif)
*Path ellipsis to the rescue*

Click the little O icon to open the current file/directory with their associated program. ALT+click the icon to show the file/directory in the explorer. 

## Matrix//legacy.vvvv.org/downloads/previews

For completeness:
![](matrixbox.png)
*Matrix IOBox*

---

This is it for now.. Available for testing in both latest [alphas](https://legacy.vvvv.org/downloads/previews) and [gamma previews](/blog/2019/vvvv-gamma-2019.1-preview). 