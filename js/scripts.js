// Business Logic=





// UI Logic

function numberReturn(event) {
  event.preventDefault();
  const userInput = document.getElementById("userInput").value;

let output = [];
if (userInput === "1") {
  result = "Beep!";
} else if (userInput === "2") {
  result = "Boop!";
} else if (userInput === "3") {
  result = "Won't you be my neighbor?";
} else {
  result = "Try Again!";
}   

  document.getElementById("robotspeak").reset();
  document.getElementById("output").innerText = output.toString() + result;
  document.querySelector("p#output").removeAttribute("class");

}
window.addEventListener("load", function() {
  const form = document.getElementById("robotspeak");
  form.addEventListener("submit", numberReturn);
});
