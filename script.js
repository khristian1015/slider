

var slider1 = document.getElementById("myRange1");
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

