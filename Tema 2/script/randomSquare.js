const canvas = document.getElementById("canvasForRandomSquare");
/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext('2d');

// ######### DECLARAREA VARIABILELOR #########

const button = document.getElementById("buttonForRandomSquare");
let randomX = Math.floor(Math.random() * 550);
let randomY = Math.floor(Math.random() * 350);
let randomColor;
let indicePentruCuloare = Math.floor(Math.random() * 10) + 1;

// ######### FUNCTIE PENTRU SCHIMBAREA CULORII PATRATULUI #########

function changeColor(indicePentruCuloare) { 
    switch (indicePentruCuloare) {
        case 1:
            randomColor = '#D90000';
            break;
        case 2:
            randomColor = '#D9B200';
            break;
        case 3:
            randomColor = '#77D900';
            break;
        case 4:
            randomColor = '#00D98F';
            break;
        case 5:
            randomColor = '#00CAD9';
            break;
        case 6:
            randomColor = '#002AD9';
            break;
        case 7:
            randomColor = '#8F00D9';
            break;
        case 8:
            randomColor = '#D900B2';
            break;
        case 9:
            randomColor = '#D9005F';
            break;
        case 10:
            randomColor = '#D90000';
            break;
    }

    setTimeout(function() {
        context.clearRect(0, 0, 600, 400);
    }, 1000);

};

// ######### REDAREA PATRATELOR PE COORDONATE RANDOM #########

button.addEventListener("click", function () {

    changeColor(indicePentruCuloare);

    context.fillStyle = randomColor;
    context.fillRect(randomX, randomY, 40, 40);
    
    // ######### SCHIMBAREA COORDONATELOR SI A CULORII #########

    randomX = Math.floor(Math.random() * 550);
    randomY = Math.floor(Math.random() * 350);
    indicePentruCuloare = Math.floor(Math.random() * 10);

    console.log(randomX, randomY, indicePentruCuloare )
});