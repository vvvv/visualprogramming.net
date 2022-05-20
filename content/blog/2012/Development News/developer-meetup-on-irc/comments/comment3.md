---
user: "joreg"
created: "1336430273"
---

thanks everyone for the chitchat, here is the log for those elliots who didn't make it...due to great suxass to be continued next month, june 4th, same time, same room. 

~np~
<16:19:09) <iorec_> ok, so then lets see if someone else than elliot has something for the agenda. he started with some stuff here: [/forum-alpha/we-need-to-talk](/forum-alpha/we-need-to-talk>
<16:19:38> <iorec_> i'd suggest to start with getting an agenda straight, and then discussing individual topics one after the other
<16:19:43> <iorec_> shoot!
<16:19:53) <iorec_> (@all>
<16:20:18> <alg1> k, reading
<16:20:43> <thalm> when will we have powerpoint? have this question about 2 times per project
<16:20:59> <woeishi> what's the scedule for replacing native nodes /w plugins? azeno mentioned a few hints on irc
<16:22:08> <mrvux> gpl license on core is another bit too
<16:22:17) <woeishi> generally, what's the aim for the next (few> releases? speed/feature/rendering/etc
<16:22:56) <iorec_> (keep 'em coming...>
<16:23:38> <mrvux> was discussing another one about having node "profiles", since mostly nodelist starts to be fairly huge
<16:23:56> <alg1> yep, nodelist is groving
<16:24:07> <thalm> grooving
<16:24:37> <alg1> and i think we somehow need to filter nodes, that we include to addonpack
<16:24:40) <seblllll> versioning could be a topic (visual diff? xml-structure?>
<16:25:21) <seblllll> should the focus be on plugin(interface> today?
<16:25:27> <alg1> current github repo is huge, we tried submodules with Elliot, but i think it's not the solution
<16:25:44) <mrvux> on plugin interface/pins, what's the general plan too (thinking about feedback nodes/pins, having a new model for Changed signals, and having consistent datatypes>
<16:25:48) <iorec_> (@sebl: no restrictions for the agenda..>
<16:26:08) --> velcrome (~velcrome@p54B7E0EC.dip.t-dialin.net> hat ##vvvv-meetup betreten
<16:26:24> <mrvux> also for node pins being able to avoid this convolution stuff
<16:26:32) <mrvux> (thinking getslice (Node>
<16:27:31> <mrvux> but more than individual features, some kind of general roadmap would be nice for first meet i think, then on next ones can discuss more individual subjects in details
<16:27:45> <seblllll> +1
<16:27:52> <azeno> +
<16:28:00> <mrvux> since otherwise gonna be some crazy brainstorm
<16:28:26> <seblllll> perhaps we need more channels for different topics?
<16:29:04> <mrvux> mm prolly keep general one first, so can have some idea about it
<16:29:14> <iorec_> oui. lets close the agenda for a moment.
<16:29:20> <iorec_> here is what we have so far: 
<16:29:22) <iorec_> 1> thalm: powerpoint
<16:29:22) <iorec_> 2> woeishi: scedule for replacing native nodes /w plugins?
<16:29:22) <iorec_> 3> mrvux: gpl license on core is another bit too
<16:29:22) <iorec_> 4) woeishi: generally, what's the aim for the next (few> releases? speed/feature/rendering/etc
<16:29:22) <iorec_> 5> mrvux: node "profiles", since mostly nodelist starts to be fairly huge
<16:29:22) <iorec_> 6> alg1: somehow need to filter nodes, that we include to addonpack
<16:29:22) <iorec_> 7) seblllll: versioning could be a topic (visual diff? xml-structure?>
<16:29:22) <iorec_> 8> mrvux: all the other stuff
<16:30:07> <thalm> yes
<16:30:10) <iorec_> any objections against starting from 1> and going down?
<16:30:13> <alg1> add pls github organisation
<16:30:22> <iorec_> ok alg!
<16:30:28> <mrvux> +1
<16:31:06> <iorec_> oui: 
<16:31:07) <iorec_> 1> thalm: powerpoint
<16:31:07) <iorec_> 2> woeishi: scedule for replacing native nodes /w plugins?
<16:31:07) <iorec_> 3> mrvux: gpl license on core is another bit too
<16:31:07) <iorec_> 4) woeishi: generally, what's the aim for the next (few> releases? speed/feature/rendering/etc
<16:31:07) <iorec_> 5> mrvux: node "profiles", since mostly nodelist starts to be fairly huge
<16:31:07) <iorec_> 6> alg1: somehow need to filter nodes, that we include to addonpack
<16:31:07) <iorec_> 7) seblllll: versioning could be a topic (visual diff? xml-structure?>
<16:31:07) <iorec_> 8> alg1: github organisation
<16:31:07) <iorec_> 9> mrvux: all the other stuff
<16:31:29> <iorec_> if no further objections...
<16:31:33) <thalm> adding to 1> web renderer both things are common presentation platforms people wanna use in their projects
<16:32:30) <iorec_> ok, then @1> azeno please give us a short introduction to the cef-stuff
<16:33:26) <iorec_> (he's typing>
<16:33:45) <azeno> well i'm working on a web renderer, like the one we have now, but will use http://code.google.com/p/chromiumembedded/ as render engine. for now the idea is also that its main focus is on offscreen rendering (to texture>.
<16:33:47> <thalm> yes, after that i join with some ideas about ppt, as i was looking on that this afternoon
<16:34:06> <mrvux> back in 15
<16:34:14> <mrvux> just have to move office
<16:34:29> <thalm> ya, me too
<16:34:45) <iorec_> also to note: bo27 once contributed a pdf-plugin: {{< contribution "pdf-texture-(ex9.texture>" >}} 
<16:35:08> <iorec_> which i think would work quite similar to a ppt renderer
<16:35:19> <alg1> with bo27 we also researched a ppt plugin
<16:35:51> <alg1> currently it's possible to render ppt to texture via paid libraries
<16:36:13> <azeno> so in the end we can render html/pdf/ppt to texture?
<16:36:27> <alg1> yes
<16:36:57> <alg1> this is the library http://www.aspose.com/categories/.net-components/aspose.slides-for-.net/default.aspx
<16:36:58> <iorec_> so you researched but there was no free libs?
<16:37:03> <alg1> yes
<16:37:24> <iorec_> ok, seems thalm is gone for now.
<16:37:28> <alg1> it's also a bit complicated task
<16:37:33) <-- milo_ (~milo@85.183.194.93) hat das Netzwerk verlassen (Read error: Connection reset by peer>
<16:37:35> <thalm> not yet
<16:37:39> <alg1> because ppt have video for example
<16:37:42) --> milo__ (~milo@85.183.194.93> hat ##vvvv-meetup betreten
<16:37:51> <alg1> this library allows you to parse ppt
<16:37:53> <iorec_> ah..so thalm your input on this?
<16:37:55> <azeno> is there an alternative provided by openoffice by chance?
<16:38:17> <thalm> what i found was also this 399,- apose thing, but there are alternatives
<16:38:24> <milo__> anyone who saves the chatlog and maybe publish it later on?
<16:38:29> <azeno> sure
<16:38:46) <-- mrvux (~IceChat77@antokhio.static.corbina.ru) hat das Netzwerk verlassen (Ping timeout: 244 seconds>
<16:39:29> <thalm> the ms ppt has a c# binding which would allow this too, a license is about 130,- eur
<16:39:48> <thalm> so one would need to install ppt and license it
<16:39:48> <alg1> maybe, but even when you trying to open ppt in OpenOffice it's often impossible
<16:40:24> <iorec_> how about alg1 and thalm talk about this in a private session and let us know about the result?
<16:41:10> <thalm> and thats the third option, open office CLI binding, which is pretty cool and at first for free and most ppt can be converted be openoffice or libre office
<16:41:13> <woeishi> @thalm maybe xps is an option? ppt->xps export
<16:41:30> <thalm> xps has no animation and stuff
<16:41:37) --> ksm1 (~ksm@213.232.243.233> hat ##vvvv-meetup betreten
<16:42:36> <thalm> thats just what i found, no idea hw complicated it is to render to texture... how, when and who is also another topic, thats it from my side
<16:43:56> <woeishi> open office / libre office seems to be a nice option also for other filetypes though
<16:44:00> <thalm> the web renderer is pretty far already and the near future plan with it would be interesting
<16:44:51> <thalm> it is allso possible, that there are broweser plugins which just render ppt and so on...
<16:45:24> <iorec_> webrenderer will be soon in an alpha near you.
<16:45:41> <woeishi> does chromium support native pdf rendering already?
<16:46:09> <azeno> yes it supports rendering multiple websites to multiple textures of user defined size right now. all done in its own thread, so no lags in vvvv mainloop. flash/html5 stuff seems to work quite nice, webgl seems to be a little buggy still.
<16:46:15> <azeno> ah let me see
<16:46:45) --> matematic (~matematic@the.meso.net> hat ##vvvv-meetup betreten
<16:47:24> <thalm> i hop on my bike, brb
<16:48:09) <azeno> well don't wait for me, 'll need a minute or two ;>
<16:48:27> <iorec_> k. anymore questions on ppt/html rendering?
<16:48:30> <matematic> what is happening here?
<16:48:44> <matematic> what is this channel for?
<16:48:48> <iorec_> @matematic: wait and read..
<16:49:00> <matematic> olright
<16:49:05) <iorec_> so we're jumping to 7> while vux is not here
<16:49:16> <iorec_> @seblllll: details pls
<16:49:18> <seblllll> aight
<16:50:46) <seblllll> sometimes its a pain to do versioning (e.g. git) - some things have changed there recently (rearrangement of attributes) but there have been suggestions by david (other xml structure>
<16:50:46> <seblllll> so, my suggest is: what can we do to make ones live easier when versionising complex projects
<16:50:54> <seblllll> stichwort: visual diff
<16:51:35> <iorec_> a visual diffff would of course be a great thing. it is not on our agenda though. anyone?
<16:52:22> <iorec_> we've been working on big projects here and using git-extensions it really wasn't that big of a pain..
<16:52:32> <woeishi> is patch rendering accessible from c#?
<16:52:58> <seblllll> while the rendering of the gui is a core-only thing i don't see a point to attack this topic
<16:53:01> <alg1> visual diff vould be amazing, but i can't even imaging how to design it
<16:53:40) <woeishi> simplest thing i can think of is 2 patches overlaying with add mode diff :>
<16:53:47) <matematic> screenshot of both patch versions then layering them? :>
<16:53:53> <woeishi> one wouldn't see the pins though
<16:54:22> <woeishi> maybe a task for vvvvjs?
<16:54:37> <seblllll> yeah, why not
<16:54:54> <alg1> but it's hard to version this way
<16:55:14> <alg1> because nodes position it not the main topic when merging for example
<16:55:48> <woeishi> @devs have you read my post concering splitting the xml in a program and visual part?
<16:55:51> <woeishi> like cs and cs.resx
<16:56:01) <iorec_> i can also not really see the benefit (which may change once it is working>
<16:56:19> <woeishi> of splitting?
<16:56:26> <iorec_> concerning the splitting..read, yes, don't think it is a good idea
<16:56:45> <iorec_> one patch, one file
<16:57:02> <alg1> =1
<16:57:05> <iorec_> probably inside the same file
<16:57:22> <iorec_> but then it is not so readable anymore...
<16:57:49> <iorec_> i just don't see the benefit really so it is hard to start thinking about it..
<16:57:50> <fibo_> one topic, maybe for next meeting: I'm writing a software to do node programming via browser, it could be a starting point for vvvvjs to add "patch via browser" feature
<16:57:56> <woeishi> do you really need positioning and bounds for readability?
<16:58:20> <fibo_> or even better, it could use vvvvjs javascript nodes and be vvvv-compatible
<16:59:03> <woeishi> diff-ing files would be easier, if you'd just see, if a node is added or a pin is changed. and you wouldn't be distracted by changes coming from moving a node around
<16:59:06) --> mrvux (~IceChat77@host-93-182-35-94.real.kvidex.net> hat ##vvvv-meetup betreten
<16:59:14> <mrvux> ok back
<16:59:22> <alg1> so it's like a winmerge way
<16:59:32> <alg1> not layering way
<16:59:49> <alg1> for this kind of task we can just develop another software
<16:59:57> <alg1> no need to change file format
<17:00:12> <alg1> something like git merge graph
<17:00:47> <iorec_> @woeishi: problem for me is that i never found it too bad to blend away the bounds-changes...they are quite easily omitted for me..and still bounds changes in a patch can be very important stuff you want to keep.
<17:01:48> <fibo_> emmh, maybe I didn't understood the topic but
<17:01:55> <woeishi> @alg1 q is, is it better to make v4 somehow compatible with existing versioning systems or do we want to create our own thing
<17:01:58> <fibo_>  ... do you know kdiff ?
<17:02:14) <iorec_> i'd also suggest for someone interested in this (sebl, woei> check the git-diff info and render something helpful from that. 
<17:02:38> <alg1> vvvv is already compatible with git
<17:02:53> <alg1> the toppic is visualisation
<17:03:12> <fibo_> if you want to visualize diff between directories
<17:03:20> <fibo_> you can use kdiff
<17:04:08> <iorec_> so since we figured noone is working on this kind of stuff yet, to leave it at that and those interested in the topic can continue discussion in a separate thread?!
<17:04:21> <azeno> regarding cef and pdf rendering: having issues with some adobe pdf plugins. will need more time to figure this out. as it seems cef doesn't want to use the default pdf render engine chrome is using for example.
<17:05:41) <iorec_> so we jump back in time to 2>
<17:05:44) <iorec_> 2> woeishi: scedule for replacing native nodes /w plugins?
<17:05:50> <mino> cool
<17:07:46> <iorec_> there is no schedule for that. main idea is that atm we're working on a new way to write nodes. slicewise. this will allow us to easily rewrite most of core nodes and have them work the same for all datatypes. no idea yet on performance issues...but so for now we can only say it does not make sense for people to write their own versions of core-nodes, because we're planning to do that all in one rush.
<17:08:26> <seblllll> great news!
<17:08:32> <iorec_> mr. greg will now give you a quick glimpse into how this new style of nodewriting will look like. gregsn, pls.
<17:08:34> <mrvux> about those, some of the main issue is the ischanged pin is not very flaxible
<17:08:45> <mrvux> thinking color/transform
<17:08:56) <iorec_> (@vux: please wait>
<17:09:47> <gregsn> so. well. i first post you some code.
<17:09:57> <gregsn> http://pastebin.com/qcALpBjQ
<17:10:37) <fibo_> come on, use gist instead of pastebin :>
<17:10:48> <gregsn> lets assume you want to write a simple node... but let's say it has a state...
<17:11:16> <gregsn> and of course you want to have that spreadable
<17:11:42) <gregsn> nowadays you need to write a bunch of code that is just monkeycode (bolierplate or what...>
<17:12:38> <gregsn> i mean the interesting part that really defines the behaviour of the node is that simple class Foo. not that more complicated class FooNode on the bottom
<17:13:59) <gregsn> you currently need to get quite some things right. spreadmax for example is not always right. image you have spread of spread. spread max leads you into a wrong direction. you really just want the spreadmax of all outer spreads of all the pins. so you have to do that manually. (for now>
<17:14:15> <gregsn> you also need to manage the state.
<17:14:56> <gregsn> if you want to store stuff for each slice. you need to create or destroy those states and keep them managed in a list
<17:15:38> <gregsn> the core part that you want to do totally is surrounded by stuff that easily could also be autogenerated
<17:15:50> <gregsn> that's the thing we are working on atm.
<17:16:11) <gregsn> we want you to be able to only write the code at the top (class Foo>
<17:16:17> <alg1> this approach looks similar to the pattern, that we using in OpenCV nodes
<17:17:02> <alg1> looks like it's better for threaded nodes
<17:17:03) <gregsn> you would only need to flag that Step() method with an attribute (like [](Node)> and many other things will be done for you.
<17:17:40> <alg1> how combineWith works?
<17:17:58> <gregsn> but since we are still in the making of it i wouldn't want to get into more details than that: you will be able to write nodes in that manner in the future.
<17:18:04> <azeno> that's just the spreadmax computation. if one is zero, all are zero else max
<17:18:30> <alg1> ok, can we comment about API?
<17:19:09) <woeishi> ok, i asked the question more because i constantly code some native plugins for not (yet> existing categories, and whether to add them to addonpack or not
<17:19:59) <gregsn> so here is my point: i would like to encourage you to write your code in that manner like i did that stupid template. in that way you will be able to easily convert to the new way of node coding in the future. just dont do anything node specific in your evaluate. do that in a static function - or if it is not static functionality (like in the Foo example> write a seperate class that is instatiated per slice
<17:21:15> <gregsn> oh well i am not too much into the opencv nodes
<17:22:13> <iorec_> alg1: what API do you want to comment on?
<17:22:15> <alg1> https://github.com/smakhtin/VVVV.Nodes.Image/blob/master/OpenCV/src/Tracking/ObjectTrackingNode.cs
<17:22:50> <alg1> @iorec i think clearing part should be more automatic
<17:23:07> <alg1> because in openCV nodes it's was a trouble
<17:23:18> <iorec_> clearing-part?
<17:23:29) <alg1> if (SpreadMax > FSliceCount>
<17:23:41) <alg1> and if (SpreadMax < FSliceCount>
<17:24:41> <alg1> also, evaluating Step function should be encapsulated
<17:24:43> <gregsn> oh well this is just an example. but you right. we might write a better template for that...
<17:25:04> <gregsn> i just wanted to get the point across that you have to write some boilerplate code...
<17:25:13> <alg1> and maybe instances is the good way and we need to force developers to use it
<17:25:52> <alg1> because we somehow can thread them automatically
<17:26:16> <woeishi> will the new way of handling spreads include options for constructor/destructor for not used slices?
<17:28:14> <gregsn> the current idea is that you write a class like Foo. the rest is done for you. the class shoud have a default constructor, so that the autogenerated code can create you "per-slice-class"
<17:28:49> <azeno> and implement IDisposable if you have to clean things up should your slice get lost...
<17:28:54> <azeno> -> destructor
<17:28:57> <woeishi> nice
<17:29:20> <gregsn> so you basically only need to flag the method that does the "Step" per frame
<17:29:35> <iorec_> in other words: when writing a node you'll only think about implementing the functionality for one slice
<17:29:44> <mrvux> question, how does it works with pin naming?
<17:29:45> <gregsn> right
<17:30:14> <gregsn> double meAmAPin -> "Me Am A Pin"
<17:30:25> <mrvux> mm
<17:30:32> <gregsn> it is automatic
<17:30:55> <mrvux> minimum / maximum value?
<17:31:10> <azeno> pin attribute
<17:31:14) <gregsn> but you can do it per attribute [](Pin(Name%20=%20"Eric")>
<17:31:23> <gregsn> or something like that
<17:31:40> <iorec_> @woeishi: concerning your constantly written plugs..lets talk about those separately..
<17:31:42> <gregsn> but good style is not to use attributes that you dont need really
<17:32:32> <woeishi> @IDisposable, does it work on plugininterface.v2 already? i mean with changing slicecount on spread, that the destructor is called?
<17:32:45> <mrvux> yeah but variable naming/pin naming fairly different, you will need things like bang, so attribute will be fairly frequent
<17:33:15) <gregsn> but these are the details. all this is not fixed yet. just the main idea of the split between node (that is spreaded in a standard way it should be spreaded> and the slicewise functionality
<17:33:35> <mrvux> also thinking on knowing of connected or not
<17:33:39> <mrvux> connected
<17:33:51> <azeno> the nicest thing about it is apart from the attributes there are no constraints what so ever on your code. if it is possible to write down the functionality of a node per slice i can also imagine that it would be possible to reuse that code to generate for example javascript code. there are aready projects like this available. the less dependencies there are, the less boilerplate code the easier to do such a thing...
<17:33:53> <alg1> yeah, connected is must have
<17:34:26) <mrvux> @azeno : well bit more complex than that ;>
<17:34:49> <mrvux> for simple code yes
<17:35:00) <azeno> well for such a thing i could imagine a "double? foo", so you can do if (foo == null> -> not connected. just as an example.
<17:35:05) <-- gegenlicht (~bamsux@xdsl-87-78-56-216.netcologne.de) hat das Netzwerk verlassen (Ping timeout: 244 seconds>
<17:35:20> <mrvux> mm
<17:35:32> <mrvux> means you need to do a connection check every slice
<17:35:47> <velcrome> what about other core datatypes that are not basic
<17:35:51> <azeno> but sure, that would mean boxing etc. so performance wise probably not the best idea. not everything will be possible to write it that way, but if it is, it would make quite much sense to use it.
<17:35:55> <velcrome> like layer, node, etc
<17:36:36> <mrvux> i see it for simple nodes, if you need more advanced you can still go back to standard
<17:36:41> <azeno> well i wrote the webrenderer i was tlking about before that way and had no issues with textures for example.
<17:37:40) <azeno> yes. we just wanted to give you a heads up here :) it's not something which will be forced upon you. if you don't like it you can simply ignore it ;>
<17:38:01> <mrvux> of course, i see good advantage for simple slicewise nodes for certain
<17:38:08> <alg1> can't understand how it can't be used with complex nodes
<17:38:21) <-- colors (d9d8199d@gateway/web/freenode/ip.217.216.25.157) hat das Netzwerk verlassen (Ping timeout: 245 seconds>
<17:38:23) <iorec_> which topic 2) was about..(kindof>
<17:38:59> <iorec_> as soon as there is something to demo you'll find it in an alpha-release for you testing pleasures.
<17:39:09) <iorec_> on to topic 3>
<17:39:25) <iorec_> 3> mrvux: gpl license on core
<17:39:57> <iorec_> yep, we'll try to resort some stuff there so that no linking to gpl-code is necessary for plugins.
<17:40:42> <iorec_> something to add here?
<17:41:13> <mrvux> ok, so basically should be plugin interface mainly
<17:41:25> <iorec_> what?
<17:41:36> <mrvux> all interfaces you link on it
<17:42:13> <mrvux> so technically hosting can be gpl, plugin interfaces not
<17:42:34> <gregsn> right.
<17:42:49> <iorec_> oui
<17:43:02) <iorec_> then up to 4>
<17:43:04) <iorec_> 4) woeishi: generally, what's the aim for the next (few> releases? speed/feature/rendering/etc
<17:43:24> <iorec_> with a stable 27.2 out later today...
<17:43:35> <gregsn> i think currently there a few things in hosting that a plugin dev could be interested in. if that is the case we just move that to the plugininterface project
<17:44:16> <iorec_> 28 will include all the funny stuff..
<17:46:17> <iorec_> nodegrouping, videosync, webrenderer, picturestackplayer, manual-validation-for-plugins, streams, middle-click-on-vector/color-pins,...
<17:46:42> <iorec_> kontrolleur-stuff
<17:46:59) <iorec_> and some more (still to be announced (soon)>
<17:47:00> <mrvux> ok, but i think woei was more asking on a general way, not only on plugin goodies
<17:48:27> <gregsn> well the thing we just talked about. slicewise nodes.
<17:50:10> <gregsn> the nice thing that we didn't mention yet: the autogenerated code can work with the new stream feature. so there are chances that those nodes dont have a performance problem at all
<17:50:24) <mrvux> ok so plugin wise : stream + sync (which are on alpha already>
<17:50:37> <mrvux> plans for feedback pins?
<17:50:41) --> sunep_ (u4582@gateway/web/irccloud.com/x-cdknuclxzqomasrv> hat ##vvvv-meetup betreten
<17:51:19> <gregsn> feedback pins: very seldomly needed. not yet on the agenda
<17:51:36> <mrvux> very seldomly?
<17:51:53> <alg1> where i can read about stream + sync?
<17:52:02> <gregsn> you need it if you write an won framedelay node.
<17:52:07> <gregsn> own
<17:52:14) <mrvux> @alg i'll show you some sync samples ;>
<17:52:15) <iorec_> @alg1: in a blog-post by elias (still to come>
<17:52:25> <alg1> ok, nice
<17:52:51> <alg1> oh, custom framedelay is also the topic
<17:53:03> <mrvux> @gregsn yeah there's quite some pretty useful cases where it can be needed, but true it's more for complex plugin systems
<17:53:06) <thalm> [boygroup-time-and-filestream-synchronization](/blog/2012/boygroup-time-and-filestream-synchronization>
<17:53:16) <thalm> [refactor-to-subpatch](/blog/2012/refactor-to-subpatch>
<17:53:47) <iorec_> @woeishi: 4> answered?
<17:54:37> <mrvux> @iorec rendering: still so many devices issues
<17:54:40> <mrvux> in multi screen
<17:55:45> <iorec_> ok, we'll have to finish the dx9ex stuff first..
<17:56:30> <mrvux> rendering: more semantics for shader would be real useful
<17:56:57> <iorec_> vux: sounds like something for the forum.
<17:56:58> <mrvux> also texture input pin on renderer so you can inherit properties, so you can get rid of this dreaded info node
<17:57:01) <azeno> ah ad 4) working on a little test framework too (at last>. so little patches can be build with some Assert nodes in it. those patches will then be started once by a build server for example and test results get collected in some kind of log file. also something to be published soon
<17:57:29) <mrvux> @iorec will post for sure, but since was on the rendering topic :>
<17:57:43> <iorec_> ok.
<17:57:53) <iorec_> so woeis time is up. moving to topic 5>
<17:57:54) <iorec_> 5> mrvux: node "profiles", since mostly nodelist starts to be fairly huge
<17:58:03> <iorec_> vux pls enlight us on this one
<17:58:25> <mrvux> ok so we discussed it with mr zauner a bit
<17:58:48> <mrvux> it's technically something possible with plugs and will work on it soon, but et's expose the idea and collect some bits
<17:59:34> <mrvux> so case 1: you never use dmx in your projects, so less nodes in the list is good
<17:59:51> <mrvux> so you could create something like ignore lists/include lists
<18:00:01> <azeno> is it something like gstreamer does with their plugins? like good, bad, ugly?
<18:00:13> <mrvux> bit more advanced, but same concept
<18:00:29> <mrvux> you could have "beginner/intermediate/advanced" profile
<18:00:49> <mrvux> also you could create your own profile for specific types of projects
<18:01:14> <thalm> i think this is not a question on how many nodes you have, but a question of filtering them, i dont care whether i have 200 or 2000 nodes, as long as i reache them fast
<18:01:21> <iorec_> but is this only a GUI-problem or something else?
<18:01:28> <mrvux> not only
<18:01:44> <mrvux> case 2 is: think on vvvv.js, if you want to patch for this, you should have a list with nodes available for it
<18:01:56> <mrvux> since if this node is not ported your patch wont run on it
<18:01:59> <thalm> hiding nodes is not a good idea imo
<18:02:15> <iorec_> ok, get the idea.
<18:02:29> <iorec_> we had this before..
<18:02:31) <azeno> well i could imagine we buy eric some bananas and he writes down such a nodelist.xml? :>
<18:02:43> <thalm> yes, just need some tags you can filter by
<18:02:43> <mrvux> yes it's likely
<18:02:59> <mrvux> yes, idea is not to hide nodes, but hide them from nodelis
<18:03:15> <iorec_> ie. hide them in GUI?
<18:03:22> <mrvux> in nodelist
<18:03:32> <mrvux> and mark them in specific color in gui
<18:03:47> <mrvux> i also don't like idea to hide in gui
<18:03:50> <mrvux> nodelist only
<18:04:06> <alg1> i think vvvv.j should be fully browser thing
<18:04:19> <alg1> so you need to pach in browser mostly
<18:04:45> <alg1> in other cases node lists looks not good, because it's splitting application behaviour
<18:05:07) <mrvux> yeah, but opencv nodes won't work in vvvv.js (for a while>
<18:05:21> <mrvux> and 4v has the strength of fast patching
<18:05:34> <mrvux> patching in browser with subpatches can become cumbersome
<18:05:40> <alg1> so maybe we can use modes?
<18:05:45> <mrvux> yeah
<18:05:49> <alg1> like in processing
<18:05:55> <alg1> js, android
<18:05:58> <milo__> hm i think if i know which nodes i want to create i dont need such featur. sounds more confusing than helpful to me
<18:06:11> <alg1> yeah, but modes limiting you to platform
<18:06:28> <alg1> this is why processing have it
<18:06:29> <azeno> well @all who didn't my eric/bananas/nodelist.xml comment: as you know you can add nodes by inluding search paths in your root node. by default it will look in lib/nodes. if there is a nodelist.xml in that directory it will only display the nodes defined in that xml file. therefor i can easily imagine to such a thing right now. for example providing a beginners nodelist.xml as a download. of cource a nicer way would be appreciated.
<18:06:38> <azeno> who didn't get
<18:06:50> <mrvux> yes, but if you write for a platform you should know what nodes are available
<18:07:00> <alg1> @iorec i think modes is mostly GUI task
<18:07:38> <alg1> because user need to identify current mode easily
<18:07:48> <alg1> and mode is not about nodelist mostly
<18:07:55> <mrvux> @all if you want i'll make you a little prototype so you can test
<18:08:00> <iorec_> jep, in general i would say..we're aware of this and it is quasi on the agenda for NodeBrowser3.0
<18:08:19> <alg1> mode is about application behaviour
<18:08:36> <alg1> so in js mode we need to have easy browser debug for example
<18:08:47> <alg1> in android - deployment
<18:09:19> <mrvux> yes, but for example, if you deploy and node is not ported, your app wont work
<18:09:36) <mrvux> so best is to know it asap (eg while you patch>
<18:09:56> <mrvux> not when you've done a super cool patch and realize 50 nodes are missing when you deploy
<18:10:46> <azeno> yep, sounds useful in such a case
<18:10:53) <mrvux> there's a couple of uses cases for it, but will keep for the next dev-meet ;>
<18:10:53> <iorec_> oui so we're waiting for vuxens demo on this.
<18:11:04) <iorec_> topic 6>
<18:11:15) <iorec_> 6> alg1: somehow need to filter nodes, that we include to addonpack
<18:11:17> <mrvux> ok cool, think will make more sense once you can try out
<18:11:30> <iorec_> alg1 please..
<18:12:05> <alg1> i think addonpack is growing
<18:12:14> <alg1> and we need somehow controll ot
<18:12:20> <alg1> it*
<18:12:45> <alg1> because it's big problem i think, and custom nodelists can't solve it
<18:13:19> <milo__> +1
<18:13:19> <iorec_> what exactly is the big problem?
<18:13:26> <alg1> i'm teaching vvvv currently, and big amoount of nodes with unexpected behaviour is real problem for newcomers
<18:13:39> <alg1> i think we should clean our nodebase
<18:13:52> <alg1> make it more generic
<18:14:06) <iorec_> hm...basically yes, that is what 2> will also be about.
<18:14:27> <iorec_> but for now why not make your own nodelist?
<18:14:38> <alg1> it's not greate solution
<18:14:49> <iorec_> but a workaround...
<18:15:31> <alg1> just imagine
<18:15:41> <alg1> we have 2 guys with 2 custom lists
<18:16:01> <alg1> each one solvingh problem with he's own way
<18:16:10> <iorec_> right, no good. 
<18:16:18> <alg1> how we can learn from them?
<18:16:40> <alg1> if everyone is creating his own solutions for everyday tasks?
<18:16:44> <iorec_> nono
<18:16:51> <iorec_> our idea:
<18:17:29) <iorec_> we think the nodelist can be ever growing and it needs a better gui (nodebrowser> that will gives you a better overview / faster access to nodes.
<18:17:55) <iorec_> this can include something like node-profiles (as i understood them>
<18:18:29> <iorec_> but so: we'd not restrict the addonpack but are rather thinking about GUI-ways to better present the mess
<18:18:37> <mrvux> yeah, if find sometimes a bit cumbersome to fix an existing addonpack plug for current beta
<18:18:58> <mrvux> for example if you need a new node on a prod system
<18:18:58> <iorec_> vux: how is that related?
<18:19:38> <mrvux> well you end up with different nodelist
<18:19:38> <alg1> yeah, but big amount of nodes producing big amount of ways, that solve task
<18:19:47> <alg1> and this is not good
<18:19:52) <mrvux> since its cached you need to regen (or delete> nodelist
<18:19:58> <alg1> because at some point we can lose control
<18:20:13> <alg1> and just can't spot similar nodes for example
<18:20:32> <mrvux> @alg1 agree on that
<18:20:34> <alg1> i think processing way is better
<18:20:49> <iorec_> ok, what is the processing way?
<18:20:53> <alg1> it can have about 10 similar libraries
<18:21:20> <alg1> but user have a choise
<18:21:27> <alg1> yes, i know your argument
<18:21:30> <thalm> alg1: you can't really control this.. everbody can contribute plugins, thats ok... and its ok to have multiple solutions for a problem, everyone thinks differently. thats just community dynamics
<18:21:34> <alg1> how to track dependencies
<18:21:48> <alg1> but i think this is another topic
<18:21:59> <alg1> like gems for example
<18:22:10> <alg1> @thalm, exactly
<18:22:24> <alg1> just look at today situation
<18:22:36> <alg1> we have about 5 versions of openNI nodes
<18:22:41> <alg1> wich is better?
<18:22:50> <thalm> i have no idea
<18:22:52> <alg1> wich is in addonpack?
<18:22:52> <iorec_> ok, do i get this right? you are in favor of a small standardlib + extradownloadable addonlibs
<18:23:06> <alg1> yes, this is the better way i think
<18:23:12> <alg1> because now we have a mess
<18:23:31> <alg1> for example, for our oCV lib we need CVImageLink output
<18:23:49> <alg1> kinect plugins from addonpack do not provide it
<18:24:04> <alg1> so Elliot developed his own set of plugs
<18:24:09> <alg1> is he wrong?
<18:24:27> <thalm> he could have improved the addonpack plugin
<18:24:31> <alg1> i think users should decide
<18:24:39> <thalm> yes
<18:25:05> <alg1> thalm, yes, but for exmple users not need our CVImageLink
<18:25:24> <alg1> but he already pushed it
<18:25:28> <thalm> make a converter node?
<18:25:37> <alg1> how?
<18:25:43> <iorec_> ok, we had this discussion years ago..and settled with the one-pack fits all. both ideas have dis/advantages. i think big part of the problem can be solved GUI-wise...
<18:26:01> <alg1> i think this is the core problem of vvvv
<18:26:23> <iorec_> well that sounds nice..if you don't see bigger ones..horray.
<18:26:24> <alg1> by the time addonpack will grow and new users would be confused
<18:26:25> <thalm> kinect is a special problem, as it has multiple drives
<18:26:43> <alg1> it's not the special problem
<18:26:50> <alg1> i can provide another examples
<18:27:10> <iorec_> i really get your point and don't think we have to get rid of the addonpack to solve it.
<18:27:14> <thalm> yes, ok
<18:27:31> <alg1> one of them will be discussed at topic number 8
<18:27:43) --> gegenlicht (~bamsux@xdsl-78-34-183-236.netcologne.de> hat ##vvvv-meetup betreten
<18:28:04> <iorec_> jep..so one-side is gui-optimizations the other is related to topic 8
<18:28:18> <alg1> yep
<18:28:18) <iorec_> since we have 7> already checked
<18:28:28) <iorec_> why not jump to 8> directly:
<18:28:32) <iorec_> 8> alg1: github organisation
<18:28:38> <alg1> ok
<18:28:43> <iorec_> alg again, your input please.
<18:28:55> <alg1> i think all should agree, that current github organisation is hell
<18:29:29> <iorec_> objection!
<18:29:37) <iorec_> (but go on>
<18:30:02> <alg1> i think the main reason of it - the addon pack problem, that i mentioned
<18:30:11> <alg1> just look to OF development
<18:30:30> <iorec_> what are they doing different? betteR?
<18:30:32> <thalm> how do they do it?
<18:30:32> <alg1> it's have a core repo and addons
<18:30:45> <alg1> every addon have it's separated repo
<18:31:21> <alg1> so if i want to fork something, i do not need to go to OF website and read big manual about how to contribute to OF
<18:32:26> <alg1> i realy can't understand, why if i need to contribute something like a shader, i need to clone huge repo, init it by shell script and read a big manual about how to add it properly
<18:32:58> <thalm> because then you can work like that forever
<18:33:11> <alg1> why we need it?
<18:33:13> <thalm> nothin more neede, it just works
<18:33:16> <iorec_> ok, the idea behind one-fits all again is: it is supposed to make it easier for everyone.
<18:33:58> <alg1> also, we losing nice github features
<18:34:05> <alg1> like bugtracking for example
<18:34:29> <thalm> think af all the dependency madness when having multiple repos
<18:34:37> <iorec_> i don't get exactly get the problem you're facing. so you don't like the idea to have to checkout alot of stuff that you're not interested in? is that it?
<18:34:45> <alg1> i don't see dependencies madness
<18:35:11> <alg1> @iorec right, and also i want use github features to work on my project
<18:35:18> <mrvux> @thalm agree with dependency madness, specially if your plugin works closely with the core
<18:35:58> <alg1> @all i talked with toxi at Resonate and discussed with him how to properly orginise libraries
<18:36:18> <alg1> the main solution is don't create crosslinked libraries
<18:36:23> <gregsn> with one repo you know where all the other projects aare loacted and can reference them from your project. they relative path will always stay the same. if you have multiple repos nobody can trust on relative paths. you cant even know if the other repo is there
<18:36:25) <-- fibo_ (d4300f7a@gateway/web/freenode/ip.212.48.15.122) hat das Netzwerk verlassen (Quit: Page closed>
<18:36:44> <alg1> so we have a core and libraries that working separatly
<18:36:58> <mrvux> @gregsn true, having that problem with cinder a lot
<18:37:29> <azeno> what do you mean exactly by crosslinked libraries? can you give an example?
<18:37:34> <alg1> yes
<18:37:55> <alg1> for example, some library can use another library for some sort of tasks
<18:38:13> <alg1> it' not possible i think, because every library can only depend on core
<18:38:52> <mrvux> also have this problem
<18:38:53> <alg1> this will allow us to have one repo with interfaces and core nodes, and another repos for plugins like box2d and etc
<18:38:58> <mrvux> with multiple repos
<18:39:20> <mrvux> for example, i want to do a converter from my kinect nodes to cvimagelink ones
<18:39:41> <azeno> well we have a core and all plugins depend on it. so where's the difference? we simply wanted to avoid all that submodule/linking to dll hell
<18:39:42> <mrvux> i need to download both repos in proper folders, link to the right place, resolve core deps...
<18:39:57> <alg1> yes
<18:40:07> <alg1> i think it's not hard for your task
<18:40:15> <alg1> and it's also not common task
<18:40:28> <mrvux> well if someone forks and uses different path, it's broken for him
<18:40:36> <iorec_> the opencv-stuff is not developed in a vvvv-sdk fork or is it?
<18:40:51> <mrvux> although i'd have a think at having core/addon in 2 repos
<18:40:51> <alg1> currently we developing it in fork
<18:40:54> <alg1> and it's hell
<18:41:14> <iorec_> ok. interesting how that can be hell. 
<18:41:20> <iorec_> can you detail on this?
<18:41:23> <alg1> yes
<18:41:43> <alg1> it's time consuming to merge for example
<18:41:55> <iorec_> perdon?
<18:42:48> <alg1> because when you merging you also merging the stuff from another repos
<18:42:54> <alg1> or plugins
<18:43:07> <iorec_> say if you and elliot are contributing to that fork you'll sometimes have to merge your work. nothing more, right?
<18:43:13> <alg1> and also you can't use issue tracker
<18:43:27> <alg1> yes
<18:43:31> <iorec_> and once in a while you pull-upstream to get the other addonpack-changes in.
<18:43:37> <alg1> yep
<18:43:52> <iorec_> so the only speciality is the pull-upstream you have to do.
<18:44:00> <alg1> but it's strange at all to have one big repo for all your plugins
<18:44:09> <iorec_> waitwait...
<18:44:21> <alg1> it's not only the merge problem
<18:44:29> <alg1> it's readme problem for example
<18:44:38> <iorec_> so you argued merging- is a problem and i just tried to show it is not a problem. is it still?
<18:44:53> <alg1> merging is the problem
<18:45:03> <alg1> but not the only one problem
<18:45:28> <iorec_> ok, stepbystep. 3 problems
<18:45:28) <iorec_> 1> merging
<18:45:28) <iorec_> 2> github features
<18:45:28) <iorec_> 3> readme
<18:45:32) <iorec_> we are still at 1>
<18:45:33> <alg1> yes
<18:45:38) <alg1> 4> google
<18:45:52> <alg1> how someone can google my addon?
<18:46:00> <alg1> how he can discuss it with me?
<18:46:08> <iorec_> when talking of merging you're talking of merging yours and elliots work. true?
<18:46:21> <alg1> currently yes
<18:46:33> <iorec_> ok. so that has nothing to do with the addonpack, right?=
<18:46:46> <alg1> it's depends on structure
<18:46:56> <iorec_> do you and elliot have different structures?
<18:47:06> <thalm> do you work on the same fork or on two?
<18:47:08> <iorec_> you should both work on the same fork right?
<18:47:28> <alg1> no, our structure is forced by addonpack rules and we don't agree with it
<18:47:43> <alg1> no, we working in separated forks
<18:47:53> <iorec_> k but on one branch..
<18:47:57> <alg1> and i'm puling from Elliot's repo
<18:47:57) <azeno> well alg, we had multiple repositories for years. every plugin was hosted on sourceforge but each had its own root directory (trunk/branches/etc>. managing that for an automatic build was extremly cumbersome. with all stuff in one repo tracked by one versioning system, i can easily go back and forth in time and it's guranteed that everything will work. for example it was no problem at all for us to create a branch from 27.1 for the next 27.2 release and
<18:47:57> <azeno>  cherry-pick stuff from develop over there. doing that with say 50 repositories, i don't know...
<18:48:04> <thalm> in the addonpack you can create your folder and do whatever you want in it
<18:48:49> <alg1> @azeno i agree
<18:49:10> <alg1> but for compability i think we can take core nodes to the main repo
<18:49:29> <alg1> and other nodes like OpenCV stuff should be separated
<18:50:17> <iorec_> hm..still dont get it.
<18:50:32) <-- gegenlicht (~bamsux@xdsl-78-34-183-236.netcologne.de) hat das Netzwerk verlassen (Ping timeout: 244 seconds>
<18:50:33> <iorec_> what if you have your own repo next to vvvv-sdk?
<18:50:33> <azeno> @mrvux: how are you working? don't you use your own repo?
<18:51:10> <iorec_> you just clone and pull vvvv-sdk and next to that you have lying your own repo..with your own structure.
<18:51:45> <iorec_> this is exactly what we didn't want force people to do as we had this situation for years internally and it was a mess.
<18:52:08> <iorec_> since we have the new structure with all in one productivity has increased quite a lot here.
<18:52:09> <alg1> hmm
<18:52:39> <alg1> how it's incrased?
<18:52:57> <iorec_> no more dealing with: commit-state of this repo is compatible with commit-state of other repo. no more relative paths..it all just always works out of the box.
<18:53:05> <alg1> ok
<18:53:30> <iorec_> we've changed to that model for a reason.
<18:53:42> <iorec_> we've been tinkering about it for 2 month
<18:53:48> <alg1> but we can return to my previous question, do we need so much nodes?
<18:53:54) <iorec_> (while trying out submodules and stuff>
<18:53:57> <thalm> i see this discussion as a discussion of two different work styles
<18:54:04> <alg1> why we have for example 2 types of vectore nodes?
<18:54:13> <iorec_> no alg..
<18:54:18> <iorec_> we need to finish this 
<18:54:31> <iorec_> else it comes up againandagain
<18:54:35> <alg1> if we can clear it, we can avoid dependencies and building time should be incrased
<18:54:47> <iorec_> clear what?
<18:54:48> <alg1> decrased, sorry
<18:55:20> <alg1> clear duplicates
<18:55:45> <iorec_> but you know you don't have to build the whole addonpack everytime, right?
<18:56:02> <alg1> i think everyone should agrre, that now vvvv core is VVVV + AddonPack
<18:56:06> <iorec_> you work with MyPlugins.sln and that contains only the plugs you're working on.
<18:56:18> <alg1> no one is installing vvvv alone
<18:56:21> <iorec_> so build-time is no issue for you
<18:56:28> <alg1> for me not
<18:56:48> <alg1> but if every repo is separated build time is the topic
<18:56:59) <iorec_> but it is not (hehe>
<18:57:34> <iorec_> uk..problem: i have to go now.
<18:57:45> <iorec_> think we have most of the stuff discussed from the list.
<18:58:08> <iorec_> and this last topic seems open still
<18:58:13> <alg1> yes
<18:58:25> <alg1> we need to discuss how peopleinstalling VVVV
<18:58:27> <mrvux> @azeno, sorry off for a sec, using myplugins in generel
<18:58:30) <iorec_> will have to continue this (until you're convinced>
<18:58:39> <mrvux> when i have to work out of the repo it's hell
<18:58:51> <mrvux> (for plugs who need core feature tweaks
<18:59:00> <mrvux> for simple plugs it's ok
<18:59:15> <alg1> because if every user installing addonpack it's not addponpack
<18:59:24> <alg1> it's now the core software
<18:59:53) <thalm> if you know core feature tweaks, you know how to handle the repo for sure...:>
<18:59:53> <iorec_> so. i am out. 
<19:00:08> <azeno> well nr of downloads say something different. but those figures might be misleading
<19:00:42> <alg1> currently it's about 50%
<19:01:04> <alg1> i think it's enough
<19:01:38) <alg1> another 50% mostly newcomers, that always forget about addonpack (my students for example>
<19:02:33> <azeno> splitting it all up won't help them either. or are you suggesting putting it all together in one dowload?
<19:02:44> <alg1> yes
<19:02:49> <alg1> core features
<19:03:02> <alg1> that should be descussed
<19:03:14> <azeno> well i think there's also a legal reason for the split
<19:03:28> <alg1> yes, somehow it should be solved
<19:03:45> <alg1> i don't know the full story, so can't think about this
<19:04:19> <azeno> so what you try to say is figuring out those nodes from the addonpack which are major enough to either go into core or replace existing core node?
<19:04:27> <alg1> yes
<19:06:12) <azeno> ok, that's definitly something we're thinking about. we also discussed this a couple of times now the last few months, but as you can imagine it's not that simple. we'd first like to finish stuff we mentioned above (especially the way of writing new nodes> and think about the major "node-reordering" after that...
<19:06:32> <alg1> yes, i agree
<19:07:03> <azeno> there are lots of example where functionality is somehow doubled etc. and yes that needs to get sorted out
<19:07:38) <-- milo__ (~milo@85.183.194.93) hat das Netzwerk verlassen (Remote host closed the connection>
<19:08:38> <alg1> yes, so i voting for the single repo for single product, that can be downloaded as one package
<19:09:11) <-- mino (3d1876ab@gateway/web/freenode/ip.61.24.118.171) hat das Netzwerk verlassen (Ping timeout: 245 seconds>
<19:09:13> <alg1> and big addons should leave as separated projects, with repo, downloadable package etc
<19:10:41> <thalm> alg1: in general, we had this discussion for about 2 months last year and one month this year. its clear that we have to make compromises so we decided to go the way it is now. its for simplicity reasons, which means easy to code your own stuff quickly. we decided that advanced developes like vux, woeishi, you, elliot and so on are able to sort things out. while beginners are not able to do this as easy.
<19:12:12) <thalm> (should be an attempt to conclude the git topic>
<19:13:04) <azeno> and as it is us who provide the download for those two files and therefor do the packaging etc. it was clear that having all this in one repo is much much easier. don't know if you ever touched git submodules, but if not, don't ;> the branching of git is so super fast that i have really no issue whatsoever to work in one big repo.
<19:13:47> <alg1> i currently using submodules, beacause forced to it by Elliot
<19:14:02> <alg1> and this is another hell
<19:14:54> <alg1> branching is the main problem, agree
<19:15:06> <azeno> have a look at https://github.com/apenwarr/git-subtree, we use it to sync the sdk repo with our internal one...
<19:15:15> <azeno> if you need an alternative to submodules
<19:15:32> <alg1> thx, i will check
<19:17:47> <alg1> so, do we finished?
<19:18:20> <gregsn> some plugins cant be delivered together with the vvvv exe core download, because of license issues of some plugins or their libraries they use.
<19:18:20> <gregsn> so for now we thought it is easier to be able to see which plugins are controlled by core devvvs and which one are controlled by external devvvs. having this split between core and addonpack also fixed the legal issues with some of the plugins.
<19:19:39> <gregsn> so we have the separation into those packs. but only one repo for easy scrolling through time
<19:21:47> <alg1> yeah, but i'm think core will have mostly plugins, that depends on core lib
<19:21:59> <alg1> and maybe license policy should be updated
<19:22:26> <azeno> like already discussed?
<19:22:26> <alg1> how about MIT license?
<19:22:38> <alg1> yes
<19:22:51> <azeno> yes, that will be sorted out.
<19:22:59> <azeno> so you're not forced to use gpl
<19:23:07> <alg1> yep
<19:23:28> <gregsn> yesyes. sorry for the confusion
<19:23:41> <alg1> so core plugins for example will be MIT only, but for user controlled they can use any license
<19:23:46> <alg1> even sell it
<19:23:47> <gregsn> we weren't aware of that... but easy to fix
<19:24:07> <gregsn> sure
<19:25:25> <azeno> ok then. thx for all the feedback.
<19:25:48) <mrvux> @gregsn/@azeno, thinking of addonpack github, what about 2 solution files for addonpack (one w/o c++ and one with>
<19:26:35> <azeno> well the solution compiles even if you get the c++ error in the ide
<19:26:40) <gregsn> so. well. and you guys? i thought this talk would be a bit more about what's up on your side ;) or next time? i would love to hear 5 people doing the same and realicing that in the irc chat. (just joking...>
<19:26:55> <mrvux> lol
<19:28:01) <alg1> )>
<19:29:19> <thalm> who is still with us?
<19:29:43> <mrvux> well some new spline fun soon
<19:29:54> <mrvux> new bullet nodes
<19:30:13> <gregsn> b-spline? or nurms or stuff?
<19:30:22> <gregsn> i mean NURBS
<19:30:35> <mrvux> bezier, some nice arclength too
<19:31:00) <gregsn> arclength is nice :>
<19:31:05> <mrvux> also some simple bezier curve fitting system
<19:31:30> <mrvux> yeah, with derivatives and few iters you can get nice results
<19:31:33> <alg1> this would be greate
<19:32:00> <mrvux> ah got some nodes using System.DateTime too
<19:32:09> <alg1> i'm planning to make a some kinde of generic GPU calculations framework for existing pipline
<19:32:21> <azeno> with opencl?
<19:32:42> <alg1> no, just set of hlsl shaders for value damping, interpolation etc
<19:32:49> <gregsn> for existing pipeline?
<19:32:58> <gregsn> ah ok
<19:33:10> <alg1> yeah, because soon as i know it can be changed
<19:34:01> <mrvux> ah will have a few todomap videos soon, so people can learn how to use it
<19:34:01> <alg1> i also know that unc is working on something similar, that called particle fx
<19:34:32> <alg1> would be greate to check it, will ask him in skype
<19:34:35> <mrvux> it has hde integration as well now too, so can name iobox
<19:35:05) <thalm> good, i never understood it..:>
<19:35:08) <azeno> always using the lastest stuff ;>
<19:35:18> <azeno> -s
<19:35:22> <mrvux> hehe
<19:35:51> <mrvux> i think with hde will make much more sense and ease of use
<19:36:11> <mrvux> even without can't live without it tho
<19:37:19) <alg1> can you integrate novation aoutomap to it? >
<19:37:23) <alg1> would be awesome >
<19:37:51) <gregsn> happy to hear that things are coming :> !
<19:38:46> <alg1> gtg now, thx all for the meetup
<19:39:20) <mrvux> ah 3d voronoi too ;>
<19:39:34> <gregsn> so it doesn't look like there are conflicts out there? devvvs working on the same project not knowing of each other. well it might be a bit late already and maybe we should end it here
<19:39:41> <azeno> yes, we too. have a nice evening.
<19:39:48> <gregsn> what do you say: eliot?
<19:39:56> <gregsn> ELIOT?
<19:40:08) <mrvux> eliot says he's happy with github current state ;>
<19:40:14) <azeno> ;>
<19:40:18) <alg1> nope >
<19:40:34> <alg1> and me too
<19:41:38> <azeno> yep we saw that. but maybe that one needs to be discussed in the forum, where pro/cons can be weighted
<19:42:37) <gregsn> ok then thanks for you input. see you next month! good night and good luck! we need to work now ;>
<19:43:00> <alg1> yes, we need to start topic
<19:43:44> <alg1> thanks again for discussion, bye
<19:43:53> <azeno> bye
<19:43:59) <-- alg1 (~alg1@213.232.243.233> hat das Netzwerk verlassen
<19:44:01> <mrvux> bye
<19:44:12> <gregsn> bye bye
<19:56:34> <velcrome> bye
<19:56:38) <-- velcrome (~velcrome@p54B7E0EC.dip.t-dialin.net> hat das Netzwerk verlassen
<20:00:13> <seblllll> oh, bye
~/np~
