---
user: "herbst"
created: "1352381706"
---

Well, this is for sure going to take a while until it sinks into heads...

@joreg: I did what you suggested and changed the encoding to cp1252, and both examples work. Then I sat there, starring at my patch. I understand why it works, but for that you have to know all the internal and tricky details of encoding - the patch as it is (an image read and written with cp1252) is just ridiculous.

(Wouldn't it be easier to implement (and easier to understand) a "raw bytes" encoding method in Reader than to build entirely new nodes? I don't think that a change that is meant to make life easier is supposed to introduce dozens of new nodes (an entire new node class!).)

And I would like to suggest to make the encoding pin visible by default. Asking yourself "why the heck can't I store downloaded images anymore?" isn't great, you would basically force everyone to google and find this post here with explanations (be it "use Reader (bytes)" or "set the hidden encoding pin to cp1252").
