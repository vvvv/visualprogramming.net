---
categories: "News"
author: "joreg"
date: "2019-12-19"
title: "vvvv gamma licensing /2"
slug: "vvvv-gamma-licensing-2"
description: ""
imported: "true"
---


{{< box >}}
Note:
This is an updated revision of the blog post we've [previously published](/blog/2019/vvvv-gamma-licensing), incorporating some more user feedback. Many thanks to those who listened and engaged in a discussion with us!

A summary of the main changes in respect to the previous blog post:
1) Indie is now up to 50k€ revenue
2) We removed the idea of a product license, meaning you don't need to license devices that run an executable exported from vvvv!
3) There are now only 2 types of licenses that are needed to run vvvv itself: Developer and Device (See below for details)
4) We simplified monthly payment
{{< /box >}}

Helo everyone,

We recently released a new preview of [vvvv gamma, including executable export](/blog/2020/vvvv-gamma-2019.2-preview). This makes it feature-complete for our first official release in early 2020. We're now only ironing out bugs and tweaking the help/onboarding experience a bit further. So what you see now is what you'll get, when you buy a license to use it commercially. Therefore now is the time to inform you about the licensing options we have planned for it. Note: This does not mention any discounts that we're still planning to apply for early adopters. 

Trust me, when I tell you that this is the most rewritten blog-post we ever published. Creating a  suitable licensing model seems far more complex than creating the software itself. 

## Continuing the T.R.U.S.T model
Foremost it is important for us to keep our (pattern pending) T.R.U.S.T model, which means: 
{{< box >}}
- No copy-protection
- No feature limitations
- No mandatory registration
- We trust you to declare your commercial use of vvvv correctly. {{< /box >}}

That's the world we want to live in and we hope you too! We don't believe in any form of copy-protection or artificial feature limitations that usually only restrict honest users. Others will always find a way around such restrictions and thus not be bothered anyway. We're all grown-ups here. If vvvv helps you make a living, then help us make a living by providing vvvv for you. How simple is that?!

## Education must be free
Same as above, this is what we believe in. In the end, everything always comes down to education and equal access to it. We don't want to be responsible for anyone to not have the pleasure of learning vvvv.

There are commercial educational institutions that could make us a lot of money indeed. But also we're smart businessmen and know how to cash in on the free drugs we hand out now, later.

Further, it is in the interest of any professional user of vvvv to quasi support the free educational use as this keeps the flow of new talents steady. WinWinWin.

## Gamma over beta
So why not simply keep the existing licensing model? Indeed, to make this clear: The licensing for vvvv beta will not change! As long as you're not interested in vvvv gamma, everything stays exactly the same for you (except you're missing out quite a bit! Just sayin...).

But then, regarding vvvv gamma, there are a couple of reasons to adapt the licensing model:
* The vvvv beta licensing model is simple to explain, but just does not fit well to different use-cases. We've heard of people not using vvvv for certain smaller tasks because they didn't justify a whole license
* With its possibility to export executables, vvvv gamma becomes a different type of product. It allows you to distribute and run your projects as self-contained programs without the need to install and run vvvv on every machine. Like this, vvvv becomes closer to more traditional development environments where it makes sense to charge per developer seat rather than per executable that was created with it
* By still offering the edit-while-running workflow, vvvv gamma at the same time stays the same product and needs to keep existing licensing options
* Too often we heard the phrase "I told the client to buy the license" as an excuse and even partly as a complaint that it would be our fault that we don't have means (dongle, ...) for the client to understand they need a license. But this was never our intention. We're doing business with you, not your clients!

So bottom line up front: vvvv gamma is more and therefore requires a more defined licensing model. 

## Types of vvvv gamma licenses
We'll want you to declare your use of vvvv gamma using the following options:

<!--{SPLIT()}-->

