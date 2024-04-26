// selectors 
inputNumber = document.querySelector("#input-number");
inputDate = document.querySelector("#input-date");
btnSubmit = document.querySelector("#btn-submit");
outputMessage = document.querySelector("#output-message");
let sum = 0;

// functions 
function processStart() {
  if (inputDate.value && Number(inputNumber.value) > 0) {
    calculateSum(inputDate.value, inputNumber.value);
  }

  else {
    outputMessage.innerText = "wrong input";
  }

}

function calculateSum(dateString, luckyNumberString) {
  let splitString = dateString.split("-");
  console.log(splitString);
  let calcString = splitString.join("");
  console.log(calcString);

  for (let i = 0; i < calcString.length; i++) {
    sum = sum + Number(calcString.charAt(i));

  }
  console.log("sum:" + sum);

  if (sum % Number(luckyNumberString) === 0)
    outputMessage.innerText = "success";
  else outputMessage.innerText = "result not known";

}


// event listeners 
btnSubmit.addEventListener("click", processStart);