# Re-Flashing A0

_Why would you want to re-flash?_

_Update with Board Definitions info._ 

## Flashing A0

1. Follow the instructions [here ](https://github.com/espressif/arduino-esp32/blob/master/docs/arduino-ide/boards_manager.md)to set up the board manager for ESP32.
2. Connect A0 to your computer via a micro USB cable
3. Select "ESP32 Dev Module" as board type.
4. Upload a sketch. An easy sketch to adapt is the "Blink" sketch found in File&gt;Examples&gt;Basics&gt;Blink.
5. Change the three instances of "LED\_BUILTIN" to "13": 

   ```cpp
    void setup() {
    // initialize digital pin LED_BUILTIN as an output.
    pinMode(13, OUTPUT);
    }

    // the loop function runs over and over again forever
    void loop() {
    digitalWrite(13, HIGH);   // turn the LED on (HIGH is the voltage level)
    delay(1000);                       // wait for a second
    digitalWrite(13, LOW);    // turn the LED off by making the voltage LOW
    delay(1000);                       // wait for a second
    }
   ```

6. Press upload and the LED will blink every 1 second! 💡



