const number , cost = [ 2,3, 5, 6] , 56;
console.log(number, cost);


// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];
function lowestNum(numbers) {
    let min = heights2[0];
    for ( const number of numbers){
        console.log(number);
        if(number < min ){
             min = number;
             return min;
        }
    }
    
}
const min = lowestNum([167, 190, 120, 165, 137]);
// console.log(min);

/**
 * function takes an array as parameter
 * give me the average of the even numbers in the array
*/

/**
 * 1. put even numbers in an array
*/

function evenAverage(numbers) {
    const evens = [];
// console.log(numbers);
for ( const number of numbers){
    if (number % 2 === 0) {
        evens.push(number);
        // console.log(number);
        
    }
}
// evens is the array that contains only the even numbers 
//  console.log(evens);
let sum = 0;
for ( const number of evens){
    sum = sum + number;
}
const length = evens.length;
console.log(sum , length);
const avg = sum / length;
return avg;
   
}
const numbers = [42, 13, 58, 65, 81, 96, 7];
const avg = evenAverage(numbers);
console.log("average of the even numbers is:" , avg);

*************************************************************************************
// Problem 05 : Monthly Savings of a Freelancer
const payments  = 5400 ;
const Living = [ 1000 , 2000 , 3000 ];

function monthlySavings(arr , livingCost) {
    if (typeof arr !== 'object' && typeof livingCost !== 'number') {
        return 'invalid input';
    }
    else{
        if (savings < 0) {
            return  'earn more';
        }   
        let sum = 0;
    for ( const income of arr){
        let tax = 0;
        if (income >= 3000) {
            tax = income * 0.2;           
        }
        sum = sum + income - tax;
        }
        const savings = sum - livingCost;
        return savings;     
    }
    }
console.log(monthlySavings(payments ,Living ));

*************************************************************************************
const payments  = 5400 ;
const Living = [ 1000 , 2000 , 3000 ];

function monthlySavings(arr , livingCost) {
    if (typeof arr !== 'object' && typeof livingCost !== 'number') {
        return 'invalid input';
    }
    // console.log(typeof(arr));
    let sum = 0;
    for ( const income of arr){
        let tax = 0;
        if (income >= 3000) {
            tax = income * 0.2;           
        }
        sum = sum + income - tax;           
        }
        const savings = sum - livingCost;
        return savings;
    }
console.log(monthlySavings(payments ,Living ));


***********************************************
// const payments  = [ 1000 , 2000 , 3000 ] ;
// const Living = 5400;

// function monthlySavings(arr , livingCost) {
//     let sum = 0;
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
// console.log(monthlySavings(payments ,Living ));
// **********************************************************************************
// [ 1000 , 2000 , 2500 ]  done
// const payments  = [ 1000 , 2000 , 2500 ] ;
// const Living = 5000;

// function monthlySavings(arr , livingCost) {
//     // console.log(arr, livingCost);
//     let sum = 0;
//     for ( const income of arr){
//             sum = sum + income;           
//         }
//         console.log(sum);
//         const savings = sum - livingCost;
//         return savings;
//     }
// console.log(monthlySavings(payments ,Living ));


// Problem 04 : Make A Great Password
const siteName = { name: 'kolimuddin' , birthYear: 1999 , siteName: 'google' }
function password(obj) {
    console.log(obj);
}
console.log(password(siteName));
// console.log(siteName);


// 02

function password(obj) {
    const passFirst = obj.siteName;
    // const passUpper = passFirst.
    // return passFirst;
    const passSecond = '#';
    const passThird = obj.name;
    const passForth = '@';
    const passLast = obj.birthYear;
    const passwordCreate = passFirst.concat(passSecond).concat(passThird).concat(passForth).concat(passLast);
    return passwordCreate;
}
console.log(password(siteName));



03

const siteName = { name: 'kolimuddin' , birthYear: 1999 , siteName: 'google' }
function password(obj) {
    const passFirst = obj.siteName;
    const passToupper = passFirst.charAt(0).toUpperCase()+passFirst.slice(1);
    const passSecond = '#';
    const passThird = obj.name;
    const passForth = '@';
    const passLast = obj.birthYear;
    const passwordCreate = passToupper.concat(passSecond).concat(passThird).concat(passForth).concat(passLast);
    return passwordCreate;
}
console.log(password(siteName));

// 04/ finally

function password(obj) {
    if (typeof obj !== 'object' ) {
        return ' To provide object property value';
    }
    else if (Object.keys(obj).length < 3 || obj.birthYear.toString().length < 4) {
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