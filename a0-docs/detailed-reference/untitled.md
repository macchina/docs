---
description: A0 installation and OBD2 pinout.
---

# Installation

The Macchina A0 was designed with a convenient under-the-dash form factor that plugs directly into the OBD2 port of any modern car. 

![](../../.gitbook/assets/img_6702.jpg)

## Plug it in under your dash. That's it.

A0 plugs directly into the OBD2 port of the modern car. Any car built after 1996 has an OBD2 port near the steering wheel, under the dash.

![REPLACE WITH A0 IMAGE](../../.gitbook/assets/utd_09c94.png)

## A0 OBD2 connector pinout

The OBD2 connector is a 16 pin connector that provides power and a data connection. The image below shows the pin orientation of this 16 pin connector.

![M2 shown, but same connector as A0](../../.gitbook/assets/utd_connector.png)

This following table describes the functionality of each pin. Please note that A0 only supports a single channel of CAN \(CAN0\), the rest of the pins are provided for general reference.

## A0 OBD2 pins

| Pin | Schematic name | function |
| :--- | :--- | :--- |
| 1 | Not connected | - |
| 2 | Not connected | - |
| 3 | Not connected | - |
| 4 | **CHASSIS** | CHASSIS GND |
| 5 | **GND** | Digital GND |
| 6 | **HSC\_BUS+** | **CAN0 HIGH** |
| 7 | Not connected | - |
| 8 | Not connected | - |
| 9 | Not connected | - |
| 10 | Not connected | - |
| 11 | Not connected | - |
| 12 | Not connected | - |
| 13 | Not connected | - |
| 14 | **HSC\_BUS-** | **CAN0 LOW** |
| 15 | Not connected | - |
| 16 | **VIN** | **+12V INPUT** |

