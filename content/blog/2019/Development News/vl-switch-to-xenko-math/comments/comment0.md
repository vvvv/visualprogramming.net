---
user: "domj"
created: "1566901127"
---

I'm sure this is the right way going forward in preparation for Xenko but it might not be as smooth a transition for old patches as you might think.

The issue I'm having is with Deserialization. I have loads of files with serialized data which also use the SharpDX data types. Now VL has no idea what those types are.

Do I have to find and replace all the references (possibly automated) in the XML files, implement my own serializers or is there some way to add some sort of type alias so that VL would automatically recognize the old types and load them as Xenko types? 

Thanks
