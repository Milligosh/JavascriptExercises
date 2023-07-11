
const fullName= 'millicent Adjubel'
let firstName=fullName.substring(0,9)
let lastName=fullName.slice(10)


firstName=(firstName[0].toUpperCase()+ firstName.slice(1));

let splitted= lastName.split("")
let reversed=(splitted.reverse())
let reversedLastName= reversed.join("")


fullName.length
fullName.includes('a');

console.log (`reversedLastName= ${reversedLastName}`)
console.log(`firstName= ${firstName}`);
console.log(`lastName= ${lastName}`);
