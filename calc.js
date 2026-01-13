// Get display box
let display = document.getElementById("display");

// Add value to display
function append(value) {
  display.value = display.value + value;
}

// Clear everything
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteChar() {
  display.value = display.value.substring(0, display.value.length - 1);
}

// Calculate result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// Convert degree to radian
function toRadians(degree) {
  return degree * (Math.PI / 180);
}

// Trigonometric functions
function sin() {
  let value = Number(display.value);
  display.value = Math.sin(toRadians(value));
}

function cos() {
  let value = Number(display.value);
  display.value = Math.cos(toRadians(value));
}

function tan() {
  let value = Number(display.value);
  display.value = Math.tan(toRadians(value));
}

// Logarithmic functions
function log() {
  let value = Number(display.value);
  display.value = Math.log10(value);
}

function ln() {
  let value = Number(display.value);
  display.value = Math.log(value);
}

// Square root
function sqrt() {
  let value = Number(display.value);
  display.value = Math.sqrt(value);
}

// Multiplication table (1 to 10)
function table() {
  let number = Number(display.value);
  let result = "";

  for (let i = 1; i <= 10; i++) {
    result = result + number + " x " + i + " = " + (number * i) + "\n";
  }

  alert(result);
}
