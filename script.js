const documentTypeSelect = document.getElementById("document-type");
const selectStateSelect = document.getElementById("select-state");
const deliveryOptionYes = document.getElementById("yes-option");
const deliveryOptionNo = document.getElementById("no-option");
const stampAmountSelect = document.getElementById("stamp-amount");
const documentPriceLabel = document.getElementById("documentprice");

// Calculate the price
function calculatePrice() {
  const documentPrice = parseInt(documentTypeSelect.value);
  const stampDuty = parseInt(stampAmountSelect.value);
  const printingHandling = 50; // You can adjust this value as needed
  const shipping = deliveryOptionYes.checked ? 100 : 0; // Adjust the shipping cost accordingly

  const totalCharges = documentPrice + stampDuty + printingHandling + shipping;

  // Display the calculated prices
  documentPriceLabel.textContent = documentPrice;
  document.getElementById("stamp-duty").textContent =
    "Stamp-Duty: " + stampDuty;
  document.getElementById("printing-handling").textContent =
    "Printing & Handling: " + printingHandling;
  document.getElementById("shipping").textContent = "Shipping: " + shipping;
  document.getElementById("total-charges").textContent =
    "Total-Charges: " + totalCharges;
}

const calculateButton = document.querySelector(".price-button");
calculateButton.addEventListener("click", calculatePrice);
