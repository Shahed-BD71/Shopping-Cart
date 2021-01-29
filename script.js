function handleProductChange(product, isIncrease) {
    const productCount = getInputValue(product);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 1) {
        productNewCount = productCount - 1;
    }
    document.getElementById(product + '-count').value = productNewCount;
    let productTotal = 0;
    if (product == 'phone') {
        productTotal = productNewCount * 1219;
    }
    if (product == 'case') {
        productTotal = productNewCount * 60;
    }
    calculateTotal()
    document.getElementById(product + '-total').innerText = productTotal;
}

function calculateTotal() {
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    const totalPrice = phoneCount * 1219 + caseCount * 60;
    document.getElementById('total-price').innerText = totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = grandTotal;

}


// function calculateTotal() {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);

//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const totalPrice = phoneCount * 1219 + caseCount * 60;
//     document.getElementById('total-price').innerText = totalPrice;
// }


function getInputValue(product){
    const productInput = document.getElementById(product+ '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}


            // second way for phone.
// function phoneAmountChanger(isIncrease) {
//     const phoneInput = document.getElementById('phoneCount');
//     const phoneCount = parseInt(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     if (isIncrease == true) {
//         phoneNewCount = phoneCount + 1;
//     }
//     if (isIncrease == false && phoneCount > 1) {
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const totalPhonePrice = phoneNewCount * 1219;
//     document.getElementById("phoneTotal").innerText = totalPhonePrice;
// }
            // first way for case
// document.getElementById('phoneIncrease').addEventListener('click', function(){
//    const phoneInput = document.getElementById('phoneAmount');
//    const PhoneCount = parseInt(phoneInput.value);
//    const phoneNewCount = PhoneCount + 1;
//    phoneInput.value = phoneNewCount;
//    totalPhonePrice = phoneNewCount * 1219;
//    document.getElementById('phoneTotal').innerText = totalPhonePrice;
// });
// document.getElementById('phoneDecrease').addEventListener('click', function(){
//     const phoneInput = document.getElementById('phoneAmount');
//     const PhoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = PhoneCount - 1;
//     phoneInput.value = phoneNewCount;
//     totalPhonePrice = phoneNewCount * 1219;
//     document.getElementById('phoneTotal').innerText = totalPhonePrice;
// });


    // second way for case.
// function caseAmountChanger(isIncrease) {
//     const caseInput = document.getElementById('caseCount');
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     if (isIncrease == true) {
//         caseNewCount = caseCount + 1;
//     }
//     if (isIncrease == false && caseCount > 1) {
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const totalCasePrice = caseNewCount * 60;
//     document.getElementById("caseTotal").innerText = totalCasePrice;
// }



        // first way for phone.
// document.getElementById('caseIncrease').addEventListener('click', function(){
//     const caseInput = document.getElementById('caseCount');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     totalCasePrice = caseNewCount * 60;
//     document.getElementById("caseTotal").innerText = totalCasePrice;
// });

// document.getElementById('caseDecrease').addEventListener('click', function(){
//     const caseInput = document.getElementById('caseCount');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     totalCasePrice = caseNewCount * 60;
//     document.getElementById('caseTotal').innerText = totalCasePrice;
// })