---
description: Test your SuperB by having it scan for nearby access points.
---

# Sending AT Commands

* **1\)** First, follow the instructions [here](flashing-superb-with-usb-adapter-board/esp.md) to flash SuperB with the ESP tool.
* **2\)** Follow instructions 1-3 [here](flashing-superb-with-usb-adapter-board/arduino.md) to set up the Arduino IDE for ESP32.
* **3\)** Open the serial monitor, with baud equal to 115200 and both NL and CR set.

![](../.gitbook/assets/1%20%282%29.PNG)

* **4\)** Hit RESET on the USB adapter board, the SuperB should report back ready.

![Image showing serial output after a reset](../.gitbook/assets/2.PNG)

 Try the following two commands sequentially to get a list of access points visible to the SuperB:

```text
 AT+CWMODE=3
 AT+CWLAP
```

![SuperB scans for access points and prints them to the serial output](../.gitbook/assets/3.PNG)

For a full list of available AT commands click [here.](https://www.espressif.com/sites/default/files/documentation/esp32_at_instruction_set_and_examples_en.pdf)

