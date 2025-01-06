const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
  const phoneNumber = userInput.value;
const regex = /^(1\s)?(\(\d{3}\)|\d{3})([-.\s]?)(\d{3})\3(\d{4})$/; 
if (!phoneNumber.startsWith('1')) {
    resultsDiv.innerHTML += `<p class="invalid">Number must start with 1: ${phoneNumber}</p>`;
    return;
} else if (regex.test(phoneNumber)) {
    resultsDiv.innerHTML += `<p class="valid">Valid US number: ${phoneNumber}</p>`;
  } else {
    resultsDiv.innerHTML += `<p class="invalid">Invalid US number: ${phoneNumber}</p>`;
  }
});

userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      checkBtn.click(); 
    }
  });
12
clearBtn.addEventListener("click", () => {
    resultsDiv.innerHTML = "";
    userInput.value = "";
});