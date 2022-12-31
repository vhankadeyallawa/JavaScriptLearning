
// // Write a Function expression with one arg—> age to check whether he or she is eligible for voting or not, Then accordingly display message.
// // Ex. 45, 17, 8, 20, -10, 200, 0

// var votingEligibility = function (age){
//     if (age<=0 || age>120) {
//         console.log(`Invalid data: ${age}`);
//     } else {
//        console.log(`Valid data`); 
//        if (age>=18) {
//         console.log(`Congratulation you can vote: ${age}`);
//        }else{
//         console.log(`Sorry you are not eligible for vote: ${age}`);
//        }
//     }
// }
// votingEligibility(230);
// votingEligibility(-20);
// votingEligibility(10);


// function isEvenOrOdd(num) {
//     if (typeof num == "number") {
//       console.log(`Valid number ${num}`);
//       if (num % 2 === 0) {
//         console.log(`Even number`);
//       } else {
//         console.log(`Odd Number`);
//       }
//     } else {
//       console.log(`Invalid number ${num}`);
//     }                 
//   }
//   isEvenOrOdd(45);
//   isEvenOrOdd(17);
//   isEvenOrOdd(8);


//   var votingEligibility = function (age){
//     if (age<=0 || age>120) {
//         console.log(`Invalid data: ${age}`);
//     } else {
//        console.log(`Valid data`); 
//        if (age>=18) {
//          console.log(`Congratulation you can vote: ${age}`);
//       }else{
//          console.log(`Sorry you are not eligible for vote: ${age}`);
//        }
//      }
//  }
//  votingEligibility(45);
//  votingEligibility(17);
//  votingEligibility(8);
//  votingEligibility(20);
//  votingEligibility(-10);
//  votingEligibility(200);
//   votingEligibility(0);



 var gradSysteam = function(marks){
  if(marks<=0 || marks>100) {
    console.log(`Please provide the valid data`);

} else 
console.log(`Please provide the Invalid data`); 
}

 
 gradSysteam(98);