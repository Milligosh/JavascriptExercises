let initialPrice;
let quantity;

initialPrice=400;
quantity=5;

console.log(initialPrice)
console.log(quantity)
let discount=(initialPrice *(20/100));
let discountedPrice= (initialPrice-=discount);

quantity++

let totalPrice=(discountedPrice*quantity);
   
discountedPrice=(`${discountedPrice}`);

quantity=(`${quantity}`);

console.log(`totalPrice= ${totalPrice}`);
