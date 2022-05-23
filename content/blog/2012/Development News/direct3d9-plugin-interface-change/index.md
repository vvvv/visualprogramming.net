---
categories: "Development News"
author: "Elias"
date: "2012-01-26"
title: "Direct3D9 plugin interface change"
slug: "direct3d9-plugin-interface-change"
description: ""
imported: "true"
---


As of [this commit](https://github.com/vvvv/vvvv-sdk/commit/2a328e0ee03f46a3159b1f04ad44aafdbb60f220) the plugin interfaces dealing with Direct3D9 stuff changed, breaking existing plugins using those interfaces. Plugins using the base classes from the VVVV.PluginInterfaces.V2.EX9 namespace are not affected by this change.

The affected interfaces are:
* IPluginDXResource
* IPluginDXMesh
* IPluginDXTexture
* IPluginDXTexture2
* IPluginDXLayer

The change was necessary as it was unclear when to release the [SlimDX device](http://slimdx.org/docs/html/T_SlimDX_Direct3D9_Device.htm) used by all implementations of these interfaces.

The situation before this change was like this:
```
public void UpdateResource(IPluginOut forPin, int deviceAddress)
{
  // The next call will either increase the reference count on the 
  // internal device and add the device to the object table of SlimDX 
  // or it will simply fetch the device from that object table 
  // (if the exact same call was for example made by another plugin)
  // and leave the reference count as is.
  var device = Device.FromPointer(new IntPtr(deviceAddress));

  // if not created yet
  var resource = SomeResource.Create(device);
  // do something with the resource

  // The next call is dangerous, as the reference count to the internal 
  // device will be decreased by one and the device will be removed from
  // the object table of SlimDX, but what about the resource created a few 
  // lines above? Or what about resources created by other plugins, which 
  // might still hold a reference to the SlimDX device?
  device.Dispose(); // Some plugins called this, some not

  // Not calling Dispose on the device is also not correct, as SlimDX 
  // will still hold a reference to the internal device. Say vvvv 
  // wants to go fullscreen and therefor creating a new device it 
  // might not be able to do so, as it can't get rid of the old one 
  // (reference count is still one).
}
```

So to get rid of all this confusion, we decided to move the Device.FromPointer() and device.Dispose() calls to a more central place, (where it is exactly known when a device gets created or destroyed) and hand that already created SlimDX device over to the plugin via the above mentioned interfaces. The plugin should never need to create or destroy a device, it should just use it. Therefor the above example gets as simple as this:
```
public void UpdateResource(IPluginOut forPin, Device device)
{
  // if not created yet
  var resource = SomeResource.Create(device);
  // do something with the resource
}
```

So the rule of thumb now is like it is for every other object implementing IDisposable: only call Dispose() if it is you who created that object. As you didn't create the device, **don't call Dispose()** on it.