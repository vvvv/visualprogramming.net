---
categories: "Development News"
author: "joreg"
date: "2018-05-31"
title: "HTMLTexture now for DX11 and more"
slug: "htmltexture-now-for-dx11-and-more"
description: ""
imported: "true"
thumb: "verwurstelt2.png"
---


just because!

since we can, the addonpack is now shipping with 4 new nodes: 
* HTMLTexture (DX11.Texture String CEF)
* HTMLTexture (DX11.Texture Url CEF)
* HTMLView (Image String)
* HTMLView (Image Url)

What happened here is that the original EX9 based HTMLTextures have been replaced by the more generic HTMLView (Image) nodes which can easily be used for both EX9 and DX11 via the respective UploadTexture nodes [introduced recently](/blog/2018/vl-image-exchange-interface). So the EX9 and DX11 variants of the HTMLTexture nodes are now mere modules wrapping HTMLView -> UploadTexture. 

The 'CEF' in the version for the DX11 modules is to have them distinguished from the also available contribution {{< contribution "htmltexture-(dx11)" "HTMLTexture (DX11" >}}) by {{< user "gumilastik" >}}, with the same name, which is internally using a different backend than [CEF](https://bitbucket.org/xilium/xilium.cefglue/wiki/Home). So horray, more choices for you!

Just in case you wonder: Obviously the DX11 variants still require the {{< contribution "directx11-nodes" "DX11 Pack" >}} to work!

And while at it we also updated the underlying backend to reflect **Chromium 66.0.3359.117**

Bonustrack:
With the *Image* nodes you can also pipe websites into the recently introduced [VL.OpenCV](/blog/2018/vl-opencv-is-in-da-house). This maybe quite special interest but i'm sure one fine day someone will need to do exactly that: 

![](verwurstelt2.png)
*HTMLView verwurstelt via VL.OpenCV and displayed via Preview (DX11.Texture)). Thankyouverymuch!*


Available in [latest alphas](/downloads/alphas) now. Please test and report your findings!