---
categories: "Development News"
author: "woei"
date: "2017-01-21"
title: "VL: Networking and Async"
slug: "vl-networking-and-async"
description: ""
imported: "true"
thumb: "UDPProcessNodes.png"
---


previously on VL: [vl-progress-report-4](/blog/2016/vl-progress-report-4)
{{< box >}}
Note:
Networking is a huge topic and we just started scratching the surface. While in the process of implementing more features we want to stay flexible to unify nodes and namings to keep the nodebrowser tidy and the patching experience nice and easy! Therefore later mentioned nodes are published as **experimental** since they might be subject to **signature changes** still, meaning pin and node names.
{{< /box >}}

##  things you know
the vivid blog reader already knows the drill: everything stays the same if you liked it just the way it was.
![Simple VL UDP nodes](UDPProcessNodes.png)
*vvvv flavoured UDP send and receive nodes*
Specify remote host (IP address), a nice port number, connect some data and bang the send to let your **UDP** packets travel over the network. Or open a server to receive bytes arriving on the specified port. The only difference to vvvv you might see is, that here you also get **infos** about the **sender** of the packets via the Remote Endpoint output (which is an IP Address and a port)

![Simple VL TCP nodes](TCPProcessNodes.png)
*likewise vvvv flavoured TCP Server and Client nodes*
same same for the **TCP** nodes: The **client** will try to connect to a server. And once the connection is established, you can send and receive bytes.
The TCP **Server** awaits incoming connections to talk to. The subtle difference here is the **Tuple input**, where you would expect the data pin. No one ever requested it, but now you can decide which packet should be sent to which client by specifying IP address and port together with the message. In case you still want to send the same packet to all of your clients, just set the address to 0.0.0.0 and port 0

-----

##  UDP & TCP revisited
so why did it take so long, what's the goodies behind that?
Unlike the monolithic networking nodes in vvvv you can peek inside the VL ones. The goal was **modularizing** on a much **lower level** to be able to provide the very basics as nodes for the patcher:
* **Timeout** on send and receive (you have that one via @phlegma in the TCP (Network Client Advanced) node in the addonpack)
* access to **Local Address** and **Local Port**: means you can have senders and receivers bound to different networkcards (not just listening to any packet coming in on a certain port as it was now, or relying on the system automatically chosing the right card to send from)
* amongst which cards are available and running, get all sorts of information about the network capabilities of the system
* The guts of UDP and TCP are tightly built around Berekley **[Socket](https://msdn.microsoft.com/en-us/library/system.net.sockets.socket(v=vs.110).aspx)** where you have tons of infos and code snippets on the web. untested yet, but you should be able to tinker your own networking magic, e.g. speak the raw IP protocol directly.
![Socket base stuff](socket.png)
*UDP and TCP nodes implemented on the base Socket type*
<!--break-->
-----

##  WebRequest & WebResponse
the cryptic one line description on [msdn](https://msdn.microsoft.com/en-us/library/system.net.webrequest(v=vs.110).aspx) is: *WebRequest makes a request to a Uniform Resource Identifier (URI).* imho meaning you can do all sort of things related to **http://**, **ftp://**, and **file://**.

girlpower/VL/_Experimental/Async/AsyncTask.v4p features a very **simple example** of requesting the vvvv35.zip on this server and downloading it and saving it on your desktop.
The nodeset, however, features all the functionality required to do fully featured http communication: HEAD, GET, POST, PUT,..., status codes, media types, content encoding, credentials, etc,...

Conveniently the request/response communication is based on **Streams** which already was available in VL through the work on [File IO](/blog/2016/let-me-present-to-you-file-io), yay!

web nerds, give it a try and report what's missing!
![WebRequest and Response](RequestResponse.png)
*some basic WebRequest and WebResponse nodes* 

-----

##  AsyncTask & AsyncLoop
the UDP and TCP nodes in vvvv are running nicely in the background without blocking the main process itself. same for the VL nodes, just that we (again) tried to come up with a very general and reusable way of implementing it in order to have it available to every patcher. so welcome to world **parallel** programming, visually!

####  AsyncTask
this region implements the same pattern as Copier (Async), Writer (Async),... It is meant for long-running tasks which would block your main application otherwise. 
Now you just bang the Restart pin and it will execute what every you patched inside the region in the **background **and hand over the result once it's finished. it shows you its **status** (if it's working at the moment) and you can **cancel** it midways. (we left out progress reporting in this release)
![AsyncTask example](AsyncTask.png)
*request the vvvv.zip, download and save it on the desktop, report the file size once completed*

####  AsyncLoop
is the other region for parallelizing your nodes. you can think of it as a patch running it's own separated speed/mainloop: it computes the nodes it holds and starts again, no matter how long or short it takes. once (re)started it loops forever as fast as possible until **cancelled** or **aborted (break)** from within:

![AsyncLoop in UDP Client](AsyncLoopSimple.png)
*actual implementation of the UDP Client: read the messages received if any, pause some microseconds to give the CPU a break, repeat...*

easy right?
the result of the nodes inside the loop is pushed back to the main patch and you can collect a (possibly empty) spread of results on the output. it's a spread since we have no idea how many times the loop has been running while vvvv had one regular frame.

and the same principle is applied if you want to pipe things into that async running loop: data running into the data input of the region are queued and available inside the region asap. 
![AsyncLoop in TCP Client](AsyncLoopWithInput.png)
*AsyncLoop with data input as used in TCP Client*
-----
{{< box >}}
to try and use the mentioned features
* either open girlpower/VL/_Experimental/Async/Async.v4p 
* or in VL tick -> Dependencies -> Nugets -> VL.CoreLib.Experimental{{< /box >}}

hope you like what you read!
and again the reminder, that this is published as experimental, so possibly due to changes.