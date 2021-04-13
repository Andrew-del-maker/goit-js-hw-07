const input = document.querySelector('#validation-input');
input.addEventListener('blur', validation);
const passwordLength = input.dataset.length;
function validation() {
    if (input.value.length >= passwordLength) {
        input.classList.add('valid');
    } else 
        input.classList.add('invalid');
    
    if (input.classList.contains('valid') && input.value.length < passwordLength) {
        input.classList.replace('valid','invalid');
    } else if (input.classList.contains('invalid') && input.value.length >= passwordLength) {
        input.classList.replace('invalid','valid');
    }
}
    
