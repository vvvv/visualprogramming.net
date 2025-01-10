---
categories: "Development News"
author: "joreg"
date: "2019-02-20"
title: "VL: Regular Expressions"
slug: "vl-regular-expressions"
description: ""
imported: "true"
thumb: "ismatch.png"
---


Finally,

we have regular expressions in vl. What the? Here is the gist:

{{< box >}}
*Regular expressions provide a powerful, flexible, and efficient method for processing text. The extensive pattern-matching notation of regular expressions enables you to quickly parse large amounts of text to find specific character patterns; to validate text to ensure that it matches a predefined pattern (such as an email address); to extract, edit, replace, or delete text substrings.*

via [docs.microsoft](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expressions)
{{< /box >}}

vvvv beta comes with the {{< node "RegExpr (String)" >}} which is quite handy but doesn't cover all cases. {{< user "vux" >}} provides a {{< node "RegExpr (String Replace)" >}} via the addonpack, which adds the "replace" case, but there is more. So let's see what we got in shop for vvvv gamma:

## Pattern matching

The simplest case: Just figure out if a given string matches a given pattern:

![](ismatch.png)
*Is the input a valid email address?*

## Replacing by pattern

Sometimes a simple replace by string is not enough. See this example where we're stripping a string of all occurences of html-tags, ie. replacing them with nothing.

![](replace.png)
*Removing html tags from a string*

## Splitting by pattern

Sometimes a split by string is not enough. See this example where we're splitting a string by any multiple occurances of lowercase letters:

![](split.png) 
*Splitting a string at a pattern*

## Finding occurences by pattern

Find all substrings that match a given pattern. Imagine a string that contains many dates written in the format "Month Day, Year" and you want to get all of those:

![](matches.png) 
*Extracting all occurences of dates in the input string*

## RegexOptions

The last pin on all of the above nodes is the *Options* enum pin. Since this enum allows multiple selections (ie. a bitwise combination of its member values), there is a RegexOptions node that allows you to set multiple of the options at the same time:

![](regexoptions.png) 
*Choosing multiple regex options at the same time*

## And more//legacy.vvvv.org/downloads/previews

The above should cover most typical usecases. But [regular expressions can do even more](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expressions). Luckily with vl you're not restricted to what we decide to provide for you, but you have direct access to the full set of functionality .NET regular expressions offer. For example there are situations where you want to use the static operations that .NET provides instead of the process nodes shown above. If so, simply choose "Advanced" in the nodebrowser and, navigate to the "Regex" type and choose the static operations from there...

![](static.png)
*Static regex operations available among the advanced nodes*

Available for testing in [latest alphas](https://legacy.vvvv.org/downloads/previews) now!