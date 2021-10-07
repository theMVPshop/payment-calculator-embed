
//Display current Loan Amount
var loanAmount = document.getElementById("loan-amount");
var loanDisplay = document.getElementById("display-loan-amount");
loanDisplay.innerHTML = "$" + loanAmount.value;

loanAmount.oninput = function () {
    loanDisplay.innerHTML = "$" + this.value;
}

//Display Deposit Amount
var depositAmount = document.getElementById("deposit-amount");
var depositDisplay = document.getElementById("display-deposit-amount");
depositDisplay.innerHTML = "$" + depositAmount.value;

depositAmount.oninput = function () {
    depositDisplay.innerHTML = "$" + this.value;
}

//Display PPF Amount
var ppfAmount = document.getElementById("ppf-amount");
var ppfDisplay = document.getElementById("display-ppf-amount");
ppfDisplay.innerHTML = "$" + ppfAmount.value;

ppfAmount.oninput = function () {
    ppfDisplay.innerHTML = "$" + this.value;
}

//Display current Installment Number
var installmentSlider = document.getElementById("installment-range");
var installmentDisplay = document.getElementById("display-installments-amount");
installmentDisplay.innerHTML = installmentSlider.value;

installmentSlider.oninput = function () {
    installmentDisplay.innerHTML = this.value;
}

//Display bi-monthly status
var bimonthlySwitch = document.getElementById("bimonthly-switch");
var bimonthlyDisplay = document.getElementById("display-installment-type");
bimonthlyDisplay.innerHTML = "Monthly";

bimonthlySwitch.oninput = function () {

    if (bimonthlySwitch.checked) {
        bimonthlyDisplay.innerHTML = "Bi-Monthly";
    }
    else {
        bimonthlyDisplay.innerHTML = "Monthly";
    }
}

//Calculations 
//Formula: (tuition + PPF) - deposit / installments
//if deposit amount < 2490, ppf = 790

var totalPerInstallmentAmount;

//Display variables
//Installment amount 
var calcInstallmentsDisplay = document.getElementById("display-calculated-amount-installments");
//Money amount
var calcInstallmentsAmountDisplay = document.getElementById("display-calculated-amount-perinstallments");
var calcPPF = document.getElementById("display-calculated-installments");

var owedToStart = document.getElementById("owedToStart");
var calcPaymentsToStartDisplay = document.getElementById("display-calculated-payments-perinstallments");

function calculateButton() {
    //if the payments are bimonthly
    if (bimonthlySwitch.checked) {

        totalPerInstallmentAmount =
            ((parseFloat(loanAmount.value) + parseFloat(ppfAmount.value)) - parseFloat(depositAmount.value)) / parseFloat(installmentSlider.value * 2);
        calcInstallmentsAmountDisplay.innerHTML =  "$" + totalPerInstallmentAmount;

        calcInstallmentsDisplay.innerHTML = parseFloat(installmentSlider.value * 2);

        //OwedToStart
        calcPaymentsToStartDisplay.innerHTML = parseFloat(owedToStart.value) / totalPerInstallmentAmount * 2;
    }
    //if payments are monthly
    else {
        totalPerInstallmentAmount =
            (parseFloat(loanAmount.value) + parseFloat(ppfAmount.value) - parseFloat(depositAmount.value)) / (parseFloat(installmentSlider.value))
        calcInstallmentsAmountDisplay.innerHTML = "$" + totalPerInstallmentAmount;

        calcInstallmentsDisplay.innerHTML = parseFloat(installmentSlider.value);

        //OwedToStart
        calcPaymentsToStartDisplay.innerHTML = parseFloat(owedToStart.value) / totalPerInstallmentAmount;
    }

    //Calculate PPF WIP
    if (totalPerInstallmentAmount < 2490)
    {
        calcPPF.innerHTML = "$" + 790;
    }
    else
    {
        calcPPF.innerHTML = "$" +  0;
    }
}

