// Business Logic







// UI Logic

function numberReturn(event) {
  event.preventDefault();
  const userInput = document.getElementById("userInput").value;
  
  const paragraph = document.createElement("p");
  paragraph.append(userInput);
  document.body.append(paragraph);
  document.getElementById("robotspeak").reset();
  
}

window.addEventListener("load", function() {
  const form = document.getElementById("robotspeak");
  form.addEventListener("submit", numberReturn);
});
