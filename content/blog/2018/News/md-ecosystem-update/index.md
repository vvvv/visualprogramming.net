---
categories: "News"
author: "microdee"
date: "2018-09-04"
title: "md.ecosystem update"
slug: "md.ecosystem-update"
description: ""
imported: "true"
---


Hoi!
I've updated my deployment workflow yesterday solving a major issue which I wonder if anybody else met actually. If you're and you were using vpm nothing changes for you. Except 2-3 more entries in the license agreement page. If you are installing them manually well, you might want to switch to vpm, or edit xml files.

####  The problem
So the problem was that all my packs depend on md.stdl and mp.pddn which are both swiss army knifes when it comes to dealing with everyday coding issues. So far I just delivered them next to my packs. However this created an issue when 2 packs delivered a different version and vvvv loaded the older one first, it might have broke the pack with the newer version.

####  Resolution
So I found the simplest way to deal with this is patch the vvvv.exe.config file to look for referenced assemblies in another folder (in this case vvvv\packs\md.core) and put my supporting libraries there. This is what it looks like:

```
<configuration>
  [](...)
  <runtime>
    [](...)
    <assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1">
      <probing privatePath="lib\core;packs\md.core" />
      [](...)
    </assemblyBinding>
  </runtime>
</configuration>
```

This also means my packs won't deliver these libraries with them. I'm improving these libraries as persistent as possible so old API's should stay the same while up to date packs can be guaranteed to use new API's.

During this process I also got rid of the 100 .NET core System.*.dll's you might have noticed them recently, that was just the result of some misunderstanding

So if you're using them, install or keep installing my packs from https://vvvvpm.github.io