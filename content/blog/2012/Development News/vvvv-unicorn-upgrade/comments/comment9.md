---
user: "herbst"
created: "1350309148"
---

Great, the XML reading is working now with the latest unicorn build.

One thing I'm definitely missing though: any way to tell the writer (or some other text-out-node node) "don't touch anything, leave every single bit as it was". Or, when does that happen? If I explicitly set the writer to utf8, as that's the internal format? As I understand, it crushes everything it does not understand as utf8 to some "unknown" character.

To clarify: what if I want to read some **binary** file with the Reader, and write it back to disk after some operations? Or, much more probable, want to fetch some images from the web and save them? Or fetch some binary data and save it? Reader needs a "raw" encoding, or an "Encode" toggle.

I attached two new scenes to test - one reads & writes an image, the other one fetches an image from the web. I wasn't able to save either one back to disk in the correct format, it was always garbled (and definitely no image anymore).

http://dl.dropbox.com/u/36620736/WEB/VVVV/Encoding_images.7z

Please do not assume that everyone uses Reader & Writer for text files only :).

**Edit:**
I think selecting the encoding at input/output and not where the content is used/generated may be a design flaw. In current beta, you read a file, you write a file, and every single byte simply goes through. If you want some specific encoding, you tell the IOBox what you want, and you can switch between encodings with Convert before you send it to disk, to web or to some device. Power where power is needed. And now, you are forced to select the encoding at the in and outs and hope that nothing gets destroyed inbetween - what does + (String) do internally now, for example? Does it convert every character to utf8? What if I want to construct commands for devices, byte by byte, as possible before? What if I want to use ord and char? And so on, and so on... I hope you will answer all of these questions before finally releasing, because it WILL cause a lot of confusion if strings do not behave like "appending bytes to some other bytes" anymore.
