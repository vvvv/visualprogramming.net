---
categories: "News"
author: "vux"
date: "2015-04-25"
title: "vvvv dx11 beta33.7 update"
slug: "vvvv-dx11-beta33.7-update"
description: ""
imported: "true"
---


Since Node is (almost) there, here is a deploy for lates DX11 version.

As usual, changes, new nodes... So let's go :

####  Bug fixes
* Small fix on topology on some edge switch cases.
* PerVertexDrawer was not always updating properly.
* Fix null error on StreamOut renderer buffer Pin
* Texture FX was unlocking some reources twice sometimes, which resulted in really weird situations, now sorted.
* Fix issue with gsfx when sending nil on view/projection pins.
* RWByteAddressBuffer was not bound properly for compute shader usage
* Small memory leak fix on TextLayout node  {{< user "joreg" >}}
* Indirect Drawers/Dispatch nodes now all have a Buffer version
* SetSlice (DX11.TextureArray) : Fix mip slice set to all by mistake
* Renderer (DX11 Buffer.Raw) :  Index and Vertex Buffer binding were not applied properly


####  Changed Nodes
* Cylinder now has a "Center Y" Pin
* ViewPort (DX11) now had a default size of 1
* Info (DX11) also shows the name of the graphics card that is currently in use.
* Now uvspace annotation for transforms will default to the same behaviour as in dx9 (eg: Y is inverted). Set invy=false to go back to same old behaviour.
* Renderer (DX11.MRT) : clear pin and background color can now bet set per target.
* Renderer (DX11 Buffer.Raw) : Allow binding as Argument Buffer as well
* Geometry resolution minimum value set to avoir negative inputs {{< user "joreg" >}}



####  New nodes
* SegmentZ (DX11.Geometry): segment with Z extrusion
* StencilReference (DX11.layer): to allow to set reference value for stencil writes/tests.
* ViewportArray (DX11.Layer) : Allows to bind an array of viewports to rasterizer stage (in pixel space)
* Mesh (Geometry Split) : Allows to split an assimp mesh
* Info (DX11.Texture 1d) : Same as per 2d/3d counterpart
* IndexOnlyDrawer (DX11.Drawer) : Allows to ignore vertex buffers and send a draw call with index buffer only.
* Sampler (DX11) : Presets for sampler states as per other states nodes.
* RenderSemantic (DX11.Layer Color) : To set a color as render semantic
* Reset Counter (DX11.Layer) : Allows to enable/disable counter resets for buffers that support this feature)
* BlendTarget (DX11.RenderState Advanced) : Allows to set blend state per render target.
* AttachDispatcher (DX11.Layer) : Allows to attach dispatch buffers at layer level
* AsGeometry (DX11.Buffer Advanced) : Quite complicated node that allows flexible RawBuffer to geometry binding.




####  Girlpower
* Many overviews update from {{< user "joreg" >}}
* New dx9 modules ported to dx11 by  {{< user "robotanton" >}}
* New tfx, samples from {{< user "unc" >}}, too many to enumerate them ;)

####  Misc
* Running vvvv.exe /dx11mode:nvidia will try to auto select nvidia card for optimus setup
* Dynamic texture nodes will nos send a warning in case user tries to upload a 3 channel texture (which is not recommended), since samplers are not allowed on those. There is also a suppress warning pin to avoid tty spam in case you know what you are doing ;)
* Shader nodes now also send a warning to tty in case of invalid layouts.


Download here as usual:
{{< contribution "directx11-nodes-alpha" >}}

That's about it, see you @node15

