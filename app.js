const numberContainer = document.querySelector(".container-numbers");
const outPut = document.querySelector(".container-up-side-inner");
const operatorButtons = document.querySelectorAll(".operator-button");
const userOperators = document.querySelectorAll(".user-operators");
const allOps = ["/", "*", "-", "+", "C", "?", "%", "="]
const opArr = ["/", "*", "-", "+"];
const opNotForPrint = ["C", "?", "%", "="];
let text = "0";
printText()

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
  let clickedNumber = this.innerHTML;
  if(text.charAt(0)==0){
    text = text.slice(1, text.length-1);
    text += clickedNumber
  }else{
    text += clickedNumber;
  }
  printText();
  scrollToRight();
}

function isLastCharOp(){
  let lastChar =  text.charAt(text.length - 1)
  if (allOps.includes(lastChar)){
    return true
  }else {
    return false
  }
}

function anyOpInText(){
  let count = 0
  for( let i=0; i<allOps.length; i++ ){
    let op = allOps[i]
    let anyOpInText = text.indexOf(op)
    if(anyOpInText>=0){
      count++
    }
  }
  if(count>0){
    return true
  }else{
    return false
  }
}

// let testButton = document.querySelector('.test')

// testButton.addEventListener('click', anyOpInText)

function addOperatorToText() {
  if (text == "") return;
  if (
    !isLastCharOp() &&
    !opNotForPrint.includes(this.innerHTML)
  ) {
    text += this.innerHTML;
  }
  printText();
  scrollToRight();
}

function printText() {
  outPut.innerHTML = text;
}

function scrollToRight() {
  outPut.scroll(outPut.scrollWidth, 0);
}

userOperators.forEach((button) => {
  button.addEventListener("click", handleUserOperations);
});

function handleUserOperations() {
  let opButton = this.innerHTML;
  switch (opButton) {
    case "C":
      clearText();
      break;
    case "?":
      alert("Useless Button i'm sorry :)");
      break;
    case "=":
      callculate(text);
      break;
    case "%":
      divideHundred()
      break;

  }
}

function divideHundred(){
  if(anyOpInText()) return
  let result = text/100
  text = result.toString()
  printText()
}

function clearText() {
  text = "0";
  printText();
}

function callculate() {
  const result = eval(text);
  text = result.toString();
  printText();
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


