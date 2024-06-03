// =============== Map

// const myMap=[12,12,23,45,67]

// const newMap=myMap.map( (mp)=> mp*10 );

// console.log(newMap);


//================ chaining

const myMap=[12,12,23,45,67,2]

const newMap=myMap.map( (mp)=> mp*10 )
                    .map( (mp)=>{return mp+1} )
                    .filter( (fl)=>{ return fl>100} );

console.log(newMap);



