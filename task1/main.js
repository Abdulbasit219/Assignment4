//Write a function that takes an array of numbers as input and returns the sum of all even numbers in the array.

let numbers=[];
let n=prompt("Enter size of array");
for(let i=0;i<n;i++){
    numbers[i]=+prompt("Enter Number: ");
}

function SumOfEvenNumbers(number){
    let sum=0;
    for(let i=0;i<number.length;i++){
            if(number[i]%2===0){
                sum=(sum+number[i]);
            }
        }
    return sum;
}
for(let i=0;i<numbers.length;i++){
console.log(numbers[i]);
}
console.log("Sum of All Even Number is "+SumOfEvenNumbers(numbers));
