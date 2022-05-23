---
user: "lecloneur"
created: "1418462017"
---

@sebl
Here I didn't use subpatches on purpose, as I didn't really need to remake this camera module. This was just to show how it could be, and how hard it is to keep things clean and straight.

Here are some patches from C-MiX, all as clean as possible. You're right about the complexity of a patch, but while I can align nodes, I can't force straight lines (not talking about CTRL+Y), we could potentialy force orthographic patch for example. 

![](cmix.png) 


I can't choose the position of input pins on shaders, which sometimes force me to have line crossing each others. Also, the position of IOBox define the position of input or output pin of a module, but if I want to keep things tight all over the project, sometimes I must modify every IObox position from sub patche to sub sub patch etc...

When I'm teaching vvvv, at first and actually for quite a while, students only see grey lines... if I had colors for data type, I could explain the structure of the program first to anyone (especially non-programmers) and then, dive into the little function like LFO, Sift, etc... and show them how one part of it is working. In vvvv, everything is graphically equal, while it is definitely not from a technical point of view. The only thing who make difference betweens node is the amout of pins or the name, that's for now the only parameters which change a node graphically.

