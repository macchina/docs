microSD
=======

<embed src="/images/Sandisk_microSDXC_64GB_Ultrac6dc.html" width="220" height="160" />

M2.0 contains a microSD socket. Unlike most Arduino implementations of SD, we chose to employ the HSMCI (High Speed MultiMedia Card Interface) as the connection method. The result being both faster reading and writing, and freeing up the SPI interface for other fun stuff. If for some reason, SPI is needed, we did include some 0 ohm jumpers on the PCB to allow for SPI connection. These are left open by default.

For in-depth explaination of how the HSMCI works, refer to the SAM3X [datasheet](http://www.atmel.com/Images/Atmel-11057-32-bit-Cortex-M3-Microcontroller-SAM3X-SAM3A_Datasheet.pdf) , starting on page 909.

Using the SD cars slot on M2 is pretty straight-forward since all of complexities are abstracted through a library.

That library and test code was put together for the RepRap project, found here: <http://reprap.org/> with the actual library found in this repo:

<https://github.com/jmgiacalone/Arduino-libraries>

Download the libraries and place "SD\_HSMCI" in the Arduino Library folder. Restart IDE and use the following code to test MicroSD card reading and writing. To be continued....
