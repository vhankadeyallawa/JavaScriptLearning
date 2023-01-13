console.log(`========================massage with arrow function is=============================` )
const show =()=>{
    console.log(`"Goog Morning,Today is Monday"`);
}
show();
const multipliction =(arg1,arg2,arg3)=>{
    console.log(`Multiplication of 5,5,2 is:= ${5*5*2}`)
     
    // console.log(`Multiplication of 10,4,1 is:${10*4*1}`);
//    let multipliction =(arg1+arg2+arg3);
 }
multipliction(5,5,2); 
const multiplay =(arg1,arg2,arg3)=>{
    console.log(`Multiplication of 10,4,1 is:= ${10*4*1}`)
     
}
multiplay(10,4,1);
let  add =(arg1,arg2,arg3,arg4,arg5)=>{
    console.log(`Addition is:`)
     addResult = (arg1+arg2+arg3+arg4+arg5);
    //  addString = (arg1+arg2+arg3+arg4+arg5);
    return  addResult;
//      return addString;
 }
var addResult =add(100,100,200,349,756);
// var addResult =add("Iam","learning","ES6","feature","in");
// console.log(addString);
  console.log(addResult);
  let  addString =(arg1,arg2,arg3,arg4,arg5)=>{
    console.log(`Addition is:`)
     addResult = (arg1+arg2+arg3+arg4+arg5);
     return addResult;
  }
  let addition =addString("Iam","learning","ES6","feature","in depth")
  console.log(addition)

console.log(`=====================Assignment 2 using forEach() arrow functon and callback====================================`)
  const array_numbers =[1,-7,40,502,-77,0,108,89,-601];
  array_numbers.forEach(function(currentValue,index){
    console.log(`value is  ${currentValue} and index is ${index}`);
   });

   console.log("======== Find positive numbers==========");
 const array_num =[1,-7,40,502,-77,0,108,89,-601];
 console.log(array_num);
 array_num.forEach( (currentValue) => {
    if(currentValue>=1) {
      console.log(currentValue)

     } });

     console.log("======== Find negative numbers==========");
 const array =[1,-7,40,502,-77,0,108,89,-601];
 console.log(array);
 array.forEach( (currentValue) => {
    if(currentValue<0) {
      console.log(currentValue)

     } });

     console.log("======== Find even numbers==========");
 const arrayOfEven =[1,-7,40,502,-77,0,108,89,-601];
 console.log(array_num);
 arrayOfEven.forEach( (currentValue) => {
    if(currentValue%2==0) {
      console.log(currentValue)

     } });

     console.log("======== Find even position value ==========");
     const arrayOfEvnindex =[];
         const arrayValue = [1,-7,40,502,-77,0,108,89,-601];
         array.forEach (( currentValue, index) =>{
             if (index%2==0) {
                 arrayOfEvnindex.push(currentValue);
                 // console.log(currentValue);
             }
         })
         console.log(arrayOfEvnindex);
    


        //  const arraySum = [1,-7,40,502,-77,0,108,89,-601];
        //  let sum =0;
        //  arraySum.forEach(n=> sum += n);
        //  console.log(sum)
         
         console.log(`==============Sum of all arrays===================`);

       const arrayNum =[1,-7,40,502,-77,0,108,89,-601];
       var sum = 0;
       array.forEach((sumOfarrayNum) => {
         sum = sum + sumOfarrayNum.arrayNum;
       
       }); 
       console.log("Sum of all  array  values is: ", 146);   
         
        //  console.log(`\n8) Sum of all elements: ${sumOfnum}`);
         
         //let sumOfnum = 0;
         // for (let index = 0; index < arrayNumbers.length; index++) {
         //     const element =arrayNumbers[index]; 
         //     sumOfnum = sumOfnum+element;
         // } 
         
         // console.log(`\n8) Sum of all elements: ${sumOfnum}`);
         



//      let sum = (n1, n2)=>{
//         console.log(n1+n2+2);
//     }
//     sum(10, 10);
//      // Arrow Function with argument and return value
// let multiply = (n1, n2)=> {
//     let mul = n1*n2;
//     return mul;
// }
// let mulResult = multiply(5, 5);
// console.log(mulResult);
// const arrayOfEvnindex =[];
//     const array = [1, 2, 3, 4, 5, 6, 9];
//     array.forEach (( currentValue, index) =>{
//         if (index%2==0) {
//             arrayOfEvnindex.push(currentValue);
//             // console.log(currentValue);
//         }
//     })
//     console.log(arrayOfEvnindex);
