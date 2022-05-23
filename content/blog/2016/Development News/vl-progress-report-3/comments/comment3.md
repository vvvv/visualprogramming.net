---
user: "gregsn"
created: "1479604784"
---

hey adel,
it's a valid question and even a pretty good one!
Currently, sorrily, we don't even have a switch over the cases of an enumeration. So there's quite some work ahead in regards of pattern matching.

However, what we do have is type matching - not really built in as a language feature but still: see the TypeSwitches.

Here is how to work with them:
* create a TypeSwitch as a region
* feed some object to the Input pin
* expect some data type inside the region. This is the easiest part. Just connect anything inside the region to the "Arg" pin. This will tell the system what type of data you expect.
* When the the provided data is of the type that you need, you'll get called back and you may do some calculations and feed data to the output. Otherwise the default gets piped to the output.

So, in a way this is pattern matching for sub types. 

There are different version of the TypeSwitch to check for different data types.
