---
categories: "Development News"
author: "joreg"
date: "2016-05-19"
title: "Spout"
slug: "spout-0"
description: ""
imported: "true"
thumb: "SpoutWithTitleW_r.png"
---


![](SpoutWithTitleW_r.png)


This is to announce proper [Spout](http://spout.zeal.co/) support for vvvv (finally).

###  What the Spout? 

Spout is a realtime video sharing framework for windows. Basically what [Syphon](http://www.syphon.v002.info/) is for OSX. It allows different applications that handle video (or textures) to share them. That includes TouchDesigner, Resolume, AfterEffects,... to name only a few. For a full list see the Spout website.

###  How to Spout?

While you've already been able to use Spout so far, it was a bit of a hassle to set it up. Now vvvv ships with two simple nodes which should be all you ever need:
* Spout (EX9.Texture Sender)
* Spout (EX9.Texture Receiver)
Both modules are also available as {{< contribution "spout-dx11" "DX11 versions" >}}.

Internally the sender module uses the new SpoutSender (System) node to register a sender name with Spout. If you're interested in a list of all available senders on your system, use SpoutSenderNames (System).

###  Can I has Network?

Indeed! Check the brilliant [TCPSpout](http://techlife.sg/TCPSpout/) and share your textures via network and even to applications on OSX by using [TCPSyphon](http://techlife.sg/TCPSyphon/) on the other end. Watch this video to see TCPSpout/Syphon in action:
//legacy.vvvv.org/downloads/previews
{{< youtube "iu1Vaai_Cek" >}}

Available in latest [alphas](https://legacy.vvvv.org/downloads/previews) now. Many thanks to the creators of Spout and TCPSpout! Please test and report your findings.
 
