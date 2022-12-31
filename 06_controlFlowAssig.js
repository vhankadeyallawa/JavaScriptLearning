var sentence = "I am very good IT Developer";
 // Print the vowels only aeiou or AEIOU
 var counter = 0;
 for (let index = 0; index < sentence.length; index++) {
     var char = sentence.charAt(index);
      if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u' || 
         char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
          console.log(char);
         counter = counter +1;
     }   
    }
 console.log(`Total vowels in string is : ${counter}`);

    console.log(`-------------------------------------------------------------------`)


    var addSum =function(num){
    var  num;
    
    var sum = 1*1*1* + 2*2*2* + 3*3*3* + 4*4*4* + 5*5*5*

     console.log(`The sum of cubes of numbers from 1 to 5 is : 225 `);
  }
    var sum= addSum();

console.log(`-------------------------------------------------------------------`)

function oddPositionedChars(value) {
    console.log(`\nGiven string is : ${value}`);
    string1 = value.replaceAll(" ", "");
    var oddString = "";
    for (let i = 0; i < string1.length; i++) {
      var char = string1.charAt(i);
      if (i % 2 == 0) {
        oddString = oddString + " " + char;
      }
    }
    console.log(`Odd position characters in string : ${oddString}`);
  }
  oddPositionedChars("Hard work always pays back");
  oddPositionedChars("Soon I will be Angular IT champ");

console.log(`-------------------------------------------------------------------`)

function factorialNumber(num){
    var fact=1;
    for(let i=num;i>0;i--){
        fact=fact*i;
    }
    console.log(`The factorial of number ${num}:${fact}`);
}
factorialNumber(5);
factorialNumber(7);
factorialNumber(8);
factorialNumber(12);