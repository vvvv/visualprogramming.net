---
categories: "Development News"
author: "Elias"
date: "2012-07-25"
title: "ISynchronizable and IFlushable"
slug: "isynchronizable-and-iflushable"
description: ""
imported: "true"
---


ever wanted to write a sample and hold node as a plugin? well you couldn't, until now :)
<!--break-->
the ISpread interface now implements two new interfaces, [ISynchronizable](https://legacy.vvvv.org/pluginspecs/T_VVVV_Utils_Streams_ISynchronizable.htm) and [IFlushable](https://legacy.vvvv.org/pluginspecs/T_VVVV_Utils_Streams_IFlushable.htm). 
ISynchronizable exposes the method Sync and IFlushable exposes the method Flush. what they do is simple: 
calling the method Sync on a spread triggers the evaluation of the upstream pin and copies the raw pin data to the spread.
calling the method Flush on a spread will copy the data of the spread back to the pin.

by default those two methods will be called automatically by the plugin hosting code: Sync will be called before the Evaluate method of the plugin and Flush will be called after the call to Evaluate.
now the interesting part is that you can disable the implicit call to Sync and call it manually in your Evaluate method. this means that as long as you don't call Sync on your input spread all the nodes connected upstream of the corresponding pin are **not** evaluated. that's exactly the behaviour how the well known sample and hold node works.

you can disable the implicit call to Sync by setting the new property AutoValidate to false on your input attribute.

here's an example code how a sample and hold could look like:
```
[](Input("Input",%20AutoValidate%20=%20false))
ISpread<T> FInput;
[](Input("Set"))
ISpread<bool> FSetIn;
[](Output("Output"))
ISpread<T> FOutput;
...
public void Evaluate(int spreadMax) {
  if (FSetIn[](0)) {
    FInput.Sync();
    FOutput.AssignFrom(FInput);
  }
}
```

the implicit call to Flush cannot be disabled. if someone comes up with a good use case it shouldn't be that hard to implement though.

{{< box >}}
Note:
ISynchronizable and IFlushable are implemented by all pin data accessor interfaces (spread, stream etc.) except for the raw V1 IPluginIO interfaces which expose a new method Validate which gets called by the Sync methods of the higher level accessor interfaces.
{{< /box >}}