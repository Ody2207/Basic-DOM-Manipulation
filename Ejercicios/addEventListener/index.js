const parrafo = document.querySelector('.contador')
const boton = document.querySelector('button')

const input = document.querySelector('input')
const parrafo2 = document.querySelector('.parrafo-2')

const bloque = document.querySelector('.bloque')


// Primer ejercicio ---------------------------------------------------------------------
let contador = 0;

boton.addEventListener('click', () => {
	console.log('click');
	contador++;
	parrafo.textContent = contador;
})

// Segundo ejercicio --------------------------------------------------------------------

input.addEventListener('change', (e) => {
	parrafo2.textContent = e.target.value;
})

// Tercer ejercicio ---------------------------------------------------------------------
bloque.addEventListener('mouseenter', () => {
	bloque.style.backgroundColor = "Red";
})

bloque.addEventListener('mouseleave', () => {
	bloque.style.backgroundColor = "rgb(109, 109, 207)";
})


// Ordernar todos los archivos y subirlos a gitHub, la clase se quedo a la mitad continuar con
// la ultima que quedo