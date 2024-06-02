//=================== falsy value

// false, 0, 0, BigInt 0n, "",null,undefined,NAN

// if(""){
//     console.log("false");
// }



//==================== Truth Value
"0","false"," ",[],{},function(){}

// if(" "){
//     console.log("true");
// }


//====================== IF

const emptyArray=[]

// if(emptyArray){
//     console.log("True")
// }

// if(emptyArray.length==0){
//     console.log("True")
// }

const emptyObject={}

// if(Object.keys(emptyObject).length==0){
//     console.log("empty Object");
// }


// Nulllish coalesing operator (??): null undefine

let val;
// val=5??10 //5
// val=null?? 10
// val=undefined??40
val=null??50??40  // first come  50
// console.log(val)


//=================== Ternary operator
// condition? true:false

let teaPrice=80;

teaPrice>=90?console.log("we can party hard"):console.log("We dont have budget");;


// =========== Break (Out from loop) and Continue (skip that condition)