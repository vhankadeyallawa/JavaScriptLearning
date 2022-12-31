// class Employee{
//     constructor(name, id, age, city){
//         this.name = name;
//         this.id = id;
//         this.age = age;
//         this.city = city;
//     }
// details(){
//     console.log(this.name,this.Id,this.city,this.age);
// } 
// }
//let empJay = new Employee("", 3000, 21, "Pune");
// let empBill = new Employee("Billgates", 5000, 58, "USA");
// let vehiOne = new Vehical("Smith", 33, 26, "Delhi");
// let vehiTwo = new  Vehical("Activa",Activa, white, "New");
//sole.log(empBill);
// empSmith.deatails();
// empJay.details();

console.log(`---------------------vehical details-----------------------------`)

class Vehical{
    //  Name;
    //  company;
    // color;
    //  model;
constructor(Name,color,model,type){
 this.name=Name;
 this.color=color;
 this.model=model;
 this.type=type;

}
}
let vehiOne = new Vehical("Swift", "Red", "SuZuki", "4 wheeler");
let vehiTwo = new  Vehical("activa", "white"," Honda", "2 wheeler");
let vehiThree = new Vehical("Alto", "gray", "Maruti", "4 wheerel");
 let vehiFour = new Vehical("Ertiga", "golden", "Maruti Suzuki", "4 wheeler");
 let vehiFive = new Vehical("Auto", "Black", "Bajaj RE compact CNG", "3 wheeler");
console.log(vehiOne);
 console.log(vehiTwo);
 console.log(vehiThree);
 console.log(vehiFour);
console.log(vehiFive);

//console.log(`\n`);
console.log(`2)------------------- define class for  college with  propertries ,constructor,member function...-----------------`)

class CollegeDetails{
    Name;
    location;
    department;
    cources;

    constructor(Name,location,department,cources,){

       this.Name=Name;
       this.location=location;
       this.department=department;
       this.cources=cources;
}
shwoDetails(){
    console.log(this.Name,this.location,this.department,this.cources);
}
}
let parikramacollege = new CollegeDetails("Parikrama College", "Daund", "computer","BE");
 let Moderncollege = new CollegeDetails("Moden College","Pune", "Electrical", "BE");
 let SMPScollege = new CollegeDetails("SMPS College","Pune", "ENTC", "BE");
 let MITcollege = new CollegeDetails("MIT College","solapur", "Automobile", "BE");
 let singhadCollege = new CollegeDetails("singhad  College","Pune", "MBA", "BE");

 parikramacollege.shwoDetails();
 Moderncollege.shwoDetails();
 SMPScollege.shwoDetails();
 MITcollege.shwoDetails();
 singhadCollege.shwoDetails();
//  console.log(collegetwo);
//  console.log(collegethree);
// console.log(collegefour);
// console.log(Collegefive);
// HeroHonda.shwoDetails();
// Activa.shwoDetails();



console.log(`3)-------------- traverse object with one argument...---------------------------`)

function traverseObject(allCollege){
        for (const key in allCollege) {
             if (allCollege.hasOwnProperty.call(allCollege, key)) {
                const element = allCollege[key];
                console.log(`${key} = ${element}`);
             }
        }
     }
     traverseObject(parikramacollege);
     console.log("=============================");
     traverseObject(Moderncollege);
     console.log("=============================");
     traverseObject(SMPScollege);
     console.log("=============================");
     traverseObject( MITcollege);
     console.log("=============================");
     traverseObject(singhadCollege);











//function traverseObject(allCollege){
    //     for (const key in allCollege) {
    //         // if (allCollege.hasOwnProperty.call(allCollege, key)) {
    //             const element = allCollege[key];
    //             console.log(`${key} = ${element}`);
    //         // }
    //     }
    //  }
    //  traverseObject(kpbCollege);
    //  console.log("=============================");
    //  traverseObject(pccoecollege);
    //  console.log("=============================");
    //  traverseObject(jspmCollege);





// class Vehicle{
//     constructor(brand,fuelType,colour,wheeler,speed){
//     this.brand=brand;
//     this.fuelType=fuelType;
//     this.colour=colour;
//     this.wheeler=wheeler;
//     this.speed=speed;
//     }
// }
// let tataObject= new Vehicle("tata","disel","red",4,140);
// let marutiObject= new Vehicle("maruti","petrol","black", 4,150);
// let mahedraObject= new Vehicle("mahedra","disel","grey",4,130);
// let nissanObject= new Vehicle("nissan","disel","brwon",4,140);
// console.log(tataObject);
// console.log(marutiObject);
// console.log(mahedraObject);
// console.log(nissanObject);

// class College{
//     constructor(uidNumber,name,location,grade){
//         this.uidNumber=uidNumber;
//         this.name=name;
//         this.location=location;
//         this.grade=grade;
//     }
//         details(){
//         console.log(this.uidNumber,this.name,this.location,this.grade);
            
//         }  
        
//     }
// let kpbCollege=new College("uid100","kbpcollege","vashi","A+");
// let pccoecollege=new College("uid122","pccoe","pimpari","A+");
// let jspmCollege=new College("uid221","jspm","wakad","A+");
// kpbCollege.details();
// pccoecollege.details();
// jspmCollege.details();


// console.log("=============================");
//  function traverseObject(allCollege){
//     for (const key in allCollege) {
//         // if (allCollege.hasOwnProperty.call(allCollege, key)) {
//             const element = allCollege[key];
//             console.log(`${key} = ${element}`);
//         // }
//     }
//  }
//  traverseObject(kpbCollege);
//  console.log("=============================");
//  traverseObject(pccoecollege);
//  console.log("=============================");
//  traverseObject(jspmCollege);