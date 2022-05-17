---
categories: "Development News"
author: "tonfilm"
date: "2014-04-23"
title: "Generic Nodes Project"
slug: "generic-nodes-project"
description: ""
imported: "true"
---


There are several nodes in vvvv that have a functionality which does not need to know anything about the datatype on which it operates, since the functionality is so *meta*. In modern programming languages this is commonly known as *generic programming*.

![](cupt.jpg) 

Some examples are Cons, GetSlice, Select, Queue... They all move around some data but don't really care about which data.

Over the past years some developers programmed generic node definitions and used them in the addonpack, in their own packs or contributions. This is a great thing, but for a new developer its almost impossible to know where they are all hidden.

The latest version of the [vvvv-sdk](https://betadocs.vvvv.org/devvvveloping/vvvv-sdk.html) contains [a project](https://github.com/vvvv/vvvv-sdk/tree/develop/vvvv45/src/core/GenericNodes) which gathers all generic node definitions from different places. Every node developer can now reference this project, covert the template files with a convenient patch and get over 20 nodes for his own data type for free:

**[Generic Nodes](https://github.com/vvvv/vvvv-sdk/tree/develop/vvvv45/src/core/GenericNodes)**

happy coding,
devvvvs<T>