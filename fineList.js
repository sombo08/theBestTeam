"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey){
    let foundFines = [];
    
    // Перевірка кожного штрафу в базі даних
    for (let i = 0; i < DB.length; i++) {
        const fine = DB[i];
        
        // Перевірка, чи відповідає номер штрафу або тип штрафу ключовому слову пошуку
        if (fine.номер === searchKey || fine.тип === searchKey) {
            foundFines.push(fine); // Додавання знайденого штрафу до масиву знайдених штрафів
        }
        
        // Перевірка, чи тип штрафу містить ключове слово пошуку
        else if (fine.тип.includes(searchKey)) {
            foundFines.push(fine); // Додавання знайденого штрафу до масиву знайдених штрафів
        }
    }
    
    return foundFines; // Повернення масиву знайдених штрафів
}
