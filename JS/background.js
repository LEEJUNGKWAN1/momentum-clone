const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.classList.add("fullscreen-image"); // 클래스 지정

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
