// var sscMarks =34;
// var resultPassOrFail=sscMarks>=35 ?"Pass": "Fail" ;
// console.log(`Result is ${resultPassOrFail}`);
console.log(`1)`)

var valueCheak = function(n1,n2){
    var n1 =10;
    var n2 =-10;
    var res = n1>n2 ? n1:n2;
   var result= console.log(`The greatest number 10 and -10 is  :${res}`);
    
}
valueCheak();
var valueGreater = function(num1,num2){
    var num1 =800;
    var num2 =899;
    var result = num1>num2 ? num1:num2;
   var resultGreater = console.log(`The greatest number 800 and 899 is  :${result}`);
    
}
valueGreater();


console.log(`----------------------------------------------------------------------------------------------`);
console.log(`2)`);




 
 









 var isEvenOrOdd = function(value){
       var Eve =value%2==0 ? "Even":"Odd";
     var res = console.log(`Given number 29 is ${Eve}`);
      return res;
 }
 isEvenOrOdd(29);
//  isEvenOrOdd(44);
//  isEvenOrOdd(0);
//  isEvenOrOdd(101);


var isEvenOrOdd = function(value){
  var Eve =value%2==0 ? "Even":"Odd";
var res = console.log(`Given number 44 is ${Eve}`);
 return res;
}
isEvenOrOdd(44);

var isEvenOrOdd = function(value){
  var Eve =value%2==0 ? "Even":"Odd";
var res = console.log(`Given number 0 is ${Eve}`);
 return res;
}
isEvenOrOdd(0);

var isEvenOrOdd = function(value){
  var Eve =value%2==0 ? "Even":"Odd";
var res = console.log(`Given number 101 is ${Eve}`);
 return res;
}
isEvenOrOdd(101);

console.log(`----------------------------------------------------------------------------------------------`);
console.log(`3)`)


var isEvenOrOddLenght = function(value){
  var len = value.length;
  var res = len%2==0 ? "Even": "Odd";
  console.log(`The length of word "JavaScript" is:  ${res}`);
   return  res;

 }
 var res=isEvenOrOddLenght("JavaScript");
//  var res=isEvenOrOddLenght("developer");
//  var res =isEvenOrOddLenght("Google");

var isEvenOrOddLenght = function(value){
  var len = value.length;
  var res = len%2==0 ? "Even": "Odd";
  console.log(`The length of word "developer" is:  ${res}`);
   return  res;

 }
 var res=isEvenOrOddLenght("developer");

 var isEvenOrOddLenght = function(value){
  var len = value.length;
  var res = len%2==0 ? "Even": "Odd";
  console.log(`The length of word "Google" is:  ${res}`);
   return  res;

 }
 var res=isEvenOrOddLenght("Google");