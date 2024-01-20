---
description: Send a SWCAN frame between 2 M2's.
---

# M2 SWCAN Point to Point

#### Items Used

* 2x [M2](https://www.macchina.cc/catalog/m2-boards/m2-under-dash)
* 1x [OBD3way board](https://www.macchina.cc/catalog/tools/obd3way)
* 1x 12V power supply

#### M2 Sketches

Upload [THIS SKETCH](https://gist.github.com/kenny-macchina/13044469072597d928c02c67c39678fa) to one M2, and [THIS SKETCH](https://gist.github.com/kenny-macchina/55bda591e825ab0b52390a91e1b89962) to the other.&#x20;

The first sketch is the transmitter and sends a non extended frame and blinks a light quickly when button 1 is pressed, and sends an extended frame and blinks a light slowly when button 2 is pressed.

The second sketch is the receiver and prints any SWCAN frames it receives to the serial monitor. It also blinks an LED corresponding to whether or not the frame is extended.

Both sketches are based on the SWCAN MCP2515 library which can be installed from the link below:

{% embed url="https://github.com/macchina/Single-Wire-CAN-mcp2515" %}

#### OBD3way Setup

Connect both M2's and OBD3way board as shown below. This connects the SWCAN of one M2 to the SWCAN of the other.

![Use a single jumper to connect the SWCAN pins on both M2's.](../../../.gitbook/assets/20200826\_125500.jpg)

#### Test

Try pressing button 1 on the transmitter M2; both it and the other M2 should blink quickly as the frame is sent and received, respectively. If your receiving M2 is connected to a serial monitor the frame data will be printed there as well. Try pressing button 2 to send an extended frame. The same thing should happen with a slower blink indicating an extended frame.
