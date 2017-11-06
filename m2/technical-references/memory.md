# Storage

The Macchina M2 offers non-volatile memory or data storage via EEPROM and microSD card. Non-volatile means this data will not be erased when power is cut to M2.

<img src="/images/Storage_Memory_labels.png" width="640"/>

## EEPROM

The M2 contains [electrically erasable programmable read-only memory](https://en.wikipedia.org/wiki/EEPROM) (EEPROM) for non-volatile memory.
The EEPROM is 32Kbits and controlled via I2C @ address 0x50 Hex.

<img src="/images/EEPROM_schematic.png" width="640"/>

Here is the link to the datasheet: http://ww1.microchip.com/downloads/en/DeviceDoc/21713M.pdf

## microSD

The M2 contains a [microSD](https://en.wikipedia.org/wiki/Secure_Digital) socket. Unlike most Arduino implementations of SD, we chose to employ the HSMCI (High Speed MultiMedia Card Interface) as the connection method. The result being both faster reading and writing, and freeing up the SPI interface for other fun stuff. If for some reason, SPI is needed, we did include some 0 ohm jumpers on the PCB to allow for SPI connection. These are left open by default.

<img src="/images/SD_schematic.png" width="640"/>

For in-depth explanation of how the HSMCI works, refer to the [SAM3X datasheet](http://www.atmel.com/Images/Atmel-11057-32-bit-Cortex-M3-Microcontroller-SAM3X-SAM3A_Datasheet.pdf), starting on page 909.

Using the SD card slot on your M2 is pretty straight-forward since the complexities are abstracted through a library which was automatically installed for you when you setup your Arduino IDE for the Macchina M2. A description of the examples included with the library can be found [here](https://github.com/macchina/M2_SD_HSMCI#examples).
