---
user: "tonfilm"
created: "1338827682"
---

continued:

```
18:11:07 <mrvux> yeah, you added the feature some time ago
18:11:15 <iorec> ok.
18:11:18 <mrvux> so it takes bg color for window background
18:11:41 <mrvux> maybe a window background property in attribute
18:11:46 <iorec> sounds like a detail...
18:12:06 <mrvux> lot of details makes things nice ;)
18:12:13 <iorec> so we'll check the handle stuff and move on (for now)
18:12:20 <iorec> @9?
18:12:26 <mrvux> it's not vital, but just nicer for prod systems
18:12:56 <mrvux> ok, so for now you have this 2 ways for pinischanged:
18:13:02 <mrvux> -1 always true
18:13:20 <mrvux> 2/Deep check (eg is checks for every value on previous slice)
18:13:43 <mrvux> would be nice to have "Signal"
18:14:05 <mrvux> eg: output pins have a markaschanged (or set flag when they write to it)
18:14:24 <mrvux> 2 is totally inefficient for transforms/colors for example
18:14:54 <mrvux> but 2 is also nice for big resource generators (filetexture/meshes like sphere)
18:15:22 <mrvux> even tho in case of things like filetexture something like -> slicechanged would be nicer
18:15:30 <mrvux> so it's a not trivial topic
18:16:42 <thalm_> true
18:17:19 <mrvux> for transforms, on all tests the changed check eats so much processing power
18:17:41 <mrvux> like a scale is like either set 3 values (not connected)
18:17:53 <mrvux> or multiply 12 values (connected)
18:18:12 <mrvux> so by the time the check is done you'd have already finished the job
18:19:08 <thalm_> what would be your suggestion?
18:19:31 <mrvux> well for the moment you have valueinput/vauefastinput
18:19:42 <mrvux> you should have one type of pin per datatype
18:19:48 <mrvux> on input
18:20:06 <mrvux> then have something like : setchangemodel(model)
18:20:23 <mrvux> i can see it will need a lot of rewrite tho
18:21:06  ⇐ azeno, iorec_ and gregsn quit  
18:22:42 <iorec> exactly. problem is know, all ideas to it need a major rewrite..so on standby for now.
18:23:09 <mrvux> of course, not needing that instantly, but good to keep in the idea
18:23:22 <mrvux> and having a proper think on how to do it
18:23:34 <iorec> yep.
18:23:37 <iorec> @10?
18:24:12 <mrvux> ah, just a simple one, for the moment i think only some assemblies are registered for containers right?
18:24:42 <mrvux> something like [](Import()) ILogger logger;
18:25:01 ⇐ phleg (57ea3c62@gateway/web/freenode/ip.87.234.60.98) quit: Ping timeout: 245 seconds
18:25:32 <thalm_> yes for performance reasons, as MEF is utterly slow
18:25:57 <mrvux> so are most DI systems afaik
18:25:57 <thalm_> we could of course define some kind of subdir which gets scanned/imported on startup
18:26:12 <mrvux> could it be possible to register assembly via code?
18:26:52 <thalm_> i think so yes but would need to have a look into mef api
18:27:01 <thalm_> (azeno writing here)
18:27:05 <mrvux> ok
18:27:18 <thalm_> guess we can discuss these things in private
18:27:25 <mrvux> for now there is IStartable as well, so would combine very nicely
18:28:06 <mrvux> or custom factory can register some services
18:28:21 <iorec> oui, i think thats something for a smaller group to discuss.
18:28:31 <iorec> and we can close the meeting here?
18:28:31 <mrvux> ok cool
18:28:44 <mrvux> can i add a little 11? ;)
18:28:54 <iorec> nope
18:28:57 <iorec> heh
18:28:58 <mrvux> heh
18:29:02 <iorec> we need to go on here
18:29:03 <iorec> next time
18:29:13 <mrvux> ok
18:29:15 <iorec> 10 points on the agenda should be enough for everyone.
18:29:39 <iorec> thanks all and good code.
18:30:00 <mrvux> ty all
18:30:15 <woei> cu
18:30:17 <m4d> aye, take care, mates
New messages since you scrolled up
18:30:31  → azeno, iorec_ and gregsn joined  
18:30:38 <thalm_> bye bye
18:30:39 <seblllll> adieu
```
