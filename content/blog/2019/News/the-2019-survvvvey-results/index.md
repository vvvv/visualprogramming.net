---
categories: "News"
author: "joreg"
date: "2019-05-27"
title: "The 2019 Survvvvey - Results"
slug: "the-2019-survvvvey-results"
description: ""
imported: "true"
thumb: "Survey2019_bloc_r.png"
---


Thanks everyone,

for filling out this years survvvvey! Judging from the responses it looks like some of you even did twice or thrice! What can we say... Anyway, since we've [done this before](/blog/2015/the-2015-survvvvey-results) this time we can compare to the previous results and in general we can say you're pretty stable. As you'll see, answers are in most cases roughly the same as last time, which i think adds to the credibility of the numbers overall. So here are your results with added attempts of interpretation and a few comments.

![](Survey2019_bloc_r.png)

## Who you are

Most likely you're a german speaking male, living in germany, in your early thirties and labeling yourself an artist, rather than a developer or designer. You're considering yourself an intermediate user and are using vvvv every week.

![](Survey2019_block1_2.png) 

Even though you do have a username on vvvv.org, when it comes to the forum, you mostly read it silently. Which seems to be enough for you as you say the forum was your second favorite learning-resource after the help-patches and before the girlpowers. Also you've attended at least one edition of the [NODE festival](http://nodeforum.org/festival/)

![](Survey2019_block2_3.png) 
legacy.vvvv.org/documentation
You found out about vvvv by searching on the internet and have more likely taught vvvv to others than having learned it in an [educational institution](https://legacy.vvvv.org/documentation/educational-institutions). When we ask you how you prefer to get your vvvv news, curiously there was a little spike in your request for email. In this day and age where the so-called social-media is showing its true face, we appreciate this request and are planning to offer a newsletter in the future. 

![](Survey2019_block3_3.png) 

## Using vvvv

We asked you what your favorite user contributions are and here are your top ten:

![](Survey2019_block7_2.png) 

With 3 hits in the charts {{< user "everyoneishappy" >}} clearly bombs it. Chapeau! And this list also clearly shows us what you'll be missing in vvvv gamma from the start. The foundations are built, we're on it...

### How nerdy are you?

![](Survey2019_block4_2.png) 

### Your biggest challenges

Then we asked about the biggest challenges you have with vvvv. And your answers can be summed up, in this particular order of occurence:
**1) Learning** 
You name a lack of tutorials and documentation that make it hard to learn basic principles. In particular you struggle with the concept of spreads and vl and figuring out when to use what node to solve a specific problem. Point taken. We also see great potential in improving this situation. 

**2) Keeping patches organized**legacy.vvvv.org/documentation
This is not only your complaint but one of the biggest critizisms of visual programming in general. And it is one of the reasons we started to work on vl, where we provide different options to help you structure your projects. Obviously this comes at the cost that you'll have to understand how to use those, but once you do, you should find it much easier to build and maintain more complex applications than you were used to in vvvv beta. But we understand that this still needs better documentation. 

**3) Keeping track of contributions**
As a direct response to this, we've created this new site: [User Contribution Staff Picks](https://beta.vvvv.org/contributions/staffpicks/) where we collect, sorted by categories, the most useful contributions.

**4) Missing features**
Apart from everyone missing their own favorite feature there is a more general bottom line: Many features expected as standard come "only" as user contributions, in varying quality and states of completeness. Creating, organizing and maintaining a vast library of standard nodes is a beast of its own and over the years vvvv immensely profited by the incredible amount of high-quality user contributions. While for vvvv beta we only added a plugin-interface at a later point, for vvvv gamma it is one of our top priorities to provide the most simple way we can think of, to extend it with more nodes. See [Using .NET Libraries](https://vvvv.gitbooks.io/the-gray-book/content/en/reference/libraries/using-net-libraries.html). This not only makes it easier for user contributions but also for ourselves to provide and maintain a much larger node-base than we could handle for vvvv beta. In the next survvvvey this point should not be up this high anymore!

**5) It is windows only**
See the [roadmap](https://betadocs.vvvv.org/roadmap.html) for vvvv gamma

**6) It cannot export executables**
See the [roadmap](https://betadocs.vvvv.org/roadmap.html) for vvvv gamma

**7) Missing installer** 
Already solved for vvvv gamma

