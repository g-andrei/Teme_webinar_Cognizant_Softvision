// let iLoveJs = ['Love', 'I', 'JavaScript'];

// let x = iLoveJs.splice(1, 1);
// iLoveJs.unshift(x[0]);
// console.log(iLoveJs);


// let anotherArray = ['Paul', 
//                     1, 
//                     false, 
//                     {name: 'Jon Snow'}, 
//                     [1, 2, 3], 
//                     null, 
//                     undefined, 
//                     function() { 
//                         console.log('Test');
//                     },
// ];


// for(let i = 0; i < anotherArray.length; i++) {
//     console.log(`Pozitia: ${i}, 
// valoarea: ${anotherArray[i]},
// tipul: ${typeof anotherArray[i]}.

// `);
// }


const canvas = document.getElementById('canvasId');
/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext('2d');

context.fillStyle = "green";
context.fillRect(560, 385, 30, 10);

// ################### GEORGE ###################

const george = new Image();
george.src = './assets/george.png';

const GEORGE_WIDTH = 40;
const GEORGE_HEIGHT = 45;
let georgeX = 100;
let georgeY = 100;
let pozitieGeorge = 0;

george.onload = () => {
    context.drawImage(george, 0 * GEORGE_WIDTH, 0 *  GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, 100, 100, GEORGE_WIDTH, GEORGE_HEIGHT);
}

// ################### MARIO ###################

const mario = new Image();
mario.src = './assets/mario.png';

const MARIO_WIDTH = 32;
const MARIO_HEIGHT = 32;
let marioX = 50;
let marioY = 50;
let pozitieMario = 0;

mario.onload = () => {
    context.drawImage(mario, 0 * MARIO_WIDTH, 0 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, 50, 50, MARIO_WIDTH, MARIO_HEIGHT);
}

document.addEventListener("keydown", function(event) {
    context.clearRect(0, 0, 600, 400);

    //  ############## CONDITIE DE MISCARE PENTRU GEORGE 

    if (event.key === 'ArrowUp' && georgeY >= 0) {
        georgeY -= 10;
        context.drawImage(george, 2.4 * GEORGE_WIDTH, 0 *  GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, georgeX, georgeY, GEORGE_WIDTH, GEORGE_HEIGHT);
        pozitieGeorge = 1;
    } else if (event.key === 'ArrowDown' && georgeY <= 340) {
        georgeY += 10;
        context.drawImage(george, 0 * GEORGE_WIDTH, 0 *  GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, georgeX, georgeY, GEORGE_WIDTH, GEORGE_HEIGHT);
        pozitieGeorge = 2;
    } else if (event.key === 'ArrowLeft' && georgeX >= 10) {
        georgeX -= 10;
        context.drawImage(george, 1.4 * GEORGE_WIDTH, 0 *  GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, georgeX, georgeY, GEORGE_WIDTH, GEORGE_HEIGHT);
        pozitieGeorge = 3;
    } else if (event.key === 'ArrowRight' && georgeX <= 550) {
        georgeX += 10;
        context.drawImage(george, 3.8 * GEORGE_WIDTH, 0 *  GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, georgeX, georgeY, GEORGE_WIDTH, GEORGE_HEIGHT);
        pozitieGeorge = 4;
    }

    //  ############## CONDITIE DE MISCARE PENTRU MARIO 

    if (event.key === 'w' && marioY >= 10) {
        marioY -= 10;
        context.drawImage(mario, 0 * MARIO_WIDTH, 5.06 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, marioX, marioY, MARIO_WIDTH, MARIO_HEIGHT);
        pozitieMario = 1;
    } else if (event.key === 's' && marioY <= 360) {
        marioY += 10;
        context.drawImage(mario, 0 * MARIO_WIDTH, 0 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, marioX, marioY, MARIO_WIDTH, MARIO_HEIGHT);
        pozitieMario = 2;
    } else if (event.key === 'a' && marioX >= 10) {
        marioX -= 10;
        context.drawImage(mario, 0 * MARIO_WIDTH, 0 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, marioX, marioY, MARIO_WIDTH, MARIO_HEIGHT);
        pozitieMario = 3;
    } else if (event.key === 'd' && marioX <= 560) {
        marioX += 10;
        context.drawImage(mario, 7 * MARIO_WIDTH, 2.45 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, marioX, marioY, MARIO_WIDTH, MARIO_HEIGHT);
        pozitieMario = 4;
    }

    // DESENARE GEORGE CAND IL MISC PE MARIO

    if ( pozitieGeorge === 1 ) {
        context.drawImage(george, 2.4 * GEORGE_WIDTH, 0 *  GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, georgeX, georgeY, GEORGE_WIDTH, GEORGE_HEIGHT);
    } else if ( pozitieGeorge === 2 ) {
        context.drawImage(george, 0 * GEORGE_WIDTH, 0 *  GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, georgeX, georgeY, GEORGE_WIDTH, GEORGE_HEIGHT);
    } else if (pozitieGeorge === 3 ) {
        context.drawImage(george, 1.4 * GEORGE_WIDTH, 0 *  GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, georgeX, georgeY, GEORGE_WIDTH, GEORGE_HEIGHT);
    } else if ( pozitieGeorge === 4 ) {
        context.drawImage(george, 3.8 * GEORGE_WIDTH, 0 *  GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, georgeX, georgeY, GEORGE_WIDTH, GEORGE_HEIGHT);
    } else {
        context.drawImage(george, 0 * GEORGE_WIDTH, 0 *  GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, georgeX, georgeY, GEORGE_WIDTH, GEORGE_HEIGHT);
    }


    // DESENARE MARIO CAND IL MISC PE GEORGE

    if ( pozitieMario === 1 ) {
        context.drawImage(mario, 0 * MARIO_WIDTH, 5.06 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, marioX, marioY, MARIO_WIDTH, MARIO_HEIGHT);
    } else if ( pozitieMario === 2 ) {
        context.drawImage(mario, 0 * MARIO_WIDTH, 0 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, marioX, marioY, MARIO_WIDTH, MARIO_HEIGHT);
    } else if ( pozitieMario === 3 ) {
        context.drawImage(mario, 0 * MARIO_WIDTH, 0 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, marioX, marioY, MARIO_WIDTH, MARIO_HEIGHT);
    } else if ( pozitieMario === 4 ) {
        context.drawImage(mario, 7 * MARIO_WIDTH, 2.45 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, marioX, marioY, MARIO_WIDTH, MARIO_HEIGHT);
    } else {
        context.drawImage(mario, 0 * MARIO_WIDTH, 0 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, marioX, marioY, MARIO_WIDTH, MARIO_HEIGHT);
    }
    
});