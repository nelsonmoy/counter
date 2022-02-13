
var decreaseBtn = document.getElementById('decrease-btn');
var resetBtn = document.getElementById('reset-btn');
var increaseBtn = document.getElementById('increase-btn');
var counter = document.getElementById('counter');

var c = 0;

function setCounter(newCounter) {
    counter.innerHTML = newCounter;
}

decreaseBtn.addEventListener('click', function() {
    if (c > 0)
        c -= 1;
    setCounter(c)
});

resetBtn.addEventListener('click', function(){
    setCounter(0);
})

increaseBtn.addEventListener('click', function (){
    c += 1;
    setCounter(c);
});