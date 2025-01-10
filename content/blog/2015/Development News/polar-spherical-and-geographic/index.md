---
categories: "Development News"
author: "tonfilm"
date: "2015-10-06"
title: "Polar, Spherical and Geographic Coordinates"
slug: "polar-spherical-and-geographic"
description: ""
imported: "true"
thumb: "dmesh19_1.jpg"
---

![](dmesh19_1.jpg)

## Introduction

While researching for the new VL math library the topic of polar, spherical and geographic coordinates came up. After reading several articles it was clear that there is a common confusion about the angle convention, orientation and naming.   

This blog post starts from the official definition in math textbooks and derives the correct implementations in a left-handed coordinate system with y-axis up like the one in DirectX. 

Polar and spherical coordinate systems do the same job as the good old cartesian coordinate system you always hated at school. It describes every point on a plane or in space in relation to an origin **O** by a vector. But instead of 3 perpendicular directions xyz it uses the distance from the origin and angles to identify a position.

### Conventions

In the following descriptions the angle units are degree and the cartesian coordinate systems and drawings are the ones you would find in math textbooks.

## 2D

In 2d the definition is straightforward. A position is defined by the distance to the origin and one angle. We just need the:
 * origin **O**
 * a reference direction where the angle is 0

For practical reasons mathematicians place the origin at the same position as it is in the cartesian system and the reference direction is the positive x-axis:
![](283px-Polar_coo_r.png) 

Then the conversion from a cartesian vector (x, y) of a position **P** to polar coordinates (radius, angle) is:

```
radius = sqrt(x^2 + y^2)
angle = atan2(y, x)
```

and the way around:

```
x = radius * cos(angle)
y = radius * sin(angle)
```

Here a positive angular velocity moves the position counter-clockwise on a circle:
![](Ebene_polarkoor_r.PNG) 
Note that many 2d computer graphics coordinate systems have the y-axis pointing downwards so that everything is flipped upside down. In that case, using the same calculations as above, a positive angular velocity moves the position clockwise.

To get the same behavior in a 2d cartesian system with y-axis down the calculations would be:

```
radius = sqrt(x^2 + y^2)
angle = atan2(-y, x)

```
and:

```
x = radius * cos(angle)
y = -radius * sin(angle)
```

## 3D

To define a point in space by spherical coordinates the distance to the origin **O** as well as two angles are required. The confusion starts here since many conventions for the notation and the order of the angles exist. This page lists most of them: <http://mathworld.wolfram.com/SphericalCoordinates.html>

But let's step back and have a look at what we need to define spherical coordinates. We will see that regardless of the notation the actual formula for the calculation is the same:

 * the origin **O**
 * for one angle we need a directed axis which defines the poles (like north and south pole of the earth), this angle is often called *polar angle, zenith angle, colatitude, inclination or elevation*
 * for the other angle we need a reference direction in the equatorial plane, this angle is called *azimuthal angle*

The origin is also the same as the one of the cartesian system. Traditionally mathematicians choose the z-axis as the polar axis and the xy-plane as the equatorial plane with reference direction as the positive x-axis:
![](Kugelkoord-def.png) 

The conversion formulas are then:

```
radius = sqrt(x^2 + y^2 + z^2)
polar = arccos(z/radius)
azimuthal = atan2(y, x)
```

and:

```
x = radius * sin(polar) * cos(azimuthal)
y = radius * sin(polar) * sin(azimuthal)
z = radius * cos(polar)
```

As you can see in the drawing, if polar angle is 0 the vector points toward the positive z-axis and the azimuthal angle has no effect because it only rolls the vector around the z-axis.

Positive polar velocity moves the point away from the pole at positive z towards positive x.
Positive azimuthal velocity moves the point from positive x towards positive y.

The drawing uses a right-handed system with z-axis up which is common in math textbooks. As in the 2d case it looks different depending on orientation of the xyz-axis of the cartesian coordinate system in which the position will be displayed.

### Geographic Coordinates

The definition of the spherical coordinates has two drawbacks. First the polar angle has to have a value other than 0° (or 180°) to allow the azimuthal value to have an effect. Second the geographic system of latitude and longitude does not match with the two angles.

