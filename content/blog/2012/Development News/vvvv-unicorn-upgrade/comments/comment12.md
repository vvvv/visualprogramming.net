---
user: "joreg"
created: "1351034658"
---

ok, i'll try again. 

text-strings:
the (big) plus is that when dealing with strings in most cases you will no longer have to be aware of the existence of encodings. unicorn is now the first-class citizen in vvvv. only when dealing with legacy-ansi strings you'll have to deal with encodings at all. so less fiddling and conversions in general. 

binary-strings:
our understanding is that you'll not notice a difference unless you're doing strange things like loading binary data from disk with a non-8bit-ansi encoding. 

so basically we're only changing the default-encoding for the file reader/writer nodes (while keeping the default in old patches as mentioned above) as in our endless quest for the best defaults we understand that the modern default for string encoding is utf8, no longer 8-bit ansi. and file reader/writer are foremost string-handling nodes. so their defaults should please string-handlers first. 

with introducing a separate first-class datatype for byte handling all byte-handlers shall be pleased as well. so kinda win-win.

hope that makes sense.
also please just ride the latest unicorn and see if you find anything not still working as you'd expect.
