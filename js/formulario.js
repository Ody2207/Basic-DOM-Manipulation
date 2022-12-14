const input5 = document.querySelector('#addCalculoTres')
const input6 = document.querySelector('#addCalculoCuatro')
const btnTres = document.querySelector('#addCalcularDos')
const resultDos = document.querySelector('#addResultadoDos')
const form = document.querySelector('#form')

// form.addEventListener('submit', sumarInputValues)

// function sumarInputValues (event) {
// 	console.log({event});
// 	event.preventDefault();
// 	const sumaInput = Number(input1.value) + Number(input2.value);
// 	rEsult.innerHTML = "Tu resultado es " + sumaInput;
// }

btnTres.addEventListener('click', sumarInputValues)

function sumarInputValues () {
	const sumaInput = Number(input5.value) + Number(input6.value);
	resultDos.innerHTML = "Tu resultado es " + sumaInput;
}


// Para la siguiente clase, nesecito completar los apuntes como funciona preventDefault
// explicar, como quitarlo y continuar con la clase 
