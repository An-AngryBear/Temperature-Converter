
// Celsius to fahrenheit function
function celsToFahr(celsTemp) {
	return ((celsTemp * 1.8) + 32).toFixed(1);
}

// Fahrenheit to celsius function
function fahrToCels(fahrTemp) {
	return ((fahrTemp - 32) * (5/9)).toFixed(1);
}

// DOM elements
const tempDisplay = document.getElementById("temp-display"),
	fahrenheitRadio = document.getElementById("fahr"),
	celsiusRadio = document.getElementById("cels"),
	userInput = document.getElementById("entryfield"),
	submitButton = document.getElementById('submit-button'),
	resetButton = document.getElementById("reset-button");

// Converts user input values with corresponding colors
function converter() {
	if (celsiusRadio.checked) {
		tempDisplay.innerHTML = "<span id='output'>" + fahrToCels(userInput.value) + "</span> degrees!";
	} else {
		tempDisplay.innerHTML = "<span id='output'>" + celsToFahr(userInput.value) + "</span> degrees!";
	}
	colorSpan();
}
// Allows enter key to be used to submit
function enterAsSubmit() {
	if (event.keyCode == 13) {
		submitButton.click();
		event.preventDefault();
	}
}
// Function changes neutral temps to green, cold temps to blue, and hot temps to red
function colorSpan() {
	tempDisplay.classList = "";
	let output = document.getElementById("output");
	if((parseInt(output.innerHTML) > 90 && fahrenheitRadio.checked) || (parseInt(output.innerHTML) > 32 && celsiusRadio.checked)) {
		tempDisplay.classList.add("hot");
	} else if((parseInt(output.innerHTML) <= 32 && fahrenheitRadio.checked) || (parseInt(output.innerHTML) <= 0 && celsiusRadio.checked)) {
		tempDisplay.classList.add("cold");
	} else {
		tempDisplay.classList.add("warm-cool");
	}
}

// Event listeners for submit button, enter key, and reset button
userInput.addEventListener("keydown", enterAsSubmit);

submitButton.addEventListener("click", converter);

resetButton.addEventListener("click", function() {
	tempDisplay.innerHTML = " ";
});

