---
categories: "Development News"
author: "tonfilm"
date: "2017-04-12"
title: "VL: Event based MIDI"
slug: "vl-event-based-midi"
description: ""
imported: "true"
thumb: "dennis_irwin_il_r.jpg"
---


![](dennis_irwin_il_r.jpg)

Midi was [released in 1982](https://en.wikipedia.org/wiki/MIDI#Early_development) and is one of the most successful hardware communication protocols in the world. The simple nature of the protocol makes it easy to implement and even more important, easy to understand for humans.

This makes it a perfect example for the first event based library in VL using the [MIDI-Toolkit](https://github.com/tebjan/Sanford.Multimedia.Midi) developed by Leslie Sanford.

### Modularity
Instead of having all settings on one node, functionality is now separate to allow arbitrary combinations.

#### Devices
Device nodes have an enum input for the input/output device driver you want to use. You can have many of them, even for the same driver. Under the hood they will share the actual device driver resource. The driver is opened only if it is necessary, for example if there is an event sink listening to it.

The dynamic device enum will update as soon as a midi device is connected or disconnected to the machine. So no restart required on configuration change:
![](6RdhBWnF3I.gif)
*Driver list updating on connect/disconnect of a device*

MidiIn has one observable output for all midi messages received on the given device. MidiOut has one input that accepts an observable to send midi messages to the given device.

![](010_InOut.PNG)
*Route all messages from in to out*

#### Message Filtering
Following the midi message structure, there are filters that allow you to select only the messages you are interested in. For example only midi clock messages, or messages on a specific midi channel:

![](020_InOutChanne_r.PNG)
*Only let messages on midi channel 0 thru*

#### Message Handling
For all midi message types there are specific nodes to read the message content or construct new messages. These are mostly the native methods of the MidiToolkit library.

![](030_MessageHand_r.PNG)
*Create a channel message and read its content*

### Event Based Processing
You can process a midi message (in fact any event) directly as it occurs. The new ForEach region in the Reactive category executes it's patch for each event that is passed in and can transform the event into a different message type and decide whether to pass the current event on via the *Keep* output.

![](040_EventBased.PNG)
*Handling midi messages in a custom patch as they occur*

This is part of a bigger programming paradigm that was also polished for the new midi nodes. Definitely check out for the [blog post on Reactive Programming](/blog/2017/vl-reactive-programming).

### Events vs. Mainloop
####  To Mainloop
At some point all async input event handling in the background will be over and you want to leave the observable world and have the processed values in the main loop. For that there are several options:

For supereasy controller value input there is ControllerState or NoteState:

![](050_MidiState.PNG)
*Getting the value of midi controller 7 directly*

For more advanced scenarios refer to the Reactive nodes HoldLatest, S+H or Sampler which provide ways to pass event values safely to the mainloop.

#### From Mainloop
If you want to generate midi messages in the mainloop you also have a simple node that generates controller message events:

![](060_MidiOut.PNG)
*Sending controller 7 on channel 0 on value change*

For other messages use the Reactive nodes ToObservable which create an event source that you can use to send events from the mainloop.

### Spreading
Since VL makes a difference between a single value and a spread of values, some nodes come in 'plural' version to allow listening for example for multiple channels at one.

![](070_Spreading.PNG)
*Filter messages of channel 0 or channels 0, 3 and 5*
