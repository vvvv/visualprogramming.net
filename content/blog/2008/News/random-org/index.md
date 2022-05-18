---
categories: "News"
author: "joreg"
date: "2008-12-04"
title: "random.org"
slug: "random.org"
description: ""
imported: "true"
originalType: "stuff"
---


wanted to share this for some time now. today - just by chance - is the time:

ever wondered where {{< node "Random (Value) " >}} takes the values from it serves you? vvvv doesn't make them up just every frame, how would it?! how would a machine make up things? it doesn't, it just pretends so, actually using simple math. there are [different formulas for generating pseudo-random numbers](http://en.wikipedia.org/wiki/Pseudo-random_number_generator). so while sequences of numbers generated using such a formula are not truly random, they are quite random enough for most applications and have the additional advantage that they can be recomputed at any time by simply using the same parameters for the formula. that is what the *Seed* pin on the {{< node "RandomSpread (Spreads) " >}} node is for. it is the the one parameter that drives the underlaying random function.

anyway, now that you know that random is all fake, you might be interested in this:

![](rdologo475x70.png)

[random.org](http://random.org) is a webservice that offers true random numbers. on their [about randomness](http://random.org/randomness/) page (which is a very interesting read as a whole) they explain how they get their random numbers from atmospheric noise. the site has a simple [http interface](http://random.org/clients/http/) which you can easily access via {{< node "HTTP (Network Get) " >}} to retrieve spreads of random numbers. there is a [quota](http://random.org/quota/) on the number of random bits you can retrieve per day which you can increase by inserting money: 1 dollar per 1 million bits.

another similar webservice is [hotbits](http://www.fourmilab.ch/hotbits/) which gets its numbers through [radioactive decay](http://www.fourmilab.ch/hotbits/how3.html). while the page isn't as sophisticated as random.org it should still be possible to retrieve their numbers as [demonstrated on this page](https://www.fourmilab.ch/hotbits/secure_generate.html) and there doesn't seem to be a quota...

and finally if you don't want to rely on a webservice you can get your own random number generating pc-card from companies like [id quantique](http://www.idquantique.com/products/quantis.htm) or from [](http://www.true-random.com/) (if you dare after having seen their...unique hardware design).



