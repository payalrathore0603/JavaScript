// Primitives

// 7 types : Number, String, Boolean, Symbol, null, undefine, BigInt

/*========= JavaScript is a dynamic language :which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them. 
In typeScript we declare explicitly as e.g let num:Number=123
*/

let numberID=123
let someString="wewwe"
let bolNum=true;
let numId1=Symbol("123")
let numId=Symbol("123")
const temprature=null;
let randomNum;
const bigIntdata =123456789098765432n

/*
console.log(typeof someString)
console.log(typeof numId)
console.log( numId)
console.log(typeof numId1)
console.log( numId1)
console.log( numId1=== numId) //flase return unqiue value
console.log(typeof temprature)  // null typeof Object
console.log(typeof randomNum)  // undefine
*/

// Non-Primitives (Reference)
// Array, object, functons

let juice=["lasi", "mango", "masumbhi", "pinapples"]

let menu={
    item1:{
        name:"mango",
        price:120
    },
    item2:{
        name:"lasi",
        price:160
    },
    item3:{
        name:"masumbhi",
        price:100
    }

}

function myfun(){
    //stmt
}

/*
// All these are function Object
console.log(typeof juice)
console.log(typeof menu);
console.log(typeof menu.item1);
// this is a string
console.log(typeof menu.item1.name);
console.log(typeof myfun)  // function

*/

// +++++++++++++++++++++++++++++ Stack and heap +++++++++++++++++++++++++++++++

// shake and jucie are store there value in stack
// shake value COPY into juice
let shake="mango"
let juice1=shake;


// menu1 value store in heap where as in stack they store refernce of heap where value store
let menu1={
    item1:{
        name:"mango",
        price:120
    },
    item2:{
        name:"lasi",
        price:160
    },
    item3:{
        name:"masumbhi",
        price:100
    }

}

let newMenu=menu1;


menu1.item1.name="Orange"
console.log(menu1)  // value update in both the palce because they store refernce 
console.log(newMenu)


