# LED and Button

A0 has a single green LED for programmable status indication, and a single momentary pushbutton for programmable user input.

![NEED THE A0 VERSION OF THIS IMAGE](https://gblobscdn.gitbook.com/assets%2F-Lhg5aaQ-eiSLOcDoH85%2F-Lhg646e0zcy2Yk5d5Sb%2F-Lhg6DezV6lxIBCKJ7i2%2FLEDS_Buttons_labels.png?alt=media)

## LED <a id="leds"></a>

A0 has a single-color green LED. The LED is active LOW - the processor needs to pull the pin LOW to turn on the LED.

![NEED THE A0 VERSION OF THIS IMAGE](https://gblobscdn.gitbook.com/assets%2F-Lhg5aaQ-eiSLOcDoH85%2F-Lhg646e0zcy2Yk5d5Sb%2F-Lhg6Df01hkOGyjRGHZ_%2FLED_schematic.png?alt=media)

## Button <a id="buttons"></a>

A0 has a single momentary pushbutton on the upper PCB.

This button is user-programmable. Use these for triggering something in your program. For example, this code turns on the **Red LED when Button 1 is pressed**: 

### NEED THE A0 VERSION OF THIS CODE

```text
const int buttonPin = Button1;     const int ledPin =  DS2;      ​int buttonState = 0;         ​void setup() {  pinMode(ledPin, OUTPUT);  pinMode(buttonPin, INPUT);}​void loop() {  buttonState = digitalRead(buttonPin);​  if (buttonState == LOW) {       digitalWrite(ledPin, LOW);    } else {    digitalWrite(ledPin, HIGH);    }}
```

#### **RESET** button will reset the processor. 

#### WAS TRUE OF M2, LIKELY NOT A0

#### **ERASE** button is used in conjunction with the RESET button. In the event your program hangs or there is some other issue, power up M2, hold down ERASE and then press and release RESET. This will erase the flash on the processor. 

#### WAS TRUE OF M2, LIKELY NOT A0

