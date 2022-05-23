---
user: "velcrome"
created: "1497739639"
---

Got a nasty one. Three of my plugins in vvvv-Message turn red (and only them), but neither exception nor tty hints to why. From my understanding, this cannot be blamed on my code, because my code cannot fault without the full escalated response from the host, i.e. red colored nodes, tty spam and exceptions. 

This is happening to HoldKeep and SafeKeep (and therefore somewhat essential for the pack).

I made a [downloadable pre-release](https://ci.appveyor.com/project/velcrome/vvvv-message-tem27/branch/develop/artifacts) for demonstration purposes. 
Copy the contents of the vvvv-Message.zip into \packs\vvvv-Message.
Start a fresh patch, enable exceptions and add a tty renderer, and then create HoldKeep. 

Don't know what to do, because debugging them shows no error whatsoever. They initialize and evaluate the way they are supposed to. But just creating them from blank shows them red.
If it would help I could try to compile them against rc5, would you mind publishing a valid nuget so I can update?

edit: 
reproduces either without dx11 pack, or with the newest 0.1.44
tested with x64
