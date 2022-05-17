---
user: "soundanalogous"
created: "1473013285"
---

Teensy boards work with the version of [Firmata](https://github.com/firmata/arduino) included with the Arduino IDE (Firmata v2.5.3). They support all of the same features as any of the Arduino boards, including new features such as the ability to control serial peripherals via hardware or software serial. The [Boards.h file](https://github.com/firmata/arduino/blob/master/Boards.h) lists all of the boards and architectures currently supported by Firmata. I think there is some confusion created by the fragmentation of Firmata. There were many forks years ago and many users keep using these old forks rather than the "official" version (that you get with the IDE / library manager). For example, there is no need to use the version of Firmata that Paul maintains for Teensy boards as that is based on an older fork of Firmata. I try to keep the official version up-to-date with new hardware as it becomes available.

My main concern was that the following list in the initial post in this thread was very limited in terms of the range of boards and architectures the Firmata actually supports:

* ArduinoUno (Devices)
* ArduinoLeonardo (Devices)
* ArduinoMega (Devices)
* ArduinoLilyPad (Devices)
* ArduinoDue (Devices)
* ArduinoYun (Devices)
