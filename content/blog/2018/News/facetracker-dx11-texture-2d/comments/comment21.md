---
user: "microdee"
created: "1562241092"
---

it was missing mp.pddn.dll but vpm should have taken care of that. Please check if A: there's an md.core folder and there's an mp.pddn.dll inside that folder in your packs folder and B: your vvvv.exe.config file next to vvvv.exe (hidden by default) contains
```
<probing privatePath="lib\core;packs\md.core" />
```

