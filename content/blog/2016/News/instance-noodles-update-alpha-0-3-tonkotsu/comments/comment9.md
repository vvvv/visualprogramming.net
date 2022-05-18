---
user: "everyoneishappy"
created: "1470310888"
---

can change lines 71-73 to:
```
	uv0 = uvMode.Map(p0,0,0)*scale+offset;
	uv1 = uvMode.Map(p1,0,0)*scale+offset;
	uv2 = uvMode.Map(p2,0,0)*scale+offset;
```

fixed for next release, thanks.
