---
categories: "Development News"
author: "Elias"
date: "2012-08-07"
title: "creating and deleting pins at runtime"
slug: "creating-and-deleting-pins-at-runtime"
description: ""
imported: "true"
---


there're situations were one needs to create pins at runtime depending on the value of some config pin. for example consider the {{< node "Expr (Value)" >}} node. it creates input pins for each given variable name.

with beta28 coming up this kind of task got considerably easier to do with a new interface called [IIOFactory](https://legacy.vvvv.org/pluginspecs/T_VVVV_PluginInterfaces_V2_IIOFactory.htm).
it basically provides a method to create so called [IO containers](https://legacy.vvvv.org/pluginspecs/T_VVVV_PluginInterfaces_V2_IIOContainer.htm), containing the actual "view" on the pin data (such as ISpread) and controlling the lifetime of it.

say we want to create an ISpread<ISpread<T>> during runtime, we do something like this:
```
[](Import) 
IIOFactory FIOFactory;
...
var inputAttribute = new InputAttribute("Input Foo");
var inputFooContainer = FIOFactory.CreateIOContainer<ISpread<ISpread<T>>>(inputAttribute);
var inputFooSpread = inputFooContainer.IOObject;
...
```

in case we decide to get rid of those two pins which are used by inputFooSpread we simply call Dispose on the associated IO container:
```
...
inputFooContainer.Dispose();
...
```

for details and as a starting point have a look at the [new dynamic plugin template](https://github.com/vvvv/vvvv-sdk/blob/develop/vvvv45/lib/nodes/plugins/DynamicPinsValueTemplate/DynamicPinsValueTemplateNode.cs) contained in beta28, which creates inputs and outputs on the fly, when changing the associated config pins.