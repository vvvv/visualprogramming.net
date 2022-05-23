---
user: "microdee"
created: "1463087879"
---

also + (Raw Spectral) doesn't like the changes:
```
System.ObjectDisposedException: Cannot access a closed Stream.
   at System.IO.__Error.StreamIsClosed()
   at System.IO.MemoryStream.get_Length()
   at VVVV.Nodes.Raw.PlusSpectralNode.Evaluate(Int32 spreadMax)
   at VVVV.Hosting.IO.PluginContainer.Evaluate(Int32 spreadMax)
```
