let num=22;

// console.log(typeof num);
//String(num)  --> will not work

num=String(num)
// console.log(typeof num); 


// ==================case:1

// let someString="23"
// someString=Number(someString)
// console.log(typeof someString);

//===================case:2
// let someString="23abc"
// someString=Number(someString)
// console.log(typeof someString); //number
// console.log(someString);        //NAN not a number

//==================case:3

// let someString=null
// someString=Number(someString)
// console.log(typeof someString);
// console.log(someString);    //0


//=============case:4

let bolNum=true;
bolNum  = Number(bolNum)
console.log(typeof bolNum);
console.log(bolNum);


 