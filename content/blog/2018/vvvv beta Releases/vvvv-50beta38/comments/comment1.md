---
user: "tonfilm"
created: "1542943223"
---

{{< box >}}quote:velcrome:
but the backwards-incompatibility is a shame. especially because I don't get why going from "single-value" to "single-value-or-many-values-or-xml" would stop parsing the old version.

I hope you find a way to mitigate that, maybe provide a converter of some sort. Not being able to upgrade any vl project is a slam in the face.{{< /box >}}

@velcrome it sounds like you think you cannot open your old projects with beta38, but its the other way around: if you save a vl document with the new beta38 you cannot read it anymore with beta37, so all older vl documents open just fine with beta38 and since there is almost no other change it should be a no brainer.

