---
user: "Elias"
created: "1485873758"
---

Well simply to not spam nuget.org with thousands of packages. Also many other projects use the same policy using a private feed for daily builds. So adding just those few lines like
```
  <packageSources>
    <add key="vvvv package source" value="http://teamcity.vvvv.org/guestAuth/app/nuget/v1/FeedService.svc/" />
  </packageSources>
```
to a nuget.config file never seemed like that big of a hassle to me... but if you guys insist I'll add it to my todo list ;)
