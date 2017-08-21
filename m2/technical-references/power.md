Power
=====

This is where we will talk about power supplies in M2.0

**External power**

Macchina 2.0 can be connected directly to a car battery, either from the OBD2 port or some other power wire to provide:

5V @ 3 Amps and 3.3V @ 1 amp

**Protection**

\[TO DO: add information about fuses, etc\]

Low power options
=================

M2.0 has several low-power options. One of them is called:

"J1850 / ISO 9141 Low Power Control"

We have 2 microcontroller-controlled switches that allow "+12V\_SW" and "+5V\_SW" to be powered on or off depending on conditions.

The signal "J1850\_9141\_ON" controls this and is connected to the SAM3X pin number 120 (PB5)

Here is the code to turn on and off the 12V and 5V rails:

```
#include "SamNonDuePin.h"

const int LPC = PIN_EMAC_ERX0;      // LOW POWER CONTROL pin

void setup() {
  pinModeNonDue(LPC, OUTPUT);
  digitalWriteNonDue(LPC, LOW);   // LOW  = no power at +12V_SW/+5V_SW
                                  // HIGH = power at +12V_SW/+5V_SW
}

void loop() {
}
```
