
class Board {
    constructor(players) {
        this._players = players;
        this._ladder1 = 36; // casilla 2
        this._ladder2 = 7;  // casilla 7
        this._ladder3 = 23; // casilla 15
        this._ladder4 = 21; // casilla 21
        this._ladder5 = 56; // casilla 28
        this._ladder6 = 8; // casilla 36
        this._ladder7 = 16; // casilla 51
        this._ladder8 = 20; // casilla 71
        this._snake1 = -10; // casilla 16
        this._snake2 = -21; // casilla 46
        this._snake3 = -38; // casilla 49
        this._snake4 = -43; // casilla 62
        this._snake5 = -4; // casilla 64
        this._snake6 = -21; // casilla 74
        this._snake7 = -21; // casilla 89
        this._snake8 = -14; // casilla 92
        this._snake9 = -20; // casilla 95
        this._snake10 = -19; // casilla 99
    }

    checkBoard(posPlayer1, posPlayer2) {
        //escaleras
        if(posPlayer1 === 2) {player1.changePos(this._ladder1); console.log(`${player1.getPlayerName()} sube ${this._ladder1} por la escalera`)} 
        else if (posPlayer2 === 2) {player2.changePos(this._ladder1); console.log(`${player2.getPlayerName()} sube ${this._ladder1} por la escalera`)}

        else if (posPlayer1 === 7) {player1.changePos(this._ladder2); console.log(`${player1.getPlayerName()} sube ${this._ladder2} por la escalera`)} 
        else if (posPlayer2 === 7) {player2.changePos(this._ladder2); console.log(`${player2.getPlayerName()} sube ${this._ladder2} por la escalera`)}

        else if (posPlayer1 === 15) {player1.changePos(this._ladder3); console.log(`${player1.getPlayerName()} sube ${this._ladder3} por la escalera`)} 
        else if (posPlayer2 === 15) {player2.changePos(this._ladder3); console.log(`${player2.getPlayerName()} sube ${this._ladder3} por la escalera`)}

        else if (posPlayer1 === 21) {player1.changePos(this._ladder4); console.log(`${player1.getPlayerName()} sube ${this._ladder4} por la escalera`)} 
        else if (posPlayer2 === 21) {player2.changePos(this._ladder4); console.log(`${player2.getPlayerName()} sube ${this._ladder4} por la escalera`)}

        else if (posPlayer1 === 28) {player1.changePos(this._ladder5); console.log(`${player1.getPlayerName()} sube ${this._ladder5} por la escalera`)} 
        else if (posPlayer2 === 28) {player2.changePos(this._ladder5); console.log(`${player2.getPlayerName()} sube ${this._ladder5} por la escalera`)}

        else if (posPlayer1 === 36) {player1.changePos(this._ladder6); console.log(`${player1.getPlayerName()} sube ${this._ladder6} por la escalera`)} 
        else if (posPlayer2 === 36) {player2.changePos(this._ladder6); console.log(`${player2.getPlayerName()} sube ${this._ladder6} por la escalera`)}

        else if (posPlayer1 === 51) {player1.changePos(this._ladder7); console.log(`${player1.getPlayerName()} sube ${this._ladder7} por la escalera`)} 
        else if (posPlayer2 === 51) {player2.changePos(this._ladder7); console.log(`${player2.getPlayerName()} sube ${this._ladder7} por la escalera`)}

        else if (posPlayer1 === 71) {player1.changePos(this._ladder8); console.log(`${player1.getPlayerName()} sube ${this._ladder8} por la escalera`)} 
        else if (posPlayer2 === 71) {player2.changePos(this._ladder8); console.log(`${player2.getPlayerName()} sube ${this._ladder8} por la escalera`)}

        //serpientes
        else if (posPlayer1 === 16) {player1.changePos(this._snake1); console.log(`${player1.getPlayerName()} baja ${this._snake1} por la serpiente`)} 
        else if (posPlayer2 === 16) {player2.changePos(this._snake1); console.log(`${player2.getPlayerName()} baja ${this._snake1} por la serpiente`)} 

        else if (posPlayer1 === 46) {player1.changePos(this._snake2); console.log(`${player1.getPlayerName()} baja ${this._snake2} por la serpiente`)} 
        else if (posPlayer2 === 46) {player2.changePos(this._snake2); console.log(`${player2.getPlayerName()} baja ${this._snake2} por la serpiente`)} 

        else if (posPlayer1 === 49) {player1.changePos(this._snake3); console.log(`${player1.getPlayerName()} baja ${this._snake3} por la serpiente`)} 
        else if (posPlayer2 === 49) {player2.changePos(this._snake3); console.log(`${player2.getPlayerName()} baja ${this._snake3} por la serpiente`)} 

        else if (posPlayer1 === 62) {player1.changePos(this._snake4); console.log(`${player1.getPlayerName()} baja ${this._snake4} por la serpiente`)} 
        else if (posPlayer2 === 62) {player2.changePos(this._snake4); console.log(`${player2.getPlayerName()} baja ${this._snake4} por la serpiente`)} 

        else if (posPlayer1 === 64) {player1.changePos(this._snake5); console.log(`${player1.getPlayerName()} baja ${this._snake5} por la serpiente`)} 
        else if (posPlayer2 === 64) {player2.changePos(this._snake5); console.log(`${player2.getPlayerName()} baja ${this._snake5} por la serpiente`)} 

        else if (posPlayer1 === 74) {player1.changePos(this._snake6); console.log(`${player1.getPlayerName()} baja ${this._snake6} por la serpiente`)} 
        else if (posPlayer2 === 74) {player2.changePos(this._snake6); console.log(`${player2.getPlayerName()} baja ${this._snake6} por la serpiente`)} 

        else if (posPlayer1 === 89) {player1.changePos(this._snake7); console.log(`${player1.getPlayerName()} baja ${this._snake7} por la serpiente`)} 
        else if (posPlayer2 === 89) {player2.changePos(this._snake7); console.log(`${player2.getPlayerName()} baja ${this._snake7} por la serpiente`)} 

        else if (posPlayer1 === 92) {player1.changePos(this._snake8); console.log(`${player1.getPlayerName()} baja ${this._snake8} por la serpiente`)} 
        else if (posPlayer2 === 92) {player2.changePos(this._snake8); console.log(`${player2.getPlayerName()} baja ${this._snake8} por la serpiente`)} 

        else if (posPlayer1 === 95) {player1.changePos(this._snake9); console.log(`${player1.getPlayerName()} baja ${this._snake9} por la serpiente`)} 
        else if (posPlayer2 === 95) {player2.changePos(this._snake9); console.log(`${player2.getPlayerName()} baja ${this._snake9} por la serpiente`)} 

        else if (posPlayer1 === 99) {player1.changePos(this._snake10); console.log(`${player1.getPlayerName()} baja ${this._snake10} por la serpiente`)} 
        else if (posPlayer2 === 99) {player2.changePos(this._snake10); console.log(`${player2.getPlayerName()} baja ${this._snake10} por la serpiente`)} 

    }

}

