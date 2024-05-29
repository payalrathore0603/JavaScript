// Singleton object

// const myObj=new Object()
const myObj={}

myObj.email="hello@developer"
myObj.name="helli"
// console.log(myObj)

//================= Object having obj
const regularUsers={
    eamil:"hello@gmail.com",
    fullName:{
        name:"hello",
        last:"lastName"
    }
}

// console.log(regularUsers.fullName.name)

//=========================== assign Object

const obj1={1:"a",2:"b"}
const obj2={2:"a",2:"b"}
const obj3={3:"a",2:"b"}

// const obj4={obj1,obj2,obj3}  // return object of object

// const obj4=Object.assign(obj1,obj2,obj3) // obj1 target

// const obj4=Object.assign({},obj1,obj2,obj3) //{} target and other source 
// console.log(obj4)  

//============== spread
// const obj4={...obj1,...obj2,...obj3} 
// console.log(obj4) 

//=============== Data generally we get

const data1=[
    {
        id:1,
        name:"hello"
    }
]

// console.log(data)

//====== keys and values in array

// console.log(data[1].name);
console.log(Object.keys(data1))
console.log(Object.values(data1))
console.log(Object.entries(data1))






