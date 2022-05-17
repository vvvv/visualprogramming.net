---
user: "Elias"
created: "1416865684"
---

Well all nodes which need to be evaluated every frame (auto evaluate = true) are subscribed to the prepare graph event. The evaluation of their inputs leads to further evaluation calls on nodes upstream.
