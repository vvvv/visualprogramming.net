---
user: "microdee"
created: "1506111429"
---

my problem got resolved (as I wrote on riot) it turned out a sender was to blame not clearing up the name section of the shared memory properly and leaving residue in there, confusing receivers with their own shared memory implementation (like vvvv's). 
