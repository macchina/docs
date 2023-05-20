---
description: >-
  Re-flash your A0 to run your own programs, or to "factory reset" by
  reinstalling A0RET.
---

# Re-Flashing A0

{% hint style="danger" %}
Are you trying to reinstall A0RET on your A0? Go here:
{% endhint %}

{% page-ref page="a0ret.md" %}

## Board Definition

{% hint style="warning" %}
Before using Arduino IDE with A0 for the first time, you must follow the instructions below to add ESP32 board definitions.
{% endhint %}

{% embed url="https://github.com/espressif/arduino-esp32/blob/master/docs/arduino-ide/boards\_manager.md" %}

## Flashing A0

1. Connect A0 to your computer via a micro USB cable
2. Select "ESP32 Dev Module" as board type.
3. Upload a sketch. An easy sketch to adapt is the "Blink" sketch found in File&gt;Examples&gt;Basics&gt;Blink.
4. Change the three instances of "LED\_BUILTIN" to "13": 

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

5. Press upload and the LED will blink every 1 second! 💡



