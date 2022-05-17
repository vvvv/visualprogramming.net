---
user: "gregsn"
created: "1418316283"
---

@sven:
i fear i have to make you wait for a blog post still to come, which will be about evaluation of patches like the one you see above. but good thinking!

the good news is that you can really break up your question into:
* how and when do properties evaluate within an operation (like "update")? well. this one is answered best like joreg did already: when update is evaluated, properties are read, then nodes get called, then properties are written to.
* how and when is "update" being called? this question we'll answer properly later on.

edit: soo, you basically can think in frames WITHIN your patch without knowing where those frames come from, in which frame rate or if there are different clocks. WITHIN the patch you just focus on the internals of one evaluation step (=update).
