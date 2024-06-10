{/* <button class="box" id="gray"></button> */}


function grayClick(){
    const bgChnage=document.querySelector('body')
    bgChnage.style.backgroundColor="gray"
    bgChnage.style.color="white"
}

function whiteClick(){
        const bgChnage=document.querySelector('body')
    bgChnage.style.backgroundColor=" rgb(230, 230, 198)"
    bgChnage.style.color="black"
}

function blueClick(){
        const bgChnage=document.querySelector('body')
    bgChnage.style.backgroundColor="blue"
    bgChnage.style.color="white"
}

function yellowClick(){
    const bgChnage=document.querySelector('body')
bgChnage.style.backgroundColor="yellow"
bgChnage.style.color="black"
}


//==============  After update

const body=document.querySelector('body')
const buttons=document.querySelectorAll('.button')

// console.log(body);
// console.log(buttons);

buttons.forEach( (button)=>{
    // console.log(button);
    button.addEventListener('click',function(e){
            console.log(e);
            console.log(e.target);

            if(e.target.id==="grey"){
                body.style.backgroundColor=e.target.id
            }
            if(e.target.id==="white"){
                body.style.backgroundColor=e.target.id
            }
            if(e.target.id==="blue"){
                body.style.backgroundColor=e.target.id
            }
            if(e.target.id==="yellow"){
                body.style.backgroundColor=e.target.id
            }

    })
} )





