// calculate  part ---------------------------------------

function getIncome() {

    const incomeInput = document.getElementById('income');
    const incomeValue = incomeInput.value;

    if (incomeValue < 0) {
        alert('give a posative number')
    } else {
        return incomeValue;
    }


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

    if (isNaN(foodValue) || isNaN(rentValue) || isNaN(clothesValue) || foodValue < 0 || rentValue < 0 || clothesValue < 0) {
        alert("you have to put a valid number");
        amountText.innerText = ''
    }
    if (foodValue < 0 || rentValue < 0 || clothesValue < 0) {
        alert('put positive numbers')
    } else {
        return totalExpenses;
    }

}

document.getElementById('calculate').addEventListener('click', function() {

    // if (getIncome() < getExpenses()) {
    //     alert('your expenses is higher then your income');
    // } else {
    //     const amountText = moneyInner('expenses')
    //     amountText.innerText = getExpenses();

    //     subtraction('balance', getIncome(), getExpenses());
    // }


    if (getIncome() <= 0 || isNaN(getIncome())) {
        alert("Please enter a valid amount");
    } else if (getIncome() < getExpenses()) {
        alert("your expenses is higher then your income");
    } else {
        if (typeof getExpenses() !== "number") {} else {
            //Updating total spending to the Total Spending Field
            const amountText = moneyInner('expenses')
            amountText.innerText = getExpenses();

            //Updating New balance to the New Balance Field
            subtraction('balance', getIncome(), getExpenses());
        }
    }

})

// saving calculation part ---------------------------------------------

document.getElementById('save').addEventListener('click', function() {

    const saveInput = document.getElementById('save-input').value;
    const saveValue = parseInt(saveInput);

    const balance = document.getElementById('balance');
    const balancetext = parseInt(balance.innerText);



    const savingAmountdivided = (saveValue / 100) * getIncome();


    const remainingBalance = document.getElementById('remaining-balance');

    remainingBalance.innerText = balancetext - savingAmountdivided;


    if (saveValue < 0) {
        alert("Please enter a positive amount you want to save");
    } else if (balancetext < savingAmountdivided) {
        alert("You can't save more than you Earn");
    } else if (isNaN(balancetext) || isNaN(savingAmountdivided)) {
        alert("Please enter a valid amount");
    } else if (remainingBalance < 0) {
        alert("You don't have enougn balance to save");
    } else {

        const savingAmount = moneyInner('saving-amount')
        savingAmount.innerText = savingAmountdivided;
        const remainingBalance = document.getElementById('remaining-balance');

        remainingBalance.innerText = balancetext - savingAmountdivided;
    }



    const input = Array.from(document.querySelectorAll('input'));
    input.forEach(e => {
        e.value = '';
    })


});