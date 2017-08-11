J1850 PWM
=========

Here we will describe more about how the J1850 circuitry works. To begin with, to change between the levels required for PWM and VPW variants of J1850, use this signal:

`J1850_PWM_nVPW`

This signal is connected to Pin 123 (PB8) of the SAM3X.

Make this pin HIGH for PWM and LOW for VPW

This is an example of some code that will both turn on power to J1850 circuit AND set level for either PWM or VPW:

```
#include "SamNonDuePin.h"

const int LPC = PIN_EMAC_ERX0;      // LOW POWER CONTROL pin
const int PWM_nVPW = PIN_EMAC_EMDC; // PWM/VPW level control

void setup() {
  pinModeNonDue(LPC, OUTPUT);
  pinModeNonDue(PWM_nVPW, OUTPUT);

  digitalWriteNonDue(LPC, HIGH);   // LOW  = no power at +12V_SW/+5V_SW
                                   // HIGH = power at +12V_SW/+5V_SW

  digitalWriteNonDue(PWM_nVPW, HIGH);   // LOW  = 7.87v (VPW)
                                        // HIGH = 5.88V (PWM)
}

void loop() {
}
```

**Testing hardware VPW interface:**

Let's start with receiving J1850 VPW (Variable pulse width).

Here is o-cope shot of 2 signals. Top is `J1850_VPW_RX`, botton is `J1850+_BUS`.

<embed src="/images/IMG_20161216_1320490534146.html" width="220" height="124" />

<span class="file">![](https://www.macchina.cc/modules/file/icons/image-x-generic.png "image/jpeg")[IMG\_20161216\_132049053.jpg](/images/IMG_20161216_132049053.html)</span>

**Testing hardware J1850 PWM interface:**
