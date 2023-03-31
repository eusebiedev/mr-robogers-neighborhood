// Business Logic












// UI Logic

function numberReturn(event) {
  event.preventDefault();
  const number = document.getElementById("number").value;








//document.getElementById("robotspeak").reset();
document.querySelector("p#output").removeAttribute("class");
}

window.addEventListener("load", function() {
  document.querySelector("form#robotspeak").addEventListener("submit", numberReturn);
});