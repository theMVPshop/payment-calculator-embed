var ppf;
var currentPPF;
var wavePPFAmount
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
var programLeftOverCost;

//placeholder variables for calculating length, how early, and the when to finish classes
var date = new Date();
var monthsToPay = 0;
var currentDate;
var earlyStartDate;
var earlyEndDate;

//DOM
var todaysDate = document.getElementById("current-date");

var programLengthObject = document.getElementById("inner-program-length");
var programCostObject = document.getElementById("inner-cost-of-program");
var wavePPFElement = document.getElementById("minimum-ppf-wave-amount");

//Input Boxes
var userDepositBox = document.getElementById("down-payment-box");
var userMonthlyPaymentsBox = document.getElementById("monthly-payment-box");

//Input Sliders
var userDepositSlider = document.getElementById("down-payment-slider");
var userMonthlyPaymentsSlider = document.getElementById("monthly-payment-slider");

var monthsToPayObject = document.getElementById("months-to-pay");
var earlyStartDateObject = document.getElementById("earliest-start-date");
var earlyEndDateObject = document.getElementById("earliest-end-date");

//assign hard code values
//program length in weeks
programLength = 38;
programLengthObject.innerHTML = programLength + " Weeks";

programCost = 18500;
ppf = 750;
//The amount that must be deposited before ppf fee is waved
wavePPFAmount = 2499;

wavePPFElement.innerHTML = wavePPFAmount;
programCostObject.innerHTML = "$" + programCost + " + $" + ppf + "*";

//set min and max values for user input
depositMin = 500;
depositMax = programCost;

monthlyAmountMin = 100;
monthlyAmountMax = 2000;

userDepositBox.min = depositMin;
userDepositBox.max = depositMax;
userDepositSlider.min = depositMin;
userDepositSlider.max = depositMax;

userMonthlyPaymentsBox.min = monthlyAmountMin;
userMonthlyPaymentsBox.max = monthlyAmountMax;
userMonthlyPaymentsSlider.min = monthlyAmountMin;
userMonthlyPaymentsSlider.max = monthlyAmountMax;

//Set our input box values to the middle value by default
userDepositBox.value = depositMax / 2;
userDepositSlider.value = depositMax / 2;
userMonthlyPaymentsBox.value = monthlyAmountMax / 2;
userMonthlyPaymentsSlider.value = monthlyAmountMax / 2;

//Put Slider numbers into input boxes, and vice versa
userDepositSlider.oninput = function () {
    userDepositBox.value = this.value;
    calcValues();
}
userDepositBox.oninput = function () {
    userDepositSlider.value = this.value;
    calcValues();
}

userMonthlyPaymentsSlider.oninput = function () {
    userMonthlyPaymentsBox.value = this.value;
    calcValues();
}
userMonthlyPaymentsBox.oninput = function () {
    userMonthlyPaymentsSlider.value = this.value;
    calcValues();
}

//Set dates
currentDate = date.getFullYear() + "-" + (date.getMonth() + 1);
todaysDate.innerHTML = currentDate;

function calcValues() {

    //(tuition + ppf) - deposit = left over
    //left over / payments per month = amount of months
    programLeftOverCost = (programCost + currentPPF) - deposit;

    monthsToPay = Math.trunc(Math.round(programLeftOverCost / monthlyAmount));

    //Update our data on input up
    deposit = userDepositBox.value;
    monthlyAmount = userMonthlyPaymentsBox.value;

    //calculate PPF
    if(deposit < wavePPFAmount)
    {
        currentPPF = ppf;
    }
    else
    {
        currentPPF = 0;
    }

    //earliest start date. If our calc is negative, class can be started now because
    //you will finish paying before the program finishes
    var weeksToPay = (monthsToPay * 4) - programLength;
    if(weeksToPay < 0)
    {
        earlyStartDate = currentDate;
    }
    else
    {
        //years do not progress with (months - program length)

        var newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + (((monthsToPay * 4) - programLength)) * 7);
        var mm = newDate.getMonth() + 1;
        var yyyy = newDate.getFullYear();
        var earlyStartDateString = yyyy + "-" + mm;

        earlyStartDate = earlyStartDateString;
    }

    //finish program string
    var newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + (monthsToPay * 4) * 7);
    var mm = newDate.getMonth() + 1;
    var yyyy = newDate.getFullYear();
    var earlyEndDateString = yyyy + "-" + mm;

    earlyEndDate = earlyEndDateString; 


    //recalculate calculations to display in html
    if(!isNaN(monthsToPay) || !isNaN(earlyStartDate) || !isNaN(earlyEndDate))
    {
        monthsToPayObject.innerHTML = monthsToPay + " months";
        earlyStartDateObject.innerHTML = earlyStartDate;
        earlyEndDateObject.innerHTML = earlyEndDate;
    }
}

