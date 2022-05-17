---
categories: "Development News"
author: "gregsn"
date: "2012-08-27"
title: "XML Nodes added to alpha builds"
slug: "xml-nodes-added-to-alpha-builds"
description: ""
imported: "true"
---


### Motivation & Concept
We added nodes that ease the **creation and analyzation** of xml documents.

Documents are represented by **Elements and Attributes** - not strings, which helps *performance*...
You now can easily get some parts of your document and route those as a spread of Elements to other parts of your patch, where they get further analyzed. 
You always can convert an element to a simple string via {{< node "AsString (Object)" >}} - or back to an element via {{< node "AsElement (XML)" >}}. But typically you only want to do that once: when reading from disk or writing to disk. For the rest working with Elements and Attributes is much more comfortable.

### Joining & Splitting 
There are nodes with which you can easily join & split XML-Elements (aka Tags) and Attributes: {{< node "Element (XML Join)" >}}, {{< node "Element (XML Split)" >}}, {{< node "Attribute (XML Join)" >}}, {{< node "Attribute (XML Split)" >}}.

Note that by concatinating several {{< node "Element (XML Split)" >}} nodes - which also outputs an elements' child elements - will give you the possibility to dig into the xml structure. E.g. you could retrieve all child elements of an element, check its properties and dependant of some test select some of the childs via {{< node "Select (Node)" >}}. You therefore could patch a query into your xml structure... 
However this can get complicated and so we added some more nodes:

### Handy nodes for analyzing XML
With GetElements & GetAttributes we added different ways of searching for child tags and attributes. 
When searching by name you get those that have a certain tag or attribute name and are direct child elements or attributes of the specified element. 
do that with {{< node "GetElements (XML ByName)" >}} & {{< node "GetAttributes (XML ByName)" >}}


When searching by XPath you can express a more complex query that allows you dig deeper...
do it with {{< node "GetElements (XML ByXPath)" >}} & {{< node "GetAttributes (XML ByXPath)" >}}


While those nodes are flexible and spreadable in means of what you are searching for, they might be a bit unhandy when you already know that at a certain point in your patch only a certain tag with certain attributes are of interest. 

For those cases we added {{< node "Prune (XML)" >}} which lets you set those tag and attribute names statically in configuration pins with the bonus that you get friendly pin names and dont need to further process your attribute data.


For being really sure that your patch system can work with a certain xml-File or string you can check validity with {{< node "IsValid (XML RelaxNG)" >}}. link: [RelaxNG](http://en.wikipedia.org/wiki/RELAX_NG) 
Both XML Syntax (.rng-Files) & Compact Syntax (.rnc-Files) are supported.

### Sponsoring
Thanks to our **MESO **for putting those node on our agenda and for sponsoring.