**8) Difficult debugging of complex programs**
We see that and would argue this is already much improved in vvvv gamma but also know that we will have to do much better in the future

**9) Performance issues**
This is a tricky one since there is the inherent performance of vvvv and then there are ways to patch things that run faster or slower. Therefore this will always be hard to solve in general. But certainly vvvv gamma improves over this by offering new features like reactive programming and async regions that allow you to better balance the load of your patches.

### Your favorite tag-lines

Next we've asked you to choose your favorite tag-lines that best describe the vvvv you want to use. Here are the results in order of popularity:

![](Survey2019_block6_2.png) 

If you were uncertain, in particular in regards to vvvv gamma, who we make it for and what it aspires to be, this listing gives a good answer. This is where vvvv comes from and it is also where we see its future!

We'd argue that today vvvv gamma improves over beta in points 10 and 7 and also points 1, 2, 3 and 8 are covered for use-cases that do not require 3d graphics. 4, 5 and 6 are waiting for the [announced integration of the Xenko 3d-engine](/blog/2018/vl-threedee) and nr. 9 is "only" short of some better integration of tooling like timeline and automata which is [well underway](https://discourse.vvvv.org/t/model-runtime-editor-design-pattern-intro-0-6/17597)... Overall it gives us great convidence that your wishes seem to be very much aligned with our plans.

### Your favorite vvvv companions

Also we were interested in your favorite companions for vvvv and reasons when to prefer those over vvvv. 

<!--{SPLIT()}-->
**First, your top companion choices are:**
1) Unity
2) MaxMSP
3) Unreal Engine
4) TouchDesigner
5) PD
<!--~~~-->
**And the top reasons to use them:**
1) When executable export is required for a project
2) When the project cannot be deployed on Windows (web, mobile, microcontroller)
3) When better 3d-rendering support/workflow/quality is needed 
4) When better video playback is needed
5) When better audio support is needed
<!--{SPLIT}-->

## About vl

![](Survey2019_block8_2.png) 

Here are some of the 15% *other* answers you gave:
<!--{SPLIT()}-->
* "It seems more complicated and takes a way a lot of the stuff i found easy in vvvv"
* "The UI just doesn't work for me it's a constant struggle, lack of documentation and helppatches, stuff only being explained and then burried in the chat"
* "VL is sexy but im too scared to use in production"
* "When i tried it, it was buggy. now, it's really powerful but also too complex to learn in a weekend."
* "Perfect for implementing certain features, but very bad usability and rendering capabilities prevent me from further use"
<!--~~~-->
* "Didn't find it reliable enough to use on commercial products"
* "C# is faster for and more comprehensive for me"
* "I yet do not see the benefit of node based object oriented programming ... but its cool."
* "I use it quite a lot, but i've gotta say: clunky ui/ux makes it often a pain to use, so often, that i'm thinking twice before creating a vl patch."
* "I am a bit scared by the reviews of my friends who tried to get at vl but failed.."
<!--{SPLIT}-->

## What is gamma?

![](Survey2019_block9_2.png) 

Here are some of the 32% *other* answers you gave:
<!--{SPLIT()}-->
* "I don't know how to answer this question because I don't know if it is made for me nor I know who you made it for."
* "I don't feel like part of the target group of this release."
* "Dont know how to feel about it." 
* "Most likely the end of my vvvv career"
* "I'd prefer to see more and faster improvements in vvvv beta and continue patching the way I am used to."
<!--~~~-->
* "Not sure yet, but looking forward to it."
* "A necessary next step."
* "The next logical step to my personal path as a vvvv programer"
* "A god thing I guess. Things that sound 'finished' are also less sexy than things beta."
* "Definitely a game changer"

<!--{SPLIT}-->

## Business

In this section your answers where particularly close to your answers in 2015. Here is what we asked and your answers:

**Are you aware of the fact that when using vvvv for a commercial project you need to buy a license?**
95% say yes.

**Do you use vvvv in any professional / income-generating work?**
50% yes, 50% no. What a healthy balance to have in a community, don't you think?

**Have you worked on a commercial project where for some reason no license was bought?**
70% yes, 30% no. Amen!

And finally, look how this one has pleasently changed:

![](Survey2019_block5_6.png) 

--- 

If you have any idea what we could improve for the next survvvvey, please let us know in the comments.
