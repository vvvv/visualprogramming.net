---
user: "microdee"
created: "1531500407"
---

So I gave up on CefGlue and continue development on the 3rd party DX11 one with chromiumfx. I'm making it more modular, spreadable and cater for industrial use-cases. In chromiumfx disabling that context menu is done like this:
```
var client = new CfxClient();
...
ContextMenuHandler = new CfxContextMenuHandler();
ContextMenuHandler.OnBeforeContextMenu += (sender, args) => args.Model.Clear();
...
client.GetContextMenuHandler += (sender, args) => args.SetReturnValue(ContextMenuHandler);
```
pretty sure cefglue is somewhat similar

also we need multitouch + mp4 playback so I will need to rebuild CEF and regenerate ChromiumFX bindings for new SendTouches function.

I'm planning to go from this pull request https://bitbucket.org/chromiumembedded/cef/pull-requests/104/touch-processing-for-osr-different-api/diff
and in the discussion I've found this patch https://drive.google.com/file/d/1Sh4qrfkjql3OkdKLY08N7BuUcHUyqQIU/view for branch 3396 (chromium 67). wish me good luck and/or I suggest to make some extra steps yourselves too and try to implement these as well. You might be more experienced in that than I am.

god speed!

PS: this pull request also seems very interesting for our purposes: https://bitbucket.org/chromiumembedded/cef/pull-requests/158/support-external-textures-in-osr-mode/diff ;)
