# More Involved M2 projects

[DIGI XBEE cellular LTE](#digi-xbee-celllar-lte)

[BLE with OBD2 and Blynk](#blynk)

These projects are a little more complex.

---

## Digi XBee Cellular LTE modem example


This tutorial will show how to connect your car to the internet using M2, a Digi XBee Cellular LTE modem and a SIM card. For more information about this modem check out this [link](https://www.digi.com/products/xbee-rf-solutions/embedded-cellular-modems/digi-xbee-cellular) or read the [datasheet](https://www.digi.com/pdf/ds_xbee-cellular.pdf).

#### Setup

The modem plugs directly into the 20 pin wireless socket on top of M2. Make sure that it is oriented correctly with the angled chamfers pointed toward the USB/SD side of M2. Make sure M2 is not being powered when plugging in the modem.

Before plugging the modem into M2, make sure to install a SIM card. This Modem uses a 4FF (Nano) size SIM card.

<img src="/images/DIGI_modem.png" width="640" />

#### Basic communication

A good first step is to check that everything is working by talking to the modem with your computer through M2. For this, we program M2 with a simple sketch that will forward data between the 2 serial ports:

- USBSerial = USB connection between M2 processor and your computer.
- Serial0 = Serial connection between M2 processor and XBEE socket pins

This sketch will also make the GREEN LED blink as the [associate](https://www.digi.com/resources/documentation/digidocs/90001525/default.htm#reference/r_cell_associate_led.htm%3FTocPath%3DHardware%7C_____4) pin of the modem toggles. The pin signals and locations for the modem can be found [here](https://www.digi.com/resources/documentation/digidocs/90001525/default.htm#reference/r_pinouts_th.htm%3FTocPath%3DHardware%7CPin%2520signals%7C_____0).

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

The second part to a basic communication test is the software on your computer. Digi offers a nice UI called XCTU to communicate with their products. Download the latest verison [here](https://www.digi.com/products/xbee-rf-solutions/xctu-software/xctu).

Once downloaded and installed, launch XCTU and follow the instructions from Digi's documentation found [here](https://www.digi.com/resources/documentation/digidocs/90001525/default.htm#tasks/t_add_device.htm%3FTocPath%3DGetting%2520started%2520with%2520the%2520XBee%2520Cellular%2520Modem%2520Development%2520Kit%7CConfigure%2520the%2520device%2520using%2520XCTU%7C_____1).

From there, you can do all sorts of fun things, from sending a SMS to connecting to servers to posting data to a website. Several examples are found on Digi's documentaion page [here](https://www.digi.com/resources/documentation/digidocs/90001525/default.htm).

#### A more advanced cellular project

The next step is to replace the commands coming from your computer with commands directly from M2! In other words, the processor on M2 will communicate with the modem without intervention. Let's do a more advanced project!

To be continued...
