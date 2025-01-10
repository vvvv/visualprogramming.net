---
categories: "Development News"
author: "joreg"
date: "2017-08-21"
title: "New Tokenizer Nodes"
slug: "new-tokenizer-nodes"
description: ""
imported: "true"
thumb: "tokenizer.png"
---


Dear jugglers of the bytes,

sorry this took so long! Almost five years ago [we introduced the new datatype Raw](/blog/2012/new-datatype-raw) for easier handling of byte streams in vvvv. It came with all the nodes you'd need, except probably the most important one, a Tokenizer. So for collecting incoming bytes via e.g. TCP or RS232 and making sure to separate them into the correct message-tokens you'd still have to fall back to the good old {{< node "Tokenizer (String)" >}}. Possible, but annoying. 

Enter the new series of Tokenizer nodes:
- **Tokenizer (Raw FixedLength)**
- **Tokenizer (Raw LengthPrefix)**
- **Tokenizer (Raw Postfix)**
- **Tokenizer (Raw Frame)**

Users of Tokenizer (String) may remember that it was always a bit tricky to configure since it had quite a few options to configure it and you'd have to make sure to get those all right for your specific use-case. So now we've separated those use-cases and spent each of them an individual node. The nodes versions should be self-explanatory. If not, they all come with help-patches!

Now all of the Tokenizers always return a spread of tokens found in the last frame. So in order to simulate the *Queue Mode* of the original Tokenizer (String) here is how you do:
- Spread: take the spread as is
- Discard: take the last slice of the spread
- Enqueue: take the new **Enqueue (Raw)** node, which collects incoming spreads of raw and always only returns one of the collected slices per frame

![](tokenizer.png)
*Classic scenario tokenizing by CRLF as postfix. Easy.*

Also, on the other side, if you're in the business of sending out a stream of bytes here are the counterpart nodes to frame your messages accordingly:
- **PrefixLength (Raw)**
- **PostfixBytes (Raw)**
- **FrameBytes (Raw)**

###  What the VL?

Of course. All patched in VL and even more practical to use over there because (once again) datatypes and delegates. The Tokenizer in VL is much more primitive in that it only collects all incoming bytes and then executes a delegates on the buffered bytes. The delegate allows you to easily implement more complex scenarios than the four preconfigured ones mentioned above. 

![](tokenizer3.png)
*Elegantly tokenizing Firmata with VL*

The Firmata protocol for example fits non of the above mentioned simple cases as it has different types of tokens. Still the basic Tokenizer can be used to implement the firmata peculiarities on top of it. Further the delegate allows you to return the tokens already in your desired datatype. So instead of returning a Spread<Spread<Bytes>> as the Tokenizers in vvvv can only do, in VL it can readily return a Spread<MyToken> which is just so much more modern..

If you feel anything missing here or have any questions, please let us know in the comments!
//legacy.vvvv.org/downloads/previews
**The nodes are now available in [Alpha Builds](https://legacy.vvvv.org/downloads/previews).**