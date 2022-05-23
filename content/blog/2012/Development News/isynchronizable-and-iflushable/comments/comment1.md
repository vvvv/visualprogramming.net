---
user: "Elias"
created: "1343384435"
---

calling Sync or Flush can lead to calls on COM interfaces, which will immediately throw an exception if called from another thread than the vvvv main thread.
as i explained in the blog post, Sync will definitely lead to a COM call, as it calls the Validate method on the underlying IPluginIO interface. so this is a no go.
on the other hand calling Flush from another thread could work depending on the used datatype, as for example the int/float/double/bool/vector/matrix stream implementations work directly on the unmanaged data pointer.
but in those cases the Flush is either a no op, if you work with IOutStream directly or when working with an IIOStream or an ISpread it leads to a very fast mem copy for the above mentioned data types, so i doubt that it would make much of a difference.
