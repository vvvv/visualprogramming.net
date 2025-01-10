---
categories: "Development News"
author: "tonfilm"
date: "2018-01-31"
title: "Dynamic DX11 Buffers in VL"
slug: "dynamic-dx11-buffers-in-vl"
description: ""
imported: "true"
thumb: "9HqhDcmkoU.gif"
---


![](9HqhDcmkoU.gif)

## Dynamic Buffers

Current vvvv alpha and upcoming vvvv beta36 has a new set of nodes that allows you to quickly upload data from VL to the graphics card. We had a WIP forum discussion about it here: [VL - Custom Dynamic Buffer](https://discourse.vvvv.org/t/vl-custom-dynamic-buffer/15703)

On the VL side the nodes are called *ToBufferDescription* and we have them for the basic data types that usually hold big chunks of data: Spread, Array, IntPtr and Stream. The vvvv side is rather easy and only has one node called {{< node "UploadBuffer (DX11.Buffer)" >}}.

### Primitive Data Types

Primitive types work out of the box and don't need any special treatment. Just make sure you define the correct Buffer type in the shader. This works for Integers, Floats, Vectors and so on, everything that is available in the shader as primitive type. Here is an example for Float32:

![](ShaderDefineFlo_r.PNG)

The only exception is Matrix it needs to be transposed in order to work like a normal transformation input. If you send a large amount of individual matrices to the shader the most efficient way is to do the transpose in the shader directly:
![](ShaderTranspose.PNG)

If the same matrix is re-used very often or you don't have access to the shader code simply transpose in VL:
![](VL%20Transpose.PNG)


### Custom Data Types

If you want to define your own data types like light information or a custom vertex type in the shader then you need to pack the data accordingly in the buffer description. For this task the *ToBufferDescription (Stride)* nodes are used. They allow you to make a buffer description out of primitive types like float or even byte and set the stride size of your custom type in bytes so that the shader can read the custom type directly out of the buffer.

![](TypeAsFloats.PNG)

**Matrix hint**: If you define a matrix in a custom type in the shader you can use the *row_major* modifier to automate the transpose operation.

```
struct MyLightType
{
	float3 Direction;
	float Brightness; 
	row_major float4x4 Transformation; //set matrix type
}; 
```

**Performance hint**: If you can, design your custom types in a way that the byte count is a multiple of 16, sometimes it makes sense to insert unused floats as padding:

```
//would have 20 bytes, but blown up to 32 bytes (2 x 16) for faster read performance
struct Circle
{
    float4 Position;
    float  Radius;
    float pad0;
    float pad1;
    float pad2;
};
```

More info: https://developer.nvidia.com/content/understanding-structured-buffer-performance

### Custom types in C#

If you are a C# coder you can also define a struct in C# with attribute **StructLayout(LayoutKind.Sequential)** and the same byte layout, import it in VL and pass that directly into the buffer. Then you don't need the node with version *StrideSize* because the data type size already matches.

```
[](StructLayout(LayoutKind.Sequential))
public struct Circle
{
    public Vector4 Position;
    public float Radius;
    float pad0;
    float pad1;
    float pad2;

    public Circle(Vector4 position, float radius)
    {
        Position = position;
        Radius = radius;
    }
}
```

## Dynamic Raw Buffers

While in the process of doing the dynamic buffer nodes it was easy to add raw buffers. These buffers are from older shader models and can only be filled with bytes. On the shader side however you can also define Custom types. Only difference in HLSL is that you write **Buffer<YourType>** instead of StructuredBuffer<YourType>.

The node set is basically the same except that the VL part is not generic and only accepts bytes as input. The node names are *ToRawBufferDescription* in VL and {{< node "UploadBuffer (DX11.Buffer Raw)" >}} in vvvv.
//legacy.vvvv.org/downloads/previews
Raw buffers have no advantage except when you have to deal with an older graphics card, driver or shader code.


## Examples

A VL patch with shader code can be found in [latest alphas](https://legacy.vvvv.org/downloads/previews) **girlpower\VL\DX\DynamicBuffersAndTextures.v4p**. And it is also used by @mburk for material management in his latest {{< contribution "superphysical" "superphysical pack" >}}.

So now you can start sending your data up to the card and enjoy the speed. As always, if any questions arise hit us up in the forums.

yours,
devvvvs