---
description: How to flash your SuperB using either a USB adapter board or an M2
---

# Flashing SuperB

## Overview

SuperB can be flashed using an XBee USB adapter board or using M2. As of right now only the USB adapter board supports flashing through the ESP desktop tool; flashing through M2 can only be done through the Arduino IDE.

## Step 1 - Hardware Prep

{% tabs %}
{% tab title="USB Adapter Board" %}
For the instructions that follow, the SuperB is connected to the computer with an XBee USB Adapter board \(with one modification\), available [here.](https://www.amazon.com/XBee-USB-Adapter-Communication-Connectivity/dp/B017KGBP6Y)

![](../.gitbook/assets/img_6662.JPG)

Before the board can be used with the SuperB, VREF and DIO11 need to be bridged on the rear of the board as shown below.

![](../.gitbook/assets/img_6664.JPG)

At this point the board can be connected to the computer via USB with the RESET and BOOT buttons controlling EN and IO0, respectively.

![](../.gitbook/assets/img_6663.JPG)
{% endtab %}

{% tab title="M2" %}
* **1\)** Plug SuperB into M2 with the antenna trace/U.FL connector towards the USB port and then plug M2 into computer. \(Note the button nomenclature and board orientation\)  

![](../.gitbook/assets/4.JPG)

* **2\)** Select "Macchina M2" as board type and upload the sketch below: 

{% code-tabs %}
{% code-tabs-item title="M2\_Transport.ino" %}
```cpp
int buttonState1 = 0;
int buttonState2 = 0;


 void setup() {
 pinMode(DS2, OUTPUT);
 pinMode(DS3, OUTPUT);
 pinMode(XBEE_RST, OUTPUT);
 pinMode(XBEE_MULT4, OUTPUT);
 pinMode(Button1, INPUT);
 pinMode(Button2, INPUT);
 SerialUSB.begin(115200);
 Serial.begin(115200);
 }

 char rx_byte = 0;

 void loop() {
 if (SerialUSB.available() > 0) {
     rx_byte = SerialUSB.read();
     Serial.write(rx_byte);
 }
 if (Serial.available() > 0) {
     rx_byte = Serial.read();
     SerialUSB.write(rx_byte);
 }

 buttonState1 = digitalRead(Button1);

 if (buttonState1 == LOW) {
     digitalWrite(DS2, LOW);
     digitalWrite(XBEE_RST, LOW);
 } else {
     digitalWrite(DS2, HIGH);
     digitalWrite(XBEE_RST, HIGH);
 }

 buttonState2 = digitalRead(Button2);

 if (buttonState2 == LOW) {
     digitalWrite(DS3, LOW);
     digitalWrite(XBEE_MULT4, LOW);
 } else {
     digitalWrite(DS3, HIGH);
     digitalWrite(XBEE_MULT4, HIGH);
 }
 }
```
{% endcode-tabs-item %}
{% endcode-tabs %}
{% endtab %}
{% endtabs %}

## Step 2 - Software

{% tabs %}
{% tab title="USB Adapter Board + Arduino IDE" %}


* **1\)** Follow the instructions [here](https://github.com/espressif/arduino-esp32/blob/master/docs/arduino-ide/boards_manager.md) to set up the board manager for ESP32.
* **2\)** Connect the SuperB with the USB adapter board and select the correct port.
* **3\)** Place the SuperB into bootloader mode by holding down the BOOT button, pressing and releasing the RESET button, and then releasing the BOOT button.
* **4\)** Select "ESP32 Dev Module" as board type.
* **5\)** Upload a sketch. An easy sketch to adapt is the "Blink" sketch found in File&gt;Examples&gt;Basics&gt;Blink.
* **6\)** Change the three instances of "LED\_BUILTIN" to "26":

  ```cpp
   void setup() {
   // initialize digital pin LED_BUILTIN as an output.
   pinMode(26, OUTPUT);
   }

   // the loop function runs over and over again forever
   void loop() {
   digitalWrite(26, HIGH);   // turn the LED on (HIGH is the voltage level)
   delay(1000);                       // wait for a second
   digitalWrite(26, LOW);    // turn the LED off by making the voltage LOW
   delay(1000);                       // wait for a second
   }
  ```

* **7\)** Upload the sketch and reset the SuperB with the RESET button.
{% endtab %}

{% tab title="USB Adapter Board + ESP Tool" %}


The ESP tool "Flash Download Tools \(ESP8266 & ESP32\)" can be downloaded [here.](https://www.espressif.com/en/support/download/other-tools)  
The binary files used can be downloaded [here.](https://github.com/macchina/docs/raw/master/superB/flashing/ESP32_AT_Uploader.zip) \(Right click&gt;Save link as\)

* **1\)** Open the tool and select "ESP32 DownloadTool".

![Image showing tool selection screen, &quot;ESP32 DownloadTool&quot; is selected](../.gitbook/assets/1.PNG)

* **2\)** Enter the binary files and their addresses, and configure the remaining settings as shown below, selecting the corresponding COM port.

![Image showing settings for the ESP tool](../.gitbook/assets/2%20%281%29.PNG)

* **3\)** Place the SuperB into bootloader mode by holding down the BOOT button, pressing and releasing the RESET button, and then releasing the BOOT button.
* **4\)** Press start to begin flashing. \(~10sec\)
* **5\)** An easy way to test the SuperB's functionality after flashing is to [send it AT commands](atcommands.md).
{% endtab %}

{% tab title="M2 + Arduino IDE" %}
* **1\)** Follow the instructions [here](https://github.com/espressif/arduino-esp32/blob/master/docs/arduino-ide/boards_manager.md) to set up the board manager for ESP32.
* **2\)** Modify the file "platform.txt" found at: C:\Users\**YourUsername**\AppData\Local\Arduino15\packages\esp32\hardware\esp32\1.0.2\platform.txt

  Replace "default\_reset" with "no\_reset" once on line 100 and once on line 101.

* **3\)** Replace the file "boards.txt" found at:

  C:\Users\**YourUsername**\AppData\Local\Arduino15\packages\esp32\hardware\esp32\1.0.2\boards.txt

  Replace the existing "boards.txt" file with the one available [here.](https://github.com/kenny-macchina/docs/tree/306ccc81a873f9c8cfe2e05a0cbffb8ff395906b/superB/flashing/boards.txt)\*\*\*\*

* **4\)** Restart the IDE.
* **5\)** Open the serial monitor. Place the SuperB into bootloader mode by holding down the   BOOT \(SW2\) button, pressing and releasing the RESET \(SW1\) button, and then releasing the BOOT \(SW2\) button. The serial monitor output should look like the one below:

![](../.gitbook/assets/1%20%281%29.PNG)

* **6\)** Select "SuperB on M2" as board type:

![](../.gitbook/assets/2%20%282%29.PNG)

* **7\)** A good example sketch can be found in File&gt;Examples&gt;Examples for SuperB on M2&gt;WiFi&gt;WiFiScan. Upload it.
* **8\)** Close and reopen the serial monitor with "Macchina M2" as the board type. Press RESET \(SW1\) to begin scanning for access points:

![](../.gitbook/assets/3%20%281%29.PNG)
{% endtab %}
{% endtabs %}

