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


function subtraction(amountText, first, secound) {
    const balancetext = document.getElementById(amountText);
    balancetext.innerText = first - secound;
}

//  adding total expenses values-----------------------------------
function getExpenses() {
    const foodValueText = document.getElementById('food').value;
    const foodValue = parseInt(foodValueText);


    const rentValueText = document.getElementById('rent').value;
    const rentValue = parseInt(rentValueText);


    const clothesValueText = document.getElementById('clothes').value;
    const clothesValue = parseInt(clothesValueText);

    const totalExpenses = foodValue + rentValue + clothesValue;
    return totalExpenses;
}

document.getElementById('calculate').addEventListener('click', function() {

    const amountText = document.getElementById('expenses')
    amountText.innerText = getExpenses();

    subtraction('balance', getIncome(), getExpenses());


})