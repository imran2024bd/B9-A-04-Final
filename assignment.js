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

function checkName(name) {
    
}


// Problem 03 : Virus in my Array

function deleteInvalids(array) {
    
}




// Problem 04 : Make A Great Password

function password(obj) {
    
}


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