### Free Use
* Non-commercial use
* Evaluation purposes
* FOSS development
* Contribution development
* Student projects
* Hobby projects
* Educational Institutions when teaching with vvvv
<!--~~~-->
### Developer License
* Per developer seat when working on commercial projects
* Export and sell executables without extra charge
* To be used by a single developer on 2 devices in parallel during development
* If more devices are required during development, extra Device Licenses are needed
<!--~~~-->
### Device License
* Development: Needed per device or virtual machine running the development environment vvvv that is not covered by a Developer License
* Deployment: Needed per device or virtual machine running the development environment vvvv
<!--{SPLIT}-->

## Pricing per size of wallet
Another thing we wanted to improve over the beta licensing model is the fact that we understand that vvvv is used in quite diverse scenarios regarding the financing that is behind them. To accommodate all of those on an individual basis is not really feasible. But at least we thought we can add an option on either end of the default "professional" user. So depending on who pays for a license, there will be different prices:

![](pricing14.png) 

## Glossary
* SME: [Small and medium-sized enterprises](https://en.wikipedia.org/wiki/Small_and_medium-sized_enterprises)
* NPO: [Nonprofit Organization](https://en.wikipedia.org/wiki/Nonprofit_organization)
* FOSS: [Free and open-source software](https://en.wikipedia.org/wiki/Free_and_open-source_software)

## Subscriptions
Subscriptions are optional and will be available for both yearly and monthly options. If you sign up for a yearly subscription, we thank you for that with a 30% discount from the second year on. Otherwise, subscriptions simply offer the convenience that you don't have to think about the validity of your license all the time. 

Of course you can cancel a subscription at any time and if you had a yearly subscription (or a monthly subscription for more than 12 months) you then own the last version of vvvv that was available within your subscription period and you can keep using that version commercially indefinitely. A subscription that was canceled cannot be continued/updated at a later point. This means if you need an update to your license after you cancel the subscription you need to buy a full new license or start a new subscription.

## Conclusion
Accommodating the various requirements of all types of users and use-cases is a tricky task. This paired with trying not to completely disregard the pricing politics of "the competition" but also adding our own ideas and still balancing an economically viable solution didn't make it any easier. We still hope that we found a way that can be sustainable for all of us.

We are aware that the above may leave some questions open and we are ready to further refine the fine print and add examples to make it easier for everyone to declare their licenses. Please help us do so by asking your questions in the comments below, so we can understand where we need to get more specific.

---

## FAQ
**If my installation/show is running from an executable, do I need a Device License in addition to my Developer License?**
No. 

**Can I use my Developer license to run vvvv on a device in a museum?**
No, the two Device licenses your Developer license covers can only be used during development. Device licenses for deployment need to be acquired separately.

**My project (a server and 5 clients) is running at a trade show for one week. I don't want to run them as executables because I need to be able to change things on the fly during the week. I am one developer and it takes me 2 months to develop the project. What licensing applies?**
For deployment you'll need 6 monthly device licenses to cover the 6 devices running vvvv for one week. For the 2 month development time you have 2 PCs covered by your developer license. Assuming you're only using exactly the 6 PCs during development that means you'll need 4 additional device licenses for the 2 months of development. 

**We're two developers working on an installation distributed over 10 machines that will eventually only run an executable. But for development, we have vvvv running on our laptops and all 10 machines for convenient debugging.**
You need two developer licenses, which cover 4 running instances of vvvv. You therefore need 6 additional device licenses for the time of development.

**My commercial installation is running with a Device License. Does the maintainer of the installation need a Developer License?** 
Yes, to keep things unambiguous, every developer needs to be covered by a development license when working on or maintaining a commercial vvvv project.

**Can a single Developer License be shared by multiple developers?**
Yes, but only as long as they are not working at the same time. Even though a single developer license covers two Device licenses it only covers one developer at a time!

**I am a freelancer with less than 50k € gross annual revenue. Do I still have to buy a Professional license?**
The key to your decision here is whether you consider yourself a professional freelancer. If you are working mostly for professional companies who clearly have to buy professional licenses, then you also buy a professional license or make sure the company covers you. You don't want to be just a cheaper option for those companies by buying an indy license and then working professionally for them.

**Aren't software subscriptions a bad thing?**
Not if done right, meaning that you can keep the last version once you stop paying if paid for some time (see above). And remember: they are optional.