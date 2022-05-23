---
user: "Elias"
created: "1349972168"
---

thank you for this great report herbst. new build is coming up. check back in about 20 minutes and test latest unicorn build.
i've also added a "Selected Auto Encoding" output pin, which shows you the encoding selected by the system if input encoding is set to auto.

the issues you describe regarding the xml nodes wasn't really a bug. in case of utf-8 the reader "thought" there must be a BOM and simply removed the first 3 bytes from the string. that was wrong of course and should be fixed now.
