---
description: Use A0 to read the VIN from a vehicle.
---

# A0 CAN Read VIN

Items Used

* 1x [A0](https://www.macchina.cc/catalog/a0-boards/a0-under-dash)
* 1x Car with OBD-II port

#### A0 Sketch

Upload :point\_right: [THIS SKETCH](https://github.com/macchina/A0_Read_VIN/) to your A0, which queries the vehicle‘s Vehicle Identification Number (VIN), and prints the result to the serial monitor. It requires two libraries, which can be found :point\_right:[here](https://github.com/collin80/esp32_can) and :point\_right:[here](https://github.com/collin80/can_common).

#### Vehicle Setup

Plug A0 into the OBD-II port found beneath the dashboard (usually between the steering wheel and pedals, by your left knee). Keep A0 connected to your computer with the USB cable and open the Arduino IDE's serial monitor at baud 115200.

#### Test

Watch the serial monitor. It should print out the VIN of your vehicle.

#### How It works

The Vehicle Identification Number (VIN) can be read from a vehicle using standard OBD-II commands. Several messages must be exchanged because the VIN is too long to fit in a single 8-byte CAN frame.

Standard OBD services are defined in ISO 15031-5. `Service 09 - Request vehicle information` allows requesting the VIN. The network protocol used to split this request over multiple CAN frames is defined in ISO 15765-2.

The sequence of messages used to read a VIN is as follows:

`0x7DF | 02 09 02`

A0 sends message from functional request ID 0x7DF. It is a SingleFrame with length of 2 (02). It is a request for the Request vehicle information service (09). The InfoType is VIN (02).

`0x7E8 | 10 14 49 02 01 31 4D 38`

Response from ECU #1. It is a FirstFrame with length of 20 (10 14). It contains the first 3 characters of the VIN “1M8” (31 4D 38).&#x20;

`0x7E0 | 30 00 00`

A0 sends message using ECU #1 request address. It is a FlowControl frame with status ContinueToSend (30). The BlockSize value tells the ECU to send all remaining frames (00). The SeparationTime is 0ms (00).

`0x7E8 | 21 47 44 4D 39 41 58 4B`

`0x7E8 | 22 50 30 34 32 37 38 38`

The ECU responds with two ConsecutiveFrame messages with sequence numbers 1 (21) and 2 (22). Each contains seven more characters of the VIN.

The VIN can then be assembled by combining the characters from each of three frames sent by the ECU: 31 4D 38 47 44 4D 39 41 58 4B 50 30 34 32 37 38 38, which translates to 1M8GDM9AXKP042788 in ASCII.\
\
