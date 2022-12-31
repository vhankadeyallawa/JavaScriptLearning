function swapvalue(value1 ,value2){
    console.log("Befor swap value", value1,value2);
    var temp = value1;

    value1=value2;
    value2=temp;
    console.log("After swap ",value1 ,value2);
}
swapvalue(100,200);