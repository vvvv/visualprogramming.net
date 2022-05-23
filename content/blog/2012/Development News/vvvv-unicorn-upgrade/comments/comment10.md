---
user: "joreg"
created: "1350580021"
---

helo herbst, thanks for your great report again. you brought up a good point, here is the thing:

vvvv is misusing strings as arrays of bytes. this was fine/convenient in betas<=28.1 where a string in fact internally was just an array of bytes.

now vvvv strings support unicode (internally with utf16 encoding). thats great when using strings for handling text (which is what strings are actually for) but makes it more tricky when using strings to handle binary data. 

so now in vvvv we have to distinguish:
1. using strings for text -> all is great
2. using strings for binary -> beware of the encoding

ad 1)
this is what reader and writer nodes got the {{< pin "Encoding" >}} for. they will default to UTF8 now, but loading old patches the setting will be "System Default" (just for backwards compatibility). nothing more to worry. 

ad 2)
thats your first example when loading a .jpg (binary file). you'll have to use 8bit encodings like the *Windows-1252* for example. when using that same 8bit encoding for reading and writing your example will work. 

same for your second example: set the writers {{< pin "Encoding" >}} to *Windows-1252* and it will work. 

there are some more details..which i spare us here (unless anyone hits them).
---
that said it turns out it will make sense to introduce a new data type "binary" and nodes like AsByte (Value) (similar to SpellValue), AsValue (Byte) (similar to Ord), AsByte (String), AsString (Byte), ... and have a Reader/Writer (Byte) and have UDP/TCP/Rs232..nodes deal with "binary" directly instead of strings. but more on that later...

@jens.a.e: in case you read this: please wait for this with adapting your node to unicorn.
