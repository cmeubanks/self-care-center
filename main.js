/* global variables */
var currentMessage

/* html element selectors */
var imageView = document.querySelector('#image-view');
var messageView = document.querySelector('#message-view');
var displayMessage = document.querySelector('.display-message');
var mainPage = document.querySelector('.main-page');
var formPage = document.querySelector('.form-page');
var userMessage = document.querySelector('#user-message');
var buttonSection = document.querySelector('.button-section');
var mainTitle = document.querySelector('h2');

/* button selectors */
var radioBtn = document.querySelectorAll('input[name="radio"]');
var receiveBtn = document.querySelector('.receive-button');
var addMessageBtn = document.querySelector('.add-message');
var submitBtn = document.querySelector('.submit-button');

/* event listeners */
receiveBtn.addEventListener('click', showMessage);
addMessageBtn.addEventListener('click', showFormPage)
submitBtn.addEventListener('click', createMessage);

/*functions*/
function changeView(view1, view2, view3, view4) {
view1.classList.add('hidden');
view2.classList.remove('hidden');
view3.classList.add('hidden');
view4.classList.remove('hidden');
}

function getRandomNumber(array) {
  return Math.floor(Math.random() * Math.floor(array.length));
};

function checkRadioBtn() {
  var checkedBtn
  for(var i = 0; i < radioBtn.length; i++){
    if(radioBtn[i].checked){
      checkedBtn = radioBtn[i].value
    }
  }
  return checkedBtn
};

function resetButtons() {
  for(var i = 0; i < radioBtn.length; i++){
    if(radioBtn[i].checked){
      radioBtn[i].checked = false;
    }
  }
};

function generateMessages(array) {
  currentMessage = new Message(array[getRandomNumber(array)])
  displayMessage.innerText = currentMessage.message;
};

function showMessage() {
  var button = checkRadioBtn();
  if(button === 'mantra'){
  generateMessages(mantras)
  } else if(button === 'affirmation') {
  generateMessages(affirmations)
  } else {
    return alert('Select message type!')
  }
  changeView(imageView, messageView);
};

function showFormPage() {
  userMessage.value = '';
  resetButtons();
  changeView(mainPage, formPage, messageView);
};

function updateMessageValue(array) {
  currentMessage = new Message(userMessage.value)
  displayMessage.innerText = currentMessage.message
  array.push(currentMessage.message);
  resetButtons();
};

function createMessage() {
  event.preventDefault();
  var button = checkRadioBtn();
  if(button === 'mantra'){
    updateMessageValue(mantras);
  } else if (button === 'affirmation') {
    updateMessageValue(affirmations);
  } else {
    return alert('Select message type!')
  }
  changeView(formPage, mainPage, formPage, messageView);
  event.preventDefault();
};
