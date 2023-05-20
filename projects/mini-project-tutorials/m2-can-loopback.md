---
description: 'Send a CAN frame on CAN0 and receive it on CAN1, and vice versa.'
---

# M2 CAN Loopback

#### Items Used

* 1x [M2](https://www.macchina.cc/catalog/m2-boards/m2-under-dash)
* 1x [OBD3way board](https://www.macchina.cc/catalog/tools/obd3way)

#### M2 Sketch

Upload [THIS SKETCH](https://gist.github.com/kenny-macchina/690d95b6c260b15f794510dccb4950c8) to your M2, which sends a CAN frame on CAN0 or CAN1 when you push switch 1 or 2, respectively. M2 will also blink a light when it receives a CAN frame on either channel.

#### OBD3way Setup

Connect M2 and OBD3way board as shown below. This connects M2's CAN0 to CAN1, hence "loopback".

![](../../.gitbook/assets/img_7190.jpg)

![CAN0 is connected to CAN1.](../../.gitbook/assets/img_7202.jpg)

#### Test

Try sending a CAN frame on both CAN0 and CAN1; the M2 LED should blink after each time signifying it has received its own message! \(The M2 sketch also includes serial printouts, keep your M2 connected to your computer and open the Arduino IDE's serial monitor at baud 115200 to view these messages.\)



