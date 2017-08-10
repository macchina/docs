UTD (Under the Dash)
====================

The "Under-the-Dash" version of M2 plugs directly into the OBD2 port of the modern car. Any car built after 1996 has an OBD2 port near the steering wheel, under the dash.

<img src="/images/UTD_09c94.png" width="640" />

The OBD2 connector is a 16 pin connector that provides power and a data connection. The image below shows the pin orientation of this 16 pin connector.

<img src="/images/UTD_connector.png" width="640" />

This following table describes the functionality of each pin.

| Pin    | Schematic name| function    |
| ------ |-------------|-------------|           
| 1      | SWC_BUS      |  Single Wire CAN |
| 2      | J1850+_BUS       | J1850 + BUS|
| 3      | MSC_BUS+     | CAN1 HIGH |
| 4      | CHASSIS    | CHASSIS GND |
| 5      | DGND          | Digital GND |
| 6      | HSC_BUS+          | CAN0 HIGH |
| 7      | 9141_K_BUS    | K-LINE or LIN channel 1 |
| 8      | TP2_NET       | Test Point |
| 9      | TP1_NET       |  Test Point |
| 10     | J1850-_BUS    | J1850 - BUS |
| 11     | MSC_BUS-      | CAN1 LOW    |
| 12     | TP3_NET       | Test Point  |
| 13     | TP4_NET       | Test Point  |
| 14     | HSC_BUS-      | CAN0 LOW    |
| 15     | 9141_L_BUS    | L-LINE or LIN channel 2 |
| 16     | VIN           | +12V INPUT |
