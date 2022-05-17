---
user: "Elias"
created: "1530030647"
---

@seltzdesign 
Good point, we changed the file node used by all the file writer nodes so it creates the directory if it doesn't exist yet and a new file is requested. That's indeed the much better default. We didn't add an extra pin for it though in order to avoid cluttering the nodes with rarely used pins - well at least as long as not proven otherwise.

@milo
The node set to work with System.IO.Stream will be updated/added at a later point. And yes the try region and error handling in general is a big topic where we still have to deliver. Once we get to a point where we say it's nice to work with a blog post / documentation will follow of course. Simply wasn't the focus for the upcoming release.
