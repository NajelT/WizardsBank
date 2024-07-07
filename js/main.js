// Cache elements
const paymentsCard = document.querySelector(".payment-card");
const transferCard = document.querySelector(".transfer-card");
const depositCard = document.querySelector(".deposit-card");
const withdrawCard = document.querySelector(".withdraw-card");

const allCards = [paymentsCard, transferCard, depositCard, withdrawCard];

// Get Transaction Type
const transactType = document.querySelector("#transact-type");

// Function to hide all cards
function hideAllCards() {
    allCards.forEach(card => card.style.display = "none");
}

// Check For Transaction Type and Display Form
transactType.addEventListener("change", function() {
    hideAllCards();

    switch (transactType.value) {
        case "payment":
            paymentsCard.style.display = "block";
            break;
        case "transfer":
            transferCard.style.display = "block";
            break;
        case "deposit":
            depositCard.style.display = "block";
            break;
        case "withdraw":
            withdrawCard.style.display = "block";
            break;
        default:
            hideAllCards();
    }
});
