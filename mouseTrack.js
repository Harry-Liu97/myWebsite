// create canvas object, width and height
var canvas = document.getElementById('mouseTrack')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx = canvas.getContext('2d');

// monitor the window change
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initCanvas();
})

// set mouse position
var mouse = {
    x: undefined,
    y: undefined
}

// monitor the mouse action
window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y
    drawCircles();
})

// monitor the touch action
window.addEventListener('touchmove', function(event) {
    let touch = event.touches[0]; // the latest position of the cursor
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;
    drawCircles();
})

// function to create circle object
function Circle(x, y, radius, vx, vy, rgb, opacity, birth, life) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.minRadius = radius;
    this.vx = vx;
    this.vy = vy;
    this.birth = birth;
    this.life = life;
    this.opacity = opacity;

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        ctx.fillStyle = 'rgba(' + rgb + ',' + this.opacity + ')'
        ctx.fill();
    }

    this.update = function () {

        this.x += this.vx;
        this.y += this.vy;
        this.opacity = 1 - (((frame - this.birth) * 1) / this.life);

        if (frame > this.birth + this.life) {
            for (let i = 0; i < circleArray.length; i++) {
                if (this.birth == circleArray[i].birth && this.life == circleArray[i].life) {
                    circleArray.splice(i, 1);
                    break;
                }
            }
        } else {
            this.draw();   
        }
    }
}

// create circleArray
var circleArray = [];

// initialize circleArray
function initCanvas() {
    circleArray = [];
}

// create colorArray 
var colorArray = [
    '180, 128, 255',
    '255, 204, 153',
    '255, 165, 0'
]

// function draw circles
function drawCircles() {
    for (let i = 0; i< 2; i++) {
        let radius = Math.floor(Math.random()* 4) + 2;
        let vx = (Math.random() * 2) - 1;
        let vy= (Math.random() * 2) - 1;
        let spawnFrame = frame;
        let rgb = colorArray[Math.floor(Math.random() * colorArray.length)];
        let life = 100;
        circleArray.push(new Circle(mouse.x, mouse.y, radius, vx, vy, rgb, 1, spawnFrame, life));
    }
}

var frame = 0;

// canvas circulation
function animate() {
    requestAnimationFrame(animate);
    frame += 1
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i< circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();
