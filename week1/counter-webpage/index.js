let displayValue = document.querySelector('.three')
let resetBtn = document.getElementById('re')
let increaseBtn = document.getElementById('in')
let decreaseBtn = document.getElementById('de')


resetBtn.addEventListener('click', ()=>{
    displayValue.innerHTML = '0'
})

increaseBtn.addEventListener('click', ()=>{
    displayValue.innerHTML++
})

decreaseBtn.addEventListener('click', ()=>{
    displayValue.innerHTML--
})
