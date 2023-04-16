//Write a function that takes an array of strings as input and returns an array of all the unique strings in the array.

let array=["Apple","Banana","Orange","Apple","Banana","Orange"];

function uniqueArray(data){
    let unique=[...new Set(data)];
    return unique;
}
console.log(array);
console.log("After Remove Duplicate string in Our Array is:");
console.log(uniqueArray(array));