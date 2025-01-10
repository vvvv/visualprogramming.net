---
categories: "Development News"
author: "Elias"
date: "2018-07-18"
title: "VL: Serialization"
slug: "vl-serialization"
description: ""
imported: "true"
thumb: "Serialization_A_r.PNG"
---


Serialization in VL has drastically been simplified by introducing two new nodes called **Serialize** and **Deserialize** in the category System.Serialization.
Let's first have a look at two basic examples:

![](Serialization_A_r.PNG) 

![](Serialization_S_r.PNG) 

Serialize takes any value and serializes it into a [XElement](https://msdn.microsoft.com/en-us/library/system.xml.linq.xelement(v=vs.110).aspx) while Deserialize does the exact opposite, it takes a [XElement](https://msdn.microsoft.com/en-us/library/system.xml.linq.xelement(v=vs.110).aspx) and turns it into a value of the requested output type.

As you can see from the screenshot the resulting string is very short and contains only the mimimum amount of data. It achieves that tidyness by only serializing user defined properties, skipping properties which have the default value, making use of XML attributes, putting collections of primitive values into comma separated strings and adding type information only when necessary.

When deserializing the system will try to apply the serialized content on the instance to be created. This makes it very resilient to future patch changes as adding or removing properties and to some extend even changing the type of a property will just work.

Serializers are provided for all primtive types (Boolean, Integer32, Float32, etc.), collection types (Array, Spread, Dictionary, etc.), commonly used imported types (Vector2/3/4, Matrix, Color, etc.) and most importantly **all patched types**. If a serializer should be missing for a certain type either report it to us or keep on reading to the next section where you learn how to patch (or write) your own serializer.

Paired with the [new files nodes](/blog/2018/vl-improved-file-io) serialization to disk is straight forward:
![](Serialization_T_r.PNG) 

That's basically all there is to know from an end-user perspective. You can try these new nodes in the latest [alpha versions](https://legacy.vvvv.org/downloads/previews).

##  Writing a custom serializer

Even though VL ships with serializers for the most common types the situation could still arise where a custom serializer has to be written - either because it's simply missing for the type in question or one is not satisfied with the output of the already existing serializer.

Creating a custom serializer consists of two steps
- Patching (or writing in C#) the serializer by implementing the 
**`ISerializer`** interface using the [advanced](/blog/2018/vl-corelib-cleanup) **Serialize** and **Deserialize** nodes working on the **SerializationContext**
- Registering that serializer using the [advanced](/blog/2018/vl-corelib-cleanup) **RegisterSerializer** node inside the static **RegisterServices** operation (more on that in an upcoming blog post)

Here are two screenshots of the above from an example implementation which can be found in the VL.CoreLib/help/Serialization.vl file:

![](Serialization_C_r.PNG) 

![](Serialization_CustomRegistration.PNG) 

We're looking forward to your feedback.

Happy serialization!