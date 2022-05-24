---
categories: "Development News"
author: "tonfilm"
date: "2018-09-20"
title: "Debug DX11 Frames with Nvidia Nsight"
slug: "debug-dx11-frames-with-nvidia-nsight"
description: ""
imported: "true"
thumb: "01_QuickLaunch.PNG"
---


{{< box >}}
Note:
UPDATE: There is also a similar tool that is open source, see this blog post: [debug-dx11-frames-with-renderdoc](/blog/2018/debug-dx11-frames-with-renderdoc)
{{< /box >}}

Just a quick one found today and everyone should know about. Nvidia Nsight Graphics works just fine with vvvv and dx11. This can help to profile your graphics performance and find bottlenecks.

The steps are pretty simple:

- Download and install: https://developer.nvidia.com/nsight-graphics

- Start the application, click "Quick Launch" and you should see this screen:
![](01_QuickLaunch.PNG) 

- Add your vvvv.exe and press "Launch"

- Load any patch/scene with dx11 and you should see some Nvidia HUD in the renderer

- Press **CTRL+Z and then SPACE** to capture the latest frame and bring up Nsight

- Now you can inspect your frame like this:
![](eO1heDllNp.gif) 

- Or have more details, timeline, API calls, timings etc. in the Nsight application:
![](02_Inspect.PNG) 

That's it, just so you know.
Yours, devvvvs