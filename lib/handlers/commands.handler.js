import arduino from "../arduino/arduino.js";

const devices = arduino.devices;




export const turnOn = async () => {

  devices.cycloneLed1.stop();
  devices.cycloneLed1.on();
  devices.cycloneLed2.stop();
  devices.cycloneLed2.on();
  devices.cycloneLed3.stop();
  devices.cycloneLed3.on();
  devices.cycloneLed4.stop();
  devices.cycloneLed4.on();
  devices.cycloneLed5.stop();
  devices.cycloneLed5.on();
  devices.cycloneLed6.stop();
  devices.cycloneLed6.on();
  devices.cycloneLed7.stop();
  devices.cycloneLed7.on();
  devices.cycloneLed8.stop();
  devices.cycloneLed8.on();
  
  
  return true;

};

// Her slukker vi vores lys.
export const turnOff = async () => {

  devices.greenLed.stop();
  devices.redLed.stop();
  devices.blueLed.stop();
  devices.yellowLed.stop();
  devices.greenLed.off();
  devices.redLed.off();
  devices.yellowLed.off();
  devices.blueLed.off();
  devices.cycloneLed1.stop();
  devices.cycloneLed1.off();
  devices.cycloneLed2.stop();
  devices.cycloneLed2.off();
  devices.cycloneLed3.stop();
  devices.cycloneLed3.off();
  devices.cycloneLed4.stop();
  devices.cycloneLed4.off();
  devices.cycloneLed5.stop();
  devices.cycloneLed5.off();
  devices.cycloneLed6.stop();
  devices.cycloneLed6.off();
  devices.cycloneLed7.stop();
  devices.cycloneLed7.off();
  devices.cycloneLed8.stop();
  devices.cycloneLed8.off();
  
    return true;

};


export const blink = async (delay = 1000) => {

    if(devices.testled) {

      devices.testled.blink(delay); 

    }
  
    return true;

};

export const blinkThenStop = async (delay = 1000, timeout=5000) => {

    if(devices.testled) {

      devices.testled.blink(delay); 

    }

    setTimeout(() => {
      devices.testled.stop();
    }, timeout);
  
    return true;

};