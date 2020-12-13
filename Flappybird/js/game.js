let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

const bird = new Image();
const bg = new Image();
const foreGround = new Image();
const pipeUp = new Image();
const pipeBottom = new Image();

bird.src = 'img/flappy_bird_bird.png';
bg.src = 'img/flappy_bird_bg.png';
foreGround.src = 'img/flappy_bird_fg.png';
pipeUp.src = 'img/flappy_bird_pipeUp.png';
pipeBottom.src = 'img/flappy_bird_pipeBottom.png';


let fly = new Audio();
let score_audio = new Audio();

fly.src = 'audio/fly.mp3';
score_audio.src = 'audio/score.mp3';



let gap = 90;



document.addEventListener('keydown', moveUp);

function moveUp() {
    yPosition -= 20;
    fly.play();
}

let pipe = [];

pipe[0] = {
    x: canvas.width,
    y: 0
}

let score = 0;

let xPosition = 10;
let yPosition = 150;
let gravity = 1;


function draw() {
    context.drawImage(bg, 0, 0);

    for(let i = 0; i < pipe.length; i++) {
        context.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        context.drawImage(pipeBottom, pipe[i].x, pipe[i].y+ pipeUp.height + gap);

        pipe[i].x--;


        if (pipe[i].x === 125) {
            pipe.push({
                x: canvas.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            })
        }

        if( xPosition + bird.width >= pipe[i].x
            && xPosition <= pipe[i].x + pipeUp.width
            && (yPosition <= pipe[i].y + pipeUp.height
            || yPosition + bird.height >= pipe[i].y + pipeUp.height + gap) || yPosition + bird.height >= canvas.height - foreGround.height) {
                location.reload(); // reload the page
            }
        

            if (pipe[i].x == 5) {
                score++;
                score_audio.play();
            } 
    }

    context.drawImage(foreGround, 0, canvas.height - foreGround.height);
    context.drawImage(bird, xPosition, yPosition);

    yPosition += gravity;

    context.fillStyle = "#000";
    context.font = "24px Verdana";
    context.fillText("score: " + score, 10, canvas.height - 20);

    requestAnimationFrame(draw);
}

pipeBottom.onload = draw;