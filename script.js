console.log('Hello from Nerdbord!')

const box = document.querySelector(".box");
const colors = ['red','blue','green','yellow'];
let i = 0;

setInterval(function (){
    box.style.borderColor = colors[i];
    i = (i + 1) % colors.length;
},3000);

