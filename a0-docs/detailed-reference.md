---
description: Pages containing more in depth coverage of A0
---

# Hardware Reference

## Installation

The Macchina A0 was designed with a convenient under-the-dash form factor that plugs directly into the OBD2 port of any modern car. 

A0 plugs directly into the OBD2 port of the modern car. Any car built after 1996 has an OBD2 port near the steering wheel, under the dash. Some manufactures hide the port behind a panel. 

{% hint style="info" %}
Not all cars with OBD2 ports use are compatible with A0, only cars with CAN bus on pins 6 and 14 are compatible. Cars from 2008 and newer should be compatible, many older cars are also compatible. Consult wiring diagrams of your car to verify. 
{% endhint %}

![](../.gitbook/assets/utd_09c94.png)

## A0 OBD2 connector pinout

The OBD2 connector is a 16 pin connector that provides power and a data connection. The image below shows the pin orientation of this 16 pin connector.



![M2 shown, but same connector as A0](../.gitbook/assets/utd_connector.png)

This following table describes the functionality of each pin. Please note that A0 only supports a single channel of CAN \(CAN0\), the rest of the pins are provided for general reference.

### A0 OBD2 pins

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

## Processor

A0 has two PCBs; one contains the ESP32 processor module, while the other contains the OBD2 connector and interface electronics. The upper PCB has a single momentary pushbutton \(requires removing the case to access\) and a RGB LED clearly visible through the top of the smoked case. A0 can communicate via WiFi and Bluetooth, or using the built-in microUSB port.

A0 uses the very popular Espressif ESP32, both as the application processor and the WiFi/BT radio processor.

Here is the link to the Espressif ESP32-WROOM32 datasheet: [https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32\_datasheet\_en.pdf](https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32_datasheet_en.pdf)

## Pin Mapping

**Use the names in the "Mapped Pin Name" column in your Arduino Sketch.**

A "pin mapping" describes how the different circuits of your M2 are connected to the processor. For example, the Green LED \(DS6 on the schematic\) is connected to pin 7 \(AKA PA14\) of the processor. To make things easier from a programming standpoint, we can map this to a pin name, in this case, the green LED is mapped to the name `DS6` \(which is compiled to the value 18\).

{% hint style="danger" %}
**Coming soon, refer to schematic below for now**
{% endhint %}

## CAN bus

[Controller Area Network](https://en.wikipedia.org/wiki/CAN_bus)​

CAN bus is a vehicle bus standard used in most cars built after 2006. It is a message-based protocol that allows modules within a car to communicate with one another. While the physical layer is understood and open, the actual meaning of the messages sent over the bus are not. While some messages are legislated to be "standard", the majority of CAN messages in your typical car are not well documented.

The A0 has 1 CAN channel that can interface directly to the CAN bus network of your car. The A0 uses an external TJA1051 CAN transceiver. Here is CAN interface schematic. Note that C19 and C20 are not populated on shipping hardware. 

![](../.gitbook/assets/2020-08-13-14_21_06-sch-01032-r0-schem.pdf-adobe-acrobat-reader-dc.png)



Here is the link to the TJA1051 datasheet: [http://www.nxp.com/docs/en/data-sheet/TJA1051.pdf](http://www.nxp.com/docs/en/data-sheet/TJA1051.pdf)​

CAN bus connections can also be found on the 16-pin OBD2 connector.

## Communication  <a id="usb"></a>

### WIFI and Bluetooth

ESP32 offers both WIFI and Bluetooth as wireless communication. More information here to follow.

### USB

A0 has a USB connector that will provide communication to the ESP32 processor AND power to A0. Reflashing ESP32 can be done through the USB port. More information here to follow.

## Power

Like all electronics, your A0 requires power to run. Your A0 can be connected directly to an OBD2 port for power. In addition, A0 can be powered via USB. If both USB power and OBD2 power are present, OBD2 power is prioritized. 

### Protection

A0 employs several circuits to protect the device from overcurrent, reverse voltage, and overvoltage.

## Storage/ Memory

A0 uses the ESP32-WROVER-I with following memory size: 

* 16MB \(128Mb\) external SPI flash
* 8 MB SPI Pseudo static RAM \(PSRAM\)
* A0 can also be custom ordered with additional solder down memory - Email info@macchina.cc for more information

## LED <a id="leds"></a>

A0 has an addressable RGB LED for programmable status indication.

## Button <a id="buttons"></a>

A0 has a single momentary pushbutton on the upper PCB, press it to reset the ESP32

{% hint style="info" %}
Note the Standard A0 does not ship with access to the button, email us at info@macchina.cc to order a modified A0 with an exposed button. 
{% endhint %}

## Schematics

The schematics for the A0 boards are open source on GitHub​ here: 

{% embed url="https://github.com/macchina/a0-hardware" %}

