---
user: "velcrome"
created: "1535380940"
---

just started using it, and found something odd.
it is the fact the Serialize node will omit attributes, if they are zero.

so here I have a Spread of 7 SoftEdges, any of them is defined by its offset, its gamma, and its width.

```
<Item Gamma="0.64" />
<Item Offset="0.1666667" Scale="0.01" Gamma="0.64" />
<Item Offset="0.3333333" Scale="0.01" Gamma="0.64" />
<Item Offset="0.5" Scale="0.01" Gamma="0.64" />
<Item Offset="0.6666667" Scale="0.01" Gamma="0.64" />
<Item Offset="0.8333333" Scale="0.06" Gamma="0.64" />
<Item Offset="1" Gamma="0.64" />
```

so after the serialization, there are values missing. 
I would rather have this Omission optional, please. 

* using this mechanism to update the data of other (e.g. networked) instances won't ever change them back to the default of a field
* it makes interop with other (less statically typed) programming dialects just harder on their side 

