# "OK Google, start my car!"

Remotely start and stop a car using M2 with SuperB!

**Hardware Needed:**  
* [M2](https://www.macchina.cc/catalog/m2-boards/m2-under-dash)
* [SuperB](https://www.macchina.cc/catalog/m2-accessories/superb)
* Smartphone with Google Assistant

**Services Needed:**
* Google Assistant
* [If This then That (IFTTT)](https://ifttt.com/join)
* [Adafruit IO](https://io.adafruit.com/)

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

## Google Assistant  
You'll need either a smartphone capable of accessing Google Assistant or a Google Home device. In either case, make sure you know the credentials of the Google account associated with the device.

## If This then That (IFTTT)  
If This then That will handle the exchange between Google Assistant and Adafruit IO, and adds the option to use a trigger other than a voice command. Register for an account [here.](https://ifttt.com/join) Make sure to link the same Google account used on your smartphone or Google Home.

## Adafruit IO  
Adafruit IO is an easy to use web service that can control internet enabled hardware (like M2 and SuperB). IO provides a virtual dashboard accesible through a web browser onto which all manner of gauges, sliders, buttons, and switches can be placed. For our purposes we'll have a dashboard with a simple ON/OFF switch, the state of which the SuperB will be able to read. What makes IO extremely useful is that these switches can be controlled by other web services like IFTTT, and not just through the web dashboard. Register for an account [here.](https://io.adafruit.com/)

## Step 1-Set up Adafruit IO  
1. Create a new feed titled "LED_Control". (case-sensitive!)
    ![image showing how to create a feed](/images/Ok_Google_Car/AdafruitIO1.PNG)
    ![image showing how to create a feed](/images/Ok_Google_Car/AdafruitIO2.PNG)
2. Create a new dashboard with any title.
    ![image showing how to create a dashboard](/images/Ok_Google_Car/AdafruitIO3.PNG)
3. Navigate to the new dashboard and place a toggle switch linked to the "LED_Control" feed. Leave the block settings on their default settings.
    ![image showing how to create a toggle switch](/images/Ok_Google_Car/AdafruitIO4.PNG)
    ![image showing how to create a toggle switch](/images/Ok_Google_Car/AdafruitIO5.PNG)
    ![image showing the settings for the toggle switch](/images/Ok_Google_Car/AdafruitIO6.PNG)
4. There should now be a single toggle switch on the dashboard:
    ![image showing the switch on the dashboard](/images/Ok_Google_Car/AdafruitIO7.PNG)
5. Find and record your username and key, which will be necessary later.
    ![image showing where to find username and key](/images/Ok_Google_Car/AdafruitIO8.PNG)

## Step 2-Set up and Test SuperB  
1. Download the SuperB sketch [here.](https://github.com/kenny-macchina/Ok-Google-Start-My-Car/tree/master/SuperB_Sketch) (This sketch uses the Adafruit MQTT library which can be installed through the Arduino library manager)
2. Update the sketch with your Adafruit IO and Wi-Fi credentials.
    ![image showing where to update credentials in sketch](/images/Ok_Google_Car/SuperB1.PNG)
3. To flash SuperB with M2 follow the instructions [here.](http://docs.macchina.cc/superB/flashing/arduinoM2.html) Alternatively, if you have an XBee USB adapter board you can flash SuperB using the instructions found [here.](http://docs.macchina.cc/superB/hardware.html#use-xbee-usb-adapter-to-flash)
4. Power on SuperB (either with an M2 or USB adapter board) and use the Adafruit IO dashboard to test the functionality.  
    ![image showing SuperB responding to Adafruit IO dashboard](/images/Ok_Google_Car/SuperB2.gif)

## Step 3-Set up and Test IFTTT  
1. Create a new applet with Google Assistant as the trigger (the "this").  
    ![image showing Google Assistant in IFTTT](/images/Ok_Google_Car/IFTTT1.PNG)
2. Select Adafruit IO as the action (the "that"). Connect your Adafruit account to IFTTT if prompted. Select the "LED_Control" feed and enter "ON" (case-sensitive) as the data to save to the feed.  
    ![image showing Adafruit IO in IFTTT](/images/Ok_Google_Car/IFTTT2.PNG)
3. In the same style create another applet to turn the car off, sending "OFF" instead of "ON".
4. With these 2 applets you should now be able to control the toggle switch on your IO dashboard via Google Assistant.
    ![image showing the 2 applets just created](/images/Ok_Google_Car/IFTTT3.PNG)
    ![image showing Google Assistant controlling Adafruit IO and SuperB](/images/Ok_Google_Car/IFTTT4.gif)  
Great! At this point we can toggle a pin on SuperB using Google Assistant. The final step is to have M2 read the pin state and then perform an action on the car accordingly.  
If you're interested in using more than just one pin the SuperB pinout can be found [here,](/superB/hardware.md) and the pinout for the M2's XBee socket can be found [here.](/m2/technical-references/pin-mapping.md#xbee)

## Step 4-Flash M2  
1. Download the M2 sketch [here.](https://github.com/kenny-macchina/Ok-Google-Start-My-Car/tree/master/M2_Sketch)
2. This sketch uses the M2_12VIO library found [here,](https://github.com/TDoust/M2_12VIO) the pwm library found [here,](https://github.com/antodom/pwm_lib) and the mcp2515 library found [here,](https://github.com/macchina/Single-Wire-CAN-mcp2515) make sure you have them installed.
3. Determine which version of M2 you have [here.](/m2/versions.md) Comment out the V4 specific line in the readBatteryVoltage() function if you have V3 or earlier, otherwise leave the code as is.
    ![image showing code to modify for different versions of M2](/images/Ok_Google_Car/M21.PNG)
4. The startCarSpecific() and stopCarSpecific() functions are pre-populated with GM specific CAN messages. You'll have to determine what CAN messages to send for other cars. (This may take some work to determine!)
    ![image showing start and stop functions](/images/Ok_Google_Car/M22.PNG)