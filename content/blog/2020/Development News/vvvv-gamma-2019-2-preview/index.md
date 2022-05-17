---
categories: "Development News"
author: "joreg"
date: "2020-03-04"
title: "vvvv gamma 2019.2 - preview"
slug: "vvvv-gamma-2019.2-preview"
description: ""
imported: "true"
---


{{< box >}}
Note:
Update: The latest preview version is here: **[http://visualprogramming.net](http://visualprogramming.net)**
{{< /box >}}

Moments later,...

...we're announcing the immediate availability of the vvvv gamma 2019.2 series of previews, finally including one of the more anticipated features in vvvv history: [Executable Export](/blog/2019/vl-exporting-an-application).

This means we are now in the final stage of the preview leading up to a proper initial release after the waves introduced by the new features in this series have been smoothed out. 

![](vvvv2019-2.png)
*Her majesty... at your service.*

## What's new compared to the vvvv beta series
<!--{SPLIT()}-->
### General
- Trivial installation via an installer
- The overall performance is much improved
- Projects can be exported as executables
- All your work is automatically backuped
- A help browser: press F1 without any node selected
- Helppatches opening when pressing F1 with a node selected
- You have quick access to your recent sketches
- By default projects are now handled in one file
- There are central settings per user, overridable per project
- You can pause and step your patches frame by frame
- Extensibility: Write plain C# to extend vvvv with custom nodes
- Simply use almost any .NET library available e.g. on nuget.org
- Proper scope and dependency handling
- Structured documentation for your patches. Add summary, remarks, help to elements
- Being close to C# allows for VL help to be found on msdn/stackoverflow

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
- Recursive patches
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

## Tutorials and HowTos
A growing number of video tutorials is [available on youtube](https://www.youtube.com/channel/UCu-xqv-TLwv6L0An7MJJA5A/playlists?view=50&sort=dd&shelf_id=4).

## Pricing
We've announced the [pricing model of vvvv gamma](/blog/2019/vvvv-gamma-licensing-2) in a separate post. Until further notice, the previews of vvvv gamma are free of charge but due to its preview-nature we don't recommend using it in commercial scenarios yet.  

## Download
Here you go: **[vvvv gamma 2019.2 preview](http://teamcity.vvvv.org/guestAuth/app/rest/builds/id:31715/artifacts/content/vvvv_gamma_2019.2.0-0321-gbd3313bfcc_setup.exe) 321**



## Changelog:
**Upcoming**


**321** 04 03 20
- Fixed copy-paste of output pins not merging correctly into target patch
- Fixed patch pins not always being synced to nodes with the "Connect to Signature" flag
- Do not create empty regions (nodes without a patch) when syncing to a node definition which lost its delegate input
- Should an incremental compilation of a project fail, try from scratch before giving up.
- Fixed implicitly inserted CreateDefault node not being tracked in dependency graph - fixes backend crash when modifying it
- Fixed assembly initializers being called far too often leading to long hotswap times in bigger projects
- Fixed regression that enums don't have System.Enum as super type anymore (was for example breaking VL.Devices.Kinect2)
- Fixed vvvv.exe becoming a ghost process when crashing on startup
- Fixed disposable interface being added twice when VL.CoreLib was missing - caused subsequent emit crash
- Only load project assembly from cache if all its dependencies have also been loaded from cache - fixes emit error when dependent project was modified
- Backend will now unload not needed project states
- Faster RGBA to RGB conversion (IImage to SKImage)
- Fixed cast exception triggered by node browser when browsing through nodes from assemblies
- Fixed various crashes when opening a completely broken document structure (missing assemblies, missing documents etc.)
- Fixed file/string readers not eliminating BOM 
- New nodes Loop []([Observable), Subscribe (Provider) []([Observable), Using (Provider) []([Observable) and moved PollData, PollResource from Resources to Observable category
** New region Loop []([Observable) managing internal state as well as giving access to cancellation and observer to optionally push data
** Subscribe []([Observable) returning a provider which manages the lifetime of the upstream observable sequence
** PollData and PollResource now stateful internally thanks to making use of new Loop
- Removed recently introduced TryOpen/Retry/RunOn []([Resources) nodes as they turned out as hard to use (deadlock) and not necessary
- Added new struct ArrayBuilder used by two new nodes:
** StoreSequence []([Collections.MutableArray) to efficiently either grab an upstream array from a sequence or copy its content into an internal array which will then get exposed.
** HoldLatestCopy []([Collections) to efficiently copy data pushed from a background thread into the main thread
- Bunch of minor performance improvements to VL.Skia by making use of methods provided by the System.Runtime.CompilerServices.Unsafe class and calling SKCanvas.SetMatrix in Transform nodes, not rendering nodes
- Fixed allocation issues of Points []([Skia.Layers) by exposing internally used DrawPoints via ReadOnlySpan
- Fixed assignment of higher order regions not being carried over to expanded patch 
- Ensure names of emitted assemblies are unique even after reloading a document 
- Type Unification got even more robust and versatile. Better type renderings and type error messages.
** generic node applications with generic pins (like "a Asset") previously just lead to type "Asset" for the generic pin for as long as the pin was still unconnected. This way you often had to force connections. Now these type parameters stick around leading to not calling the node until to the point where you actually connect to something.
** types can look like this: "a Asset". This is a short rendering for a constrained type parameter "T1 where T1: Asset". F# also has an abbreviation for types like this. They call it flexible types.
** types can look like this: "Sequence (Ungeneric) & IReadOnlyList<T>" which is a beautified rendering for "T1 where T1: IEnumerable, IReadOnlyList<T>"
** if necessary (like on recursive types) the type parameter will not get hidden. "T1: IReadOnlyTree<T1>" is not hiding the T1 behind an "a IReadOnlyTree<T1>" in order to make clear that it references itself.
** invalid type annotations (those where the type arguments of the user break the constraints of the type parameters) lead to proper error messages.
** quite less emit problems due to more robust type unification
* Added RemoveAll for Spread and SpreadBuilder
* Fixed Random node not being thread safe 
* Fixed ForEach [](Parallel) crashing with input count of zero and modified it so it returns a spread builder instead of a spread to avoid allocations

**236** 18 02 20
- added ShowOrigin setting 
- More type inference fixes
- Fixed primitive types not having any super types like IComparable (was reported in chat by sebl)
- Fixed type constraints on higher order region with one single patch not properly generated should the name of the inner patch have changed 
- Fixed "auto connect to signature" of patches like CreateDefault which have a fixed set of pins 
- Fixed output pin groups of type Dictionary<string, obj> not working anymore when pin on application side was annotated 
- Fixed compiler crash when having a generic type annotation in a patch 
- Fixed CLR array types not being mapped to type symbols 
- Removed Spread.Pin/Unpin - same functionality is available through much safer TryGetMemory/Pin -> MemoryHandle.Dispose path
- Fixed pixel format being swapped from R8G8B8 to B8G8R8A by SKImage.FromImage node
- Fixed null pointer when trying to navigate into patches of completely broken documents
- Fixed higher order regions not working when definition added an inner pin
- Added a few convenience nodes for resource providers useful when opening and polling devices. Even though not yet released they already look promising for devices like Kinect or Astra.
- Fixed minimal changes on solution made by compiler getting discarded (pin order somtimes not updating on application side)
- Fixed pin group builder (ModifyPinGroup) changing the model when it shouldn't 
- Fixed repeat loop not working on inputs of type T where T : IReadOnlyList

**211** 07 02 20
- Don't use BOM in UTF8Encoding
- Backend generates new lines on its own without having to rely on super heavy NormalizeWhitespace function. This should get rid of very long compile times when traversing deeper into a library. Debugging the generated C# code with Visual Studio will only work properly when running with -debug and -nocache flags
- improved type unification cleverness and stability 
- Helpbrowser: chat language buttons added
- AppExporter "Export" button gives immediate feeedback

**0193** 31 01 20
- fixed pin-reordering in signatures as reported here: https://discourse.vvvv.org/t/2019-2-0081-pin-reordering-buggy-behavior/18132
- Removed private flags between our package dependencies as it caused msbuild to skip copying certain assemblies coming from VL.CoreLib as well as making our packages smaller.
- Fixed parts of patches being grayed out and when traversing inside becoming all good - compiler was missing one iteration in recursive blobs - [](https://discourse.vvvv.org/t/lazy-type-inference/18066)
- improved support for [helppatches](/blog/2020/vl-help-patches)
- Reworked error handling of CreateDefault and RegisterServices operations 
- Extended the general renaming code path to handle all cases and removed obsolete rename commands 
- The Micorsoft Build Tools 2019 are now optional. If not installed the Export menu entry will be disabled
- Removed the .vl suffix on generated executable and fixed Run button 

**0169** 22 01 20
- Couple of fixes in type unification algorithm - fixes for example VL.Devices.RealSense
- Exporter uses nuget restore to figure out what assemblies are already referenced by packages. Fixes export of VL.OpenCV as well as reported issues like https://discourse.vvvv.org/t/export-application-problem-superfluous-system-reactive-reference-2019-2-0125/18145 https://discourse.vvvv.org/t/app-export-failure/18107
- Fixed pins not highlighting in valid cyclic connection attempts like FrameDelay 
- Fixed wrong VL factory being used in exported apps - type names used by serializer were different
- Fixed target code when not implementing an interface yet - https://discourse.vvvv.org/t/exception-when-implementing-an-interface-2019-2/18122
- Do not try to restore packages without a version on export - fixes export of VL.DBSCAN which has buggy reference to non-existing VL.CoreLib.VVVV
- Fixed missing or wrong assembly references in exported projects.
- Fixed default value of delegates in generic patches. CreateDefault operations will be auto-generated for all delegate types.

**0140** 09 01 20
- Fixed ToObservable (Switch Factory) - used by many reactive nodes - not calling the factory after the element type changed due to a hotswap
- Added HighDPI awareness to App.config for exported apps
- Fixed stack overflow when patching a CreateDefault - system will now generate an error as long as the output is not connected
- The default value of a record will again be cached in a static field
- Fixed serializer serializing auto-generated fields
- OSCMessage (Split) now returns timetag
- CTRL+Shift+F now also finds interfaces
- updated VL.OpenCV to 0.2.133
- fixed problem with pin-editor for serializable types like Rectangle
- Splash screen shows up in taskbar and has proper icon
- Counter Clamp/Wrap/Mirror reset under/overflow correctly
- NodeBrowser now has a TextBox that can select/copy/paste
- Fixed regression that bang and press IO boxes would sometimes stick to true

**0081** 16 12 19
- Fancied up the helpbrowser
- Fixed problem scrolling in menu dropdowns: https://discourse.vvvv.org/t/main-menu-ui-scroll-with-mousewheel-within-dropdownmenu-lists/18083
- Fixed a crash in UI when creating a frame https://discourse.vvvv.org/t/creating-frames-throws-exception/18067
- Fixed crash in UI when trying to retrieve the default value of an imported generic type [](https://discourse.vvvv.org/t/2019-2-0026-cannot-create-iobox-tuple-t-t/18061)
- Fixed apply node lifting being applied to nodes which already had an apply pin (like Console.WriteLine)
- Fixed crash when referencing an assembly like Bridge which tries to replace the whole mscorlib [](https://discourse.vvvv.org/t/gamma-x-2-nuget-import-error/18038)
- Fixed regression that the "valid pins are ..." warning wouldn't show up when implementing an interface 
- Type annotations on pads which point to a field will now truly be ignored and also cleared - was reported in chat by björn
- The version of the currently used package will now be written to disk. Allows to introduce converters for libraries at a later stage.
- Fixed regression that the Serializable attribute wasn't set on emitted classes [](https://discourse.vvvv.org/t/issue-with-serialization/18064)
- Fixed regression that source packages (provided through command line arg --package-repositories) wouldn't get higher priority than installed ones [](https://discourse.vvvv.org/t/2019-2-0026-weird-behavior-of-package-repositories-arg/18077)

**0026** 10 12 19
- Fixed loading of VL.Devices.RealSense
- Fixed empty error message on faulty type annotations
- When generating a C# project, local source packages without a nuspec will not get included [](https://discourse.vvvv.org/t/exporting-fails-to-build-due-to-dependency-it-isnt-using/18043)
- Fixed regression that nodes on auto-connect would show warning as well as their pins of unused fragments wouldn't connect to the default patch anymore [](https://discourse.vvvv.org/t/gamma-2019-2-connect-to-signature-does-not-work-in-this-region-even-outside-a-region/18048)

**0015** 06 12 19
- Patch drawing is antialiased and icons are showing again
- Fix for drawing transparent PNGs
- Fixed regression that delegate regions wouldn't create their pins anymore
- Emit exception will show first error now as it's message
- Fixed specialized operations not being marked as unused if there containing type was - see [](https://discourse.vvvv.org/t/gamma-x-2-breaking-not-opening-old-patches/18036)

**Compared to the [2019.1 series](/blog/2019/vvvv-gamma-2019.1-preview)**
#### Features
- Export to executable
- Faster startup and less memory consumption due to precompiled libs
- Recursive operations and datatypes
- Runtime errors: marked node is now always correct
- Generated C# code can be debugged using Visual Studio
- Help patches (where available) open when pressing F1 on a selected node

#### Breaking Changes
Unfortunately this preview introduces some breaking changes. This means that projects that were working fine with 2019.1 previews may no longer work correctly with 2019.2 previews! If you encounter such a situation and cannot resolve it on your own, please get in touch via forum or chat! Here is a list of possible problems you may encounter:
- Existing patches may need additional type annotations due to changes in the type unification
- Execution order of nodes may be different if it wasn't explicitly expressed before
- Generic type parameters in an interface patch will now always belong to that defined interface (and not any of its operations)
- Not really breaking, still a change: Runtime errors: no values in tooltips when in pause state
For technical details please see the blog post about the [New Roslyn based backend](/blog/2019/vl-new-roslyn-based-backend).
---

We'll update this blogpost with new preview-releases regularly. Please check back often and report your findings in the chat, forum or a comment below!

Yours truely,
devvvvs.