---
categories: "Development News"
author: "Elias"
date: "2012-08-07"
title: "zip and unzip"
slug: "zip-and-unzip"
description: ""
imported: "true"
---


the beta28 release will contain two new spread operations available for all major data types: zip and unzip. their operation is best explained by two screenshots of their help patches:
<!--{SPLIT()}-->![Zip](Zip%20%28Value%29%20help_2012.08.07-20.37.13.png)<!--~~~-->![Unzip](UnZip%20%28Value%29%20help_2012.08.07-20.37.20.png)<!--{SPLIT}-->
<!--break-->
for performance reasons each zip and unzip comes with a normal and a bin sized version. for example if the task at hand is to zip two spreads slice by slice the normal version will be much faster than using the bin sized version and setting the bin size to one. so if possible use the normal version.

together with their bin sized versions and the ability to control the number of input (in case of zip) and output pins (in case of unzip) via a config pin they form a very versatile pack of nodes able to replace the functionality of various nodes from a simple vector join/split to the very famous (and probably hardest to find for beginners) Stallone node.

by making use of the [newly introduced streams](/blog/2012/ispread-vs-istream) they are able to outshine their "competitors" by up to a factor of ten in terms of performance. the higher the slice count the faster they are compared to the rest. only at very low slice counts (< 25) their performance is not as good as for example a native vector join as with all plugins the transition from the unmanaged world of vvvv to the managed world of a plugin comes with a small overhead.