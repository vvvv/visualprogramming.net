---
categories: "News"
author: "joreg"
date: "2008-12-04"
title: "geonames.org"
slug: "geonames.org"
description: ""
imported: "true"
originalType: "stuff"
---


in the series of webservices:

^The GeoNames geographical database is available for download free of charge under a creative commons attribution license. It contains over eight million geographical names and consists of 6.5 million unique features whereof 2.2 million populated places and 1.8 million alternate names.^
[geonames.org](http://www.geonames.org/) 

this is huge! the database includes fields like the name (of a place), latitude, longitude, country code, population count, elevation, timezone and more. 

for ease of use in vvvv i see two options:
* use the {{< node "HTTP (Network Get) " >}} node to access one of the [webservices documented here](http://www.geonames.org/export/web-services.html).

* [download](http://download.geonames.org/export/dump/) (scroll down for file-infos) a database dump and import it in your own local [mysql](http://mysql.org) database. (i've used the gui [heidi-sql](http://www.heidisql.com) for the import as i am not really familiar with databases). then you can easily use vvvvs mysql nodes (((Database (MySQL Network) )), {{< node "Select (MySQL) " >}}, ..) to access the data. alternatively you could try to use {{< node "Separate (String) " >}} and/or {{< node "RegExpr (String) " >}} to retreive the data you're interested in, but this could become quite a non-realtime approach with that large amount of data.

btw. when dealing with the [latitude and longitude](http://www-istp.gsfc.nasa.gov/stargaze/Slatlong.htm) data the {{< node "Polar (3d) " >}} and {{< node "Cartesian (3d) " >}} nodes might come handy (also see the \girlpower\worldcities.v4p for a bad example. note to self: make that a good one for >beta19.1).