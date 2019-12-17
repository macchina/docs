---
description: 'Your M2 can blink its LED, now what?'
---

# Next Steps with M2

## SavvyCAN

[Visit the dedicated SavvyCAN page.](../projects/use-m2-with-savvycan.md)

## Can-Utils

If you want to use it with Can-Utils check out our socket-can guide and the Can-Utils GitHub [https://github.com/linux-can/can-utils](https://github.com/linux-can/can-utils) to install this Linux program.

## OBDII Scanner Sketch

If you want to query the ECU, all you need to do is upload this scanner sketch to M2: 

{% embed url="https://github.com/collin80/OBD2Scan" %}

## CanCat

Another program you can use is CanCat; it's similar to RfCat. This gives you a powerful python interface to reverse engineer the CAN bus. [https://github.com/atlas0fd00m/CanCat](https://github.com/atlas0fd00m/CanCat)

## Craig Smith

Craig ****has a number of programs that are based around socketcan and should, in theory, work with the slcan interface possible with M2RET. Examples: ICSim, UDSim, CaringCaribou. I haven’t tested them with an M2 but I think we ought to do so as they provide some useful things we would otherwise lack. I know that CaringCaribou didn’t work well when I tried it with a GVRET device a few years ago but the situation might be different now.

[https://github.com/zombieCraig](https://github.com/zombieCraig)

