---
user: "Elias"
created: "1386690393"
---

in general a c++ project can depend on very large third party libraries, which you would not put into your own version control system (like git) - you would need to install and compile them on your own system. and compiling them in turn requires your machine to meet all the build dependencies of that library etc. - that's why we didn't go into any details on building the AddonpackCPP solution.

regarding plugin integration in the addonpack:
it might sound to you like a mess, but there're reasons why it's done that way. the addonpack contains ~100 projects, in the past all these projects where setup in a subtle different way. changing one build parameter for all of them was a huge undertaking. in the setup now, all of those projects inherit from the same base project. that's a wonderful feature supported by msbuild (the tool that actually builds *.-proj files) to simplify the handling of large solutions like ours but sadly all known IDEs like vs or sd don't support it - that's why we need a text editor at that point.
