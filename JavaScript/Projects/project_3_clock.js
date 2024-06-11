// const clock=document.querySelector("#clock")
// console.log(clock);
// const date=new Date()
// clock.innerHTML=`<span>${date.toString()}</span>`
// clock.innerHTML=`<span>${date.toLocaleString()}</span>`


// ========== setInterval( function(){},1000) //time mile second


setInterval( function(){
    const clock=document.querySelector("#clock")
    const date=new Date()
    clock.innerHTML=`<span>${date.toLocaleString()}</span>`
},1000)