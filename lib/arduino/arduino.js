import five from 'johnny-five';


const arduino = {}

arduino.devices = {
    greenLed:null,
    redLed:null,
    blueLed:null,
    yellowLed:null,
    cycloneLed1:null,
    cycloneLed2:null,
    cycloneLed3:null,
    cycloneLed4:null,
    cycloneLed5:null,
    cycloneLed6:null,
    cycloneLed7:null,
    cycloneLed8:null,

}



arduino.init = () => {

    let board = new five.Board({port : 'COM10'});

    const setup = () => {
     
        arduino.devices.greenLed = new five.Led(13);
        arduino.devices.redLed = new five.Led(12);
        arduino.devices.blueLed = new five.Led(11);
        arduino.devices.yellowLed = new five.Led(10);

        arduino.devices.cycloneLed1= new five.Led(9);
        arduino.devices.cycloneLed2= new five.Led(8);
        arduino.devices.cycloneLed3= new five.Led(7);
        arduino.devices.cycloneLed4= new five.Led(6);
        arduino.devices.cycloneLed5= new five.Led(5);
        arduino.devices.cycloneLed6= new five.Led(4);
        arduino.devices.cycloneLed7= new five.Led(3);
        arduino.devices.cycloneLed8= new five.Led(2);

      

    }

    

    

    board.on("ready", () => {

        setup();
        
    });

}



export default arduino;