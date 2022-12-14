// document.getElementById


const h1 = ('h1')
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.querySelector('#pid')
const input = document.querySelector('input')

console.log({
	h1,
	p,
	parrafito,
	pid,
	input
})

// Para poder midificar etiquetas desde Js

h1.innerHTML = 'Estoy seindo <br> escrito desde Java'
h1.innerText = 'Esto es puro <br> texto'

// Para poder ver los atributos desde js

h1.getAttribute('class');

// Para midificar los atributos desde js

h1.setAttribute('class', 'rojo');

// Para poder agregar clases desde js

h1.classList.add('verde');
h1.classList.remove('rojo');

// buscar para que funciona h1.classList.toggle('verde');
// buscar para que funciona h1.classList.contains('verde');

// Para poder modificar el value desde js

input.value = ("Hola como estas?")


// Contruir elementos HTML desde Js

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png')
console.log(img)

// Insertamos la imagen dentro de un contenedor, llamamos al id

pid.innerHTML = "";
pid.append(img)