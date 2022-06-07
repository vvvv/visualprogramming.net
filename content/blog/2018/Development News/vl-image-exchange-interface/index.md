---
categories: "Development News"
author: "Elias"
date: "2018-02-05"
title: "VL: Image exchange interface"
slug: "vl-image-exchange-interface"
description: ""
imported: "true"
thumb: "gol_vl.PNG"
---


In the VVVV world you'll find four new nodes, **UploadImage** and **UploadImage (Async)** - both for DX9 and DX11 returning a texture. The former just takes an image and when requested uploads the image to the GPU, the latter takes an IObservable<IImage> and will upload whenever a new image gets pushed.
In the VL world you'll find **ToImage** nodes which allow you to build images out of arbitrary data. Here is a little Game Of Life example:

![Generating images in VL](gol_vl.PNG)![Rendering images in DX9 and DX11](gol_vvvv.PNG)
That one image is gray and the other red comes from the fact that we map a pixel format with one red channel to a format with one luminance channel in DX9 - not entirly correct, but better than seeing nothing at all.

##  The interface in detail
So what is this new image interface exactly? Well it came up in the past (https://discourse.vvvv.org/t/bitmap-data-type/6612) and re-surfaced again in VL - the topic of how to exchange images from different libraries. Nearly all of them come with their own image representation, like a [Mat](https://docs.opencv.org/3.3.1/d3/d63/classcv_1_1Mat.html) in [OpenCV](https://opencv.org/), a [Sample](https://gstreamer.freedesktop.org/data/doc/gstreamer/head/gstreamer/html/GstSample.html) in [GStreamer](https://gstreamer.freedesktop.org/), a [Bitmap](https://msdn.microsoft.com/en-us/library/system.drawing.bitmap(v=vs.110).aspx) in [GDI](https://msdn.microsoft.com/en-us/library/System.Drawing(v=vs.110).aspx), an [Image](https://msdn.microsoft.com/en-us/library/system.windows.controls.image(v=vs.110).aspx) in [WPF](https://msdn.microsoft.com/en-us/library/mt468159(v=vs.110).aspx) or just plain pointers in [CEF](https://bitbucket.org/chromiumembedded/cef) - just to name a few we stumbled accross in the past.
All of those libraries provide different sets of operations one can perform on their image representation, they have different sets of supported pixel formats and they also differ in how they reason about the lifetime of an image. In the end though we want all those node sets which will be built around those libraries to work together.

We therefore decided to add a new interface - simply called **IImage** - to our base types in VL with the intention to allow different node libraries to exchange their images. The idea is that the node libraries itself work with the image type they see fit and only provide ToImage and FromImage nodes which will act as the exit and entry points. Whether or not those entry and exit points have to copy the image is up to the library designer and probably also the library itself. For some it will be possible to write simple lightweight wrappers, for others a full copy will have to be done. If a certain pixel format is not supported by the library it is fine to throw an UnsupportedPixelFormatException which will inform the user to either change the whole image pipeline to a different pixel format or insert a conversion node so the sink can deal with it.

Before diving any deeper here are two screenshots from a little example image pipeline, getting images pushed in the streaming thread from a GStreamer based video player, using OpenCV to apply a dilate operator on them and passing them down to vvvv for rendering:
![](image_vl.PNG) ![](image_vvvv.PNG)

The image interface comes with a property Info returning a little struct of type **ImageInfo** containing size and pixel format information. With this struct it's easy to check whether the size or the pixel format of an image changed. The pixel format is an enumeration with just a few entries of what we thought are the most commonly used formats. Since there're many many others the image info comes also with a OriginalFormat property where an image source can simply put in the original format string - whatever that is. But it at least gives sinks a little chance to interpret the image data correctly.

```
/// <summary>
/// Gives read-only access to images.
/// </summary>
public interface IImage
{
    /// <summary>
    /// A structure containing size and format information of the image.
    /// </summary>
    ImageInfo Info { get; }

    /// <summary>
    /// Gives access to image's data. Must be disposed after being used.
    /// </summary>
    IImageData GetData();

    /// <summary>
    /// A volatile image is only valid in the current call stack.
    /// </summary>
    bool IsVolatile { get; }
}
```

The second method on the interface called GetData is used for reading the image. It returns the **IImageData** interface pointing to the actual memory. Since the IImageData inherits from IDisposable the returned image data needs to be disposed by the caller. With this design it should be possible to implement all sorts of image reading facilities - as pin/unpin, map/unmap, lock/unlock etc.

```
/// <summary>
/// Used for reading images.
/// </summary>
public interface IImageData : IDisposable
{
    /// <summary>
    /// The pointer to the data.
    /// </summary>
    IntPtr Pointer { get; }

    /// <summary>
    /// The data size in bytes.
    /// </summary>
    int Size { get; }

    /// <summary>
    /// The scan size (one row of pixels including padding) in bytes.
    /// </summary>
    /// <remarks>If the scan size times the image height is not equal to the size data copying has to be done row by row.</remarks>
    int ScanSize { get; }
}
```

In order to avoid copying data the image interface comes with a last property IsVolatile which when set tells a sink that the data in the image is only valid in the current call stack - so it can either read from the image immediately or if that is not possible it will need to clone it. We expect image implementations to return data of the default image in case the read access happended too late. Imagine one puts volatile images into a queue without copying them first, the result should be a bunch of white quads so those errors should become visible immediately.
In case the volatile flag is not set we expect the image data to stay the same so no further copying is necessary on the sink. It can hold on to the image as long as it wants.

We further provide a couple of helpful extension methods to the IImage interface like Clone/CloneEmpty or making an image accessible as an System.IO.Stream

With this in mind let's look how to expose library specific image types:
* In case the library newly allocates the memory for the image on the managed heap, not much has to be done except of writing a little wrapper implementing our image interface, returning false on the IsVolatile property and basically just forwarding all interface calls to the original image type.
* The library takes the memory from a pool or uses some ref count mechanism. In this case it's most certainly mandatory to ensure that the original image gets disposed. If the image gets pushed from the library we recommend to simply push the image further and dispose it right after. If the image needs to get pulled from the library the wrapper should also implement the IDisposable interface and hand it downstream inside the resource provider monad so that the disposal behavior is correct once all the sinks are done using the wrapper. The third option is to simply copy the data into a private image one can hand downstream.
* The library always returns an image pointing to the same memory. Similiar to the previous case except that one must not call dispose on the original image.

Example implementations can be found in VL.Core, [VL.OpenCV](https://github.com/vvvv/VL.OpenCV) and [VL.GStreamer](https://github.com/vvvv/VL.GStreamer)