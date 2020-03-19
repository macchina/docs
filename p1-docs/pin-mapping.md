---
description: >-
  This page will describe how the names of the pins on the PocketBeagle/OSD3358
  coorespond to signals on the rest of P1.
---

# Pin Mapping

P1 consists of 3 PCBs all stacked together through headers. Each board has its own schematic and each header and signal may have different names on each board.

## P1 boards:

**PocketBeagle** \(schematic [here](https://github.com/beagleboard/pocketbeagle/blob/master/PocketBeagle_sch.pdf)\). This is the brains of the operation. 

**Adapter board** \(schematic [here](https://github.com/macchina/p1-hardware/blob/master/SCH-01010%20R1%20SCHEM.PDF)\). This board acts connects PocketBeagle to the M2 interface board, adds a battery connector and full-sized USB A connector. 

**Interface board** \(schematic [here](https://github.com/macchina/m2-hardware/blob/master/M2/Interface%20Board%20Schematic.pdf)\). This is the same interface board used with M2. This board has all of the automotive interfaces and power supply. 

## P1 headers:

Headers connect throughout P1 as follows:

| PocketBeagle Headers | Adapter board headers | Interface board headers |
| :--- | :--- | :--- |
| **P1**    connects to: | **J5** | - |
| **P2**    connects to: | **J6** | - |
| - | **J2**    connects to: | J3 |
| - | **J3**    connects to: | J4 |
| - | - | **J5** \(26 pin connector\) |
| - | - | **J1** \(UTD\) or **J2** \(UTH\) |

## Mappings: 

### 12-volt Outputs

| Mapped Pin Name | Function | Notes | PocketBeagle Pin Name |
| :--- | :--- | :--- | :--- |
| OUT 1 | SRC | J5 Pin 2 \(26 pin connector\) | P1\_36 |
| OUT 2 | SRC | J5 Pin 6 \(26 pin connector\) | P2\_3 |
| OUT 3 | SRC | J5 Pin 10 \(26 pin connector\) | P2\_2 |
| OUT 4 | SINK | J5 Pin 14 \(26 pin connector\) | P2\_4 |
| OUT 5 | SINK | J5 Pin 18 \(26 pin connector\) | P1\_33 |
| OUT 6 | SINK | J5 Pin 22 \(26 pin connector\) | P2\_10 |

### Analog Inputs \(0-12V analog input\)

| Mapped Pin Name | Notes | PocketBeagle Pin Name |
| :--- | :--- | :--- |
| IN 1 | J5 Pin 1 \(26 pin connector\) | P1\_19 |
| IN 2 | J5 Pin 5 \(26 pin connector\) | P1\_21 |
| IN 3 | J5 Pin 9 \(26 pin connector\) | P1\_23 |
| IN 4 | J5 Pin 13 \(26 pin connector\) | P1\_25 |
| IN 5 | J5 Pin 17 \(26 pin connector\) | P1\_27 |
| IN 6 | J5 Pin 21 \(26 pin connector\) | P2\_36 |

### GPIO Power Supply Current Sense

| Mapped Pin Name | Notes | PocketBeagle Pin Name |
| :--- | :--- | :--- |
| 12Vio\_EN | GPIO Power Supply Enable | P1\_31 |
| SENSE 12V | GPIO Power Supply Analog Current Sense |  |
| OVER\_CURRENT | GPIO Power Supply Interrupt |  |
| DAC1 | GPIO Power Supply Analog Output to Comparator |  |

### CAN

| Mapped Pin Name | Notes | PocketBeagle Pin Name |
| :--- | :--- | :--- |
| CANRX0 | CANRX0 | 1\_28 |
| CANTX0 | CANTX0 | 1\_26 |
| CAN0\_CS or HS\_CS | HSC\_S | 1\_20 |
| CANRX1 | CANRX1 | 2\_09 |
| CANTX1 | CANTX1 | 2\_11 |
| CAN1\_CS or MS\_CS | MSC\_S | 2\_30 |

### Power Supplies

| Mapped Pin Name  | Notes | PocketBeagle Pin Name |
| :--- | :--- | :--- |
| PS\_BUCK or BUCK\_DIS |  |  |
| PS\_J1850\_9141 | Bring LOW for LOW power | P2\_19 |

### J1850

| Mapped Pin Name  | Notes | PocketBeagle Pin Name |
| :--- | :--- | :--- |
| J1850\_PWM\_VPW |  |  |
| J1850\_PWM\_RX |  |  |
| J1850\_VPW\_RX |  |  |
| J1850P\_TX |  |  |
| J1850N\_TX |  |  |

### 9141/LIN

| Mapped Pin Name | Pin name | Notes | PocketBeagle Pin Name |
| :--- | :--- | :--- | :--- |
| LIN\_KTX | 9141 K TX | LIN1 TX | P2\_7 |
| LIN\_KRX | 9141 K RX | LIN1 RX | P2\_5 |
| LIN\_KSLP | 9141 K SLP | LIN1 Sleep | P2\_22 |
| LIN\_LTX | 9141 L TX | LIN2 TX | P1\_30 |
| LIN\_LRX | 9141 L RX | LIN2 RX | P1\_32 |
| LIN\_LSLP | 9141 L SLP | LIN2 Sleep | P2\_28 |

### Single-wire CAN

| Mapped Pin Name | Pin Name | Notes | PocketBeagle Pin Name |
| :--- | :--- | :--- | :--- |
| SWC\_M1 | SWC M1 |  |  |
| SWC\_M0 | SWC M0 |  |  |
| SWC\_SOF | SWC SOF |  |  |
| SWC\_CLK | SWC CLK |  |  |
| SPI0\_CS3 | SPI0\_nCS3 |  |  |
| SWC\_INT | SWC nINT |  |  |
| SWC\_RX0 | SWC nRX0BF |  |  |
| SWC\_RX1 | SWC nRX1BF |  |  |

