# Flashing SuperB with the Arduino IDE

1. Follow the instructions
[here](https://github.com/espressif/arduino-esp32/blob/master/docs/arduino-ide/boards_manager.md)
to set up the board manager for ESP32.
2. Connect the SuperB with the USB adapter board and select the correct port.
3. Place the SuperB into bootloader mode by holding down the BOOT button, pressing and releasing the RESET button, and then releasing the BOOT button.
4. Select "ESP32 Dev Module" as board type.
5. Upload a sketch. An easy sketch to adapt is the "Blink" sketch found in File>Examples>Basics>Blink.
6. Change the three instances of "LED_BUILTIN" to "26":
    ```C++
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
6. Upload the sketch and reset the SuperB with the RESET button.