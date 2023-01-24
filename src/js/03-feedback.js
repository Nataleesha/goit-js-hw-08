import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const feedbackFormEl = document.querySelector('.feedback-form');

initForm();

function onFormDataUpdate(event) {
  let savedEntries = localStorage.getItem(LOCALSTORAGE_KEY);
  savedEntries = savedEntries ? JSON.parse(savedEntries) : {};
  savedEntries[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(savedEntries));
}

feedbackFormEl.addEventListener('input', throttle(onFormDataUpdate, 500));

function initForm() {
  let savedEntries = localStorage.getItem(LOCALSTORAGE_KEY);
  if (savedEntries) {
    savedEntries = JSON.parse(savedEntries);
    Object.entries(savedEntries).forEach(([name, value]) => {
      feedbackFormEl.elements[name].value = value;
    });
  }
}

feedbackFormEl.addEventListener('submit', event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  localStorage.removeItem(LOCALSTORAGE_KEY);
  feedbackFormEl.reset();
});
