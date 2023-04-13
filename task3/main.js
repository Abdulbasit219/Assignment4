//Write a function that takes an array of strings as input and returns the length of the longest string in the array.

let array=[];
let n=prompt("Enter size of Array: ");

for(let i=0;i<n;i++){
    array[i]=prompt("Enter string");
}

for(let j=0;j<array.length;j++){
    console.log(array[j]);
}

function LongestString(str){
    let sortedArray = str.sort((strA,strB) => {
        return strB.length - strA.length;
    }
    );
    return sortedArray[0].length;
}

console.log(LongestString(array));