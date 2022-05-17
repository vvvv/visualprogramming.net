---
categories: "Development News"
author: "tonfilm"
date: "2018-12-20"
title: "Using HTC Vive Trackers without Headset"
slug: "using-htc-vive-trackers-without-headset"
description: ""
imported: "true"
---


![](tracker-s01-min_0.png)

This was long requested and it's finally here! Latest VVVV.OpenVR can use vive trackers without HMD (head mounted device). There is a dedicated pose output on the **Poser (OpenVR)** node and you can request the serial numbers of all connected devices.
![](01_Poser_0.PNG)
*Poser node showing off its new pins*
Here is how to get started with high-performance 6DOF positional tracking for as little as $230 bucks. Minimum hardware requirement is one [base station](https://www.vive.com/us/accessory/base-station) and one [tracker](https://www.vive.com/us/vive-tracker). Although two base stations are recommended for much better tracking stability.

Features:
- No HMD required
- Use up to 62 trackers (64 minus base station and the null HMD)
- Trackers can be connected via USB cable or wireless via included USB dongle
- Trackers can be identified by their serial number

In order to get the trackers running without HMD you need to do the following steps:
## 1. Activate the 'null' driver
Find this file on your drive:
```
SteamDirectory\steamapps\common\SteamVR\drivers\null\resources\settings\default.vrsettings
```
    change "enable" to "true".

Then open this file:
```
SteamDirectory\config\steamvr.vrsettings
```
Add the following entries to the "steamvr" section:
    "forcedDriver": "null",
    "activateMultipleDrivers": "true",

SteamDirectory is usually **C:\Program Files (x86)\Steam**.

Also make sure to disable the "SteamVR Home" on startup. Otherwise it will try to render into the null HMD and consume 100% of one CPU core:
![](20_disable%20home_0.PNG)
If SteamVR was running, close and restart it.

## 2. Connect the trackers
When SteamVR restarts, you can connect a tracker or controller without the HMD. Follow these instructions to pair the trackers ("Pair Tracker" is now "Pair Controller"): [Pairing Vive Tracker](https://www.vive.com/eu/support/accessory/category_howto/pairing-vive-tracker.html)

SteamVR should then look similar to this:
![](10_steam_0.PNG)
Note: The red “Not Ready” text can appear occasionally but that should be no problem if you are using the null driver.

## Calibration
If you don't run the calibration process, the first found vive lighthouse base station will be the origin of the tracking space. If you can live with that you need to provide your own calibration matrix in vvvv and multiply it with the pose matrices coming out of the Poser node.

If you have the vive controllers you can run the room setup normally (no need for the HMD to be connected if you use the null driver).

You can also use the tracker as a controller for calibration, but you need to connect a simple circuit to the pogo pins to be able to activate the 'trigger' button during the calibration process.
![](8266751503881043597.png)
More detailed developer info on the pogo pins can be found here: [Vive Tracker For Developers](https://developer.vive.com/us/vive-tracker-for-developer)

You can download the new OpenVR pack here: {{< contribution "vvvv.openvr" "VVVV.OpenVR" >}}
Open the demo patch **02_TrackersOnlyDemo.v4p** in the VVVV.OpenVR\girlpower folder and enjoy tracking!

Big thanks to {{< user "colorsound" >}} and {{< user "u7angel" >}} for pushing.