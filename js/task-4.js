
const loginForm = document.querySelector('.login-form');

const loginInputs = loginForm.elements;

loginForm.addEventListener('submit', (e) => {

e.preventDefault();


const emptyFields = Array.from(loginInputs).filter((input) => input.value.trim() === '');

if (emptyFields.length > 0) {
    alert('All form fields must be filled in');
    return;
}

const formData = {};
Array.from(loginInputs).forEach((input) => {
    formData[input.name] = input.value.trim();
});

console.log(formData);

loginForm.reset();
});
