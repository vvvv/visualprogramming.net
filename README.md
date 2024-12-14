# vvvv.org

The new website for vvvv.

Local build:
* [Download Hugo Extended](https://gohugo.io/installation/windows/#prebuilt-binaries), unzip and place that into your programs folder,
* Add it to your path (environment variables),
* Powershell: 
  * cd C:\dev\vvvv.org
  * hugo server
* Open http://localhost:1313/ in your browser

To run in the browser and to be able to access the site from the same local wifi (eg. checking on mobile), run hugo with:
`hugo serve --bind 0.0.0.0 --baseURL http://IP:1313` where IP is your IP from `ipconfig`

### Blog timecodes
A date blogs from- and to- dates are specified in unix time, which can be converted to from date using e.g. this [date -> timestamp converter](https://dqydj.com/unix-time-to-date-converter/)

### Shortcodes:

__Mastodon:__  
{{< mastodon "mastodon.xyz/@vvvv/109598445063555699" 550 >}}  
Parameters: Link [Height (default=550)]

__Pixelfed:__  
{{< pixelfed "pixelfed.social/p/madewithvvvv/509678388578111219" 550 >}}  
Parameters: Link [Height (default=550)]

__Vimeo:__  
{{< vimeo 761078720 >}}  
Parameters: Vimeo ID

__Youtube:__  
{{< youtube 761078720 >}}  
Parameters: Youtube ID
