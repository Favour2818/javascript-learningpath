let btn = document.getElementById("btn")
let firstValue = document.getElementById("input1");

let secondValue = document.getElementById("input2");
let message = document.getElementById('message');

function showAnswer (value) {
    message.innerHTML = value
} 
btn.addEventListener("click", ()=>{
    let difference = secondValue.value - firstValue.value
    console.log(difference);
    if (!secondValue.value || !firstValue.value) {
        alert("fill all fields")
    }   else if ((difference % 5 == 0) && (difference % 3 == 0) ) {
        showAnswer("SOFTWARE DEVELOPER")
    }
        else if(difference % 3 == 0) {
        showAnswer("DEVELOPER")
    }   else if (difference % 5 == 0) {
        showAnswer("SOFTWARE")
    }   else {
        showAnswer("I AM A GENIUS")
    }
})
