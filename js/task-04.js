const counterValue = 0;
const value = document.querySelector('#value');
const counter = {
 counterValue,
increment(){
    this.counterValue += 1;
    },
    decrement() {
        this.counterValue -= 1;
}  , 
}
const decrementBtn = document.querySelector('.decrement');
const incrementBtn = document.querySelector('.increment');

decrementBtn.addEventListener('click', function () {
    counter.decrement();
    value.textContent = counter.counterValue;
});
incrementBtn.addEventListener('click', function () {
    counter.increment();
    value.textContent = counter.counterValue;
});