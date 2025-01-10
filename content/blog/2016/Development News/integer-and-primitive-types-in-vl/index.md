---
categories: "Development News"
author: "tonfilm"
date: "2016-03-23"
title: "Integer and Primitive Types in VL"
slug: "integer-and-primitive-types-in-vl"
description: ""
imported: "true"
thumb: "01_primitive_ca_r.png"
---


#  Introduction

The [latest VL](https://legacy.vvvv.org/downloads/alphas) comes with a revised 'Primitive' category in the nodebrowser. This category holds the most basic data types which the system has build in. As amazing as it sounds all other types are made out of them.

There are:
- Integer and floating point numeric types for calculations
- Boolean for logic
- Char and String for text
- A few system types like Exception and Object

![](01_primitive_ca_r.png) 

In this article we will focus on the numeric types and which operations VL ships for them.

#  Overview

Primitive numeric types come in two flavors: integer and floating point. The number after the type name is the size of the type in bits. The number of bits also defines the value range that the type can hold.

The VL default types are Integer32 and Float32.

##  Operators and Types

**Numeric Unary**|**Numeric Binary**|**Bit Unary**|**Bit Binary**|**Bit Shift**|**Bool Unary**|**Bool Binary**
|---|---|---|---|---|---|---|
`+`|`+ * / % < > <= >= == != `| `~` | `& ^ \|`| `<< >>` | `!` | `== != && \|\| & \| ^`|



You should know most of them from math class but there are a few computer specific ones:
Division for integers is called **DIV** and it outputs an integer again. The "/" operator on integer types returns a floating point number.
The "%" operator is called **MOD** in VL and returns the remainder of a division.
For integers there is a combination of DIV and MOD called **DIVMOD** which outputs both the result of the division and the remainder. A practical usage is 2D column/row index calculation.
"~" is the ones complement, it inverts all bits of a value.
">>", "<<" are the bit shift operators, they move all bits of a type to the left or right. New bits are padded with zeroes.
The following table gives an overview of all types and their operators:


|**VL Name**|**Bits**|**Unary**|**Binary**|**C# Name**
|---|---|---|---|---|
Integer8|8|num/bit|num/bit/shift|sbyte
Byte|8|num/bit|num/bit/shift|byte
Char|16|num/bit|num/bit/shift|char
Integer16|16|num/bit|num/bit/shift|short
Integer16 (Unsigned)|16|num/bit|num/bit/shift|ushort
Integer32|32|num/bit|num/bit/shift|int
Integer32 (Unsigned)|32|num/bit|num/bit/shift|uint
Integer64|64|num/bit|num/bit/shift|long
Integer64 (Unsigned)|64|+, ~|num/bit/shift|ulong
Float32|32|num|num|float
Float64|64|num|num|double
Boolean|1|bool|bool|bool

##  Value Range
### Integer types

**Type**|**Range**|**Size**
---|---|---
Integer8|-128 to 127|Signed 8-bit integer
Byte|0 to 255|Unsigned 8-bit integer
Char|U+0000 to U+ffff|Unicode 16-bit character
Integer16|-32,768 to 32,767|Signed 16-bit integer
Integer16 (Unsigned)|0 to 65,535|Unsigned 16-bit integer
Integer32|-2,147,483,648 to 2,147,483,647|Signed 32-bit integer
Integer32 (Unsigned)|0 to 4,294,967,295|Unsigned 32-bit integer
Integer64|-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807|Signed 64-bit integer
Integer64 (Unsigned)|0 to 18,446,744,073,709,551,615|Unsigned 64-bit integer

### Floating point types

**Type**|**Approximate range**|**Precision**|**Size**
---|---|---|---
Float32|±1.5 * E45 to ±3.4 * E38|7 digits|32-bit float
Float64|±5.0 * E−324 to ±1.7 * E308|15-16 digits|64-bit float


{{< box >}}
Note:
Floating point numbers have an insane value range, but its important to understand that there is only a certain number of digits of precision. 
This also means that the maximum consecutive integer that can be represented is 2{{< /box >}}24 = 16,777,216 for Float32 and 2{{< box >}}54 = 9,007,199,254,740,992 for Float64, keep that in mind when connecting integers to float inputs.
{{< /box >}}


#  Conversions

##  Between Numeric Types

Smaller integer types can directly be connected to bigger integer types that can hold the range of the smaller type and to floating point types.
For all other conversions a node is required since information might get lost.
However, sometimes you want to trick the VL type inference system or you explicitly want a specific type and therefore the complete list of conversion nodes are available.

###  Checked

Checked conversions throw an error if the value to convert exceeds the range of the target type. This can be helpful if you want to make sure to assign correct values to bytes.

The naming scheme of the nodes is To*TargetType* and they are located in the category of the source type. For example a conversion from Integer32 to Byte is called ToByte (Integer32). Unsigned types are abbreviated with an 'U', so a conversion from Float32 to Integer32 (Unsigned) is called ToUInt32 (Float32).

![](03_checked_conv_r.png) 


###  Unchecked

Unchecked conversions do not throw errors and just copy appropriate bits from the source type to the target type. This results in value wrapping. For example converting an Integer32 with value 256 to a Byte will result in a value of 0, an integer with value 257 in a value of 1 and so on...

Because they directly copy the bits, the naming scheme of the nodes is BitsTo*TargetType* in the category of the source type. For example a conversion from Integer32 to Integer64 (Unsigned) is called BitsToUint64 (Integer32) or a Byte to Char BitsToChar (Byte).

![](03_un_checked_c_r.png) 


##  Type -> String

The conversion form machine representation to human readable string is of course essential for programming. There is a general node ToString (Object) which tries to convert everything plugged in to it to a string. This node works for all numeric types and Char because the system knows what to do.

However if you want your value in a specific string representation you have three more advanced nodes for all numeric types:

###  ToString (Format)

This is the most powerful node. It allows to input a format string which acts as template for the output string of the value. See these two documentation pages for the vast amount of possibilities (thanks microsoft!).
[Standard Format Strings](https://msdn.microsoft.com/en-us/library/dwhawy9k(v=vs.110).aspx)
[Custom Format Strings](https://msdn.microsoft.com/en-us/library/0c899ak8(v=vs.110).aspx)

###  ToString (Binary)

Quite helpful when working with low level device protocols and other bitwise operations. Nerds ahoi!

###  ToString (Hex)

Hexadecimal is a compact representation of the bits where one digit can represent 16 values from '0' to 'F' which is 4 bits. You know this probably from html colors. Medium nerdy.

![](03_to_string_co_r.png) 

##  String -> Type

Parsing strings to a numeric type is also often required. When getting user input from or reading data from a text file for example. Since the parsing can go wrong quite easily the nodes are called TryParse and have a boolean output 'Success' which indicates whether the input string could be parsed into a numeric value that makes sense.

###  TryParse (Hex)

Version to parse hexadecimal strings into a numeric type.

###  TryParse (Binary)

My personal favorite, parsing binary strings. (Didn't you ever want to just type ones and zeroes into your computer?). 

![](03_try_parse_co_r.png) 

# Conclusion

This might be some heavy detailed stuff for the average user, but it gives us a solid core library that is ready for all tasks and can solve even the problems on the lowest level.

And rest assured, most of the time you will just deal with the standard types Integer32 and Float32 and don't have to worry about the others. But in the 1% case when you need to shuffle the bits its all there for you.

yours,
devvvvs