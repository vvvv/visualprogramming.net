---
user: "robotanton"
created: "1471720847"
---

Hi @velcrome!

Regarding the listed limitations of the Firmata Protocol:

* The new Arduino nodes are using [Extended Analog](https://github.com/firmata/protocol/blob/master/protocol.md#extended-analog) feature of the Firmata for accessing PWM pins beyond pin 15.

* It looks like that the Servo problem on the pins higher than 11 (or 15) is also [resolved](https://github.com/firmata/protocol/blob/master/servos.md) by this Extended Analog feature. What we don't have at the moment is the "SERVO_CONFIG" message. And the servos on these higher pins are not tested.

Older Teensy are welcome!
Or just copy the ArduinoUno and its BoardConfig, rename it and adjust the BoardConfig. Should work.

Best,
Anton



