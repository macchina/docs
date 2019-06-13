# The SuperB Hardware

![ESP32 Breakout Overview](/images/SCH-01012_R0_SCHEM_FINAL-1.png)
(The SuperB breakout overview, take note of the locations of "EN" and "IO0")

To place SuperB into bootloader mode, EN must be brought low and returned to high while IO0 is held low. Or, in other words, IO0 must be held low during the EN rising edge. (See depiction below)
![Graph showing EN and IO0](/images/EN_IO0_Graph.PNG)

# Use XBee USB Adapter to Flash
For the instructions that follow, the SuperB is connected to the computer with an XBee USB Adapter board (with one modification), available
[here.](https://www.amazon.com/XBee-USB-Adapter-Communication-Connectivity/dp/B017KGBP6Y)
![Image showing SuperB next to adapter board](/images/IMG_6662.JPG)   
Before the board can be used with the SuperB, VREF and DIO11 need to be bridged on the rear of the board as shown below.
![Image showing jumper wire soldered between pins labelled "VREF" and "DIO11"](/images/IMG_6664.JPG)  
At this point the board can be connected to the computer via USB with the RESET and BOOT buttons controlling EN and IO0, respectively.
![Image showing RESET and BOOT buttons](/images/IMG_6663.JPG)  

* [Flash with the ESP Tool](/superB/flashing/esp.md)  
* [Flash with the Arduino IDE](/superB/flashing/arduino.md)  

# Use M2 to Flash
* [Flash with the Arduino IDE](/superB/flashing/arduinoM2.md)