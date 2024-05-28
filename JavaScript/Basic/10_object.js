// Singleton : Object create via constructor 
// Object.create

// Literals : Normal

// const JSuser={}  // Object as simple it is

const mySym=Symbol("Key")
const JSuser={
    name: "Payal",  // by default name treated as String
    "address":"Bhopal",
    [mySym]:"MyKey1", // [] is neceassary otherwise it will trated as string
    mail: "payal@gmail.com",
    mobile:123456,
    lastLoginDay:["Monday","Tuesday","Wednesday"]
}

/*
console.log(JSuser.mail) 
console.log(JSuser.address);
console.log(JSuser["address"]) // generally use this

*/
/*
JSuser.mail="payal@microsoft.com"
console.log(JSuser)

//======================= FREEZEEEE ================

Object.freeze(JSuser);
JSuser.mail="payal@chatgpt.com"
console.log(JSuser)
*/
//====================== Symbol ==============
 /*
// const mySym=Symbol("Key") // created on top
console.log(JSuser.mySym)
console.log(JSuser[mySym])   // not into ""

*/
// ================== Funtion in Object =======

/*
JSuser.greeting=function(){
    console.log("Hello JS Users")
}

console.log(JSuser.greeting) // print funtion only
console.log(JSuser.greeting()) 

*/

//============= This in function

JSuser.greeting=function(){
    console.log(`Hello JS Users ${this.name}`)
}

console.log(JSuser.greeting) // print funtion only
console.log(JSuser.greeting()) 










