---
description: Schematic of SuperB as well as how to go into bootloader mode
---

# Hardware

## The SuperB Hardware

\
(The SuperB breakout overview, take note of the locations of "EN" and "IO0")

![ESP32 Breakout Overview](../../.gitbook/assets/SCH-01012\_R0\_SCHEM\_FINAL-1.png)

## Bootloader Mode

To place SuperB into bootloader mode, EN must be brought low and returned to high while IO0 is held low. Or, in other words, IO0 must be held low during the EN rising edge. (See depiction below)\


![Graph showing EN and IO0](../../.gitbook/assets/EN\_IO0\_Graph.PNG)

