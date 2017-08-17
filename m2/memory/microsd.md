microSD
=======

[microSD memory card](https://en.wikipedia.org/wiki/Secure_Digital)

M2 contains a microSD socket. Unlike most Arduino implementations of SD, we chose to employ the HSMCI (High Speed MultiMedia Card Interface) as the connection method. The result being both faster reading and writing, and freeing up the SPI interface for other fun stuff. If for some reason, SPI is needed, we did include some 0 ohm jumpers on the PCB to allow for SPI connection. These are left open by default.

<img src="/images/SD_card_schematic.png" />

For in-depth explaination of how the HSMCI works, refer to the SAM3X [datasheet](http://www.atmel.com/Images/Atmel-11057-32-bit-Cortex-M3-Microcontroller-SAM3X-SAM3A_Datasheet.pdf) , starting on page 909.

Using the SD card slot on M2 is pretty straight-forward since all of complexities are abstracted through a library. That library and test code was put together for the RepRap project, found here: <http://reprap.org/>

#### Install

To get started using the SD card on M2, download these 2 libraries to your library folder:

https://github.com/macchina/m2-libraries/tree/master/SD_HSMCI

https://github.com/macchina/m2-libraries/tree/master/Arduino_Due_SD_HSCMI

1. Download the files
2. Move both of the folders to your Arduino Libraries
3. Restart IDE

#### EXAMPLES

Several examples for using the SD card via HSMCI are included in the examples folder including:

* `DataLogger_dif` Creates file "data" in dir "0:" for logging raw data. Every time pushbutton is pushed, counter increment for 1 and number is logged into "data".

* `DirManipulation` creates directory "TestDir", than renames it to "DirFiles" and deletes it.

* `Dumpdata_SDtoSerial` reading from SD and printing on SerialUSB.

* `Dumpdata_SerialtoSD` reading from SerialUSB and writing to file.

* `FileList` creates files and writes to them, creates list of files, speed test.

* `FileManipulation` open/create, close, rename, delete file.
