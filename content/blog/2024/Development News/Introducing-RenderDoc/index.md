---
categories: "Development News"
author: "tebjan"
date: "2024-10-23"
title: "Introducing: RenderDoc GPU debugging"
description: "Easy GPU frame debugging for VL.Stride"
thumb: thumb.png
---

# RenderDoc for vvvv gamma

[RenderDoc](https://renderdoc.org/) support has been added to [VL.Stride](https://github.com/vvvv/VL.StandardLibs/tree/main/VL.Stride) for vvvv gamma `preview 6.7-199` and later. This simplifies GPU and shader debugging, making it easier to capture and analyze GPU calls and shaders in larger projects.

## Key Features

![](renderdoc.png)

RenderDoc enables inspection of the graphics pipeline for captured frames. It features texture, buffer and mesh views per draw call and even allows line-by-line shader debugging with value inspection.

### RenderDocManager Node
![](node.png)

Integrates with RenderDoc, controlling frame capture directly in vvvv. RenderDoc can then inspect the frames for GPU debugging.

![](attach.png)
  
### `--debug-gpu` Flag

vvvv must be started with this command-line flag to enable RenderDoc’s GPU capture functionality. It enables the debug features of the graphics device and helps gather detailed GPU information.

### Why Use It?

This tool is essential for debugging complex shaders or performance issues related to GPU operations. It removes much of the guesswork by providing a detailed view of GPU processes. Combined with RenderDoc's powerful analysis features and the Stride Profiler, it makes troubleshooting faster and more accurate, especially in graphics-heavy projects.

### How to Use

There is a dedicated [documentation page](https://thegraybook.vvvv.org/reference/libraries/3d/gpu-debugging.html) in The Gray Book with all the details.

## Credits

Development of this was sponsored by [Studio Bruell](https://studiobruell.de/) and [Refik Anadol Studio](https://refikanadolstudio.com/).