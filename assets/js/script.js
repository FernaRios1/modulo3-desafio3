function pintar(elemento, color = "green") {
    elemento.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

if (ele) {
pintar(ele)
ele.addEventListener("click", (e) => pintar(e.target, 'yellow'))
} 
