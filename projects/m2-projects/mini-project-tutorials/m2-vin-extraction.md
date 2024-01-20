---
description: >-
  Use M2 to read a Vehicle Identification Number (VIN) and write it to an SD
  card.
---

# M2 VIN Extraction

#### Items Used

* 1x [M2](https://www.macchina.cc/catalog/m2-boards/m2-under-dash)
* 1x Car with OBD-II Port

#### M2 Sketch

Upload [THIS SKETCH](https://gist.github.com/kenny-macchina/16db4b58defc7fd6edb0fd844adc4448) to your M2, which queries the vehicle's Engine Control Unit (ECU) for the VIN and then writes it to a text file via the onboard SD slot.

#### Sketch Libraries

The sketch above makes use of multiple libraries, install them through the links below:

{% embed url="https://github.com/TDoust/M2_12VIO" %}

{% embed url="https://github.com/antodom/pwm_lib" %}

{% embed url="https://github.com/collin80/iso-tp" %}

{% embed url="https://github.com/collin80/due_can" %}

{% embed url="https://github.com/collin80/can_common" %}

#### Collect VIN

With the vehicle running, plug M2 into the OBD-II port. M2 should flash yellow lights as it queries for the VIN, then light up green for success or red for failure. In either case pressing button 1 will make M2 try again, writing a new text file each time.
