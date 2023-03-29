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

