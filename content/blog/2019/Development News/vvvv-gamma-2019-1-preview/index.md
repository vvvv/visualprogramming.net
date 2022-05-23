---
categories: "Development News"
author: "joreg"
date: "2019-11-26"
title: "vvvv gamma 2019.1 - preview"
slug: "vvvv-gamma-2019.1-preview"
description: ""
imported: "true"
---


{{< box >}}
Note:
Update: The latest preview version is here: **[http://visualprogramming.net](http://visualprogramming.net)**
{{< /box >}}
Just in time!

Only a whopping 6 years and one and an half months after its first mention during [Keynode 13](http://node13.vvvv.org/program/vvvv-keynote/) and to the day exactly 5 years after the release of the [The Humble Quad Bundle](/blog/2014/50-the-humble-quad-bundle), you can finally hold it in your own hands. Not exactly as the full release we had planned but as a preview:

![](gammapreview.png)
*Her majesty... at your service.*

To our own surpise we couldn't finish all the things we [had planned](https://betadocs.vvvv.org/roadmap.html) to release today. Most notably the "windows executable export" didn't make it. We know this is a bummer, but we want to get this right and it just needs some more time.

Apart from that we figured there is no more need at this point, to keep it to ourselves. It is definitely good enough for a preview, definitely good enough to gather some feedback to incorporate into the final 1.0 release for which we take some more time to finish our plans. So let's have a look at what we got:

## What's new compared to the vvvv beta series
<!--{SPLIT()}-->
### General
- Trivial installation via an installer
- The overall performance is much improved
- All your work is automatically backuped
- A help browser: press F1! (and wait for it...)
- You have quick access to your recent sketches
- By default projects are now handled in one file
- There are central settings per user, overridable per project
- You can pause and step your patches frame by frame
- Extensibility: Write plain C# to extend vvvv with custom nodes
- Simply use almost any .NET library available e.g. on nuget.org
- Proper scope and dependency handling
- Structured documentation for your patches. Add summary, remarks, help to elements

- close to .NET use msdn, stackoverflow help

<!--~~~-->
### Patching
- Patches are now zoomable
- You can use frames to structure your patches visually
- UI runs in its own thread
- Tooltips show help and errors
- IOBoxes allow for much faster configuration
- You can doubleclick a link to insert a node or finish a link with a doubleclick to create a node
- Patch your own pingroups
- The color theme is now customizable and defaults to dark
<!--{SPLIT}-->

<!--{SPLIT()}-->
### Language
Besides staying true to its nature of being a an easy to use and quick prototyping environment, vvvv is also a proper programming language with modern features, combining concepts of dataflow and object oriented programming:

- Define your own datatypes (Classes and Records)
- Composed Datatypes (Spread of Spread,..)
- No more binsizes needed!1!!
- Loops to iterate within one frame
- Generics
- Delegates
- Reactive programming
- Async data processing (multi-threading)
- Easy caching of expensive operations

<!--~~~-->
### Node Library
While for now the number of libraries we ship is limited, the fact that you can essentially use any .NET libary directly mitigates this problem at least a bit. Besides there is already quite some user contributions available in the [wip forum](https://discourse.vvvv.org/c/wip) and here is what we ship:
- A thorough core library for all your basic needs
- State of the art 2d drawing with VL.Skia
- Effortless computervision via [VL.OpenCV](/blog/2019/vl.opencv-release-candidate)
- Support for Midi, OSC, ArtNet, Serial,... 

<!--{SPLIT}-->

## Forum
To accommodate for the fact that from now on we essentially have 2 products, we added two main categories to [the forum](https://discourse.vvvv.org/categories): 

![](gammaforum.png)
*Living together in harmony: beta and gamma*

The existing question, feature, bug, general sections were moved into vvvv beta, and the vvvv gamma section got its own question, feature, bug and general sub-sections. Note that by default the search is constrained to the category you're currently viewing. When you're using vl in beta, still feel free to ask questions in the beta forum. We'll handle that. 

## Tutorials
Head over to this forum section to watch some video tutorials: <https://discourse.vvvv.org/c/tutorials>

## Pricing
We've [previously announced](/blog/2019/vvvv-gamma-licensing) the upcoming pricing model for vvvv gamma, which we're currently refining and we'll update you on changes to it soon. 

Until further notice, the previews of vvvv gamma are free of charge but due to its preview-nature we don't recommend using it in commercial scenarios yet.  

## Download
Here you go: **[vvvv gamma 2019.1 preview](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:31292/artifacts/content/vvvv_gamma_2019.1.0-0975-gbe94390fc5_setup.exe) 975**

### Changelog:
**975** 26 11 19
- works with [VL.Audio](https://www.nuget.org/packages/VL.Audio/0.1.15-alpha)
- Fixed race condition between state disposal and OnNext calls in reactive ForEach regions. Was responsible for an access violation in OpenCV tooltips.

**959** 19 11 19
- equals version included with beta39
- can now create a node while linking by simply starting to type (double-click not required anymore)
- fixed SVGWriter
- fixes on bumpy Damper
- removed a few unnecessary Damper versions
- fixed time step calculation of Damper (Fast)
- Dampers can now be used in loops
- fixed image tooltip
- fix on tooltip layout
- some color operation improvements

**930** 02 11 19
- fixed annoyance with nodes being selected instead of dragged
- fixed problem with red nodes not updating after installing VL. nugets
- fixed time step calculation of Damper (Fast)

**923:** 31 10 19
- added ToVector2/3/4 (Float32)
- fixed Tokenizer (Frame)
- fixed register services method called too early 
- fixed regression that timings wouldn't show up on regions 
- fixed timings not working on Cache region 
- fixed serializer not dealing with fields of type object correctly
- fixed serializer crashing with a stack overflow when data like vectors or colors stored in an object field were re-interpreted as arrays
- fixed IL emitter not picking up type dependencies on fields if the type was a generic type instance (https://discourse.vvvv.org/t/weird-reference-documents-behavior/17949)
- added Random implementation for RGBA
- fixed hue calculation and minor improvements in color space conversions
- added String <-> Array<Char> conversions
- shutdown dialog now lists unsaved documents
- installer adds windows defender exceptions

**827:** 09 10 19
- setup.exe is now signed and shouldn't trigger "windows protected your PC popup anymore"
- added Quad>Windows>Key/MouseDisplay
- fixed GrayScale Skia ColorFilter
- added Damper/Oscillator 2D, 3D
- Packages are now in AppData\Local\vvvv\nugets

**703:** 16 09 19
- tooltip performance improved
- ImageReader now returns correct format of images
- added FromBytes (SKImage)
- added Resize (SKImage)
- LinearSpread now has Phase input
- added midi ProgramChange node

**667:** 03 09 19
- added IsEven/IsOdd nodes
- added Morph node
- added MultiFlipFlop node
- added ConnectAll node
- added CounterFlop
- added Random (Centered)
- added Sort (FormerIndex)
- added OrderBy (FormerIndex)
- added IndexOf (KeySelector)
- added Search
- added Search (KeySelector)
- added Resample nodes (Point, Linear, Repeat, Hermite, BSpline)
- Switch node can now have more than 2 inputs
- Filter node now has TweenerMode exposed
- Nodebrowser now also looks for tags in nugets
- FromImage (Skia) now has options for the case of R16->R8
- FromImage (Skia) now handles 24->32bit conversions
- ADSRSettings has optional inputs for Attack, Decay and Release curve settings
- ADSR has an input to set a new clock at any moment
- fixed AddRange (Array) of SpreadBuilder
- updated VL.OpenCV to 0.2.129-alpha

**618:** 22 08 19
- SVG/PDFWriter now deal with background correctly
- improved some warnings
- increased max tooltip height

**615:** 21 08 19
- more tweaks for tooltips
- Ctrl+F now also considers nodes category
- updated to VL.OpenCV 0.2.122

**573:** 08 08 19
- pin tooltips now show their infos again when available
- copying messages from tooltips is now via ctrl+shift+c
- added simpler Mouse and Keyboard (Skia.IO) nodes
- skia primitives (rect, circle,...) now come in two versions, instead of as overloads
- updated to VL.OpenCV 0.2.121

**552:** 01 08 19
- [reworked tooltips](/blog/2019/vl-tooltips)
- new settings: *MouseMiddleButtonOpens* to activate middleclick to open patches of nodes
- addded node: FromImage (MutableArray)
- added skia ColorFilter nodes: Transform, Brightness, Contrast, Grayscale, LUT

**411:** 12 06 19
- Value to bytes nodes now have defaults
- Fixed somehow newly introduced crash in patches making use of serialization (like [Tilda](https://discourse.vvvv.org/t/vl-tilda)) or reflection API (like the {{< contribution "model-runtime-editor-design-pattern" "runtime-model-editor demos" >}})
- Fixed accumulators on loops being auto-disposed causing object disposed exceptions in more complex patches (ike [Tilda](https://discourse.vvvv.org/t/vl-tilda))
- Fixed Sampler (Reactive) getting stuck in an endless loop if upstream observable crashed (also seen in [Tilda](https://discourse.vvvv.org/t/vl-tilda))

**406:** 10 06 19
- Fixed crash when creating IOBoxes in regions while linking
- Fixed pin highlights when linking via region border point
- Fixed application restart with F8/F5
- Skia gradient nodes rework

**398:** 05 06 19
- fixed couple of regressions in compiler introduced between 369 and 380
- fixed splash screen flicker
- fixed a null exception on startup

**380:** 01 06 19
- fix for Tokenizer (Frame/Postfix) with empty separators

**369:** 27 05 19
- Skia PerfMeter (F2) now measures full paint time
- fixed "Countdown" output of Trigger node
- fixes in compiler
- performance improvements in compiler
- added pixel format R32G32F to imaging
- fixed a freeze in Tokenizer
- added Tab, CR, LF, CRLF nodes
- added serializer for Range
- theme and interaction improvements
- added Skia checkerboard style that can be used as a paint
- fixed removing .vl doc references

**344:** 14 05 19
- PerfMeter in Skia renderer (F2) now shows UpdateTime and RenderTime
- added checkerboard style that can be used as a paint for any layer
- improved scrolling behaviour for sliders
- CoreLib improvements
- sped up RepellingCircles demo patch 
- several compiler fixes 
- compiler performance improvements

**318:** 09 05 19
- frames now let you choose colors from a palette instead of the color chooser
- frames now move their content along as you drag on their titlebar
- frames now only move elements that are fully contained
- frame is now included in the "surround with" context menu
- press SPACE to force-include frames in selections
- in inspektor changing precision for floateditor now also sets precision for min, max and stepsize. 
- can now grab border control points on regions properly without interfering with region resize
- default culture setting is now invariant

**303:** 08 05 19
- fixed missing dependency for VL.OpenCV

**301:** 07 05 19
- windows timer is set to 1ms on start
- mainloop uses less performance and doesn't block windows messages
- Skia Renderer has PerfMeter build in, toggle with F2 when selected
- fixed dpi problem with text in SymbolFinder
- ctrl+T/ctrl+shift+T to bake/clear type annotations on datahubs
- fixed "invalid cast in typeunification" error 

**287:** 06 05 19
- shortcuts now work with all tabs closed
- Renamed action "Assign->Pop" to "Assign->Clear assignment" to make it easier to understand what the action does
- Firmata: Tokenizer was stuck in an endless loop
- fixed null exception in ResizeSelectedMouseHandler
- Typewriter: Shift+PageUp/PageDown - select to the beginning/end of the document, cursor stays at the same column. 
- OverlayEditor now has minimumsize (again)
- ImageEncoder doesn't have the bmp option anymore as skiasharp can't encode into bmp

**273:** 02 05 19
- fixed another problem with editors/tooltips and high dpi settings
- fixed "ReguarExpression" typo
- AllAtOnceEditor for vectors now sticks to value of first component
- fixed problem with enum-editors on pins getting stuck
- no more duplicate "Horizontal" entry in IOBox inspektor
- inspektor now also shows elementtype properties for Spread<Vector>
- serialization for custom types doesn't throw errors for inspektor/defaults
- upstream dis/connected iobox no longer looses its settings
- added GroupBy (Length) and GroupBy (Count) nodes to split a spread into spread-of-spreads
- added Clean node: removes slices with empty strings
- added RepellingCircles skia demo

**252:** 27 04 19
- fixed dpi handling for fonts in editors
- can now set ApartmentState of BusyWaitTimer to make UI threads
- mainloop now has high precision
- added PerfMeter to VL.Skia
- editing comment/string now keeps size of editor
- comments now have correct initial size
- StringEditor on pin now has wider fixed width
- fixed problem with paddings differing between single and multiline textbox
- fixed setting bool pin value via dragging
- fixed interaction in signature view of patch explorer
- fixed deadlock when implementing interfaces

**230:** 24 04 19
- fix for regions inside operation definitions disappearing
- fix for patches with more than 10 operations showing later operations as black
- quad icon now works for all themes
- previous/next icons now colored correctly in all themes
- string editors/comments now have a configurable "Max Visible Characters" to prevent low performance with too long lines

**222:** 18 04 19
- VL.Skia Camera 2d is not experimental anymore
- fixed pin interaction in signature view
- fixed an edge case when then node browser wouldn't show up
- fixed IOBox rendering freezes
- added many tags to VL.CoreLib to find nodes faster 
- VL.Skia is referenced by default for new documents
- toggle toggles on every mouse click
- IOBox values are not applied while typing anymore 

**200:** 15 04 19
- inputs/outputs of definitions/regions and groups can be moved (again)
- fixed problem with documents not opening anymore
- fixed file path serialization of dependencies when the path couldn't be made relative to the document itself 
- fixed coloring of pads and region bordercontrol points

**191:** 13 04 19
- a comment that only holds a link can be right-clicked to open in the browser
- recent sketches now show in reverse order: most recent is topmost
- fix: improved recizing of nodes, regions and ioboxes
- fix: input/output indicators on pins and pads are now in sync with tooltip (again)
- fix: selected spread ioboxes can now be deleted with backspace when hovered with the mouse

**180:** 11 04 19
- fixed background for definition patches
- Skia ButtonBehaviour now lets you specify which buttons to listen to

**177:** 10 04 19
- new setting *DocumentAskOnFirstSave* sets whether to ask for save location on first document save
- added "Show Intro Patch" to quad menu, to recall intro patch even if it's not shown on startup
- reactivated play/pause mode visualization
- various coloring/theme fixes
- active tab is underlined (again)
- definition patches now have a hatched background
- removed RestructureDocument from patch context menu
- default count of a collection pin group can now be configured
- Skia Group defaults to 2 inputs (again)

**150:**
- VL.OpenCV now comes with demo patches in Help Browser!
- fixes for Skia ImageReader and ImageWriter
- added '-m' or '--allowmultiple' command line arg to allow running multiple instances side-by-side 
- shortcuts are deactivated for patch when Finder box is open
- several fixes for IOBox drawing and interaction

**139:**
- fixes various assembly not found exceptions when using nodes of the Midi category, the Script region or binary serialization: [a](https://discourse.vvvv.org/t/error-with-serialize-binary-and-json/17397/2), [b](https://discourse.vvvv.org/t/v4g-first-impressions-bugs-i-found-in-10-minutes/17382), [c](https://discourse.vvvv.org/t/error-with-serialize-binary-and-json/17397/2)

**137:**
- fixes problems with pin-editors: [a](https://discourse.vvvv.org/t/2d-vector-pin-bug/17401), [b](https://discourse.vvvv.org/t/change-in-stroke-width-not-registering), [c](https://discourse.vvvv.org/t/split-string-separator-pin-not-registering-inputs/17385)
- enables spread-editors directly on pins

**134:**
- Info.vl in now called Intro.vl
- double-clicking .vl files will open with the already running instance
- Skia renderer goes fullscreen via F11 or Alt+Enter
- many fixes and tweaks

---

Apart from the promised and still missing parts, we're aware of quite some little glitches still and will update the download link above periodically. So please check back often and report your findings!

Yours truely,
devvvvs.

