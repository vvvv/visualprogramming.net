# visualprogramming.net

The new website for vvvv.

Local build:
* download Hugo Extended, unzip and place that into your programs folder,
* add it to your path (environment variables),
* powershell: 
  * cd C:\dev\visualprogramming.net
  * hugo server
* open http://localhost:1313/ in your browser

To run in the browser and to be able to access the site from the same local wifi (eg. checking on mobile), run hugo with:
`hugo serve --bind 0.0.0.0 --baseURL http://IP:1313` where IP is your IP from `ipconfig`
