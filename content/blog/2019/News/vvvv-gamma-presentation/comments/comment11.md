---
user: "domj"
created: "1555794883"
---

@tonfilm Wow, thanks for the detailed reply. Glad to hear it's this flexible and there's definitely a way.

I'm thinking of using the VL.Xenko integration for implementing a visualisation tool for my VL light control software. Ideally I would be loading models on the fly based on the actual used fixtures. There is the GDTF format for describing light fixtures, which is basically a zip of XML definition, 3d models in .3ds format and other stuff. So I'm imagining a system basically working as the Half-Life/Source/CS downloading asset loader. Load the fixture layout (level) and all missing assets (fixtures, animations, etc.) are downloaded from a server, unzipped and loaded into Xenko at realtime. By the sound of it, this all should be fairly possible.

It would be pretty amazing if you managed to release a preview version of VL.Xenko as well. I think everyone understands it's absolutely bleeding and edge and in many cases experimental and there might be regressions during updates. But it already looks like it could be put to great use and this way many of the approaches you guys are taking could be tested by the wider community.
