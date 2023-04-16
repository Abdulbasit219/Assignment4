//Write a function that takes a string as input and returns the number of vowels in the string.

let strmatch="AbdulBasit";

function CountNoOfVowel(str){
    const count=str.match(/[aeiou]/gi).length;
    return count;
}

let result=CountNoOfVowel(strmatch);
console.log(result);