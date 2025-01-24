const canvas=document.getElementById("canvas1");
const ctx=canvas.getContext('2d');
canvas.height=1000;
canvas.width=800;
const position=canvas.getBoundingClientRect();
ctx.beginPath();
console.log(position.x,position.y)
ctx.arc((canvas.width)/2,(canvas.height)/2,350,0,2*Math.PI,true);
ctx.strokeStyle='white';
ctx.lineWidth='2'
ctx.stroke();

