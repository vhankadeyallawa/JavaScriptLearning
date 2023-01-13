

 arrayFilterVehicle.forEach( (element) => {
console.log(element.company, element.price);
 } );


 console.log(arrayFilter);
const arrayFilterEven =arrayOfNum.filter( (currentValue, index)=> {
    return currentValue%2==0; // 0
})

class Vehicle {
    constructor(company,model,fuel,drive,price){
        this.company=company;
        this.model=model;
        this.fuel=fuel;
        this.drive=drive;
        this.price=price;
    }
}
let audiA3 = new Vehicle("Audi","A3","Petrol","Four Wheel Drive",8000000);
let audiQ3= new Vehicle("Audi","Q3","Diseal","Two Wheel Drive",4900000);
let mahindra = new Vehicle("Mahindra","Thar","Petrol","Four Wheel Drive",2000000);
let honda =new Vehicle("Honda","Unicorn","Petrol","Two Wheeler",125000);
let hero =new Vehicle("Hero","Splender","Petrol","Two Wheeler",85000);

console.log("====== Filter out vehicles whose prices are greater than 200000=======");
 const arrayOfVehicles = [ audiA3, audiQ3, mahindra, honda, hero];
 const arrayFilterVehicle = arrayOfVehicles.filter( (vehicle) =>{
    return vehicle.price > 200000;
 } );
 arrayFilterVehicle.forEach( (element) => {
console.log(element.company, element.price);
 } );


 class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id;
        this.emp_name;
        this.emp_dept;
        this.emp_salary;
        this.emp_company;
    }
}
const emp_anil =new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha =new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi =new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali =new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika =new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny =new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi =new Employee(99,"Mahesh","HR",85000,"Infy");

const arrayOfEmployee =[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

 const arrayFilterEmployee = arrayOfEmployee.filter( (Employee) =>{
    return Employee.name > 400000;
 } );
 arrayFilterEmplotee.forEach( (element) => {
console.log(element.company, elememt.name);
 } );

