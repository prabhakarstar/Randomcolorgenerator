let color = document.querySelector('span');
let generator = document.querySelector('button');

generator.addEventListener('click',()=>{
    let randomred = Math.floor(Math.random() * 256);
    let randomgreen = Math.floor(Math.random() * 256);
    let randomyellow = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${randomred},${randomgreen},${randomyellow})`;
    color.innerText = `rgb(${randomred},${randomgreen},${randomyellow})`;
})

