---
description: Use these pin names when programming in the Arduino IDE.
---

# Pin Mapping

**NOTE!** This table is only applicable when using the M2 board as selected from the Tools -&gt; Board menu from the Arduino IDE. See more information [here.](https://github.com/macchina/arduino-boards-sam)

**Use the names in the "Mapped Pin Name" column in your Arduino Sketch.**

A "pin mapping" describes how the different circuits of your P1 are connected to the PocketBeagle. 


## 12-volt Outputs

| Mapped Pin Name \(use these in your sketch\) | PocketBeagle Pin Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
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

| Mapped Pin Name \(use these in your sketch\) | PocketBeagle Pin Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| ANALOG\_1 | ANA 1 | J5 Pin 1 | PB19 | 90 | 86 |
| ANALOG\_2 | ANA 2 | J5 Pin 5 | PB18 | 89 | 87 |
| ANALOG\_3 | ANA 3 | J5 Pin 9 | PA2 | 85 | 88 |
| ANALOG\_4 | ANA 4 | J5 Pin 13 | PA4 | 83 | 89 |
| ANALOG\_5 | ANA 5 | J5 Pin 17 | PA3 | 84 | 90 |
| ANALOG\_6 | ANA 6 | J5 Pin 21 | PA16 | 78 | 91 |

## GPIO Power Supply Current Sense

| Mapped Pin Name \(use these in your sketch\) | PocketBeagle Pin Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| I\_SENSE\_EN | 12Vio\_EN | GPIO Power Supply Enable | PC24 | 135 | 75 |
| I\_SENSE | I SENSE 12V | GPIO Power Supply Analog Current Sense | PB17 | 88 | 93 |
| I-SENSE\_INT | OVER\_CURRENT | GPIO Power Supply Interrupt | PD1 | 14 | 76 |
| I-SENSE\_DAC | DAC1 | GPIO Power Supply Analog Output to Comparator | PB16 | 77 | 95 |

## CAN

| Mapped Pin Name \(use these in your sketch\) | PocketBeagle Pin Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| CANRX0 | CANRX0 |  | PA1 | 24 | 69 |
| CANTX0 | CANTX0 |  | PA0 | 23 | 70 |
| CAN0\_CS or HS\_CS | HSC\_S |  | PD3 | 16 | 71 |
| CANRX1 | CANRX1 |  | PB15 | 76 | 72 |
| CANTX1 | CANTX1 |  | PB14 | 140 | 73 |
| CAN1\_CS or MS\_CS | MSC\_S |  | PD0 | 13 | 25 |

## Power Supplies

| Mapped Pin Name \(use these in your sketch\) | PocketBeagle Pin Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| PS\_BUCK or BUCK\_DIS | BUCK\_nDIS |  | PC10 | 117 | 48 |
| PS\_J1850\_9141 | J1850 9141 ON | Bring LOW for LOW power | PB5 | 120 | 49 |

## J1850

| Mapped Pin Name \(use these in your sketch\) | PocketBeagle Pin Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| J1850\_PWM\_VPW | J1850\_PWM\_nVPW |  | PB8 | 123 | 50 |
| J1850\_PWM\_RX | J1850\_PWM\_RX |  | PC28 | 139 | 51 |
| J1850\_VPW\_RX | J1850\_VPW\_RX |  | PC26 | 137 | 52 |
| J1850P\_TX | J1850+\_TX |  | PC18 | 100 | 53 |
| J1850N\_TX | J1850-\_TX |  | PC23 | 134 | 54 |


## 9141/LIN

| Mapped Pin Name \(use these in your sketch\) | PocketBeagle Pin Name | Notes | Test |
| :--- | :--- | :--- | :--- |
| LIN\_KTX | 9141 K TX | LIN1 TX |  P2_7 |
| LIN\_KRX | 9141 K RX | LIN1 RX | P2_5 | 
| LIN\_KSLP | 9141 K SLP |  |  | 
| LIN\_LTX | 9141 L TX | LIN2 TX | P1_30 | 
| LIN\_LRX | 9141 L RX | LIN2 RX | P1_32 | 
| LIN\_LSLP | 9141 L SLP |  |  | 

## Single-wire CAN

| Mapped Pin Name \(use these in your sketch\) | PocketBeagle Pin Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| SWC\_M1 | SWC M1 |  | PB0 | 113 | 65 |
| SWC\_M0 | SWC M0 |  | PB27 | 68 | 64 |
| SWC\_SOF | SWC SOF |  | PC29 | 102 | 68 |
| SWC\_CLK | SWC CLK |  | PB22 | 141 | 66 |
| SPI0\_CS3 | SPI0\_nCS3 |  | PB23 | 142 | 63 |
| SWC\_INT | SWC nINT |  | PC16 | 98 | 67 |
| SWC\_RX0 | SWC nRX0BF |  | PB1 | 114 | 61 |
| SWC\_RX1 | SWC nRX1BF |  | PB2 | 115 | 62 |
