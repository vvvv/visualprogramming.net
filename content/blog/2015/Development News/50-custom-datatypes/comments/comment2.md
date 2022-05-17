---
user: "gregsn"
created: "1425488632"
---

@ggml: for now the patch itself is the definition. 
* it defines the data type via its used properties. 
* it defines the operations (like create and update).
* it defines the data types of the operations' inputs and outputs via their usage.
(..)

By that you don't have to switch between different views (e.g. patch view for operation body = data flow and some definition view for data type definition & operation signature).
That said, for more complex types we might add a definition view later on.

Does this answer your question?
