12VIO
=====

Macchina 2.0 has 6 General Purpose 12 volt Input/Output Driver circuits.

\[TO DO: Add diagram and photos\]

\[TO DO: Add description of connector, wire harness, where to buy parts, etc\]

Each pin is capable of:
Sourcing (pulling high to 12 volt rail) \[current capability TBD\]
Sinking (pulling low to GND) \[current capability TBD\]
Act as a analog input with a 0-12 volt range \[resolution TBD\]

When sourcing power, the 12V rail is monitored by an internal current monitor. The goal here is to be able to be able to dynamically measure how much power an external device is using AND ensure the the total power pulled from the OBD2 port does not exceed X amps and blow the car's OBD2 fuse.

12VIO library creation is in progress. The goal is to have an easy to use, simple library called "12VIO.h" (or something like that) to make it easy to set what each pin should be used for:

Calls would look something like this (feedback appreciated)

12VIO\_setpin(3, SOURCE) // sets output 3 to source 12 volts
12VIO\_setpin(4, SINK) // sets output 4 to sink
12VIO\_setpin(2, AIN) // sets output 2 to be analog input

12VIO\_PWM(3, 75) // put 75% duty cycle on pin 3
12VIO\_LOW(4) // drive pin 4 LOW
12VIO\_READ(2) // read analog value of pin 2

Note that this library is especially important since it abstracts the lower-level drivers and ensures that circuit is controlled correctly. It is possible to create a direct short by not controlling correctly. \[more information to follow\]

Below is example sketch showing how to PWM a pin.

