---
user: "tonfilm"
created: "1530822269"
---

@velcrome it sounds like you want the document patch to reveal the whole document structure to you. this is of course only partly true if you only see top level categories in the document patch. but like this it is organized in the way you will find it in the NodeBrowser, which is a plus for library developers.

as a project patcher you will mostly use Group and sometimes a Category, just to get smaller patches. and since you can define multiple category levels with one category patch you can place all categories flat into the document patch, if that is what you like to see. so just a question of style and personal preference.

for a **document overview** you should use the ProjectExplorer more often (CTRL+J). there you will see how groups and category patches structure your document in a folder like tree structure. you can also use it to navigate via double click and it shows you where nodes are used:

![](10_ProjectExplorer.PNG)

so i think we found a very clean solution for document structuring and sorting nodes into the NodeBrowser. it seems that your critique is mostly about it's flexibility and that it allows to make messy documents. but i think that's always possible, no matter how little options you have.
