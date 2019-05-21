# Flashing SuperB with the ESP Tool

The ESP tool can be downloaded [here.](https://www.espressif.com/en/support/download/other-tools)  
The binary files used can be downloaded [here.](ESP32_AT_Uploader.zip)

1. Open the tool and select "ESP32 DownloadTool".
![Image showing tool selection screen, "ESP32 DownloadTool" is selected](/images/ESP_Tool/1.png)
2. Enter the binary files and their addresses, and configure the remaining settings as shown below, selecting the corresponding COM port.
![Image showing settings for the ESP tool](/images/ESP_Tool/2.png)
3. Place the SuperB into bootloader mode by holding down the BOOT button, pressing and releasing the RESET button, and then releasing the BOOT button.
4. Press start to begin flashing. (~10sec)