```
#define MASTER_CLOCK 84000000
#include "SamNonDuePin.h"

uint32_t clock_a = 42000000; // Sampling frequency in Hz

int brightness = 0;    // how bright the LED is
int fadeAmount = 5;    // how many points to fade the LED by

const int IOENABLE = 6;      // the number of the 12Vio_EN pin

void setup()
{
  pinMode(IOENABLE, OUTPUT);
  digitalWrite(IOENABLE, HIGH);

//   SetPin(35); // PWMH0  - GPIO 1A (Channel 0)
//   pinMode(34, OUTPUT);
//   digitalWrite(34, LOW);

//    SetPin(37); // PWMH1  - GPIO 2A (Channel 1)
//    pinMode(36, OUTPUT);
//    digitalWrite(36, LOW);

  SetPin(39); // PWMH2  - GPIO 3A (Channel 2) 
  pinMode(38, OUTPUT);
  digitalWrite(38, LOW);

//   SetPin(41); // PWMH3  - GPIO 4A (Channel 3)
//   pinMode(40, OUTPUT);
//   digitalWrite(40, LOW);

//   PIO_Configure(nonDuePinDescription[X8].pPort, PIO_PERIPH_B, nonDuePinDescription[X8].ulPin,nonDuePinDescription[X8].ulPinConfiguration); // - GPIO 5A (Channel 4)
//   pinMode(9, OUTPUT);
//   digitalWrite(9, LOW);

//   SetPin(44); // PWMH5  - GPIO 6A (Channel 5)
//   pinMode(8, OUTPUT);
//   digitalWrite(8, LOW);

  pmc_enable_periph_clk(PWM_INTERFACE_ID); // Turn on PWM clock
  PWMC_ConfigureClocks(clock_a, 0, MASTER_CLOCK); // clock_b = 0

//    PWMC_ConfigureChannelExt(PWM,
//                             0, // Channel: 0
//                             PWM_CMR_CPRE_CLKA, // Prescaler: use CLOCK_A
//                             PWM_CMR_CALG, // Alignment: period is center aligned
//                             0, // Polarity: output waveform starts at a low level
//                             PWM_CMR_CES, // Counter event: occurs at the end and middle of the period
//                             PWM_CMR_DTE, // Dead time generator is enabled
//                             0, // Dead time PWMH output is not inverted
//                             0);  // Dead time PWML output is not inverted
//    PWMC_SetPeriod(PWM, 0, 600); // Channel: 0, Period: 1/(1200/42 Mhz) = ~35 kHz
//    PWMC_SetDutyCycle(PWM, 0, 100); // Channel: 0, Duty cycle: xx %
//    PWMC_SetDeadTime(PWM, 0, 42, 42); // Channel: 0, Rising and falling edge dead time: 42/42 Mhz = 1 us
//    PWMC_EnableChannel(PWM, 0); // Channel: 0


//    PWMC_ConfigureChannelExt(PWM,
//                             1, // Channel: 1
//                             PWM_CMR_CPRE_CLKA, // Prescaler: use CLOCK_A
//                             PWM_CMR_CALG, // Alignment: period is center aligned
//                             0, // Polarity: output waveform starts at a low level
//                             PWM_CMR_CES, // Counter event: occurs at the end and middle of the period
//                             PWM_CMR_DTE, // Dead time generator is enabled
//                             0, // Dead time PWMH output is not inverted
//                             0);  // Dead time PWML output is not inverted
//    PWMC_SetPeriod(PWM, 1, 600); // Channel: 1, Period: 1/(1200/42 Mhz) = ~35 kHz
//    PWMC_SetDutyCycle(PWM, 1, 200); // Channel: 1, Duty cycle: 33 %
//    PWMC_SetDeadTime(PWM, 1, 42, 42); // Channel: 1, Rising and falling edge dead time: 42/42 Mhz = 1 us
//    PWMC_EnableChannel(PWM, 1); // Channel: 1
//
  PWMC_ConfigureChannelExt(PWM,
                           2, // Channel: 2
                           PWM_CMR_CPRE_CLKA, // Prescaler: use CLOCK_A
                           PWM_CMR_CALG, // Alignment: period is center aligned
                           0, // Polarity: output waveform starts at a low level
                           PWM_CMR_CES, // Counter event: occurs at the end and middle of the period
                           PWM_CMR_DTE, // Dead time generator is enabled
                           0, // Dead time PWMH output is not inverted
                           0);  // Dead time PWML output is not inverted
  PWMC_SetPeriod(PWM, 2, 600); // Channel: 2, Period: 1/(1200/42 Mhz) = ~35 kHz
  PWMC_SetDutyCycle(PWM, 2, 200); // Channel: 2, Duty cycle: 33 %
  PWMC_SetDeadTime(PWM, 2, 42, 42); // Channel: 2, Rising and falling edge dead time: 42/42 Mhz = 1 us
  PWMC_EnableChannel(PWM, 2); // Channel: 2
  //
//    PWMC_ConfigureChannelExt(PWM,
//                             3, // Channel: 3
//                             PWM_CMR_CPRE_CLKA, // Prescaler: use CLOCK_A
//                             PWM_CMR_CALG, // Alignment: period is center aligned
//                             0, // Polarity: output waveform starts at a low level
//                             PWM_CMR_CES, // Counter event: occurs at the end and middle of the period
//                             PWM_CMR_DTE, // Dead time generator is enabled
//                             0, // Dead time PWMH output is not inverted
//                             0);  // Dead time PWML output is not inverted
//    PWMC_SetPeriod(PWM, 3, 600); // Channel: 3, Period: 1/(1200/42 Mhz) = ~35 kHz
//    PWMC_SetDutyCycle(PWM, 3, 200); // Channel: 3, Duty cycle: 33 %
//    PWMC_SetDeadTime(PWM, 3, 42, 42); // Channel: 3, Rising and falling edge dead time: 42/42 Mhz = 1 us
//    PWMC_EnableChannel(PWM, 3); // Channel: 3

  //
  
//    PWMC_ConfigureChannelExt(PWM,
//                             4, // Channel: 4
//                             PWM_CMR_CPRE_CLKA, // Prescaler: use CLOCK_A
//                             PWM_CMR_CALG, // Alignment: period is center aligned
//                             0, // Polarity: output waveform starts at a low level
//                             PWM_CMR_CES, // Counter event: occurs at the end and middle of the period
//                             PWM_CMR_DTE, // Dead time generator is enabled
//                             0, // Dead time PWMH output is not inverted
//                             0);  // Dead time PWML output is not inverted
//    PWMC_SetPeriod(PWM, 4, 600); // Channel: 4, Period: 1/(1200/42 Mhz) = ~35 kHz
//    PWMC_SetDutyCycle(PWM, 4, 200); // Channel: 4, Duty cycle: 33 %
//    PWMC_SetDeadTime(PWM, 4, 42, 42); // Channel: 4, Rising and falling edge dead time: 42/42 Mhz = 1 us
//    PWMC_EnableChannel(PWM, 4); // Channel: 4

//    PWMC_ConfigureChannelExt(PWM,
//                             5, // Channel: 5
//                             PWM_CMR_CPRE_CLKA, // Prescaler: use CLOCK_A
//                             PWM_CMR_CALG, // Alignment: period is center aligned
//                             0, // Polarity: output waveform starts at a low level
//                             PWM_CMR_CES, // Counter event: occurs at the end and middle of the period
//                             PWM_CMR_DTE, // Dead time generator is enabled
//                             0, // Dead time PWMH output is not inverted
//                             0);  // Dead time PWML output is not inverted
//    PWMC_SetPeriod(PWM, 5, 600); // Channel: 5, Period: 1/(1200/42 Mhz) = ~35 kHz
//    PWMC_SetDutyCycle(PWM, 5, 200); // Channel: 5, Duty cycle: 33 %
//    PWMC_SetDeadTime(PWM, 5, 42, 42); // Channel: 5, Rising and falling edge dead time: 42/42 Mhz = 1 us
//    PWMC_EnableChannel(PWM, 5); // Channel: 5

}

void loop()
{
  PWMC_SetDutyCycle(PWM, 2, brightness); // Channel: 2 (GPIO 3A)
  
  // change the brightness for next time through the loop:
  brightness = brightness + fadeAmount;

  // reverse the direction of the fading at the ends of the fade:
  if (brightness == 0 || brightness == 600) {
    fadeAmount = -fadeAmount ;
  }
  // wait for 30 milliseconds to see the dimming effect
  delay(30);
}

void SetPin(uint8_t pin)
{
  PIO_Configure(g_APinDescription[pin].pPort, // Port
                PIO_PERIPH_B, // Peripheral
                g_APinDescription[pin].ulPin,
                g_APinDescription[pin].ulPinConfiguration);

}
```

\[TO DO: Add example of syncing and analog input\]
