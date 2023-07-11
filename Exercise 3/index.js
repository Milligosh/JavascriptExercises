let principal=3000;
let interestRate=0.125;
let timePeriod = 12


let n=12

let nt=n*timePeriod
let calc= (1+ interestRate/n)**nt
let compoundInterest= (principal*(calc))


compoundInterest=compoundInterest.toFixed(2)

console.log(compoundInterest)

interestRate-=0.01;

let compoundInterest2;
compoundInterest2=principal* ((1+interestRate/n)**nt)

let difference=compoundInterest-compoundInterest2
console.log(difference)

compoundInterest.toString()

let toCents= compoundInterest*100
console.log(toCents)

let totalAmount=(principal+ compoundInterest)
console.log(`totalAmount= ${totalAmount}`);