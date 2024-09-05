import arduino from "../arduino/arduino.js";

const devices = arduino.devices;

let stop = 'false';
let winstate = 'false';
let gameActive ='false';



export const checkWin = () => {
    if (winstate =='true'){
        devices.cycloneLed8.blink()}
}
export const pressStop = ()=> {

    setTimeout(() => {
    
     stop = 'true';
     checkWin()

     },  950);

    
}

export const resetGame = () => {
    
   
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
   gameActive='false';
   
  
}




export const playGame = () => {


  if(gameActive=='false'){

    gameActive='true';
    stop='false';

       setInterval(()=> {
            setTimeout(() => {
                winstate='false';
                if(stop != 'true'){
                devices.cycloneLed1.on()
                devices.cycloneLed8.off()
            }
             }, (1) * 100);
    
    
             setTimeout(() => {
                winstate='false';
                if(stop != 'true'){
                devices.cycloneLed2.on()
                devices.cycloneLed1.off()
                }
             }, (2) * 100);
             setTimeout(() => {
                winstate='false';
                if(stop != 'true'){
                 devices.cycloneLed3.on()
                 devices.cycloneLed2.off()
                }
              }, (3) * 100);
              setTimeout(() => {
                winstate='false';
                if(stop != 'true'){
                 devices.cycloneLed4.on()
                 devices.cycloneLed3.off()
                }
              }, (4) * 100);
              setTimeout(() => {
                winstate='false';
                if(stop != 'true'){
                 devices.cycloneLed5.on()
                 devices.cycloneLed4.off()
                }
              }, (5) * 100);
              setTimeout(() => {
                winstate='false';
                if(stop != 'true'){
                 devices.cycloneLed6.on()
                 devices.cycloneLed5.off()
                }
              }, (6) * 100);
              setTimeout(() => {
                winstate='false';
                if(stop != 'true'){
                 devices.cycloneLed7.on()
                 devices.cycloneLed6.off()
                }
              }, (7) * 100);
              setTimeout(() => {
                winstate='true';
                if(stop != 'true'){
                 devices.cycloneLed8.on()
                 devices.cycloneLed7.off()
                }
              }, (8) * 100);
             
        }, 800);
      }  
    }

    

   


export const buttonPress = () => {

    setTimeout(()=> {

    })
}