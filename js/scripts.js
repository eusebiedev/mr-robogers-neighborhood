// Business Logic







// UI Logic

function numberReturn(event) {
  event.preventDefault();
  const userInput = document.getElementById("userInput").value;

  
  document.querySelector("p#output").innerText = result;
  document.querySelector("p#output").removeAttribute("class");
}

window.addEventListener("load", function() {
  const form = document.getElementById("robotspeak");
  form.addEventListener("submit", numberReturn);
});