---
user: "velcrome"
created: "1582707871"
---

chances are that this will not affect anyone else at this point in time. however, if you do have to upgrade, plan in a little more time.

as the first post stated, only csproj files adhering to the new sdk-style will work. this is 100% true. 
however, the upgrade process is definitely not an easy one, like fixing the first line and being done.
after manual tinkering the file for a few hours with little effect but frustration, I ended up making a new folder, creating a new .net standard 2.0 project and reimporting all used files, nugets, and other dependencies.

because it is missing in the original post: as of vvvv beta39 you have to use Xenko.Core.Mathematics 3.1.0.1-beta02-0741. it is available only from nuget.org, vvvv.org seems to have rolled over it long ago.

the good thing that came from it: the csproj is now only a tenth of its former size, and no packages.config at all.
