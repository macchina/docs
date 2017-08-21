Programming
===============

There are many ways you can write code and work with M2. One of the quickest and easiest ways is to use the Arduino IDE. (Integrated Development Environment). Many other development environments work well including [Atmel Studio](http://www.microchip.com/development-tools/atmel-studio-7) and [Simulink®](https://www.mathworks.com/products/simulink.html). In the following section, we'll describe how to set things up in each environment, starting with the Arduino IDE.

## Arduino IDE

------------------------------------------------------------------------

We made it super easy to get the Arduino IDE set up for use with M2.

You'll start by downloading and installing the latest Arduino IDE here:

<https://www.arduino.cc/en/Main/Software>

If you'd rather read something instead of watching a video, here is a great tutorial:

<https://learn.adafruit.com/add-boards-arduino-v164/>

------------------------------------------------------------------------

#### Setup

After installing the Arduino IDE, paste this URL:

`https://macchina.cc/package_macchina_index.json`

Into the preferences window like this:

<img src="/images/preferences1c7c.png" width="640" height="584" />

Select the M2 board and install like this:

<img src="/images/board%20managerbf31.png" width="640" height="361" />

------------------------------------------------------------------------

#### Blink an LED

<img src="/images/capture386c6.gif" width="640" height="350" />

Blinking an LED may sound lame, BUT is does mean that everything is working and set up correctly between your computer and M2.

**Step 1.** Plug in your M2 via USB to your computer. You may see some drivers being installed if this is the first time.

**Step 2.** Change the port to the correct serial port for M2.

<img src="/images/step912bb.png" width="593" height="649" />

**Step 3.** Open "Blink" example found at File -&gt; Examples -&gt; 01. Basics -&gt; Blink.

**Step 4.** Change 13 to 5 (in 3 places)

<img src="/images/step11159f.png" width="640" height="611" />

**Step 5.** Press the "Upload" button and you should see the Blue LED blinking after a few seconds

<img src="/images/step12ecb3.png" width="531" height="633" />

**Extra credit:** Go to this page to learn what the pin number of the other LEDs are:

[/m2/processor/pin-mapping](/m2/processor/pin-mapping)

Try making a different LED blink by changing to a pin number in the sketch.
