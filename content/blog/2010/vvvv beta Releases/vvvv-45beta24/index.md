---
categories: "vvvv beta Releases"
author: "joreg"
date: "2010-09-16"
title: "vvvv_45beta24"
slug: "vvvv45beta24"
description: ""
release: 
    major: "45"
    minor: "24"
    date: "2010-09-15"
    app_file: "sites/default/files/vvvv_45beta24.zip"
imported: "true"
thumb: "45beta24.png"
---


![45beta24](45beta24.png) 

this one goes out to the lovvvvers...

beta24 is quite featurepacked and therefore might not be for everyone because as you know behind every great feature stands a big fat bug. please take a seat and some time to read the following:

in order to make the news easier to digest they are presented here in two bits:
* To the Patcher
* To the Coder <- this is where people interested in [processing.org](http://processing.org) have also been interested in
<!--break-->
## To the Patcher

* beta24 is the first version that requires **.net3.5 SP1** to be installed. win7 pcs seem to have that by default, on winXP you best get it via windows update. while SlimDX is no longer needed you still need the latest **native DirectX (june 2010)** udpate. (see the [Downloads](https://legacy.vvvv.org/downloads) for a link).
* you got a new and hopefully more useful **WindowSwitcher**. check CTRL+TAB while you have some windows open. horray.
* shortcuts like ALT+1,2,3 and CTRL+1,2,3,W ... now also work on all plugin windows like the Timeliner and the new CodeEditor.
* screenshots taken with CTRL+1,2 are now in .png quality (was some random .jpg quality) and CTRL+3 opens **Kommunikator** that allows you to preview, crop and upload images to vvvv.org. if you provide your login you can even add images to the pool of site-headers. looking forward to your shots.
* start a link from a pin and end it with middleclick to create a suitable IOBox.
* doubleclick to create a new node now shows a new **NodeBrowser** which should allow you to find nodes more reliably. just start typing tags separated by space and you'll see. toggle TAB switch between 'or'-ing or 'and'-ing your tags. type Shift+M,P,F,X,D or . to filter out only modules, plugins, freeframes, effects, dynamic nodes or local files. note also that typing . to access local files is no longer necessary, they are all just there. and as before doubleclick followed by a rightclick opens a category-sorted treeview. in both views rightlick a node to show its helppatch or middleclick it to open its online reference page. and just because it is now possible..CTRL+N opens the same nodebrowser in a separate window from which you can dragdrop nodes onto a patch
* planned since beta1 and finally realized. after blue nodes (for boygrouping) vvvv now features **red nodes**. where red is for danger and denoting a missing node. i.e. if you see a red node in your patch you're missing an addon. find it, put it in place and the node should turn gray..
* as a minor gui change you'll notice some new **node icons**. all nodes with icons can be rightclicked to show more. modules and patches show a triple-node icon telling you that there are nodes inside. effects and dynamic nodes show a code icon telling you there is code inside and nodes like the renderers or the timeliner show a little icon telling you they have a window attached.
* CTRL+I won't open an endless number of Inspektors anymore, instead it will always bring you up the same. if you still need more use **SHIFT+CTRL+I**. the same applies to CTRL+N and SHIFT+CTRL+N and other similar shortcuts
* ah and to the **kalles** among you: you may now organize subfolders in \plugins, \effects, ... to your personal preference. the directory structure is now ignored.

that should be it. for the patcher. those still not confused may want to read on..

## To the Coders

in order to show you this is a big one we gave vvvvs main version number another random jump from 40 to 45. remember, the last jump from 33 to 40 was with beta16 when with the PluginInterfaces V1 we introduced a way for everyone to write their own nodes. still you needed an external IDE to code and compile your nodes. 

with beta24 you can now edit and compile nodes within vvvvs new built in **CodeEditor** (based on the fantastic opensource [SharpDevelop IDE](http://www.sharpdevelop.net/opensource/sd/)). while that doesn't replace a fully blown IDE with a debugger (anybody missed that with processing? hehe, jaaa not those that use eclipse then anyway) it feels quite comfortable already with codecompletion, methodinsight and CTRL+click to jump to definitions. of course the same editor is now used for effects. 

but not only does beta24 offer the convenience of a built-in editor it also comes with the greatly simplified and improved **PluginInterfaces V2**. writing a node now takes typicall 40% less code and feels much more intuitive. the most important new feature being that inputs and outputs are now generically typed via ISpread<T> (which specifies a pin of type T). thus implementing a set of nodes that handles a custom datatype is now easy as working with primitive types like ISpread<double>. for those curious...yes it is also possible to create a pin like ISpread<ISpread<T>>...think BinSizes. 
 
all the gory details are documented at: <http://legacy.vvvv.org/pluginspecs>.

anyway it is probably best to start from the templates. so in order to code your own node what you do now is: doubleclick (in a patch to create a new node) type "template" to make all the templates show up, choose one and press CTRL+Enter or CTRL+Click. this brings up the clone dialog where you have to give your node a unique name. click the *Clone* button to copy the template (for now only to the \plugins directory) and create an instance of it. on the node you see the little code-icon telling you that with a right-click on that node you can modify its code. edit something and press CTRL+S to save and compile. you'll hardly notice the compilation took place and can immediately see your results if you didn't introduce an error in the code which you would be informed of. it is hard to put magic into words, please try for yourselves...

looking forward to your feedback.
big thanks to the alpha testers.

still more to come,
yours,
devvvvs.