//Write a function that takes an array of numbers as input and returns the sum of all even numbers in the array.

let numbers=[1,2,3,4,5];

function SumOfEvenNumbers(number){
    let sum=0;
    for(let i=0;i<number.length;i++){
            if(number[i]%2===0){
                sum=(sum+number[i]);
            }
        }
    return sum;
}
console.log(numbers);
console.log("Sum of All Even Number is "+SumOfEvenNumbers(numbers));
