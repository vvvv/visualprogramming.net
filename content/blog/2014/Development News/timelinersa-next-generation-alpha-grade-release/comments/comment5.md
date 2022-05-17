---
user: "joreg"
created: "1407501430"
---

{{< box >}}quote:u7angel:
if i understand it right, this is due to pushing the stuff to the browser and might speed up if running in vvvv. {{< /box >}}
i am afraid not. the architecture will be exactly the same when running inside vvvv. we're not exactly sure yet where the main bottleneck (managed svg-lib, websocket, browser-dom, browser rendering...i suspect the DOM) is but performance is definitely an open issue with this approach. 

if you have specific ideas for improvements not listet [here](https://github.com/vvvv/Timeliner/issues) please add them. 
