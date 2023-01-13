// let show = ()=>{
//     console.log("Hello");
// }
// show();
// => function Syntax
// let fun = ()=>{

// };

// Arrow function with no argument and no return value
let show = ()=>{
    console.log("Hello");
}
show();
// => function Syntax
// let fun = ()=>{

// };
// Arrow Function with argument 
let sum = (n1, n2)=>{
    console.log(n1+n2);
}
sum(10, 10);

// Arrow Function with argument and return value
let multiply = (n1, n2)=> {
    let mul = n1*n2;
    return mul;
}
let mulResult = multiply(5, 5);
console.log(mulResult);


console.log("Callback with arg functions");
let add = function (n1, n2){
    console.log(n1+n2);
}
let multiplys = function (n1, n2){
    console.log(n1*n2);
}

function operation(callbackAdd, callbackMultiply) {
    console.log('operation');
    callbackAdd(5, 5);
    callbackMultiply(2, 2);
} 
operation(add, multiplys);
