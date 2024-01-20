---
description: Send and receive CAN frames between an A0 and an M2.
---

# A0 CAN Point to Point

#### Items Used

* 1x [A0](https://www.macchina.cc/catalog/a0-boards/a0-under-dash)
* 1x [M2](https://www.macchina.cc/catalog/m2-boards/m2-under-dash)
* 1x [OBD3way board](https://www.macchina.cc/catalog/tools/obd3way)
* 1x 12V power supply

#### M2 Sketch

Upload [THIS SKETCH](https://gist.github.com/kenny-macchina/690d95b6c260b15f794510dccb4950c8) to your M2, which sends a CAN frame on CAN0 or CAN1 when you push switch 1 or 2, respectively. M2 will also blink a light when it receives a CAN frame on either channel.

#### A0 Sketch

Upload [THIS SKETCH](https://gist.github.com/kenny-macchina/5a39add47c97a8fcd16d0d45d8794679) to your A0, which sends a CAN frame on CAN0 when it first turns on, then waits and echos back messages it receives. It requires two libraries, which can be found [here](https://github.com/collin80/esp32\_can) and [here](https://github.com/collin80/can\_common).

#### OBD3way Setup

Connect both M2, A0, and OBD3way board as shown below. This connects the CAN0 of A0 to the CAN0 of M2.

![](../../.gitbook/assets/IMG\_7198.JPG)

![CAN0 on the left is connected to CAN0 on the right.](../../.gitbook/assets/IMG\_7201.JPG)

#### Test

Try hitting the reset button on the A0, upon waking up it will send a CAN frame on CAN0 and the M2 should flash, signifying it has received the frame. Then try sending a frame from the M2 to the A0, the A0 should echo it back to the M2 and it should flash again.
