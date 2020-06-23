# P1 CAN Loopback

A quick way to confirm that CAN communication on both channels is working on P1 is a [loopback](https://en.wikipedia.org/wiki/Loopback) test. 

In our case, we connect the CAN0 channel to the CAN1 channel to confirm each can send and receive CAN messages. 

### Hook things up:

CAN0H to CAN1H and CAN0L to CAN1L and place a termination resistor across these connections. 

![Loopback with CAN termination](../../.gitbook/assets/20200330_132910.jpg)

![Close up of connections - not ideal, but it works.](../../.gitbook/assets/20200330_133003.jpg)

### Test via terminal:

Once everything is hooked up, we power up P1, and SSH into P1 in two windows at: 192.168.7.2 to control each CAN channel at the same time. 

![](../../.gitbook/assets/loopback.png)

Below you can see each session. Note that you'll want to send the "candump ..." command before sending the "cansend ..." command in the other window. 

CAN0 terminal:

```text
login as: debian
Pre-authentication banner message from server:
| Debian GNU/Linux 9
|
| BeagleBoard.org Debian Image 2019-08-03
|
| Support/FAQ: http://elinux.org/Beagleboard:BeagleBoneBlack_Debian
|
| default username:password is [debian:temppwd]
|
End of banner message from server
debian@192.168.7.2's password:

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
debian@beaglebone:~$ sudo ip link set can0 type can bitrate 250000
[sudo] password for debian:
debian@beaglebone:~$ sudo ifconfig can0 up
debian@beaglebone:~$ candump can0
  can0  01A   [8]  11 22 33 44 AA BB CC DD
  can0  01A   [8]  11 22 33 44 AA BB CC DD
  can0  01A   [8]  11 22 33 44 AA BB CC DD
  can0  01A   [8]  11 22 33 44 AA BB CC DD
  can0  01A   [8]  11 22 33 44 AA BB CC DD
  can0  01A   [8]  11 22 33 44 AA BB CC DD
  can0  01A   [8]  11 22 33 44 AA BB CC DD
  can0  01A   [8]  11 22 33 44 AA BB CC DD
  can0  01A   [8]  11 22 33 44 AA BB CC DD
  can0  01A   [8]  11 22 33 44 AA BB CC DD
  can0  01A   [8]  11 22 33 44 AA BB CC DD
  can0  01A   [8]  11 22 33 44 AA BB CC DD
^Cdebian@beaglebone:~cansend can0 01a#11223344AABBCCDD
debian@beaglebone:~$ cansend can0 01a#11223344AABBCCDD
debian@beaglebone:~$ cansend can0 01a#11223344AABBCCDD
debian@beaglebone:~$ cansend can0 01a#11223344AABBCCDD
debian@beaglebone:~$ cansend can0 01a#11223344AABBCCDD
debian@beaglebone:~$ cansend can0 01a#11223344AABBCCDD
debian@beaglebone:~$ cansend can0 01a#11223344AABBCCDD
debian@beaglebone:~$ cansend can0 01a#11223344AABBCCDD
debian@beaglebone:~$ cansend can0 01a#11223344AABBCCDD
debian@beaglebone:~$ cansend can0 01a#11223344AABBCCDD
debian@beaglebone:~$
```

CAN1 terminal:

```text
login as: debian
Pre-authentication banner message from server:
| Debian GNU/Linux 9
|
| BeagleBoard.org Debian Image 2019-08-03
|
| Support/FAQ: http://elinux.org/Beagleboard:BeagleBoneBlack_Debian
|
| default username:password is [debian:temppwd]
|
End of banner message from server
debian@192.168.7.2's password:

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Sun Aug  4 02:11:40 2019 from 192.168.7.1
debian@beaglebone:~$ sudo ip link set can1 type can bitrate 250000
[sudo] password for debian:
debian@beaglebone:~$ sudo ifconfig can1 up
debian@beaglebone:~$ cansend can1 01a#11223344AABBCCDD
debian@beaglebone:~$ cansend can1 01a#11223344AABBCCDD
debian@beaglebone:~$ cansend can1 01a#11223344AABBCCDD
debian@beaglebone:~$ cansend can1 01a#11223344AABBCCDD
debian@beaglebone:~$ cansend can1 01a#11223344AABBCCDD
debian@beaglebone:~$ cansend can1 01a#11223344AABBCCDD
debian@beaglebone:~$ cansend can1 01a#11223344AABBCCDD
debian@beaglebone:~$ cansend can1 01a#11223344AABBCCDD
debian@beaglebone:~$ cansend can1 01a#11223344AABBCCDD
debian@beaglebone:~$ cansend can1 01a#11223344AABBCCDD
debian@beaglebone:~$ cansend can1 01a#11223344AABBCCDD
debian@beaglebone:~$ cansend can1 01a#11223344AABBCCDD
debian@beaglebone:~$ candump can1
  can1  01A   [8]  11 22 33 44 AA BB CC DD
  can1  01A   [8]  11 22 33 44 AA BB CC DD
  can1  01A   [8]  11 22 33 44 AA BB CC DD
  can1  01A   [8]  11 22 33 44 AA BB CC DD
  can1  01A   [8]  11 22 33 44 AA BB CC DD
  can1  01A   [8]  11 22 33 44 AA BB CC DD
  can1  01A   [8]  11 22 33 44 AA BB CC DD
  can1  01A   [8]  11 22 33 44 AA BB CC DD
  can1  01A   [8]  11 22 33 44 AA BB CC DD
  can1  01A   [8]  11 22 33 44 AA BB CC DD


```

