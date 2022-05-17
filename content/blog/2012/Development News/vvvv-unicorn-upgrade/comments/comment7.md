---
user: "herbst"
created: "1349960345"
---

Tested it on lots of strings (> 50000 in a spread, different languages, including french). Autodetect encoding didn't work (but they are utf8 without BOM, which is hard - but Notepad++ gets it right by heuristics). But after I selected utf8, all IOBoxes with strings showed the french characters correct (had to manually select encoding for them before).

BUT: just found a **bug**, I think. Reading in an XML file with encoding set to utf8 in the Reader, the XML nodes do not work anymore. If I set it to auto, they do, but comparing the strings extracted from the XML (now in cp1252 or so) with the lot of 50k utf8 strings fails for all the french characters. Which means that to get it to work again I had to switch all Readers to Auto => all the comparing works, but the string IOBoxes do not show french characters correctly, as everything isn't utf8 internally.

So, UTF8 works great, but breaks the newly-introduced XML nodes. At least with UF8 without BOM.
I made two patches, one in 28-2 and nearly the same in 28-3-unicorn, so see for yourself.

[](http://dl.dropbox.com/u/36620736/WEB/VVVV/Encoding_XML_Bug.7z)

And a request: please show what encoding Reader thought the file was. Makes debugging easier, I think, as "auto" does not work for everything (e.g. no BOM, which is the official standard for utf8 as far as I know).
