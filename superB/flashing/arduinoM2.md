# Flashing SuperB with the Arduino IDE

1. Follow the instructions
[here](https://github.com/espressif/arduino-esp32/blob/master/docs/arduino-ide/boards_manager.md)
to set up the board manager for ESP32.
2. Modify the file "platform.txt" found at:  

    C:\Users\\**Your Username**\AppData\Local\Arduino15\packages\esp32\hardware\esp32\1.0.2\platform.txt

    Replace "default_reset" with "no_reset" once on line 100 and once on line 101. 
3. Restart the IDE.
4. Plug SuperB into M2 with the antenna trace/U.FL connector towards the USB port and then plug M2 into computer. (Note the button nomenclature and board orientation)
![Image showing SuperB and M2](/images/Flash_SuperB_With_M2/4.JPG)
5. Select "Macchina M2" as board type and upload the sketch below:
    ```C++
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
6. Open the serial monitor. Place the SuperB into bootloader mode by holding down the BOOT (SW2) button, pressing and releasing the RESET (SW1) button, and then releasing the BOOT (SW2) button. (See picture below:)
![Image showing the serial monitor window after placing the SuperB into bootloader mode](/images/Flash_SuperB_With_M2/1.PNG)
7. Select "ESP32 Dev Module" as board type and enter the following settings:  
**Upload Speed:** 115200  
**Flash Frequency:** 40MHz  
**Flash Mode:** DIO  
**Flash Size:** 2MB  
**Core Debug Level:** None
![Image showing the settings to use in the Arduino IDE](/images/Flash_SuperB_With_M2/2.PNG)
8. A good example sketch can be found in File>Examples>Examples for ESP32 Dev Module>WiFi>WiFiScan. Upload it.
9. Close and reopen the serial monitor with "Macchina M2" as the board type. Press RESET (SW1) to begin scanning for access points:
![Image showing the WiFiScan sketch running](/images/Flash_SuperB_With_M2/3.PNG)