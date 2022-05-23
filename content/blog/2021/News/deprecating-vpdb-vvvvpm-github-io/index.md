---
categories: "News"
author: "microdee"
date: "2021-05-07"
title: "Deprecating VPDB (vvvvpm.github.io)"
slug: "deprecating-vpdb-(vvvvpm.github.io)"
description: ""
imported: "true"
---


Hi all!

For the 10 people still using VPM these days, today VPDB (or vvvvpm.github.io) the frontend for installing packs via VPM will probably stop working as Github stops supporting the application authentication method that site was using. Unfortunately I don't have time nor incentive to maintain that site anymore. VPM doesn't require this site to work, however it was a key part of installing packs with it. Direct links using the vpm:// or vpms:// URI schemes still work, for example on contribution pages. vpack files uploaded to VPDB are actually safe and sound at https://github.com/vvvvpm/vpdb repository.

In case you desperately need to install something from that repo, you can use the raw content URL of a file from the repo and just replace the http part with vpm. For example

    https://raw.githubusercontent.com/vvvvpm/vpdb/master/devvvvs/vvvv/latestalpha_auto.vpack

becomes

    vpms://raw.githubusercontent.com/vvvvpm/vpdb/master/devvvvs/vvvv/latestalpha_auto.vpack

Or you can clone that repo and just use VPM file associations on .vpack files.
Sorry for the inconveniences and god-speed!