let board1 = new Board();

class Dice {
    throw() {
        return Math.ceil(Math.random()*6);
    }
}

let dice = new Dice();

class Player {
    constructor(name, dice) {
        this._name = name;
        this._dice = dice;
        this._position = 0;
    }

    getPlayerName() {
        return this._name;
    }
    
    checkPos() {
        return this._position;
    }

    move() {
        this._position += this._dice.throw();
    }

    changePos(spaces) {
        this._position += spaces;
    }

}

let player1 = new Player('Nataly', dice);
let player2 = new Player('Gibby', dice);

while(player1.checkPos() < 100 && player2.checkPos() < 100) {
    player1.move();
    console.log(`El jugador ${player1.getPlayerName()} se encuentra en la casilla ${player1.checkPos()}`);
    player2.move();
    console.log(`El jugador ${player2.getPlayerName()} se encuentra en la casilla ${player2.checkPos()}`);
    board1.checkBoard(player1.checkPos(), player2.checkPos());
}

if(player1.checkPos() === player2.checkPos() || player1.checkPos() >= 100 && player2.checkPos() >= 100) {console.log(`${player1.getPlayerName()} y ${player2.getPlayerName()} HAN EMPATADO!`)}
else if (player1.checkPos() >= 100) {
    console.log(`${player1.getPlayerName()} HA GANADO!`)
} else {
    console.log(`${player2.getPlayerName()} HA GANADO!`) 
}

/*

Se pueden usar vectores y revisar cuánto aumenta o disminuye dependiendo de en
qué posición está el jugador, cuando no hay nada colocar 0 en esa posición */