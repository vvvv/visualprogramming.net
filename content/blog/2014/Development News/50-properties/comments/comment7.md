---
user: "tonfilm"
created: "1417962286"
---

you are not forced to use pairs, but if you think about it, with only a Getter you would never change the value of the property, so it would always have the default value. and if you only had a Setter, you would change the property value but no one will ever do anything with it.

this is of course only half of the story as we are talking about 'inside' the patch. things change as soon as other patches have access to the property from 'outside'... but let's discuss this case over a later blog post.

it is however interesting to contemplate a bit (while walking in the park on a sunny afternoon) about the possibilities when you have a Setter on one operation and a Getter on another... 
