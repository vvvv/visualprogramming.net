---
user: "elliotwoods"
created: "1373105459"
---

Can you confirm whether the events are fired before or after or unknown?
i.e. OnRender occurs after all textures are rendered? or before?

To note (for others), the way to get these is to use:

```
<Import>
IHDEHost FHDEHost;
```

but then you can't use FHDEHost in your constructor

so inherit

{{< box >}}code
IPartImportsSatisfiedNotification{{< /box >}}

and start using them like:

{{< box >}}code
public void OnImportsSatisfied()
{
	FHDEHost.MainLoop.OnPresent += MainLoop_Present;
	FHDEHost.MainLoop.OnRender += MainLoop_OnRender;
}{{< /box >}}
