# Pin Mapping

**NOTE!** This table is only applicable when using the M2 board as selected from the Tools -&gt; Board menu from the Arduino IDE. See more information [here.](https://github.com/macchina/arduino-boards-sam)

**Use the names in the "Mapped Pin Name" column in your Arduino Sketch.**

A "pin mapping" describes how the different circuits of your M2 are connected to the processor. For example, the Green LED \(DS6 on the schematic\) is connected to pin 7 \(AKA PA14\) of the processor. To make things easier from a programming standpoint, we can map this to a pin name, in this case, the green LED is mapped to the name `DS6` \(which is compiled to the value 18\).

## LEDs

| Mapped Pin Name \(use these in your sketch\) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| DS2 | DS2 \(RED\) | LED ON = LOW | PD10 | 32 | 14 |
| DS3 | DS3 \(YELLOW\) | LED ON = LOW | PA5 | 25 | 15 |
| DS4 | DS4 \(YELLOW\) | LED ON = LOW | PD2 | 15 | 16 |
| DS5 | DS5 \(YELLOW\) | LED ON = LOW | PA15 | 8 | 17 |
| DS6 | DS6 \(GREEN\) | LED ON = LOW | PA14 | 7 | 18 |
| DS7\_BLUE or RGB\_BLUE | RGB BLUE | LED ON = LOW | PC25 | 136 | 19 |
| DS7\_RED or RGB\_RED | RGB RED | LED ON = LOW | PD7 | 20 | 20 |
| DS7\_GREEN or RGB\_GREEN | RGB GREEN | LED ON = LOW | PD8 | 21 | 21 |

## Buttons

| Mapped Pin Name \(use these in your sketch\) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Button1 | TACT SW1 | Button pressed = LOW | PC27 | 138 | 22 |
| Button2 | TACT SW2 | Button pressed = LOW | PB6 | 121 | 23 |

## SD Card

| Mapped Pin Name \(use these in your sketch\) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| SD\_SW | SD\_SW | Card is inserted = LOW | PC30 | 103 | 36 |
| MCCK | MCCK |  | PA19 | 71 | 37 |
| MCCDA | MCCDA |  | PA20 | 72 | 38 |
| MCDA0 | MCDA0 |  | PA21 | 107 | 39 |
| MCDA1 | MCDA1 |  | PA22 | 81 | 40 |
| MCDA2 | MCDA2 |  | PA23 | 80 | 41 |
| MCDA3 | MCDA3 |  | PA24 | 79 | 42 |

## SD Card SPI

| Mapped Pin Name \(use these in your sketch\) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| SPI0\_CS1 | SPI0\_nCS1 | Not connected by default | PA29 | 112 | 46 |
| SPI0\_MOSI | SPI0 MOSI | Not connected by default | PA26 | 109 | 44 |
| SPI0\_CLK | SPI0 CLK | Not connected by default | PA27 | 110 | 45 |
| SPI0\_MISO | SPI0 MISO | Not connected by default | PA25 | 108 | 43 |

## 12-volt Outputs

| Mapped Pin Name \(use these in your sketch\) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GPIO1 | GPIO1 A | SOURCE \(J5, Pin 2\) | PC3 \(PWMH0\) | 60 | 24 |
| GPIO2 | GPIO2 A | SOURCE \(J5, Pin 2\) | PC5 \(PWMH1\) | 63 | 25 |
| GPIO3 | GPIO3 A | SOURCE \(J5, Pin 2\) | PC7 \(PWMH2\) | 65 | 26 |
| GPIO4 | GPIO4 A | SINK \(J5, Pin 2\) | PC9 \(PWMH3\) | 67 | 27 |
| GPIO5 | GPIO5 A | SINK \(J5, Pin 2\) | PC20 \(PWMH4\) | 131 | 28 |
| GPIO6 | GPIO6 A | SINK \(J5, Pin 2\) | PC19 \(PWMH5\) | 101 | 29 |
| GPIO1\_B | GPIO1 B | PWML0 \(Beta M2 Hardware only\) | PC2  \(PWML0\) | 59 | 30 |
| GPIO2\_B | GPIO2 B | PWML1 \(Beta M2 Hardware only\) | PC4  \(PWML1\) | 116 | 31 |
| GPIO3\_B | GPIO3 B | PWML2 \(Beta M2 Hardware only\) | PC6  \(PWML2\) | 64 | 32 |
| GPIO4\_B | GPIO4 B | PWML3 \(Beta M2 Hardware only\) | PC8  \(PWML3\) | 66 | 33 |
| GPIO5\_B | GPIO5 B | PWML4 \(Beta M2 Hardware only\) | PC21 \(PWML4\) | 132 | 34 |
| GPIO6\_B | GPIO6 B | PWML5 \(Beta M2 Hardware only\) | PC22 \(PWML5\) | 133 | 35 |

## Analog Inputs \(0-12V analog input\)

| Mapped Pin Name \(use these in your sketch\) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| ANALOG\_1 | ANA 1 | J5 Pin 1 | PB19 | 90 | 86 |
| ANALOG\_2 | ANA 2 | J5 Pin 5 | PB18 | 89 | 87 |
| ANALOG\_3 | ANA 3 | J5 Pin 9 | PA2 | 85 | 88 |
| ANALOG\_4 | ANA 4 | J5 Pin 13 | PA4 | 83 | 89 |
| ANALOG\_5 | ANA 5 | J5 Pin 17 | PA3 | 84 | 90 |
| ANALOG\_6 | ANA 6 | J5 Pin 21 | PA16 | 78 | 91 |

## GPIO Power Supply Current Sense

| Mapped Pin Name \(use these in your sketch\) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| I\_SENSE\_EN | 12Vio\_EN | GPIO Power Supply Enable | PC24 | 135 | 75 |
| I\_SENSE | I SENSE 12V | GPIO Power Supply Analog Current Sense | PB17 | 88 | 93 |
| I-SENSE\_INT | OVER\_CURRENT | GPIO Power Supply Interrupt | PD1 | 14 | 76 |
| I-SENSE\_DAC | DAC1 | GPIO Power Supply Analog Output to Comparator | PB16 | 77 | 95 |

## CAN

| Mapped Pin Name \(use these in your sketch\) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| CANRX0 | CANRX0 |  | PA1 | 24 | 69 |
| CANTX0 | CANTX0 |  | PA0 | 23 | 70 |
| CAN0\_CS or HS\_CS | HSC\_S |  | PD3 | 16 | 71 |
| CANRX1 | CANRX1 |  | PB15 | 76 | 72 |
| CANTX1 | CANTX1 |  | PB14 | 140 | 73 |
| CAN1\_CS or MS\_CS | MSC\_S |  | PD0 | 13 | 25 |

## Power Supplies

| Mapped Pin Name \(use these in your sketch\) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| PS\_BUCK or BUCK\_DIS | BUCK\_nDIS |  | PC10 | 117 | 48 |
| PS\_J1850\_9141 | J1850 9141 ON | Bring LOW for LOW power | PB5 | 120 | 49 |

## J1850

| Mapped Pin Name \(use these in your sketch\) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| J1850\_PWM\_VPW | J1850\_PWM\_nVPW |  | PB8 | 123 | 50 |
| J1850\_PWM\_RX | J1850\_PWM\_RX |  | PC28 | 139 | 51 |
| J1850\_VPW\_RX | J1850\_VPW\_RX |  | PC26 | 137 | 52 |
| J1850P\_TX | J1850+\_TX |  | PC18 | 100 | 53 |
| J1850N\_TX | J1850-\_TX |  | PC23 | 134 | 54 |

## XBEE

| Mapped Pin Name \(use these in your sketch\) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| XBEE\_RX or RX0 | XB\_UART RX | UART serial URXD | PA8 | 27 | 0 |
| XBEE\_TX or TX0 | XB\_UART TX | UART serial UTXD | PA9 | 2 | 1 |
| XBEE\_RST | XB\_nRST |  | PC11 | 93 | 4 |
| XBEE\_PWM | XB\_RSSI\_PWM |  | PB3 | 118 | 7 |
| XBEE\_MULT4 | XB\_MULT4 |  | PD6 | 19 | 11 |
| XBEE\_MULT5 | XB\_MULT5 |  | PD9 | 22 | 12 |
| XBEE\_MULT1 | XB\_MULT1 |  | PC12 | 94 | 8 |
| XBEE\_CTS | XB\_nCTS |  | PB26 | 1 | 3 |
| XBEE\_STAT | XB\_STAT |  | PC13 | 95 | 5 |
| XBEE\_VREF | XB\_Vref |  | PC14 | 96 | 6 |
| XBEE\_MULT2 | XB\_MULT2 |  | PC15 | 97 | 9 |
| XBEE\_RTS | XB\_nRTS |  | PB25 | 144 | 2 |
| XBEE\_MULT3 | XB\_MULT3 |  | PC17 | 99 | 10 |
| XBEE\_MULT6 | XB\_MULT6 |  | PA7 | 26 | 13 |

![Image showing pin names of the XBEE socket on M2](../../../.gitbook/assets/xbee_pinnames.png)

## 9141/LIN

| Mapped Pin Name \(use these in your sketch\) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| LIN\_KTX | 9141 K TX | Serial1 | PA11 | 4 | 55 |
| LIN\_KRX | 9141 K RX |  | PA10 | 3 | 56 |
| LIN\_KSLP | 9141 K SLP |  | PB4 | 119 | 57 |
| LIN\_LTX | 9141 L TX | Serial2 | PA13 | 6 | 58 |
| LIN\_LRX | 9141 L RX |  | PA12 | 5 | 59 |
| LIN\_LSLP | 9141 L SLP |  | PB7 | 122 | 60 |

## Single-wire CAN

| Mapped Pin Name \(use these in your sketch\) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| SWC\_M1 | SWC M1 |  | PB0 | 113 | 65 |
| SWC\_M0 | SWC M0 |  | PB27 | 68 | 64 |
| SWC\_SOF | SWC SOF |  | PC29 | 102 | 68 |
| SWC\_CLK | SWC CLK |  | PB22 | 141 | 66 |
| SPI0\_CS3 | SPI0\_nCS3 |  | PB23 | 142 | 63 |
| SWC\_INT | SWC nINT |  | PC16 | 98 | 67 |
| SWC\_RX0 | SWC nRX0BF |  | PB1 | 114 | 61 |
| SWC\_RX1 | SWC nRX1BF |  | PB2 | 115 | 62 |

## SPI0

| Mapped Pin Name \(use these in your sketch\) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| SPI0\_MISO | SPI0 MISO | Optionally connected to SD Card | PA25 | 108 | 43 |
| SPI0\_MOSI | SPI0 MOSI | Optionally connected to SD Card | PA26 | 109 | 44 |
| SPI0\_CLK | SPI0 CLK | Optionally connected to SD Card | PA27 | 110 | 45 |
| SPI0\_CS1 | SPI0\_nCS1 | Optionally connected to SD Card | PA29 | 112 | 46 |
| SPI0\_CS0 | SPI0\_nCS0 |  | PA28 | 111 | 47 |

## 26-Pin GPIO Connector \(J5\)

| Mapped Pin Name \(use these in your sketch\) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| TXD3 | UART3 TX | J5 Pin 7 \(3.3V UART\) | PD4 | 17 | 77 |
| RXD3 | UART3 RX | J5 Pin 8 \(3.3V UART\) | PD5 | 18 | 78 |
| SDA0 | SDA0 | J5 Pin 4 | PA17 | 9 | 79 |
| SCL0 | SCL0 | J5 Pin 3 | PA18 | 70 | 80 |
| SPI\_CS2 | USART2RX | J5 Pin 15 | PB21 | 92 | 83 |

## Misc.

| Mapped Pin Name \(use these in your sketch\) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| V\_SENSE | AD3 | Analogue input Vehicle Volts | PA6 | 82 | 92 |
| CPU\_TEMP or A15 | Internal | CPU Temperature | PD5 | Internal | 94 |

## EEPROM Memory

| Mapped Pin Name \(use these in your sketch\) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| SDA1 | SDA1 | Eeprom | PB12 | 86 | 81 |
| SCL1 | SCL1 | Eeprom | PB13 | 87 | 82 |

## CPU Test Point

| Mapped Pin Name \(use these in your sketch\) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| USART2TX | USART2TX | TP5 U2TX | PB20 | 91 | 84 |
|  | unconnected | not connected | PC1 | 55 | 85 |
|  | UOTGVBOF |  | PB10 | 128 |  |
|  | UOTGID |  | PB11 | 129 |  |
|  | ERASE\_S |  | PC0 | 130 |  |
|  | USART2 CK |  | PB24 | 143 |  |

## CPU System Pins

| Mapped Pin Name \(use these in your sketch\) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
|  | VDDOUT |  | VDDCORE5 | 124 |  |
|  | +3.3V |  | VDDIO1 | 11 |  |
|  | +3.3V |  | VDDIO2 | 62 |  |
|  | +3.3V |  | VDDIO3 | 105 |  |
|  | +3.3V |  | VDDIO4 | 125 |  |
|  | DGND |  | GND1 | 12 |  |
|  | DGND |  | GND2 | 58 |  |
|  | DGND |  | GND3 | 106 |  |
|  | DGND |  | GND4 | 126 |  |
|  | DGND |  | GNDPLL | 33 |  |
|  | DGND |  | GNDANA | 74 |  |
|  | VDDPLL |  | VDDPLL | 34 |  |
|  | XOUT | Crystal | XOUT | 35 |  |
|  | XIN | Crystal | XIN | 36 |  |
|  | D+ | Micro USB pin3 | DHSDP | 37 |  |
|  | D- | Micro USB pin2 | DHSDM | 38 |  |
|  | VBUS | Micro USB pin1 +5Volts | XUSB | 39 |  |
|  | VBG |  | VBG | 40 |  |
|  | VDDUTMI |  | VDDUTMI | 41 |  |
|  | DFSDP |  | DFSDP | 42 |  |
|  | DFSDM |  | DFSDM | 43 |  |
|  | DGND | Grounded pin | GNDUTMI | 44 |  |
|  | VDDOUT |  | GNDUTMI | 45 |  |
|  | DGND | Grounded pin | JTAGSEL | 46 |  |
|  | M\_nRST/SWC nRESET | MCP2515 Reset | NRSTB | 47 |  |
|  | XIN32 | N/C | XIN32 | 48 |  |
|  | XOUT32 | N/C | XOUT32 | 49 |  |
|  |  | N/C | SHDN | 50 |  |
|  |  | Grounded via Resistor | TST | 51 |  |
|  |  | +3.3V via Resistor | VDDBU | 52 |  |
|  |  | +3.3V via Resistor | FWUP | 53 |  |
|  |  | Grounded pin | GNDBU | 54 |  |
|  | VDDOUT |  | VDDOUT | 56 |  |
|  | +3.3V |  | VDDIN | 57 |  |
|  | TP5 |  | NRST | 69 |  |
|  | VDDANA | VoltageAnalogue | VDDANA | 73 |  |
|  | DGND | Ground Analogue | GNDANA | 74 |  |
|  | DGND | Analogue Digital Volt ref | ADVREF | 75 |  |
|  |  |  | PB9 | 127 |  |

## JTAG

| Mapped Pin Name \(use these in your sketch\) | M2 Board Signal Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
|  | JTAG-TCK | TP1 | PB28 | 28 |  |
|  | JTAG-TDI | TP2 | PB29 | 29 |  |
|  | JTAG\_TDO | TP3 | PB30 | 30 |  |
|  | JTAG-TMS | TP4 | PB31 | 31 |  |

