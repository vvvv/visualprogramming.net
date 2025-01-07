---
date: "2024-04-02"
title: "vvvv gamma 6.0 release"
description: Release notes
categories: "vvvv gamma Releases"
author: joreg
thumb: vvvv60-thumb.jpg
---

![vvvv gamma 6.0 release](vvvv60-400px.jpg)
 
Here is to introduce **vvvv gamma 6.0**, quite a big drop as you'll understand when you read to the end...

{{< box >}}
__[Download vvvv gamma 6.7](http://vvvv.org/#Download)__  

- [Full Change Log](https://thegraybook.vvvv.org/changelog/6.x.html)
- [Get started](https://thegraybook.vvvv.org/reference/getting-started/overview.html)  
- [Buy a license](https://store.vvvv.org)

__Bugfix releases__
- 6.2 on April 11, 2024
- 6.3 on May 3, 2024
- 6.4 on May 27, 2024  
- 6.5 on June 12, 2024
- 6.6 on July 2, 2024
- 6.7 on January 7, 2025
{{< /box >}}

Let's dive right into what you get with this update:

## Inspector

![vvvv Inspector](vvvv-Inspector2.jpg)

Finally here comes the long awaited Inspector. Open it via Ctrl+I to get an overview of all the pins of a selected node. Inputs can be manipulated and the visibility of pins in the patch can be configured. Pressing the question mark in the top-right corner will show you a bunch of info about the selected node.

Currently the Inspector only works on nodes and regions, but not other elements, like Pads and IOBoxes. You'll understand we had to keep some things for future releases also...

Another caveat: Interaction in the Inspector's editors is different to the editors in IOBoxes. Most notably, while on a number IOBox you change its value via right-down scroll-up/down, in the Inspector you use left-down scroll-left/right. We're not happy with this and are still exploring options to unify this. One option is using the new IOBox settings (see below).

## Debug Views

![vvvv Debug Views](vvvv-DebugViews.jpg)

Boring but invaluable when working on large projects. The 3 new debug views help you in different ways:

- **Build Result:** Get an overview of where in your patches you have build errors. Go fix those first.
- **App Health:** Here you'll see your apps runtime errors (like exceptions) and warnings
- **Log:** A structured log collecting all messages sent by your own app (e.g. via the new Log [System.Logging] node), but also any libraries you have in use

Read all about the above views in the [Debugging](https://thegraybook.vvvv.org/reference/hde/debugging.html) section of the gray book. 

## Node Browser
Not new, but with quite some subtle improvements: 

There is now a top entry "New..." that shows you all the options for creating code elements that take a name. And you can now create all those code elements either way: 
* Choose a code element first and then type a name
* Type a name first and then choose a code element

When opening the Node Browser while making a link (or inserting a node into a link via doubleclick), you'll now see two additional entries:

* Connectable Nodes: Here you'll see most relevant connectable nodes 
* By Type: Here you'll see nodes that connect to the type of the link at hand. The direction of the link decides whether sub- or super-types are also shown

To reach the "By Type" view directly while making a link, press the "." key (ie. no need to doubleclick!).
   
## New Settings
At just the click of a single button (the Hamburger icon in the vvvv editor's top-right corner) you can reach any of the global settings to customize your vvvvexperience. This release adds the following settings:

### Patch
- **Press SPACE to pan:** Enables panning with a left mouse drag while the SPACE bar is pressed.
- **IOBox editable with left mouse button:** Manipulate values in IOBoxes with the left instead of the right mousebutton. NOTE: This requires to move IOBoxes by grabbing their labels rather than their own body!
- **IOBox defaults to horizontal drag:** Applicable to number IOBoxes. Can be overridden by configuring the "Slider Direction" of the IOBox"

### Links
- **Dragging on connector starts link:** Start links from pins, pads and control points on drag, rather than on mouse up. NOTE: This requires to move pads by grabbing their labels rather than their own body!
- **Dropping a link creates element:** OFF: When starting a link with a drag gesture, you may release the mouse button any time without any consequence. 
ON: Releasing the mouse button opens the Node Browser or creates an element right away, if modifier keys are pressed.
- **Enable autolink segmentation:** Links attempt to avoid regions and nodes they are connected to.

### Node Browser
- **Enable Connectable Nodes mode:** Show only connectable nodes when opening the Node Browser with a link at hand

### Inspector
- **Float Precision:** Number of digits to display after the decimal separator
- **Collapsed on Open:** Pin values are collapsed by default

### Miscellaneous
- **Log Buffer length:** Log messages exceeding this number will cause older messages to be dropped. Increasing this number may degrade performance of the Log window.
- **HDE Font Size:** Allows to change the font size for HDE Windows, like the Inspector

![](ParticleLife.gif)
*Paid ad: Find the patch rendering this animation in the Help Browser. Keyword "Particle Life"*

## HDE windows
As you may have noticed, the different windows of our hybrid development environment (HDE) feel slightly detached. This has historical reasons and is not meant to be like that. Moving forward we believe we finally have an idea of how to unify them and starting with this release we have laid some ground work:

- Keyboard shortcuts are now unified across the main patch editor, extension windows and render windows
- On render windows we can opt-out of those HDE shortcuts using the "Enable Keyboard Shortcuts" input
- Render windows (Skia and Stride) now have an optional input "Commands". Commands can be defined using nodes available in the VL.Core.Commands package and allow you to define custom keyboard shortcuts that override shortcuts predefined on renderers. See "HowTo Customize keyboard shortcuts on render windows" in the Help Browser
- HDE windows can now be made topmost by pressing Ctrl + T (not working on renderers yet)
- There is a setting called "HDE Font Size" (not working on all windows yet)
  
## New VL features
### Send and Receive
The S and R nodes from the `Primitives` category were renamed to Send (Global) and Receive (Global) and can now be found in the `Control` category. 

This release introduces an additional Send (Local) region and Receive (Local) node that in combination allow you to keep better control of data you send around in your patches. Check the following patch in the Help Browser:

- HowTo Send and Receive Values

### Direct import of types & nodes from C#
If you thought that [extending vvvv](https://thegraybook.vvvv.org/reference/extending/overview.html) with your own types and nodes couldn't get any better, then what do you think of this: Where so far you had to use a [type forward](https://thegraybook.vvvv.org/reference/extending/forwarding.html#forwarding-types), you can now express your goal directly in C#!

Using the assembly attribute `[ImportAsIs]` you declare that all public classes, structs and enums will be available in VL as if they'd have been defined there directly, ie without the need for a manual type forward.

It's further possible to write process nodes directly in C# by attaching the new `[ProcessNode]` attribute on a class. Again, no further work has to be done on the VL side of things. This way (if desired) C# code can be the single source of truth for a library project.

Learn more about these new attributes in the [Writing Nodes](https://thegraybook.vvvv.org/reference/extending/writing-nodes.html) section of the gray book.

## .NET8 
![.NET](dotnet-logo.png)

Under the hood, vvvv gamma 5.x was sitting on .NET6, with this release we've updated to .NET8.

What this basically means, is this:
- Generally improved performance
- You can now use the newest .NET NuGets of libraries
- When [writing your own nodes](https://thegraybook.vvvv.org/reference/extending/writing-nodes.html) for vvvv you can now use [C#12 features](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-12)

## New Standard Libraries
vvvv's famously fully [open-source standard libraries](https://github.com/vvvv/VL.StandardLibs) got some substantial additions. Here's an overview:

![](newlibs-logos.png)

- Logging is now a breeze. Not only due to the new Log Window mentioned above, but also because you can use any [thirdparty logging provider](https://learn.microsoft.com/en-us/dotnet/core/extensions/logging-providers#third-party-logging-providers) you prefer. Browse for "logging" in the Help Browser to learn more
- No need anymore to reinvent the wheel for configuring your apps. With full support for [Configuration](https://learn.microsoft.com/en-us/dotnet/core/extensions/configuration) you can make use of all the different workflows available. For a start see "HowTo Use Configuration" in the Help Browser
- Our new favorite way for sharing data among PCs is using [Redis](https://redis.io/) via **VL.IO.Redis**. Basically a high-performance key-value store you can access from multiple PCs
- The above also made us add support for [MessagePack](https://msgpack.org/) serialization via **VL.Serialization.MessagePack**, which we use as a default with Redis. And on the side this pack also comes with a handy new JSON Serializer/Deserializer!
- Support for the [OSCQuery protocol](https://github.com/Vidvox/OSCQueryProposal) via **VL.IO.OSCQuery**. It allows you to quickly expose parameters in your patch to other softwares supporting the protocol. Exactly, in a way similar to [VL.IO.RCP](https://www.nuget.org/packages/VL.IO.RCP)
- You have a complex scenario that can be heavily threaded to make use of all your 64 CPU cores? Have a look at [Dataflow](https://learn.microsoft.com/en-us/dotnet/standard/parallel-programming/dataflow-task-parallel-library) and then use it via  **VL.TPL.Dataflow**. Check the Help Browser for a demo
- And finally a tiny new feature that was long overdue: A new Random (process) node with a Seed input!

## Additional New Libraries

![](additionallibs-logos.png)

But that's not all! While not shipping as part of the standard libraries, here are a bunch of new libraries that you can install on demand:

- [VL.ScalableDisplay](https://www.nuget.org/packages/VL.ScalableDisplay) adds support for automatic projector calibration by [Scalable Display Technologies](https://www.scalabledisplay.com/)
- [VL.Augmenta](https://www.nuget.org/packages/VL.Augmenta) adds support for people tracking by [Augmenta](https://augmenta.tech/)
- [VL.Devices.TheImagingSource](https://www.nuget.org/packages/VL.Devices.TheImagingSource) adds support for industrial cameras by [The Imaging Source](https://www.theimagingsource.com/)
- [VL.Devices.IDS](https://www.nuget.org/packages/VL.Devices.IDS) adds support for industrial cameras by [IDS Imaging](https://ids-imaging.com/) using their new [IDS Peak SDK](https://de.ids-imaging.com/ids-peak.html)
- [VL.Devices.ZED](https://www.nuget.org/packages/VL.Devices.ZED/) adds support for stereo cameras by [StereoLabs](https://www.stereolabs.com/)   
- [VL.MediaPipe](https://www.nuget.org/packages/VL.MediaPipe) adds support for hand-, face- and pose-tracking, object-detection and image-segmentation from a live video stream via [Google's MediaPipe](https://mediapipe-studio.webapps.google.com)
  
## Updated Standard Libraries
So the above was all the new stuff. Now here is an overview of the changes to existing libraries shipping with vvvv, for this release:

- **VL.Stride**, vvvv's 3d rendering library has the following new features
  - We've updated to [Stride 4.2](https://www.stride3d.net/blog/announcing-stride-4-2-in-dotnet-8/)
  - Shaders can now be organized in subfolders, their name must still be globally unique though
  - The PostFX pipeline is now completely flexible in that you're no longer limited to using the pre-existing PostFX but you can completely patch the whole pipeline with your own shaders! See "HowTo Create Custom PostFX" and "HowTo Use pre-defined effect in Custom PostFX" in the Help Browser
  - TextureFX have moved to a separate pack VL.Stride.TextureFX
  - TextureFX RGBA inputs are now of type ComputeColor
  - And then [some more](https://thegraybook.vvvv.org/changelog/6.x.html#vlstride)
- **VL.Skia**, vvvv's 2d rendering library. Not many changes, see [change log](https://thegraybook.vvvv.org/changelog/6.x.html#vlskia)
- **VL.ImGui**, the rapid UI building library
  - Adds a backend for directly rendering in VL.Stride (thanks [kopffarben](https://github.com/kopffarben))
  - Has a small breaking change and some more, see [change log](https://thegraybook.vvvv.org/changelog/6.x.html#vlimgui)
- **VL.Video**, the MediaFoundation based video playback library has a breaking change, see [change log](https://thegraybook.vvvv.org/changelog/6.x.html#vlvideo)
- **VL.Audio**, vvvv's audio playback, analysis and synthesis library 
  - Comes with a simplified workflow for FFT analysis (see helppatch) 
  - Comes with a new Visualizer extension (thanks [chk](https://github.com/chkworks))
- **VL.IO.TUIO** now supports the 2.5D and 3D profiles

## Additional Updated Libraries
- [VL.CEF](https://github.com/vvvv/VL.CEF), allowing to render websites in both Skia and Stride:
  - Updated to use CEF 103.0.0
- [VL.IO.RCP](https://www.nuget.org/packages/VL.IO.RCP), the quickest way to expose parameters to control them e.g. via a web browser
  - Now has nodes to directly work with Channels 

## Community efforts
The big focus on [extendability](https://thegraybook.vvvv.org/reference/extending/overview.html) we have with vvvv, makes it possible for everyone to contribute to its ecosystem of libraries. And many of you do! Following is a list of profile pages on nuget.org by all individuals and groups that have published libraries for use with vvvv since the last vvvv gamma stable release. In no particular order:

[AristidesGarcia](https://www.nuget.org/profiles/AristidesGarcia), [chkworks](https://www.nuget.org/profiles/chkworks), [gegenlicht](https://www.nuget.org/profiles/gegenlicht), [natan.sinigaglia](https://www.nuget.org/profiles/natan.sinigaglia), [KairosResearchLab](https://www.nuget.org/profiles/KairosResearchLab), [bj-rn](https://www.nuget.org/profiles/bj-rn), [gamingrobot](https://www.nuget.org/profiles/gamingrobot), [sebl](https://www.nuget.org/profiles/sebl), [mhusinsky](https://www.nuget.org/profiles/mhusinsky), [texone](https://www.nuget.org/profiles/texone), [TheFuseLab](https://www.nuget.org/profiles/TheFuseLab), [domj](https://www.nuget.org/profiles/domj), [TobyKLight](https://www.nuget.org/profiles/TobyKLight), [cnisidis](https://www.nuget.org/profiles/cnisidis), [sunep](https://www.nuget.org/profiles/sunep), [torinos-yt](https://www.nuget.org/profiles/torinos-yt), [kopffarben](https://www.nuget.org/profiles/kopffarben), [sebescudie](https://www.nuget.org/profiles/sebescudie), [wirmachenbunt](https://www.nuget.org/profiles/wirmachenbunt), [domj](https://www.nuget.org/profiles/domj), [AdamZeke](https://www.nuget.org/profiles/AdamZeke), [ANDAND](https://www.nuget.org/profiles/ANDAND)

Further we'd like to highlight the following users who continuously provide materials to learn from:

- [Christoph Ignaz Kirmaier](https://www.3e8.studio/) aka "chk" maintains his [VL.TheBigBang](https://www.nuget.org/packages/VL.TheBigBang) pack which he describes as: "A tutorial series of 42 chapters, covering all nodes and techniques to get you started with the visual programming environment vvvv"
- [Toby Knyvett]() aka "tobyk" maintains his [VL.ExtendedTutorials](https://www.nuget.org/packages/VL.ExtendedTutorials) pack with a series of [video tutorials](https://www.youtube.com/@TobyKLight) covering various topics, like Mutability (Record vs Class), Solving Cyclic problems and a vector matrix maths tutorial series 
- [Takuma Nakata](https://www.takumanakata.com/) creates [video tutorials](https://www.youtube.com/user/takumatn) exploring various aspects of vvvv, recently mostly VL.Fuse
- [Dominik Jančík](https://www.domj.net/) aka "domj" creates [Schema](https://schema.scenic.tools/), which he calls "a playful visual environment for behavior programming with focus on physical devices and spatial relations". It is built with vvvv from the ground up and [open-source](https://github.com/domjancik/scnq-schema) for you to explore and learn from. You may even catch him do some [live-coding](https://www.youtube.com/@domjancik)
- [Randal Vazquez](https://github.com/ravazquez) aka "ravazquez" has released two little games for you to explore and learn from: [VL.Snake](https://github.com/ravazquez/VL.Snake) and [VL.Breakout](https://github.com/ravazquez/VL.Breakout)
  
And let's not forget about the hours of learning content created by different individuals that are now available via The NODE Institute:
- [Course recordings, Winter 23/24](https://thenodeinstitute.org/ws23-vvvv-intermediates/)
- [ Course recordings, Summer 23](https://thenodeinstitute.org/vvvv-intermediates-summer-2023/)

All of the above (and those we might have missed) are immensely valuable and we as the developers of vvvv bow before every single one of you!

## What Next?

In case you wonder why the above doesn't mention "global channels" and "bindings" as huge new features: True, one of the things we've been working on recently are "global channels" which allow you to bind data from external sources (Redis, OSC, RCP,...) quickly to parameters in your patch. 

While they are already shipping with this release, we're still hiding all related nodes behind the "experimental" aspect, since we're not happy with all the details of this whole topic yet. This means that we still expect breaking changes going forward and don't have documentation yet other than some helppatches in the Help Browser. More still to come...

Apart from regular 6.x bug-fix releases, we'll also add a few more features in the 6.x branch. Please consult our [living roadmap](https://thegraybook.vvvv.org/roadmap/planned.html) for details.

## Licensing
The release of a new version is always a good moment to make sure you still have a valid license for commercial use. To check, log into your account on vvvv.org and then view [your vvvv gamma licenses](https://store.vvvv.org/licenses).

In case, you simply [buy a license](https://store.vvvv.org/) the moment you start working on a commercial project. Don't forget that we also have monthly options!

---

We hope this release suits you well and would love to hear your thoughts on it in the comments. 

Good patch,  
your devvvvs!
