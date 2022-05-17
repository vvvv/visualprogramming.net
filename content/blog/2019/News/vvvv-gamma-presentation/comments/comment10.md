---
user: "tonfilm"
created: "1555784505"
---

@domj for xenko, assets are just assets. so the question left is how to tell the system whats available, and this is very well possible at runtime (xenko's game studio is a game where assets get added while it's running). so no worries about that.

but let's compare referencing files by path to using an asset manager/compiler in a general way. we already though a lot about that and it's not an easy topic because there are many things to consider that are not clear at first.

of course we all want that easy drag'n'drop behavior for textures, models and so on for sketches and beginner workshops. that's clear and we will implement it.

however, for bigger projects with tons of assets that's a tedious workflow, especially when things need to change during development. we all know the struggle from vvvv beta.

referencing random files from your hard drive will make an application (at first) only run on your machine. so you need to be quite organized in the first place to have everything set up with relative paths. you also need to take care of copying the assets over to another machine and there is no system that helps you to identify missing assets. if you move files, exchange files or you rename files you need to go to every place in your patch and fix the file references, this can become a major pain (unless you develop your own content management system).

an asset manager/compiler solves this in an elegant way, it kind of makes the files part of your code/patch. this is a huge advantage because now the system is aware of the assets and error reporting becomes possible. not only that, the asset compiler also takes care of making the files correctly available in the output folder of the executable you will export later.
and instead of referencing assets by path on disc, the asset manager gives you an internal URL for each asset that will not change during development. so you can do whatever changes you want to the files and you only need to tell the changes to the asset manager at a central place.

another thing where xenko's asset manager helps a lot is importing complex assets. think of models that contain skeletons, animations and materials. they need to be prepared so that they are easy to use in the patch. the asset manager let's you for example assign skeletons and animations, let's you rename the elements and set properties like color space, compression and other 'static' things that are otherwise tedious to do in a patch.

so the optimal way is to have xenko's asset manager working at runtime and then also use it when exporting an executable. that's what we are aiming for, but it still needs some development from our side. on the other hand, i think the import asset by file path will be there quite soon.

that leaves the dynamic assets you mentioned. i assume that you mean files that change after you exported an executable. for them you can only go the relative file path way or have a file dialog built into your application to select them. there is no restriction that allows only one way of working.


