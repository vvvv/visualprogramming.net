---
categories: "Development News"
author: "Elias"
date: "2016-05-10"
title: "RAW performance speedup"
slug: "raw-performance-speedup"
description: ""
imported: "true"
---


Good news for those of you who often work with nodes in the RAW category. The general performance overhead has been reduced by quite a bit in the [latest alpha version](https://legacy.vvvv.org/downloads/alphas) of vvvv. The respective commit can be found [here](https://github.com/vvvv/vvvv-sdk/commit/28a715625fbc9f6d6a5ad18f1e00f1ebc5662bcc). 

This was achieved by an internal change to work with the [IStream](https://msdn.microsoft.com/en-us/library/windows/desktop/aa380034(v=vs.85).aspx) interface directly, instead of wrapping it in adapter classes, exposing it either as [System.IO.Stream](https://msdn.microsoft.com/en-us/library/system.io.stream(v=vs.110).aspx) to .NET or [TStream](http://docs.embarcadero.com/products/rad_studio/delphiAndcpp2009/HelpUpdate2/EN/html/delphivclwin32/Classes_TStream.html) to Delphi. So a downstream plugin node will now have direct access to the upstream stream output, instead of going through an internal adapter class.

In case you write your own plugins and you want to keep the overhead as small as possible create your own custom Stream class, which implements the before mentioned IStream interface - for example have a look at the ComStream.*.cs files [here](https://github.com/vvvv/vvvv-sdk/tree/develop/common/src/core/Utils/IO) and nodes making use of it [here](https://github.com/vvvv/vvvv-sdk/tree/develop/vvvv45/src/nodes/plugins/Raw).

Thanks to {{< user "woei" >}} and {{< user "jens.a.e" >}} for reporting the performance issues and keeping on nagging me about it ;)