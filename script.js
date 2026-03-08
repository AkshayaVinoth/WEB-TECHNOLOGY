window.addEventListener("scroll", function(){

let hero = document.querySelector(".hero");

let scrollPosition = window.pageYOffset;

hero.style.backgroundPositionY = scrollPosition * 0.5 + "px";

});
function openGame(game){

let title = document.getElementById("gameTitle");
let description = document.getElementById("gameDescription");
let modal = document.getElementById("gameModal");


if(game === "shooting"){

title.innerText = "Shooting Arena";

description.innerText =
"Enter a high speed combat zone where precision and reflexes decide victory.";

}


if(game === "shadow"){

title.innerText = "Shadow Ops";

description.innerText =
"Stealth based missions inside futuristic cities where strategy is key.";

}


if(game === "battle"){

title.innerText = "Battle Warfare";

description.innerText =
"Large scale futuristic battles with advanced weapons and tactics.";

}


modal.style.display = "flex";

}


function closeGame(){

document.getElementById("gameModal").style.display = "none";

}
window.onload = function(){
document.getElementById("loader").style.display="none";
}
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
radius:Math.random()*2+1,
dx:(Math.random()-0.5)*0.5,
dy:(Math.random()-0.5)*0.5
});
}

function drawParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#00eaff";

particles.forEach(p=>{

ctx.beginPath();
ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
ctx.fill();

p.x+=p.dx;
p.y+=p.dy;

if(p.x<0||p.x>canvas.width) p.dx*=-1;
if(p.y<0||p.y>canvas.height) p.dy*=-1;

});

requestAnimationFrame(drawParticles);
}

drawParticles();

window.addEventListener("resize",()=>{
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
});