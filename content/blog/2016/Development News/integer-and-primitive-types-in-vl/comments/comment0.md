---
user: "tonfilm"
created: "1458842812"
---

this chapter didn't made it into the article, but for the interested here it is as a comment:

##  Bit Layout
###  Integers
Integer types only store whole numbers and have a direct bit to value layout which makes them very fast. Let's have a look at the unsigned 8-bit Byte type and a few value representations in bits:

```
//unsigned
0000 0000 = 0
0000 0001 = 1
0000 0011 = 3
0111 1111 = 127
1000 0000 = 128
1000 1000 = 136
1111 1110 = 254
1111 1111 = 255
```

Signed integer types use the first bit to indicate the sign. Hence the same bits can have a different meaning for signed types:

```
//signed
0000 0000 = 0
0000 0001 = 1
0000 0011 = 3
0111 1111 = 127
1000 0000 = -128
1000 1000 = -120
1111 1110 = -2
1111 1111 = -1
```

The interesting thing here is that 1111 1111 is -1, so in a sense -1 is the highest value in binary. The reason for this is that the values wrap in a nice way when an overflow occurs.

###  Floating Point
Floating point numbers have a more complicated layout in memory. Simplified, they store there significant digits, the sign and the place of the decimal mark (aka dot or comma, [depending on where you live](https://en.wikipedia.org/wiki/Decimal_mark#Hindu.E2.80.93Arabic_numeral_system)). Also see [IEEE Float](http://steve.hollasch.net/cgindex/coding/ieeefloat.html) for details.
