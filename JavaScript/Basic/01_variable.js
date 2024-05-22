const userId=1234;          //// not redecalre, not initialize multiple time 
let userName="Payal";    // not redecalre, initialize multiple time 
var userEmail="payal@gmail.com" //var perfer not to use due issue of block scope and funtion scope, redeclare 

userPassword="payal" //not to use

let userAddress; //undefine
//const userAddress2; // const declaration must be initialized 

console.log(userEmail)
console.table([userId,userName,userEmail,userPassword,userAddress])


