---
user: "velcrome"
created: "1387303135"
---

thanks, did not see the option.

when downgrading to a stable release I needed to go over the Package Manager Console (Tools->Library Package Manager->Console) and selecting the vvvv package source (and ofc the correct default project)

```
PM> get-package -listavailable
```

this should show you the most recent stable relases

```
PM> install-package vvvv.plugininterfaces
```

this installs the most recent stable release of e.g. the plugin interfaces

so far so good, nuget seems to be really nice so far. i just tried myget.org, which calls itself a *nuget-as-a-service*-cloud-hoster. it even has a build thingy, that can grab a source from github or bitbucket and try to compile it. once you add [the vvvv feed](http://vvvv.org:8111/guestAuth/app/nuget/v1/FeedService.svc/) to its sources. keeps on telling me that it was successful, even though the log is long with errors...

it would be really nice if all packs for vvvv could be delivered this way, so lets see what pops up.
