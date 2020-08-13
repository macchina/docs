# Power

Like all electronics, your A0 requires power to run. Your A0 can be connected directly to a  OBD2 port that provides **5V @ 3 Amps and 3.3V @ 1 amp**. 

#### ISN'T THIS ALL OBD2 PORTS BY DEFAULT?

## Protection <a id="protection"></a>

A0 employs ~~several~~ circuits to protect the device from overcurrent, reverse voltage, and overvoltage.

16v @ 1.1a PTC reset fuse on Vin

What is D2 \(TVS diode\) for?

"Isolated" power switcher? We do take power in and put power out, so maybe the chip does this by default.

D4 also looks like prot, on the CAN data lines

CP2104 should blow up before the ESP32, but I'm not sure that is safety. 

