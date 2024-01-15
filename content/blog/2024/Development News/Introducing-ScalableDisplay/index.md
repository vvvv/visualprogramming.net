---
categories: "Development News"
author: "joreg"
date: "2024-01-15"
title: "Introducing: Projector Calibration by Scalable Display Technologies"
description: "A projector auto-alignment system"
thumb: s.png
---

Projectors Projectors Projectors!

Here is the next release in our ongoing effort to making vvvv your favorite tool for all-things [projection mapping](https://thegraybook.vvvv.org/reference/libraries/projectionmapping.html).

![](sdt.png)

With the great support of the team at [Scalable Display Technologies](https://www.scalabledisplay.com/) we implemented their [Scalable SDK](https://www.scalabledisplay.com/products/scalable-sdk/) so you don't have to do this anymore. 

What is it for? Think multiple overlapping projections that you need to align, softedge, color correct,... If you've done this manually before you know what this can mean, especially in permanent installations...

You'd now simply use the [Scalable Display Manager](https://www.scalabledisplay.com/products/scalable-display-manager/) which runs a calibration procedure using cameras that have a view of the projections. The resulting Scalable Mesh Files can then be applied in vvvv using the [VL.ScalableDisplay](https://www.nuget.org/packages/VL.ScalableDisplay) NuGet e.g. like this:

![](2023-11-22-21-23-05.png)

And you can test it yourself right away:
* Get a [trial version of the Scalable Display Manager](https://www.scalabledisplay.com/software-demo-request/)
* Get latest [vvvv gamma 6.0 preview](https://visualprogramming.net/#Download)
* [Install](https://thegraybook.vvvv.org/reference/hde/managing-nugets.html) the [VL.ScalableDisplay](https://www.nuget.org/packages/VL.ScalableDisplay) NuGet 
* From the Helpbrowser open "HowTo Apply a mapping from a Scalable mesh file"

And here is a tutorial walking you through a basic calibration procedure using the Scalable Display Manager:

{{< youtube OAJLBI6aktU >}}

With the Scalable Mesh Files (.ol or .pol) generated, you can simply open the help patch shipping with the NuGet and test your calibration.

So please give it a spin and don't hesitate to get in touch [with us](mailto:devvvvs@vvvv.org) or [Scalable Display Technologies](https://www.scalabledisplay.com/contact-us/) if you encounter any issues or have more specific questions.

Happy mapping!