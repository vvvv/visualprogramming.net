---
user: "domj"
created: "1550831517"
---

@microdee @joreg I agree that multiple patch views are a must and clicking back and forth between patches increases cognitive load and I think discourages from modularizing the code well. Although I also think that maybe free floating windows might not be the best answer as for me at least in vvvv they always tend to become a bit of a mess as long as there is no proper way to lay them out. I would suggest to maybe think about a similar approach to what blender uses (if the multiwindow features are ignored) - hosting multiple editors inside a single window.

I tried my hand now switching from multiple windows for editors in my project to a single window hosting multiple editors via the super simple to use Skia Panel.

https://youtu.be/smh69W-nfcM

It's a crude and fixed implementation but I think it has potential to reduce window clutter, have savable workspaces, etc. I could imagine any future internal VL debugging tools be neatly packed in these panels as well.
