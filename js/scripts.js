// Business Logic

function numberUp(userInput) {
  let robotArray = [];
  for (let index = 0; index <= userInput; index ++) {
    if (index.toString().includes("3")) {
      robotArray.push("Won't you be my neighbor?");
    } else if (index.toString().includes("2")) {
      robotArray.push("Boop!");
    } else if (index.toString().includes("1")) {
      robotArray.push("Beep!");
    } else {
      robotArray.push(index);
    }
  }
  return robotArray.reverse();
}

// UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  const userInput = document.getElementById("userInput").value;
  let robotArray = numberUp(userInput);
  document.getElementById("robot-speak").reset();
  document.getElementById("output").innerText = robotArray.join(", ");
  document.querySelector("p#output").removeAttribute("class");
}

window.addEventListener("load", function() {
document.getElementById("robot-speak").addEventListener("submit", handleFormSubmission);
});