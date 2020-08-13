---
description: How A0 communicates with your car
---

# Automotive Interface

A0 contains both the power supply circuitry and the CAN automotive interface required to communicate with your car.

To find libraries for any A0 interfaces, try the [Macchina Community Showcase](http://showcase.macchina.cc/libraries.html). 

#### SOUNDS LIKE BULLSHIT TO ME, WHY BOTHER?

![NEED THE  A0 VERSION OF THIS IMAGE](https://gblobscdn.gitbook.com/assets%2F-Lhg5aaQ-eiSLOcDoH85%2F-Lhg646e0zcy2Yk5d5Sb%2F-Lhg6CD8Cb9DXtcE91wG%2FInterface_0d024.png?alt=media)

## CAN <a id="can"></a>

​[Controller Area Network](https://en.wikipedia.org/wiki/CAN_bus)​

CAN bus is a vehicle bus standard used in most cars built after 2006. It is a message-based protocol that allows modules within a car to communicate with one another. While the physical layer is understood and open, the actual meaning of the messages sent over the bus are not. While some messages are legislated to be "standard", the majority of CAN messages in your typical car are not well documented.

The A0 has 1 CAN channel _**\(in addition to the single-wire CAN channel\) IS THIS STILL THE CASE FOR A0??**_ that can interface directly to the CAN bus network of your car. The A0 uses an external TJA1051 CAN transceiver. Here is a typical example:

![NEED THE A0 VERSION OF THIS IMAGE](https://gblobscdn.gitbook.com/assets%2F-Lhg5aaQ-eiSLOcDoH85%2F-Lhg646e0zcy2Yk5d5Sb%2F-Lhg6CDILoDl7_u0_Xo2%2FCAN_schematic.png?alt=media)

Here is the link to the TJA1051 datasheet: [http://www.nxp.com/docs/en/data-sheet/TJA1051.pdf](http://www.nxp.com/docs/en/data-sheet/TJA1051.pdf)​

CAN bus connections can also be found on the 16-pin OBD2 connector.



