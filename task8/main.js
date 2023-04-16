//Write a function that takes an array of numbers as input and returns the product of all the numbers in the array.

let number=[1,2,3,4,5];

function ProductOfArray(num){
    let product=1;
    for(let i=0;i<num.length;i++){
        product=product*num[i];
    }
    return product;
}

console.log(number);
console.log("product of Array is = "+ProductOfArray(number));
