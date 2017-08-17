CAN
===

[Controller Area Network](https://en.wikipedia.org/wiki/CAN_bus)

CAN bus is a vehicle bus standard used in most cars built after 2006. It is a message-based protocol that allows modules within a car to communicate with one another. While the physical layer is understood and open, the actual meaning of the messages sent over the bus are not. While some messages are legislated to be "standard", the majority of CAN messages in your typical car are not well documented.

M2 has 2 CAN channels (In addition to a [Single-wire CAN](http://docs.macchina.cc/m2/automotive-interfaces/single-wire-can.html) channel) that can interface directly to the CAN bus network of your car. M2 uses the 2 built-in CAN controllers found in the SAM3X and 2 external TJA1051 transceivers.

Here is the link to the datasheet: http://www.nxp.com/docs/en/data-sheet/TJA1051.pdf

CAN bus connections can be found on either the 16 pin OBD2 connector on the [UTD M2](http://docs.macchina.cc/m2/overview/utd-under-dash.html) or the 24 pin connector used on the [UTH M2](http://docs.macchina.cc/m2/overview/uth-under-hood.html).

Arduino libraries are well developed and available here:

https://github.com/collin80/due_can

\[TO DO: Discuss termination and how to terminate with solder jumpers on interface board.\]

\[TO DO: Add schematic page for CAN bus transceivers\]