In order to match the spherical angles to latitude and longitude the polar angle needs to have a value of 90°. Then the position vector points towards the positive x-axis in the equatorial plane which matches a latitude of 0° and a longitude of 0°.

<!--{SPLIT()}-->
![](geocentric_-coo_r.png)
<!--~~~-->
![](Latitude_and_lo_r.png) 
<!--{SPLIT}-->

The angular directions of latitude and longitude are the same. So the conversion is quite simple:

```
latitude = polar - 90°
longitude = azimuthal
```

and:

```
polar = latitude + 90°
azimuthal = longitude
```

With trigonometric substitutions a direct conversion between geographic and cartesian coordinates can be derived:

```
radius = sqrt(x^2 + y^2 + z^2)
latitude = arcsin(z/radius)
longitude = atan2(y, x)
```

and:

```
x = radius * cos(latitude) * cos(longitude)
y = radius * cos(latitude) * sin(longitude)
z = radius * sin(latitude)
```

## Implementation for VL

VL assumes that the user works in a left-handed cartesian coordinate system with the y-axis up which is commonly used with DirectX. This means that all the above images and directions would be somehow rotated and flipped when used in such a coordinate system. But that's of course not what we want. The north pole of a sphere should still be up and the angular directions of the angles should also be the same as above.

![](rightandleft.png) 

The conversion of a vector between the systems is not very complicated:

```
xR = -zL
yR = xL
zR = yL
```

and:

```
xL = yR
yL = zR
zL = -xR
```

The simplest solution would be to convert the vector before or after the calculation, but we can also apply the conversion to the formulas. Then we get for the spherical coordinates:

```
radius = sqrt(x^2 + y^2 + z^2)
polar = arccos(y/radius)
azimuthal = atan2(x, -z)
```

and:

```
x = radius * sin(polar) * sin(azimuthal)
y = radius * cos(polar)
z = -radius * sin(polar) * cos(azimuthal)
```

For geographic coordinates:

```
radius = sqrt(x^2 + y^2 + z^2)
latitude = arcsin(y/radius)
longitude = atan2(x, -z)
```

and:

```
x = radius * cos(latitude) * sin(longitude)
y = radius * sin(latitude)
z = -radius * cos(latitude) * cos(longitude)
```

### Angle Units

Since we all love the convention of scaling value ranges to the interval 0-1, the VL nodes also use cycles as units as we are used to from vvvv.

### Node Names

As we assume that the standard system you work in is cartesian we use the 'To' and 'From' prefix which we think is more clear than the vvvv names 'Polar' and 'Cartesian' we had before. So we now have: 

```
ToPolar, FromPolar
ToSpherical, FromSpherical
ToGeographic, FromGeographic
```

Since the Angle (3D) node already calculates the spherical angles and the radius, the VL implementation for the spherical coordinates looks like this:
![](VL_Implementati_r.png)
You can find it along with the other conversion nodes in Basics.vl in the patch Utils3D.

### Relation to VVVV nodes

The old vvvv nodes Polar and Cartesian in 3d are similar to the geographic coordinates with the exception that the angular direction of the longitude is inverted.
The 2d nodes do match exactly.

### 

## Cylindrical Coordinates

A natural extension of the 2d polar coordinates are cylindrical coordinates, since they just add a height value out of the xy-plane. For completeness here they are:

![](Cylindrical_coo_r.png) 

The formula is exactly the same as 2d polar corrdinates with the extension of the height:

```
radius = sqrt(x^2 + y^2)
angle = atan2(y, x)
height = z
```
and the way around:

```
x = radius * cos(angle)
y = radius * sin(angle)
z = height
```

Converting that to left-handed system with y-axis up gives:

```
radius = sqrt(x^2 + z^2)
angle = atan2(x, -z)
height = y
```
and the way around:

```
x = radius * sin(angle)
y = height
z = -radius * cos(angle)
```

### Node Names


As for the other conversion nodes we use: 
```
ToCylindrical, FromCylindrical
```

## Download

As usual in the [alpha builds](https://legacy.vvvv.org/downloads/previews).