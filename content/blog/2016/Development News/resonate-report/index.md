---
categories: "Development News"
author: "gregsn"
date: "2016-04-23"
title: "Resonate Report"
slug: "resonate-report"
description: ""
imported: "true"
---


##  The Workshop
We had a 3 day [VL workshop at resonate](http://resonate.io/2016/education/next-generation-visual-programming-with-vl/) (belgrade) and this was just plain fun! In fact when thinking about that event some weeks ago i was still quite frightened by the idea of talking VL for 3 days straight. VL is still in an alpha phase and therefore sometimes harder to explain than you would want to. Of course it's less didactic if you need to also teach to work around glitches...

But then, just in time before the workshop, we remembered what learning a new system is about. It is about understanding how to apply it for "real world problems", so we made up a "problem" which we worked on as a team.

Our problem we named VLOsmos, after the game that we wanted to clone: Osmos.
http://www.osmos-game.com/
The goal of the game is to get to be the biggest bubble. You get bigger by eating smaller bubbles. But beware of getting eaten by a bigger one. To prevent this you sometimes need to flee, by accelerating into a direction. But alas by accelerating you loose mass, very much the same way a rocket does. You emit small bubbles... So you get smaller by changing direction, but you have the initiative which helps you get bigger earlier than others...

![VLorkshop](composition%20Kop_r.jpg) 

So our idea was that we actually want to work, and not do frontal teaching so much of the time. So we split up into three teams. 
Every team had a helping hand (there were Elias, Dominik and me) and each team got one VL document to work on. We split up the work like this:
* Controller
* Game Logic
* Display

#### Controller
The controller team was responsible to hand over controller data to the game logic team. They also got the world state of the last frame from the game logic department. Here is what they did: They allowed to slip into the next free bubble and control it via mouse. I also saw this working with two mice (or track pad and mouse). But they also allowed to create several A.I. instances that slip into one of the next free bubbles and controlled them based upon the bubble world around the respective controlled bubble: try to accelerate into the direction of smaller bubbles (if those are not too small) and also run away from bigger ones...

#### Game Logic
The game logic team did the core logic of the game:
* Emit new small bubbles, loose weight and in turn accelerate (all based upon control data for the respective bubbles, therefore independent of who is generating this control data)
* Eat, grow, shrink in a fair manner
* Update the world in a frame based manner that also is fps aware. Output a description of the world for display and controller team.

#### Display
The display team was there to make it look nice. They got a description of the world with all bubbles and all currently happening collisions. For each collision a new collision effect got created, to have a bit of VL typical lifetime management in there. But in the end the display team also had to get the data back into vvvv to do the rendering here. Luckily this was obvious from the beginning and we found a way so that everybody got her/his amount of VL treatment.

#### All in all
We did not only work on a real project, but also had a try on how to synchronize the work of typically ten people, all working on the programming department of that project.
So we solved that by separating the job into those 3 main blocks and designed the interfaces between them = the types of data that flows between. In VL terms we created the data types "World" and "ControlData", which we put into a core VL document that every other VL document could reference.
After sketching the rough game structure and the interfaces in between each team had its own VL and vvvv document. We synchronized via a public git repository: https://github.com/gregsn/ResonateVLWorkshop

All in all we basically had a proof of concept regarding lifetime management and object oriented dataflow programming with VL embedded in a vvvv project.


##  The lecture
was about visual programming, its roots, sister projects, push and pull based dataflow, synchrnonous and asynchronous dataflow, object orientation, control flow via regions within a strict language and the playful culture and work environment where vvvv got created.
We also had a look onto the game that we created. The presentation was patched in vvvv for easily embedding video playback and game.


https://www.youtube.com/watch?v=NLyIYmPfCps
http://meso.net/download/filename/49/ok_spektral_meso_email.pdf
![](IMG_2222.JPG) 


