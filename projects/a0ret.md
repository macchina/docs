---
description: Upload A0RET to use A0 with Torque or SavvyCAN (WIP)!
---

# A0RET

#### Torque Download

Torque Lite for Android can be found [HERE](https://play.google.com/store/apps/details?id=org.prowl.torquefree&hl=en_US)

Torque is currently only available on Android, however many ELM327 compatible apps exist for iOS.

#### Sketch

Find the A0RET repo at [THIS LINK](https://github.com/collin80/A0RET), download the entire repo as a .zip and extract to a folder called A0RET. Open A0RET.ino with Arduino IDE. 

![Opening A0RET.ino should also open the dependent files as separate tabs.](../.gitbook/assets/annotation-2020-08-17-123330.png)

#### Enable Bluetooth

On line 80 of A0RET.ino, change false to true to enable Bluetooth by default \(for connecting with Torque\).

![](../.gitbook/assets/annotation-2020-08-17-124034.png)

#### Upload Settings

Ensure your settings match those shown below before uploading. \(These should all be correct by default except for Partition Scheme\)

![](../.gitbook/assets/annotation-2020-08-17-124912.png)

#### Connect via Bluetooth

Using your phone's Bluetooth settings, connect to ELM327-A0.

![](../.gitbook/assets/screenshot_20200817-125723_nova-launcher.jpg)

#### Configure Torque

Enter the settings in Torque, and then the "OBD2 Adapter Settings". Ensure connection type is set to Bluetooth and then select ELM327-A0 under the "Choose Bluetooth Device" option.

#### 

![](../.gitbook/assets/screenshot_20200817-125922_torque-lite-.jpg)

#### Done!

After this point consult the [**Torque Wiki**](https://torque-bhp.com/wiki/Main_Page) to learn how to use Torque.

