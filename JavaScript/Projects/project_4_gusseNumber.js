
// const form=document.querySelector('form')
// // const randomNumber=(Math.random() *10).toFixed(0)
// const randomNumber=4;
// const  previousNumber=[];
// const   previousNumberHolder=document.querySelector('#previousNumberHolder')
// const  guessingNumberHolder=document.querySelector('#guessingNumberHolder')


// let guessingNumber=10
//     form.addEventListener('submit',function(e){
//         e.preventDefault();
//         const  previousNumberHolder=document.querySelector('#previousNumberHolder')
//         const  guessingNumberHolder=document.querySelector('#guessingNumberHolder')
//         const userInput=parseInt(document.querySelector('#input').value )

//         if(userInput===randomNumber){
//             console.log("WOW, You Win the Game");
//             return 0;
//         }

//         guessingNumber=guessingNumber-1;
//         previousNumber.push(userInput)
//         previousNumberHolder.innerHTML=`<span>Previous Nunmber : ${previousNumber}</span>`
//         guessingNumberHolder.innerHTML=`<span>Guessing Remaining Number: ${guessingNumber}</span>`

//     })

let randomNumber = parseInt(Math.random() * 100 + 1)
let userInput = document.querySelector('#userInput')
const submit = document.querySelector('#sbt')
let gussessSlot = document.querySelector('#previousNumberHolder')
let remaining = document.querySelector('#guessingNumberHolder')
const lowOrHi = document.querySelector('#lowOrHi')
const startOver = document.querySelector('.resultPara')

const p = document.createElement('p')

let previousArray = []
let numGuess = 10;


let playGame = true;


if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()   // don't take default action, don't send data on server rather than follow below steps
        const guess = parseInt(userInput.value)
        validation(guess)

    })
}

function validation(guess) {
    if (isNaN(guess)) {
        alert("Enter valid number")
    }
    else if (guess < 1) {
        alert("Please enter a number more than 1")
    }
    else if (guess > 100) {
        alert("Please enter a number less than 100")
    } else {
        previousArray.push(guess)
        if (numGuess <=0 ) {
            displayGuess(guess)
            displayMessage(`Game Over, Random Number was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }


    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("you guessed it  right")
        endGame()
    } else if (guess < randomNumber) {
        displayMessage("Number is too small")
    }
    else if (guess > randomNumber) {
        displayMessage("Number is too High")
    }

}

function displayGuess(guess) {
    userInput.value=''
    gussessSlot.innerHTML += `${guess}, `
    remaining.innerHTML =`${--numGuess}`
}


function displayMessage(message) {
    lowOrHi.innerHTML=`${message}`
}

function endGame() {
    userInput.value=""
    userInput.setAttribute('disabled', "")
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame=false;
    newGame()

}
function newGame() {
  const newGameButton= document.querySelector('#newGame')
  console.log(newGameButton);
  newGameButton.addEventListener('click',function(e){
    e.preventDefault()
    userInput.removeAttribute('disabled')
    randomNumber= parseInt(Math.random() * 100 + 1)
    previousArray=[]
    numGuess=10;
    gussessSlot.innerHTML=''
    remaining.innerHTML=''
    startOver.removeChild(p)
    lowOrHi.innerHTML=''
    playGame=true;
  })
}








