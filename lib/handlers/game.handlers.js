import arduino from "../arduino/arduino.js";

const devices = arduino.devices;

let sequence = [];
let humanSequence = [];
let level = 0;

let gameActive ='false';

export const resetGame = (result) => {
    
    sequence = [];
    humanSequence = [];
    level = 0;

    if(result =='win'){
        devices.greenLed.blink();
    }else{
        devices.redLed.blink();
    }
    gameActive ='false';

  
}

export const activateColor = (color) => {
    if(color == 'red'){
        devices.redLed.stop();
        devices.redLed.on();
    } else if(color == 'blue'){
        devices.blueLed.stop();
        devices.blueLed.on();
    } else if(color == 'green'){
        devices.greenLed.stop();
        devices.greenLed.on();
    } else if(color == 'yellow'){
        devices.yellowLed.stop();
        devices.yellowLed.on();
    }
    setTimeout(() => {
        devices.redLed.stop();
        devices.redLed.off();
        devices.blueLed.stop();
        devices.blueLed.off();
        devices.greenLed.stop();
        devices.greenLed.off();
        devices.yellowLed.stop();
        devices.yellowLed.off();
    },300);
}

export const playRound = (nextSequence) => {
    nextSequence.forEach((color, index) => {
        setTimeout(() => {
          activateColor(color);
        }, (index + 1) * 600);
      });
    
}

export const nextStep = () => {
    const colors = ['red', 'green', 'blue', 'yellow'];
  const random = colors[Math.floor(Math.random() * colors.length)];

  return random;

}

export const nextRound = () => {
    level += 1;

    const nextSequence = [...sequence];
    nextSequence.push(nextStep());
    playRound(nextSequence);

    sequence = [...nextSequence];
    setTimeout(() => {
    }, level * 600 + 1000);
  

}

export const handleSelect = (tile) => {
    const index = humanSequence.push(tile) - 1;
    

    if (humanSequence[index] !== sequence[index]) {
        resetGame('lose');
        return;
      }
    

  if (humanSequence.length === sequence.length) {

    if (humanSequence.length === 20) {
        resetGame('win');
        return
      }
  
    humanSequence = [];
   
    setTimeout(() => {
      nextRound();
    }, 1000);
    return;
  }

}

export const startGame = () => {

    if(gameActive =='false'){
        nextRound();
        gameActive ='true';
    }
    
}