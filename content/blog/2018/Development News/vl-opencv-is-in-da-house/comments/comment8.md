---
user: "catweasel"
created: "1525810571"
---

From the Matrix for adding other fucntions

So the basic idea is that we are using this C# opencv wrapper called OpenCVSharp
in the end for us to be able to use an opencv function it need to be supported by the wrapper
K
you can go to their website and check, but the easiest way would be to (in VL) open any of the currently available VL.OpenCV nodes, and once you are inside the VL.OpenCV document, just double click and type the name of the function you want to add, if it shows up you are already on the right track, if its not, it is probably not supported by the wrapper

if it does show up, then you can have a look at similar nodes we already added, and have a look at how we did it.  In most cases its very straightforward (like the MinMaxLoc), some cases require a bit more work, but with that you should be able to explore already, and of course we are here to help with any questions/problems you might find
