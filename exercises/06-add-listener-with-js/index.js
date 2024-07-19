window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	let cualquierNombre = document.getElementById("theGreen");
	cualquierNombre.addEventListener("click", nuevoNombre);
	
};

// The listewindow.eventListener = function eventListener(){
function nuevoNombre() {
	alert("woohoo!");
}