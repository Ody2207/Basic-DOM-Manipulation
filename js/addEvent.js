const input3 = document.querySelector('#addCalculoUno')
const input4 = document.querySelector('#addCalculoDos')
const btnDos = document.querySelector('#addCalcular')
const rEsult = document.querySelector('#addResultado')

btnDos.addEventListener('click', btnListen)

// Hay que saver que cuando llamamos a nuestra función (btnListen), no le coloquemos "()"
// ya que esto nos puede traer problemas como errores

function btnListen () {
	const sumaInput = Number(input3.value) + Number(input4.value);
	rEsult.innerHTML = "Tu resultado es " + sumaInput;
}

