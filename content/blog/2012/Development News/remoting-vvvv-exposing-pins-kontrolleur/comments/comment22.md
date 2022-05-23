---
user: "joreg"
created: "1387214157"
---

1) thats just a user-string without functionality attached. but can be used by plugin-writers to read its content and to stuff with it. like e.g. for exposed pins you could specify a subtype and then in your interface react to that. 

2) well for color and enum you just set them strings representing their data (ie. as saved in the .v4p)

3) that is the idea: reflect manual changes in the patch back to a remoting device. if the value comes from remote i don't want it to be sent back to it. if syncing multiple remoting devices is what you're looking for than i am afraid this is not handled, but should only be a matter of reworking Server (VVVV). 


