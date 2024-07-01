// const promiseOne=new Promise(function(resolve,reject){
//     //Do as async task 
//     //DB calls, cryptography,network
//     setTimeout(function(){
//         console.log("Settimeout completed");
//     },1000)
//     resolve();  // Link with consumed
// })
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })


//============Second

// new Promise(function(resolve,reject){
//     console.log("Second function");
//     resolve()
// }).then(function(){
//     console.log("Consumed plan");
// })

//============ Third

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//     resolve({username:"Payal",email:"Payal@"})
//     },1000)
// })
// promiseThree.then(function(user){  //Object  
//         console.log(user);
// })


//================= Four

const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"payal",email:"Payal@"})
        }
        else{
            reject('Error: Something went wrong')
        }
    },1000)
})



//Chaining/Thenable
// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user  // pass to next then // Object
// })
// .then((username)=>{
//     console.log(username.username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=>{
//     console.log("done");
// })


//============ five

// const promiseFive= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false;
//         if(!error){
//             resolve({username:"payal",email:"Payal@"})
//         }
//         else{
//             reject('Error: Something went wrong')
//         }
//     },1000)
// })

// async function consumePromiseFour(){
//     try{

//     }
// }
