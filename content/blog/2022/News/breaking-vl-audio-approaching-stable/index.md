---
categories: "News"
author: "joreg"
date: "2022-01-25"
title: "Breaking: VL.Audio approaching stable"
slug: "breaking-vl.audio-approaching-stable"
description: ""
imported: "true"
---


Dear audiophiles!

Here is to announce some long-overdue work on the [VL.Audio](https://www.nuget.org/packages/VL.Audio) pack with the goal to finally release a stable version of it. There are still some pending todos, but the main things are done. So in its latest previews, please find the following partly breaking changes:

## Driver and Timing Configuration
The singleton AudioEngine node is gone and replaced by 2 simpler singleton nodes
* **DriverSettings**
* **TimingSettings**

But the idea is to mostly only use those when exporting applications. Because usually, you'd now simply use the new Audio Configuration extension (Alt+C). The UI for the extension is still missing at this point, but you get the idea. Meanwhile, you can manually modify *\AppData\vvvv\gamma\VL.Audio.Configuration.xml* (requires a restart of vvvv).  

A third alternative is to use the new **SettingsFromFile** node that allows you to specify such a configuration.xml that you may want to check into a git-repo with your project.

Still, to get any audio out, you'll need either the dedicated ASIO driver of your sound device or one of the [generic ASIO drivers](https://thegraybook.vvvv.org/reference/libraries/audio.html) installed.

## Buffer nodes
A new set of nodes allows you to record/play and save/load audio, using buffers. For now these nodes are still marked with the *experimental* aspect, because we may still apply breaking changes, but the idea is ready for testing. Create a **Buffer** node and then work it with the following: 
* **BufferRecorder**
* **BufferPlayer**
* **BufferWriter** 
* **BufferReader** 
* **WavReader (Buffer)**
* **WavWriter (Buffer)**
* **WaveForm (Buffer)**

## Misc
- WaveForm: returns a spread of floats you can use to draw a WaveForm
- WavWriter: for recording live audio to a .wav file on disk
- StereoMixer, MatrixMixer
- ValueSequence


## Fixed issues
* [Creating and disposing VL.Audio player leaks memory?](https://discourse.vvvv.org/t/creating-and-disposing-vl-audio-player-leaks-memory/19645/19)
* [VL.Audio Player - Break playback by hovering any FileStreamSignal link or pin](https://discourse.vvvv.org/t/vl-audio-player-break-playback-by-hovering-any-filestreamsignal-link-or-pin/19652)
* [Record audio in gamma](https://discourse.vvvv.org/t/record-audio-in-gamma/19029/5)
* [AudioEngine - Dynamic enum not set on startup](https://github.com/vvvv/VL.Audio/issues/5)
* [Gamma crashes when changing samplerate](https://github.com/vvvv/VL.Audio/issues/3)

---

So please give the latest preview a spin and report your findings!
