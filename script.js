const billAmount = document.querySelector("#bill-amount");
const cashGiven  = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount(){

    errorMessage.style.display = "none";        // everytime u clicked btn its display should be hidden

    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }else {
            showMsg("The cash provided should atleast be equal to the bill amount")
        }
    }else{
        // if the bill amount is less than zero. 
        showMsg("Invalid Bill Ammount");
    }
})

function calculateChange(amountToBeReturned) {
    
    // to loop over all the available notes
    for(let i=0; i<availableNotes.length; i++){
        // no of notes need for denomination
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]); 
        // amount left after calculating no of notes needed
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        // updating no of notes in table for current amount
        noOfNotes[i].innerText = numberOfNotes;
    }

}

function showMsg (message) {
    errorMessage.style.display = "block"; 
    errorMessage.innerText = message;
}