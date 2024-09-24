const circulo = document.querySelector(".circulo");

function seguirMouse(event) {
  circulo.style.left = event.clientX + "px";
  circulo.style.top = event.clientY + "px";
}

window.addEventListener("mousemove", seguirMouse);
