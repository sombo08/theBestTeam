"use strict";
window.fineList = {
    searchFines : searchFines
}

let DB = data.finesData;

function searchFines(searchKey){
    let foundFines = [];
    
    for (let i = 0; i < DB.length; i++) {
        const fine = DB[i];
        
        if (fine.номер === searchKey || fine.тип === searchKey) {
            foundFines.push(fine);
        }
        
        else if (fine.тип.includes(searchKey)) {
            foundFines.push(fine);
        }
    }
    
    return foundFines; 
}
