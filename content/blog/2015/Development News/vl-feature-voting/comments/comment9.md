---
user: "Elias"
created: "1435606003"
---

Well it should be there for Concat. For now it gets applied to all nodes following the signature (Input, Input 2) -> (Output) and type of Output is a subtype of type of Input. If you build your operations the same way the dynamic pin count will be applied to those nodes too. The system internally simply replicates the node in question and connects the in- and outputs.
Cons doesn't follow that signature and therefor the feature can't get applied as it is right now.
Also note that the Enabled pin works in a similiar fashion, should a node follow the signature (Input, ...) -> (Output) the enabled pin will be added. Internally the node will be wrapped in an if region.
