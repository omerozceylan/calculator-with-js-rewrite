const numberContainer = document.querySelector(".container-numbers");
const outPut = document.querySelector(".container-up-side-inner");
const operatorButtons = document.querySelectorAll(".operator-button");
const userOperators = document.querySelectorAll(".user-operators");

let text = "";

for (let i = 9; i > 0; i--) {
  let button = document.createElement("button");
  button.classList.add("number-button");
  button.innerHTML = i;
  numberContainer.appendChild(button);
  button.addEventListener("click", addNumberToText);
}
const zeroButton = document.querySelector("#zeroButton");

operatorButtons.forEach((element) => {
  element.addEventListener("click", addOperatorToText);
});

zeroButton.addEventListener("click", addNumberToText);



function addNumberToText() {
  let clickedNumber = this.innerHTML
  text += clickedNumber;
  printNumber()
}

function addOperatorToText(){
  let opArr = ['/', '*', '-', '+']
  if(!opArr.includes(text.charAt(text.length-1))){
    text += this.innerHTML
    printNumber()
  } 
}

function printNumber(){
  outPut.innerHTML = text;
}

function scrollToRight() {
  outPut.scroll(outPut.scrollWidth, 0);
}

































// let finalResult='0'

// let isOperatorClicked = false
// operatorButtons.forEach((element)=>{
//     element.addEventListener('click',function(){

//         let op = this.innerHTML
//         if(!isOperatorClicked==true){
//             switch(op){
//                 case '=':
//                 case 'C':
//                     break
//                 case '*':
//                 case '/':
//                 case '+':
//                 case '-':
//                     finalResult+=op
//                     outPut.innerHTML=finalResult
//                     outPut.scroll(outPut.scrollWidth,0)
//                     isOperatorClicked=true
//                     break
//             }
//         }
//         console.log(op)
//         console.log(finalResult)

//     })
// })

// let isStartWithZero=true

// function takeInput(){
//     isOperatorClicked=false
//     let clickedButton = this.innerHTML
//     if(finalResult=='0'&& clickedButton=='0'){
//         console.log('hey');
//     }else{
//         finalResult = finalResult+clickedButton
//                 if(isStartWithZero==true){
//                     finalResult=finalResult.slice(1,finalResult.length)
//                     console.log(finalResult)
//                     isStartWithZero=false
//                     outPut.innerHTML=finalResult
//                     outPut.scroll(outPut.scrollWidth,0)
//                 }else{
//                     console.log(clickedButton)
//                     console.log(finalResult);
//                 }
//                 outPut.innerHTML=finalResult

//     }
//     }

// let cButton = document.querySelector('#cButton')
// cButton.addEventListener('click', function(){
//     finalResult = '0'
//     isStartWithZero = true
//     outPut.innerHTML='0'
//     if(alertDiv.firstChild){
//         alertDiv.removeChild(alertDiv.firstChild)

//     }
// })

// let equalButton = document.querySelector('#equalButton')
// let final
// let lastCharIsOperator
// equalButton.addEventListener('click',function(){
//     final = eval(finalResult)
//     outPut.innerHTML=final
//     finalResult = final
//     console.log(final)
// })

// let alertTitle = document.createElement('h1')
// alertTitle.innerText = "Useless button :) I'm sorry."
// let alertDiv = document.querySelector('.text-container')

// let useless = document.querySelectorAll('.useless')
// useless.forEach((element)=>{
//     element.addEventListener('click',function(){
//         let theButton = this.innerHTML
//         if(theButton=="%"){
//             let dvidedHundred = finalResult/100
//             finalResult=dvidedHundred
//             outPut.innerHTML = finalResult
//             return
//         }
//         alertDiv.appendChild(alertTitle)
//     })
// })

// outPut.scroll(0,outPut.scrollWidth)
