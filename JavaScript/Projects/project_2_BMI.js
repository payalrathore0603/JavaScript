

// const button=document.querySelector('.button')
// const measurement = document.querySelectorAll('.measurement')
// // console.log(measurement);
// // console.log(button);

// button.addEventListener('click',function(e){
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(measurement);
//     // formula: BMI=weight/height*height;
//     const calculation= measurement[1].value/(measurement[0].value * measurement[0].value)
//     // console.log(Math.round(calculation *10000));
//     document.querySelector('#result').textContent=Math.round(calculation *10000)

// })


const form=document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault() // Prevent by its deafult behaviour
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#result')

    //formula: BMI=(weight/ (height/height)*1000).tofixed(2)

    if(height===''||height<0|| isNaN(height)){
        result.innerHTML=`<span>Please Enter Valid Height ${height}</span>`
    }
    else if(weight===''||weight<0|| isNaN(weight)){
        result.innerHTML=`<span>Please Enter Valid weight ${weight}</span>`
    }
    else{
        const bmi=(weight/(height*height)*10000).toFixed(3)
        result.innerHTML=`<span>${bmi}</span>`
    }
})
