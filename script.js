

/* -Obtener parámetros-  */
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const correo = urlParams.get('mail');
const trimestre = urlParams.get('trim');
const proyecto = urlParams.get('proy');

console.log("**********PARAMETROS");
console.log(correo, trimestre, proyecto);


/* Obtener info de sliders para que se mueva el VALOR  */
const numPreguntas = 2;

var slider1 = document.getElementById("rango1");
var output1 = document.getElementById("valor1");
sliderMove(slider1, output1);

var slider2 = document.getElementById("rango2");
var output2 = document.getElementById("valor2");
sliderMove(slider2, output2);

/* -Función para hacer que se mueva el VALOR de los sliders-  */
function sliderMove(slider, output) {
  output.innerHTML = slider.value;

  slider.oninput = function () {
    output.innerHTML = this.value;
    var sliderWidth = this.getBoundingClientRect().width;
    // console.log("sliderwidth", sliderWidth)
    var outputWidth = output.getBoundingClientRect().width;
    // console.log("outputWidth", outputWidth)
    var offset = this.value / (this.max - this.min) * sliderWidth - outputWidth / 2;
    // console.log("off", offset)
    output.setAttribute('style', 'left: ' + offset + 'px');
  }

  slider.oninput();
}

/* Crear funcionalidad del botón: onClick  */
const btn = document.getElementById('btnGuardar');
btn.addEventListener('click', btnOnClick);

/* Función para que el botón construya y mande info al backend */
function btnOnClick() {
  const arrayCalifs = [slider1.value, slider2.value];
  console.log("califs", arrayCalifs)

  /* Esto se elimina porque estban hardcodeados pruebas 
  const correo = "juan.rico@s4learning.com"
  const trimestre = "1.ago22-oct22"
  const proyecto = "comwhatsapp"*/
  const calificaciones = arrayCalifs

  const URL = "http://localhost:5000/"
  const texto1 = "mail=" + correo
  const texto2 = "trim=" + trimestre
  const texto3 = "proy=" + proyecto
  const texto4 = "cali=" + calificaciones
  textolargo = URL + "?" + texto1 + "&" + texto2 
                + "&" + texto3 + "&" + texto4
  console.log(textolargo)

  /* -Función para que el botón mande info al backend-  */
  fetch(textolargo)
    .then(response => response.json())
    .then(data => {
      // do something with the response
    });
  
  /* -Función para que el botón mande llamar página de GRAX */
  

} // fin de la funcionalidad del botón


/* WORKS OK but chabged into function
var slider1 = document.getElementById("myRange");
var output1 = document.getElementById("valor1");
output1.innerHTML = slider1.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
  var sliderWidth = this.getBoundingClientRect().width;
  console.log("sliderwidth", sliderWidth)
  var outputWidth = output1.getBoundingClientRect().width;
  console.log("outputWidth", outputWidth)
  var offset = this.value / (this.max - this.min) * sliderWidth - outputWidth / 2;
  console.log("off", offset)
  output1.setAttribute('style', 'left: ' + offset + 'px');
}

slider1.oninput();
*/