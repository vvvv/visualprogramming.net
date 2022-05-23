---
user: "oschatz"
created: "1360337991"
---

i would strongly consider REMOVING the RS232 (string) variant, as it will garble characters between $80 and $A0 in a way wich is only understandable by someone knowing the exact difference between the  Latin Extension 0x0080-0x00FF) codepage of Unicode http://www.unicode.org/charts/PDF/U0080.pdf and good old ANSI in the area (0x80 and 0xFF) http://msdn.microsoft.com/en-us/library/cc195054.aspx.  

99% of all programmers using RS232 to control devices will drive this crazy, as patches which worked perfect in previous versions will have unobvious but serious bugs. 

the same goes for TCP, UDP, Reader, Writer (string)   i would strongly argue for removing these completely.
