// Business Logic







// UI Logic

function numberReturn(event) {
  event.preventDefault();
  const userInput = document.getElementById("userInput").value;
  
  
  document.getElementById("robotspeak").reset();
  document.getElementById("output").innerText = userInput;
  document.querySelector("p#output").removeAttribute("class");
}

window.addEventListener("load", function() {
  const form = document.getElementById("robotspeak");
  form.addEventListener("submit", numberReturn);
});
