# "OK Google, start my car!"

Remotely start and stop a car using M2 with SuperB!

**Hardware Needed:**  
* M2
* SuperB
* Smartphone with Google Assistant

**Services Needed:**
* Google Assistant
* If This then That (IFTTT)
* Adafruit IO

## Theory
![Flowchart showing the relationship between hardware and services used](/images/Ok_Google_Car/Flowchart.png)
* Voice commands will be given to either a smartphone or a Google Home device
* Voice data is passed to Google Assistant
* Google Assistant then triggers IFTTT with either an ON or OFF command
* IFTTT in turn updates Adafruit IO with the ON or OFF command
* SuperB receives the ON or OFF command and updates itself to reflect the new state
* M2 reads the ON/OFF state of SuperB and then starts or stops the car

### Implications, Expansion
* Other than Google Assistant, IFTTT supports a huge number of triggers. (e.g. weather, connect/disconnect from Wi-Fi networks, time, etc.) For example, have your car warm up before leaving for work if the temperature is below a certain threshold.
* Because the smartphone and SuperB are never directly connected, commands can be sent to the vehicle as long as both devices have an internet connection, regardless of the physical distance between them.

## Smartphone/Google Home
You'll need either a smartphone capable of accessing Google Assistant or a Google Home device. In either case, make sure you know the credentials of the Google account associated with the device.

## If This then That (IFTTT)
If This then That will handle the exchange between Google Assistant and Adafruit IO, and adds the option to use a trigger other than a voice command.

## Adafruit IO
Adafruit IO is an easy to use web service that can control internet enabled hardware (like M2 and SuperB). IO provides a virtual dashboard accesible through a web browser onto which all manner of gauges, sliders, buttons, and switches can be placed. For our purposes we'll have a dashboard with a simple ON/OFF switch, the state of which the SuperB will be able to read. What makes IO extremely useful is that these switches can be controlled by other web services like IFTTT, and not just through the web dashboard.