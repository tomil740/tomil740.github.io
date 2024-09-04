var a =4;
let b = "helloWorld";
const c = false;
var d = 4;
console.log(d);
d = 8;
console.log(d);
let f = 5;
console.log(f);
f = 8;
console.log(f);

/*
with const we will have TypeError when trying to reassign.
Thats because we can't reassign const variables by defination of const type.
* It’s recommended to use “const” by default to gain maximum awareness to our code  
*/
const g =4;
console.log(g);
g = 8;
console.log(g);