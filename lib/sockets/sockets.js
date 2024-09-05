import { blink, turnOff, turnOn } from "../handlers/commands.handler.js";
import { startGame, handleSelect } from "../handlers/game.handlers.js";
import { playGame, pressStop, resetGame} from "../handlers/cyclone.handlers.js";

const sockets = (socket) => {

    // Her lytter vi på en besked fra klienten
    socket.on('blink', (data) => {
        blink(data.delay);
    });

    socket.on('turnOff', (data) => {
        turnOff()
    });
  
    socket.on('turnOn', (data) => {
        turnOn()
    });

    socket.on('runGame', (data) => {
        startGame()
    });

    socket.on('startCyclone', (data) => {
        playGame()
    });


    socket.on('greenTile', (data) => {
        handleSelect('green')
    });

    socket.on('redTile', (data) => {
        handleSelect('red')
    });

    socket.on('yellowTile', (data) => {
        handleSelect('yellow')
    });

    socket.on('blueTile', (data) => {
        handleSelect('blue')
    });

    socket.on('stop', (data) => {
        pressStop()
    });
    socket.on('reset', (data) => {
        resetGame()
    });

}

export default sockets;