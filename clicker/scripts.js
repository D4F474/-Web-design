let btn = document.getElementById("btn");
let btnReset = document.getElementById("btn-reset");
let btnDecrease = document.getElementById("btn-decrease");
let count = 0;
let txt = document.getElementById("txt");
btn.addEventListener("click", function() {
    count++
    txt.textContent = count
})
btnReset.addEventListener("click", function() {
    count=0;
    txt.textContent = count
})
btnDecrease.addEventListener("click", function() {
    count--
    txt.textContent = count
})