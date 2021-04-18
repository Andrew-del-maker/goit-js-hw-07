const input = document.querySelector('#validation-input');
input.addEventListener('blur', validation);
const passwordLength = input.dataset.length;
function validation() {
    if (input.value.length >= passwordLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else { 
    input.classList.remove('valid');
    input.classList.add('invalid');
}
    
}
    
