import throttle from 'lodash.throttle';

// variables

const form = document.querySelector('.feedback-form');
const button = document.querySelector('[type="submit"]');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

let data = { email: '', message: '' };

// Listeners

form.addEventListener(
  'input',
  throttle(event => {
    //   console.log(event.target.value);
    data[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(data);
  localStorage.removeItem('feedback-form-state');
  data.email = '';
  data.message = '';
  event.currentTarget.reset();
});

// checkStorage
const currentData = localStorage.getItem('feedback-form-state');
if (currentData) {
  email.value = JSON.parse(currentData).email;
  data.email = JSON.parse(currentData).email;

  message.value = JSON.parse(currentData).message;
  data.message = JSON.parse(currentData).message;
}
