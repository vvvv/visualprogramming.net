---
user: "tobyk"
created: "1527010303"
---

Hi @Microdee. Having trouble with this one if you've got a tick...

Under vvvv_50beta36_x64 I get a red FaceTrackerContent node.
The error pin on the FaceTracker node says 

```
An attempt was made to load a program with an incorrect format. (Exception from HRESULT: 0x8007000B)
   at mp.dx.Tracking.FaceTrackerContext.facedetect_frontal_surveillance(Byte* result_buffer, Byte* gray_image_data, Int32 width, Int32 height, Int32 step, Single scale, Int32 min_neighbors, Int32 min_object_width, Int32 max_object_width, Int32 doLandmark)
   at mp.dx.dx11.Nodes.TextureFaceTrackerNode.Evaluate(Int32 SpreadMax) in C:\projects\mp-dx\DX11Utils\TextureFaceTrackerNode.cs:line 150
```

Installed via VPM github.latest.vpack
Tried with latest DX11 pack (1.3 released a few days ago) and with the DX11 pack that VPM installs.




