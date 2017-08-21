More Involved M2 projects
=========================

[DIGI XBEE cellular LTE](#digi-xbee-celllar-lte)

[BLE with OBD2 and Blynk](#blynk)

These projects are a little more complex.

---

## DIGI XBEE cellular LTE


This tutorial will show how to connect your car to the internet using M2 and a cellular modem.

#### Setup

The Digi XBEE cellular modem plugs directly into the 20 pin "BEE" socket on top of M2. Make sure that it is oriented correctly with the angled chamfers pointed toward the USB/SD side of M2. For more information about this modem check out this [link](https://www.digi.com/products/xbee-rf-solutions/embedded-cellular-modems/digi-xbee-cellular)

[Photo of assembled setup here]

#### Basic communication

A good first step is to check that everything is working by talking to the modem with your computer through M2. For this, we program M2 with a simple sketch that will forward data between the 2 serial ports:

- USBSerial = USB connection to your computer (Arduino IDE)
- Serial0 = XBEE socket pins

Pin signals and locations for the modem can be found [here](https://www.digi.com/resources/documentation/digidocs/90001525/default.htm#reference/r_pinouts_th.htm%3FTocPath%3DHardware%7CPin%2520signals%7C_____0)

First thing we will want to do is program M2 using this sketch:

```cpp

const int DIGI_Associate_PIN  = XBEE_MULT2;   // xbee pin 15
const int DIGI_RESET_PIN = XBEE_RST;          // xbee pin 5
const int GREEN_LED =  DS6;                   // the number of the LED pin
int AssociateState = 0;                       // variable for reading the associate status

void setup() {
  // initialize both serial ports:
  Serial.begin(9600);
  SerialUSB.begin(9600);
  pinMode(DIGI_Associate_PIN, INPUT);
  pinMode(GREEN_LED, OUTPUT);
  pinMode(DIGI_RESET_PIN, OUTPUT);
  digitalWrite(DIGI_RESET_PIN, LOW);
}

void loop() {
  // read from port 1, send to port 0:
  if (SerialUSB.available()) {
    int inByte = SerialUSB.read();
    Serial.write(inByte);
  }

  // read from port 0, send to port 1:
  if (Serial.available()) {
    int inByte = Serial.read();
    SerialUSB.write(inByte);
  }

  AssociateState = digitalRead(DIGI_Associate_PIN);

  if (AssociateState == HIGH) {
    // turn LED on:
    digitalWrite(GREEN_LED, HIGH);
  } else {
    // turn LED off:
    digitalWrite(GREEN_LED, LOW);
  }

}
```


https://www.digi.com/pdf/ds_xbee-cellular.pdf

https://www.digi.com/resources/documentation/digidocs/90001525/default.htm
