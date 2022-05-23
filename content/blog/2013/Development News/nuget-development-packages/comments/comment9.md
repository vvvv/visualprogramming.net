---
user: "microdee"
created: "1448480254"
---

for vvvv we could build up a method using github api that however would require you to store binaries on github. so you would still need to search for a term and the vvvv package manager would only list repos with a specific file in it like ".v4pack" that would look something like
```
{
    "PackageName" : "something",
    "vvvversion" : "50 alpha 34.101",
    "Addonpack" : true,
    "Dependencies" : [
        "/* url to a git repo */"
    ],
    "Folder" : [
        {
            "Source" : "/folder/on/github", 
            "Destination" : "%VVVV%/packs"
        }
    ],
    "File" : [
        {
            "Source" : "/folder/on/github/file.txt", 
            "Destination" : "%VVVV%/packs/something/file.txt"
        }
    ],
    "ShellExecute" : "some command"
}
```
So vvvv would clone git temporarily copy above marked files to their place then delete the temporary clone. Also there can be a shellexecute if the pack requires any drivers or compilation.
It would be also nice to have a primitive api for the vvvv site so that vvvversion there could do more than just warn you about needed version of vvvv and addonpack
hmm i will actually start this today
