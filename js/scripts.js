// Business Logic







// UI Logic

function numberReturn(event) {
  event.preventDefault();
  const number = document.getElementById("number").value;

  let result = [];
  const subs = ["Beep!", "Boop!", "Won't you be my neighbor"];
    
  
  document.querySelector("p#output").innerText = result;
  document.querySelector("p#output").removeAttribute("class");
}

window.addEventListener("load", function() {
  const form = document.getElementById("robotspeak");
  form.addEventListener("submit", numberReturn);
});