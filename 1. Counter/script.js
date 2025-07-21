const increaseButton = document.getElementById("increaseButton");

const decreaseButton = document.getElementById("decreaseButton");

const resetButton = document.getElementById("resetButton");

let displayInput = document.getElementById("input-display");

let counter = 0;
let limit;
increaseButton.addEventListener("click" ,function(){
if (counter >= 0 && counter < 10) {
  counter++;
displayInput.innerHTML = counter;

}else{
 limit = "Limit Exceed"
  displayInput.innerHTML = limit;

}
})

decreaseButton.addEventListener("click",function(){
if (counter >= 1) {
  counter--;
}
  displayInput.innerHTML = counter;
})

resetButton.addEventListener("click",function(){
  counter = 0;
  displayInput.innerHTML = counter;
})