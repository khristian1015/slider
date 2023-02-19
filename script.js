




var slider = document.getElementById("rango1");
var output = document.getElementById("valor1");

sliderMove(slider, output);



function sliderMove(slider, output) {
    output.innerHTML = slider.value;
    
    slider.oninput = function() {
      output.innerHTML = this.value;
      var sliderWidth = this.getBoundingClientRect().width;
      console.log("sliderwidth", sliderWidth)
      var outputWidth = output.getBoundingClientRect().width;
      console.log("outputWidth", outputWidth)
      var offset = this.value / (this.max - this.min) * sliderWidth - outputWidth / 2;
      console.log("off", offset)
      output.setAttribute('style', 'left: ' + offset + 'px');
    }
    
    slider.oninput();
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