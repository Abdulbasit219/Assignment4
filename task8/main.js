//Write a function that takes an array of numbers as input and returns the product of all the numbers in the array.

let number=[];
let n=prompt("Enter Size of array");

for(let i=0;i<n;i++){
    number[i]=+prompt("Enter Element");
}

for(let j=0;j<number.length;j++){
    console.log(number[j]);
    }

function ProductOfArray(num){
    let product=1;
    for(let i=0;i<num.length;i++){
        product=product*num[i];
    }
    return product;
}

console.log("product of Array is = "+ProductOfArray(number));
