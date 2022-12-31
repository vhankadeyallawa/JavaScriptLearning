const baby= {
    "name":"Arwi",
   "Gender": "Female",
    "age": 5,
   git: function(){
   console.log(`baby details`);
 
   }
}
   console.log(baby);
   //accesing  dot  notation
   const b= baby.name;
   console.log(b);

   //accesing  bracket  notation
   const babyname= baby["name"];
   console.log(babyname);
   // function from object
   baby.git();

   //adding property
   baby.month="june";
   console.log(baby);

   //update
   baby.name="avira";
   console.log(baby);

   //delete
   delete baby.Gender;
   console.log(baby);

   baby.Gender="female";
   console.log(baby);

   //nested
    baby.Food={
    name1:"fruits",
    name2:"milk",
    name3:"Bisuits",
    add: function(){
        return this.name1+this.name2+this.name3;
        console.log(add);
    }

 }
console.log(baby);
