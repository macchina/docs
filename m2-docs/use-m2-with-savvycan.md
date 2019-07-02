---
description: >-
  SavvyCAN is a CAN bus reverse engineering and data capture tool. It allows you
  to use M2 to send and receive CAN messages both to and from a car.
---

# Use M2 with SavvyCAN

## Flash M2 with M2RET

M2RET must be flashed to M2 to forward messages from the car to the computer and vice versa.

The easiest way to install M2RET is by downloading the M2RET firmware updater from the SavvyCAN website, the updater can be found [here.](http://www.savvycan.com/M2RET_Flash.zip)

Extract "M2RET\_FLASH.zip" and follow the instructions in the "HOWTO.txt" file relevant to your operating system. \(Make sure M2 is plugged in and any existing serial connections to it are closed\) Screenshots are shown below:

{% tabs %}
{% tab title="Windows" %}
![](../.gitbook/assets/m2ret.PNG)
{% endtab %}

{% tab title="OSX" %}

{% endtab %}

{% tab title="Linux" %}

{% endtab %}
{% endtabs %}

## Connect M2 with SavvyCAN

Download the SavvyCAN version appropriate for your operating system [here.](http://www.savvycan.com/)

{% hint style="info" %}
Disconnecting and reconnecting M2 to the computer after flashing can fix some issues where M2 cannot connect to SavvyCAN
{% endhint %}



* **1\)** Open the connection window.

![](../.gitbook/assets/savvycan1.png)

* **2\)** Click "Add New Device Connection" and create a new serial connection with the relevant port.

![](../.gitbook/assets/savvycan2.PNG)

* **3\)** Test the connection by opening Send Frames&gt;Fuzzing.

![](../.gitbook/assets/savvycan3.png)

![Success! M2 lights up and blinks according to the fuzz rate](../.gitbook/assets/savvycan4.gif)

## Use M2 and SavvyCAN on a Vehicle

