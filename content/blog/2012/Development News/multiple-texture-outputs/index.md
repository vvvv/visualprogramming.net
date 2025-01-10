---
categories: "Development News"
author: "Elias"
date: "2012-07-26"
title: "multiple texture outputs"
slug: "multiple-texture-outputs"
description: ""
imported: "true"
---


the easiest way to write a plugin with a texture output was by extending the [DXTextureOutPluginBase](https://legacy.vvvv.org/pluginspecs/T_VVVV_PluginInterfaces_V2_EX9_DXTextureOutPluginBase.htm) class and overriding the CreateTexture and UpdateTexture methods. this approach lead to several issues though:
1. the plugin was limited to one texture output. if there was the necessity to have more than one texture output one had to go the long route by implementing IPluginDXTexture2 and doing the resource management manually.
1. it wasn't possible to reinitialize the textures on a slicewise basis. for example if the size of one texture changed all textures had to be recreated.
1. dealing with a pin of type texture was completely different than all the other data types. wouldn't it be nice to simply write ISpread<Texture> and be done with it?

well it's nearly as simple as that now. you can create a texture output by writing 
```
[](Output("Texture"))
ISpread<TextureResource> FMyTextureOut;
```

the [TextureResource](https://legacy.vvvv.org/pluginspecs/html/T_VVVV_PluginInterfaces_V2_EX9_TextureResource_1.htm) class takes care of the resource management, for example if a renderer is moved to another screen, the directx9 device changes and therefor the texture on the old device needs to be disposed and recreated on the new one.

{{< box >}}
Note:
the resource management is the reason why we can't simply write ISpread<Texture> as there might be multiple textures for one single slice. for example if the texture output is connected to two renderer each using its own directx9 device, two textures have to be created for each slice.
{{< /box >}}

the constructor of the TextureResource class takes up to four arguments:
1. some arbitrary user data which will be supplied as the first argument to the following functions
2. a function which creates the texture, taking as first argument the user data, as second the device for which a texture was requested and returning the newly created texture.
3. a function which updates the texture (optional), taking as first argument the user data and as second argument the texture to be updated.
4. a function which destroys the texture (optional), taking as first argument the user data and as second argument the texture to be destroyed.

so in order to create a texture we need to do this:
```
FMyTextureOut[](i) = TextureResource.Create(i, CreateTexture);
...
Texture CreateTexture(int slice, Device device) {
  return new Texture(device, ...);
}
```

{{< box >}}
Note:
the static TextureResource.Create method does nothing more than calling new TextureResource<TMetadata>(...), so you might ask yourself why not calling new directly? well the reason is that using the static factory method we can make use of c#'s type inference. so instead of writing new TextureResource<SomeComplexMetadataType<ContainingInnerTypeArguments>>(...), we let the type inference algorithm figure out the SomeComplex...BlaFoo thing.
{{< /box >}}

if we want to update the texture when some input changes:
```
FMyTextureOut[](i) = TextureResource.Create(i, CreateTexture, UpdateTexture);
...
void UpdateTexture(int slice, Texture texture) {
  // Do something with the texture
}
```

and if something special needs to be done when destroying the texture:

```
FMyTextureOut[](i) = TextureResource.Create(i, CreateTexture, UpdateTexture, DestroyTexture);
...
void DestroyTexture(int slice, Texture texture) {
  // Destroy the texture
}
```

in many cases the UpdateTexture call can be quite expensive, in order to disable it set the NeedsUpdate property on the TextureResource to false and set it back to true under a certain condition.

for a full example have a look at the rewritten [dynamic plugin template](https://github.com/vvvv/vvvv-sdk/blob/develop/vvvv45/lib/nodes/plugins/TemplateEX9Texture/TemplateEX9Texture.cs).

oh and all this stuff works for meshes too, simply replace TextureResource with MeshResource.