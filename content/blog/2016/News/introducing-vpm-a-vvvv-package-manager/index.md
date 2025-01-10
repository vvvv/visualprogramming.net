---
categories: "News"
author: "microdee"
date: "2016-05-27"
title: "Introducing vpm: A vvvv package manager"
slug: "introducing-vpm-a-vvvv-package-manager"
description: ""
imported: "true"
thumb: "box-01.png"
---


![](box-01.png)

Hello vvvvellas!
Remember the magnificent Packs folder where you can shove stuff in, downloaded from the contributions or from github and awesomeness will happen in vvvv? Only problem with it if a pack requires another you have to dig that up from contribs as well (in case the pack developer didn't include a link already) (most common examples are packs depending on DX11). Or worse if a pack gets breaking update and packs depending on it doesn't get updated with it you might download a wrong version. And to make things worse what if a pack is depending on not 1, not 2, but 5 or more other packs? Good luck hunting them all from contribs/github.

In VVVV community most of the time if a contribution used some parts from an other pack the developer would just include that part in their own contribution. However this leads to node duplicates if someone actually using that another pack too or in case of .NET libraries it can cause "Assembly is already loaded from another location" exceptions.

In other regular software/environment this situation is solved by a package manager like npm for node.js, NuGet for .NET development or apt-get for Ubuntu. And now vvvv can go into this list too. Ladies and Gentlemen behold: VPM and its incredibly boring name.

{{< youtube "HtHyucsC0cU" >}}
So what we've just seen there? One of my packs called mp.dx (wrapping some rendering related utility nodes) depends on the DX11 pack and mp.essentials which also depends on vvvv-Messages + vvvv-Patchbox. vpm reads the mp.dx.vpack (an XML formatted pack configuration file) which contains path to its content and its dependencies, also the installation script. vpm fetches all sources recursively and then execute the installation scripts for all collected packs. An exmple .vpack file looks like this (for mp.dx):

```
<vpack>
  <meta>
    <name>mp.dx</name>
    <source>https://github.com/microdee/mp.dx.git</source>
    <author>microdee</author>
    <dependencies>
      <dependency>
        <name>mp.essentials</name>
        <source>https://github.com/microdee/mp.essentials.git</source>
      </dependency>
      <dependency>
        <name>mp.fxh</name>
        <source>https://github.com/microdee/mp.fxh.git</source>
      </dependency>
      <dependency>
        <name>dx11-vvvv</name>
        <source>https://raw.githubusercontent.com/microdee/vpm/master/vpdb/vux/dx11-vvvv/github.master.csx</source>
        <aliases>dx11, vvvv-dx11</aliases>
      </dependency>
    </dependencies>
  </meta>
  <install>
    CopyDir(
        Pack.TempDir,
        VVVV.Dir + "\\packs\\" + Pack.Name,
        ignore: new string[]() {"src", ".git*"}
    );
  </install>
</vpack>
```

The installation script's language is the C# scripting dialect (dubbed Roslyn or CSX) and vpm already provides some common helper functions and environment variables to ease writing these scripts. Like Copy, Download, Extract, GitClone and BuildSolution.
Notice DX11, Messages and Patchbox doesn't have a vpack specification but vpm is still able to fetch and compile/extract them. The reason for this is if a dependency doesn't have a vpack specification the developer can still write a little .csx script file for it stored in an online location. Like the vpdb folder in vpm's github repo. An example script looks like this (for Messages):

```
GitClone("https://github.com/microdee/vvvv-Message.git", Pack.TempDir);

BuildSolution(2013, Pack.TempDir + "\\src\\vvvv-Message.sln", "Release|" + VVVV.Architecture, true);

CopyDir(
    Pack.TempDir + "\\build\\" + VVVV.Architecture + "\\Release",
    VVVV.Dir + "\\packs\\vvvv-Message"
);
CopyDir(
    Pack.TempDir + "\\build\\AnyCPU\\Release",
    VVVV.Dir + "\\packs\\vvvv-Message"
);
```

Note the "true" at the end of BuildSolution indicates automatic restoring of nuget packages.

Also note that I ditched mcropack for a while now and turned it into this weird network of smaller packs which are more fitted to a package manager like this. The entire thing is called md.ecosystem now which also includes VObjects, Leappack and will include Emeshe if I make it work again. Every pack in md.ecosystem (except Emeshe) is suited with a .vpack and for testing I'll also include them here. For any brave pack developers out there come and work together on improving this concept and finally put an end to the manual contribution system. Contact me without hesitation if you have any questions.

**Without further ado here's the github repository for vpm:**
https://github.com/microdee/vpm

**Download it here:**
https://legacy.vvvv.org/contribution/vpm-alpha
(read installation notes)

and here are some packs to test it with right away: (special links which should open vpm automatically)
[mp.essentials](vpms://raw.githubusercontent.com/microdee/mp.essentials/master/p.vpack)
[mp.dx](vpms://raw.githubusercontent.com/microdee/mp.dx/master/p.vpack)
[mp.voocam](vpms://raw.githubusercontent.com/microdee/mp.voocam/master/p.vpack)
[mp.vaudio](vpms://raw.githubusercontent.com/microdee/mp.vaudio/master/p.vpack)
[VObjects](vpms://raw.githubusercontent.com/microdee/VObjects/master/p.vpack)
[Leappack](vpms://raw.githubusercontent.com/microdee/leappack/master/p.vpack)

###  Now time for some questions:

**Why not nuget, chocolately or any other already existing package manager out there?**
Because non of them meets my requirement for a pack. A VVVV pack is a quite obscure thing. It can have any folder structure and any particular way of installing them. That's also why I chose to use a powerful scripting language as a way to install the packs. Also some solutions like nuget require you to run a nuget server which I looked up and I came to the conclusion of no thanks. I rather like a decentralized solution.

**How do I include a specific version of a dependency in my pack?**
You just point to a specific commit on github or a specific archive to download and extract in your script. See limitations about pack versions.

**What are the current limitations?**
Currently versions of installed packs are not taken into account. vpm cannot be sure that the pack in your packs folder is the right version if it's a dependency or is an older version if you install it from a .vpack file. Obviously it's on the todo list but any ideas for implementing this is welcome.
Also note vpm is a command line tool, there's no fancy GUI for selecting from a pack repo and managing dependencies (I guess yet) but for a command line tool it's pretty damn intuitive (thanks to PowerArgs library it's awesome)
vpm won't take VVVV's version into account because I found no way yet to determine version from the VVVV folder or executable, and presumes you have addonpack installed.
Script files have to be online yet as I was lazy. Obviously this will be fixed shortly.

###  Future plans / Roadmap

* Version aware management
* If addonpack is not detected ask to download and install it automatically (would require some metadata from vvvv which would be its perfect complimentary addonpack and where would one get it from)
* License agreement stuff. Will coming soon probably.
* Separating the core into a vpm.core.dll so one can integrate it into their own software or plugin.
* Actual documentation, which is coming very shortly