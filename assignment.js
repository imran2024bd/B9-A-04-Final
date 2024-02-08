// Problem-01 : Help The Zoo Manager

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

// console.log(calculateMoney(10));
// console.log(calculateMoney(1055));
// console.log(calculateMoney(93));
// console.log(calculateMoney(-130));



// Problem-02: Good Name , Bad Name

const name1 = "rafi";
const name2 = "RAFEE";
const name3 = "Jhankar";
const name4 = 199;
const name5 = ["Rashed"];

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
console.log(checkName(name2));







// Problem 03 : Virus in my Array

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


///Checking Part (OnlyMe)
const array = [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
const array2 = ["1" , {num:2} , NaN ] ;
const array3 = [ 1 , 2 , -3 ] ;
const array4 = {num: [ 1 , 2 , 3 ]};
const array5 =  [ NaN, 1,12,0 ,-1 , undefined ];
// console.log(deleteInvalids(array))
// console.log(deleteInvalids(array2))
// console.log(deleteInvalids(array3))
// console.log(deleteInvalids(array4))
// console.log(deleteInvalids(array5))


// Problem 04 : Make A Great Password
// const siteName1 = { name: 'kolimuddin' , birthYear: 1999 , siteName: 'google' }
// const siteName2 = { name: 'rahat' , birthYear: 2002, siteName: 'Facebook' }
// const siteName3 = { name: 'toky' , birthYear: 200, siteName: 'Facebook' }
// const siteName4 = { name: 'maisha' , birthYear: 2002 }


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
// console.log(password(siteName4));

// Problem 05 : Monthly Savings of a Freelancer


// function monthlySavings(arr , livingCost) {
//     if (typeof arr !== 'object' && typeof livingCost !== 'number') {
//         return 'invalid input';
//     }
//     else{
//         if (savings < 0) {
//             return  'earn more';
//         }   
//         let sum = 0;
//     for ( const income of arr){
//         let tax = 0;
//         if (income >= 3000) {
//             tax = income * 0.2;           
//         }
//         sum = sum + income - tax;
//         }
//         const savings = sum - livingCost;
//         return savings;     
//     }
//     }
// console.log(monthlySavings(payments ,Living ));
