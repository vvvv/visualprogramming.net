---
user: "joreg"
created: "1341241055"
---

...and here is todays log:

~np~
[](16:09:20) <iorec__> 1) supporting sprite sheets for Texture
[](16:09:20) <iorec__> 2) test framework
[](16:09:20) <iorec__> 3) depth rendering
[](16:09:20) <iorec__> 4) keyboard/mouse state
[](16:09:20) <iorec__> 5) testing kontrolleur on android 4
[](16:09:43) <iorec__> so it seems we are a small group today..
[](16:09:53) <iorec__> please mino start with 1)
[](16:10:16) <mino_> ok
[](16:10:48) <mino_> i found this: http://www.codeandweb.com/texturepacker
[](16:11:46) <mino_> from new way to GPU rendering with actionscript
[](16:11:59) <mino_> called "Starling".
[](16:12:31) <mino_> it's only package of multi-images and xml.
[](16:12:39) --> sebl_ (~quassel@kvm2.johannwimmer.at) hat ##vvvv-meetup betreten
[](16:12:44) <-- sebl_ (~quassel@kvm2.johannwimmer.at) hat das Netzwerk verlassen (Client Quit)
[](16:12:59) <iorec__> never heard of such a thing..
[](16:13:22) --> sebl_ (~quassel@kvm2.johannwimmer.at) hat ##vvvv-meetup betreten
[](16:13:36) <mino_> it will save memory and faster than spreads.
[](16:13:36) <iorec__> so you give it a bunch of images and it puts those on a large texture atlas and returns an .xml which describes the layout?
[](16:14:59) <mino_> TexturePacker did that.
[](16:15:39) <iorec__> ok. so it should be easy to write a plugin that decodes that info and returns texture + texturetransforms?
[](16:16:00) <mino_> right :)
[](16:16:16) <iorec__> sounds good. you're welcome.
[](16:16:45) <iorec__> if noone objects 3...2...1..this goes to mino
[](16:16:52) <mino_> ok!
[](16:17:23) <iorec__> then i continue with 4) keyboard/mouse state
[](16:17:29) <iorec__> (also for mino)
[](16:17:59) <iorec__> remember you asked once for your gui plugin how to enter mouse/keyboard info to the plugin
[](16:18:17) <mino_> yes
[](16:18:35) <iorec__> latest alpha has new plugins/modules: Keyboard (System Global State), Mouse (System Global State)...
[](16:19:13) <iorec__> so you can now use those single connections to put keyboard/mouse states to a plugin
[](16:20:11) <iorec__> and create an ISpread<KeyState> and ISpread<MouseState>
[](16:21:30) <iorec__> (oh seems probably not yet in latest alpha..but will be later today..)
[](16:21:53) <mino_> sounds cool, then we can get set of properties of key/mouse, right?
[](16:22:11) <iorec__> right
[](16:22:32) <iorec__> TypeWriter (String) is using it already (in addonpack with sources)
[](16:23:04) <m4d> nice :)
[](16:23:16) <m4d> also hello all. just dropping by..
[](16:23:30) <iorec__> next: 3) depthrendering
[](16:23:34) <iorec__> good you're here m4d
[](16:23:56) <m4d> just read about INTZ in the  log :)
[](16:23:58) <iorec__> latest dx9ex - alpha has depthrendering of complete scenes available
[](16:24:08) <m4d> mighty cool!
[](16:24:18) <m4d> big thanks :)
[](16:24:19) <iorec__> just set a DX9Texture to Format: INTZ
[](16:24:54) <m4d> *heading over to  alphasection*
[](16:25:47) <iorec__> drawbacks: no antialiasing (as i understand it could work on ATI cards with RESZ, but not testet), didn't manage to move it via texture-sharing, no idea to realize depth/cube rendering
[](16:25:57) <iorec__> anyone with an ATI card to test?
[](16:27:01) <m4d> i have a firegl in my   laptop
[](16:27:07) <mrvux> @iorec, can you rebind it to another renderer?
[](16:27:16) <m4d> but it's really not latest gen
[](16:27:51) <m4d> +1000 for rebinding
[](16:28:13) <m4d> ==traditional deferred  rendering   in vvvv dx9
[](16:28:21) <iorec__> not sure what you mean..you should be able to use it as an ordinary texture
[](16:28:26) <m4d> (sorry, my space key  is broken)
[](16:29:17) <m4d> we're talking  about using that depthbuffer for early z rejection in  a following pass
[](16:29:21) <m4d> (e.g. lighting)
[](16:29:53) <mrvux> or stenciling
[](16:30:16) <iorec__> not familiar with those..does it need more than depth as a texture?
[](16:30:36) <mrvux> no, you need to be able to set that resource back as depth stencil
[](16:30:46) <mrvux> 2-3 main uses
[](16:31:13) <mrvux> 1/ you render your scene, every pixel that passes the depth test does an inc on stencil
[](16:31:41) <mrvux> 2/ when you apply your light pass (deffered), you rebind that stencil as input
[](16:31:51) <mrvux> and you change stencil test
[](16:32:13) <mrvux> so only pixel that got written previously will qualify for light calculation
[](16:32:38) <iorec__> ok, but does it require something that is not there yet in vvvv? or can it all be done in a pixelshader?
[](16:32:52) <mrvux> idea is it doesn't enter pixelshader at all
[](16:33:02) <m4d> yup
[](16:33:58) <m4d> it's mostly about optimization and more or less common practice in gamedevelopment for the last years
[](16:34:12) <mrvux> only thing that miss will be a few new renderstate nodes
[](16:34:47) <iorec__> k. but i am still missing the point where/how you want to "bind" that texture in vvvv terms
[](16:34:53) <mrvux> as renderer input
[](16:35:17) <mrvux> so instead of using a "blank" depth/stencil
[](16:35:24) <mrvux> it uses the already written one
[](16:35:39) <m4d> yeah
[](16:35:40) <iorec__> k, so the renderer would need a stencil-input?
[](16:35:49) <m4d> that would be  quite cool
[](16:35:53) <mrvux> depth and stencil is generally same resource
[](16:36:03) --> iptz|2 (~kvirc@188.134.48.8) hat ##vvvv-meetup betreten
[](16:36:09) <mrvux> just depth will be first 3 comps and stencl last one
[](16:36:21) <iorec__> oui..will see about that.
[](16:36:28) <m4d> nice :)
[](16:36:32) <mrvux> it's also quite cool for post proc
[](16:36:45) <iorec__> and how about antialising? that not so important with depth/stencil?
[](16:36:45) <mrvux> you can generate a stencil mask and save lot of lookup
[](16:36:58) <m4d> saves  looots of gpu cycles
[](16:37:26) <m4d> youmean antialising of the actual depthbuffer?
[](16:37:50) <iorec__> ya. or doesn't that make sense?
[](16:38:03) <m4d> no, i don't think so
[](16:38:16) <mrvux> it does, but not sure that's possible in 9
[](16:39:15) <iorec__> to my understanding this: http://aras-p.info/texts/D3D9GPUHacks.html suggests that it should be possible with RESZ on ati cards
[](16:39:27) <mrvux> and you'd need to be able to sample at subpixel level (for nice edge detection in things like depth of field, or if you do depth-> world reconstruction for lights)
[](16:40:49) <mrvux> if you find easy way to add feel free :)
[](16:41:44) <iptz|2> hey vux, do you know how to transform this INTZ depth for world pos reconstruction?
[](16:41:48) <m4d> i personally would think that it still could be yuite useful without multisampling etc
[](16:42:12) <m4d> yuite=quite jsyk..
[](16:42:16) <iptz|2> i had some problems.. it kinda needs these near/far positions from camera/projection
[](16:43:13) <iptz|2> helloes to everyone btw
[](16:43:13) <iorec> suggestion: move deph-reconstruction to ##vvvv
[](16:43:23) <iptz|2> ok
[](16:43:28) <mrvux> yep, will move that after
[](16:43:28) <m4d> heyunc
[](16:43:48) <iorec> let me continue with 2) test framework
[](16:44:06) <iorec> just wanted to make sure mrvux, woei and all have seen: [/forum-alpha/automated-help-patch-tests](/forum-alpha/automated-help-patch-tests)
[](16:44:32) <iorec> would be great to receive fixing pullrequests for those
[](16:44:50) <iorec> this obviously only did a quick check on the helppatches
[](16:45:19) <iorec> a more general patch testing framework is underway..
[](16:45:53) --> mrvux_ (~IceChat77@AAnnecy-158-1-29-65.w90-42.abo.wanadoo.fr) hat ##vvvv-meetup betreten
[](16:46:02) <mrvux_> will check those
[](16:46:18) <mrvux_> on latest alphas i noticed very often i have some red nodes first frame
[](16:47:12) <iorec__> ja? if those are not cool and you could pinpoint two revisions that caused that change for you we'd be happy to check.
[](16:48:18) <-- mrvux (~IceChat77@AAnnecy-158-1-23-44.w90-42.abo.wanadoo.fr) hat das Netzwerk verlassen (Ping timeout: 265 seconds)
[](16:49:11) <iorec__> oui, which brings us to the last point for today: 5) testing kontrolleur on android 4
[](16:49:25) <mrvux_> ok, seems mostly some renaming
[](16:49:33) <mrvux_> just double checked
[](16:49:50) <iorec__> just wanted to check if someone has an android 4 device and would be willing to give my latest fixes a try, also see: [forum](forum)
[](16:50:03) <iorec__> (@vux: yep)
[](16:50:26) <mrvux_> think i'm on 3.2
[](16:50:36) <m4d> 2.3:7
[](16:50:48) <mrvux_> and from what i remember, app from market was just crashing on start
[](16:51:24) <iorec__> right, that crash is supposed to be fixe.d
[](16:51:35) <mrvux_> k, can check now sec
[](16:51:41) <iorec__> but it is only guesswork since i cannot test
[](16:52:01) <iorec__> (but change is only in source yet..so you'd need to build yourself)
[](16:53:16) <mrvux_> ok
[](16:53:43) <woei> @iorec__ i can give you a device for a while
[](16:53:53) <iorec__> ah, right, that could help
[](16:54:40) <iorec__> well, then i think we can close here for today.
[](16:54:59) <iorec__> thanks everyone for coming by and have a great july.
[](16:55:22) <m4d> aye, same to all devvvvs!
[](16:55:47) <woei> cu
[](16:55:52) <mino_> sayonara!
~/np~
