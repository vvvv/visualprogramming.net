---
categories: "Development News"
author: "joreg"
date: "2023-12-20"
title: "Introducing: Debug views"
description: "Build Result, App Health and Log"
---

Dear patchers!

With vvvv gamma being used for building more and more complex applications the lack of proper debugging tools became apparent. 

With latest vvvv gamma 5.3 previews we're therefore introducing new views that will help you identify problems in your patches. You can open them via the shortcut `Ctrl + F2`.

## Build Result
This is where you'd look first. Here you'll see errors, warnings and infos that came up as a result from the build process. 

![Alt text](image.png)

Doubleclick an entry to jump to its origin where you can fix it. Making sure this list is empty is the first step to a healthy app.

For more info, see [Build Result](https://thegraybook.vvvv.org/reference/hde/debugging-buildresult.html)

## App Health
Here you'll see messages coming from your running application. These can be exceptions (the pink nodes) or messages coming from a `Warn [VL.Session]` node that you can even use yourself in patches to indicate issues. 

![Alt text](image-1.png)

For more info, see [App Health](https://thegraybook.vvvv.org/reference/hde/debugging-apphealth.html)

## Log
The log is collecting all issues over time and shows you the whole history.

![Alt text](image-2.png)

Here you'll find all messages sent by the system, but also by your app. To create log messages from your patches use the Log [System.Logging] node. 

The interesting thing with logging is that you can also route logs to any "logging provider" you prefer. In a real-life project you may want to log certain messages to a file and others to a cloud service. Everything is possible.

For more info, see [Log](https://thegraybook.vvvv.org/reference/hde/debugging-log.html)

### Showing a Log UI in your own application

We thought about this one step further: Imagine exporting your application. By default you've now lost the ability to view your log messages, since the above Log window is part of vvvv itself and not your app.

You want to ship the fancy log view as part of your app? We have you covered, "HowTo Use a LogUI..." for how to set this up.

At this point an unrelated reminder: This is comparable to how you can use the Audio Driver Selection window in your own app, see "HowTo Use the ConfigurationUI...".

## Sponsor credits

For requesting advanced logging support as part of a priority support agreement we thank [Refik Anadol Studio](https://refikanadol.com/).

If you also have a request for custom development, [get in touch](mailto:devvvvs@vvvv.org)!