console.log('Hello from Nerdbord!')

const box = document.querySelector(".box");
const colors = ['red','blue','green','yellow'];

colors.forEach((color, i) => {
    setInterval(function (){
        box.style.borderColor = color;
    },3000);
})

