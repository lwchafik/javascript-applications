// Get the buttons
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const counterlabel = document.getElementById("counterlabel");

//setting the counter to 0
let count = 0;

//handling click functions
increaseBtn.onclick = function(){
    count++;
    counterlabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    counterlabel.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    counterlabel.textContent = count;
}