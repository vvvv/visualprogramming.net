---
categories: "Development News"
author: "joreg"
date: "2012-11-08"
title: "new datatype: RAW"
slug: "new-datatype-raw"
description: ""
imported: "true"
---


here is to introduce a new primitive (node-)datatype. so next to value, string, ... transform there is now: raw

nothing to get too excited about as long as you're not dealing with device-communication and raw-byte handling. 

if that is what you do though, this is your lucky day. instead of misusing strings as bytearrays (which you had to do in vvvv until now - and you can still do) there is now a native raw (byte) datatype. so think no more {{< node "Ord (String)" >}} and {{< node "SpellValue (String)" >}} but instead:
* {{< node "AsRaw(Value)" >}}
* {{< node "AsRaw(String)" >}}
* {{< node "AsValue(Raw)" >}}
* {{< node "AsString(Raw)" >}}
make sure to check the helppatches of those to get all their details.

further the following nodes now have raw inputs:
* {{< node "UDP (Network Server)" >}}
* {{< node "UDP (Network Client)" >}}
* {{< node "TCP (Network Server)" >}}
* {{< node "TCP (Network Client)" >}}
* {{< node "RS232 (Devices)" >}}
* {{< node "Reader (Raw)" >}}
* {{< node "Writer (Raw)" >}}

still the old versions of those nodes with string inputs are available as modules and versioned "string". 

so this is to distinguish more clearly between string and byte-handling and should also have a positive influence on performance in situations where string/byte conversions can now be omitted. 

please give it a run and let us know what you think.
as always get the latest from here: [alpha builds](https://legacy.vvvv.org/downloads/previews)




