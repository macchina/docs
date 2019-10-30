---
description: Use these pin names when programming in the Arduino IDE.
---

# Pin Mapping

**NOTE!** This table is only applicable when using the M2 board as selected from the Tools -&gt; Board menu from the Arduino IDE. See more information [here.](https://github.com/macchina/arduino-boards-sam)

**Use the names in the "Mapped Pin Name" column in your Arduino Sketch.**

A "pin mapping" describes how the different circuits of your P1 are connected to the PocketBeagle. 


## 12-volt Outputs

| Mapped Pin Name | Function |  Notes | PocketBeagle Pin Name |
| :--- | :--- | :--- | :--- |
| OUT 1 | SRC | J5 Pin 2 | P1_36
| OUT 2 | SRC | J5 Pin 6 | P2_3
| OUT 3 | SRC | J5 Pin 10 | P2_2
| OUT 4 | SINK | J5 Pin 14 | P2_4
| OUT 5 | SINK | J5 Pin 18 | P1_33
| OUT 6 | SINK | J5 Pin 22 | P2_10


## Analog Inputs \(0-12V analog input\)

| Mapped Pin Name | Notes | PocketBeagle Pin Name |
| :--- | :--- | :--- |
| IN 1 | J5 Pin 1 | P1_19
| IN 2 | J5 Pin 5 | P1_21
| IN 3 | J5 Pin 9 | P1_23
| IN 4 | J5 Pin 13 | P1_25
| IN 5 | J5 Pin 17 | P1_27
| IN 6 | J5 Pin 21 | P2_36

## GPIO Power Supply Current Sense


| Mapped Pin Name | Notes | PocketBeagle Pin Name |
| :--- | :--- | :--- |
| 12Vio\_EN | GPIO Power Supply Enable | P1_31
| SENSE 12V | GPIO Power Supply Analog Current Sense | 
| OVER\_CURRENT | GPIO Power Supply Interrupt |
| DAC1 | GPIO Power Supply Analog Output to Comparator | 



| Mapped Pin Name \(use these in your sketch\) | PocketBeagle Pin Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| I\_SENSE\_EN | 12Vio\_EN |  | PC24 | 135 | 75 |
| I\_SENSE | I SENSE 12V |  | PB17 | 88 | 93 |
| I-SENSE\_INT | OVER\_CURRENT |  | PD1 | 14 | 76 |
| I-SENSE\_DAC | DAC1 |  | PB16 | 77 | 95 |

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

| Mapped Pin Name \(use these in your sketch\) | PocketBeagle Pin Name | Notes | 
| :--- | :--- | :--- |
| PS\_BUCK or BUCK\_DIS | BUCK\_nDIS | |
| PS\_J1850\_9141 | P2_19 | Bring LOW for LOW power |

## J1850

| Mapped Pin Name \(use these in your sketch\) | PocketBeagle Pin Name | Notes | SAM3X Pin Name | Processor CHIP physical PIN | PinDescription Array Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| J1850\_PWM\_VPW | J1850\_PWM\_nVPW |  | PB8 | 123 | 50 |
| J1850\_PWM\_RX | J1850\_PWM\_RX |  | PC28 | 139 | 51 |
| J1850\_VPW\_RX | J1850\_VPW\_RX |  | PC26 | 137 | 52 |
| J1850P\_TX | J1850+\_TX |  | PC18 | 100 | 53 |
| J1850N\_TX | J1850-\_TX |  | PC23 | 134 | 54 |


## 9141/LIN

| Mapped Pin Name  |  Pin name | Notes | PocketBeagle Pin Name \(use these in your sketch\)|
| :--- | :--- | :--- | :--- |
| LIN\_KTX | 9141 K TX | LIN1 TX |  P2_7 |
| LIN\_KRX | 9141 K RX | LIN1 RX | P2_5 | 
| LIN\_KSLP | 9141 K SLP | LIN1 Sleep  | P2_22 | 
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
