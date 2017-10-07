# 12V IO

M2 has six general purpose 12-volt driver circuits and six 12-volt analog input channels.

<!-- TO DO: Add diagram and photos -->

<!-- TO DO: Add description of connector, wire harness, where to buy parts, etc -->

- 3 sourcing pins: pulling high to 12 volt rail
- 3 sinking pins: pulling low to GND
- 6 pins that act as a analog input with a 0-12 volt range

When sourcing power, the 12V rail is monitored by an internal current monitor. The goal is to be able to be able to dynamically measure how much power an external device is using AND ensure the total power pulled from the OBD2 port does not exceed X amps and open the car's OBD2 fuse.
