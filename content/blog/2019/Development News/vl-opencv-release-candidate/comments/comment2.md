---
user: "ravazquez"
created: "1553004654"
---

@isdzaurov, yes, it is possible to do just that, we tested it and it worked. Be advised that this is an expensive operation so you might want to optimize performance. A couple of simple ways to do this would be to downscale the image before processing it and to make use of the AsyncLoop region to run this on its own thread.

Also, there are quite a lot of parameters to tweak and it can take some time before you get proper results based on your data. Let me know if you need any help.

@m9dfukc glad to hear you will be moving over to VL, you will not look back I am sure. As for stability and performance, stability seems to be quite good from our tests, as for performance, the underlying wrapper we are using (OpenCVSharp) does not have GPU support, so you do need to keep that in mind, but so far for us and other users trying the library out it has been good. If you are handling large images on high framerates you will very likely need to get creative.
