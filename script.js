const phoneBtn = document.getElementById('addInput');
phoneBtn.addEventListener('click', function(){
    // const inputNumber = getInputNumber('inputAmount');
    const inputAmount = document.getElementById('inputAmount').value;
    inputNumber = parseFloat(inputAmount);
    const currentPrice = document.getElementById('currentPrice').innerText;
    const currentPhonePrice = parseFloat('currentPrice');
    const totalPrice = currentPhonePrice + inputAmount;
    console.log(totalPrice);
})
