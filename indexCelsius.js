

function conversor () { // Convertir a celsius
  var grados = parseInt(document.getElementById("fahrenheit").value);
  var resultado = document.getElementById("celsius");
  var celsius =  (grados - 32) * (5/9);

    resultado.value = celsius;
}

function conversorAFahrenheit() { // Convertir a fahrenheit
var gradosCelsius = parseInt(document.getElementById("celsius").value);
var resultadoCelsius = document.getElementById("fahrenheit");
var fahrenheit = ((gradosCelsius * 1.8) + 32);

  resultadoCelsius.value = fahrenheit;
}
