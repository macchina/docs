Macchina M2
===========



M2 has been in development for years and the team has been working together on other projects for much longer. Building M2 has always been a goal of ours. The [crowdfunding campaign](https://www.kickstarter.com/projects/1029808658/macchina-the-ultimate-tool-for-taking-control-of-y) was the catalyst that transformed us from friends and an idea to a company and a product. We are very thankful to everyone who enabled this transformation. We will repay you through our hard work and dedication to this project.

We would also like to thank the organizations that have helped build the communities that M2 relies on: Arduino, DIGI International, Digi-Key, the EFF, Hackaday, and Open Garages. Finally, to the developers who spend their own time building essential tools, answering questions on the forum, and testing, thank you.

## M2 Summary

<img src="/images/IMG_6049a5c9.jpg" width="480"/>

M2 by Macchina is an open and versatile automotive interface that can take your car to the next level. Use it to customize your ride or as a development platform for your next product. M2 works with almost any vehicle and features an Arduino Due processor at its core. An XBee form factor socket allows for many wireless capabilities.

Read more about M2 general features [here](https://www.macchina.cc/m2-introduction).

To skip to the quick start guide click [here](http://docs.macchina.cc/m2/getting-started/README.html).

## Goals

As we developed M2, we here at Macchina set out with the following goals in mind:

- Help foster a new generation of car nerds
- Develop an innovative product for a wide range of automotive functions
- Support the DIY and Open Source ecosystem
- Provide companies with a great tool for fast prototyping
- Display our ability to develop and mass produce quality hardware

## Specification

M2 is an open source automotive interface that takes the form of a OBD2 "Under-the-Dash" dongle or hard-wired "Under-the-hood" device. M2 has all of the interface circuitry to connect to the 5+ standard OBD2 protocols and other interfaces (a second CAN bus, LIN bus, single wire CAN, etc). M2 has several options for connections to the outside world including: SD card, USB Device and Host, 20-pin (sort of standard) XBEE socket, and a general purpose connector.

The XBEE socket can accept several modules, including BTLE, WIFI, and CELLULAR and others.

<img src="/images/blockdiagram3_0_10efe.png" width="480" height="388" />

We designed M2 to be modular.

**Wireless Socket:** M2 accommodates a wide variety of wireless options using the popular DIGI XBee form factor socket. Many inexpensive, plug-and-play boards already exist including BLE, WIFI, GSM, 3G, LTE, GPS and others. You can even reprogram M2 wirelessly.

**Processor PCB:** We chose the Arduino Due as the basis of M2's processor board. Shrinking the Due by well over 50% was no small task! We decided to make further improvements by using the High Speed SD card interface and writing the appropriate firmware libraries to allow for faster data logging. We also added several LED options and a couple switches for a more pleasant development experience. Lastly, we tacked on a EEPROM to store variables after power is cut to M2.

**Interface PCB:** The goal is for M2 to be able to interface and communicate with as many cars as possible. We crammed 2 channels of CAN, 2 channels of LIN/K-LINE, a J1850 VPW/PWM and even a single-wire CAN (GMLAN) interface onto the board. Automotive environments require M2 to be seriously strong, so we built in plenty of protection circuitry. Lastly, we have 6 general purpose driver circuits, which can source and sink up to 1 amp of current at 12 volts!

## Sections

- Getting started - Learn the basics of working with M2. From programming it to communicating with additional hardware.
- Build Something - Get your project off to a good start. From car hacking basics to standard projects.
- Technical References - The data you need.

## Safety

Your car might be the best hacking canvas you own, but it is also inherently dangerous. Please be familiar with our user agreement and always use best practices when working with cars. Follow the manufacturer's procedure recommendations, don’t operate on a moving vehicle, simulate ideas on a bench, and don’t test on public roads.
