---
categories: "Development News"
author: "joreg"
date: "2017-04-11"
title: "VL: XML and JSON nodes"
slug: "vl-xml-and-json-nodes"
description: ""
imported: "true"
thumb: "xml-json2.png"
---


ahoi,

one of the more basic things any programming library has to support is parsing and the creation of XML data-structures. since vl is based on .net we don't have to invent anything here but can make direct use of .nets XDocuments, XElements, XAttributes datatypes. so we're happy to announce that in cooperation with {{< user "dominikKoller" >}} we added xml/json support for vl:

![](xml-json2.png)
*Your daily xml/json companions*

- read/write (async) XDocuments from/to disk
- parse an xml-string to XDocument
- convert an XDocument to an xml-string
- join/split XDocuments, XElements and XAttributes
- use XPath, XSLT
- check for validity against a given schema

plus:
- read (async) JSON files from and get and get them as handy XDocuments
- write (async) XDocuments to disk in form of a JSON string
- parse a json-strings to XDocument
- convert an XDocument to a json-string

so basically anything you could already do in vvvv plus some more. and this is only what we brought to the surface for you. using the underlying .net datatypes (XDocuments, ...) directly, a pro-user will (later) easily be able to use the whole range of functions that those datatypes provide for more advanced use-cases. 

so, once again, something for the whole family..available in [latest alphas](https://legacy.vvvv.org/downloads/previews) now.
gut patch!

