---
user: "velcrome"
created: "1573139824"
---

do you mean access by index? as in 

```
var slice = FPin<0>;
```

afair vvvv always tries to zmod the index with the spread count, so this always failed when the spread count is in fact 0, with an error message as you said ("division by 0"). 
what's the behaviour now, if the old behaviour has been "fixed"? 

or is this even what you meant?


