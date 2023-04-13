//Write a function that takes an array of numbers as input and returns the average of all the numbers in the array.

let array=[];
let n=prompt("Enter size of Array");

for(let i=0;i<n;i++){
    array[i]=+prompt("Enter a Number")
}

function AverageOfAllNumber(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum/arr.length;
}
console.log(AverageOfAllNumber(array));
