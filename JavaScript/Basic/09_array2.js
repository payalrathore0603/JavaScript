// Array_2

const marvelsHero=["thor","Ironman"]
const dcHeros=["superMan", "SpiderMan","flash"]

//=================== push : add same data as it is in original data
// marvelsHero.push(dcHeros)   //marvel is added array and it will look like array of array
// console.log(marvelsHero);


//================================ concat : add and return new array
// let allHeros=marvelsHero.concat(dcHeros)
// console.log(allHeros)

//==================================concat Spread : (eg: kanch ka glass)

// const allHeros=[...marvelsHero,...dcHeros]  // add as you want
// console.log(allHeros)


//================= flat : convert in to 1D array as per value you given (infinity for all)

const newArray=[1,3,4,[6,7,8,7],[67,7],4,5,6]

const realArray=newArray.flat(Infinity)
// console.log(realArray)

//======================from : convert string into Array

/*
// const name="payal"
console.log(Array.isArray(name));
console.log(Array.from(name)) // not change in original array
let new_array=Array.from(name)
console.log(new_array);
*/

console.log(Array.from({name:"payal"}))   // It will return [] don'tknow whom it will cnvert as array

//======================== of : take all value and make it in array
let score1=100;
let score2=100;
let score3=100;

console.log(Array.of(score1,score2,score3))
