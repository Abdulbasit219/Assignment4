//Write a function that takes an object as input and returns an array of all the keys in the object.

let person=[
    {
    name: "John",
    age:   30 ,
    city:  "New York" 
    }
           ]
function ArrayOfKey(a,b,c,d){
    let output=[];
    for(let i=0;i<a.length;i++){
        output.push(a[i][b]);
        output.push(a[i][c]);
        output.push(a[i][d]);
    }
    return output;
    }

console.log(ArrayOfKey(person,"name","age","city"));