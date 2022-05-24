---
categories: "News"
author: "everyoneishappy"
date: "2016-07-23"
title: "Instance Noodles update: Alpha 0.3 \"Tonkotsu\""
slug: "instance-noodles-update-alpha-0.3-tonkotsu"
description: ""
imported: "true"
originalType: "stuff"
thumb: "VoronoiClamped.gif"
---


#  New Noodles: Alpha 0.3 "Tonkotsu"
Get them here:
{{< contribution "instance-noodles" >}}

Some new & improved nodes + bugfixes but the tasty new flavors are Noise & CSG implementations.

##  Noise
New textureless magic noise suite based largely on the great GLSL postings of http://briansharpe.wordpress.com/
to use in a shader see InstanceNoodles\nodes\modules\Common\NoodleNoise.fxh
Of course there are nodes for people that don't want to mess with shader code though.

Includes 2D and 3D Perlin, Simplex and Worley, all with single octave noise as well as FBM, Turbulence & Ridge flavors.  Worley comes with various distance metrics & cell functions.  To get an idea of the (many) Worley combinations here's a nice reference: 
![Worley Noises](VoronoiClamped.gif) 
image source: mines.lumpylumpy.com/Electronics/Computers/Software/Cpp/Graphics/Bitmap/Textures/Noise/


##  CSG
Constructive Solid Geometry finally...  Realtime implementation using distance fields stored in 3D textures or 'volumes'.  Picture speaks a thousand words:
![CSG](Csg_tree.png) 



As well as the standard Union, Intersection & Difference operations as pictured above, 16(!) other combination operations ported from the very sexy GLSL raymarch lib: http://mercury.sexy/hg_sdf/

**New DX11.TextureFX nodes**
* Noise3D (DX11.TextureFX)

**New Compute nodes**
* Noise2D (Value Buffer)
* Noise3D (Value Buffer)
* NoiseDerivs2D (Value Buffer)
* NoiseDerivs3D (Value Buffer)
* min (Value Buffer)
* max (Value Buffer)
* S+H (Vaule, 2D, 3D, 4D versions)
* SumUp (Vaule Buffer)
* Vector4DSplit (Vaule Buffer)
* Normalize (3D Buffer)

**New DX11.Geometry nodes**

* Kinect2GS (DX11.Geometry) kinect2 texture maps to mesh, with optional player filtering
* SplineTrails (DX11.Geometry)
* SplineBuffered (DX11.Geometry) now has ribbon mode
* SDFtoMesh (DX11 Geometry) conversion of signed distance fields (as 3D texture) to mesh using marching cubes.  This allows constructive solid geometry to be integrated with normal geometry pipeline


**New DX11.Volume nodes (mostly for CSG ops)**
* CombineSDF (DX11.Volume) 
* BoxSDF (DX11.Volume)
* SphereSDF (DX11.Volume)
* TorusSDF (DX11.Volume)
* CylinderSDF (DX11.Volume)
* PrismSDF (DX11.Volume)
* ExtrudeTextureSDF (DX11.Volume)
* NoiseSDF (DX11.Volume)
* Resize (DX11.Volume)

for fast peek at the results:
* PreviewVolume (DX11.Layer)

**Changed /fixed Nodes**
DX11.GeomFX modules now have max elements pin.  Set to 0 by defualt, which will use the old automatic behavior, or any other positive number for manual setting

+ various small bug fixes that I'm too lazy to type.

Feel free to use in your creative & commercial projects, just please make sure to give credit as per license below.
CCBY 2016 http://everyoneishappy.com

http://creativecommons.org/licenses/by/4.0/