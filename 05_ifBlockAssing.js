// console.log(`-----To Cheak weither eligible for voting or not----------`)
// var ifEligiblity = function(){
//      var num = 45;
//     if (num>=18) {
//         console.log(` Age = 45 you are eligible for vote.`);
//      }
//      var num = 17;
//      if (num<=18) {
//          console.log(` Age = 17 you are not eligible for vote.`);
//       }
//       var num = 8;
//       if (num<=18) {
//           console.log(` Age = 8 you are not eligible for vote.`);
//        }
//        var num = 20;
//        if (num>=18) {
//            console.log(` Age = 20 you are  eligible for vote.`);
//         }
//         var num = -10;
//         if (num<=0) {
//             console.log(` Age = -10 Invalid for data.`);
//         }
//         var num = 200;
//         if (num>=18) {
//             console.log(` Age = 200 Invalid for data.`);
//          }
//          var num = 0;
//          if (num<=0) {
//              console.log(` Age = 0 Invalid for data.`);
//           }
    
// }
// ifEligiblity();


// console.log(`-----------------------------------------------Grade Calculation---------------------------------------------------------------------------------`)


// var gradeCalculation = function(marks){
//     if(marks>=90){
//         console.log(`Funtastic marks: ${marks} You grade is" A+"`);
//     }  
//     if(marks>=75 && marks<90){
//         console.log(`Excellent marks ${marks} you are grade is "A"`);
//     }
//     if(marks>=50 && marks<=75){
//         console.log(`Good marks ${marks} you are grade is "B"`);
//     }
//     if(marks>=35 && marks<=50){
//         console.log(` marks is  ${marks} you are grade is "c",Need improvement`);
//     }
//     if(marks=0|| marks<0 || marks>=100){
//         console.log(`  Please Provide the valid marks ${marks} `);
//     }

// }
// gradeCalculation(98);
// gradeCalculation(80);
// gradeCalculation(90);
// gradeCalculation(0);
// gradeCalculation(150);
// gradeCalculation(-7);
// gradeCalculation(35);
// gradeCalculation(29);
// gradeCalculation(64);
// gradeCalculation(49);

// function tcsInterview(gradScore, hscScore, condidateName){

//     var res = gradScore>70% || hscScore>80% || SSc>90% ? `Congrates${condidateName} you are eligible for TCS interview.`: `Unfortunately you are not eligible for interview.`
//    console.log(res);
//     return res;
//    }
//    var res =tcsInterview(80,86,90,"Renuka");
   
//    var tcsInterview = function(gradScore, hscScore, condidateName){
//     if(gradScore>=70% || hscScore>=80 || ssc>=90%){
//         console.log(`congrates ${condidateName} you are eligible for TCS interview`);

//     }
//     if(gradScore<=70% || hscScore<=80 || ssc<=90%){
        
//         console.log(`unfortunately ${condidateName} you are not eligible for TCS interview`);
        
//     }


//    }
//    tcsInterview();



//    var votingEligibility = function(age){
//     if(age<=0 || age>120 ){
//         console.log(`Age value : ${age}, Invalid data`);
//     }
//     if(age>=18 && age<=120) {
//         console.log(`your age is : ${age}, You can vote`);
//     }
//     if(age<18 && age>0){
//         console.log(`your age is : ${age}, You can note vote`);
//     }
// }
// votingEligibility(45);
// votingEligibility(17);
// votingEligibility(8);
// votingEligibility(20);
// votingEligibility(-10);
// votingEligibility(200);
// votingEligibility(0);







// function gradeCalculation(marks){
//     if(marks<=0 || marks>100){
//         console.log(`Please provide the valid data`);

//     }
//     else(marks>=90 && marks<=100)
//        console.log(`Fantastic marks: ${marks} your grade is A+`); 
//     }
    
//     else(marks>=75 && marks<90){
//         console.log(`Excellent marks ${marks} your grade is A`); 
//      }
//      if(marks>=50 && marks<=75)
//         console.log(`Good marks ${marks}your grade is B `);
    
    
     
//     }
// gradeCalculation(98);
// gradeCalculation(80);
// gradeCalculation(90);
// gradeCalculation(0);



function gradeCalculation(marks){
    if(marks<=0 || marks>100){
        console.log(`Please provide the valid data`);

    }

   var gradeCalculation = function(marks){
     if(marks<=0 || marks>100) {
        console.log(`Please provide the valid data`);
    
} else 
    console.log(`Please provide the Invalid data`); 
}
if ((marks>=90 && marks<=100) ) {
    console.log(`Fantastic marks: ${marks} your grade is A+`); 
} else {
    console.log(`Not Fantastic marks: ${marks} your grade is Not A+`)
    
}if (marks>=50 && marks<75) {
    console.log(`marks is ${marks} your grade is C,Need improvement`)
    
 } else {
    console.log(`marks is ${marks} your grade is C,Need improvement`)
    
 }
    

    
}

gradeCalculation(98);
gradeCalculation(80);
