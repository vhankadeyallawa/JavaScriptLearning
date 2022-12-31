var square = function(num){
    console.log("Square of  ",num," =",num*num);

}  
    console.log( "Type of square is",typeof square);
    square(5);
    square(6);
    square(25);
    square(100);


    console.log("-------------------------------------------------------------")

    var swapValues= function (value1, value2){
        console.log("Before Swap", value1, value2);
        var temp = value1;
        value1 = value2;
        value2 = temp;
        console.log("After Swap", value1, value2);
    }
    swapValues(1000, 2000);
    swapValues("virat", "Anushka");


    
       
    console.log("-------------------------------------------------------------")



    var firstName = "Renukavhankade";
console.log("Given string is ", firstName);

console.log("Total character in the string is: ", firstName.length);

console.log("Character at  6: ", firstName.charAt(6));
console.log("Character at  11: ", firstName.charAt(11));

var lengthTotal = firstName.length;

console.log("Character at last  : ", firstName.charAt(lengthTotal-1));

console.log("Character at first  : ", firstName.charAt(0));

var square = function(num){
    console.log("Square of  ","14 =",num*num)
    }
    console.log( typeof square);
    square(14);
   