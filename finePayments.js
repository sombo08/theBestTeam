"use strict";

let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

let DB = data.finesData;

buttonSubmit.addEventListener('click', payFine);

function payFine(){
    let fine = DB.find(item => item.номер === fineNumber.value);
    
    if (!fine) {
        alert("Штраф з таким номером не існує");
        return;
    }
    
    if (fine.сума !== parseInt(amount.value)) {
        alert("Сума не співпадає з штрафом");
        return;
    }

    if (!/^([А-ЯІ]{2}\d{6})$/.test(passport.value)) {
        alert("Не вірний паспортний номер");
        return;
    }

    if (!/^\d{16}$/.test(creditCardNumber.value)) {
        alert("Не вірна кредитна картка");
        return;
    }

    if (!/^\d{3}$/.test(cvv.value)) {
        alert("Не вірний CVV");
        return;
    }

    // Всі перевірки пройшли успішно, тому можна виконати оплату
    let index = DB.findIndex(item => item.номер === fineNumber.value);
    DB.splice(index, 1);
    alert("Оплата виконана. Штраф видалено з бази даних.");
}