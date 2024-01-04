---
date: "2023-10-31"
title: "Introducing: Support for the OSCQuery protocol"
description: "A quick way to expose parameters to the world"
categories: "Development News"
author: "joreg"
thumb: "oscquery.png"
---

Good day to you!

Here is to introduce support for the [OSCQuery](https://github.com/Vidvox/OSCQueryProposal) protocol that allows you to quickly expose parameters from your patches. Once exposed, your parameters can be viewed and manipulated by any OSCQuery client. 

Here's how it looks:

![OSCQuery at work](image.png)

You configure an `OSCQueryServer` and then connect any number of `Binding` nodes to it that each can expose a Channel, where types are currently still limited to OSC compatible types, which means: 
- Primitives (float, string, color, vector,..)
- Spreads of primitives
- ValueTuples of primitives

**Available now in latest [vvvv gamma 5.3 preview](https://visualprogramming.net/#Download) downloads.**

If the OSCQuery Client app you're using supports the optional bi-directional features of OSCQuery, you can now control the channel in both directions. One such client would be [Chataigne](http://benjamin.kuperberg.fr/chataigne/en), of which you'll need a version >=1.9.17b7 to have this working!

## What next?
Three things:

We're hoping to expand this to be able expose not only primitive but also custom datatypes. So instead of having to expose 10 channels of primitives, you could expose a single channel of a more complex datatype and OSCQuery would automagically expose them as individual primitives. 

Configuration of parameters should be via 'Attributes' on the Channels. Where 'Attributes' is a concept you may be familiar with if you're a C# coder. If not, you'll have to wait for them to understand how that's gonna be cool.

And obviously it will become a module for GlobalChannels, so that you'd not have to use the nodes shown above at all to expose channels, but can do that via a few clicks in the Global Channel browser.

## How does this compare to RCP?

Glad you asked. [RCP](http://rabbitcontrol.cc/) is a rather similar idea to OSCQuery. Its [current implementation](https://www.nuget.org/packages/VL.IO.RCP/0.6.1-alpha) is older than Channels, so doesn't work nicely with those together yet, but once updated, its basic functionality will be identical to the above. And then more...

## Sponsor credits

For the sponsoring of this [open-source](https://github.com/vvvv/VL.StandardLibs/tree/main/VL.IO.OSCQuery) development we bow to [Refik Anadol Studio](https://refikanadol.com/).

If you also have a request for custom development, [get in touch](mailto:devvvvs@vvvv.org)!