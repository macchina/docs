# Pin Mapping

**NOTE!** This table is only applicable when using the M2 board as selected from the Tools -> Board menu from the Arduino IDE. See more information [here.](https://github.com/macchina/arduino-boards-sam)

**Use the names in the "Mapped Pin Name" column in your Arduino Sketch.**

A "pin mapping" describes how the different circuits of your M2 are connected to the processor. For example, the Green LED (DS6 on the schematic) is connected to pin 7 (AKA PA14) of the processor. To make things easier from a programming standpoint, we can map this to a pin name, in this case, the green LED is mapped to the name `DS6` (which is compiled to the value 18).

### LEDs

| Mapped Pin Name (use these in your sketch) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
|--------------------------------------------|----------------------|-------|----------------|-----------------------------|-----------------------------|
| DS2                                        | DS2 (RED)            |       | PD10           | 32                          | 14                          |
| DS3                                        | DS3 (YELLOW)         |       | PA5            | 25                          | 15                          |
| DS4                                        | DS4 (YELLOW)         |       | PD2            | 15                          | 16                          |
| DS5                                        | DS5 (YELLOW)         |       | PA15           | 8                           | 17                          |
| DS6                                        | DS6 (GREEN)          |       | PA14           | 7                           | 18                          |
| DS7_BLUE or RGB_BLUE                       | RGB BLUE             |       | PC25           | 136                         | 19                          |
| DS7_RED or RGB_RED                         | RGB RED              |       | PD7            | 20                          | 20                          |
| DS7_GREEN or RGB_GREEN                     | RGB GREEN            |       | PD8            | 21                          | 21                          |

### Buttons

| Mapped Pin Name (use these in your sketch) | M2 Board Signal Name | Notes                | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
|--------------------------------------------|----------------------|----------------------|----------------|-----------------------------|-----------------------------|
| Button1                                    | TACT SW1             | Button pressed = LOW | PC27           | 138                         | 22                          |
| Button2                                    | TACT SW2             | Button pressed = LOW | PB6            | 121                         | 23                          |

### SD Card
| Mapped Pin Name (use these in your sketch) | M2 Board Signal Name | Notes                  | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
|--------------------------------------------|----------------------|------------------------|----------------|-----------------------------|-----------------------------|
| SD_SW                                      | SD_SW                | Card is inserted = LOW | PC30           | 103                         | 36                          |
| MCCK                                       | MCCK                 |                        | PA19           | 71                          | 37                          |
| MCCDA                                      | MCCDA                |                        | PA20           | 72                          | 38                          |
| MCDA0                                      | MCDA0                |                        | PA21           | 107                         | 39                          |
| MCDA1                                      | MCDA1                |                        | PA22           | 81                          | 40                          |
| MCDA2                                      | MCDA2                |                        | PA23           | 80                          | 41                          |
| MCDA3                                      | MCDA3                |                        | PA24           | 79                          | 42                          |

### SD Card SPI

| Mapped Pin Name (use these in your sketch) | M2 Board Signal Name | Notes                    | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
|--------------------------------------------|----------------------|--------------------------|----------------|-----------------------------|-----------------------------|
| SPI0_CS1                                   | SPI0_nCS1            | Not connected by default | PA29           | 112                         | 46                          |
| SPI0_MOSI                                  | SPI0 MOSI            | Not connected by default | PA26           | 109                         | 44                          |
| SPI0_CLK                                   | SPI0 CLK             | Not connected by default | PA27           | 110                         | 45                          |
| SPI0_MISO                                  | SPI0 MISO            | Not connected by default | PA25           | 108                         | 43                          |

### 12-volt GPIO

| Mapped Pin Name (use these in your sketch) | M2 Board Signal Name | Notes                         | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
|--------------------------------------------|----------------------|-------------------------------|----------------|-----------------------------|-----------------------------|
| GPIO1                                      | GPIO1 A              | PWMH0                         | PC3            | 60                          | 24                          |
| GPIO2                                      | GPIO2 A              | PWMH1                         | PC5            | 63                          | 25                          |
| GPIO3                                      | GPIO3 A              | PWMH2                         | PC7            | 65                          | 26                          |
| GPIO4                                      | GPIO4 A              | PWMH3                         | PC9            | 67                          | 27                          |
| GPIO5                                      | GPIO5 A              | PWMH4                         | PC20           | 131                         | 28                          |
| GPIO6                                      | GPIO6 A              | PWMH5                         | PC19           | 101                         | 29                          |
| GPIO1_B                                    | GPIO1 B              | PWML0 (Beta M2 Hardware only) | PC2            | 59                          | 30                          |
| GPIO2_B                                    | GPIO2 B              | PWML1 (Beta M2 Hardware only) | PC4            | 116                         | 31                          |
| GPIO3_B                                    | GPIO3 B              | PWML2 (Beta M2 Hardware only) | PC6            | 64                          | 32                          |
| GPIO4_B                                    | GPIO4 B              | PWML3 (Beta M2 Hardware only) | PC8            | 66                          | 33                          |
| GPIO5_B                                    | GPIO5 B              | PWML4 (Beta M2 Hardware only) | PC21           | 132                         | 34                          |
| GPIO6_B                                    | GPIO6 B              | PWML5 (Beta M2 Hardware only) | PC22           | 133                         | 35                          |

### Analog Inputs

| Mapped Pin Name (use these in your sketch) | M2 Board Signal Name | Notes     | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
|--------------------------------------------|----------------------|-----------|----------------|-----------------------------|-----------------------------|
| ANALOG_1                                   | ANA 1                | J5 Pin 1  | PB19           | 90                          | 86                          |
| ANALOG_2                                   | ANA 2                | J5 Pin 5  | PB18           | 89                          | 87                          |
| ANALOG_3                                   | ANA 3                | J5 Pin 9  | PA2            | 85                          | 88                          |
| ANALOG_4                                   | ANA 4                | J5 Pin 13 | PA4            | 83                          | 89                          |
| ANALOG_5                                   | ANA 5                | J5 Pin 17 | PA3            | 84                          | 90                          |
| ANALOG_6                                   | ANA 6                | J5 Pin 21 | PA16           | 78                          | 91                          |

### GPIO Power Supply Current Sense

| Mapped Pin Name (use these in your sketch) | M2 Board Signal Name | Notes                                         | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
|--------------------------------------------|----------------------|-----------------------------------------------|----------------|-----------------------------|-----------------------------|
| I_SENSE_EN                                 | 12Vio_EN             | GPIO Power Supply Enable                      | PC24           | 135                         | 75                          |
| I_SENSE                                    | I SENSE 12V          | GPIO Power Supply Analog Current Sense        | PB17           | 88                          | 93                          |
| I-SENSE_INT                                | OVER_CURRENT         | GPIO Power Supply Interrupt                   | PD1            | 14                          | 76                          |
| I-SENSE_DAC                                | DAC1                 | GPIO Power Supply Analog Output to Comparator | PB16           | 77                          | 95                          |

### CAN

| Mapped Pin Name (use these in your sketch) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
|--------------------------------------------|----------------------|-------|----------------|-----------------------------|-----------------------------|
| CANRX0                                     | CANRX0               |       | PA1            | 24                          | 69                          |
| CANTX0                                     | CANTX0               |       | PA0            | 23                          | 70                          |
| CAN0_CS or HS_CS                           | HSC_S                |       | PD3            | 16                          | 71                          |
| CANRX1                                     | CANRX1               |       | PB15           | 76                          | 72                          |
| CANTX1                                     | CANTX1               |       | PB14           | 140                         | 73                          |
| CAN1_CS or MS_CS                           | MSC_S                |       | PD0            | 13                          | 25                          |

### Power Supplies

| Mapped Pin Name (use these in your sketch) | M2 Board Signal Name | Notes                   | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
|--------------------------------------------|----------------------|-------------------------|----------------|-----------------------------|-----------------------------|
| PS_BUCK or BUCK_DIS                        | BUCK_nDIS            |                         | PC10           | 117                         | 48                          |
| PS_J1850_9141                              | J1850 9141 ON        | Bring LOW for LOW power | PB5            | 120                         | 49                          |

### J1850

| Mapped Pin Name (use these in your sketch) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
|--------------------------------------------|----------------------|-------|----------------|-----------------------------|-----------------------------|
| J1850_PWM_VPW                              | J1850_PWM_nVPW       |       | PB8            | 123                         | 50                          |
| J1850_PWM_RX                               | J1850_PWM_RX         |       | PC28           | 139                         | 51                          |
| J1850_VPW_RX                               | J1850_VPW_RX         |       | PC26           | 137                         | 52                          |
| J1850P_TX                                  | J1850+_TX            |       | PC18           | 100                         | 53                          |
| J1850N_TX                                  | J1850-_TX            |       | PC23           | 134                         | 54                          |

### XBEE

| Mapped Pin Name (use these in your sketch) | M2 Board Signal Name | Notes            | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
|--------------------------------------------|----------------------|------------------|----------------|-----------------------------|-----------------------------|
| XBEE_RX or RX0                             | XB_UART RX           | UART serial URXD | PA8            | 27                          | 0                           |
| XBEE_TX or TX0                             | XB_UART TX           | UART serial UTXD | PA9            | 2                           | 1                           |
| XBEE_RST                                   | XB_nRST              |                  | PC11           | 93                          | 4                           |
| XBEE_PWM                                   | XB_RSSI_PWM          |                  | PB3            | 118                         | 7                           |
| XBEE_MULT4                                 | XB_MULT4             |                  | PD6            | 19                          | 11                          |
| XBEE_MULT5                                 | XB_MULT5             |                  | PD9            | 22                          | 12                          |
| XBEE_MULT1                                 | XB_MULT1             |                  | PC12           | 94                          | 8                           |
| XBEE_CTS                                   | XB_nCTS              |                  | PB26           | 1                           | 3                           |
| XBEE_STAT                                  | XB_STAT              |                  | PC13           | 95                          | 5                           |
| XBEE_VREF                                  | XB_Vref              |                  | PC14           | 96                          | 6                           |
| XBEE_MULT2                                 | XB_MULT2             |                  | PC15           | 97                          | 9                           |
| XBEE_RTS                                   | XB_nRTS              |                  | PB25           | 144                         | 2                           |
| XBEE_MULT3                                 | XB_MULT3             |                  | PC17           | 99                          | 10                          |
| XBEE_MULT6                                 | XB_MULT6             |                  | PA7            | 26                          | 13                          |

### 9141/LIN

| Mapped Pin Name (use these in your sketch) | M2 Board Signal Name | Notes   | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
|--------------------------------------------|----------------------|---------|----------------|-----------------------------|-----------------------------|
| LIN_KTX                                    | 9141 K TX            | Serial1 | PA11           | 4                           | 55                          |
| LIN_KRX                                    | 9141 K RX            |         | PA10           | 3                           | 56                          |
| LIN_KSLP                                   | 9141 K SLP           |         | PB4            | 119                         | 57                          |
| LIN_LTX                                    | 9141 L TX            | Serial2 | PA13           | 6                           | 58                          |
| LIN_LRX                                    | 9141 L RX            |         | PA12           | 5                           | 59                          |
| LIN_LSLP                                   | 9141 L SLP           |         | PB7            | 122                         | 60                          |

### Single-wire CAN

| Mapped Pin Name (use these in your sketch) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
|--------------------------------------------|----------------------|-------|----------------|-----------------------------|-----------------------------|
| SWC_M1                                     | SWC M1               |       | PB0            | 113                         | 65                          |
| SWC_M0                                     | SWC M0               |       | PB27           | 68                          | 64                          |
| SWC_SOF                                    | SWC SOF              |       | PC29           | 102                         | 68                          |
| SWC_CLK                                    | SWC CLK              |       | PB22           | 141                         | 66                          |
| SPI0_CS3                                   | SPI0_nCS3            |       | PB23           | 142                         | 63                          |
| SWC_INT                                    | SWC nINT             |       | PC16           | 98                          | 67                          |
| SWC_RX0                                    | SWC nRX0BF           |       | PB1            | 114                         | 61                          |
| SWC_RX1                                    | SWC nRX1BF           |       | PB2            | 115                         | 62                          |

### SPI0

| Mapped Pin Name (use these in your sketch) | M2 Board Signal Name | Notes                           | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
|--------------------------------------------|----------------------|---------------------------------|----------------|-----------------------------|-----------------------------|
| SPI0_MISO                                  | SPI0 MISO            | Optionally connected to SD Card | PA25           | 108                         | 43                          |
| SPI0_MOSI                                  | SPI0 MOSI            | Optionally connected to SD Card | PA26           | 109                         | 44                          |
| SPI0_CLK                                   | SPI0 CLK             | Optionally connected to SD Card | PA27           | 110                         | 45                          |
| SPI0_CS1                                   | SPI0_nCS1            | Optionally connected to SD Card | PA29           | 112                         | 46                          |
| SPI0_CS0                                   | SPI0_nCS0            |                                 | PA28           | 111                         | 47                          |

### 26-Pin GPIO Connector

| Mapped Pin Name (use these in your sketch) | M2 Board Signal Name | Notes                | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
|--------------------------------------------|----------------------|----------------------|----------------|-----------------------------|-----------------------------|
| TXD3                                       | UART3 TX             | J5 Pin 7 (3.3V UART) | PD4            | 17                          | 77                          |
| RXD3                                       | UART3 RX             | J5 Pin 8 (3.3V UART) | PD5            | 18                          | 78                          |
| SDA0                                       | SDA0                 | J5 Pin 4             | PA17           | 9                           | 79                          |
| SCL0                                       | SCL0                 | J5 Pin 3             | PA18           | 70                          | 80                          |
| SPI_CS2                                    | USART2RX             | J5 Pin 15            | PB21           | 92                          | 83                          |

### Misc.

| Mapped Pin Name (use these in your sketch) | M2 Board Signal Name | Notes                        | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
|--------------------------------------------|----------------------|------------------------------|----------------|-----------------------------|-----------------------------|
| V_SENSE                                    | AD3                  | Analogue input Vehicle Volts | PA6            | 82                          | 92                          |
| CPU_TEMP or A15                            | Internal             | CPU Temperature              | PD5            | Internal                    | 94                          |


### EEPROM Memory

| Mapped Pin Name (use these in your sketch) | M2 Board Signal Name | Notes  | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
|--------------------------------------------|----------------------|--------|----------------|-----------------------------|-----------------------------|
| SDA1                                       | SDA1                 | Eeprom | PB12           | 86                          | 81                          |
| SCL1                                       | SCL1                 | Eeprom | PB13           | 87                          | 82                          |

### CPU Test Point
| Mapped Pin Name (use these in your sketch) | M2 Board Signal Name | Notes         | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
|--------------------------------------------|----------------------|---------------|----------------|-----------------------------|-----------------------------|
| USART2TX                                   | USART2TX             | TP5 U2TX      | PB20           | 91                          | 84                          |
|                                            | unconnected          | not connected | PC1            | 55                          | 85                          |
|                                            | UOTGVBOF             |               | PB10           | 128                         |                             |
|                                            | UOTGID               |               | PB11           | 129                         |                             |
|                                            | ERASE_S              |               | PC0            | 130                         |                             |
|                                            | USART2 CK            |               | PB24           | 143                         |                             |

### CPU System Pins
| Mapped Pin Name (use these in your sketch) | M2 Board Signal Name | Notes                     | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
|--------------------------------------------|----------------------|---------------------------|----------------|-----------------------------|-----------------------------|
|                                            | VDDOUT               |                           | VDDCORE5       | 124                         |                             |
|                                            | +3.3V                |                           | VDDIO1         | 11                          |                             |
|                                            | +3.3V                |                           | VDDIO2         | 62                          |                             |
|                                            | +3.3V                |                           | VDDIO3         | 105                         |                             |
|                                            | +3.3V                |                           | VDDIO4         | 125                         |                             |
|                                            | DGND                 |                           | GND1           | 12                          |                             |
|                                            | DGND                 |                           | GND2           | 58                          |                             |
|                                            | DGND                 |                           | GND3           | 106                         |                             |
|                                            | DGND                 |                           | GND4           | 126                         |                             |
|                                            | DGND                 |                           | GNDPLL         | 33                          |                             |
|                                            | DGND                 |                           | GNDANA         | 74                          |                             |
|                                            | VDDPLL               |                           | VDDPLL         | 34                          |                             |
|                                            | XOUT                 | Crystal                   | XOUT           | 35                          |                             |
|                                            | XIN                  | Crystal                   | XIN            | 36                          |                             |
|                                            | D+                   | Micro USB pin3            | DHSDP          | 37                          |                             |
|                                            | D-                   | Micro USB pin2            | DHSDM          | 38                          |                             |
|                                            | VBUS                 | Micro USB pin1 +5Volts    | XUSB           | 39                          |                             |
|                                            | VBG                  |                           | VBG            | 40                          |                             |
|                                            | VDDUTMI              |                           | VDDUTMI        | 41                          |                             |
|                                            | DFSDP                |                           | DFSDP          | 42                          |                             |
|                                            | DFSDM                |                           | DFSDM          | 43                          |                             |
|                                            | DGND                 | Grounded pin              | GNDUTMI        | 44                          |                             |
|                                            | VDDOUT               |                           | GNDUTMI        | 45                          |                             |
|                                            | DGND                 | Grounded pin              | JTAGSEL        | 46                          |                             |
|                                            | M_nRST/SWC nRESET    | MCP2515 Reset             | NRSTB          | 47                          |                             |
|                                            | XIN32                | N/C                       | XIN32          | 48                          |                             |
|                                            | XOUT32               | N/C                       | XOUT32         | 49                          |                             |
|                                            |                      | N/C                       | SHDN           | 50                          |                             |
|                                            |                      | Grounded via Resistor     | TST            | 51                          |                             |
|                                            |                      | +3.3V via Resistor        | VDDBU          | 52                          |                             |
|                                            |                      | +3.3V via Resistor        | FWUP           | 53                          |                             |
|                                            |                      | Grounded pin              | GNDBU          | 54                          |                             |
|                                            | VDDOUT               |                           | VDDOUT         | 56                          |                             |
|                                            | +3.3V                |                           | VDDIN          | 57                          |                             |
|                                            | TP5                  |                           | NRST           | 69                          |                             |
|                                            | VDDANA               | VoltageAnalogue           | VDDANA         | 73                          |                             |
|                                            | DGND                 | Ground Analogue           | GNDANA         | 74                          |                             |
|                                            | DGND                 | Analogue Digital Volt ref | ADVREF         | 75                          |                             |
|                                            |                      |                           | PB9            | 127                         |                             |


### JTAG

| Mapped Pin Name (use these in your sketch) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
|--------------------------------------------|----------------------|-------|----------------|-----------------------------|-----------------------------|
|                                            | JTAG-TCK             | TP1   | PB28           | 28                          |                             |
|                                            | JTAG-TDI             | TP2   | PB29           | 29                          |                             |
|                                            | JTAG_TDO             | TP3   | PB30           | 30                          |                             |
|                                            | JTAG-TMS             | TP4   | PB31           | 31                          |                             |
