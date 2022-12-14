const input1 = document.querySelector('#onCalculoUno')
const input2 = document.querySelector('#onCalculoDos')
const btn = document.querySelector('#onClacular')
const result = document.querySelector('#onResultado')

function btnListen () {
	const sumaInput = Number(input1.value) + Number(input2.value);
	result.innerHTML = "Tu resultado es " + sumaInput;
}

