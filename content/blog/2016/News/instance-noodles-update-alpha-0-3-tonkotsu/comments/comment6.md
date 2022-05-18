---
user: "everyoneishappy"
created: "1469487277"
---

@elektromeier
Someone else had that, we worked out that they were not having shader uint types come up as pins in patch. I'm not sure what the fix is for that yet (are you using current DX11?), but as a workaround you can change uint to int.  So for example in SphereSDF change
```
uint tranformCount, radCount, maxCount;
```
to
```
int tranformCount, radCount, maxCount;
```
