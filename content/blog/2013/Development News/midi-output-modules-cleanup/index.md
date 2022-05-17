---
categories: "Development News"
author: "tonfilm"
date: "2013-01-28"
title: "Midi Output Modules Cleanup"
slug: "midi-output-modules-cleanup"
description: ""
imported: "true"
---


Made a little cleanup of the midi output modules.

Renamings:
MidiCtlOut (Devices) -> MidiControllerOut (Devices)
MidiPgmOut (Devices) -> MidiProgramOut (Devices)

There were two midi note out modules, i renamed one to MidiNoteOut(Devices Bang), check the help patch to see the difference between the two.

And the two MidiControllerOut modules are merged, it has a bool to enable the send on change behavior.

All modules use midi channels 0-15 now.

This might break some midi patches of you. very sorry, but its clean now.
If you encounter any problems, please check the midi channel and whether you have the correct module loaded.

happy midi,
tf



