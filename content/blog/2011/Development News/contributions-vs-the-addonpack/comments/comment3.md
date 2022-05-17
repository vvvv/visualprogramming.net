---
user: "elliotwoods"
created: "1321607033"
---

my general idea:
#  Resources
We define a resource as a folder. The resource's name (e.g. 'OpenCV') is the name of the folder. That folder contains:
* Plugins
* Templates
* Help
* Modules
* Effects
* Resource.xml (contains author, description, changelog)

By putting the resource's folder into the NodeList search path, then a user can use this resource.

#  For a developer
They've been developing their resource inside a folder locally.

They get to the point they're happy to upload it, and do so using the VVVV interface.

During upload:
* Developer logs in
* If first time resource uploaded, then the resource name is registered on the server
* Each resource's name must be unique (that's its identifier)
* The version number for this upload is incremented (previous versions are automatically kept on the server)
* Each upload has a changelog comment
* Developer can edit some other aspects of Resource.xml in GUI (e.g. credits, usage notes)
* Upload (vvvv zips up the resources folder, stores as a version somewhere on vvvv.org)

#  For a user
NodeBrowser enumerates local and remote (i.e. in NodeContributions) nodes whenever you create a new node.

If you select a remote node, VVVV automagically downloads the dll or v4p, puts it into a folder 'e.g. vvvv\downloaded resources\EmguCV\'
and puts it into your graph (as if you'd selected a local node)

VVVV stores the version number and resource name against the DLL/v4p node in the patch

The NodeBrowser would also provide options for
* Download all missing resources for the loaded graph (i.e. all red nodes)
* Highlighting nodes in the list where updated versions are available / performing those updates automatically

#  Trying this out
i suggest creating this in its most simple sense as a demo to start with (especially since NodeBrowser is already open source / user editable)


On another note. Github works great for source code
but i think for users (e.g. dll's) i think contributions works better for users

##  Further possibilities
* Thumbnails
* Comments / Tips (issues should generally go into github  against the source)
* Alternative repositories (i.e. private). This may be useful for bigger companies who have lots of in-house nodes.
