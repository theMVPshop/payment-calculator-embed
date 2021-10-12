var tuition;
var ppf;
//Used for user affordable payment amount
var deposit;
var depositMax;
var depositMin;
//Used for user affordable monthly payment amount
var monthlyAmount;
var monthlyAmountMax;
var monthlyAmountMin;

var programLength;
var programCost;
//DOM

var programLengthObject = document.getElementById("inner-program-length");
var programCostObject = document.getElementById("inner-cost-of-program");

//Input Boxes
var userDepositBox = document.getElementById("down-payment-box");
var userMonthlyPaymentsBox = document.getElementById("monthly-payment-box");

//Input Sliders
var userDepositSlider = document.getElementById("down-payment-slider");
var userMonthlyPaymentsSlider = document.getElementById("monthly-payment-slider");

var monthsToPay = document.getElementById("months-to-pay");
var earlyStartDate = document.getElementById("earliest-start-date");
var earlyEndDate = document.getElementById("earliest-end-date");

//assign hard code values
programLength = 38;
programLengthObject.innerHTML = programLength + " Weeks";

programCost = 18500;
ppf = 750;
programCostObject.innerHTML ="$" + programCost + " + $" + ppf + "*";

//Put Slider numbers into input boxes, and vice versa
userDepositSlider.oninput = function(){
    userDepositBox.value = this.value;
}
userDepositBox.oninput = function(){
    userDepositSlider.value = this.value;
}

userMonthlyPaymentsSlider.oninput = function(){
    userMonthlyPaymentsBox = this.value;
}
userMonthlyPaymentsBox.oninput = function(){
    userMonthlyPaymentsSlider = this.value;
}
