---
date: "2023-02-06"
title: "GammaLauncher 5.0"
description: "GammaLauncher reloaded"
categories: "News"
author: "sebescudie"
thumb: "ico.png"
---

Bonjour bonjour,

A new GammaLauncher has just landed! This version was almost entirely rewritten from scratch, and makes use of the tasty VL.ImGUI library and its `Channel` based approach.

![The launcher](launcher.png)

You'll feel right at home : this release actually does more or less the same things as the previous one. But trust me : it does it way better. The focus for this version was to be on par with what we already had, but in a way that will (I hope!) feel more pleasant for users.

Under the hood, things were also starting to be a bit cluttered. The launcher is now three years old (phew!) and some patches in there had never changed ever since. In the past months, I had the chance to experiment and learn lots of cool things about structuring an application, which makes this version way cleaner inside, and gives a solid foundation for new features and updates.

So without further ado, let's have a look at the highlights of this release!

## Installing

It was super boring to unzip and copy new versions of the launcher to your favorite location. A fancy installer will take care of that for you from now on.

![The installer](installer.png)

Which means you can let the launcher live in `Program Files` and forget about it. It'll even show up in your start menu, how cool is that!

Grab it [here](https://github.com/sebescudie/GammaLauncher/releases/tag/5.0.0) and enjoy!

## Configuring

Configuring the launcher was also rather tedious. You'd have to locate the XML config file, tweak it (without breaking it), and then restart the app to see your changes applied. You can now happily change your settings right from the launcher's _Settings_ tab and have your changes applied instantly, no restart needed!

![The settings tab](settings.png)

## Updating

The previous version of the launcher could not display preview builds for the `5.0` branch of vvvv. This is fixed, and you can now also open the change log of recent versions in your browser with just one click.

Regarding updates of the Launcher itself, you'll be able to simply run the installer of its future versions to update it.

## Other little things

- You can now make use of all the [startup arguments described in the Gray Book](https://thegraybook.vvvv.org/reference/hde/commandline-arguments.html#commandline-arguments). Beware that some of them only apply to the `5.0` version of vvvv gamma!
- Hovering those arguments will give you a short info tooltip about what they do
- The updates section tells you how long ago a version was released when hovering it
- The settings let you configure a path for your custom nugets directory
- All the ninja-shortcut that were not documented in the previous versions are now available as clickable entries in the app's menu

## The future

As we saw earlier, this version focused on having a clean base, making the app ready for future improvements. While I'm sure lots of ideas and suggestions will come up in the future, there are two things I'd like to tackle :

- Making the installation even easier with tools like [Chocolatey](https://chocolatey.org/) and/or [WinGet](https://github.com/microsoft/winget-cli)
- Now that we have settings working for real and in real-time, we could imagine having some sort of "Project" tabs where you'd be able to list and start specific patches with specific settings, all from the launcher

Those are the two I have in mind right now, but please don't hesitate to submit your ideas and wishes either in the chat or in the [repo's issues](https://github.com/sebescudie/GammaLauncher/issues)!

And hey, thanks everyone for using the launcher! I'm super happy people find it useful and use it in their daily patching adventures.