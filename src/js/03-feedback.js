
import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form')
// console.log(formEl);
const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};

formEl.addEventListener('input', throttle(onFormInput,500));
formEl.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
    evt.preventDefault();
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
}

function onFormSubmit(evt) {
    evt.preventDefault();
    const emailEl = formEl.email.value;
    const messageEl = formEl.message.value;

    console.log('email:', emailEl);
    console.log('message:', messageEl);

    formEl.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    
}

updateForm();

function updateForm() {
    if (localStorage.getItem(LOCALSTORAGE_KEY) === null) {
return
    }
    const savedForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
      formEl.elements.email.value = savedForm.email;
      formEl.elements.message.value = savedForm.message;
}