// Business Logic

const subs = ["Beep!", "Boop!", "Won't you be my neighbor"];

function beep() {
  let result = []
  if (number === 1 ){
    result = "Beep!";
  } else if (number === 2){
    result = "Boop!";
  } else if (number === 3) {
    result = "Won't you be my neighbor?";
  } else {
    result = "number";
  }
}











// UI Logic

function numberReturn(event) {
  event.preventDefault();
  const number = document.getElementById("number").value;

  let result = [];
  
  
  //document.getElementById("output").innerText = arrayResults.join(" ");
  //document.getElementById("robotspeak").reset();
  document.querySelector("p#output").innerText = result;
  document.querySelector("p#output").removeAttribute("class");
}

window.addEventListener("load", function() {
  const form = document.getElementById("robotspeak");
  form.addEventListener("submit", numberReturn);
});