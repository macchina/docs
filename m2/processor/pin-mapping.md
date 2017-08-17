Pin mapping
===========

**NOTE!** This table is only applicable when using the M2 board as selected from the Tools -> Board menu from the Arduino IDE. See more information [here.](https://github.com/macchina/Macchina_Arduino_Boards)

**Use the names in the "Mapped Pin Name" in your Arduino Sketch.**

An alternative method is for re-mapping pin names is the "SamNonDuePin" library found [here.](https://github.com/macchina/m2-libraries/tree/master/SamNonDuePin)

A "pin mapping" describes how the different circuits of M2 are connected to the processor. For example, the Green LED (DS6 on the schematic) is connected to pin 7 (AKA PA14) of the processor. To make things easier from a programming standpoint, we can map this to a pin name, in this case, the green LED is mapped to pin 23.

The following table builds on the pin mapping for the Arduino Due and is similar to the DUE mapping found here:
<https://www.arduino.cc/en/Hacking/PinMappingSAM3X>

| Feature                         | PinDescription Array Number | Mapped Pin Name       | SAM3X Pin Name | M2 Board Signal Name | Notes                                         | Processor CHIP physical PIN |
|---------------------------------|-----------------------------|-----------------------|----------------|----------------------|-----------------------------------------------|-----------------------------|
| **LEDs**                        | 14                          | DS2                   | PD10           | DS2 (RED)            |                                               | 32                          |
|                                 | 15                          | DS3                   | PA5            | DS3 (YELLOW)         |                                               | 25                          |
|                                 | 16                          | DS4                   | PD2            | DS4 (YELLOW)         |                                               | 15                          |
|                                 | 17                          | DS5                   | PA15           | DS5 (YELLOW)         |                                               | 8                           |
|                                 | 18                          | DS6                   | PA14           | DS6 (GREEN)          |                                               | 7                           |
|                                 | 19                          | DS7_RED / RGB_RED     | PD7            | RGB RED              |                                               | 20                          |
|                                 | 20                          | DS7_GREEN / RGB_GREEN | PD8            | RGB GREEN            |                                               | 21                          |
|                                 | 21                          | DS7_BLUE / RGB_BLUE   | PC25           | RGB BLUE             |                                               | 136                         |
|                                 |                             |                       |                |                      |                                               |                             |
| **Buttons**                     | 22                          | BUTTON1               | PC27           | TACT SW1             | Button pressed = LOW                          | 138                         |
|                                 | 23                          | BUTTON2               | PB6            | TACT SW2             | Button pressed = LOW                          | 121                         |
|                                 |                             |                       |                |                      |                                               |                             |
| **SD Card**                     | 36                          | SD_SW                 | PC30           | SD_SW                | Card is inserted = LOW                        | 103                         |
|                                 | 37                          | MCCK                  | PA19           | MCCK                 |                                               | 71                          |
|                                 | 38                          | MCCDA                 | PA20           | MCCDA                |                                               | 72                          |
|                                 | 39                          | MCDA0                 | PA21           | MCDA0                |                                               | 107                         |
|                                 | 40                          | MCDA1                 | PA22           | MCDA1                |                                               | 81                          |
|                                 | 41                          | MCDA2                 | PA23           | MCDA2                |                                               | 80                          |
|                                 | 42                          | MCDA3                 | PA24           | MCDA3                |                                               | 79                          |
|                                 |                             |                       |                |                      |                                               |                             |
| **SD Card SPI**                 | 46                          | SPI0_CS1              | PA29           | SPI0_nCS1            | Not connected by default                      | 112                         |
|                                 | 44                          | SPI0_MOSI             | PA26           | SPI0 MOSI            | Not connected by default                      | 109                         |
|                                 | 45                          | SPI0_CLK              | PA27           | SPI0 CLK             | Not connected by default                      | 110                         |
|                                 | 43                          | SPI0_MISO             | PA25           | SPI0 MISO            | Not connected by default                      | 108                         |
|                                 |                             |                       |                |                      |                                               |                             |
| **12-volt GPIO**                | 24                          | GPIO1                 | PC3            | GPIO1 A              | PWMH0                                         | 60                          |
|                                 | 25                          | GPIO2                 | PC5            | GPIO2 A              | PWMH1                                         | 63                          |
|                                 | 26                          | GPIO3                 | PC7            | GPIO3 A              | PWMH2                                         | 65                          |
|                                 | 27                          | GPIO4                 | PC9            | GPIO4 A              | PWMH3                                         | 67                          |
|                                 | 28                          | GPIO5                 | PC20           | GPIO5 A              | PWMH4                                         | 131                         |
|                                 | 29                          | GPIO6                 | PC19           | GPIO6 A              | PWMH5                                         | 101                         |
|                                 | 30                          | GPIO1_B               | PC2            | GPIO1 B              | PWML0                                         | 59                          |
|                                 | 31                          | GPIO2_B               | PC4            | GPIO2 B              | PWML1                                         | 116                         |
|                                 | 32                          | GPIO3_B               | PC6            | GPIO3 B              | PWML2                                         | 64                          |
|                                 | 33                          | GPIO4_B               | PC8            | GPIO4 B              | PWML3                                         | 66                          |
|                                 | 34                          | GPIO5_B               | PC21           | GPIO5 B              | PWML4                                         | 132                         |
|                                 | 35                          | GPIO6_B               | PC22           | GPIO6 B              | PWML5                                         | 133                         |
|                                 |                             |                       |                |                      |                                               |                             |
| **Analog Inputs**               | 86                          | ANALOG_1              | PB19           | ANA 1                | J5 Pin 1                                      | 90                          |
|                                 | 87                          | ANALOG_2              | PB18           | ANA 2                | J5 Pin 5                                      | 89                          |
|                                 | 88                          | ANALOG_3              | PA2            | ANA 3                | J5 Pin 9                                      | 85                          |
|                                 | 89                          | ANALOG_4              | PA4            | ANA 4                | J5 Pin 13                                     | 83                          |
|                                 | 90                          | ANALOG_5              | PA3            | ANA 5                | J5 Pin 17                                     | 84                          |
|                                 | 91                          | ANALOG_6              | PA16           | ANA 6                | J5 Pin 21                                     | 78                          |
|                                 |                             |                       |                |                      |                                               |                             |
| **GPIO Power Supply Current Sense** | 75                      | I_SENSE_EN            | PC24           | 12Vio_EN             |                                               | 135                         |
|                                 | 93                          | I_SENSE               | PB17           | I SENSE 12V          | GPIO Power Supply Analog Current Sense        | 88                          |
|                                 | 76                          | I-SENSE_INT           | PD1            | OVER_CURRENT         |                                               | 14                          |
|                                 | 95                          | I-SENSE_DAC           | PB16           | DAC1                 | GPIO Power Supply Analog Output to Comparator | 77                          |
|                                 |                             |                       |                |                      |                                               |                             |
| **CAN**                         | 69                          | CANRX0                | PA1            | CANRX0               |                                               | 24                          |
|                                 | 70                          | CANTX0                | PA0            | CANTX0               |                                               | 23                          |
|                                 | 71                          | CAN0_CS  HS_CS        | PD3            | HSC_S                |                                               | 16                          |
|                                 | 72                          | CANRX1                | PB15           | CANRX1               |                                               | 76                          |
|                                 | 73                          | CANTX1                | PB14           | CANTX1               |                                               | 140                         |
|                                 | 25                          | CAN1_CS  MS_CS        | PD0            | MSC_S                |                                               | 13                          |
|                                 |                             |                       |                |                      |                                               |                             |
| ** Power Supplies**             | 48                          | PS_BUCK  BUCK_DIS     | PC10           | BUCK_nDIS            |                                               | 117                         |
|                                 | 49                          | PS_J1850_9141         | PB5            | J1850 9141 ON        | Bring LOW for LOW power                       | 120                         |
|                                 |                             |                       |                |                      |                                               |                             |
| **J1850**                       | 50                          | J1850PWM_VPW          | PB8            | J1850_PWM_nVPW       |                                               | 123                         |
|                                 | 51                          | J1850_PWM_RX          | PC28           | J1850_PWM_RX         |                                               | 139                         |
|                                 | 52                          | J1850_VPW_RX          | PC26           | J1850_VPW_RX         |                                               | 137                         |
|                                 | 53                          | J1850P_TX             | PC18           | J1850+_TX            |                                               | 100                         |
|                                 | 54                          | J1850N_TX             | PC23           | J1850-_TX            |                                               | 134                         |
|                                 |                             |                       |                |                      |                                               |                             |
| **XBEE**                        | 0                           | XBEE_RX / RX0         | PA8            | XB_UART RX           | UART serial URXD                              | 27                          |
|                                 | 1                           | XBEE_TX / TX0         | PA9            | XB_UART TX           | UART serial UTXD                              | 2                           |
|                                 | 4                           | XBEE_RST              | PC11           | XB_nRST              |                                               | 93                          |
|                                 | 7                           | XBEE_PWM              | PB3            | XB_RSSI_PWM          |                                               | 118                         |
|                                 | 11                          | XBEE_MULT4            | PD6            | XB_MULT4             |                                               | 19                          |
|                                 | 12                          | XBEE_MULT5            | PD9            | XB_MULT5             |                                               | 22                          |
|                                 | 8                           | XBEE_MULT1            | PC12           | XB_MULT1             |                                               | 94                          |
|                                 | 3                           | XBEE_CTS              | PB26           | XB_nCTS              |                                               | 1                           |
|                                 | 5                           | XBEE_STAT             | PC13           | XB_STAT              |                                               | 95                          |
|                                 | 6                           | XBEE_VREF             | PC14           | XB_Vref              |                                               | 96                          |
|                                 | 9                           | XBEE_MULT2            | PC15           | XB_MULT2             |                                               | 97                          |
|                                 | 2                           | XBEE_RTS              | PB25           | XB_nRTS              |                                               | 144                         |
|                                 | 10                          | XBEE_MULT3            | PC17           | XB_MULT3             |                                               | 99                          |
|                                 | 13                          | XBEE_MULT6            | PA7            | XB_MULT6             |                                               | 26                          |
|                                 |                             |                       |                |                      |                                               |                             |
| **9141/LIN**                    | 55                          | LIN_KTX               | PA11           | 9141 K TX            | Serial1                                       | 4                           |
|                                 | 56                          | LIN_KRX               | PA10           | 9141 K RX            |                                               | 3                           |
|                                 | 57                          | LIN_KSLP              | PB4            | 9141 K SLP           |                                               | 119                         |
|                                 | 58                          | LIN_LTX               | PA13           | 9141 L TX            | Serial2                                       | 6                           |
|                                 | 59                          | LIN_LRX               | PA12           | 9141 L RX            |                                               | 5                           |
|                                 | 60                          | LIN_LSLP              | PB7            | 9141 L SLP           |                                               | 122                         |
|                                 |                             |                       |                |                      |                                               |                             |
| **Single Wire CAN**             | 65                          | SWC_M1                | PB0            | SWC M1               |                                               | 113                         |
|                                 | 64                          | SWC_M0                | PB27           | SWC M0               |                                               | 68                          |
|                                 | 68                          | SWC_SOF               | PC29           | SWC SOF              |                                               | 102                         |
|                                 | 66                          | SWC_CLK               | PB22           | SWC CLK              |                                               | 141                         |
|                                 | 63                          | SPI0_CS3              | PB23           | SPI0_nCS3            |                                               | 142                         |
|                                 | 67                          | SWC_INT               | PC16           | SWC nINT             |                                               | 98                          |
|                                 | 61                          | SWC_RX0               | PB1            | SWC nRX0BF           |                                               | 114                         |
|                                 | 62                          | SWC_RX1               | PB2            | SWC nRX1BF           |                                               | 115                         |
|                                 |                             |                       |                |                      |                                               |                             |
| **SPI0**                        | 43                          | SPI0_MISO             | PA25           | SPI0 MISO            | Optionally connected to SD Card               | 108                         |
|                                 | 44                          | SPI0_MOSI             | PA26           | SPI0 MOSI            | Optionally connected to SD Card               | 109                         |
|                                 | 45                          | SPI0_CLK              | PA27           | SPI0 CLK             | Optionally connected to SD Card               | 110                         |
|                                 | 46                          | SPI0_CS1              | PA29           | SPI0_nCS1            | Optionally connected to SD Card               | 112                         |
|                                 | 47                          | SPI0_CS0              | PA28           | SPI0_nCS0            |                                               | 111                         |
|                                 |                             |                       |                |                      |                                               |                             |
| **26-Pin GPIO Connector**       | 77                          | TXD3                  | PD4            | UART3 TX             | J5 Pin 7 (3.3V USART3 Serial3)                | 17                          |
|                                 | 78                          | RXD3                  | PD5            | UART3 RX             | J5 Pin 8 (3.3V USART3 Serial3)                | 18                          |
|                                 | 79                          | SDA0                  | PA17           | SDA0                 | J5 Pin 4                                      | 9                           |
|                                 | 80                          | SCL0                  | PA18           | SCL0                 | J5 Pin 3                                      | 70                          |
|                                 | 83                          | SPI_CS2               | PB21           | USART2RX             | TP4 U2RX                                      | 92                          |
|                                 |                             |                       |                |                      |                                               |                             |
| **MISC**                        | 92                          | V_SENSE               | PA6            | AD3                  | Analogue input Vehicle Volts                  | 82                          |
|                                 | 94                          | CPU_TEMP  A15         | PD5            | Internal             | CPU Temperature                               | Internal                    |
|                                 |                             |                       |                |                      |                                               |                             |
| **Eeprom Memory**               | 81                          | SDA1                  | PB12           | SDA1                 | Eeprom                                        | 86                          |
|                                 | 82                          | SCL1                  | PB13           | SCL1                 | Eeprom                                        | 87                          |
|                                 |                             |                       |                |                      |                                               |                             |
| **CPU Test Point**              | 84                          | USART2TX              | PB20           | USART2TX             | TP5 U2TX                                      | 91                          |
| **unconnected**                 | 85                          |                       | PC1            | unconnected          | not connected                                 | 55                          |
|                                 |                             |                       |                |                      |                                               |                             |
|                                 |                             |                       | PB10           | UOTGVBOF             |                                               | 128                         |
|                                 |                             |                       | PB11           | UOTGID               |                                               | 129                         |
|                                 |                             |                       | PC0            | ERASE_S              |                                               | 130                         |
|                                 |                             |                       | PB24           | USART2 CK            |                                               | 143                         |
|                                 |                             |                       |                |                      |                                               |                             |
| **CPU System Pins**             |                             |                       | VDDCORE1       | VDDOUT               |                                               | 10                          |
|                                 |                             |                       | VDDCORE3       | VDDOUT               |                                               | 61                          |
|                                 |                             |                       | VDDCORE4       | VDDOUT               |                                               | 104                         |
|                                 |                             |                       | VDDCORE5       | VDDOUT               |                                               | 124                         |
|                                 |                             |                       | VDDIO1         | +3.3V                |                                               | 11                          |
|                                 |                             |                       | VDDIO2         | +3.3V                |                                               | 62                          |
|                                 |                             |                       | VDDIO3         | +3.3V                |                                               | 105                         |
|                                 |                             |                       | VDDIO4         | +3.3V                |                                               | 125                         |
|                                 |                             |                       | GND1           | DGND                 |                                               | 12                          |
|                                 |                             |                       | GND2           | DGND                 |                                               | 58                          |
|                                 |                             |                       | GND3           | DGND                 |                                               | 106                         |
|                                 |                             |                       | GND4           | DGND                 |                                               | 126                         |
|                                 |                             |                       | GNDPLL         | DGND                 |                                               | 33                          |
|                                 |                             |                       | GNDANA         | DGND                 |                                               | 74                          |
|                                 |                             |                       | VDDPLL         | VDDPLL               |                                               | 34                          |
|                                 |                             |                       | XOUT           | XOUT                 | Crystal                                       | 35                          |
|                                 |                             |                       | XIN            | XIN                  | Crystal                                       | 36                          |
|                                 |                             |                       | DHSDP          | D+                   | Micro USB pin3                                | 37                          |
|                                 |                             |                       | DHSDM          | D-                   | Micro USB pin2                                | 38                          |
|                                 |                             |                       | XUSB           | VBUS                 | Micro USB pin1 +5Volts                        | 39                          |
|                                 |                             |                       | VBG            | VBG                  |                                               | 40                          |
|                                 |                             |                       | VDDUTMI        | VDDUTMI              |                                               | 41                          |
|                                 |                             |                       | DFSDP          | DFSDP                |                                               | 42                          |
|                                 |                             |                       | DFSDM          | DFSDM                |                                               | 43                          |
|                                 |                             |                       | GNDUTMI        | DGND                 | Grounded pin                                  | 44                          |
|                                 |                             |                       | GNDUTMI        | VDDOUT               |                                               | 45                          |
|                                 |                             |                       | JTAGSEL        | DGND                 | Grounded pin                                  | 46                          |
|                                 |                             |                       | NRSTB          | M_nRST/SWC nRESET    | MCP2515 Reset                                 | 47                          |
|                                 |                             |                       | XIN32          | XIN32                | N/C                                           | 48                          |
|                                 |                             |                       | XOUT32         | XOUT32               | N/C                                           | 49                          |
|                                 |                             |                       | SHDN           |                      | N/C                                           | 50                          |
|                                 |                             |                       | TST            |                      | Grounded via Resistor                         | 51                          |
|                                 |                             |                       | VDDBU          |                      | +3.3V via Resistor                            | 52                          |
|                                 |                             |                       | FWUP           |                      | +3.3V via Resistor                            | 53                          |
|                                 |                             |                       | GNDBU          |                      | Grounded pin                                  | 54                          |
|                                 |                             |                       | VDDOUT         | VDDOUT               |                                               | 56                          |
|                                 |                             |                       | VDDIN          | +3.3V                |                                               | 57                          |
|                                 |                             |                       | NRST           | TP5                  |                                               | 69                          |
|                                 |                             |                       | VDDANA         | VDDANA               | VoltageAnalogue                               | 73                          |
|                                 |                             |                       | GNDANA         | DGND                 | Ground Analogue                               | 74                          |
|                                 |                             |                       | ADVREF         | DGND                 | Analogue Digital Volt ref                     | 75                          |
|                                 |                             |                       |                |                      |                                               |                             |
|                                 |                             |                       | PB9            |                      |                                               | 127                         |
|                                 |                             |                       |                |                      |                                               |                             |
|                                 |                             |                       |                |                      |                                               |                             |
| **Test & Programing Pins**      |                             |                       | PB28           | JTAG-TCK             | TP1                                           | 28                          |
|                                 |                             |                       | PB29           | JTAG-TDI             | TP2                                           | 29                          |
|                                 |                             |                       | PB30           | JTAG_TDO             | TP3                                           | 30                          |
|                                 |                             |                       | PB31           | JTAG-TMS             | TP4                                           | 31                          |
