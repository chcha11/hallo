const images = ["01.jpg", "02.jpg", "03.jpg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

const Cover = document.querySelector("#background");

bgImg.src = `img/${chosenImg}`;
bgImg.className = "bgimg";
document.body.appendChild(bgImg);
document.body.appendChild(Cover);
