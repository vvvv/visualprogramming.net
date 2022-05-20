---
user: "sunep"
created: "1533723923"
---

RC4 and RC3 earlier, I have the famous "helo, sorry I cannot start. please run setup.exe to see what my problem is" error. 

I fixed it by unchecking and rechecking the "Disable Win10 Fullscreen optimizations"

Log from /logstartup prior to that:

```
<http://12:21:50.856> everything you know is wrong
<http://12:21:50.868> Adding lib\thirdparty\x64 to PATH.
<http://12:21:50.927> Addflow5.ocx not registered. Run setup.exe!
<http://12:21:52.990> creating GClock
<http://12:21:52.995> creating GMainloop
<http://12:21:53.005> creating GLog
<http://12:21:53.010> creating GApplication
<http://12:21:53.017> creating GGlobals
<http://12:21:53.024> creating device listener
<http://12:21:53.030> creating HID device controller
<http://12:21:53.088> creating GNodeFactory
<http://12:21:53.094> creating Gex9Base
<http://12:21:53.109> Direct3DEx initialized.
<http://12:21:53.137> ExceptionDialog is enabled.
<http://12:21:53.290> enumeratig Game Devices...
<http://12:21:53.343> found Game Devices: 
<http://12:21:53.351> enumerating Midi Input Ports...
<http://12:21:53.358> found Midi Input Ports: 
<http://12:21:53.364> enumerating Midi Output Ports...
<http://12:21:53.372> found Midi Output Ports: "Microsoft GS Wavetable Synth"
<http://12:21:53.379> enumeratig TAPI Devices...
<http://12:21:53.388> found TAPI devices: 
<http://12:21:53.396> enumeratig Audio Renderer Devices...
<http://12:21:53.441> found Audio Renderer Devices: "Intel(R) Display Audio HDMI 1 (Intel(R) Display Audio)","Decklink Audio Render","Default DirectSound Device","Default WaveOut Device","DirectSound: Intel(R) Display Audio HDMI 1 (Intel(R) Display Audio)"
<http://12:21:53.447> enumeratig Midi Renderer Devices...
<http://12:21:53.456> found Midi Renderer Devices: "Default MidiOut Device","Microsoft GS Wavetable Synth"
<http://12:21:53.464> enumeratig External Renderer Devices...
<http://12:21:53.476> found External Renderer Devices: "Decklink Video Render"
<http://12:21:53.484> enumeratig Audio Input Devices...
<http://12:21:53.493> found Audio Input Devices: "Microphone Array (Xbox NUI Sensor)","Decklink Audio Capture","Microphone (HD Pro Webcam C920)"
<http://12:21:53.500> enumeratig Video Input Devices...
<http://12:21:53.512> found Video Input Devices: "HD Pro Webcam C920","Decklink Video Capture"

```
