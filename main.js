const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 85;

//ctx.fillStyle = "#FF0000";
//ctx.fillRect(0, 0, 150, 75);
/*var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);*/
let rectHeight = (canvas.height) - 40;
let rectWidth = (canvas.width) - 50;
ctx.fillStyle = "#FFF"
ctx.fillRect(15, 15, rectWidth, rectHeight);





let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;
let dir = true;
let saturation = 90;
let lightness = 50;

//starts drawing point in center
let centerWidth = (window.innerWidth) / 2;
let centerHeight = (window.innerHeight) / 2;




//how can I choose the hue from this array of colors 
//from within the template string?
//let colors = [345, 235, 305, 4];
let dotXOne = centerWidth - 10;
let dotYOne = centerHeight - 10;

function dots (e){
    ctx.strokeStyle = "red";
    ctx.arc(dotXOne, dotYOne, 15, 12, 2 * Math.PI);
    ctx.beginPath();
}
function draw(e){
  if (!isDrawing) return;
  console.log(e);
  ctx.strokeStyle = `hsl(305, ${saturation}%, ${lightness}%)`;
  ctx.beginPath();

  ctx.moveTo(lastX, lastY);

  //arc creates a circular motion
  //variables change center point to center of window
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.arc(centerWidth, centerHeight, 40, 12, 2 * Math.PI);
  ctx.stroke();

  lastX = e.offsetX;
  lastY = e.offsetY;



 //gradual change in lightness value
  if (lightness >= 55 || lightness <=20){
    direction = !direction;
  }

  if (direction){
    lightness++;
  } else {
    lightness--;
  }

//gradual change in saturation value
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
canvas.addEventListener('mouseup', dots);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

//create dots at center of flower
let dotOneX = centerWidth - 75;
let dotOneY = centerHeight + 75;
let dotTwoX = centerWidth + 75;
let dotThreeY = centerHeight - 75;
ctx.beginPath();
ctx.arc(dotOneX, dotOneY, 2, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(dotTwoX, dotOneY, 2, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(centerWidth, dotThreeY, 2, 0, 2 * Math.PI);
ctx.stroke();