
const form=document.querySelector('form')
// const randomNumber=(Math.random() *10).toFixed(0)
const randomNumber=4;
const  previousNumber=[];
const   previousNumberHolder=document.querySelector('#previousNumberHolder')
const  guessingNumberHolder=document.querySelector('#guessingNumberHolder')


let guessingNumber=10
    form.addEventListener('submit',function(e){
        e.preventDefault();
        const  previousNumberHolder=document.querySelector('#previousNumberHolder')
        const  guessingNumberHolder=document.querySelector('#guessingNumberHolder')
        const userInput=parseInt(document.querySelector('#input').value )
        
        if(userInput===randomNumber){
            console.log("WOW, You Win the Game");
            return 0;
        }
        
        guessingNumber=guessingNumber-1;
        previousNumber.push(userInput)
        previousNumberHolder.innerHTML=`<span>Previous Nunmber : ${previousNumber}</span>`
        guessingNumberHolder.innerHTML=`<span>Guessing Remaining Number: ${guessingNumber}</span>`
    
    })
   


