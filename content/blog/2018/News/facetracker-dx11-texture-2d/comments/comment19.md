---
user: "kine"
created: "1562067860"
---

Hi @microdee!
Thanks for this contribution! I am using VVVV50beta38.1.
Just tried to install it through VPM, but when I open FaceTracker girlpower patch I have red nodes issues (see screenshot). Can you help me solving the problem? Thanks!
It appears that the DX11Utils are missing. I looked into pack folders and the DX11Utils was in a different folder respect to the one where the nodes are searching for. So I tried to copy all the DX11Utils in the correct path but the nodes are still red.
I attach both TTYlog and the exception error message I receive when I try to open Facetracker girlpower patch with /showexeptions.

------------------------------------------------------------------------------
System.IO.FileNotFoundException: Could not load file or assembly 'mp.pddn, Version=1.3.2.0, Culture=neutral, PublicKeyToken=null' or one of its dependencies. The system cannot find the file specified.
File name: 'mp.pddn, Version=1.3.2.0, Culture=neutral, PublicKeyToken=null'
   at System.Reflection.RuntimeAssembly.GetExportedTypes(RuntimeAssembly assembly, ObjectHandleOnStack retTypes)
   at System.Reflection.RuntimeAssembly.GetExportedTypes()
   at VVVV.Hosting.Factories.DotNetPluginFactory.LoadNodeInfosFromFile(String filename, String sourcefilename, List`1& nodeInfos, Boolean commitUpdates)
   at VVVV.Hosting.Factories.DotNetPluginFactory.LoadNodeInfos(String filename)
   at VVVV.Hosting.Factories.AbstractFileFactory`1.ExtractNodeInfos(String filename, String arguments)
   at VVVV.Hosting.HDEHost.LoadNodeInfos(String filename, String arguments)
   at VVVV.Hosting.HDEHost.ExtractNodeInfos(String filename, String arguments, INodeInfo[]()& result)

