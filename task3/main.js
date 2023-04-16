//Write a function that takes an array of strings as input and returns the length of the longest string in the array.

let array=["Apple","Banana","Orange","Grapefruit"];

function LongestString(str){
    let sortedArray = str.sort((strA,strB) => {
        return strB.length - strA.length;
    }
    );
    return sortedArray[0].length;
}
console.log(array);
console.log("Length Of The Longest String Of An Array is: "+LongestString(array));