
function calculateMoney(ticketSale) {
    const perTicketprice = 120;
    const securityExpense = 500;
    const totalStuffnumber = 8;
    const perStuffexp = 50;
    if (ticketSale < 0) {
        return 'Invalid Number , put positive intiger number';
    }
    else {
        const savingsMoney = (ticketSale * perTicketprice) -(securityExpense + (totalStuffnumber * perStuffexp));
        return savingsMoney;
    }
}

function checkName(name) {
    if ( typeof name !== 'string') {
        return 'invalid';
    }
    const lastletterContain = 'A,y,i,e,o,u,w'
    const letterTolower = lastletterContain.toLowerCase();
    const inputName = name.toLowerCase();
    const lengthLastlettername = inputName[inputName.length - 1];
    const lastLetterName = letterTolower.split(',');
    for ( let contain of lastLetterName){
        if (contain === lengthLastlettername) {
            return 'Good Name'      
        }
    }
    return 'Bad Name';
}


function deleteInvalids(array) {
    if(!Array.isArray(array)){
        return "Invalid Array. Please Input valid Array!"
    }
    let newarrayCreat = [];
    for(let numbers of array){
        if(typeof numbers === 'number' && !isNaN(numbers)){
            newarrayCreat.push(numbers)
        }
    }
    return newarrayCreat;
}

function password(obj) {
    if (typeof obj !== 'object' || Array.isArray(obj)) {
        return ' To provide object property value';
    }
    else if ( Object.keys(obj).length < 3 || obj.birthYear.toString().length < 4) {
        return 'invalid';
    }
    const passFirst = obj.siteName;
    const passToupper = passFirst.charAt(0).toUpperCase()+passFirst.slice(1);
    const passSecond = '#';
    const passThird = obj.name;
    const passForth = '@';
    const passLast = obj.birthYear;
    const passwordCreate = passToupper.concat(passSecond).concat(passThird).concat(passForth).concat(passLast);
    return passwordCreate;
}

