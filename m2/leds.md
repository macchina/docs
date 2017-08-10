LEDs
====

There are several LEDs on the processor board of M2.0. These LEDs are user programmable and can be used for many applications. The LEDs are as follows:

\[TO DO: List LEDs and image showing where they are\]

Here is a sketch to test out the LEDs, it is modified from the basic "FADE" example that comes with the Arduino IDE.

```
/*
 Fade

 Modified 6/6/16 to demonstrate Macchina 2.0 RGB LEDs,
 also functioning as a HELLO WORLD type sketch. 

 This example shows how to fade an LED on the RGB LED
 using the analogWrite() function.

 The analogWrite() function uses PWM, so if
 you want to change the pin you're using, be
 sure to use another PWM capable pin. On most
 Arduino, the PWM pins are identified with 
 a "~" sign, like ~3, ~5, ~6, ~9, ~10 and ~11.

 This example code is in the public domain.
 */

int led = 5;           // the PWM pin the LED is attached to: #5 is the BLUE LED, #12 is GREEN, #11 is RED within the RRB LED. 
int brightness = 0;    // how bright the LED is
int fadeAmount = 5;    // how many points to fade the LED by

// the setup routine runs once when you press reset:
void setup() {
  // declare led pin to be an output:
  pinMode(led, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop() {
  // set the brightness of led pin:
  analogWrite(led, brightness);

  // change the brightness for next time through the loop:
  brightness = brightness + fadeAmount;

  // reverse the direction of the fading at the ends of the fade:
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ;
  }
  // wait for 30 milliseconds to see the dimming effect
  delay(30);
}
```


