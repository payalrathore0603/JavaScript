//====================== Function

function myFun() {
    console.log("Hello");
}

// const addTwo=(a,b)=>{
//     return a+b;
// }


//==================== Implici-
// const addTwo=(a,b)=>(a+b)

// console.log(addTwo(4,5))

//============== iife: Immediately invoked fuction expression (Remove Global pollution)

// function myFunIifee(){
//     console.log("DB connect")
// }

// myFunIifee()

(function myFunIifee(){
    console.log(`DB connect`)
})();


(function myFunIifee2(){
    console.log(`DB connect`)
})()






// Implcitly invoked function