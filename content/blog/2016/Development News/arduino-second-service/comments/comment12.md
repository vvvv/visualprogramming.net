---
user: "soundanalogous"
created: "1472933212"
---

I maintain the Arduino Firmata protocol and implementation. I have a couple of questions for this group.

1. I'd like to add a link to the [Firmata readme](https://github.com/firmata/arduino#firmata-client-libraries) to add the VVVV Firmata client. It's not clear from this post what the correct link is.

2. I'm curious why the user has to choose a specific board. If you use Firmata the capability query, you can determine the configuration of the board (of course this adds a couple of hundred milliseconds to the startup). However, this will support a much wider range of boards, including all of the Teensy boards (except the new 3.5 and 3.6), and even non-AVR boards such as SAM and SAMD boards and the PIC-based ChipKit boards.
