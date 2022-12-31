
console.log(`---------------------------- Assignment -constructor function--------------------------\n`)

function Bank(bankname,location, ifsc,branchCode){
    this.bakname = bankname;
    this.location = location;
    this.ifsc = ifsc;
    this.branchCode=branchCode;
 }
 

 Bank.prototype.OpenTime= `5)\n The open of the sbiBank is "9 AM IST " and close time is "6 PM IST"`;
 
 Bank.prototype.CloseTime= `6)\n The open of the axisBank is "9 AM IST " and close time is "6 PM IST"`;
 

 Bank.prototype.Time= `7)\n The Bank Name is "YesBank is  Branch code is "2546" Open Time is" "9 AM IST "`;

 let sbiBank = new Bank("state Bank of India","pune", "SBI00002314",1256);
 let mahaBank = new Bank("Maharastra Bank ","Danud", "MAH00002314",125);
 let yesBank = new Bank("yesBank","Mumbai", "SBI00002314",2546);
 let axisBank = new Bank("Axis Bank ","Loni", "SBI00002314",1577);
 console.log(sbiBank);
 console.log(mahaBank);
 console.log(yesBank);
 console.log(axisBank);
 console.log(sbiBank.OpenTime);
 console.log(sbiBank.CloseTime);
 console.log(yesBank.Time);







