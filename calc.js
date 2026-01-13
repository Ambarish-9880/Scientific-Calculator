let display = document.getElementById("display");

// 🔐 LOGIN LOGIC
function loginUser(event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  localStorage.setItem("calcUser", username);

  showCalculator();
}

function showCalculator() {
  let user = localStorage.getItem("calcUser");

  if (user) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("calcBox").style.display = "block";
    document.getElementById("welcomeText").innerText = "Welcome, " + user + " 👋";
  }
}

function logout() {
  localStorage.removeItem("calcUser");
  location.reload();
}

// 🔁 AUTO LOGIN CHECK
window.onload = showCalculator;

// 🧮 CALCULATOR LOGIC
function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
