// document.querySelector('#nature').onclick=function (){
//     alert("Heelloo Nature")
// }


// document.querySelector('.images').addEventListener('click',function(e){
//     // console.log(e.target);
//     console.log(e.target.parentNode);
// },false)


// -------------------Two types of capturing on 3rd parameter: 
// 1. false: Bydeafult, Bubbling propogation 
// 2. true:  Capturing propogation

//examples:

// document.querySelector('.images').addEventListener('click',function(e){
//     // console.log(e.target);
//     // console.log(e.target.parentNode);
//     console.log("Clicked on images");
// })


// document.querySelector('#flower').addEventListener('click',function(e){
//     // console.log(e.target);
//     console.log("Clicked on flower");
//     //e.stopPropagation()
// },true)


//------------ Event Propogation

// document.querySelector('#google').addEventListener('click',function(e){
//     // console.log(e.target);
//     console.log("Clicked on google");
//     e.preventDefault()
// })


//--------------- Project Delete Image



document.querySelector('.images').addEventListener('click',function(e){
    // console.log(e.target.parentNode);
    // const temp= e.target.parentNode
    // temp.remove();  // Sometime It remove all if you click on li, bcoz li parent is ul

    console.log(e.target.tagName);
    if (e.target.tagName==="IMG") {
        const temp= e.target.parentNode
    temp.remove();
    }
})



