---
user: "joreg"
created: "1387209319"
---

1) you mean the address (not the tag), right? or otherwise i don't get the question.. have you seen the helppatch of the {{< node "Server (VVVV)" >}}? there you should get an idea about the addresses of pins. they consist of node-ids (of all of their parent-nodes/patches) plus their pin-name

2) colors and enums should be easily possible, see https://github.com/vvvv/vvvv-sdk/blob/develop/vvvv45/src/nodes/plugins/vvvv/Server/VVVVServerNode.cs for others my guess is it would need some internal work

3) not sure what you mean here. the idea of the feedback is to mirror values you change in the patch on your device. 

4) cached pins are those which have been written to at least once. so you can set {{< pin "Accept" >}} to *Any*, write to some pins and then set {{< pin "Accept" >}} to *OnlyCached* and then only those will be able to receive further values. 

