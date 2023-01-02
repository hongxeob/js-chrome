const images = ["0.png", "1.jpeg", "2.jpeg"];
const chooseImage = images[Math.floor(Math.random() * images.length)];

const bg = document.createElement("img");
bg.src = `img/${chooseImage}`;

document.body.appendChild(bg);


