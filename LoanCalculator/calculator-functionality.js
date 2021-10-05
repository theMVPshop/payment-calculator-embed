//Display current Loan Amount
var loanAmount = document.getElementById("loan-amount");
var loanOutput = document.getElementById("display-loan-amount")
loanOutput.innerHTML = loanAmount.value;

loanAmount.oninput = function()
{
    loanOutput.innerHTML = this.value;
}

//Display current Installment Number
var installmentSlider = document.getElementById("installment-range");
var installmentOutput = document.getElementById("display-installments-amount");
installmentOutput.innerHTML = installmentSlider.value;

installmentSlider.oninput = function()
{
    installmentOutput.innerHTML = this.value;
}