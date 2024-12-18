---
categories: "Development News"
author: "joreg"
date: "2024-12-18"
title: "Introducing: Support for VST3 audio plugins"
description: "For your sounding needs"
thumb: thumb.png
---

Dear audiophiles,

the wait is over! Oft requested, today we give you a preview of VST3 audio plugin support in vvvv gamma. But first some required legaleese:

![](licensing_6.png)

{{< box >}}
VST® is a trademark of [Steinberg Media Technologies GmbH](https://www.steinberg.net/), registered in Europe and other countries.
{{< /box >}}

## Getting started

As of this writing, VST support in vvvv is still in preview, so you'll have to follow these requirements:

{{< box >}}
- Download [latest vvvv gamma preview](https://vvvv.org/#Download)
- [Install](https://thegraybook.vvvv.org/reference/hde/managing-nugets.html) the NuGet: `nuget install vl.audio.vst -pre`
- Open the [Help Browser](https://thegraybook.vvvv.org/reference/hde/findinghelp.html), type "vst" and then open and read the "Getting started" help patch carefully
{{< /box >}}

## What's in the box

Any VST3 plugin you have installed on your machine, in the [default location](https://helpcenter.steinberg.de/hc/en-us/articles/115000177084-VST-plug-in-locations-on-Windows) will simply show up in the Node Browser under: Audio -> VST -> Effect or Instrument

![](2024-12-18-14-31-52.png)
*e.g. Driving the [VCV Rack 2](https://vcvrack.com/Rack) (Virtual Eurorack Studio) plugin via MIDI*

Every VST you place as a node has audio in/out but also MIDI in/out pins, so no questions there. Rightclick a node and click `Show UI` to show the plugins editor. 

In order to control some of a plugins parameters from the patch, you can expose them as pins. For this, select a plugin in the Inspektor (Ctrl+I), turn on `Learn mode` and then click the parameters in the plugins editor that you want to have as input pins.

![](2024-12-18-15-15-11.png)
*e.g. Exposing "Oscillator 1 Phase" as input pin* 

This will give you a pin on the node that you can then control from the patch, like so:

![](image.png)

So please go ahead and test drive all your plugins. Let us know in the comments which plugins you tested to work successfully. If you encounter any issue or questions, please hit us up in [the forum](https://forum.vvvv.org)!

## Credits

Development of this library is supported by the following sponsors:
- Gold: [m box](https://github.com/m-box-de)
- Silver: [SCHNELLE BUNTE BILDER](https://schnellebuntebilder.de/)
- Silver: [3e8.studio](http://3e8.studio/)

If you also have a request for custom development, don't hesitate to [get in touch](mailto:devvvvs@vvvv.org)!