let inputBill = document.querySelector('#bill');
let inputTip = document.querySelector('.tip');
let inputPerson = document.querySelector('.person');
let tipAmount = document.querySelector('.tip-amount');
let totalTipAmount = document.querySelector('.total-amount');
let resetBtn = document.querySelector('.reset');
let tipBtn = document.querySelectorAll('.tips > button');

let billVal = 0;
let peopleVal = 1;
let tipVal = 0.15;

resetBtn.addEventListener('click', () => {
    inputBill.value = 0.0;
    inputTip.value = "";
    inputPerson.value = 1;
    tipAmount.innerHTML = '$0.00';
    totalTipAmount.innerHTML = '$0.00';
    tipBtn.forEach((btnStyle) => {
        if (btnStyle.classList.contains('active')) {
            btnStyle.classList.remove('active');
        }
    })
});

inputBill.addEventListener('input', () => {
    billVal = inputBill.value;
    calculate();
})

inputPerson.addEventListener('input', () => {
    if (inputPerson.value >= 1) {
        peopleVal = inputPerson.value;
    }
    calculate();
})

tipBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        tipBtn.forEach((btnStyle) => {
            if (btnStyle.classList.contains('active')) {
                btnStyle.classList.remove('active');
            }
        })
        btn.classList.add('active');
        tipVal = +btn.textContent.slice(0, -1)/100;
        calculate();
    })  
    
})

inputTip.addEventListener('input', () => {
    tipVal = inputTip.value/100;
    tipBtn.forEach((btnStyle) => {
        if (btnStyle.classList.contains('active')) {
            btnStyle.classList.remove('active');
        }
    })
    calculate();
})

function calculate() {
    if(peopleVal >= 1 ) {
        let tip = billVal * tipVal / peopleVal;
        let totalAmount = billVal * (tipVal + 1) / peopleVal;

        tipAmount.innerHTML = '$' + tip.toFixed(2);
        totalTipAmount.innerHTML = '$' + totalAmount.toFixed(2);
    }
}