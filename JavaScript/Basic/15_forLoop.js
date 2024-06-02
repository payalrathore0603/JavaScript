// ============= for of loop

const myArray=[1,2,3,4]
for (const i of myArray) {
    // console.log(i);
}

// Object: for of is not apply for Object

// const myObject={
//     "IN":"INDIA",
//     "USA":"Unitated state of America"
// }

// for (const key of myObject) {
//     console.log(key);
// }


// ============= Map

const myMap=new Map();

myMap.set("IN","INDIA")
myMap.set("USA","Unitate State Of AMERICA")

// for (const key of myMap) {           //[ 'IN', 'INDIA' ]
//     console.log(key);
// }
for (const [key,value] of myMap) {
    // console.log(` key is ${key} and ${value}`); // key is IN and INDIA
}

// for IN : Apply in both object and array, But in array it gives key only And not for map also because map is not iterable

const myObject={
    "IN":"INDIA",
    "USA":"Unitated state of America"
}

 
// for (const key in myObject) {             //IN USA
//   console.log(key);
// }

for (const key in myObject) {               //IN - INDIA
  console.log(key ,"-",myObject[key]);
}


