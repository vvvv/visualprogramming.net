---
categories: "News"
author: "sebescudie"
date: "2020-09-25"
title: "Publishing your VL nugets with Github Actions"
slug: "publishing-your-vl-nugets-with-github-actions"
description: ""
imported: "true"
thumb: "vs_icon.png"
---


bonjourbonjour,

Following tests from a few months ago regarding [publishing your shiny VL nugets with Github Actions](https://discourse.vvvv.org/t/pushing-plugin-to-nuget-gallery-with-github-actions/18442), we now have a dedicated action ready to be used!

##  Nuget what?
For more informations on nugets, please refer to [this section](https://thegraybook.vvvv.org/reference/libraries/creating.html?q=nuget) of the Gray Book.

##  Github what?
Github actions are small scripts with a specific purpose, allowing you to automate tasks on your repos. They are actually the building blocks of what's called a workflow : you chain several actions one after the other in your own small script, and decide under which condition the workflow is triggered (a new commit on *master*, a new tag, etc).

There are already tons of actions allowing you to do all sorts of things from creating issues to running unit tests, and even make phone calls with a predefined text!

##  The PublishVLNuget action
This action allows you to easily do the following tasks :
 
* Build your Visual Studio solution, if your plugin has one
* Download a package icon from an external url if you don't want to commit it to your repos every time
* Pack your nuget either using a  nuspec or a  csproj file
* Publish it to nuget.org (or any other feed)

In other words, you just have to push your code/patches and nuspec to github, and the script takes care of bringing it to nuget.org for you.

You can find the list of input parameters the action expects [here](https://github.com/vvvv/PublishVLNuget#inputs).

##  How do I setup a workflow?
To get started with workflows, head over to the [Github documentation](https://docs.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow).

##  Use cases
The action can adapt to many different scenarios. Let's cover three cases so you get an idea of how the action works, and how to adapt it to your needs.

###  My plugin does not have a visual studio solution
So your plugin solely consists of one (or many) VL documents and some help patches, plus your *nuspec* file that describes how your package will be structured.

```
 (...) 
     - name: Publish VL Nuget
       uses: vvvv/PublishVLNuget@1.0.28
       with:
         nuspec: deployment/VL.MyPlugin.nuspec
         nuget-key: ${{ secrets.NUGET_KEY }}
```

Here, we are just using the *nuspec* and *nuget-key* inputs of the action.

###  My project has a Visual Studio solution and no nuspec file
Your *csproj* file [can also describe how your nuget will be packed](https://docs.microsoft.com/en-us/nuget/create-packages/creating-a-package-msbuild#set-properties). In that case, simply omit the  *nuspec* input. Note that if you provide a *nuspec* file anyway, it will take priority over your  *csproj*.

###  I want to push to another nuget feed
By default, the action will push your package to nuget.org. You can simply use the *nuget-feed* input to push to a different feed.

##  Regarding external icons
###  I want to use an external icon, and my plugin has a nuspec file
The icon must be downloaded to an existing folder in your repo. We suggest you simply download it to its root :


```
(...)
- name: Publish VL Nuget
    uses: vvvv/PublishVLNuget@1.0.28
    with:
    (...)
    icon-src: https://wwww.url.to/nugeticon.png
    icon-dst: ./nugeticon.png
```


{{< box >}}
Note:
Paths in the workflow file are relative to the root of the repo!
{{< /box >}}

Here, we ask the Github Action to download the icon from our URL and place it at the root of the repo.

Then, in the *file* section, your nuspec file must reference it from where the action will download it (*src* attribute) and place it wherever you like (*target* attribute), making sure *target* matches where the  metadata section expects it.


```
(...)
    <metadata>
        (...)
        <icon>icon\nugeticon.png</icon>
    </metadata>
    <files>
        (...)
        <file src="..\nugeticon.png" target="icon\">
    </files>
(...)
```

{{< box >}}
Note:
Paths in the nuspec file are relative to where the file itself is placed!
{{< /box >}}

###  I want to use an external icon and my plugin does not have a nuspec file
You can setup an icon for your project inside Visual Studio. The tricky part here is that you'll have to specify a path to a file that does not exist yet, since the Action will take care of downloading it later on. This can feel weird since Visual Studio's UI gives your a *Browse* button for you to pick a file. Simply fill the path manually to match the  icon-src property of your workflow file.

For instance, your workflow file would look like this:


```
(...)
- name: Publish VL Nuget
    uses: vvvv/PublishVLNuget@1.0.28
    with:
    csproj: src\Whatever\Whatever.csproj
    icon-src: https://wwww.url.to/nugeticon.png
    icon-dst: ./deployment/nugeticon.png
    nuget-key: ${{ secrets.NUGET_KEY }}
```


and your VS package settings :

![](vs_icon.png) 

Thanks for reading, hope you'll enjoy using this one! If you are stuck or want more precision, don't hesitate to shout in the comments or in the forums.

Cheeeerz