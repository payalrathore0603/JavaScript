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

// const promiseFour= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username:"payal",email:"Payal@"})
//         }
//         else{
//             reject('Error: Something went wrong')
//         }
//     },1000)
// })



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
//         let error=true;
//         if(!error){
//             resolve({username:"js",email:"Payal@"})
//         }
//         else{
//             reject('Error: Something went wrong')
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//    try {
//     const response=await promiseFive // PromiseFive is object not a funtion
//     console.log(response);
//    } 
//    catch (error) {
//     console.log("Error: In JS");
//    }
// }


// consumePromiseFive()



//========== Await: Using await pauses the execution of its surrounding async function until the promise is settled (that is, fulfilled or rejected)
// async function getAllUsers(){
//  try {
//     const response=await fetch("https://jsonplaceholder.typicode.com/users") // return Promise  // Await it will take time 
//     console.log(typeof response); //object
//     const data=await response.json() // convert into json
//     console.log(data);
//  } catch (error) {
//     console.log("E:error");
//  }

// }

// getAllUsers()


async function getAllUsers(){
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(typeof data);
    })
   .catch((error)=>{
    console.log(error);
   })
}


getAllUsers()

