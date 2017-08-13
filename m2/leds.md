LEDs
====

There are several LEDs on the processor board of M2.0. These LEDs are user programmable and can be used for many applications. The LEDs are as follows:

<img src="/images/LED_schematic.png" />

The following table shows what LEDs coorespond to what Pin name.


| LED               | Mapped Pin Name        |
| ------            |-------------           |
| DS2 (RED)         | DS2                    |
| DS3 (YELLOW)      | DS3                    |
| DS4 (YELLOW)      | DS4                    |
| DS5 (YELLOW)      | DS5                    |
| DS6 (GREEN)       | DS6                    |
| RGB RED           | DS7_RED / RGB_RED      |
| RGB GREEN         | DS7_GREEN / RGB_GREEN  |
| RGB BLUE          | DS7_BLUE / RGB_BLUE    |


For example, if you want the Green LED to blink, this sketch will do that for you:

```cpp
void setup() {
  // initialize digital pin DS6 as an output.
  pinMode(DS6, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(DS6, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);              // wait for a second
  digitalWrite(DS6, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);              // wait for a second
}
```
