---
description: 'Your M2 can blink its LED, now what?'
---

# Next Steps with M2

## Can-Utils

If you want to use it with Can-Utils check out our socket-can guide and the Can-Utils GitHub [https://github.com/linux-can/can-utils](https://github.com/linux-can/can-utils) to install this Linux program.



## OBDII Scanner Sketch

If you want to quire the ECU all you need to do is upload this scanner sketch [https://github.com/collin80/OBD2Scan](https://github.com/collin80/OBD2Scan)  This will tell you what services your ECU has. If you have any trouble or want to post your results go over to [https://github.com/collin80/OBD2Scan](https://github.com/collin80/OBD2Scan)



## CanCat

Another program you can use is CanCat; it's similar to RfCat. This gives you a powerful python interface to reverse engineer the CAN bus. [https://github.com/atlas0fd00m/CanCat](https://github.com/atlas0fd00m/CanCat)



## Wireshark

Yes the very same Wireshark you are used to can be used with M2 to look at the packets on a car’s network. Take a look at [https://www.wireshark.org/](https://www.wireshark.org/) to get started.



## Craig Smith

Craig ****has a number of programs that are based around socketcan and should, in theory, work with the slcan interface possible with M2RET. Examples: ICSim, UDSim, CaringCaribou. I haven’t tested them with an M2 but I think we ought to do so as they provide some useful things we would otherwise lack. I know that CaringCaribou didn’t work well when I tried it with a GVRET device a few years ago but the situation might be different now.

[https://github.com/zombieCraig](https://github.com/zombieCraig)

