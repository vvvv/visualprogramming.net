---
user: "blausand"
created: "1476329276"
---

{{< user "joreg" >}}, 
sorry for gravedigging, but this is coherent with above posts:
Over 2.5 years passed and again i'd die for obvious enhancements of the IOBox exposing feature:

3. As said, sending out OSC Feedback when incoming connections change the {{< pin "Y Input Value" >}}. Any chances to hack that?
(Otherwise, i'd have to place {{< node "OSCEncoder-(Network)" >}} at many locations in the project or gather all of them to centralize OSC Feedback from MIDI devices…)

5. I would really love to be able to specify "nice address" for {{< node "Server-(VVVV)" >}} using the {{< pin "Description" >}} (or {{< pin "Tag)" >}} instead of the {{< pin "ID" >}}.

6. Parameter Value Queries
Currently, i can't *read* the {{< pin "Y Input Value" >}} of Exposed Nodes in C#? I browsed the PlugInInterface documentation, but couldn't find any elegant solution.
As a powerful alternative, the [OSC protocol standard](http://cnmat.berkeley.edu/publication/open_sound_control_new_protocol_communicating_sound_synthesizers) in (5 Requests for Information > Parameter Value Queries), defines a behaviour that if you send /current-value to an address, the target answers the value. Wouldn't that be a huge benefit? What kind of effort is gonna be the price?
