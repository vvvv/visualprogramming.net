---
user: "microdee"
created: "1527283365"
---

that there looks like an edge case. check your SSH situation, if you use a proxy or a vpn make sure they don't fiddle with secure channels.
You can have "classic style downloading" but you'll need to download and extract 5 zip files.

https://github.com/microdee/mp.essentials/releases/latest
https://github.com/microdee/mp.dx/releases/latest
https://github.com/microdee/mp.fxh/archive/master.zip
https://github.com/velcrome/vvvv-Message/releases/tag/2.9.10
{{< contribution "directx11-nodes" >}}

extract all to packs folder. also mp.* packs require .NET 4.7+ so make sure your windows 7 is up to date (so turn updates back on if you turned them off).

I still didn't have time to fix the face tracker dll automatic deployment, if you can't wait though download this https://github.com/microdee/mp.dx/blob/master/DX11Utils.Native/dependencies/libfacedetect.dll and put it next to DX11Utils.dll inside the plugins folder of mp.dx. x64 only.
