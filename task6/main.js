//Write a function that takes an array of objects as input and returns an array of all the values for a specified key in each object.

let arrayobj=[
    {
        name: "john",
        Age:    30
    },
    {
        name: "Mary",
        Age:    25
    },
    {
        name: "peter",
        Age:    35
    }
]
function ArrayObject(a,b){
    let output=[];
    for(let i=0;i<a.length;i++){
        output.push(a[i][b]);
    }
    return output;
}

console.log(ArrayObject(arrayobj,"name"));