// Business Logic







// UI Logic

function numberReturn(event) {
  event.preventDefault();
  const userInput = document.getElementById("userInput").value;
  const words =["Beep!","Boop!","Won't you be my neighbor?"];
  let input = [];
  if (input === "1") {
    output = "Beep!";
  } 
  if (input === "2") {
    output = "Boop!";
  } else {
    output = "Try Again!"
  }



  document.getElementById("robotspeak").reset();
  document.getElementById("output").innerText = output;
  document.querySelector("p#output").removeAttribute("class");
}

window.addEventListener("load", function() {
  const form = document.getElementById("robotspeak");
  form.addEventListener("submit", numberReturn);
});
