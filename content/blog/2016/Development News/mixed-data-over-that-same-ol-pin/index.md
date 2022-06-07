---
categories: "Development News"
author: "gregsn"
date: "2016-12-11"
title: "Mixed Data over that same Ol Pin"
slug: "mixed-data-over-that-same-ol-pin"
description: ""
imported: "true"
thumb: "VariantTests_20_r.png"
---


There's been a plugin programming feature request by VVIPP vux to get a custom node pin that could also accept value/color/string/transforms which got resolved a while ago. As there were no further complaints about the way it got implemented in the API we now will commit us to the following changes:

* All pins are now based upon the rather abstract node pins implementing different data interfaces.
* You now can create an unspecific node input that just asks for different interfaces dynamically and by that can work with different types of data of the builtin pins.
```
  [](Input("X"))
  public INodeIn FX; // unspecific regarding the expected data
```
later on you then can ask for a handle on the data via:
```
 FX.GetUpstreamInterface(out myData);
```
* test for specific data by asking if myData supports IValueData, IStringData, IColorData, IRawData

As a side node: Making all pins compatible might help users at times. All data can now flow over {{< node "GetSlice (Node)" >}} and {{< node "Switch (Node)" >}} nodes.

See "girlpower\VVVV Plugin API\VariantPins" for an example for a Switch that is connected to colors, strings, values and whatnot at the same time.

![various data over one connection](VariantTests_20_r.png) 

original request: https://discourse.vvvv.org/t/plugin-interface-feature-request/12639