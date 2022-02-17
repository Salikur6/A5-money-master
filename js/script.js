// calculate  part ---------------------------------------

function getIncome() {
    const incomeInput = document.getElementById('income');
    const incomeValue = incomeInput.value;
    return incomeValue;
}

function moneyInner(amountId) {
    const moneyText = document.getElementById(amountId);
    return moneyText;
}

function moneyInputValue(inputId) {
    const inputText = document.getElementById(inputId).value;
    const inputValue = parseInt(inputText)

    return inputValue;
}

function subtraction(amountText, first, secound) {
    const balancetext = document.getElementById(amountText);
    balancetext.innerText = first - secound;
}

//  adding total expenses values-----------------------------------
function getExpenses() {
    const foodValue = moneyInputValue('food');
    const rentValue = moneyInputValue('rent');
    const clothesValue = moneyInputValue('clothes');


    const totalExpenses = foodValue + rentValue + clothesValue;
    return totalExpenses;
}

// function mainBalance() {
//     subtraction('balance', getIncome(), getExpenses());

// }
document.getElementById('calculate').addEventListener('click', function() {

    // const amountText = document.getElementById('expenses')
    const amountText = moneyInner('expenses')
    amountText.innerText = getExpenses();

    subtraction('balance', getIncome(), getExpenses());


})

// saving calculation part ---------------------------------------------

document.getElementById('save').addEventListener('click', function() {

    const saveInput = document.getElementById('save-input').value;
    const saveValue = parseInt(saveInput);


    const savingAmount = moneyInner('saving-amount')

    const savingAmountdivided = (saveValue / 100) * getIncome();

    savingAmount.innerText = savingAmountdivided;
});