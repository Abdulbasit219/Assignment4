//Write a function that takes an array of numbers as input and returns the average of all the numbers in the array.

let array=[1,2,3,4,5];

function AverageOfAllNumber(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum/arr.length;
}
console.log(array);
console.log("Average of An Array is = "+AverageOfAllNumber(array));
