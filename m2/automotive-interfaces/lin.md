LIN
===

[Local Interconnect Network](https://en.wikipedia.org/wiki/Local_Interconnect_Network)

LIN bus is an inexpensive, single wire, serial network protocol used in many modern cars. Typically, LIN would be used to control and monitor lower-priority devices such as seat positions, door locks, radio and illumination.

M2 has 2 LIN channels that can interface directly to the LIN bus network of your car. M2 uses 2 external TJA1021 transceivers connected via UART to the processor.

Here is the link to the datasheet: http://www.nxp.com/docs/en/data-sheet/TJA1021.pdf

Note that the TJA1021 transceiver is used for both LIN and ISO9141 (K-LINE/L-LINE) for a a total of 2 channels.

LIN bus connections can be found on either the 16 pin OBD2 connector on the [UTD M2](http://docs.macchina.cc/m2/overview/utd-under-dash.html) or the 24 pin connector used on the [UTH M2](http://docs.macchina.cc/m2/overview/uth-under-hood.html).

<img src="/images/LIN_Logo_0114b.jpg" width="220" />

Arduino libraries are available here:

https://github.com/macchina/m2-libraries/tree/master/LIN
