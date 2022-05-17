---
categories: "News"
author: "vux"
date: "2017-02-06"
title: "Directx11 1.0.0 Update"
slug: "directx11-1.0.0-update"
description: ""
imported: "true"
---


It's been a little while again, but here it is, new Directx11 version.

There are many changes around, so I'm not too sure where to start.

First thing, versioning has been updated, no more alpha/beta, that joke about "software is always beta" made it's time, but as we say, shortest jokes are the best, and for many users that sounds pointless and confusing, so now build is adopting a more formal version naming eg : release, with beta and alpha being used for in between releases.

Second thing, build system has been reworked and now uses a build server, which allows direct update to git releases, so users who want to try out early releases can do so much more conveniently via [](https://github.com/mrvux/dx11-vvvv/releases)

No more need to build the pre releases yourself.
This also means that users can expect more frequent releases.

Second thing was in the list for a long time, interface has been changed (basically 
IDX11ResourceProvider and friends have been replaced by IDX11ResourceHost version and friends. Removing IPluginIO is necessary as it creates some major issues going forward (and never got used anywhere inb the codebase anyway).

For this release ResourceProvider is working alongside Host (it is now marked as deprecated and will be removed from git version pretty much as soon as I finished this post.
Sadly, LayerProvider could not be made to work alongside Host version, so those have been removed already. From what I know there's no custom plugins using it (or they already move to new interface), so on a user perspective there should be no transition issue.

As usual, I think I should have a ready to paste version, and maybe an auto bot to  reply in forums, bugs are to be submitted here [](https://github.com/mrvux/dx11-vvvv/issues)


Ok now let's go past those (boring) announcements details and go through what every user wants eg : What's new  (and download obviously)

Internals:
* First general shader node internals got reworked, removing some non necessary pipeline calls, and pin system got updated to moved to mave a lower api footprint as well. Also have some new specific optimization if same geometry is renderered several times). So now Layer shader nodes go from faster to much faster.
* Shaders also now allow multiple passes: This comes at the restriction that Vertex shader input in every passes have the same signature. See girlpower example (misc/multipass)
* Fix 64 bits depth format (even if it is rarely used)
* Effect pass can have topology annotation: Since some shaders expect a specific opology and nothing else, this can now be set at pass level (and avoid some subtle bugs) See girlpower example (misc/topology)
* New shader semantics (SIZEOF and INVSIZEOF), which allow with a ref annotation, to point to a resource variable. Runtime will auto set this to Resource size. See: girlpower/misc/referencing_variable

New Nodes (or new options in node):
* Renderer (DX11 TextureSpread): Allows to render to a spread of texture (so you can use various resolutions and formats for each view/projection slice)
* Text (DX11.Geometry) : Don't think I need much explanations for that one
* Viewport (DX11.layer Indexed) : Sets a new viewport depending on camera index from renderer.
* Zip (TextStyle) + bin version (user:sebl)
* Renderer (DX11) : Now has a flip sequential pin, which allows to handle eventual tearing issues, see girlpower/misc/flip_sequential
* All platonic solid: Radius pin
* World (DX11.Layer) Allows to move a whole layer while preserving Camera (View), this is also set in shaders via new semantics : LAYERVIEW, WORLDLAYER, WORLDLAYERVIEWPROJECTION ... 
* ViewProjection (DX11.Layer) Spreadable, can repeat a full scene with a different camera.
* Anisotropic (DX11 Sampler) : Anisotropic sampler preset
* Enabled (DX11.Layer) : Blocks both render and evaluate is disabled. Same as group does, but lightweight.
* TextFormat(DirectWrite.Advanced)
* Kinect2 (Devices) : Depth Camera Intrinsics pin (user:id144)
* PixelData (DX11.Texture) : Reads raw pixel data in a stream, no image conversion (can perform stride copy if wanted though).
* DynamicBuffer (DX11.Buffer Raw) : Raw buffer from stream type
* DispatcherX DispatcherXY (DX11.Drawer) : convenience nodes for 1d/2d dispatch, which does thread group calculations (avoid to replicate this everywhere)
* BufferData (DX11.RawBuffer) : gets raw buffer data as a stream.
*  TextSettings (DX11.Advanded) Allows to create a different text engine, specially to allow large text (see girlpower/misc/large_text)
* InputElement (DX11.Geometry Preset) common input element presets, to use along gsfx and to avoid repeating those over and over again.
* TemplateComputeBuffer (DX11.Effect) : Template to quickly get started writing to a buffer in Compute.


Fixed Nodes:
* Info (Assimp.Mesh) : spread indexing was broken
* Cylinder (DX11.Geometry): Radius issue
* Text styles had an issue in spread cases (user:sebl)
* GetSlice (DX11.TextureArray) : Fix some potential error on delete
* GetSlice (DX11.DepthTextureArray) : Fix some potential error on delete
* VideoIn (DX11.DShow) : Fix some potential error on delete
* Renderer (DX11) : Accepts key presses again (user: azeno). This was disabled long time ago due to some silly vvvv core Beep issue.
* All Readback (StructuredBuffer) can read any structuredBuffer (not only ones from renderers)
* Vlc (DX11.Texture 2d) reports file as invalid if they are parsing late, instead of potential crash.
* Add DynamicBuffers (structured versions) : Have a different upload mode Dynamic/Default/Immutable, to eventually improve performances depending on usage (for example, a static buffer should be set as Immutable and Apply set to false asap).
* Renderer nodes now have a new Depth buffer mode eg: WriteOnly. In case you do not need to read depth buffer, this should be the new default (does not expose an output pin). On newer cards this allows graphics card to improve performances.

Examples:
Lot of new examples and help patches (20+ from Assimp, Semantics...)

So for users who did read all and did not scroll hear (or just skipped and went straight into contribution page):

Download here:
{{< contribution "directx11-nodes" >}}
