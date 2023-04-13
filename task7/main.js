//Write a function that takes an array of strings as input and returns an array of all the unique strings in the array.

let array=[];
let n=prompt("Enter Size of Array: ");
for(let i=0;i<n;i++){
    array[i]=prompt("Enter Element");
}
for(let j=0;j<array.length;j++){
    console.log(array[j]);
}

function uniqueArray(data){
    let unique=[...new Set(data)];
    return unique;
}

console.log(uniqueArray(array));