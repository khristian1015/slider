



const numPreguntas = 2;

var slider1 = document.getElementById("rango1");
var output1 = document.getElementById("valor1");
sliderMove(slider1, output1);

var slider2 = document.getElementById("rango2");
var output2 = document.getElementById("valor2");
sliderMove(slider2, output2);

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


const btn = document.getElementById('btnGuardar');
btn.addEventListener('click', btnOnClick);

function btnOnClick() {
  const arrayCalifs = [slider1.value, slider2.value];
  console.log("califs", arrayCalifs)

  const correo = "juan.rico@s4learning.com"
  const trim = "1.ago22-oct22"
  const proy = "comwhatsapp"
  const calif = arrayCalifs

  const URL = "http://localhost:5000/"
  const texto1 = "correo=" + correo
  const texto2 = "trim=" + trim
  const texto3 = "proy=" + proy
  const texto4 = "calif=" + calif
  textolargo = URL + "?" + texto1 + "&" + texto2 + "&" + texto3 + "&"
    + texto4
  console.log(textolargo)


  fetch(textolargo)
    .then(response => response.json())
    .then(data => {
      // do something with the response
    });
}


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