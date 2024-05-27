// Date

let myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())
// console.log(typeof myDate)             //Object

// let myCreatedDate=new Date(2024,0,4)
// let myCreatedDate=new Date(2024,0,4,5,9,0)
// console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())
// let myCreatedDate=new Date("2023-01-27")   //Fri Jan 27 2023
// console.log(myCreatedDate.toDateString())
let myCreatedDate=new Date("01-05-2024")   //Fri Jan 05 2024
// console.log(myCreatedDate.toDateString())


//+++++++++++++++++++++Time Stamp: use when Quiz happen and poll
let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(Date.now())
// console.log(Math.floor(Date.now()/1000)) //convert mili sec into sec

myDate.toLocaleDateString('default',{
    weekday:"narrow"
})

console.log(myDate)












