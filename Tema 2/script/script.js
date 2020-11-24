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

context.fillStyle = "red";
context.fillRect(100, 20, 20, 5);

// ################### GEORGE ###################

const george = new Image();
george.src = './assets/george.png';

const GEORGE_WIDTH = 40;
const GEORGE_HEIGHT = 45;

george.onload = () => {
    context.drawImage(george, 0, GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, 100, 100, GEORGE_WIDTH, GEORGE_HEIGHT);
}