
import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form')
// console.log(formEl);
const LOCALSTORAGE_KEY = 'feedback-form-state';
// const formData = {};
const formData = localStorage.getItem(LOCALSTORAGE_KEY) ? JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) : {}

formEl.addEventListener('input', throttle(onFormInput,500));
formEl.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
    evt.preventDefault();
    formData[evt.target.name] = evt.target.value;

//      if (evt.target.value === '') {
//     alert('Все поля должны быть заполнены');
//     return;
//   }

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
    // console.log(formData);
}

function onFormSubmit(evt) {
    evt.preventDefault();
    const emailEl = formEl.email.value;
    const messageEl = formEl.message.value;

     if (emailEl === '' || messageEl === '') {
    alert('Все поля должны быть заполнены');
    return;
  }

    // console.log('email:', emailEl);
    // console.log('message:', messageEl);

     const formDataValue = {
    emailEl,
    messageEl,
  };
  console.log(formDataValue);

    formEl.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    
}

updateForm();

function updateForm() {
    if (localStorage.getItem(LOCALSTORAGE_KEY) === null) {
return
    }
    const savedForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    
    
      if (savedForm) {
        formEl.elements.email.value = savedForm.email || "";
        formEl.elements.message.value = savedForm.message || "";
    //  console.log(savedForm);
    };
}