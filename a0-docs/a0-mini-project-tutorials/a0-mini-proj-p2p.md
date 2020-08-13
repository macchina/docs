# A0 CAN Point to Point

## Items Used <a id="items-used"></a>

* 1x [A0](https://www.macchina.cc/catalog/a0-boards/a0-under-dash)
* 1x [M2](https://www.macchina.cc/catalog/m2-boards/m2-under-dash)
* 1x [OBD3way board](https://www.macchina.cc/catalog/tools/obd3way)
* 1x 12V power supply

## M2 Sketch <a id="m2-sketch"></a>

Upload [THIS SKETCH](https://gist.github.com/kenny-macchina/690d95b6c260b15f794510dccb4950c8) to your M2, which sends a CAN frame on CAN0 or CAN1 when you push switch 1 or 2, respectively. M2 will also blink a light when it receives a CAN frame on either channel.

## A0 Sketch <a id="a0-sketch"></a>

Upload [THIS SKETCH](https://gist.github.com/kenny-macchina/5a39add47c97a8fcd16d0d45d8794679) to your A0, which sends a CAN frame on CAN0 when it first turns on, then waits and echos back messages it receives. It requires two libraries, which can be found [here](https://github.com/collin80/esp32_can) and [here](https://github.com/collin80/can_common).

## OBD3way Setup <a id="obd-3-way-setup"></a>

Connect both M2, A0, and OBD3way board as shown below. This connects the CAN0 of A0 to the CAN0 of M2.

![](https://gblobscdn.gitbook.com/assets%2F-Lhg5aaQ-eiSLOcDoH85%2F-MA7NIFwyLVdvxaehmkX%2F-MA7TmQYi1PKjKDqTmCH%2FIMG_7198.JPG?alt=media&token=4829f50e-2f2c-49f3-bef4-26117eae17af)

![](https://gblobscdn.gitbook.com/assets%2F-Lhg5aaQ-eiSLOcDoH85%2F-MA7NIFwyLVdvxaehmkX%2F-MA7TmQeQ8OsMYMv98nn%2FIMG_7201.JPG?alt=media&token=cdb9545d-bb14-4957-907b-83f9affd6b76)

CAN0 on the left is connected to CAN0 on the right.

## Test <a id="test"></a>

Try hitting the reset button on the A0, upon waking up it will send a CAN frame on CAN0 and the M2 should flash, signifying it has received the frame. Then try sending a frame from the M2 to the A0, the A0 should echo it back to the M2 and it should flash again.

