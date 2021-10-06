
//Display current Loan Amount
var loanAmount = document.getElementById("loan-amount");
var loanDisplay = document.getElementById("display-loan-amount");
loanDisplay.innerHTML = "$" + loanAmount.value;

loanAmount.oninput = function(){
    loanDisplay.innerHTML = "$" + this.value;
}

//Display Deposit Amount
var depositAmount = document.getElementById("deposit-amount");
var depositDisplay = document.getElementById("display-deposit-amount");
depositDisplay.innerHTML = "$" + depositAmount.value;

depositAmount.oninput = function(){
    depositDisplay.innerHTML = "$" + this.value;
}

//Display PPF Amount
var ppfAmount = document.getElementById("ppf-amount");
var ppfDisplay = document.getElementById("display-ppf-amount");
ppfDisplay.innerHTML = "$" + ppfAmount.value;

ppfAmount.oninput = function(){
    ppfDisplay.innerHTML = "$" + this.value;
}


//Display current Installment Number
var installmentSlider = document.getElementById("installment-range");
var installmentDisplay = document.getElementById("display-installments-amount");
installmentDisplay.innerHTML = installmentSlider.value;

installmentSlider.oninput = function(){
    installmentDisplay.innerHTML = this.value;
}

//Display bi-monthly status
var bimonthlySwitch = document.getElementById("bimonthly-switch");
var bimonthlyDisplay = document.getElementById("display-installment-type");
bimonthlyDisplay.innerHTML = "Monthly";

bimonthlySwitch.oninput = function(){

    if(bimonthlySwitch.checked)
    {
        bimonthlyDisplay.innerHTML = "Bi-Monthly";
    }
    else
    {
        bimonthlyDisplay.innerHTML = "Monthly";
    }
}

//Calculations 
//Formula: (tuition + PPF) - deposit / installments
//if deposit amount < 2490, ppf = 790

//Number Variables
var calcInstallments;
var calcInstallmentsAmount;
var calcPPF;
//The amount of installments that must be paid before starting the course
var calcPaymentsToStart;

//Display variables
var calcInstallmentsDisplay = document.getElementById("display-calculated-amount-installments");
var calcInstallmentsAmountDisplay = document.getElementById("display-calculated-amount-perinstallments");
var calcPPF = document.getElementById("display-calculated-installments");
var calcPaymentsToStartDisplay = document.getElementById("display-calculated-payments-perinstallments");



var calculateButton = document.getElementById("calculate-button");

calculateButton.oninput = function()
{
//if the payments are bimonthly
if(bimonthlySwitch.checked)
{
    calcInstallmentsAmountDisplay.innerHTML = (loanAmount + ppfAmount) - depositAmount / (installmentSlider / 2);
}
//if payments are monthly

else
{
    calcInstallmentsAmountDisplay.innerHTML = (loanAmount + ppfAmount) - depositAmount / (installmentSlider);
}
}

