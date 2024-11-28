// Declare variables
const amountInput = document.getElementById("amount");
const percentageInput = document.getElementById("percentage");
const percentageAmountResult = document.getElementById("percentageAmount");
const finalAmountResult = document.getElementById("finalAmount");
const calculateBtn = document.getElementById("calculateBtn");
const refreshBtn = document.getElementById("refreshBtn");

// Calculate function
function calculate() {
  //Convert inputs to number first
  const amountInputValue = parseFloat(amountInput.value);
  const percentageInputValue = parseFloat(percentageInput.value);

  //   //Validate
  //   if (isNaN(amountInputValue) || percentageInputValue) {
  //     alert("Please enter a number, bui!");
  //     return;
  //   }

  //Calculation
  const percentageAmountResultVal =
    (amountInputValue * percentageInputValue) / 100;
  const finalAmountResultVal = amountInputValue + percentageAmountResultVal;

  //Inject to DOM to auto calculate or insert to fields
  percentageAmountResult.textContent = percentageAmountResultVal;
  finalAmountResult.textContent = finalAmountResultVal;
}

// Refresh
function refresh() {
  amountInput.value = "";
  percentageInput.value = "";
  percentageAmountResult.textContent = "0.00";
  finalAmountResult.textContent = "0.00";
}

calculateBtn.addEventListener("click", calculate);
refreshBtn.addEventListener("click", refresh);
