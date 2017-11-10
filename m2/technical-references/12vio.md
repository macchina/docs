# 12V IO

M2 has several built-in driver circuits that works at your car's 12 volt system. We've designed these circuits to make it easy to connect up both 12 volt inputs AND outputs. This would include things like LEDs, buzzers, sensors, gauges, switches, and solenoids.

## Output

The six general purpose 12-volt driver circuits consist of 2 types: **High side and low side.**

- Channels 1, 2 and 3 are HIGH side drivers that switch the output to +12V. (aka SOURCE)
- Channels 4, 5 and 6 are LOW side drivers that switch the output to GND. (aka SINK)

<img src="/images/OUTPUT_pins.png" width="640"/>

**Note about current limits:** Each channel is capable of sourcing or sinking around 1 amp of current at 12 volts before the protection fuses opens. Of course, this is a MAXIMUM and depends ambient temperature, duty cycle, etc. Also note that drawing the maximum current over all 6 channels at the same time would most likely exceed the limit of your car's OBD2 port fuse. To ensure a better understanding of all of this, we've implemented a current monitoring circuit.

When sourcing power, the 12V rail is monitored by an internal current monitor. The goal is to be able to dynamically measure how much power an external device is using AND ensure the total power pulled from the OBD2 port does not exceed X amps and open the car's OBD2 fuse.

Here is a cool example of a tachometer gauge connected directly to M2 and displaying actual RPM as read from the CAN bus:

<img src="/images/IMG_6519.JPG" width="640"/>

## Input

M2 has six 12-volt-range input channels. These can either be an analog or digital input.

<img src="/images/INPUT_pins.png" width="640"/>

<!-- TO DO: Add diagram and photos -->

<!-- TO DO: Add description of connector, wire harness, where to buy parts, etc -->

## Library

Thankfully, a great library was written to make working with the 12V inputs and outputs much easier, check that out here:

https://github.com/TDoust/M2_12VIO
