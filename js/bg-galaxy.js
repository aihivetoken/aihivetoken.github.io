var canvas=document.querySelector(".starsky");canvas.width=window.innerWidth;canvas.height=window.innerHeight;var ctx=canvas.getContext("2d");function Circle(x,y,dx,dy,radius){this.x=x;this.y=y;this.dx=dx;this.dy=dy;this.radius=radius;this.draw=function(){var randomColor=Math.floor(Math.random()*16777215).toString(16);ctx.beginPath();ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,false);ctx.fillStyle="#c7c2c2c7";ctx.fill();}
this.update=function(){if(this.x+this.radius>innerWidth||this.x-this.radius<0){this.dx=-this.dx;}
this.x+=this.dx;if(this.y+this.radius>innerHeight||this.y-radius<0){this.dy=-this.dy;}
this.y+=this.dy;}
this.draw();}
var circleArray=[];for(let i=0;i<10;i++){var x=Math.random()*window.innerWidth;var y=Math.random()*window.innerHeight;var dx=(Math.random()-0.5);var dy=(Math.random()-0.5);var radius=3;circleArray.push(new Circle(x,y,dx,dy,radius));}
function animate(){requestAnimationFrame(animate);ctx.clearRect(0,0,innerWidth,innerHeight);for(let i=0;i<circleArray.length;i++){circleArray[i].draw();circleArray[i].update();}}
animate();