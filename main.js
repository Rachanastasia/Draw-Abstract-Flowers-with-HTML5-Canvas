const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 85;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;
let dir = false;

let saturation = 90;
let lightness = 50;

let centerWidth = (window.innerWidth) / 2;
let centerHeight = (window.innerHeight) / 2;

let colors = [345, 235, 305, 4];


function draw(e){
  if (!isDrawing) return;
  console.log(e);
  ctx.strokeStyle = `hsl(4, ${saturation}%, ${lightness}%)`;
  ctx.beginPath();

  ctx.moveTo(lastX, lastY);

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.arc(centerWidth, centerHeight, 40, 12, 2 * Math.PI);
  ctx.stroke();

  lastX = e.offsetX;
  lastY = e.offsetY;



/*
  saturation++;
  if (saturation >=90){
    saturation--;
  }*/

 /* lightness++;
  if (lightness >=90){
    lightness = 10;
  }*/

  if (lightness >= 55 || lightness <=20){
    direction = !direction;

  }

  if (direction){
    lightness++;
  } else {
    lightness--;
  }



if (saturation >= 80 || saturation <=50){
    dir = !dir;

  }

  if (dir){
    saturation++;
  } else {
    saturation--;
  }
}



canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;

});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

