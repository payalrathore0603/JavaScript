// ============ for each : return nothing

const arry1=[1,2,3,4,5,6,7,8]

arry1.push(9)
// console.log(arry1);

// const values= arry1.forEach( (item)=>{ 
//     return item
//  } )
//  console.log(values);   // undefine, nohing will return

// =============== filter : return value 
const values = arry1.filter((item)=>  item<4 )
// console.log(values);


const valuesWithOutReturn = arry1.filter((item)=>  {item<4} )
// console.log(valuesWithOutReturn);   // [], beacuse return is neceassary with {}


const valuesWithReturn = arry1.filter((item)=> {return item<4 } )
// console.log(valuesWithReturn);


//================= Real example

const books=[
    {name:"book1",author:"book1",publish:2001,gener:"History"},
    {name:"book2",author:"book2",publish:2004,gener:"Fiction"},
    {name:"book3",author:"book3",publish:2003,gener:"Sience"},
    {name:"book4",author:"book4",publish:2002,gener:"Histry"}
]


const filterData=books.filter( (book)=>(book.gener="History" && book.publish>2002) )
console.log(filterData);




