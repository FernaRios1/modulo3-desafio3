
document.addEventListener('keydown', (event) => {
    const keyDiv = document.getElementById('key'); // Seleccionar el div "key"

    if (event.key === 'a') {
        keyDiv.style.backgroundColor = 'pink';
    } else if (event.key === 's') {
        keyDiv.style.backgroundColor = 'orange';
    } else if (event.key === 'd') {
        keyDiv.style.backgroundColor = 'lightblue';
    }
});


function cambiarColor(element) {
    element.style.backgroundColor = 'black';
}


const div1 = document.getElementById('id1');
const div2 = document.getElementById('id2');
const div3 = document.getElementById('id3');
const div4 = document.getElementById('id4');
const div5 = document.getElementById('key');


div1.addEventListener('click', () => cambiarColor(div1));
div2.addEventListener('click', () => cambiarColor(div2));
div3.addEventListener('click', () => cambiarColor(div3));
div4.addEventListener('click', () => cambiarColor(div4));
div5.addEventListener('click', () => cambiarColor(div5));
