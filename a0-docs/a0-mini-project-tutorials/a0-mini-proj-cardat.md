# A0 CAN Vehicle Data

## Items Used <a id="items-used"></a>

* 1x [A0](https://www.macchina.cc/catalog/a0-boards/a0-under-dash)
* 1x Car with OBD-II port

## A0 Sketch <a id="a0-sketch"></a>

Upload ​[THIS SKETCH](https://gist.github.com/kenny-macchina/f87e4c39e29a39562e168b9869d64ef8) to your A0, which queries the vehicle for speed, engine RPM, and coolant temperature, and prints the results to the serial monitor. It requires two libraries, which can be found ​[here](https://github.com/collin80/esp32_can) and ​[here](https://github.com/collin80/can_common).

## Vehicle Setup <a id="vehicle-setup"></a>

Plug A0 into the OBD-II port found beneath the dashboard \(usually between the steering wheel and pedals, by your left knee\). Keep A0 connected to your computer with the USB cable and open the Arduino IDE's serial monitor at baud 115200.

## Test <a id="test"></a>

Try revving your engine and watch as the RPM updates in the serial monitor. You can also try driving and watching the vehicle speed and engine coolant temperature.

## Example Data <a id="example-data"></a>

![](https://gblobscdn.gitbook.com/assets%2F-Lhg5aaQ-eiSLOcDoH85%2F-MA7WJFQCTHtNBlSqgnd%2F-MA7WPHZqoH-t3cExFmD%2Fimage.png?alt=media&token=60c3972a-b5b2-4315-8b0c-718489f3303e)

These graphs were made by copying the output from the serial monitor and using Excel's text import tool.

![](https://gblobscdn.gitbook.com/assets%2F-Lhg5aaQ-eiSLOcDoH85%2F-MA7WJFQCTHtNBlSqgnd%2F-MA7WTEQgvxTG5lbBuq9%2Fimage.png?alt=media&token=a13f4df1-3d24-48ac-a1c5-085c7445e112)

