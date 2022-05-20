---
user: "microdee"
created: "1504137574"
---

well something happened to the spout support because if I'm trying to register a spout sender it tells me this:
```
System.NotSupportedException: Unable to expand length of this stream beyond its capacity.
   at System.IO.UnmanagedMemoryStream.Write(Byte<) buffer, Int32 offset, Int32 count>
   at Spout.SpoutSender.WriteSenderNamesToMemoryMap(List`1 senders)
   at Spout.SpoutSender.RemoveNameFromSendersList(String name)
   at Spout.SpoutSender.Dispose()
   at VVVV.Nodes.VVVVSpoutSenderNode.Evaluate(Int32 SpreadMax)
   at VVVV.Hosting.IO.PluginContainer.Evaluate(Int32 spreadMax)
```
(newest alpha, x64)
More info on this: this is coming from the SpoutSender node anytime I hit write pin.
