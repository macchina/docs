---
description: Multipurpose OBD2 development test board
---

# OBD2 test board - BETA 🧪

The OBD2 test board is designed to simplify OBD2 device development. 

![Typical setup: M2 is acting as an emulator while developing A0 code.](.gitbook/assets/img_6914.JPG)

{% hint style="info" %}
To purchase, click here:

[https://www.macchina.cc/catalog/tools/obd2-test-board-beta](https://www.macchina.cc/catalog/tools/obd2-test-board-beta)
{% endhint %}

## Components

The OBD2 test board has several components as shown below: 

![](.gitbook/assets/overall.png)

**INPUT OBD2 Connector:** 1 input OBD2 connector \(MALE pins\). This connector would plug into an OBD2 extension cable and eventually into a car's OBD2 port. 

**OUTPUT OBD2 Connectors:** 2 output connectors. \(FEMALE pins\). These connectors are the same as found in any modern car. 

**12V Input power source:** Use in external 12V power adapter when doing desktop OBD2 development. If OBD2 extension cable is used, you'll get power from the car and won't need the external power source. 

**Power jumpers:** Control power to each output by installing Jumpers. GREEN LED confirms power is ON. 

**Junction blocks:** Route OBD2 signals to the connectors as needed. All signals are broken out and available. More about Junction block functionality below. 

**CAN termination resistors:** 2 sets of termination resistors are available. These are typically used when using an emulator. 

## Junction blocks

The junction blocks near both OUTPUT OBD2 connector gives you the flexibility to change how signals move between connectors. Install a jumper wire between rows to make "through" connections, or jump over to other pins to rearrange signals. 

{% hint style="warning" %}
Warning - be careful when rearranging signals between OBD2 connectors. Not all pins have same voltage levels. 
{% endhint %}

The row closest to the OBD2 connector goes directly to the connector. 

The row farthest from the OBD2 connector goes directly to the INPUT OBD2 connector.  

![](.gitbook/assets/junction-block.png)

Note: Ground is already connected between the 3 OBD2 connects, but also available on junction blocks for convenience. 

## Modes

The OBD2 test board can function in several "modes" by rearranging how the signals route throughout the board. For example: 

#### 1. Sniffer:

This mode allows you to use external test equipment to watch traffic. In the example below, the CAN0 channel is being "Sniffed". 

![](.gitbook/assets/sniff.png)



#### 2. Man in the middle:

Put an OBD2 device \(i.e. M2\) in between the host and another OBD2 device \(i.e. OEM scanner, etc\).  This mode gets its name from the computer security term. Learn more here: 

{% embed url="https://en.wikipedia.org/wiki/Man-in-the-middle\_attack" %}

In our case, if we wanted to intercept, change or better understand a CAN conversation, we'd use the connections shown below. The CAN traffic _to_ and _from_ "Scanner" would need to go _though_ our device \(shown in the middle as "man" below\). 

![](.gitbook/assets/mitm%20%281%29.png)

#### 3. Emulator:

Connect 2 OBD2 dongles together for desktop development purposes. Typically, one of the devices would be set up to be an Emulator and the other a scanner, etc. In many cases, you'd need to ensure the CAN bus is terminated as shown below

![](.gitbook/assets/terminate%20%282%29.png)

#### 4. Other:

The OBD2 test board has several modes and many configurations - all of which can be made using standard jumper wires. For example, breakout or splitter modes are easy to do with the OBD2 test board. 

## **Schematic and board files**

We've put the schematics and board files into a Github repo. Feel free to create an issue with suggestions, bugs, etc. here: 

{% embed url="https://github.com/macchina/OBD2-TEST-BOARD-hardware" %}



