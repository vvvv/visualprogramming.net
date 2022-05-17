---
user: "robotanton"
created: "1472992885"
---

Hi @soundanalogous!

Indeed, we've used the Capability Query from the beginning to automagically determine the configuration. But the problem is that not all Firmata implementations support this Query. Unfortunately. As far as I know the Teensy implementation don't answer to this Query (correct me if I'm wrong).

With our current approach everybody can just copy one of the Arduino nodes (and its internal BoardConfig module) and adjust the BoardConfig to (any) Board's specs.

I guess that this blogpost is the best link at the moment.
Thank you!

Best,
Anton
