---
user: "joreg"
created: "1345380452"
---

@bo27: forgot to mention: Kontrolleur beta2 fixes those issues. (need to reinstall from android store)

{{< box >}}quote:kleinkariert:
So I am now sending the server-list "oldschool" via udp(network client) to know whenever a new IOBox got exposed.{{< /box >}}
since there is no magic built into vvvv to do this thats exactly the way to do it. you can send the list of exposed pins to any device that can display sliders and send values back. 

the {{< pin "Feedback Target IP" >}} is the IP of the device that you want to send (exposed) values to when they are changed in the patch. 
