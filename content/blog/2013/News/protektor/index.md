---
categories: "News"
author: "joreg"
date: "2013-11-11"
title: "Protektor ++"
slug: "protektor-plusplus"
description: ""
imported: "true"
thumb: "dongle.png"
---


dear commercial users of vvvv,

vvvv 45beta31.2 brings an update to vvvv's recently introduced dongle protection mechanism fixing a problem that was reported earlier. As we've been kindly informed by {{< user "vux" >}} our initial release had a flaw that let someone with access to the dongle (for a specific project) and knowledge of the vvvv-api dump out un-encrypted patches (of that specific project) since the api simply has functionality for this. This was possible because vvvv didn't check if any of the plugins it loaded was tampered with. 

::
![](dongle.png)
*для Вашего большой бизнеса*
::

With this release the protection mechanism now prohibits such attacks by making sure only plugins are being loaded that were also there when the project was encrypted. 

### Special Offer
If you order until 31 12 2013 dongles 1-3 will only be 200€ each (Further volume discounts will still be applied off the original 250€).

---

For further information see: [Protektor](https://betadocs.vvvv.org/using-vvvv/protektor.html)
For pricing and ordering see: [Licensing](https://store.vvvv.org/)

