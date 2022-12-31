 const fruits_seasonal =["Banana","Orange","Apple","Mango","Water Melone"];
 console.log(fruits_seasonal);

 console.log(`1) Total elements available in array: ${fruits_seasonal.length}`);
 console.log(`\n2) First element in array: ${fruits_seasonal[0]}`);
 console.log(`   Last element in array: ${fruits_seasonal[fruits_seasonal.length-1]}`);


   fruits_seasonal.unshift(`Papaya`);
   console.log(`2)Adding Papaya before banana: "${fruits_seasonal}"`);
    console.log("\n");

   fruits_seasonal.splice(4, 1);
   console.log(`3)Remove Mango from array: "${fruits_seasonal}"`);
   console.log("\n");

   fruits_seasonal.push("Pineapple");
   console.log( `4)Insert an element  Pineapple at last Position: "${fruits_seasonal}"`);
   console.log("\n");

    fruits_seasonal.splice(fruits_seasonal.length - 1, 0, "Dragon Fruit");
    console.log(`5)Insert element Dragon Fruit before Water Malon: "${fruits_seasonal}"` );
    console.log("\n");

    fruits_seasonal.splice(2, 1, "Kiwi");
     console.log(`6)Replace an element Orange with Kiwi: "${fruits_seasonal}"`);
     console.log("\n");
   fruits_seasonal.splice(5);
    fruits_seasonal.shift();
    console.log(`7)Elements starting from index 1 to 4: "${fruits_seasonal}"`);
    console.log("\n");
    let newFruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"]; // Empty Array
    console.log(newFruits_seasonal);
    let lastThree = newFruits_seasonal.slice(newFruits_seasonal.length - 3);
     console.log(`8) Last 3 element in th array: "${lastThree}"`);























// console.log(`--------------------------array 2 Assignment--------------------------`)

// let arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
// console.log(arrayNumbers);

// console.log(`1) Total elements available in array: ${arrayNumbers.length}`);

// console.log(`\n2) First element in array: ${arrayNumbers[0]}`);
// console.log(`   Last element in array: ${arrayNumbers[arrayNumbers.length-1]}`);

// let thridLast = arrayNumbers[arrayNumbers.length-3];
// console.log(`\n3) Third last element in array: ${thridLast}`);

// let evenNum = [];
// for (let index = 0; index < arrayNumbers.length; index++) {
//     if (arrayNumbers[index]%2 ==0) {
//         evenNum = evenNum +" "+arrayNumbers[index];  
//     } 
// }
// console.log(`\n4) All even Numbers in array: ${evenNum}`);

// let oddNum = [];
// for (let index = 0; index < arrayNumbers.length; index++) {
//     if (arrayNumbers[index]%2 ==1) {
//         oddNum = oddNum +" "+arrayNumbers[index];  
//     } 
// }

// console.log(`\n5) All odd Numbers in array: ${oddNum}`);

// let allEvenNum =[];
// for (let index = 0; index < arrayNumbers.length; index++) { //index = 0 1 2
//     if (index%2==0) {
//         allEvenNum = allEvenNum + " " + arrayNumbers[index];
     
//     }
// }
// console.log(`\n6) All even Positioned elements from array: ${evenNum}`);

// let allOddNum =[];
// for (let index = 0; index < arrayNumbers.length; index++) { //index = 0 1 2
//     if (index%2==1) {
//        allOddNum = allOddNum +" "+ arrayNumbers[index];
//     }
// }

// console.log(`\n7) All odd Positioned elements from array: ${allOddNum}`);


// let sumOfnum = 0;
// for (let index = 0; index < arrayNumbers.length; index++) {
//     const element =arrayNumbers[index]; 
//     sumOfnum = sumOfnum+element;
// } 

// console.log(`\n8) Sum of all elements: ${sumOfnum}`);

// let MultipleOfFive =[];
// for (let index = 0; index < arrayNumbers.length; index++) {
//     if (arrayNumbers[index]%5==0){
//       MultipleOfFive = MultipleOfFive + " " + arrayNumbers[index];  
//     }
    
// }

// console.log(`\n9) The number which are Multiple of 5: ${MultipleOfFive}`);


// let include115 = arrayNumbers.includes(115);
// console.log(`\n10) Is number 115 available in array: ${include115}`);


// let include23 =  arrayNumbers.includes(23);
// console.log(`\n11) Is number 23 available in array: ${include23}`);


// arrayNumbers.splice(3, 0, 55,66);
// console.log(`\n12) Insert Numbers 55,66 before index 3: ${arrayNumbers}`);


// arrayNumbers.splice(4,3);
// console.log(`\n13) Delete 3 elements starting from index 4: ${arrayNumbers}`);