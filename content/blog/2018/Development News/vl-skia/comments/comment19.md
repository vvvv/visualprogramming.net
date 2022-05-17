---
user: "domj"
created: "1548612747"
---

@gregsn
Hi, is there any progress on the touch input? Is it just about adding handlers for the events coming to the WndProc function (seems you're using WinForms)? I would take a shot at it but unfortunately the source isn't available yet.

Thing is that passing IImage from Skia to DX turns out to be a fair performance hit on slower GPUs.
Also the way you implemented the Console as a layer to automatically transform World Position is really handy and would be pretty damn neat for multitouch.

The way Windows translates touch input into mouse is unfortunately not very well suited to UIs. For a tap to be registered as a click one either has to tap twice or drag.

Working on this now https://youtu.be/M1vtqIfHcN4
