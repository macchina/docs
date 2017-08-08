Pin mapping
===========

**NOTE!** This table is only applicable when using the "SamNonDuePin" library found [here.](https://github.com/macchina/m2-libraries/tree/master/SamNonDuePin) We are working on a more M2-specific pin mapping that will not require any additional libraries. See development status [here.](https://github.com/macchina/Macchina_Arduino_Boards)

A "pin mapping" describes how the different circuits of M2 are connected to the processor. For example, the Green LED (DS6 on the schematic) is connected to pin 7 (AKA PA14) of the processor. To make things easier from a programming standpoint, we can map this to a pin name, in this case, the green LED is mapped to pin 23.

The following table builds on the pin mapping for the Arduino Due and is similar to the DUE mapping found here:
<https://www.arduino.cc/en/Hacking/PinMappingSAM3X>

| Feature    | Signal                | SAM3X Pin Name | Mapped Pin Name   | Notes                    |
|------------|-----------------------|----------------|-------------------|--------------------------|
| LEDs       | DS2 (RED)             | PD10           | 32                |                          |
|            | DS3 (YELLOW)          | PA5            | X0                | Non-Due Pin              |
|            | DS4 (YELLOW)          | PD2            | 27                |                          |
|            | DS5 (YELLOW)          | PA15           | 24                |                          |
|            | DS6 (GREEN)           | PA14           | 23                |                          |
|            | RGB GREEN             | PD8            | 12                |                          |
|            | RGB BLUE              | PC25           | 5                 |                          |
|            | RGB RED               | PD7            | 11                |                          |
|            |                       |                |                   |                          |
| SWITCH     | TACT SW1              | PC27           | X1                | Non-Due Pin, Active LOW  |
|            | TACT SW2              | PB6            | PIN\_EMAC\_ERX1   | Non-Due Pin, Active LOW  |
|            |                       |                |                   |                          |
| SD card SW | SD\_SW                | PC30           | 72                | Card is inserted - LOW.  |
|            | MCDA2                 | PA23           | 56                |                          |
|            | MCDA3                 | PA24           | 55                |                          |
|            | MCCDA                 | PA20           | 43                |                          |
|            | MCCK                  | PA19           | 42                |                          |
|            | MCDA0                 | PA21           | 73                |                          |
|            | MCDA1                 | PA22           | 57                |                          |
|            |                       |                |                   |                          |
| GPIO       | GPIO1 A               | PC3, PWMH0     | 35                |                          |
|            | GPIO1 B               | PC2, PWML0     | 34                |                          |
|            | GPIO2 A               | PC5, PWMH1     | 37                |                          |
|            | GPIO2 B               | PC4, PWML1     | 36                |                          |
|            | GPIO3 A               | PC7, PWMH2     | 39                |                          |
|            | GPIO3 B               | PC6, PWML2     | 38                |                          |
|            | GPIO4 A               | PC9, PWMH3     | 41                |                          |
|            | GPIO4 B               | PC8, PWML3     | 40                |                          |
|            | GPIO5 A               | PC20, PWMH4    | X8                | Non-Due Pin              |
|            | GPIO5 B               | PC21, PWML4    | 9                 |                          |
|            | GPIO6 A               | PC19, PWMH5    | 44                |                          |
|            | GPIO6 B               | PC22, PWML5    | 8                 |                          |
|            |                       |                |                   |                          |
|            | ANA 1                 | PB19           | 64 (Analog In 10) |                          |
|            | ANA 2                 | PB18           | 63 (Analog In 9)  |                          |
|            | ANA 3                 | PA2            | 61 (Analog In 7)  |                          |
|            | ANA 4                 | PA4            | 59 (Analog In 5)  |                          |
|            | ANA 5                 | PA3            | 60 (Analog In 6)  |                          |
|            | ANA 6                 | PA16           | 54 (Analog In 0)  |                          |
|            |                       |                |                   |                          |
|            | 12Vio\_EN             | PC24           | 6                 |                          |
|            | I SENSE 12V           | PB17           | 62 (Analog In 8)  |                          |
|            | OVER\_CURRENT         | PD1            | 26                |                          |
|            | DAC1                  | PB16           | 67 (DAC1)         |                          |
|            |                       |                |                   |                          |
| CAN        | CANTX0                | PA0            | 69                |                          |
|            | CANRX0                | PA1            | 68                |                          |
|            | HSC\_S                | PD3            | 28                |                          |
|            | CANTX1                | PB14           | 53                |                          |
|            | CANRX1                | PB15           | 66                |                          |
|            | MSC\_S                | PD0            | 25                |                          |
|            |                       |                |                   |                          |
| J1850      | J1850\_PWM\_nVPW      | PB8            | PIN\_EMAC\_EMDC   | LOW = 7.83V, HIGH = 5.85 |
|            | J1850\_PWM\_RX        | PC28           | 3                 |                          |
|            | J1850\_VPW\_RX        | PC26           | 4                 |                          |
|            | J1850+\_TX            | PC18           | 45                |                          |
|            | J1850-\_TX            | PC23           | 7                 |                          |
|            |                       |                |                   |                          |
| PS         | BUCK\_nDIS            | PC10           | X25               | Non-Due Pin              |
|            | J1850 9141 ON         | PB5            | PIN\_EMAC\_ERX0   | Bring LOW for LOW power  |
|            |                       |                |                   |                          |
| XBEE       | XB\_UART RX           | PA8            | 0 (RX0)           |                          |
|            | XB\_UART TX           | PA9            | 1 (TX0)           |                          |
|            | SPI0 MISO             | PA25           | 74 (MISO)         |                          |
|            | XB\_nRST              | PC11           | X4                | Non-Due Pin              |
|            | XB\_RSSI\_PWM         | PB3            | ETX0              | Non-Due Pin              |
|            | XB\_MULT4             | PD6            | 29                |                          |
|            | XB\_MULT5             | PD9            | 30                |                          |
|            | XB\_MULT1             | PC12           | 51                |                          |
|            | SPI0 MOSI             | PA26           | 75 (MOSI)         |                          |
|            | XB\_nCTS              | PB26           | 22                |                          |
|            | XB\_STAT              | PC13           | 50                |                          |
|            | XB\_Vref              | PC14           | 49                |                          |
|            | XB\_MULT2             | PC15           | 48                |                          |
|            | XB\_nRTS              | PB25           | 2                 |                          |
|            | SPI0\_nCS0            | PA28           | 77                |                          |
|            | SPI0 CLK              | PA27           | 76 (SCK)          |                          |
|            | XB\_MULT3             | PC17           | 46                |                          |
|            | XB\_MULT6             | PA7            | 31                |                          |
|            |                       |                |                   |                          |
| 9141/LIN   | 9141 K TX             | PA11           | 18 (TX1)          |                          |
|            | 9141 K RX             | PA10           | 19 (RX1)          |                          |
|            | 9141 K SLP            | PB4            | PIN\_EMAC\_ECRSDV | Non-Due Pin              |
|            | 9141 L TX             | PA13           | 16 (TX2)          |                          |
|            | 9141 L RX             | PA12           | 17 (RX2)          |                          |
|            | 9141 L SLP            | PB7            | PIN\_EMAC\_ERXER  | Non-Due Pin              |
|            |                       |                |                   |                          |
| SWC        | SWC M1                | PB0            | PIN\_EMAC\_EREFCK |                          |
|            | SWC M0                | PB27           | 13                |                          |
|            | SWC SOF               | PC29           |                   |                          |
|            | SWC CLK               | PB22           |                   |                          |
|            | SWC\_nRESET (M\_nRST) | NRSTB          |                   |                          |
|            | SPI0\_nCS3            | PB23           | 78                |                          |
|            | SPI0 MISO             | PA25           | 74                |                          |
|            | SPI0 MOSI             | PA26           | 75                |                          |
|            | SPI0 CLK              | PA27           | 76                |                          |
|            | SWC nINT              | PC16           | 47                |                          |
|            | SWC nRX0BF            | PB1            | ETXEN             |                          |
|            | SWC nRX1BF            | PB2            | ETX0              |                          |


