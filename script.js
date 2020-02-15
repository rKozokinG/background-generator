var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandomGradient() {
	
	rndColor1 = Math.floor(Math.random() * 16777215).toString(16)
	rndColor2 = Math.floor(Math.random() * 16777215).toString(16)
	if (rndColor1.length < 6){
		rndColor1 = (Array(6 - rndColor1.length + 1).join('0') + rndColor1);
	}
	if (rndColor2.length < 6){
		rndColor2 = (Array(6 - rndColor2.length + 1).join('0') + rndColor2);
	}
	color1.value = "#" + rndColor1;
	color2.value = "#" + rndColor2;

	setGradient();
}

setGradient()
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);