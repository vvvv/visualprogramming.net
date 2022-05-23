---
user: "joreg"
created: "1476721675"
---

ad 3)
i still don't get that usecase. the original idea is: you have IOBoxes that have connections only from their outputs. you expose those. you change their value via a kontrolleur. so far normal use. then if you allow feedback it means: if you change the IOBox in the patch that change is also reflected on the kontrolleur. so what is missing exactly?


ad 5) 
understandable, but would need some thinking and coding

ad 6)
you can use IPin2.Spread to get/set a pins value: [/pluginspecs/html/P_VVVV_PluginInterfaces_V2_Graph_IPin2_Spread.htm](/pluginspecs/html/P_VVVV_PluginInterfaces_V2_Graph_IPin2_Spread.htm)

the osc-specification you refer to is an interesting find. to my understanding though it is not the one everyone is working with today, which is this: http://opensoundcontrol.org/spec-1_0 and this one does not have that idea of "discoverability" built in.
