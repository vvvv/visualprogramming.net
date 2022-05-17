---
user: "beyon"
created: "1467059637"
---

Thank you tonfilm and microdee for organizing!

Unfortunately I haven't been able to keep up with Vaudio but this was a good overview of the current state.

One design issue I have is having playback state (bpm/play/loop etc) be part of the same node as the audio driver and shared across the audio graph.

While the current design will probably be enough to satisfy a lot of people I think audio in vvvv should be free from such restrictions as having one global clock/timing state. One solution might be to keep the settings in the AudioEngine node but as a master/default clock, then for all nodes that rely on the timer/bpm/etc add an optional timer override pin that allows you to use multiple timers/playback states/BPMs.
