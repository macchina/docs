---
description: Use A0 to read vehicle data.
---

# A0 CAN Vehicle Data

#### Items Used

* 1x [A0](https://www.macchina.cc/catalog/a0-boards/a0-under-dash)
* 1x Car with OBD-II port

#### A0 Sketch

Upload👉[THIS SKETCH](https://gist.github.com/kenny-macchina/f87e4c39e29a39562e168b9869d64ef8) to your A0, which queries the vehicle for speed, engine RPM, and coolant temperature, and prints the results to the serial monitor. It requires two libraries, which can be found👉[here](https://github.com/collin80/esp32_can) and👉[here](https://github.com/collin80/can_common).

#### Vehicle Setup

Plug A0 into the OBD-II port found beneath the dashboard \(usually between the steering wheel and pedals, by your left knee\). Keep A0 connected to your computer with the USB cable and open the Arduino IDE's serial monitor at baud 115200.

#### Test

Try revving your engine and watch as the RPM updates in the serial monitor. You can also try driving and watching the vehicle speed and engine coolant temperature.

{% hint style="danger" %}
Always focus on driving!
{% endhint %}

#### Example Data

![These graphs were made by copying the output from the serial monitor and using Excel&apos;s text import tool.](../../.gitbook/assets/image%20%282%29.png)

![](../../.gitbook/assets/image%20%281%29.png)

