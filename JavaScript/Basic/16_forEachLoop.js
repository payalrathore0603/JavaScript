// =============== for Each loop

const myArray=[1,2,3,4,5]

// myArray.forEach( (item,index,arr)=>{console.log(item,index,arr);})


const myArrayOfObject=[
    { 
        1:"apple",
        2:"mango"
    },
    {
        1:"mango1",
        2:"apple1"
    }
]

// myArrayOfObject.forEach( (item)=>{console.log(item)})   //{ '1': 'apple', '2': 'mango' }
myArrayOfObject.forEach( (item)=>{console.log(item[1])})   //apple mango1

