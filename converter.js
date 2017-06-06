function celsToFahr(celsTemp) {
	return ((celsTemp * 1.8) + 32).toFixed(1);
}

function fahrToCels(fahrTemp) {
	return ((fahrTemp - 32) * (5/9)).toFixed(1);
}

const tempDisplay = document.getElementById("temp-display"),
	fahrenheitRadio = document.getElementById("fahr"),
	celsiusRadio = document.getElementById("cels"),
	userInput = document.getElementById("entryfield");

function converter() {
	if (celsiusRadio.checked) {
		tempDisplay.innerHTML = fahrToCels(userInput.value) + " degrees!";
	} else {
		tempDisplay.innerHTML = celsToFahr(userInput.value) + " degrees!";
	}
}
function reset() {
	tempDisplay.innerHTML = "----";
}
