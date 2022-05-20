---
user: "joreg"
created: "1338827602"
---

danks again for bugging us. here is the log:

~np~
[](16:24:43) <elliotwoods_> 1) Texture + other DX resources on input (current state + roadmap)
[](16:24:43) <elliotwoods_> 2) Image type (reflection on current options + community decision for future)
[](16:24:43) <elliotwoods_> 3) Outputs from Renderer (e.g. Depth buffer)
[](16:24:43) <elliotwoods_> 4) 'Active Layers' (receive mouse actions)
[](16:24:43) <elliotwoods_> 5) improvements on implementation of plugininterface v2 texture out
[](16:24:44) <elliotwoods_> 6) VVVV DX pipeline (sharing vertex data between passes, DX11, 100% vvvv-sdk based?)
[](16:24:44) <elliotwoods_> 7) Access to Some window property for gui plugins (bg color, window handle/messages)
[](16:24:45) <elliotwoods_> 8) Windowed nodes (all) to have hwnd output as hidden output.
[](16:24:45) <elliotwoods_> 9) Pin IsChanged srategy
[](16:24:46) <elliotwoods_> 10) Register (Import) services from separate asemblies (maybe already poss, but think was only checked in core libs)
[](16:26:37) <elliotwoods_> ok so we got everyone here?
[](16:26:57) <iorec_> jep. at 1)
[](16:26:59) <elliotwoods_> anybody we were expecting not here? fibo? alg? tonfilm?
[](16:27:37) <elliotwoods_> we need a way of getting GPU data back into the CPU graph
[](16:27:57) <iorec_> is that @ 1)?
[](16:28:09) <elliotwoods_> e.g. use GPU to transform a kinect mesh, and then run an OpenCV contour on it
[](16:28:12) <elliotwoods_> yes
[](16:28:16) <elliotwoods_> DX resources into plugins
[](16:28:41) <iorec_> ouright, so the thing here is: devicehandling in vvvv is propagated from the renderers upstream
[](16:28:41) <elliotwoods_> well it goes 2 ways:
[](16:29:12) <iorec_> nodes with only device-inputs (like the pipet eg) get their device magically from a "device-service"
[](16:29:33) <iorec_> this device-service is not yet exposed via the plugininterface as it has some "details"
[](16:30:08) <iorec_> it is absolutely clear that/why this is needed
[](16:30:21) <iorec_> but atm there is no work done on it. 
[](16:31:07) <mrvux> gpu data back in cpu also creates problems
[](16:31:31) <elliotwoods_> i think you have to be clear there
[](16:31:44) <mrvux> take a node like info/pipet
[](16:32:01) <mrvux> and a standard render system
[](16:33:09) <elliotwoods_> typing?
[](16:33:13) <elliotwoods_> ;)
[](16:33:23) <mrvux> basically normally you have the following stages
[](16:33:31) <mrvux> -Evaluate graph
[](16:33:34) <mrvux> -Render
[](16:33:55) <mrvux> For a node like Info, you need the data at the evaluate stage
[](16:34:02) <mrvux> which means you need to render
[](16:34:08) <mrvux> so that breaks this render system
[](16:34:50) <elliotwoods_> so info has an implicit framedelay?
[](16:34:53) <mrvux> since you need to render part of the render graph in order to know what texture will be
[](16:35:05) <mrvux> no, i guess info calls render on evaluate
[](16:35:20) <mrvux> otherwise you would have problems with a 0 size texture
[](16:35:26) <mrvux> for one frame
[](16:35:41) <elliotwoods_> is that the way vvvv works now?
[](16:35:52) <elliotwoods_> with dx9?
[](16:36:34) <mrvux> guess so, since you can see some info nodes eating up lot of time , not because they slow but because they need to render anything upstream in order to get the data
[](16:37:06) <elliotwoods_> ok, but there's already a mechanism for this in vvvv so we dont have to reinvent it
[](16:37:18) <mrvux> yes, but that mechanism is a problem
[](16:37:19) <elliotwoods_> fixing it for perf issues is a seperate topic
[](16:37:54) <elliotwoods_> perhaps we could have config pin for any node like this
[](16:37:56) <elliotwoods_> with enum
[](16:37:59) <mrvux> specially in case of multi device
[](16:38:01) <elliotwoods_> 'EvaluateThisFrame'
[](16:38:06) <elliotwoods_> 'EvaluateForNextFrame'
[](16:38:37) <iorec_> it seems we can't really follow here.
[](16:38:57) <iorec_> vux is trying to tell that there is a problem with the info-node?
[](16:39:15) <elliotwoods_> he's saying there's an issue with mixing gpu and cpu graphs
[](16:39:16) <iorec_> if so, wouldn't it be best to demonstrate this in a patch?
[](16:39:40) <elliotwoods_> when the gpu elements of the graph are implicitly 'evaluated' (i.e. rendered) after the cpu sections
[](16:39:59) <elliotwoods_> this either:
[](16:40:08) <elliotwoods_> a) causes slowdowns / fiddly bits in the graph
[](16:40:27) <elliotwoods_> b) causes stale data
[](16:40:52) <elliotwoods_> c) staggers renderering in a a way that's abnormal to the general flow of evaluation
[](16:41:16) <elliotwoods_> anyway, this is all about a mechanism which is already in place
[](16:41:23) <elliotwoods_> and i think is a different point
[](16:41:35) <iorec_> ok, so: is this a problem now with pipet/info? then can you show a patch that demonstrates this?
[](16:41:36) <elliotwoods_> as it will influence the result of this point
[](16:41:45) <elliotwoods_> but we only get poor little minutes on each ;(
[](16:42:18) <mrvux> ok, i'll make a more descriptive post if you want, so you can continue on how to plan the feature
[](16:42:34) <iorec_> @vux, sounds helpful, yes please.
[](16:42:34) <elliotwoods_> cool!
[](16:42:43) <mrvux> since i still think resource input is pretty needed (think spreaded texturefx for example)
[](16:43:16) <iorec_> fcourse. then @2) elliot please report
[](16:43:25) <elliotwoods_> so i think it's worth narrowing down the usage cases to start with
[](16:43:52) <elliotwoods_> e.g. resource input on nodes is useful for informational purposes in general? (that's what others are suggesting?)
[](16:44:09) <elliotwoods_> i'd be happy with copying the buffer of a renderer
[](16:44:18) <elliotwoods_> i.e. EX9 output
[](16:44:34) <elliotwoods_> so instead of DX9Texture
[](16:44:37) <elliotwoods_> you'd have your own node
[](16:44:55) <elliotwoods_> having the node accept a texture input is more general purpose
[](16:45:09) <elliotwoods_> but does it cause more issues?
[](16:45:11) <mrvux> yeah, information is useful for debug, and gpu -> cpu has also some uses
[](16:46:37) <iorec_> @elliot is this @2 already? (cant follow again)
[](16:46:49) <elliotwoods_> ah no that's 1
[](16:46:55) <elliotwoods_> seems like a dead topic though
[](16:47:03) <elliotwoods_> we're waiting on device-service for plugins right?
[](16:47:12) <elliotwoods_> if so, move to 2
[](16:47:20) <iorec_> not dead, right, waiting for device-service as i mentioned above.
[](16:47:39) <iorec_> yes please @2, you report
[](16:47:48) <elliotwoods_> ok great
[](16:47:56) <elliotwoods_> so as some of you know
[](16:48:04) <elliotwoods_> i've been batting on about image types since around Node 10
[](16:48:12) <elliotwoods_> + a bit before
[](16:48:29) <elliotwoods_> and eventually it became necessary to put it together
[](16:48:33) <elliotwoods_> so i made the OpenCV nodes
[](16:48:48) <elliotwoods_> this somewhat follows on from azeno's suggestion of using IPLImage (now CvMat)
[](16:49:25) <elliotwoods_> i think with a rewrite of some bits this could become stable enough to be a standard VVVV image type
[](16:49:44) <elliotwoods_> but since a standard VVVV image type is such a valuable thing, it needs community decision making
[](16:49:51) <elliotwoods_> + developer 'endorsement'
[](16:50:19) <elliotwoods_> the features i've found to be important are:
[](16:50:26) <elliotwoods_> 1) a flexible threading model
[](16:50:48) <elliotwoods_> 2) a bitmap type with decent framework implementation
[](16:50:55) <elliotwoods_> 3) CvMat is great to work with
[](16:51:19) <elliotwoods_> I think a rewrite would use handrolled OpenCV C++ .NET wrapper
[](16:51:36) <elliotwoods_> Offer enough threading models that nodes wouldn't need texture outputs anymore
[](16:52:35) <elliotwoods_> so i know there are new possibilities with HDE. i'm not really a fan of taking things entirely outside the graph tbh
[](16:52:57) <elliotwoods_> but also admit that there's a lot of really great improvements to be made
[](16:53:03) <elliotwoods_> am i on a wild goose chase here?
[](16:53:07) <iorec_> ok. our stance on this: 
[](16:54:47) <iorec_> we haven't put any thoughts on such an image-type so we don't have much of an opinion about it...
[](16:55:05) <iorec_> ...we appreciate very much you and vux et al working on this...
[](16:55:19) <iorec_> ...and trust that you make good decisions... 
[](16:55:37) <iorec_> ...we simply don't have the time to work on that as well...
[](16:56:23) <iorec_> ...when there are details to discuss though, demonstrations where you want to get specific feedback on..
[](16:56:43) <iorec_> ..then you're very welcome to approach us about such things...
[](16:57:06) <iorec_> ...we simply don't have the time to check all your great contributions and get an opinion on everything..
[](16:57:11) <iorec_> ..does that help?
[](16:57:47) <elliotwoods_> yes it helps of course
[](16:58:04) <iorec_> you seem to be quite far with it already...now you're talking of a rewrite...we simply cant comment on that 
[](16:58:38) <elliotwoods_> rewrite the base image type mostly.
[](16:58:47) <elliotwoods_> whilst it's in alpha, i'm constantly breaking it, refactoring it
[](16:59:08) <elliotwoods_> i think after rewrite the base type and node templates
[](16:59:23) <iorec_> ya, so seems you're kind of asking for a partner in crime to join you and nail this thing. right?
[](16:59:33) <elliotwoods_> then i'd really like to get a 'yes or no' on whether it could work as a standardised image type for vvvv
[](17:00:01) <mrvux> i quite agree with "standard types", which is imo not limited to image types technically
[](17:00:21) <elliotwoods_> i'd like a residency to finish it ! :)
[](17:00:53) <iorec_> ok. good point. anyone with a vacant residency for elliot to finish his stuff?
[](17:01:52) <iorec_> to me it seems the bright minds are there..you'd just need to join forces..
[](17:02:13) <elliotwoods_> yes it's true.
[](17:02:14) <iorec_> and if it works, the community will love and support and standardize it. no?
[](17:02:25) <elliotwoods_> perhaps we can have a talk about new standardised types at node13?
[](17:02:33) <mrvux> +1
[](17:03:05) <elliotwoods_> more importantly: the community and the developers want to know that it want be succeeded by a more 'official' offering
[](17:03:27) <mrvux> it needs some cleanup on plugins (like separate datatypes/nodes), but would be much easier to work with
[](17:04:05) <iorec_> @more official offering: as i said: concerning image type we can say that we are not working on anything.
[](17:04:09) <woei> @succeeded by something more official. what about that opentk thing which popped up in the git. might that endanger elliots image type?
[](17:04:26) <iorec_> @woei: no
[](17:04:34) <elliotwoods_> opentk = opengl, etc in .NET
[](17:04:44) <elliotwoods_> i made one myself as well :)
[](17:04:52) <iorec_> so...how about moving on to 3)?
[](17:04:56) <elliotwoods_> https://github.com/elliotwoods/VVVV.Nodes.OpenGL is OpenTK
[](17:05:21) <elliotwoods_> yes yes
[](17:05:37) <m4d> i personally think that with new renderpaths on the horizon (e.g. opengl) we need some standard image and mesh types even more urgent
[](17:06:03) <elliotwoods_> can we say that when a datatype becomes standard enough, then it will exist in vvvv core
[](17:06:20) <elliotwoods_> therefore allowing it to be used in general by all 3rd party devs
[](17:06:29) --> thalm_ (u4668@gateway/web/irccloud.com/x-vomrexkeikhwqnwq) hat ##vvvv-meetup betreten
[](17:06:30) <m4d> +1
[](17:06:42) <elliotwoods_> and of course at that point implies a standard of maintenance for that type
[](17:06:50) <azeno> would be nice if those standard data types would be independent of any other libs then...
[](17:07:08) <m4d> true
[](17:07:23) <elliotwoods_> well i'd imagine the 'Image' type would be a small definition
[](17:07:26) <elliotwoods_> to be included in core
[](17:07:33) <elliotwoods_> it might rely on OpenCV though
[](17:07:40) <elliotwoods_> but we're already packaging that
[](17:08:08) <elliotwoods_> then all the actual OpenCV nodes would be a plugin
[](17:08:13) <elliotwoods_> and anything else using Image also
[](17:08:16) <azeno> well if you can wrap an opencv image around a given buffer (IntPtr), than there's no need to rely on opencv right?
[](17:09:01) <elliotwoods_> not entirely sure
[](17:09:03) <elliotwoods_> in c++ yes
[](17:09:09) <elliotwoods_> but since .NET moves memory
[](17:09:23) <elliotwoods_> i'm not sure if using System.Bitmap would be save with CvMat
[](17:09:32) <elliotwoods_> i guess you could lock it and wrap it temporarily
[](17:09:37) <azeno> well probably for another session... think that will go into too much details now..
[](17:09:43) <elliotwoods_> sure
[](17:09:45) <elliotwoods_> 3) :)
[](17:09:52) <elliotwoods_> 3) Outputs from Renderer (e.g. Depth buffer)
[](17:10:12) <elliotwoods_> @directxheads - is this possible?
[](17:10:20) <iorec_> so to recap 2) if anyone has a proposal for the implementation of a standardtype: please step fwd and we'll discuss it. 
[](17:10:41) <mrvux> 2) start an alpha forum topic
[](17:10:47) <elliotwoods_> great
[](17:10:52) <mrvux> so we can discuss about
[](17:10:54) <azeno> +
[](17:11:00) <iorec_> so at 3)
[](17:11:03) <mrvux> 3) yes it's technically possible
[](17:11:19) <iorec_> (and practically as well)
[](17:11:34) <m4d> afaik there vendor specific dx9 extensions for getting the hw zbuffer "for free"
[](17:11:45) <elliotwoods_> it's just a feature request
[](17:12:00) <mrvux> yeah, in dx9 i think you need extensions, but still possible
[](17:12:04) <mrvux> http://www.gamedev.net/topic/625044-dx9-csm-hw-pcf/
[](17:12:07) <mrvux> starting point
[](17:12:10) <elliotwoods_> ok.
[](17:12:44) <mrvux> technically you could also render only depth
[](17:12:54) <elliotwoods_> is there any way we could get the 'renderer asset'
[](17:12:58) <elliotwoods_> and work against it ourselves?
[](17:13:10) <iorec_> a question i had on this: does anyone know if dx9ex supports this out of the box or still only vendorspecific extensions?
[](17:13:12) <elliotwoods_> e.g. open up that type sticking out bottom-right of renderer?
[](17:13:15) <m4d> http://aras-p.info/texts/D3D9GPUHacks.html
[](17:13:39) <m4d> ->INTZ
[](17:13:55) <elliotwoods_> that's great
[](17:14:01) <elliotwoods_> nvidia, amd and intel
[](17:14:02) <mrvux> depth from dx9 still bit of pain have to agree
[](17:14:19) <mrvux> i personally totally dislike vendor extensions
[](17:14:32) <iorec_> i had this implemented already (last link by m4d) but only tested on nvidia
[](17:14:33) <mrvux> but that's just me ;)
[](17:14:42) <m4d> true, but as it goes: no pain - no gain.. (scnr)
[](17:14:48) <mrvux> of course hehe
[](17:14:51) <m4d> (no, ok, it's a bit ugly)
[](17:15:02) <iorec_> was stuck at the question: with dx9ex is this obsolete or not?
[](17:15:09) <mrvux> prolly not
[](17:15:25) <mrvux> dx9ex supports only few extra bits to fit with win7 and such
[](17:15:35) <iorec_> http://msdn.microsoft.com/en-us/library/bb219800.aspx
[](17:15:59) <m4d> hmmm stencil.. :)
[](17:16:02) <iorec_> this is dx9ex improvements and here they talk about "Reading Depth/Stencil Buffers"
[](17:16:25) <iorec_> is that something different than INTZ?
[](17:17:17) <iorec_> anyway, if noone knows i'll have to find out before i merge that to the alphabranch.
[](17:17:40) <iorec_> also the dx9ex thing is still waiting to be merged back.
[](17:17:49) <iorec_> so much on 3?
[](17:18:59) <iorec_> then to 4) elliot please?
[](17:19:00) <elliotwoods_> result is that we're expecting an implementation of this?
[](17:19:08) <elliotwoods_> 4) 'Active Layers' (receive mouse actions)
[](17:19:11) <iorec_> (yes)
[](17:19:15) <m4d> :)
[](17:19:17) <elliotwoods_> great!
[](17:19:25) <elliotwoods_> active layers (or interactive layers)
[](17:19:33) <elliotwoods_> receive mouse actions 'upstream' of renderer
[](17:19:49) <elliotwoods_> e.g. DX9 Layer type has an event
[](17:19:57) <elliotwoods_> which is triggered by Renderer on mouse actions
[](17:20:03) <elliotwoods_> and propagated upstream through Group nodes
[](17:20:20) <elliotwoods_> allowing for onscreen interactive elements without having to pipe all the mouse actions back up
[](17:21:02) <elliotwoods_> i can see this being useful in a bunch of areas, though admittedly not universally useful
[](17:22:00) <thalm_> you speak of plugins?
[](17:22:04) <mrvux> i like the idea, but layer node is mostly useless in that aspect if you don't have any form of resource input as well
[](17:23:45) <mrvux> but yes, you could have a change in render method
[](17:23:56) <elliotwoods_> yes plugins
[](17:24:05) <mrvux> for layer like Render(Device device, Settings layersettings)
[](17:24:09) <elliotwoods_> so the output pin would give input actions (effectively)
[](17:24:41) <mrvux> technically in layer settings you would have (just as example) : Mouse, View, Projection...
[](17:25:36) <elliotwoods_> i have to go now
[](17:25:40) <elliotwoods_> guests have all arrived
[](17:25:44) <elliotwoods_> sorry :(
[](17:25:53) <elliotwoods_> sigh
[](17:25:57) <elliotwoods_> good luck all!
[](17:26:01) <elliotwoods_> can't wait to hear the output
[](17:26:37) <m4d> take care, elliot
[](17:27:01) <mrvux> later
[](17:27:05) <azeno> cu
[](17:27:12) <iorec_> aight
[](17:27:14) <gregsn> well, yes
[](17:27:27) <gregsn> these ideas exist for a long time
[](17:27:46) <gregsn> the proplem is when you connect several renderers
[](17:28:23) <gregsn> active layers would then get the mouse/keyboard/view/projection of several renderers
[](17:28:48) <mrvux> well since you need to render once per renderer, it's a non issue
[](17:29:54) <mrvux> if you want to keep track you would of course need to provide some "renderer id"
[](17:30:12) <mrvux> for view/projection it's really useful even as stateless
[](17:30:24) <mrvux> for mouse you will want to have some state indeed
[](17:30:50) <gregsn> we have an idea of how to solve this in the long term (by abstracting over the renderer and creating a patch that is called per renderer), but you know, its a long term thing
[](17:32:59) <mrvux> yeah, using a settings class is very simple and works fine
[](17:35:03) <mrvux> makes me think need to add a little one speaking about layers, but will do as 11
[](17:35:29) <mrvux> about transforms
[](17:36:27) <mrvux> any other ideas about 4? in some ways if you send mouse keyboard would also be handy ;)
[](17:36:47) <azeno> layersettings captures the for example the renderer state, which inlcudes window stuff like mosue/keyboard etc.? so this one could be given a plugin via the render callback, instead of routing it manually in the patch
[](17:36:52) <mrvux> and also renderer state (like one potentially complex bit is chaining from hidden renderers)
[](17:37:01) <mrvux> at least for mouse/keayboard
[](17:37:28) <azeno> only issue i see that there'll be occasions where you want to do the routing manually...
[](17:37:38) <mrvux> then you ignore those settings
[](17:37:44) <mrvux> and create input pins
[](17:38:03) <azeno> idea would be to give an input, when connected in overrides the argument coming from downstream
[](17:38:14) <azeno> -in +it overrides
[](17:38:21) <mrvux> mm i think plugin writer should just decide
[](17:38:33) <azeno> but something like this right?
[](17:39:12) <azeno> so this is a little related to topic 2 with the "standard types".
[](17:39:19) <mrvux> mm
[](17:39:30) <mrvux> not really
[](17:39:38) <mrvux> layer settings should not be a pin
[](17:39:56) <mino> active layers great, but create input pins easy for me now :)
[](17:40:02) <mrvux> should just be a class that renderer provides data for before calling render
[](17:40:42) <azeno> we're currently working on capturing mouse/keyboard state with join/split nodes, and idea would be that routing of input data gets more easier with those..
[](17:41:47) <azeno> in addition those mouse/keyboad states could also be routed upstream like suggested...
[](17:42:32) <iorec_> so shortterm improvements: standard pin-types for mouse and keyboard upcoming
[](17:42:44) <iorec_> @5?
[](17:43:01) <iorec_> woei?
[](17:43:03) <mrvux> @azeno at some point having UDP/TCP stream would be ace too
[](17:43:12) <woei> sec
[](17:43:26) <woei> ok
[](17:44:02) <woei> 5) the current texture out of plugininterface2 is not suitable for spreaded tex out
[](17:45:21) <azeno> did you see the ISpread<DXResource<Texture, FooBar>> solution lurking around in the repo for some time now?
[](17:45:48) <woei> ja, i kinda rewrote DXTexturepluginbase for the needs
[](17:46:25) <azeno> i wrote the webrenderer with ISpread<DXResource..> and had no issues whatsoever with spreading...?
[](17:46:47) <woei> the thing is, with update() you can update individual slices and leave the others as is. with reinitialize() the plugininterface disposes the complete spread and you have to recreate each texture, which is pretty performancehungry
[](17:47:47) <azeno> @woei: did you read what i wrote? :)
[](17:48:10) <woei> the web thingy?
[](17:49:05) <azeno> no the ISpread<DXResource> thing. i'll probably simply rewrite the texture templates and you should see what i mean. you can dispose of slices individually there
[](17:50:40) <azeno> move on to 6?
[](17:50:46) <iorec_> jes. sebllll
[](17:50:56) <iorec_> ah one more seblllll
[](17:51:15) <iorec_> quite a huge topic.
[](17:51:21) <iorec_> anything specific?
[](17:51:29) <iorec_> or rather move on to 7?
[](17:51:34) <seblllll> hu?
[](17:51:40) <seblllll> should i explain?
[](17:52:54) <iorec_> yes. quickly.
[](17:56:01) <iorec_> mrvux on?
[](17:56:09) <seblllll> i'nm not that into DX9/DX11 technique passes, but in my understanding vvvv does not fully support some things (like passing vertzex-shader-data to a second pixelshader-pass)... thats a pity in my opinion and would push things forward if it was supported. so my question is, if there are any things on the roadmap. perhaps not "repairing" features but go a bigger step like full dx11 or opengl support
[](17:56:09) <seblllll> for example, one could work with ati/nvidia tools like rendermonkey to build shaders...
[](17:56:10) <seblllll> and often that would mean, that there are less passes necessary >> performance
[](17:56:56) <iorec_> " passing vertzex-shader-data to a second pixelshader-pass"
<http://17:56:57) <-- mino (d2c2838e@gateway/web/freenode/ip.210.194.131.142> hat das Netzwerk verlassen (Ping timeout: 245 seconds)
[](17:56:59) <iorec_> whats that?
[](17:57:11) <iorec_> you can use multiple passes in a technique
[](17:59:00) <iorec_> regarding dx11 and/or opengl no comment at this time
[](18:00:34) <iorec_> ping?
<http://18:02:20) --> iorec_ (~quassel@85.183.35.58> hat ##vvvv-meetup betreten
[](18:02:21) *** Modus ##vvvv-meetup +ns durch card.freenode.net
[](18:02:21) * Chat ##vvvv-meetup wurde am Do 3. Mai 18:54:28 2012 erzeugt
[](18:02:26) <thalm_> do you have idea you cant realize with the current pipeline?
[](18:02:27) <seblllll> hm, okay ... i'm not that prepared enough for that topic... proposal: i'll start a thread with example shaders, so we can discuss in the forums
[](18:02:27) <woei> @thalm spawining geometry
[](18:02:29) <mrvux> there's some different aspects in that one
[](18:02:29) <seblllll> of course, heading forward to dx11 things like geometry-shaders will be niiiice
[](18:02:30) --> iorec (u4569@gateway/web/irccloud.com/x-mrsqpokkxvtizxdb) hat ##vvvv-meetup betreten
[](18:02:30) <mrvux> but from what i see you would want to rebind only some parts on the fly
[](18:02:31) <iorec> seblllll still with us?
[](18:02:31) <seblllll> yes
[](18:02:32) <seblllll> don't understand vux' commenbt
[](18:02:46) <mrvux> for example, i have my bloom shader, which runs in 16 passes
[](18:02:55) <iorec> you'd probably need to be more specific with your vertex/pass problem?
[](18:03:10) <mrvux> shader is the same, i only need to swap textures (rest of the shader data does not change)
[](18:03:40) <mrvux> so i should not need to rebind quad + any shader inputs
<http://18:04:57) <-- azeno (~quassel@85.183.35.58> hat das Netzwerk verlassen (Client Quit)
[](18:04:58) <iorec> k, is this now a vux problem or the seblllll problem still?
[](18:04:59) <iorec> (because vuxens is not on the agenda)
[](18:04:59) <mrvux> i think in some ways it's an example of what seb means
[](18:05:00) <seblllll> yes
[](18:05:00) <mrvux> another example, you have a big post processor
[](18:05:11) <seblllll> i'll make a compilation of shaders having those problems and will post them in the forums
<http://18:05:14) --> azeno (~quassel@85.183.35.58> hat ##vvvv-meetup betreten
<http://18:08:31) <-- azeno (~quassel@85.183.35.58> hat das Netzwerk verlassen (Client Quit)
<http://18:08:59) --> azeno (~quassel@85.183.35.58> hat ##vvvv-meetup betreten
[](18:09:36) <iorec> ok, can't comment, can we get a simple demo of this in the forum?
[](18:09:37) <iorec> yes please.
[](18:09:39) <thalm_> good
[](18:09:39) <iorec> on to 7) vux please
[](18:09:39) <mrvux> ok gui plugs
[](18:09:39) <iorec> 7 & 8
[](18:09:39) <mrvux> yeah, was about to say
[](18:09:40) <mrvux> so since 7 is a gui nodes (eg have window), any node with window could have their window handle
[](18:09:40) <mrvux> so would avoid windowslist
[](18:09:41) <mrvux> like if i want to screenshot a renderer, i could just connect hwnd output to an hwnd in on screenshot node and done
[](18:09:41) <iorec> jep, should be trivial
[](18:09:42) <mrvux> also i could easily post messages to move window for example
[](18:09:42) <iorec> consider it done.
[](18:09:42) <mrvux> great
[](18:09:42) <mrvux> for gui plugs, having window handle accessible from the plugin would be very nice too
[](18:09:44) <mrvux> which should be relatively simple as well
[](18:09:44) <iorec> should be possible via IWindow...will have a look at it.
[](18:09:44) <mrvux> not sure about setting background color
[](18:10:10) <mrvux> it's a small fancy bit, but same as when i asked for it on renderer node
[](18:10:17) <mrvux> since on long starting patch black background looks neater
[](18:10:52) <iorec> on renderer this works, ja?
~/np~
