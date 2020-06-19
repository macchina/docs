---
description: Send a CAN frame between 2 M2's.
---

# M2 CAN Point to Point

#### Items Used

* 2x [M2](https://www.macchina.cc/catalog/m2-boards/m2-under-dash)
* 1x [OBD3way board](https://www.macchina.cc/catalog/tools/obd3way)
* 1x 12V power supply

#### M2 Sketch

Upload [THIS SKETCH](https://gist.github.com/kenny-macchina/690d95b6c260b15f794510dccb4950c8) to your M2, which sends a CAN frame on CAN0 or CAN1 when you push switch 1 or 2, respectively. M2 will also blink a light when it receives a CAN frame on either channel.

#### OBD3way Setup

Connect both M2s and OBD3way board as shown below. This connects the CAN0 of one M2 to the CAN0 of the other.

![](../../.gitbook/assets/img_7195.jpg)

![CAN0 on the left is connected to CAN0 on the right.](../../.gitbook/assets/img_7196.jpg)

#### Test

Try sending a CAN frame from one M2 to the other; pushing the button on one M2 should cause the other M2 to blink, signifying it has received the frame! You can also try rerouting the jumpers to send between the different CAN channels. \(The M2 sketch also includes serial printouts, keep your M2 connected to your computer and open the Arduino IDE's serial monitor at baud 115200 to view these messages.\)

