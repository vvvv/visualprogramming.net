---
user: "Grandchild"
created: "1344932500"
---

Small question, is one supposed to replace the normal lib/nodes/nodelist.xml with the addonpack's or not? Should the two be even concatenated?

/edit:
Judging from the content (each file listing only its packages' nodes) obviously they are supposed to be concatenated. Do I have to do that manually or is there some way of installation that I am missing?
The page [about-the-addonpack](about-the-addonpack) speaks of overwriting any file when asked, but that causes several standard nodes not to be found ( {{< node "Camera (Transform Softimage)" >}} is an example) unless "Opened in Patch".
