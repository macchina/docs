# Power

Like all electronics, your M2 requires power to run. Your M2 can be connected directly to a car battery, either from the OBD2 port or some other power wire that provides **5V @ 3 Amps and 3.3V @ 1 amp**.

## Protection

M2 employs several circuits to protect the device from overcurrent, reverse voltage, and overvoltage.

## Low power options

M2 has several low-power options. One of them is called, **J1850 / ISO 9141 Low Power Control**.

We have 2 microcontroller-controlled switches that allow "+12V\_SW" and "+5V\_SW" to be powered on or off depending on conditions.

The signal `J1850_9141_ON` controls this and is connected to the SAM3X pin number 120 \(PB5\)

The following code turns on or off the 12V and 5V rails:

```cpp
  pinMode(PS_J1850_9141, OUTPUT);
  digitalWrite(PS_J1850_9141, LOW);   // LOW  = no power at +12V_SW/+5V_SW
                                      // HIGH = power at +12V_SW/+5V_SW
```

