// Business Logic
const subs = ["Beep!", "Boop!", "Won't you be my neighbor"];











// UI Logic

function numberReturn(event) {
  event.preventDefault();
  const number = document.getElementById("number").value;
  let result = [];


  
  //document.getElementById("output").innerText = arrayResults.join(" ");
  document.getElementById("robotspeak").reset();
  //document.getElementById("p#output").innerText = result;
  document.querySelector("p#output").removeAttribute("class");
}

window.addEventListener("load", function() {
  const form = document.getElementById("robotspeak");
  form.addEventListener("submit", numberReturn);
});