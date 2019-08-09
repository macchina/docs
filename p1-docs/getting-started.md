---
description: Setting up P1 and sending/reading CAN messages.
---

# Getting Started

This page shows how to set up P1 and interface with your car's OBD port. 

![](../.gitbook/assets/img_6758.JPG)

## Parts:

* [P1](https://www.macchina.cc/catalog/p1-boards/p1-under-dash) \(consists of PocketBeagle, Adapter board and interface board used on M2\)

The following parts are common and can be found from many sources/manufacturers. 

* microSD card \(included in kit\)
* WIFI dongle \(included in kit\)
* [USB cable](https://www.macchina.cc/catalog/cables/usb-micro-b-20-cable-5-pin-2824awg-gold-plated-black-15ft)

## Adapter board:

The adapter board plugs directly into the M2 Interface board and provides: 

1. Routing of power and signals from M2 Interface board to PocketBeagle. 

2. Battery connector for standard 2-Pin JST battery connector and single cell lithium battery. \(Optional\)

3. USB A host port with ESD protection. 

4. Voltage scaling for 6 Analog inputs. 

5. Several 0 ohm jumpers to route signals as needed.



PCB files are found at these links:

* [Schematic](https://github.com/macchina/p1-hardware/blob/master/SCH-01010%20R1%20SCHEM.PDF)
* [Part location file](https://github.com/macchina/p1-hardware/blob/master/PCB-01010%20R1%20COMPONENT%20LOCATOR%20CLOSE%20UP.PDF)
* [Pin number file](https://github.com/macchina/p1-hardware/blob/master/PCB-01010%20R1%20PIN%20NUMBER%20CHART.PDF)

## P1 Setup:

### Step 1: Hook stuff up.

The adapter PCB is pre-installed onto the M2 interface board. The PocketBeagle is also pre-installed onto the adapter board. Since the PocketBeagle is not keyed, if you remove, be sure to plug it in so that the USB ports are on the same side.

{% hint style="warning" %}
A USB wireless adapter can be plugged directly into the board, no powered USB hub required.
{% endhint %}



![](../.gitbook/assets/img_6754.JPG)

### Step 2: Create a bootable SD card

Follow instructions [here](https://beagleboard.org/getting-started) to create a bootable SD card with the [BeagleBoard.org Debian 9.9 \(Stretch\) IoT image from 2018-08-03](https://rcn-ee.com/rootfs/bb.org/testing/2019-08-03/stretch-iot/bone-debian-9.9-iot-armhf-2019-08-03-4gb.img.xz). Once you have a bootable SD card, plug it into the PocketBeagle.

{% hint style="success" %}
Note: The P1 kit ships with pre-installed image on SD card!
{% endhint %}

Plug a microUSB cable into the PocketBeagle and your computer. After a minute or so, use your favorite terminal to ssh to beagle.local or 192.168.7.2:

Login: _debian_ Password: _temppwd_

[NOTE: if 192.168.7.2 does not work then try 192.168.6.2](https://beagleboard.org/static/beaglebone/latest/README.htm#step2)

### Step 2.5: Change your password \(optional but recommended\)

We want to make sure that others wont be able to access your device to do this the main thing we are going to do is change the root password.

```text
sudo passwd root
```

### Step 3: Connect to internet.

First thing we'll want to do is connect to the internet to be able to download the latest packages. To do that, we'll use WIFI. Type the commands as shown below

```text
sudo connmanctl
connmanctl> disable wifi
Disabled wifi
connmanctl> enable wifi
Enabled wifi
connmanctl> scan wifi
Scan completed for wifi
connmanctl> services
```

All of the hotspots that your setup can see will be listed here, and look something like this:

wifi\_xxxxxx\_xxxxxx\_managed\_psk

Run these commands to connect:

```text
connmanctl> agent on

connmanctl> connect wifi_xxxxxx_xxxxxx_managed_psk

Passphrase? xxxxxxxxxxx

connected wifi_xxxxxx_xxxxxx_managed_psk

connmanctl> quit
```

You should now be connected to your local wifi. You can check that you have an IP address by typing the following in the terminal window:

```text
ifconfig
```

You should now see an IP address under wlan0 and you can now connect to this IP address in the future to program your PocketBeagle.

If you have trouble with the WiFi connection after initial setup, then [ssh over the USB cable to the BeagleBone](https://beagleboard.org/static/beaglebone/latest/README.htm#step2) and run:

```text
sudo connmanctl disable wifi
sudo connmanctl enable wifi
iwconfig wlan0
ifconfig wlan0 
```

### Step 4: Set up pins

{% hint style="danger" %}
#### Step 4 section in flux. For now, run these commands to configure CAN0 and move to Step 5 : 

config-pin P1\_28 can 

config-pin P1\_26 can
{% endhint %}

Next we make sure the pins on the PocketBeagle are set up correctly as shown at this link:

[https://github.com/beagleboard/pocketbeagle/wiki/Peripherals\#can](https://github.com/beagleboard/pocketbeagle/wiki/Peripherals#can)

The following steps only need to be performed once.  The correct pin configuration will then persist across reboots.

```text
cd /opt/source/bb.org-overlays/
git pull
make
sudo make install
```

Verify that that these files exist:

```text
ls -lt /lib/firmware/PB-CAN0-00A0.dtbo
ls -la /lib/firmware/PB-CAN1-00A0.dtbo
```

Edit the boot configuration so the CAN0 and CAN1 pins will be configured automatically:

```text
sudo nano /boot/uEnv.txt
```

replace these lines:

```text
#uboot_overlay_addr4=/lib/firmware/<file4>.dtbo
#uboot_overlay_addr5=/lib/firmware/<file5>.dtbo
```

with these lines:

```text
uboot_overlay_addr4=/lib/firmware/PB-CAN0-00A0.dtbo
uboot_overlay_addr5=/lib/firmware/PB-CAN1-00A0.dtbo
```

save the file \(ctrl-o\) and exit \(ctrl-x\) and then reboot:

```text
sudo reboot
```

Next, we set up the CAN interface and turn it on. Note that we are setting rate at 250Kb/s here. Your car might be a different BAUD rate.

### Step 5: print out CAN messages

```text
sudo ip link set can0 type can bitrate 250000 listen-only on

sudo ifconfig can0 up
```

To see actual data, we need to do 2 things: 1. Plug M2/PocketBeagle into your car or an emulator \(No need for hub, and WIFI dongle anymore - those can be unplugged\) and 2. enter this command to print output to terminal screen:

```text
candump -cae can0,0:0,#FFFFFFFF
```

If everything is set up correctly, you should see something like this:

![](../.gitbook/assets/pb_can_dump.png)

While this looks pretty cool, it is hard to see what is going on. Press CTRL+C to end output to terminal.

Logging CAN data to a file makes it easier to analyze the data. To do that, use this command to log data to current working directory:

```text
candump -l any,0:0,#FFFFFFFF
```

For CAN1, use these commands to enable the interface:

```text
sudo ip link set can1 type can bitrate 250000 listen-only on

sudo ifconfig can1 up

candump -cae can1,0:0,#FFFFFFFF
```

### Step 6: Sending CAN messages

This should be used for testing purposes only and caution should be taken before sending messages to a real car.  Here are instructions how to send CAN messages on the can0 interface.  

```text
sudo ip link set can0 type can bitrate 250000

sudo ip link set up can0

cansend can0 01a#11223344AABBCCDD
```

You can test sending and receiving using two PocketBeagle P1 adapters and the Macchina ODB2 cable with termination resistors and 12V power supply. The instructions from Step 5 can be on the second PocketBeagle to view the messages with candump that the first PocketBeagle is sending.

### Step 7: Going further.

Next steps for this program is setting up and using more sophisticated analysis tools.

